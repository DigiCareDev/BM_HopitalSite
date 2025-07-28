<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;
use Illuminate\Support\Facades\Storage;


class JobController extends Controller
{
   public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'deadline' => 'nullable|date',
            'location' => 'required|string',
            'job_type' => 'required|string',
            'description' => 'nullable|string',
            'requirements' => 'required|string',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048', // validate each image
        ]);

        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('public/job_images');
                $imagePaths[] = Storage::url($path);
            }
        }

        $job = Job::create([
            'title' => $request->title,
            'deadline' => $request->deadline,
            'location' => $request->location,
            'job_type' => $request->job_type,
            'description' => $request->description,
            'requirements' => $request->requirements,
            'images' => json_encode($imagePaths),
        ]);

        return response()->json(['message' => 'Job posted successfully', 'job' => $job]);
    }
}
