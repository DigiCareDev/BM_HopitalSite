<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DonationContact;

class DonationContactController extends Controller
{
    public function store(Request $request) {
         $data = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'phone' => 'required|string|max:20',
            'message' => 'nullable|string',
        ]);

        $donationcontact = DonationContact::create($data);

        return response()->json([
            'message' => 'Query submitted successfully!',
            'data' => $donationcontact
        ], 201);
    }
    public function index()
    {
        $contacts = DonationContact::latest()->get();

        return response()->json($contacts);
    }

    public function destroy($id)
    {
        $contact = DonationContact::findOrFail($id);
        $contact->delete();

        return response()->json(['message' => 'Deleted successfully']);
    }
}