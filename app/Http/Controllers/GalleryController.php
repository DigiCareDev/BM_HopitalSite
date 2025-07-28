<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;

class GalleryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = $request->file('image')->store('gallery', 'public');

        $gallery = Gallery::create([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'description' => $validated['description'],
            'image_path' => $imagePath,
        ]);

        return response()->json(['message' => 'Image uploaded successfully!', 'data' => $gallery]);
    }

    public function index()
    {
        $galleries = Gallery::latest()->get();
        
        return response()->json([
            'status' => true,
            'data' => $galleries,
        ], 200);
    }

     public function destroy($id) {
        $gallerys = Gallery::findOrFail($id);
        $gallerys->delete();
        return response()->json(['message' => 'Data deleted successfully!']);
    }

    public function show($id)
    {
        $gallery = Gallery::findOrFail($id);
        return response()->json($gallery);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $gallery = Gallery::findOrFail($id);

        $gallery->title = $validated['title'];
        $gallery->category = $validated['category'];
        $gallery->description = $validated['description'];

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('gallery', 'public');
            $gallery->image_path = $imagePath;
        }

        $gallery->save();

        return response()->json([
            'message' => 'Gallery updated successfully!',
            'data' => $gallery
        ]);
    }


}