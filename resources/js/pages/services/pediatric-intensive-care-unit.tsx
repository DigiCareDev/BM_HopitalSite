import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Treatment from '../components/Treatment';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Banner from "@/assets/services/Pediatric Intensive Care Unit/Pediatric Intensive Care Unit.svg";
import ALS from "@/assets/services/Pediatric Intensive Care Unit/Advanced Life Support.svg";
import ERT from "@/assets/services/Pediatric Intensive Care Unit/Emergency Response Team.svg";
import EPI from "@/assets/services/Pediatric Intensive Care Unit/Expert Pediatric Intensivists.svg";
import FCC from "@/assets/services/Pediatric Intensive Care Unit/Family-Centered Care_1.svg";
import ICM from "@/assets/services/Pediatric Intensive Care Unit/Infection Control Measures.svg";
import RCM from "@/assets/services/Pediatric Intensive Care Unit/Round-the-Clock Monitoring.svg";
import SPT from "@/assets/services/Pediatric Intensive Care Unit/Specialized Pediatric Team.svg";
import PM from "@/assets/services/Pediatric Intensive Care Unit/24x7 Pediatric Monitoring.svg";
import ERR from "@/assets/services/Pediatric Intensive Care Unit/Emergency Response Ready.svg";
import CPICU from "@/assets/services/Pediatric Intensive Care Unit/Choose Pediatric Intensive Care Unit (PICU).svg";


export default function Pediatricintensivecareunit() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const TreatmentData = [
        {
            "heading": translations?.PICU || 'बाल चिकित्सा गहन चिकित्सा',
            "hero": {
                "heading": translations?.picu_heading || "बीएम अस्पताल में पीआईसीयू – बच्चों के लिए उन्नत गहन देखभाल",
                "paragraph": translations?.picu_title || "बीएम अस्पताल की पीडियाट्रिक इंटेंसिव केयर यूनिट (PICU) शिशुओं, बच्चों और किशोरों के लिए गंभीर चिकित्सा स्थितियों में विशेषज्ञ गहन देखभाल प्रदान करने वाली एक समर्पित सुविधा है। हमारा पीआईसीयू उन्नत जीवन रक्षक प्रणाली, निरंतर निगरानी और बच्चों के लिए विशेष चिकित्सा तकनीक से सुसज्जित है, जो श्वसन संकट, सेप्सिस, तंत्रिका आपात स्थितियों और सर्जरी के बाद की रिकवरी जैसे मामलों का प्रबंधन करता है। अनुभवी बाल रोग विशेषज्ञों, नर्सों और सहायक टीमों द्वारा संचालित, हम सुरक्षा, आराम और भावनात्मक समर्थन पर ध्यान केंद्रित करते हुए 24x7 विशेष देखभाल प्रदान करते हैं। हम माता-पिता को उपचार यात्रा में शामिल रखने के लिए परिवार-केंद्रित देखभाल का पालन करते हैं।",
                "image": Banner,
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.picu_services_title || "24x7 पीडियाट्रिक इंटेंसिव केयर यूनिट (PICU) सेवाएं",
                "description": translations?.picu_services_description || "24x7 पीआईसीयू सेवाएं – बच्चों के लिए विशेष गहन देखभाल",
                "services": [
                    {
                        "title": translations?.picu_services_title || "24x7 निरंतर निगरानी",
                        "desc": translations?.picu_services_desc ||"उन्नत उपकरणों के साथ सतत निगरानी यह सुनिश्चित करती है कि गंभीर रूप से बीमार बच्चों को समय पर उपचार मिले।",
                        "icon": RCM,
                    },
                    {
                        "title": translations?.picu_services_title02 || "विशेषज्ञ बाल रोग गहन चिकित्सक",
                        "desc": translations?.picu_services_desc02 || "प्रशिक्षित डॉक्टर और नर्सें बच्चों की आपात और गहन देखभाल में विशेषज्ञता रखती हैं।",
                        "icon": EPI,
                    },
                    {
                        "title": translations?.picu_services_title03  ||  "उन्नत जीवन रक्षक समर्थन",
                        "desc": translations?.picu_services_desc03 || "वेंटिलेटर, इन्फ्यूजन पंप और डिफिब्रिलेटर जैसी सुविधाएं जटिल चिकित्सा स्थितियों को संभालने के लिए उपलब्ध हैं।",
                        "icon": ALS,
                    },
                    {
                        "title": translations?.picu_services_title04  ||"संक्रमण नियंत्रण उपाय",
                        "desc":translations?.picu_services_desc04 || "सख्त स्वच्छता और सुरक्षा प्रोटोकॉल संक्रमण जोखिम को कम करते हैं और तेजी से रिकवरी में सहायता करते हैं।",
                        "icon": ICM,
                    },
                    {
                        "title": translations?.picu_services_title05  ||  "परिवार-केंद्रित देखभाल",
                        "desc": translations?.picu_services_desc05 || "माता-पिता को जानकारी और भावनात्मक समर्थन देकर उन्हें उपचार प्रक्रिया में शामिल किया जाता है।",
                        "icon": FCC,
                    },
                    {
                        "title": translations?.picu_services_title06 || "आपातकालीन प्रतिक्रिया टीम",
                        "desc": translations?.picu_services_desc06 || "ट्रॉमा, दौरे, श्वसन संकट या किसी भी जीवन-धमकी वाली स्थिति में तेज़ प्रतिक्रिया।",
                        "icon": ERR,
                    }
                ],
                "cta": {
                    "label": translations?.Request_Now || "अभी अनुरोध करें",
                    "href": "/book-ambulance",
                    "helpline": "+917318000753",
                    "link": "tel:+917318000753"
                }
            },
            "blood_bank": {
                "title": translations?.picu_servicess_title ||  "पीडियाट्रिक इंटेंसिव केयर यूनिट (PICU) सेवाएं",
                "description": translations?.picu_servicess_description || "PICU सेवाएं – ऐसा गहन उपचार जो परिवार की तरह देखभाल करता है",
                "services": [
                    {
                        "title": translations?.picu_services_title1 || "24x7 बच्चों की निगरानी",
                        "desc": translations?.picu_services_desc1 || "गंभीर रूप से बीमार शिशुओं और बच्चों के लिए उन्नत आईसीयू समर्थन के साथ निरंतर महत्वपूर्ण निगरानी।",
                        "icon": PM,
                    },
                    {
                        "title": translations?.picu_services_title2 ||  "विशेषीकृत बाल चिकित्सा टीम",
                        "desc": translations?.picu_services_desc2 || "बाल गहन चिकित्सक और प्रशिक्षित नर्सें छोटे मरीजों के लिए विशेष देखभाल प्रदान करती हैं।",
                        "icon": ERT,
                    },
                    {
                        "title": translations?.picu_services_title3 || "आपातकालीन प्रतिक्रिया के लिए तैयार",
                        "desc": translations?.picu_services_desc3 ||   "ट्रॉमा, श्वसन संकट और अन्य आपातकालीन स्थितियों को संभालने के लिए पूरी तरह सुसज्जित।",
                        "icon": SPT,
                    }
                ],
                "cta": {
                    "image": CPICU,
                    "alt": 'Blood Donation',
                    "title": translations?.picu_cta_title || "बीएम अस्पताल में पीआईसीयू सेवाओं का चयन करें",
                    "description": translations?.picu_cta_desc || "हर 2 सेकंड में किसी को रक्त की आवश्यकता होती है। रक्तदाता बनकर एक मजबूत और सुरक्षित रक्त आपूर्ति बनाए रखने में मदद करें।",
                    "points": [
                        translations?.picu_cta_points_one || "हर कीमती जीवन की सुरक्षा करें – गंभीर रूप से बीमार बच्चों को आवश्यकता के समय 24x7 विशेषज्ञ गहन देखभाल प्रदान करें।",
                        translations?.picu_cta_points_two || "तेज़ रिकवरी का समर्थन करें – हमारी विशेषज्ञ बाल चिकित्सा टीम और उन्नत तकनीक बेहतर उपचार परिणाम सुनिश्चित करती है।",
                        translations?.picu_cta_points_three || "परिवारों का सहारा बनें – सहानुभूति से भरपूर, परिवार-केंद्रित देखभाल माता-पिता को हर कदम पर साथ रखती है।",
                    ],
                    "cta_button": {
                        "text": "Become a Donor",
                        "href": "/donate-now"
                    }
                },
                "final_cta": {
                    "heading": translations?.picu_final_cta_heading || "बीएम अस्पताल की पीआईसीयू सेवाओं का चयन करें",
                    "paragraph": translations?.picu_final_cta_paragraph || "उनके लिए ताकत बनें – सुनिश्चित करें कि आपके प्रियजन को 24x7 विशेषज्ञ देखभाल और लगातार चिकित्सा सहायता प्राप्त हो।",
                    "buttons": [
                        {
                            "text": translations?.picu_final_buttons0 || "अनुसूची के लिए अनुरोध करें",
                            "href": "/register-donor",
                            "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                        },
                        {
                            "text": translations?.picu_final_buttons1 || "कॉल का अनुरोध करें",
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
