<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CareerPost extends Model
{
    protected $fillable = [
    'title', 'deadline', 'location', 'job_type', 'description', 'requirements', 'image',
];
}
