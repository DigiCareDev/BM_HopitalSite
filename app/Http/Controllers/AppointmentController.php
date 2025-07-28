<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;


class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'date' => 'required|date',
            'time' => 'required',
            'department' => 'required|string',
            'note' => 'nullable|string',
        ]);

        $appointment = Appointment::create($validated);

        return response()->json([
            'message' => 'Appointment saved successfully! we will connect you soon. thanks you.',
            'data' => $appointment
        ], 201);
    }

    public function index()
    {
        $appointments = Appointment::latest()->get();
        return response()->json($appointments);
    }
    public function destroy($id) {
        $appointments = Appointment::findOrFail($id);
        $appointments-> delete();

        return response()->json(['message'=>'Appointment deleted successfully!']);
    }

}