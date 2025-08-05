<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CareerPost;
use Illuminate\Support\Facades\Storage;

class CareerPostController extends Controller
{
    public function store(Request $request)
    {
       $validated = $request->validate([
            'title' => 'required|string',
            'deadline' => 'nullable|date',
            'location' => 'required|string',
            'job_type' => 'required|string',
            'description' => 'nullable|string',
            'requirements' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ]);

          $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('career_post', 'public');
        }

        $careerPost = CareerPost::create([
            'title' => $validated['title'],
            'deadline' => $validated['deadline'] ?? null,
            'location' => $validated['location'],
            'job_type' => $validated['job_type'],
            'description' => $validated['description'] ?? null,
            'requirements' => $validated['requirements'] ?? null,
            'image' => $imagePath,
        ]);

        return response()->json([
            'message' => 'Career post created successfully!',
            'data' => $careerPost,
        ], 201);
    }

    public function index(){
        $careerPost = CareerPost::latest()->get();
        return response()->json($careerPost);
    }

    public function show($id)
    {
        $job = CareerPost::find($id);

        if (!$job) {
            return response()->json([
                'message' => 'Job not found'], 
                404);
        }

        return response()->json($job);
    }

    public function destroy($id)
    {
        $job = CareerPost::find($id);

        if (!$job) {
            return response()->json([
                'message' => 'Job not found'], 404);
        }

        $job->delete();

        return response()->json([
            'message' => 'Job deleted successfully'
        ], 200);
    }

    public function update(Request $request, $id)
    {
        \Log::info('Update request received', ['method' => $request->method(), 'data' => $request->all()]);

        $job = CareerPost::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'deadline' => 'nullable|date',
            'location' => 'required|string',
            'job_type' => 'required|string',
            'description' => 'nullable|string',
            'requirements' => 'nullable|string',
            'image' => 'nullable|image|max:4096',
        ]);

        if ($request->hasFile('image')) {
            \Log::info('Image file detected');
            if ($job->image && Storage::exists('public/' . $job->image)) {
                Storage::delete('public/' . $job->image);
            }

            $path = $request->file('image')->store('images', 'public');
            $validated['image'] = $path;
        }

        $job->update($validated);

        return response()->json([
            'message' => 'Job updated successfully',
            'job' => $job
        ]);
    }


}