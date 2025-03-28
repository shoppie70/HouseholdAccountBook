<?php

namespace App\UseCases\Household;

use App\Models\Household;

class GetCreditCardExpenditureAction
{
    public function __invoke($year, $month): string
    {
        $sum = Household::query()
            ->whereYear('date', $year)
            ->whereMonth('date', $month)
            ->whereHas('paymentType', function ($query) {
                $query->where('is_credit_card', true); // Filter where is_credit_card is true
            })
            ->sum('amount'); // Calculate the sum of the 'amount' column

        return number_format($sum);
    }
}
