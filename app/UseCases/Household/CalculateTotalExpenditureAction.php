<?php

namespace App\UseCases\Household;

class CalculateTotalExpenditureAction
{
    protected int $totalExpenditure = 0;

    public function __invoke($householdByExpenditure): string
    {
        foreach ($householdByExpenditure as $price) {
            // 配列の 'value' キーが存在し、かつ数値であれば値を追加
            $this->totalExpenditure += is_numeric($price['rawValue'] ?? null) ? (int) $price['rawValue'] : 0;
        }

        return number_format($this->totalExpenditure);
    }
}
