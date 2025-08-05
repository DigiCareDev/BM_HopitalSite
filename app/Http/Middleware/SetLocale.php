<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Session; // Import Session facade
use Illuminate\Support\Facades\App; // Import App facade

class SetLocale
{
     public function handle($request, Closure $next)
    {
        if (Session::has('locale')) {
            App::setLocale(Session::get('locale')); // Set the locale based on the session
        } else {
            // Optionally, set a default locale if not in session, as suggested by {Link: Stack Overflow https://stackoverflow.com/questions/55606814/laravel-multi-language-switch-and-change-locale-on-load}
            App::setLocale(config('app.locale')); 
            Session::put('locale', config('app.locale'));
        }

        return $next($request);
    }
}
