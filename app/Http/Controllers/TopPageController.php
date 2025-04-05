<?php

namespace App\Http\Controllers;

use App\Models\Household;
use App\Models\HouseholdCategory;
use App\Models\PaymentType;
use App\UseCases\Household\GetApiResponseDataAction;
use App\UseCases\Household\GetSuccessMessagesAction;
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

        // 家計簿画面に必要なデータを一括取得
        $apiResponseData = (new GetApiResponseDataAction())($year, $month);

        return Inertia::render('Index', [
            'title'                  => $title,
            'expenditureCategories'  => $expenditureCategories,
            'inComeCategories'       => $inComeCategories,
            'paymentTypes'           => $paymentTypes,
            'households'             => $apiResponseData['households'],
            'householdByExpenditure' => $apiResponseData['householdByExpenditure'],
            'householdByIncome'      => $apiResponseData['householdByIncome'],
            'creditCardExpenditure'  => $apiResponseData['creditCardExpenditure'],
            'totalExpenditure'       => $apiResponseData['totalExpenditure'],
            'totalIncome'            => $apiResponseData['totalIncome'],
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

            $item = Household::query()
                ->create($request->all());

            // ランダムでサクセスメッセージを取得
            $message = (new GetSuccessMessagesAction())();

            // 家計簿画面に必要なデータを一括取得
            $apiResponseData = (new GetApiResponseDataAction())($request->get('year'), $request->get('month'));

            DB::commit();

            return response()->json([
                'ok'                     => true,
                'message'                => $message,
                'item'                   => $item,
                'households'             => $apiResponseData['households'],
                'householdByExpenditure' => $apiResponseData['householdByExpenditure'],
                'householdByIncome'      => $apiResponseData['householdByIncome'],
                'creditCardExpenditure'  => $apiResponseData['creditCardExpenditure'],
                'totalExpenditure'       => $apiResponseData['totalExpenditure'],
                'totalIncome'            => $apiResponseData['totalIncome'],
            ], 201);
        } catch (\RuntimeException $e) {
            DB::rollBack();

            return response()->json([
                'ok'      => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    public function delete(Request $request, Household $household)
    {
        try {
            DB::beginTransaction();

            $household->delete();

            // 家計簿画面に必要なデータを一括取得
            $apiResponseData = (new GetApiResponseDataAction())($request->get('year'), $request->get('month'));

            DB::commit();

            return response()->json([
                'ok'                     => true,
                'message'                => '家計簿データを削除したよ。',
                'households'             => $apiResponseData['households'],
                'householdByExpenditure' => $apiResponseData['householdByExpenditure'],
                'householdByIncome'      => $apiResponseData['householdByIncome'],
                'creditCardExpenditure'  => $apiResponseData['creditCardExpenditure'],
                'totalExpenditure'       => $apiResponseData['totalExpenditure'],
                'totalIncome'            => $apiResponseData['totalIncome'],
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
