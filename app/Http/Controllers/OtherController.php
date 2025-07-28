<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Other;

class OtherController extends Controller
{
     public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'message' => 'nullable|string',
        ]);

        Other::create($data);

        return response()->json(['message' => 'Query submitted successfully, thank you interest!'], 201);
    }

    public function index() {
        $other = Other::latest()->get();
        return response()->json($other);
    }

    public function destroy($id)
    {
        $other = Other::find($id);
        if (!$other) {
            return response()->json(['message' => 'Enquiry not found'], 404);
        }
        $other->delete();
        
        return response()->json(['message' => 'Deleted successfully']);
    }
}
