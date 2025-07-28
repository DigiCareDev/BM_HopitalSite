<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donation;

class DonationController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'fullName' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'address' => 'required|string',
            'phone' => 'required|string|max:20',
            'country' => 'required|string',
            'currency' => 'required|string',
            'amount' => 'required|numeric|min:1',
            'interest' => 'required|string',
            'date' => 'required|date',
            'message' => 'nullable|string',
        ]);

        $donation = Donation::create($data);

        return response()->json([
            'message' => 'Donation query submitted successfully!',
            'data' => $donation
        ], 201);
    }

    public function index()
    {
        $donations = Donation::latest()->get();
        return response()->json($donations);
    }
     public function destroy($id)
    {
        $donations = Donation::findOrFail($id);
        $donations->delete();

        return response()->json(['message' => ' Query deleted successfully']);
    }
}
