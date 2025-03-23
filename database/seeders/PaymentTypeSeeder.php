<?php

namespace Database\Seeders;

use App\Models\PaymentType;
use Illuminate\Database\Seeder;

class PaymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PaymentType::query()
            ->create([
                'name'           => '支出・カード',
                'is_credit_card' => true,
            ]);

        $items = [
            '支出・現金',
            '支出・口座',
            '支出・口座引落',
        ];

        foreach ($items as $item) {
            PaymentType::query()
                ->create([
                    'name' => $item,
                ]);
        }

        $items = [
            '収入・口座',
            '収入・現金',
        ];

        foreach ($items as $item) {
            PaymentType::query()
                ->create([
                    'name'      => $item,
                    'is_income' => true,
                ]);
        }
    }
}
