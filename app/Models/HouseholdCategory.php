<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HouseholdCategory extends Model
{
    /** @use HasFactory<\Database\Factories\HouseholdCategoryFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'is_active',
        'is_income',
        'is_credit_card',
    ];

    protected $casts = [
        'is_active'      => 'boolean',
        'is_income'      => 'boolean',
        'is_credit_card' => 'boolean',
    ];

    public function scopeIncome($query)
    {
        return $query->where('is_income', true);
    }

    public function scopeExpenditure($query)
    {
        return $query->where('is_income', false);
    }
}
