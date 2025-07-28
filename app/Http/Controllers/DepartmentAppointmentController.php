<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DepartmentAppointment;

class DepartmentAppointmentController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'department' => 'required|string',
            'date' => 'required|date',
            'time' => 'required',
        ]);

        $deptappointment = DepartmentAppointment::create($data);

        return response()->json(['message' => 'Appointment saved!', 'data' => $deptappointment], 201);
    }
}