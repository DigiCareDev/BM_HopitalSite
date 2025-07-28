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
        Schema::create('donations', function (Blueprint $table) {
             $table->id();
                $table->string('fullName');
                $table->string('email');
                $table->string('address');
                $table->string('phone');
                $table->string('country');
                $table->string('currency');
                $table->decimal('amount', 10, 2);
                $table->string('interest');
                $table->date('date');
                $table->text('message')->nullable();
                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donations');
    }
};