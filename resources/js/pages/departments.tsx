import React, { useEffect, useState } from 'react'
import Navbar from './components/Nav';
import Footer from './components/Footer';
import {
    FaHeartbeat,
    FaAmbulance,
    FaBone,
    FaStethoscope,
    FaUserNurse,
    FaCut,
    FaBrain,
    FaDeaf,
    FaLungs,
    FaBaby,
    FaChild,
} from 'react-icons/fa';
import BackToTop from "./components/BackToTopButton"
import Subnav from "./components/subnav";


export default function Departments() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const departments = [
        {
            name: translations?.Cardiology || 'हृदय रोग विशेषज्ञता',
            icon: <FaHeartbeat className="text-red-500 text-4xl mb-2" />,
            content: translations?.Cardiology_title_heading || "हृदय से जुड़ी समस्याओं के लिए विशेषज्ञ हृदय रोग विशेषज्ञों और आधुनिक जांच उपकरणों के साथ विशेष देखभाल।",
            link: 'cardiology',
        },
        {
            name: translations?.emergency_medicine || 'आपातकालीन सेवाएं',
            icon: <FaAmbulance className="text-red-700 text-4xl mb-2" />,
            content: translations?.emergency_medicine_title_heading || "24/7 आपातकालीन सेवा, त्वरित निदान और ट्रॉमा व अत्यावश्यक चिकित्सा जरूरतों के लिए महत्वपूर्ण देखभाल।",
            link: 'emergency-medicine',
        },
        {
            name: translations?.Orthopedics || 'हड्डी रोग / अस्थिरोग विशेषज्ञता',
            icon: <FaBone className="text-blue-500 text-4xl mb-2" />,
            content: translations?.Orthopedics_title_heading || "हड्डी, जोड़ और रीढ़ की समस्याओं के लिए सर्जरी और पुनर्वास सहित समग्र उपचार।",
            link: 'orthopedics',
        },
        {
            name: translations?.Gastroenterology || 'जठरांत्र',
            icon: <FaStethoscope className="text-green-600 text-4xl mb-2" />,
            content: translations?.Gastroenterology_title_heading || "जिगर, अग्न्याशय, पेट और बड़ी आंत की समस्याओं सहित पाचन तंत्र की देखभाल।",
            link: 'gastroenterology',
        },
        {
            name: translations?.Gynecology || 'स्त्री रोग विशेषज्ञता',
            icon: <FaUserNurse className="text-pink-500 text-4xl mb-2" />,
            content: translations?.Gynecology_title_heading || "महिलाओं का स्वास्थ्य, गर्भावस्था की देखभाल, बांझपन का उपचार और स्त्री रोग संबंधी सर्जरी।",
            link: 'Gynecology',
        },
        {
            name: translations?.General_Surgery || 'जनरल सर्जरी',
            icon: <FaCut className="text-gray-600 text-4xl mb-2" />,
            content: translations?.General_Surgery_title_heading || "पेट, त्वचा, स्तन और मुलायम ऊतकों से संबंधित सर्जरी, उन्नत तकनीकों के साथ।",
            link: 'general-surgery',
        },
        {
            name: translations?.Neurology || 'तंत्रिका विशेषज्ञता',
            icon: <FaBrain className="text-purple-600 text-4xl mb-2" />,
            content: translations?.Neurology_Title_heading || "शीर्ष न्यूरोलॉजिस्ट द्वारा मस्तिष्क, रीढ़ और तंत्रिका तंत्र से संबंधित विकारों का उपचार।",
            link: 'neurology',
        },
        {
            name: translations?.ENT || 'कान, नाक और गला',
            icon: <FaDeaf className="text-blue-800 text-4xl mb-2" />,
            content: translations?.ENT_title_heading || "कान, नाक, गला और सिर-गर्दन से जुड़ी स्थितियों के लिए सर्जरी सहित सम्पूर्ण देखभाल।",
            link: 'ent',
        },
        {
            name: translations?.Respiratory || 'साँस विशेषज्ञता',
            icon: <FaLungs className="text-cyan-600 text-4xl mb-2" />,
            content: translations?.Respiratory_title_heading || "फेफड़े, अस्थमा, तपेदिक और अन्य श्वसन संबंधी समस्याओं का प्रबंधन पल्मोनरी विशेषज्ञों द्वारा।",
            link: 'respiratory',
        },
        {
            name: translations?.nicu || 'नवजात शिशु गहन चिकित्सा',
            icon: <FaBaby className="text-yellow-600 text-4xl mb-2" />,
            content: translations?.nicu_title_heading || "अकाल जन्मे और गंभीर रूप से बीमार नवजात शिशुओं के लिए विशेष नवजात देखभाल।",
            link: 'nicu',
        },
        {
            name: translations?.picu || 'बाल चिकित्सा गहन चिकित्सा',
            icon: <FaChild className="text-indigo-500 text-4xl mb-2" />,
            content: translations?.picu_title_heading || "गंभीर रूप से बीमार या घायल बच्चों के लिए बाल गहन चिकित्सा इकाई।",
            link: 'picu',
        },
    ];

    return (
        <>
            <div className='bg-white '>
                <BackToTop />
                <Subnav onTranslations={handletranslate} />
                <Navbar translations={translations} />
                <div className="bg-gradient-to-br from-blue-50 to-white py-10 px-4 sm:px-6 lg:px-12 min-h-screen">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
                        {translations?.Our_Departments || 'विभाग'}
                    </h2>
                    <div className="flex items-center justify-center px-4">
                        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
                            {departments.map((dept, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300  border-1 border-blue-800"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        {dept.icon}
                                        <h3 className="text-xl font-semibold text-blue-900 mb-2">{dept.name}</h3>
                                        <p className="text-gray-600 text-sm line-clamp-3">{dept.content}</p>
                                        <a
                                            href={dept.link}
                                            className="mt-4 inline-flex items-center text-blue-800 hover:underline group"
                                        >
                                            <span> {translations?.read_more || 'अधिक पढ़ें'}</span>
                                            <span className="ml-2 border-t-2 border-blue-800 w-0 group-hover:w-12 transition-all duration-300"></span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <Footer translations={translations} />
            </div>
        </>
    );
};