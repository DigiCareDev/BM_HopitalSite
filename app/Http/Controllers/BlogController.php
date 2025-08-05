<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string',
            'author' => 'required|string',
            'tags' => 'nullable|string',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('blog_images', 'public');
        }

        $blog = Blog::create($validated);

        return response()->json([
            'message' => 'Blog created successfully!', 
            'blog' => $blog
        ], 201);
    }

    public function index() {
        $blogs = Blog::latest()->get();
        return response()->json($blogs);
    }
    //========================delete opreation ======
    public function destroy($id){
        $blogs =  Blog::find($id);
        $blogs->delete();

        return response()->json([
            'message' => 'Blog deleted successfully!'
        ], 200);
    }
    //========================updatre opreation ==========
    public function edit($id)
    {
        $blog = Blog::findOrFail($id);
        return Inertia::render('Blogs/Edit', [
            'blog' => $blog,
        ]);
    }

    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:700',
            'author' => 'required|string|max:100',
            'tags' => 'required|string',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:4096',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($blog->image && Storage::exists('public/' . $blog->image)) {
                Storage::delete('public/' . $blog->image);
            }

            $validated['image'] = $request->file('image')->store('images', 'public');
        }

        $blog->update($validated);

        return redirect()->route('blogs.index')->with('success', 'Blog updated successfully.');
    }

}