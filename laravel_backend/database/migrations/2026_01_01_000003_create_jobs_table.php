<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            
            // Foreign Keys
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('service_id')->constrained()->cascadeOnDelete();
            
            // Job Details
            $table->json('input_data')->nullable(); // Client's specific instructions
            $table->text('output_data')->nullable(); // AI's final generated output
            
            // Tracking
            $table->string('status')->default('PENDING'); // PENDING, PROCESSING, REVIEW, COMPLETED, CANCELLED
            $table->enum('priority', ['STANDARD', 'EXPRESS'])->default('STANDARD');
            
            // AI Performance Metrics
            $table->decimal('complexity_score', 5, 2)->nullable();
            $table->decimal('ai_confidence_score', 5, 2)->nullable();
            
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
