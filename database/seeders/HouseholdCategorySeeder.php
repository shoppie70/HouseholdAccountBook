<?php

namespace Database\Seeders;

use App\Models\HouseholdCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HouseholdCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            '食費',
            '外食費',
            'ガソリン',
            'ETC',
            '趣味費',
            '日用品費',
            '通信費',
            '光熱費',
            '宿泊費',
            '雑費',
            '❣️',
        ];

        foreach ($items as $item) {
            HouseholdCategory::query()
                ->create([
                    'name' => $item,
                ]);
        }
    }
}
