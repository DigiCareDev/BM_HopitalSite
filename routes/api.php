<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TranslationController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DepartmentAppointmentController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\DonationContactController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\NewsEventController;
use App\Http\Controllers\JobApplicationController;
use App\Http\Controllers\JobController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/translations/{lang}', [TranslationController::class, 'index']);

// =========Donation all form =============
Route::get('/donations', [DonationController::class, 'index']);
Route::post('/donations', [DonationController::class, 'store']);
Route::delete('/donations/{id}', [DonationController::class, 'destroy']);
// =========contact form================
Route::get('/contact', [DonationContactController::class, 'index']);
Route::post('/contact', [DonationContactController::class, 'store']);
Route::delete('/contacts/{id}', [DonationContactController::class, 'destroy']);
// =========contactdata all form =============
Route::get('/contactdata', [ContactController::class, 'index']);
Route::post('/contactdata', [ContactController::class, 'store']);
Route::delete('/contactdata/{id}', [ContactController::class, 'destroy']);
// =========appointments form================
Route::get('/appointments', [AppointmentController::class, 'index']);
Route::post('/appointments', [AppointmentController::class, 'store']);
Route::delete('/appointments/{id}', [AppointmentController::class, 'destroy']);
// =========enquiries form================
Route::get('/enquiries', [EnquiryController::class, 'index']);
Route::post('/enquiries', [EnquiryController::class, 'store']);
Route::delete('/enquiries/{id}', [EnquiryController::class, 'destroy']);
// =========feedback form================
Route::get('/feedback', [FeedbackController::class, 'index']);
Route::post('/feedback', [FeedbackController::class, 'store']);
Route::delete('/feedback/{id}', [FeedbackController::class, 'destroy']);
// =========other form================
Route::get('/other', [OtherController::class, 'index']);
Route::post('/other', [OtherController::class, 'store']);
Route::delete('/other/{id}', [OtherController::class, 'destroy']);
// =========web form================
Route::get('/job-application', [JobApplicationController::class, 'index']);
Route::post('/job-application', [JobApplicationController::class, 'store']);
Route::delete('/job-application/{id}', [JobApplicationController::class, 'destroy']);
// ========= gallery crud api ================
Route::get('/gallery', [GalleryController::class, 'index']);
Route::post('/gallery', [GalleryController::class, 'store']);
Route::get('/gallery/{id}', [GalleryController::class, 'show']);
Route::post('/gallery/{id}', [GalleryController::class, 'update']);
Route::delete('/gallery/{id}', [GalleryController::class, 'destroy']);
// ========= Admin crud api ====================
Route::get('/news-events', [NewsEventController::class, 'index']);
Route::post('/news-events', [NewsEventController::class, 'store']);
Route::get('/news-events/{id}', [NewsEventController::class, 'show']);
Route::post('/news-events/{id}', [NewsEventController::class, 'update']);
Route::delete('/news-events/{id}', [NewsEventController::class, 'destroy']);
//=================================================
Route::get('blog', [BlogController::class, 'index']);
Route::post('blog', [BlogController::class, 'store']);
Route::get('blog/{id}', [BlogController::class, 'show']);
Route::post('blog/{id}', [BlogController::class, 'update']);
Route::delete('blog/{id}', [BlogController::class, 'destroy']); 
//=====================================================
Route::get('/jobs', [JobController::class, 'index']);
Route::post('/jobs', [JobController::class, 'store']);
Route::get('/jobs/{id}', [JobController::class, 'show']);
Route::post('/jobs/{id}', [JobController::class, 'update']);
Route::delete('/jobs/{id}', [JobController::class, 'destroy']);

