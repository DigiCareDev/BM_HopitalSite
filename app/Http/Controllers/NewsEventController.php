<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewsEvent;

class NewsEventController extends Controller
{
   public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ]);

        // Store image to 'public/news_events'
        $imagePath = $request->file('image')->store('news_events', 'public');

        // Save in DB
        $newsEvent = NewsEvent::create([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'description' => $validated['description'],
            'image_path' => $imagePath,
        ]);

        return response()->json([
            'message' => 'News/Event created successfully',
            'data' => $newsEvent,
        ]);
    }

    public function index() {
        $newsEvents = NewsEvent::latest()->get();
        return response()->json($newsEvents);
    }

    public function destroy($id) {
        $newsEvents = NewsEvent::findOrFail($id);
        $newsEvents->delete();
        return response()->json(['message' => 'Data deleted successfully!']);
    }

}
