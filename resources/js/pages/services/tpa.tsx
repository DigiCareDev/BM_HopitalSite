import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Treatment from '../components/Treatment';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Banner from "@/assets/services/Insurance and TPA/Insurance and TPA Services.svg";
import HS from "@/assets/services/Insurance and TPA/24x7 Helpdesk Support.svg";
import CA from "@/assets/services/Insurance and TPA/Cashless Admission.svg";
import DA from "@/assets/services/Insurance and TPA/Discharge Assistance.svg";
import EITU from "@/assets/services/Insurance and TPA/Extensive Insurance Tie-Ups.svg";
import ICP from "@/assets/services/Insurance and TPA/Instant Claim Processing.svg";
import TB from "@/assets/services/Insurance and TPA/Transparent Billing.svg";
import CAD from "@/assets/services/Insurance and TPA/24x7 Claim Assistance Desk.svg";
import TNOP from "@/assets/services/Insurance and TPA/Trusted Network of Partners.svg";
import CHS from "@/assets/services/Insurance and TPA/Cashless Hospitalization Support.svg";
import CTPA from "@/assets/services/Insurance and TPA/Choose BM Hospital’s Insurance and TPA Services.svg";

export default function Tpa() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }
   
    const TreatmentData = [
        {
            "heading": translations?.tpa || 'बीमा(इंश्योरेंस) और टीपीए',
            "hero": {
                "heading": translations?.tpa_heading || "बीएम अस्पताल में निर्बाध बीमा और टीपीए सेवाएं – परेशानी मुक्त स्वास्थ्य सेवा का अनुभव",
                "paragraph": translations?.tpa_title || "बीएम अस्पताल विभिन्न स्वास्थ्य बीमा योजनाओं के तहत कवर किए गए मरीजों के लिए सुगम और नकद रहित अस्पताल में भर्ती सुनिश्चित करने के लिए समर्पित बीमा और टीपीए सहायता प्रदान करता है। हमारा विशेषज्ञ बिलिंग और बीमा समन्वयक दल प्रमुख तृतीय पक्ष प्रशासकों (TPAs) और बीमा प्रदाताओं के साथ मिलकर काम करता है ताकि भर्ती, उपचार और डिस्चार्ज की प्रक्रिया को सरल बनाया जा सके। दस्तावेज़ीकरण सहायता से लेकर दावे की स्वीकृति तक, हम हर चरण में पारदर्शिता और समय पर संवाद सुनिश्चित करते हैं। चाहे आपातकालीन भर्ती हो या नियोजित सर्जरी – हम आपकी स्वास्थ्य बीमा सुविधाओं तक त्वरित पहुंच प्रदान करते हैं।",
                "image": Banner,
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.tpa_services_title || "24x7 बीमा और टीपीए सेवाएं",
                "description": translations?.tpa_services_description || "बीएम अस्पताल चौबीसों घंटे बीमा और टीपीए सेवाएं प्रदान करता है ताकि मेडिकल क्लेम प्रक्रिया सरल और तनावमुक्त हो।",
                "services": [
                    {
                        "title": translations?.tpa_services_title || "कैशलेस भर्ती",
                        "desc": translations?.tpa_services_desc || "सम्बद्ध बीमा एवं टीपीए भागीदारों के माध्यम से बिना अग्रिम भुगतान के इलाज प्राप्त करें।",
                        "icon": CA,
                    },
                    {
                        "title": translations?.tpa_services_title02 || "24x7 हेल्पडेस्क सहायता",
                        "desc":  translations?.tpa_services_desc02 || "हमारा बीमा डेस्क कभी भी क्लेम, दस्तावेज और अनुमोदनों में सहायता करता है।",
                        "icon": HS,
                    },
                    {
                        "title": translations?.tpa_services_title03 ||"त्वरित क्लेम प्रोसेसिंग",
                        "desc":  translations?.tpa_services_desc03 ||"आपातकालीन और नियोजित भर्ती के लिए टीपीए के साथ शीघ्र समन्वय।",
                        "icon": ICP
                    },
                    {
                        "title": translations?.tpa_services_title04 ||  "व्यापक बीमा टाई-अप",
                        "desc":  translations?.tpa_services_desc04 ||"प्रमुख बीमा कंपनियों और टीपीए के साथ साझेदारी से व्यापक मरीज सहायता।",
                        "icon": EITU,
                    },
                    {
                        "title":  translations?.tpa_services_title05 || "पारदर्शी बिलिंग",
                        "desc":  translations?.tpa_services_desc05 || "इलाज की पूरी लागत की स्पष्ट जानकारी और पूरी प्रक्रिया के दौरान सहयोग।",
                        "icon": TB,
                    },
                    {
                        "title": translations?.tpa_services_title06 ||  "डिस्चार्ज सहायता",
                        "desc":  translations?.tpa_services_desc06 ||"रिकवरी के बाद सुगम क्लेम सेटलमेंट और मार्गदर्शित डिस्चार्ज प्रक्रिया।",
                        "icon": DA,
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
                "title": translations?.tpa_servicess_title || "बीमा और टीपीए सेवाएं",
                "description": translations?.tpa_servicess_description || "बीएम अस्पताल में बीमा और टीपीए सेवाएं – आसान, कुशल और हर समय उपलब्ध",
                "services": [
                    {
                        "title": translations?.tpa_services_title1 || "कैशलेस अस्पताल में भर्ती सहायता",
                        "desc": translations?.tpa_services_desc1 || "हम प्रमुख बीमा प्रदाताओं और तृतीय पक्ष प्रशासकों (TPAs) के माध्यम से निर्बाध कैशलेस भर्ती की सुविधा प्रदान करते हैं।",
                        "icon": CHS,
                    },
                    {
                      "title": translations?.tpa_services_title2 || "24x7 क्लेम सहायता डेस्क",
                        "desc": translations?.tpa_services_desc2 || "हमारी विशेषज्ञ टीम हर समय दस्तावेज़ीकरण, अनुमोदन और पूछताछ का प्रबंधन करती है।",
                        "icon": CAD,
                    },
                    {
                       "title": translations?.tpa_services_title3 || "विश्वसनीय भागीदार नेटवर्क",
                        "desc": translations?.tpa_services_desc3 ||  "प्रमुख बीमा कंपनियों और टीपीए के साथ साझेदारी – व्यापक कवरेज और तेज़ प्रोसेसिंग के लिए।",
                        "icon": TNOP,
                    }
                ],
                "cta": {
                    "image": CTPA,
                    "alt": 'Blood Donation',
                    "title": translations?.tpa_cta_title || "चुनें बीएम अस्पताल की बीमा और टीपीए सेवाएं",
                    "description": translations?.tpa_cta_desc || "हर 2 सेकंड में किसी को रक्त की आवश्यकता होती है। एक डोनर बनकर हमें सुरक्षित और सशक्त रक्त आपूर्ति बनाए रखने में मदद करें।",
                    "points": [
                        translations?.tpa_cta_points_one || "आर्थिक शांति सुनिश्चित करें - निर्बाध कैशलेस भर्ती के माध्यम से उच्च गुणवत्ता वाली चिकित्सा सेवाएं प्राप्त करें।",
                        translations?.tpa_cta_points_two || "अपने प्रियजनों को तुरंत सहायता दें - हमारी 24x7 क्लेम सहायता आपातकाल या नियोजित उपचार में देरी नहीं होने देती।",
                        translations?.tpa_cta_points_three || "भरोसेमंद नेटवर्क पर विश्वास करें - बीमा और टीपीए भागीदारों के साथ हमारा सहयोग आपकी स्वास्थ्य सेवा यात्रा को आसान बनाता है।",
                    ],
                    "cta_button": {
                        "text": "Become a Donor",
                        "href": "/donate-now"
                    }
                },
                "final_cta": {
                    "heading": translations?.tpa_final_cta_heading || "बीएम अस्पताल की बीमा और टीपीए सेवाएं चुनें।",
                    "paragraph": translations?.tpa_final_cta_paragraph || "निर्बाध कैशलेस भर्ती के माध्यम से वित्तीय तनाव के बिना सर्वोत्तम उपचार प्राप्त करें।",
                    "buttons": [
                        {
                            "text": translations?.tpa_final_buttons0 || "शेड्यूल के लिए अनुरोध करें",
                            "href": "/register-donor",
                            "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                        },
                        {
                            "text": translations?.tpa_final_buttons1 || "अनुरोध करें",
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
