<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Job extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'service_id',
        'input_data',
        'output_data',
        'status',
        'priority',
        'complexity_score',
        'ai_confidence_score'
    ];

    protected $casts = [
        'input_data' => 'array',
        'complexity_score' => 'decimal:2',
        'ai_confidence_score' => 'decimal:2',
    ];

    /**
     * Get the user that submitted the job.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the service associated with the job.
     */
    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    /**
     * Get the payments associated with the job.
     */
    public function payments()
    {
         return $this->hasMany(Payment::class);
    }
}
