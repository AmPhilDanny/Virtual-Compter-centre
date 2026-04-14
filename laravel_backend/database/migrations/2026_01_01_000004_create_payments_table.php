<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            
            // Link to the user and their specific job
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('job_id')->nullable()->constrained()->nullOnDelete(); // Could be a wallet top-up instead of a direct job payment
            
            // Transaction Details
            $table->decimal('amount', 12, 2);
            $table->string('currency')->default('NGN');
            $table->string('reference_token')->unique(); // Unique identifier for the payment
            
            // Payment Methodology
            // Supported: paystack, flutterwave, bank_transfer, crypto, wallet
            $table->string('payment_method'); 
            
            // Status Tracking
            // PENDING, COMPLETED, FAILED, VERIFICATION_REQUIRED
            $table->string('status')->default('PENDING'); 
            
            // For Bank Transfer / Offline Verification
            $table->string('proof_of_payment_path')->nullable(); // Image uploaded by client
            $table->timestamp('verified_at')->nullable(); // Set by admin
            $table->foreignId('verified_by_admin_id')->nullable()->constrained('users'); // Identifies the admin who checked the proof
            
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
