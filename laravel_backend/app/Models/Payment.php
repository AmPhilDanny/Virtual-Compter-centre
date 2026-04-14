<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'job_id',
        'amount',
        'currency',
        'reference_token',
        'payment_method',
        'status',
        'proof_of_payment_path',
        'verified_at',
        'verified_by_admin_id'
    ];

    protected $casts = [
        'verified_at' => 'datetime',
    ];

    /**
     * Get the user that owns the payment.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the job associated with this payment (if applicable).
     */
    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    /**
     * Get the admin who verified this offline transaction.
     */
    public function verifier()
    {
        return $this->belongsTo(User::class, 'verified_by_admin_id');
    }
}
