<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentType extends Model
{
    /** @use HasFactory<\Database\Factories\PaymentTypeFactory> */
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
}
