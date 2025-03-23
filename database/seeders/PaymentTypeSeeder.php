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
        $items = [
            '支出・現金',
            '支出・カード',
            '支出・口座',
            '支出・口座引落',
            '収入・口座',
            '収入・現金',
        ];

        foreach ($items as $item) {
            PaymentType::query()
                ->create([
                    'name' => $item,
                ]);
        }
    }
}
