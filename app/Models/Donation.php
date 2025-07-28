<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    protected $fillable = [
        'fullName',
        'email',
        'address',
        'phone',
        'country',
        'currency',
        'amount',
        'interest',
        'date',
        'message'
    ];
}
