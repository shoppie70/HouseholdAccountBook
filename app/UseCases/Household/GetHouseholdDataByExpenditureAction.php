<?php

namespace App\UseCases\Household;

use App\Models\Household;
use App\Models\HouseholdCategory;

class GetHouseholdDataByExpenditureAction
{
    protected array $householdByExpenditure = [];

    public function __invoke(): array
    {
        $expenditureCategories = HouseholdCategory::query()
            ->expenditure()
            ->get()
            ->toArray();

        foreach ($expenditureCategories as $category) {
            $sum = Household::query()
                ->where('category_id', $category['id'])
                ->sum('amount');

            $this->householdByExpenditure[] = [
                'label' => $category['name'],
                'value' => number_format($sum),
            ];
        }

        return $this->householdByExpenditure;
    }
}
