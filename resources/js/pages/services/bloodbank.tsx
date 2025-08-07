import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer';
import Treatment from '../components/Treatment';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import DBT from "@/assets/services/Blood Bank/Be a Hero. Donate Blood Today.svg";
import BGCM from "@/assets/services/Blood Bank/Blood Grouping & Cross Matching.svg";
import CS from "@/assets/services/Blood Bank/Component Separation.svg";
import DB from "@/assets/services/Blood Bank/Donate Blood.svg";
import EBS from "@/assets/services/Blood Bank/Emergency Blood Supply.svg";
import STP from "@/assets/services/Blood Bank/Safe Transfusion Practices.svg";
import WBC from "@/assets/services/Blood Bank/Whole Blood Collection.svg";
import HBC from "@/assets/services/Blood Bank/Host a Blood Camp.svg";
import RB from "@/assets/services/Blood Bank/Request Blood.svg";
import VBD from "@/assets/services/Blood Bank/Voluntary Blood Donation.svg";
import Banner from "@/assets/services/Blood Bank/banner.svg"



export default function Bloodbank() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const TreatmentData = [
        {
            "heading": translations?.Blood_Bank || 'ब्लड बैंक',
            "hero": {
                "heading": translations?.bloodbank_heading || " बीएम अस्पताल का विश्वसनीय ब्लड बैंक – हर बूंद महत्वपूर्ण, हर जीवन अमूल्य",
                "paragraph": translations?.bloodbank_title || "बीएम अस्पताल का ब्लड बैंक एक विश्वसनीय और सुसज्जित सुविधा है जो समय पर और सुरक्षित रक्त संग्रह, भंडारण और ट्रांसफ्यूजन के माध्यम से जीवन बचाने के लिए समर्पित है। हम आरबीसी, प्लाज्मा और प्लेटलेट्स जैसे घटकों के साथ जांचे गए रक्त यूनिट्स की एक निरंतर आपूर्ति बनाए रखते हैं, जो आपात स्थितियों और सर्जरी के समय आवश्यक होती है। हमारा ब्लड बैंक सुरक्षा और गुणवत्ता की गारंटी के लिए सख्त प्रोटोकॉल और उन्नत परीक्षण विधियों का पालन करता है। हम रक्तदान शिविरों का समर्थन करते हैं, स्वैच्छिक डोनर स्वीकार करते हैं, और मरीजों तथा परिवारों से आने वाले रक्त अनुरोधों पर तुरंत प्रतिक्रिया देते हैं।",
                "image": Banner,
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.bloodbank_services_title || "24x7 ब्लड बैंक सेवाएं",
                "description": translations?.bloodbank_services_description || "हमारा पूरी तरह से सुसज्जित ब्लड बैंक 24x7 संचालित होता है, जिससे आपातकालीन और नियमित ट्रांसफ्यूजन जरूरतों को सुरक्षित और तेज़ तरीके से पूरा किया जा सके।",
                "services": [
                    {
                        title: translations?.bloodback_services_title || "पूर्ण रक्त संग्रह",
                        desc: translations?.bloodback_services_desc || "विभिन्न चिकित्सकीय उपयोगों के लिए सुरक्षित रक्तदान और संग्रह।",
                        icon: WBC,
                    },
                    {
                        title: translations?.bloodback_services_title02 || "घटक पृथक्करण",
                        desc: translations?.bloodback_services_desc02 || "उपचार की आवश्यकता अनुसार रेड सेल्स, प्लाज्मा, प्लेटलेट्स और क्रायोप्रेसिपिटेट की सुविधा।",
                        icon: CS,
                    },
                    {
                        title: translations?.bloodback_services_title03 || "स्वैच्छिक रक्तदान",
                        desc: translations?.bloodback_services_desc0 || "नियमित डोनर ड्राइव और जीवन रक्षक सहायता के लिए वॉक-इन विकल्प।",
                        icon: DB,
                    },
                    {
                        title: translations?.bloodback_services_title04 ||  "आपातकालीन रक्त आपूर्ति",
                        desc: translations?.bloodback_services_desc04 || "दुर्घटना, सर्जरी या गंभीर मरीजों के लिए त्वरित प्रतिक्रिया।",
                        icon: EBS,
                    },
                    {
                        title: translations?.bloodback_services_title05 ||  "ब्लड ग्रुपिंग और क्रॉस मैचिंग",
                        desc: translations?.bloodback_services_desc05 || "सटीक परीक्षण से अनुकूलता और मरीज की सुरक्षा सुनिश्चित होती है।",
                        icon: BGCM,
                    },
                    {
                        title: translations?.bloodback_services_title06 || "सुरक्षित ट्रांसफ्यूजन प्रक्रिया",
                        desc: translations?.bloodback_services_desc06 || "सभी रक्त यूनिट्स के लिए सख्त स्क्रीनिंग, स्वच्छता और भंडारण प्रोटोकॉल।",

                        icon: STP,
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
                "title": translations?.bloodbank_servicess_title || "ब्लड बैंक और दान सेवाएं",
                "description": translations?.bloodbank_servicess_description || "आपकी एक बूंद किसी की जान बचा सकती है – विश्वसनीय ब्लड बैंक और रक्तदान सेवाएं!",
                "services": [
                    {
                        title: translations?.bloodbank_services_title1 || "रक्तदान करें",
                        desc: translations?.bloodbank_services_desc1 || "सुरक्षित प्रक्रिया, तेज़ प्रिक्रिया, स्वास्थ्य जांच, प्रमाणित स्टाफ, जीवन रक्षक प्रभाव।",
                        icon: VBD,
                    },
                    {
                        title: translations?.bloodbank_services_title2 || "रक्त का अनुरोध करें",
                        desc: translations?.bloodbank_services_desc2 || "प्रमाणित डोनर, तेज़ मिलान, सुरक्षित हैंडलिंग, 24/7 उपलब्धता, अस्पताल समन्वय।",
                        icon: RB,
                    },
                    {
                        title:  translations?.bloodbank_services_title3 || "ब्लड कैंप आयोजित करें",
                        desc: translations?.bloodbank_services_desc3 ||  "ऑन-साइट सेटअप, मेडिकल टीम, डोनर किट्स, जागरूकता सामग्री, सहज आयोजन।",
                        icon: HBC,
                    }
                ],
                "cta": {
                    "image": DBT,
                    "alt": 'Blood Donation',
                    "title": translations?.bloodbank_cta_title || "हीरो बनें। आज ही रक्तदान करें।",
                    "description": translations?.bloodbank_cta_desc || "आपका एक परोपकारी कार्य जीवन बचा सकता है। बदलाव लाने के इस मिशन में शामिल हों।",
                    "points": [
                        translations?.bloodbank_cta_points_one || "सुरक्षित, तेज़ और चिकित्सकीय रूप से निगरानी की गई रक्तदान प्रक्रिया",
                        translations?.bloodbank_cta_points_two || "सिर्फ 15–20 मिनट में किसी के लिए हीरो बनें",
                        translations?.bloodbank_cta_points_three || "दुर्घटना, सर्जरी, कैंसर और आपातकालीन स्थितियों में मरीजों की सहायता करें",
                    ],
                    "cta_button": {
                        "text": "Become a Donor",
                        "href": "/donate-now"
                    }
                },
                "final_cta": {
                    "heading": translations?.bloodbank_final_cta_heading || "आपका रक्त जीवन बचा सकता है",
                    "paragraph": translations?.bloodbank_final_cta_paragraph || "देशभर में हजारों जीवनदाताओं में शामिल हों। रक्तदान करें, डोनर खोजें या रक्तदान शिविर आयोजित करें।",
                    "buttons": [
                        {
                            "text": translations?.bloodbank_final_buttons0 || "डोनर के रूप में रजिस्टर करें",
                            "href": "/register-donor",
                            "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                        },
                        {
                            "text": translations?.bloodbank_final_buttons1 || "रक्त का अनुरोध करें",
                            "href": "/request-blood",
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
