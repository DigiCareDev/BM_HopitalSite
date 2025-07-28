import Footer from '@/pages/components/Footer';
import Nav from '@/pages/components/Nav';
import React from 'react'

export default function FreeMedicalCamp() {
    return (
        <>
            <div className='bg-white'>
                <Nav />
                <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg border border-gray-200  my-10">
                    <h1 className="text-3xl font-bold text-blue-800 mb-4 text-left">
                        Free Medical Camp by BM Hospital – Serving Health, Spreading Care
                    </h1>

                    <p className="text-gray-700 mb-4">
                        <strong>BM Hospital</strong> is pleased to announce a <strong>Free Medical Camp</strong> to promote community health and provide accessible medical care to the people of <strong>Barabanki</strong> and nearby regions.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-md mb-4">
                        <p className="text-gray-800"><strong>📅 Date:</strong> 14th September 2025</p>
                        <p className="text-gray-800"><strong>🕒 Time:</strong> 10:00 AM – 05:00 PM</p>
                        <p className="text-gray-800"><strong>📍 Venue:</strong> BM Hospital Campus, Kola Gahbadi, Pargana Satrikh, Tehsil Nawabganj, District – Barabanki</p>
                    </div>

                    <p className="text-gray-700 mb-4">
                        This initiative is part of BM Hospital’s commitment to making quality healthcare accessible to everyone.
                    </p>

                    <p className="text-gray-700 mb-4">
                        The camp will feature experienced doctors, including a <strong>General Physician</strong> and a <strong>Gynecologist</strong>, available for consultations throughout the day.
                    </p>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">🩺 Free Health Services Offered:</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Blood Pressure Screening</li>
                            <li>General Health Checkup</li>
                            <li>Pregnant Women Diet Plan Counseling</li>
                            <li>Diabetes Screening</li>
                        </ul>
                    </div>

                    <p className="text-gray-700 mb-4">
                        Whether you're managing a chronic condition, planning a pregnancy, or just need a checkup, this is a great opportunity to consult with expert doctors at no cost.
                    </p>

                    <p className="text-gray-700 mb-4">
                        Residents of Barabanki and nearby areas are encouraged to attend. The camp is open to <strong>all age groups</strong>, and <strong>no prior registration</strong> is required.
                    </p>

                    <div className="bg-gray-100 py-5 px-5 rounded-md mb-6">
                        <a href='tel:+91 7318000751' className="text-gray-800 py-4"><strong>📞 Phone:</strong> +91 7318000751 – 55</a> <br />
                        <a href='mailto:info@bmswtrust.org' className="text-gray-800"><strong>📧 Email:</strong> info@bmswtrust.org</a>
                    </div>

                    <p className="text-center text-blue-900 font-semibold text-lg">
                        BM Hospital – Your Health, Our Mission.
                        <br />
                        Together, let’s build a healthier tomorrow.
                    </p>
                </div>
                <Footer />
            </div>
        </>
    );
}
