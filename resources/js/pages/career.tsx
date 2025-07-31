
import React, { useEffect, useState } from 'react';
import Navbar from './components/home/navbar'
import Footer from './components/Footer';
import CMO from '@/assets/images/CMO.png'
import FieldOfficer from '@/assets/images/FieldOfficer.png'
import Pharmacist from '@/assets/images/Pharmacist 2.png'
import ResidentDoctors from '@/assets/images/ResidentDoctors.png';
import BackToTop from "./components/BackToTopButton"
import Subnav from "./components/subnav";


export default function Career() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }


    const jobs = [
        {
            title: translations?.Chief_Medical_Officer || 'मुख्य चिकित्सा अधिकारी',
            location: translations?.Barabanki || 'बाराबंकी (यू. पी.)',
            type: translations?.Full_time || 'पूरा समय',
            description: translations?.CMO_job_title || 'हम अपने अस्पताल का नेतृत्व करने के लिए एक अत्यधिक अनुभवी और दूरदर्शी मुख्य चिकित्सा अधिकारी (सीएमओ) की तलाश कर रहे हैं।',
            redirect: '/cmo',
            image: CMO,
        },
        {
            title: translations?.Field_Officer || 'फील्ड ऑफिसर',
            location: translations?.Barabanki || 'बाराबंकी (यू. पी.)',
            type: translations?.Full_time || 'पूरा समय',
            description: translations?.Field_Officer_title || 'हम अपने अस्पताल के चिकित्सा कार्यों का नेतृत्व करने के लिए एक अत्यधिक अनुभवी और दूरदर्शी फील्ड ऑफिसर की तलाश कर रहे हैं।',
            redirect: '/field-officer',
            image: FieldOfficer,
        },
        {
            title: translations?.Pharmacist || 'फार्मेसिस्ट',
            location: translations?.Barabanki || 'बाराबंकी (यू. पी.)',
            type: translations?.Full_time || 'पूरा समय',
            description: translations?.Pharmacist_title || 'हम अपने अस्पताल के चिकित्सा कार्यों का नेतृत्व करने के लिए एक अत्यधिक अनुभवी और दूरदर्शी फार्मासिस्ट की तलाश कर रहे हैं।',
            redirect: '/pharmacist',
            image: Pharmacist,
        },
        {
            title: translations?.Resident_Doctors || 'रेजिडेंट डॉक्टर्स',
            location: translations?.Barabanki || 'बाराबंकी (यू. पी.)',
            type: translations?.Full_time || 'पूरा समय',
            description: translations?.Resident_Doctors_title || 'हम अपने अस्पताल के चिकित्सा कार्यों का नेतृत्व करने के लिए अत्यधिक अनुभवी और दूरदर्शी रेजिडेंट डॉक्टरों की तलाश कर रहे हैं।',
            redirect: '/resident-doctors',
            image: ResidentDoctors,
        },
    ];

    return (
        <>
            <BackToTop />
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations}/>

            <div className="bg-gray-50 text-gray-800">

                {/* Job Listings */}
                <section className="max-w-6xl mx-auto px-3 py-12">
                    <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center">{translations?.Current_Openings || 'वर्तमान नौकरियाँ'}</h2>

                    <div className="grid md:grid-cols-4 gap-3">
                        {jobs.map((job, index) => (
                            <div key={index} className="border border-gray-200 p-3 rounded-lg shadow-sm bg-white">
                                {/* Image Section */}
                                {job.image && (
                                    <img
                                        src={job.image}
                                        alt={job.title}
                                        className="w-full h-60 object-cover rounded-md mb-4"
                                    />
                                )}

                                {/* Text Content */}
                                <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    {job.location} | {job.type}
                                </p>
                                <p className="mt-4 text-sm">{job.description}</p>

                                {/* Apply Button */}
                                <a
                                    href={job.redirect}
                                    className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                                >
                                    {translations?.Apply_Now || 'अभी अप्लाई करें'}
                                </a>
                            </div>

                        ))}
                    </div>
                </section>


            </div>
            <Footer translations={translations} />
        </>
    )
}
