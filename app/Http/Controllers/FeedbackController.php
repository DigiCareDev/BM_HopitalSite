<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'message' => 'nullable|string',
        ]);

        Feedback::create($data);

        return response()->json(['message' => 'Feedback submitted successfully, thank you for your Feedback!'], 201);
    }

    public function index() 
    {
        $feedback = Feedback::latest()->get();
        return response()->json($feedback);
    }

    public function destroy($id) {
        $feedback = Feedback::findOrFail($id);
        $feedback->delete();
        return response()->json(['message' => 'Feedback deleted successfully!']);
    }
}
