<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DonationContact extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'email',
        'message',
    ];
}
