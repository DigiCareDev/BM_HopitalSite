import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Treatment from '../components/Treatment';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import MedicineAccess from "@/assets/services/Pharmacy/24x7 Medicine Access.svg";
import Pharmacy24 from "@/assets/services/Pharmacy/24x7 Pharmacy.svg";
import AP from "@/assets/services/Pharmacy/Affordable Pricing.svg";
import ASG from "@/assets/services/Pharmacy/Authentic & Safe Drugs.svg";
import CMO from "@/assets/services/Pharmacy/Certified Medicines Only.svg";
import EDA from "@/assets/services/Pharmacy/Emergency Drug Access.svg";
import EPG from "@/assets/services/Pharmacy/Expert Pharmacist Guidance.svg";
import EPS from "@/assets/services/Pharmacy/Expert Pharmacist Support.svg";
import IHC from "@/assets/services/Pharmacy/In-Hospital Convenience.svg";
import RCA from "@/assets/services/Pharmacy/Round-the-Clock Availability.svg";
import CPS from "@/assets/services/Pharmacy/Choose BM Hospital’s Pharmacy Services.svg";



export default function Pharmacy() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const TreatmentData = [
        {
            "heading": translations?.Pharmacy || 'फार्मेसी(औषधालय )',
            "hero": {
                "heading": translations?.pharmacy_heading || "बीएम अस्पताल में 24x7 फार्मेसी – जब भी जरूरत हो, विश्वसनीय दवाएं",
                "paragraph": translations?.pharmacy_title || "बीएम अस्पताल की इन-हाउस फार्मेसी चौबीसों घंटे प्रामाणिक, गुणवत्ता-युक्त दवाओं, सर्जिकल आइटम्स और स्वास्थ्य आवश्यकताओं की विस्तृत रेंज उपलब्ध कराती है। अस्पताल परिसर में ही स्थित हमारी फार्मेसी इनपेशेंट्स, आउटपेशेंट्स और आपातकालीन मामलों के लिए समय पर दवाएं सुनिश्चित करती है। प्रमाणित फार्मासिस्ट द्वारा संचालित, हम भंडारण, वितरण और सत्यापन के कड़े मानकों का पालन करते हैं ताकि रोगियों की सुरक्षा सुनिश्चित की जा सके। हमारी फार्मेसी जीवनरक्षक दवाओं, विशेष दवाओं और ओटीसी उत्पादों का भंडारण करती है।",
                "image": Pharmacy24,
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.pharmacy_services_title || "24x7 फार्मेसी सेवाएं",
                "description": translations?.pharmacy_services_description || "24x7 फार्मेसी सेवाएं – जब भी जरूरत हो, विश्वसनीय दवाएं",
                "services": [
                    {
                        "title": translations?.pharmacy_services_title || "चौबीसों घंटे उपलब्धता",
                        "desc": translations?.pharmacy_services_desc || "हर दिन, किसी भी समय आवश्यक और आपातकालीन दवाओं तक पहुंच।",
                        "icon": RCA,
                    },
                    {
                        "title": translations?.pharmacy_services_title02 || "अस्पताल में ही सुविधा",
                        "desc": translations?.pharmacy_services_desc02 || "इनपेशेंट और ओपीडी विजिटर्स के लिए तेज और सुविधाजनक दवा आपूर्ति।",
                        "icon": IHC,
                    },
                    {
                        "title": translations?.pharmacy_services_title03 || "केवल प्रमाणित दवाएं",
                        "desc": translations?.pharmacy_services_desc03 || "हम सुरक्षित और प्रभावी इलाज के लिए केवल प्रामाणिक, उच्च गुणवत्ता और सरकारी स्वीकृत दवाएं वितरित करते हैं।",
                        "icon": CMO,
                    },
                    {
                        "title": translations?.pharmacy_services_title04 || "विशेषज्ञ फार्मासिस्ट सहायता",
                        "desc": translations?.pharmacy_services_desc04 || "योग्य फार्मासिस्ट डोज, प्रिस्क्रिप्शन और दवा के पारस्परिक प्रभावों में मार्गदर्शन प्रदान करते हैं।",
                        "icon": EPS,
                    },
                    {
                        "title": translations?.pharmacy_services_title05 || "आपातकालीन दवा उपलब्धता",
                        "desc": translations?.pharmacy_services_desc05 || "गंभीर रोगियों की आवश्यकताओं के लिए जीवनरक्षक और दुर्लभ दवाओं का भंडारण।",
                        "icon": EDA,
                    },
                    {
                        "title": translations?.pharmacy_services_title06 || "वाजिब मूल्य निर्धारण",
                        "desc": translations?.pharmacy_services_desc06 || "वित्तीय बोझ के बिना पहुंच सुनिश्चित करने के लिए पारदर्शी और उचित मूल्य।",
                        "icon": AP,
                    }
                ],
                "cta": {
                    "label": translations?.Request_Now || "अभी अनुरोध करें",
                    "href": "/book-ambulance",
                    "helpline": "+917318000753",
                    "link": "tel:+7318000753"
                }
            },
            "blood_bank": {
                "title": translations?.pharmacy_servicess_title || "फार्मेसी सेवाएं",
                "description": translations?.pharmacy_servicess_description || "फार्मेसी सेवाएं – बीएम अस्पताल में 24x7 विश्वसनीय दवा समर्थन",
                "services": [
                    {
                        "title": translations?.pharmacy_services_title1 || "24x7 दवा उपलब्धता",
                        "desc": translations?.pharmacy_services_desc1 || "हमारी इन-हाउस फार्मेसी चौबीसों घंटे कार्यरत है, जिससे आवश्यक और आपातकालीन दवाओं की समय पर उपलब्धता सुनिश्चित होती है।",
                        "icon": MedicineAccess,
                    },
                    {
                        "title": translations?.pharmacy_services_title2 || "प्रामाणिक और सुरक्षित दवाएं",
                        "desc": translations?.pharmacy_services_desc2 || "हम केवल प्रमाणित, उच्च गुणवत्ता वाली दवाएं प्रदान करते हैं जो सुरक्षा और नियामक मानकों का पालन करती हैं।",
                        "icon": ASG,
                    },
                    {
                        "title": translations?.pharmacy_services_title3 || "विशेषज्ञ फार्मासिस्ट मार्गदर्शन",
                        "desc": translations?.pharmacy_services_desc3 || "कुशल फार्मासिस्ट डोज, उपयोग निर्देश और दवा संबंधी प्रश्नों में सहायता करते हैं।",
                        "icon": EPG,
                    }
                ],
                "cta": {
                    "image": CPS,
                    "alt": 'Blood Donation',
                    "title": translations?.pharmacy_cta_title || "बीएम अस्पताल की फार्मेसी सेवाएं चुनें",
                    "description": translations?.pharmacy_cta_desc || "हर 2 सेकंड में किसी को खून की जरूरत होती है। रक्तदाता बनकर हमें एक मजबूत और सुरक्षित रक्त आपूर्ति बनाए रखने में मदद करें।",
                    "points": [
                        translations?.pharmacy_cta_points_one || "समय पर उपचार सुनिश्चित करें – जीवनरक्षक और आवश्यक दवाओं की 24x7 पहुंच प्राप्त करें।",
                        translations?.pharmacy_cta_points_two || "हर खुराक में विश्वास – विशेषज्ञ फार्मासिस्ट की निगरानी में प्रमाणित, उच्च गुणवत्ता वाली दवाएं वितरित की जाती हैं।",
                        translations?.pharmacy_cta_points_three || "सुरक्षित उपचार को समर्थन दें – सर्वोत्तम उपचार परिणामों के लिए सटीक प्रिस्क्रिप्शन और पेशेवर मार्गदर्शन पर भरोसा करें।",
                    ],
                    "cta_button": {
                        "text": "Become a Donor",
                        "href": "/donate-now"
                    }
                },
                "final_cta": {
                    "heading": translations?.pharmacy_final_cta_heading || "बीएम अस्पताल की फार्मेसी सेवाएं चुनें",
                    "paragraph": translations?.pharmacy_final_cta_paragraph || "बनें उनके लिए ताकत – सुनिश्चित करें कि आपके प्रियजनों को 24x7 विशेषज्ञ देखभाल और निरंतर चिकित्सा सहायता प्राप्त हो।",
                    "buttons": [
                        {
                            "text": translations?.pharmacy_final_buttons0 || "शेड्यूल के लिए अनुरोध करें",
                            "href": "/register-donor",
                            "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                        },
                        {
                            "text": translations?.pharmacy_final_buttons1 || "कॉल अनुरोध करें",
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
        <>
            <div>
                <BackToTop />
                <Subnav onTranslations={handletranslate} />
                <Navbar translations={translations}/>
                <Treatment TreatmentData={TreatmentData} />
                <Footer translations={translations} />
            </div>
        </>
    )
}
