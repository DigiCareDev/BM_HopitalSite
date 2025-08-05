<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Lang;

class TranslationController extends Controller
{
     public function index($lang)
    {
        app()->setLocale($lang);

        $translations = Lang::get('messages');

        return response()->json([
            'lang' => $lang,
            'translations' => $translations,
        ]);

        // $locale = $request->input('locale');
        // Session::put('locale', $locale); 
        // return redirect()->back();
    }
}
