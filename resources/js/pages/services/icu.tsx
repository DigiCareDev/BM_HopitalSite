import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Treatment from '../components/Treatment';
import Footer from '../components/Footer';
import {
    FaHeartbeat,
    FaUserMd,
    FaProcedures,
    FaShieldVirus,
    FaBed,
    FaHandsHelping,
    FaRegClock,
    FaMicrochip,
    FaHospitalAlt
} from "react-icons/fa";
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Logo from "@/assets/Logo.webp"

export default function Icu() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }
   
    const TreatmentData = [
        {
            "heading": translations?.icu || 'इंटेंसिव केयर यूनिट (गहन चिकित्सा इकाई)',
            "hero": {
                "heading": translations?.icu_heading || "बीएम अस्पताल की गहन चिकित्सा इकाई (ICU) – जीवन रक्षक देखभाल",
                "paragraph": translations?.icu_title || "बीएम अस्पताल की गहन चिकित्सा इकाई (ICU) उन रोगियों के लिए उन्नत, जीवन रक्षक देखभाल प्रदान करती है जो गंभीर स्थिति में होते हैं और जिन्हें निरंतर निगरानी और विशेष उपचार की आवश्यकता होती है। हमारा ICU अत्याधुनिक तकनीक जैसे वेंटिलेटर, कार्डियक मॉनिटर, इन्फ्यूजन पंप और डिफिब्रिलेटर से सुसज्जित है, जो गंभीर बीमारियों से पीड़ित मरीजों को 24/7 समर्थन प्रदान करता है। यह अनुभवी इंटेंसिविस्ट, क्रिटिकल केयर नर्सों और आपातकालीन प्रतिक्रिया टीम द्वारा संचालित होता है जो कार्डियक अरेस्ट, स्ट्रोक, मल्टी-ऑर्गन फेल्योर, सांस लेने में तकलीफ और सर्जरी के बाद की जटिलताओं जैसे मामलों का प्रबंधन करते हैं।",
                "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.icu_services_title || "24x7 गहन चिकित्सा इकाई (ICU)",
                "description": translations?.icu_services_description || "बीएम अस्पताल की ICU सेवाएं जानलेवा आपात स्थितियों को संभालने के लिए उन्नत निगरानी, कुशल विशेषज्ञों और सहानुभूतिपूर्ण देखभाल से 24x7 तैयार रहती हैं।",

                "services": [
                    {
                        title: translations?.icu_services_title || "उन्नत रोगी निगरानी",
                        desc: translations?.icu_services_desc || "ICU-ग्रेड मॉनिटरों, वेंटिलेटरों और टेलीमेट्री सिस्टम से महत्वपूर्ण संकेतों की रीयल-टाइम निगरानी सुनिश्चित की जाती है।",
                        icon: <FaHeartbeat className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        title: translations?.icu_services_title02 || "क्रिटिकल केयर विशेषज्ञ",
                        desc: translations?.icu_services_desc02 || "इंटेंसिविस्ट, क्रिटिकल केयर नर्स और रेस्पिरेटरी थेरेपिस्ट की समर्पित टीम हमेशा उपलब्ध रहती है।",
                        icon: <FaUserMd className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        title: translations?.icu_services_title03 ||"आपातकालीन जीवन समर्थन",
                        desc: translations?.icu_services_desc03 ||"डिफिब्रिलेटर, ऑक्सीजन थेरेपी, इन्फ्यूजन पंप और उन्नत एयरवे मैनेजमेंट के साथ तेज़ पुनर्जीवन और स्थिरीकरण।",
                        icon: <FaProcedures className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        title: translations?.icu_services_title04 ||  "संक्रमण नियंत्रण प्रोटोकॉल",
                        desc: translations?.icu_services_desc04 ||"कड़े स्वच्छता मानकों और नकारात्मक दबाव वाले कमरों के माध्यम से संक्रमण का जोखिम कम किया जाता है।",
                        icon: <FaShieldVirus className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        title: translations?.icu_services_title05 ||  "सर्जरी के बाद देखभाल",
                        desc: translations?.icu_services_desc05 || "प्रमुख सर्जरी के बाद मॉड्यूलर ऑपरेशन थियेटर से ICU में निर्बाध ट्रांसफर और निगरानी।",
                        icon: <FaBed className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        title: translations?.icu_services_title06 ||  "मल्टी-ऑर्गन सपोर्ट सिस्टम",
                        desc: translations?.icu_services_desc06 ||"मल्टी-ऑर्गन फेल्योर के मामलों में डायलिसिस, कार्डियक मॉनिटरिंग और वेंटिलेटर समर्थन।",
                        icon: <FaHandsHelping className="text-4xl text-[#80CAC7]" />
                    },
                ],
                "cta": {
                    "label": translations?.Request_Now || "अनुरोध करें",
                    "href": "/book-ambulance",
                    "helpline": "+917318000753",
                    "link": "tel:+917318000753"
                }
            },
            "blood_bank": {
                "title": translations?.icu_servicess_title || "गहन चिकित्सा इकाई (ICU) सेवाएं",
                "description": translations?.icu_servicess_description || "गहन चिकित्सा इकाई (ICU) – हर सर्जरी के बाद निर्बाध समर्थन",
                "services": [
                    {
                        title: translations?.icu_services_title1 || "तत्काल सर्जरी के बाद की निगरानी",
                        desc: translations?.icu_services_desc1 || "हमारे मॉड्यूलर ऑपरेशन थियेटर से सीधे ICU में ट्रांसफर के साथ निरंतर निगरानी, दर्द नियंत्रण और जटिलताओं का त्वरित समाधान।",
                        icon: <FaRegClock className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        title: translations?.icu_services_title2 || "उन्नत जीवन समर्थन तकनीक",
                        desc: translations?.icu_services_desc2 || "वेंटिलेटर, कार्डियक मॉनिटर, डायलिसिस यूनिट और इन्फ्यूजन पंप के साथ गंभीर मरीजों को पूर्ण अंग समर्थन।",
                        icon: <FaMicrochip className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        title: translations?.icu_services_title3 || "24x7 बहु-विषयक देखभाल टीम",
                        desc: translations?.icu_services_desc3 || "इंटेंसिविस्ट, नर्स, रेस्पिरेटरी थेरेपिस्ट और ऑन-कॉल विशेषज्ञ मिलकर व्यक्तिगत और प्रमाण-आधारित देखभाल प्रदान करते हैं।",
                        icon: <FaHospitalAlt className="text-4xl text-[#80CAC7]" />
                    }
                ],
                "cta": {
                    "image": Logo,
                    "alt": 'Blood Donation',
                    "title": translations?.icu_cta_title || "बीएम अस्पताल की गहन चिकित्सा इकाई (ICU) सेवाएं चुनें",
                    "description": translations?.icu_cta_desc || "हर 2 सेकंड में किसी को रक्त की आवश्यकता होती है। रक्तदाता बनकर हमें मजबूत और सुरक्षित रक्त आपूर्ति बनाए रखने में मदद करें।",
                    "points": [
                        translations?.icu_cta_points_one || "तत्काल प्रतिक्रिया – हमारी ICU हर सेकंड मायने रखती है और आपात स्थितियों में जीवन रक्षक सहायता प्रदान करती है।",
                        translations?.icu_cta_points_two || "गंभीर रिकवरी में समर्थन – उन्नत मॉनिटरिंग और ऑर्गन सपोर्ट के साथ हम सर्जरी के बाद या तीव्र बीमारी के दौरान रोगियों को स्थिर करते हैं।",
                        translations?.icu_cta_points_three || "विशेषज्ञ देखभाल – ICU की बहु-विषयक टीम लगातार देखभाल प्रदान करती है, ताकि आपके प्रियजनों को दिन-रात सर्वोत्तम देखभाल मिल सके।",
                    ],
                    "cta_button": {
                        "text": "Become a Donor",
                        "href": "/donate-now"
                    }
                },
                "final_cta": {
                    "heading": translations?.icu_final_cta_heading || "बीएम अस्पताल की गहन चिकित्सा इकाई (ICU) सेवाएं चुनें",
                    "paragraph": translations?.icu_final_cta_paragraph || "हमारी ICU हर आपात स्थिति में तुरंत प्रतिक्रिया देती है और जीवन बचाने में मदद करती है।",
                    "buttons": [
                        {
                            "text": translations?.icu_final_buttons0 || "समय तय करें",
                            "href": "/register-donor",
                            "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                        },
                        {
                            "text": translations?.icu_final_buttons1 || "कॉल का अनुरोध करें",
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
