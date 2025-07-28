<?php

namespace App\Http\Controllers;

use App\Models\JobApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class JobApplicationController extends Controller
{
public function store(Request $request)
{
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'position' => 'required',
            'message' => 'nullable',
            'resume' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
        ]);

        $resumePath = $request->file('resume')?->store('resumes', 'public');

        JobApplication::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'position' => $request->position,
            'message' => $request->message,
            'resume_path' => $resumePath,
        ]);

        return response()->json(['message' => 'Application submitted']);
    }

    public function index()
    {
        $applications = JobApplication::latest()->get();

        return response()->json([
            'status' => true,
            'data' => $applications,
        ], 200);
    }
    
    public function destroy($id)
    {
        $application = JobApplication::findOrFail($id);
        
        if ($application->resume_path) {
            Storage::delete($application->resume_path);
        }

        $application->delete();

        return response()->json(['message' => 'Application deleted successfully']);
    }

}