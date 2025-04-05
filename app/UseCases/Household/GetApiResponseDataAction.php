<?php

namespace App\UseCases\Household;

use App\Models\Household;

class GetApiResponseDataAction
{
    public function __invoke($year, $month): array
    {
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

        return [
            'households'             => $households,
            'householdByExpenditure' => $householdByExpenditure,
            'householdByIncome'      => $householdByIncome,
            'creditCardExpenditure'  => $creditCardExpenditure,
            'totalExpenditure'       => $totalExpenditure,
            'totalIncome'            => $totalIncome,
        ];
    }
}
