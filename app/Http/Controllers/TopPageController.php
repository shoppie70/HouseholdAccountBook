<?php

namespace App\Http\Controllers;

use App\Models\Household;
use App\Models\HouseholdCategory;
use App\Models\PaymentType;
use App\UseCases\Household\GetCreditCardExpenditureAction;
use App\UseCases\Household\GetHouseholdDataByExpenditureAction;
use App\UseCases\Household\GetHouseholdDataByIncomeAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TopPageController extends Controller
{
    public function index()
    {
        $expenditureCategories = HouseholdCategory::query()
            ->expenditure()
            ->pluck('name', 'id');

        $inComeCategories = HouseholdCategory::query()
            ->income()
            ->pluck('name', 'id');

        $paymentTypes = PaymentType::query()
            ->get()
            ->toArray();

        $households = Household::query()
            ->with([
                'category',
                'paymentType',
            ])
            ->orderBy('created_at', 'desc')
            ->get();

        $householdByExpenditure = (new GetHouseholdDataByExpenditureAction())();
        $householdByIncome      = (new GetHouseholdDataByIncomeAction())();
        $creditCardExpenditure = (new GetCreditCardExpenditureAction())();

        return Inertia::render('Index', [
            'expenditureCategories'  => $expenditureCategories,
            'inComeCategories'       => $inComeCategories,
            'paymentTypes'           => $paymentTypes,
            'households'             => $households,
            'householdByExpenditure' => $householdByExpenditure,
            'householdByIncome'      => $householdByIncome,
            'creditCardExpenditure'  => $creditCardExpenditure,
        ]);
    }

    public function post(Request $request)
    {
        try {
            DB::beginTransaction();

            if ($request->get('amount') <= 0 || $request->get('amount') === null) {
                throw new \RuntimeException('金額を入力してください。');
            }

            $item = Household::query()
                ->create($request->all());

            // ランダムで褒めるメッセージを生成（子供を褒めるような表現）
            $messages = [
                '家計簿を入力できるなんて、すごいね！',
                'やったね！ちゃんと入力できて、えらいぞ！',
                '頑張ったね！入力しっかりできて偉い！',
                'しっかり管理できてるね、最高だよ！',
                '家計簿入力、バッチリ！すごいぞー！',
                'きちんとできて、とってもえらいね！',
                'やるじゃん！家計簿入力完璧だね！',
                '家計簿完成、おめでとう！努力が出てるね！',
                'コツコツできて、とっても立派だね！',
                'えらい！入力できた時点で100点だよ！',
            ];

            $message = $messages[array_rand($messages)];

            $households = Household::query()
                ->with([
                    'category',
                    'paymentType',
                ])
                ->orderBy('created_at', 'desc')
                ->get();

            $householdByExpenditure = (new GetHouseholdDataByExpenditureAction())();
            $householdByIncome      = (new GetHouseholdDataByIncomeAction())();
            $creditCardExpenditure = (new GetCreditCardExpenditureAction())();

            DB::commit();

            return response()->json([
                'ok'                     => true,
                'message'                => $message,
                'item'                   => $item,
                'households'             => $households,
                'householdByExpenditure' => $householdByExpenditure,
                'householdByIncome'      => $householdByIncome,
                'creditCardExpenditure'  => $creditCardExpenditure,
            ], 201);
        } catch (\RuntimeException $e) {
            DB::rollBack();

            return response()->json([
                'ok'      => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }
}
