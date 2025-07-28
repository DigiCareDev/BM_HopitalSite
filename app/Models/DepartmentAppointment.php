<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DepartmentAppointment extends Model
{
    protected $table = 'departmentappointments';

    protected $fillable = ['name', 'phone', 'department', 'date', 'time'];
}