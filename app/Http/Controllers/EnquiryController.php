<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enquiry;

class EnquiryController extends Controller
{
     public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'message' => 'nullable|string',
        ]);

        $enquiry = Enquiry::create($data);

        return response()->json(['message' => 'Enquiry submitted successfully! we will connect soon. thanks you.', 'data' => $enquiry], 201);
    }

       public function index()
    {
        $enquiries = Enquiry::latest()->get();
        return response()->json($enquiries);
    }

   public function destroy($id)
    {
        $enquiry = Enquiry::find($id);
        if (!$enquiry) {
            return response()->json(['message' => 'Enquiry not found'], 404);
        }
        $enquiry->delete();
        
        return response()->json(['message' => 'Deleted successfully']);
    }


}
