import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Treatment from '../components/Treatment';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Availability from '@/assets/services/Pathology/24x7 Availability.svg';
import ALT from '@/assets/services/Pathology/Accurate Lab Testing.svg';
import ADT from '@/assets/services/Pathology/Advanced Diagnostic Technology.svg';
import APS from '@/assets/services/Pathology/Advanced Pathology Services.svg';
import BM from '@/assets/services/Pathology/Biochemistry & Hematology.svg';
import CTM from '@/assets/services/Pathology/Comprehensive Test Menu.svg';
import EP from '@/assets/services/Pathology/Expert Pathologists.svg';
import HC from '@/assets/services/Pathology/Histopathology & Cytology.svg';
import HSC from '@/assets/services/Pathology/Home Sample Collection.svg';
import MS from '@/assets/services/Pathology/Microbiology & Serology.svg';
import CPS from '@/assets/services/Pathology/Choose BM Hospital’s Pathology Services.svg';

export default function Pathlogy() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const TreatmentData = [
        {
            "heading": translations?.Pathlogy || 'पैथोलॉजी (रोग विशेषज्ञता)',
            "hero": {
                "heading": translations?.pathlogy_heading || "बीएम अस्पताल में उन्नत पैथोलॉजी सेवाएं – सटीक निदान, भरोसेमंद परिणाम",
                "paragraph": translations?.pathlogy_title || "बीएम अस्पताल का पैथोलॉजी विभाग उन्नत परीक्षण और विश्लेषण के माध्यम से व्यापक डायग्नोस्टिक समाधान प्रदान करता है। हमारी प्रयोगशाला आधुनिक तकनीक और स्वचालित सिस्टम से सुसज्जित है, जो रक्त परीक्षण, मूत्र परीक्षण, बायोप्सी, साइटोलॉजी और हिस्टोपैथोलॉजी सहित विभिन्न परीक्षणों में सटीक, समय पर और विश्वसनीय परिणाम सुनिश्चित करती है। योग्य पैथोलॉजिस्ट और लैब तकनीशियनों की टीम कठोर गुणवत्ता नियंत्रण और सुरक्षा मानकों का पालन करती है। हम सभी क्लीनिकल विभागों को तेजी से और विस्तृत रिपोर्ट देकर निदान, उपचार योजना और स्वास्थ्य निगरानी में सहायता प्रदान करते हैं।",
                "image": APS,
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.pathlogy_services_title || "24x7 पैथोलॉजी सेवाएं",
                "description": translations?.pathlogy_services_description || "24x7 पैथोलॉजी सेवाएं – जब भी आवश्यकता हो, सटीक डायग्नोस्टिक्स",
                "services": [
                    {
                        title:  translations?.pathlogy_services_title || "व्यापक परीक्षण मेनू",
                        desc:  translations?.pathlogy_services_desc || "सटीक निदान और उपचार योजना के लिए रक्त, मूत्र, मल और ऊतक परीक्षणों की पूरी श्रृंखला।",
                        icon: CTM,
                    },
                    {
                        title:  translations?.pathlogy_services_title02 || "उन्नत डायग्नोस्टिक तकनीक",
                        desc:  translations?.pathlogy_services_desc02 || "पूरी तरह से स्वचालित विश्लेषकों से सुसज्जित, जो तेज, सटीक और विश्वसनीय परिणाम प्रदान करते हैं।",
                        icon: ADT,
                    },
                    {
                        title:  translations?.pathlogy_services_title04 || "माइक्रोबायोलॉजी और सेरोलॉजी",
                        desc:  translations?.pathlogy_services_desc04 || "उन्नत तकनीकों के माध्यम से संक्रमण, वायरस और प्रतिरक्षा प्रतिक्रिया का सटीक पता लगाना।",
                        icon: MS,
                    },
                    {
                        title:  translations?.pathlogy_services_title05 || "हिस्टोपैथोलॉजी और साइटोलॉजी",
                        desc:  translations?.pathlogy_services_desc05 || "कैंसर और रोगों का पता लगाने के लिए बायोप्सी और ऊतक नमूनों का विशेषज्ञ विश्लेषण।",
                        icon: HC,
                    },
                    {
                        title:  translations?.pathlogy_services_title06 || "होम सैंपल कलेक्शन",
                        desc:  translations?.pathlogy_services_desc06 || "जो मरीज अस्पताल नहीं आ सकते, उनके लिए सुविधाजनक डोरस्टेप सेवा।",
                        icon: HSC,
                    },
                    {
                        title: translations?.pathlogy_services_title03 || "बायोकैमिस्ट्री और हीमैटोलॉजी",
                        desc:  translations?.pathlogy_services_desc03 || "लीवर फंक्शन, किडनी फंक्शन, सीबीसी और ब्लड ग्लूकोज जैसे महत्वपूर्ण परीक्षण चौबीसों घंटे उपलब्ध।",
                        icon: BM,
                    },
                ],
                "cta": {
                    "label": translations?.Request_Now || "अभी अनुरोध करें",
                    "href": "/book-ambulance",
                    "helpline": "+917318000753",
                    "link": "tel:+7318000753"
                }
            },
            "blood_bank": {
                "title": translations?.pathlogy_servicess_title || "पैथोलॉजी सेवाएं",
                "description": translations?.pathlogy_servicess_description || "पैथोलॉजी सेवाएं – सटीक निदान जो बेहतर उपचार को सक्षम बनाता है",
                "services": [
                    {
                        title: translations?.pathlogy_services_title1 || "सटीक लैब परीक्षण",
                        desc: translations?.pathlogy_services_desc1 || "हमारी NABL-मान्यता प्राप्त लैब रक्त, मूत्र और ऊतक परीक्षणों के सटीक और समय पर परिणाम प्रदान करती हैं।",
                        icon: ALT,
                    },
                    {
                        title: translations?.pathlogy_services_title2 || "विशेषज्ञ पैथोलॉजिस्ट",
                        desc: translations?.pathlogy_services_desc2 || "उच्च योग्य पेशेवर यह सुनिश्चित करते हैं कि प्रत्येक रिपोर्ट विश्वसनीय और क्लीनिकली महत्वपूर्ण हो।",
                        icon: EP,
                    },
                    {
                        title: translations?.pathlogy_services_title3 || "24x7 उपलब्धता",
                        desc: translations?.pathlogy_services_desc3 || "दिन हो या रात, हमारी पैथोलॉजी सेवाएं हमेशा तत्काल परीक्षण आवश्यकताओं के लिए उपलब्ध हैं।",
                        icon: Availability,
                    }
                ],
                "cta": {
                    "image": CPS,
                    "alt": 'Blood Donation',
                    "title": translations?.pathlogy_cta_title || "बीएम अस्पताल की पैथोलॉजी सेवाएं चुनें",
                    "description": translations?.pathlogy_cta_desc || "हर 2 सेकंड में किसी को रक्त की आवश्यकता होती है। डोनर बनकर एक मजबूत और सुरक्षित रक्त आपूर्ति बनाए रखने में मदद करें।",
                    "points": [
                        translations?.pathlogy_cta_points_one || "जल्दी पहचानें, तेजी से कार्रवाई करें – समय पर और सटीक परीक्षण बेहतर स्वास्थ्य परिणामों में मदद करता है।",
                        translations?.pathlogy_cta_points_two || "जीवनरक्षक निर्णयों का समर्थन – हमारी विश्वसनीय पैथोलॉजी रिपोर्ट्स डॉक्टरों को आत्मविश्वास के साथ महत्वपूर्ण उपचार निर्णय लेने में मदद करती हैं।",
                        translations?.pathlogy_cta_points_three || "जब आवश्यकता हो तब मौजूद रहें – 24x7 लैब उपलब्धता यह सुनिश्चित करती है कि आपके प्रियजनों को बिना देरी के परीक्षण मिलें।",
                    ],
                    "cta_button": {
                        "text": "Become a Donor",
                        "href": "/donate-now"
                    }
                },
                "final_cta": {
                    "heading": translations?.pathlogy_final_cta_heading || "बीएम अस्पताल की पैथोलॉजी सेवाएं चुनें",
                    "paragraph": translations?.pathlogy_final_cta_paragraph || "समय पर और सटीक परीक्षण जल्दी निदान और बेहतर स्वास्थ्य परिणामों में मदद करता है।",
                    "buttons": [
                        {
                            "text": translations?.pathlogy_final_buttons0 || "शेड्यूल के लिए अनुरोध करें",
                            "href": "/register-donor",
                            "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                        },
                        {
                            "text": translations?.pathlogy_final_buttons1 || "कॉल अनुरोध करें",
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
