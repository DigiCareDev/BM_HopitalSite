<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\CareerPost;
use App\Http\Controllers\BlogController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('about');
})->name('about-us');

Route::get('/contact-us', function () {
    return Inertia::render('contact');
})->name('contact-us');

Route::get('/donate', function () {
    return Inertia::render('donate/donation');
})->name('donate');

Route::get('/careers', function () {
    return Inertia::render('career');
})->name('careers');

Route::get('/terms-conditions', function () {
    return Inertia::render('terms-conditions');
})->name('terms-conditions');

Route::get('/privacy-policy', function () {
    return Inertia::render('privacy-policy');
})->name('privacy-policy');

Route::get('/cmo/{id}', function ($id) {
    $job = CareerPost::findOrFail($id);
    return Inertia::render('career/cmo', [
        'job' => $job,
    ]);
})->name('cmo.show');

Route::get('/field-officer', function () {
    return Inertia::render('career/fieldofficer');
})->name('field-officer');

Route::get('/pharmacist', function () {
    return Inertia::render('career/pharmacist');
})->name('pharmacist');

Route::get('/resident-doctors', function () {
    return Inertia::render('career/residentdoctors');
})->name('resident-doctors');

Route::get('/careers-details', function () {
    return Inertia::render('components/single');
})->name('careers-details');

// ==================mainpages end=======

Route::get('/departments', function () {
    return Inertia::render('departments');
})->name('departments');

Route::get('/cardiology', function () {
    return Inertia::render('department/cardiology');
})->name('cardiology');

Route::get('/emergency-medicine', function () {
    return Inertia::render('department/emergency-medicine');
})->name('emergency-medicine');

Route::get('/orthopedics', function () {
    return Inertia::render('department/orthopedics');
})->name('orthopedics');

Route::get('/gastroenterology', function () {
    return Inertia::render('department/gastroenterology');
})->name('gastroenterology');

Route::get('/gynaecology', function () {
    return Inertia::render('department/gynaecology');
})->name('gynaecology');

Route::get('/general-surgery', function () {
    return Inertia::render('department/general-surgery');
})->name('general-surgery');

Route::get('/neurology', function () {
    return Inertia::render('department/neurology');
})->name('neurology');

Route::get('/ent', function () {
    return Inertia::render('department/ent');
})->name('ent');

Route::get('/respiratory', function () {
    return Inertia::render('department/respiratory');
})->name('respiratory');

Route::get('/nicu', function () {
    return Inertia::render('department/nicu');
})->name('nicu');

Route::get('/picu', function () {
    return Inertia::render('department/picu');
})->name('picu');
// ==================department end===============================
Route::get('/blog', function () {
    return Inertia::render('library/blog');
})->name('blog');
 Route::get('/blogs', [BlogController::class, 'index']);
 Route::get('/blogs/{id}/edit', [BlogController::class, 'edit'])->name('blogs.edit');
Route::put('/blogs/{id}', [BlogController::class, 'update'])->name('blogs.update');

Route::get('/free-medical-camp', function () {
    return Inertia::render('library/newsandevent/freemedicalcamp');
})->name('free-medical-camp');

Route::get('/ai-oct', function () {
    return Inertia::render('blog/aioct');
})->name('ai-oct');  

Route::get('/common-childhood-illnesses', function () {
    return Inertia::render('blog/commonchildhoodillnesses');
})->name('common-childhood-illnesses');

Route::get('/ent-problems', function () {
    return Inertia::render('blog/entproblems');
})->name('ent-problems');

Route::get('/Gynaecologist-immediately', function () {
    return Inertia::render('blog/gynaecologistimmediately');
})->name('Gynaecologist-immediately');

Route::get('/news-and-event', function () {
    return Inertia::render('library/newsandevent');
})->name('news-and-event');

Route::get('/gallery', function () {
    return Inertia::render('library/gallery');
})->name('gallery');

// ==================library end===============================

Route::get('/blood-bank', function () {
    return Inertia::render('services/bloodbank');
})->name('blood-bank');

Route::get('/pathlogy', function () {
    return Inertia::render('services/pathlogy');
})->name('pathlogy'); 

Route::get('/ambulance', function () {
    return Inertia::render('services/ambulance');
})->name('ambulance');

Route::get('/pharmacy', function () {
    return Inertia::render('services/pharmacy');
})->name('pharmacy');

Route::get('/modular-operation-theatre', function () {
    return Inertia::render('services/modular-operation-theatre');
})->name('modular-operation-theatre');

Route::get('/icu', function () {
    return Inertia::render('services/icu');
})->name('icu');

Route::get('/tpa', function () {
    return Inertia::render('services/tpa');
})->name('tpa');  

Route::get('/neonatal-intensive-care-unit', function () {
    return Inertia::render('services/neonatal-intensive-care-unit');
})->name('neonatal-intensive-care-unit'); 

Route::get('/patient-care', function () {
    return Inertia::render('services/patient-care');
})->name('patient-care'); 

Route::get('/pediatric-intensive-care-unit', function () {
    return Inertia::render('services/pediatric-intensive-care-unit');
})->name('pediatric-intensive-care-unit'); 

// ==================services end===============================

Route::get('/treatment', function () {
    return Inertia::render('treatment');
})->name('treatment'); 

Route::get('/fever-treatment', function () {
    return Inertia::render('treatment/feverTreatment');
})->name('fever-treatment'); 

Route::get('/hypertension-treatment', function () {
    return Inertia::render('treatment/hypertensionTreatment');
})->name('hypertension-treatment');

Route::get('/diabetes-treatment', function () {
    return Inertia::render('treatment/diabetesTreatment');
})->name('diabetes-treatment'); 


Route::get('/allergy-treatment', function () {
    return Inertia::render('treatment/allergyTreatment');
})->name('allergytreatment');

Route::get('/cold-cough', function () {
    return Inertia::render('treatment/coldCough');
})->name('coldcough');

Route::get('/asthma-bronchitis', function () {
    return Inertia::render('treatment/asthmaBronchitis');
})->name('asthmabronchitis');

Route::get('/anemia-treatment', function () {
    return Inertia::render('treatment/anemiaTreatment');
})->name('anemiatreatment');

Route::get('/dehydration-treatment', function () {
    return Inertia::render('treatment/dehydrationtreatment');
})->name('dehydrationtreatment');

Route::get('/pain-treatment', function () {
    return Inertia::render('treatment/paintreatment');
})->name('pain-treatment');

Route::get('/gastrointestinal-treatment', function () {
    return Inertia::render('treatment/gastrointestinaltreatment');
})->name('gastrointestinaltreatment');

Route::get('/urinarytract-infection', function () {
    return Inertia::render('treatment/urinarytractinfection');
})->name('urinarytract-infection');

Route::get('/skin-conditions', function () {
    return Inertia::render('treatment/skinconditions');
})->name('skin-conditions');

Route::get('/general-health', function () {
    return Inertia::render('treatment/generalhealth');
})->name('generalhealth');

Route::get('/nutritional-counseling', function () {
    return Inertia::render('treatment/nutritionalcounseling');
})->name('nutritionalcounseling');

Route::get('/cholesterol-treatment', function () {
    return Inertia::render('treatment/cholesteroltreatment');
})->name('cholesterol-treatment');

Route::get('/thyroid-disorder-treatment', function () {
    return Inertia::render('treatment/thyroiddisordertreatment');
})->name('thyroid-disorder-treatment');

Route::get('/sleep-disorder-treatment', function () {
    return Inertia::render('treatment/sleepdisordertreatment');
})->name('sleep-disorder-treatment');

Route::get('/immunizations-and-vaccinations', function () {
    return Inertia::render('treatment/immunizationsandvaccinations');
})->name('immunizations-and-vaccinations');

Route::get('/minor-injury-care', function () {
    return Inertia::render('treatment/minorinjurycare');
})->name('minor-injury-care');

///========================admin ==================

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('appointment-manage', function () {
       return Inertia::render('admin/appointment');
    })->name('appointment-manage');

   Route::get('blog-manage', function () {
       return Inertia::render('admin/blog');
    })->name('blog-manage');
    
   Route::get('career-manage', function () {
       return Inertia::render('admin/career');
    })->name('career-manage');

   Route::get('contact-manage', function () {
       return Inertia::render('admin/contact');
    })->name('contact-manage');

   Route::get('donation-manage', function () {
       return Inertia::render('admin/donation');
    })->name('donation-manage');

   Route::get('donation-contact', function () {
       return Inertia::render('admin/donationContact');
    })->name('donation-contact');

   Route::get('feedback-manage', function () {
       return Inertia::render('admin/feedback');
    })->name('feedback-manage');

   Route::get('job-manage', function () {
       return Inertia::render('admin/job');
    })->name('job-manage');

   Route::get('quick-enquiry-manage', function () {
       return Inertia::render('admin/enquiries');
    })->name('quick-enquiry-manage');

   Route::get('other-manage', function () {
       return Inertia::render('admin/other');
    })->name('other-manage');

   Route::get('news-and-event-manage', function () {
       return Inertia::render('admin/newsandevent');
    })->name('news-and-event-manage');

 Route::get('gallery-manage', function () {
       return Inertia::render('admin/gallery');
    })->name('gallery-manage');

         Route::get('add-blog', function () {
       return Inertia::render('admin/blog/add');
    })->name('add-blog');

     Route::get('add-image', function () {
       return Inertia::render('admin/gallery/add');
    })->name('add-image');

   Route::get('add-news-and-event', function () {
       return Inertia::render('admin/newsandevent/add');
    })->name('add-news-and-event');

   Route::get('create', function () {
       return Inertia::render('admin/career/create');
    })->name('create');



});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';