<?php

namespace App\UseCases\Household;

use App\Models\Household;

class GetCreditCardExpenditureAction
{
    public function __invoke(): string
    {
        $sum = Household::query()
            ->whereHas('paymentType', function ($query) {
                $query->where('is_credit_card', true); // Filter where is_credit_card is true
            })
            ->sum('amount'); // Calculate the sum of the 'amount' column

        return number_format($sum);
    }
}
