import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer';
import Treatment from '../components/Treatment';
import {
    FaAmbulance,
    FaHeartbeat,
    FaBaby,
    FaTruckMoving,
    FaSyringe,
    FaMapMarkedAlt,
    FaPhoneAlt,
    FaRegAddressCard,
    FaCheckCircle
} from "react-icons/fa";
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Logo from "@/assets/Logo.webp"



export default function Ambulance() {
      const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const TreatmentData = [
        {
            "heading": translations?.Ambulance || ' एम्बुलेंस(रोगी-वाहन)',
            "hero": {
                "heading": translations?.Ambulance_heading || 'बीएम अस्पताल की 24/7 आपातकालीन एम्बुलेंस सेवा – त्वरित, सुरक्षित और विश्वसनीय चिकित्सा परिवहन',
                "paragraph": translations?.Ambulance_title || "बीएम अस्पताल चौबीसों घंटे एम्बुलेंस सेवाएं प्रदान करता है ताकि गंभीर परिस्थितियों में तुरंत चिकित्सा सहायता मिल सके। हमारी एम्बुलेंस सुविधाओं से लैस होती हैं और इनमें प्रशिक्षित पैरामेडिक्स व आपातकालीन चिकित्सा तकनीशियन होते हैं जो अस्पताल पहुंचने तक जीवन रक्षक देखभाल प्रदान करते हैं। चाहे सड़क दुर्घटना हो, हृदय आपातकाल, ट्रॉमा, या किसी अन्य अस्पताल में स्थानांतरण की आवश्यकता हो – हमारी एम्बुलेंस सेवा त्वरित प्रतिक्रिया और हमारे आपातकालीन विभाग से समन्वय सुनिश्चित करती है। प्रत्येक एम्बुलेंस में ऑक्सीजन सपोर्ट, डिफाइब्रिलेटर, स्ट्रेचर और आवश्यक आपातकालीन दवाएं उपलब्ध होती हैं।",
                "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.ambulance_services_title || '24x7 एम्बुलेंस सेवाएं',
                "description": translations?.ambulance_services_description || "दिन हो या रात, हम हमेशा तैयार हैं – आपकी सेवा में भरोसेमंद 24x7 एम्बुलेंस सेवा!",
                "services": [
                    {
                        title: translations?.services_title || "बेसिक लाइफ सपोर्ट (BLS)",
                        desc: translations?.services_desc || "ऑक्सीजन सप्लाई, सक्शन यूनिट, स्ट्रेचर, सामान्य दवाएं, प्रशिक्षित चिकित्सा स्टाफ।",
                        icon: <FaAmbulance className="text-3xl text-red-600" />
                    },
                    {
                        title: translations?.services_title2 || "एडवांस्ड लाइफ सपोर्ट (ALS)",
                        desc: translations?.services_desc2 || "वेंटिलेटर, डिफाइब्रिलेटर, ईसीजी मॉनिटर, आईवी पंप, ऑक्सीजन, सक्शन, आपातकालीन दवाएं।",
                        icon: <FaHeartbeat className="text-3xl text-red-600" />
                    },
                    {
                        title: translations?.services_title3 || "नवजात शिशु एम्बुलेंस",
                        desc: translations?.services_desc3 || "इनक्यूबेटर, वेंटिलेटर, ऑक्सीजन सपोर्ट, इन्फ्यूजन पंप, रैडिएंट वॉर्मर, प्रशिक्षित नवजात देखभाल स्टाफ।",
                        icon: <FaBaby className="text-3xl text-pink-500" />
                    },
                    {
                        title: translations?.services_title4 || "मृत शरीर के लिए एम्बुलेंस",
                        desc: translations?.services_desc4 || "सम्मानपूर्वक व्यवस्था वाली शववाहन सेवा।",
                        icon: <FaTruckMoving className="text-3xl text-gray-600" />
                    },
                    {
                        title: translations?.services_title5 || "लंबी दूरी की ट्रांसफर सेवा",
                        desc: translations?.services_desc5 || "आरामदायक स्ट्रेचर, ऑक्सीजन, वेंटिलेटर, निगरानी उपकरण, आईवी सपोर्ट, चिकित्सा एस्कॉर्ट टीम।",
                        icon: <FaSyringe className="text-3xl text-red-500" />
                    },
                    {
                        title: translations?.services_title6 || "आपातकालीन प्रतिक्रिया",
                        desc: translations?.services_desc6 || "त्वरित डिस्पैच, जीपीएस ट्रैकिंग, प्रशिक्षित पैरामेडिक्स, मेडिकल उपकरण, 24/7 उपलब्धता, समन्वय।",
                        icon: <FaMapMarkedAlt className="text-3xl text-blue-600" />
                    },
                ],
                "cta": {
                    "label": translations?.ambulance_services_cta_label || "अब एम्बुलेंस बुक करें",
                    "href": "/book-ambulance",
                    "helpline": "+91-7318000753",
                    "link": "tel:+917318000753"
                }
            },
            "blood_bank": {
                "title": translations?.ambulance_services_title || "हमारी एम्बुलेंस कैसे बुक करें",
                "description": translations?.ambulance_services_description || "बीएम अस्पताल में एम्बुलेंस बुक करना तेज, सरल और 24x7 उपलब्ध है।",
                "services": [
                    {
                        title: translations?.ambulance_services_services_title || "हेल्पलाइन पर कॉल करें",
                        desc: translations?.ambulance_services_services_desc || "तत्काल एम्बुलेंस सहायता के लिए कभी भी +91-7318000751 – 55 पर कॉल करें।",
                        icon: <FaPhoneAlt className="text-3xl text-green-600" />
                    },
                    {
                        title: translations?.ambulance_services_services_title2 || "रोगी का विवरण दें",
                        desc: translations?.ambulance_services_services_desc2 || "तेजी से सेवा के लिए स्थान, स्थिति और आवश्यक एम्बुलेंस प्रकार की जानकारी साझा करें।",
                        icon: <FaRegAddressCard className="text-3xl text-blue-700" />
                    },
                    {
                        title: translations?.ambulance_services_services_title3 || "पुष्टि और डिस्पैच",
                        desc: translations?.ambulance_services_services_desc3 || "बुकिंग की पुष्टि और एम्बुलेंस की लोकेशन का रीयल-टाइम अपडेट प्राप्त करें।",
                        icon: <FaCheckCircle className="text-3xl text-green-500" />
                    }

                ],
                "cta": {
                    "image": Logo,
                    "alt": 'Blood Donation',
                    "title": translations?.ambulance_cta_title || "आपात स्थिति के लिए तैयारी – बीएम अस्पताल एम्बुलेंस सेवा के साथ सुरक्षित रहें",
                    "description": translations?.ambulance_cta_desc || "तेजी से की गई कार्रवाई जीवन बचा सकती है। आपातकाल से पहले कैसे तैयार रहें – जानिए",

                    "points": [
                        translations?.ambulance_cta_points_one || "आपातकालीन नंबर सेव करें – तुरंत एम्बुलेंस के लिए अपने फोन में +91-7318000751 – 55 सेव रखें।",
                        translations?.ambulance_cta_points_two || "चिकित्सा जानकारी तैयार रखें – दवाएं, एलर्जी और मेडिकल हिस्ट्री की सूची बनाकर रखें।",
                        translations?.ambulance_cta_points_three || "अपने स्थान की जानकारी रखें – तेजी से सेवा के लिए अपना पता और पास के लैंडमार्क जानें।",
                        translations?.ambulance_cta_points_four || "आज की तैयारी, कल की तेज़ देखभाल सुनिश्चित करती है – बीएम अस्पताल की एम्बुलेंस सेवा पर भरोसा करें।",
                    ],
                },
                "final_cta": {
                    "heading": translations?.ambulance_final_cta_heading || "बीएम अस्पताल की एम्बुलेंस सेवा चुनें",
                    "paragraph": translations?.ambulance_final_cta_paragraph || "दवाओं, एलर्जी और चिकित्सा इतिहास की सूची जल्दी पहुंच के लिए तैयार रखें।",
                    "buttons": [
                        // {
                        //     "text": "Request for schedule",
                        //     "href": "/register-donor",
                        //     "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                        // },
                        {
                            "text": translations?.ambulance_final_buttons_text || "कॉल का अनुरोध करें",
                            "href": "tel:+917318000753",
                            "classes": "text-white bg-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-900",
                        }
                    ]
                }
            },
            "testimonials": {
                "title": "Real Stories from Our Patients",
                "testimonial": [
                    {
                        "name": "Priya Desai",
                        "feedback": "Their ambulance reached my house within 8 minutes. The staff was well-trained and caring."
                    },
                    {
                        "name": "Ravindra Joshi",
                        "feedback": "I used their long-distance ambulance. Clean, comfortable and monitored throughout the trip."
                    },
                    {
                        "name": "Zoya Ahmad",
                        "feedback": "Life-savers! Quick, professional, and affordable. Highly recommend in emergencies."
                    }
                ]
            }
        }
    ];


    return (
        <div>
           <BackToTop />
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations}/>
            <Treatment TreatmentData={TreatmentData} />
            <Footer translations={translations} />
        </div>
    )
}
