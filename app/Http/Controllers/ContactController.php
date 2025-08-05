<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
      public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        $contact = Contact::create($validated);

        return response()->json([
            'statusData' => 'Contact inquiry submitted successfully!',
            'data' => $contact,
        ], 201);
    }
    public function index()
    {
        $contacts = Contact::latest()->get();
        return response()->json($contacts);
    }

        public function destroy($id)
    {
        $contacts = Contact::findOrFail($id);
        $contacts->delete();

        return response()->json([
            'message' => 'Query deleted successfully',
            'data' => $contacts,
        ]);
    }

}
