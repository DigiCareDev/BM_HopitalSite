<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
         Schema::create('job_posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->date('deadline')->nullable();
            $table->string('location');
            $table->string('job_type');
            $table->text('description')->nullable();
            $table->text('requirements');
            $table->json('images')->nullable(); // store image paths as JSON
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};