<?php

namespace App\Http\Controllers;

use App\Models\Household;
use App\Models\HouseholdCategory;
use App\Models\PaymentType;
use App\UseCases\Household\CalculateTotalExpenditureAction;
use App\UseCases\Household\CalculateTotalIncomeAction;
use App\UseCases\Household\GetCreditCardExpenditureAction;
use App\UseCases\Household\GetHouseholdDataByExpenditureAction;
use App\UseCases\Household\GetHouseholdDataByIncomeAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TopPageController extends Controller
{
    public function index(Request $request)
    {
        $title = '家計簿';
        $year  = $request->get('year') ?? date('Y');
        $month = $request->get('month') ?? date('n');

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
            ->whereYear('date', $year)
            ->whereMonth('date', $month)
            ->orderBy('date', 'desc')
            ->get();

        $householdByExpenditure = (new GetHouseholdDataByExpenditureAction())($year, $month);
        $householdByIncome      = (new GetHouseholdDataByIncomeAction())($year, $month);
        $creditCardExpenditure  = (new GetCreditCardExpenditureAction())($year, $month);
        $totalExpenditure       = (new CalculateTotalExpenditureAction())($householdByExpenditure);
        $totalIncome            = (new CalculateTotalIncomeAction())($householdByIncome);

        return Inertia::render('Index', [
            'title'                  => $title,
            'expenditureCategories'  => $expenditureCategories,
            'inComeCategories'       => $inComeCategories,
            'paymentTypes'           => $paymentTypes,
            'households'             => $households,
            'householdByExpenditure' => $householdByExpenditure,
            'householdByIncome'      => $householdByIncome,
            'creditCardExpenditure'  => $creditCardExpenditure,
            'totalExpenditure'       => $totalExpenditure,
            'totalIncome'            => $totalIncome,
            'year'                   => $year,
            'month'                  => $month,
        ]);
    }

    public function post(Request $request)
    {
        try {
            DB::beginTransaction();

            if ($request->get('amount') <= 0 || $request->get('amount') === null) {
                throw new \RuntimeException('金額を入力してください。');
            }

            if ($request->get('year') === null || $request->get('month') === null) {
                throw new \RuntimeException('年月情報がありません。');
            }

            $year  = $request->get('year');
            $month = $request->get('month');

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
                ->whereYear('date', $year)
                ->whereMonth('date', $month)
                ->orderBy('date', 'desc')
                ->get();

            $householdByExpenditure = (new GetHouseholdDataByExpenditureAction())($year, $month);
            $householdByIncome      = (new GetHouseholdDataByIncomeAction())($year, $month);
            $creditCardExpenditure  = (new GetCreditCardExpenditureAction())($year, $month);
            $totalExpenditure       = (new CalculateTotalExpenditureAction())($householdByExpenditure);
            $totalIncome            = (new CalculateTotalIncomeAction())($householdByIncome);

            DB::commit();

            return response()->json([
                'ok'                     => true,
                'message'                => $message,
                'item'                   => $item,
                'households'             => $households,
                'householdByExpenditure' => $householdByExpenditure,
                'householdByIncome'      => $householdByIncome,
                'creditCardExpenditure'  => $creditCardExpenditure,
                'totalExpenditure'       => $totalExpenditure,
                'totalIncome'            => $totalIncome,
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
