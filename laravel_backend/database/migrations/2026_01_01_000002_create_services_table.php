<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            
            // Financials
            $table->decimal('base_price', 10, 2)->default(0.00);
            
            // AI Configuration
            $table->enum('ai_autonomy_level', ['AI_ONLY', 'AI_AND_HUMAN', 'HUMAN_ONLY'])->default('AI_AND_HUMAN');
            $table->string('turnaround_time')->default('24 Hours'); // e.g. "Instant", "2 Hours", "24 Hours"
            
            $table->boolean('status')->default(true); // Active or inactive
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
