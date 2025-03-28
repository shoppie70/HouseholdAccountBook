<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Household extends Model
{
    /** @use HasFactory<\Database\Factories\HouseholdFactory> */
    use HasFactory;

    protected $fillable = [
        'date',
        'category_id',
        'payment_type_id',
        'amount',
        'memo',
    ];

    protected $casts = [
        'date' => 'date:Y-m-d',
    ];

    public function category(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(HouseholdCategory::class);
    }

    public function paymentType(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(PaymentType::class);
    }
}
