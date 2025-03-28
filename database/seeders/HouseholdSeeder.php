<?php

namespace Database\Seeders;

use App\Models\Household;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class HouseholdSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws \Exception
     */
    public function run(): void
    {
        // Path to the CSV file
        $csvFile = public_path('household.csv');

        // Check if the file exists
        if (!File::exists($csvFile)) {
            throw new \Exception("CSV file not found at {$csvFile}");
        }

        // Read the file contents
        $fileData = array_map('str_getcsv', file($csvFile));

        // Extract the header row
        $header = array_shift($fileData);

        // Check for unexpected BOM (Byte Order Mark) characters and remove them
        $header[0] = preg_replace('/^\xEF\xBB\xBF/', '', $header[0]);

        // Prepare data for insertion
        $dataToInsert = [];
        foreach ($fileData as $row) {
            // Clean up the row data (e.g., trim extra spaces or sanitize inputs)
            $cleanedRow = array_map(function ($value) {
                return trim($value);
            }, $row);

            // Remove commas from a number-formatted value in column 3
            if (isset($row[3])) {
                $row[3] = str_replace(',', '', $row[3]);
            }

            // Ensure data formats match the table's expectations
            $cleanedRow = array_combine($header, $cleanedRow);
            if (isset($cleanedRow['date'])) {
                $cleanedRow['date'] = date('Y-m-d', strtotime($cleanedRow['date']));
            }

            $dataToInsert[] = $cleanedRow;
        }

        foreach ($dataToInsert as $item) {
            Household::query()->create([
                'date'            => $item['date'],
                'category_id'     => $item['category_id'],
                'payment_type_id' => $item['payment_type_id'],
                'amount'          => str_replace(',', '', $item['amount']),
                'memo'            => $item['memo'],
            ]);
        }
    }
}
