import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Treatment from '../components/Treatment';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Banner from "@/assets/services/Neonatal Intensive Care Unit/Neonatal Intensive Care Unit.svg"
import CNC from "@/assets/services/Neonatal Intensive Care Unit/24x7 Critical Newborn Care.svg"
import ALSS from "@/assets/services/Neonatal Intensive Care Unit/Advanced Life Support Systems.svg"
import ANM from "@/assets/services/Neonatal Intensive Care Unit/Advanced Neonatal Monitoring.svg"
import NICUT from "@/assets/services/Neonatal Intensive Care Unit/Experienced NICU Team.svg"
import ENN from "@/assets/services/Neonatal Intensive Care Unit/Expert Neonatologists & Nurses.svg"
import FCS from "@/assets/services/Neonatal Intensive Care Unit/Family-Centered Support.svg"
import ICP from "@/assets/services/Neonatal Intensive Care Unit/Infection Control Protocols.svg"
import LBWC from "@/assets/services/Neonatal Intensive Care Unit/Premature & Low Birth Weight Care.svg"
import RSS from "@/assets/services/Neonatal Intensive Care Unit/Respiratory Support Systems.svg"
import NICUS from "@/assets/services/Neonatal Intensive Care Unit/Neonatal Intensive Care Unit (NICU) Services.svg"


export default function Neonatalintensivecareunit() {
       const [translations, setTranslations] = useState({});
              console.log('translations', translations?.Request_Now)
              console.log('translations', translations)
   
       const handletranslate = (data) => {
           setTranslations(data);
       }
   

    const TreatmentData = [
        {
            "heading": translations?.NICU || 'नवजात शिशु गहन चिकित्सा',
            "hero": {
                "heading": translations?.nicu_heading || " बीएम अस्पताल में नवजात गहन चिकित्सा इकाई (NICU) – गंभीर स्थिति में नवजातों के लिए संवेदनशील देखभाल ",
                "paragraph": translations?.nicu_title || "बीएम अस्पताल की नवजात गहन चिकित्सा इकाई (NICU) एक विशेष सुविधा है जो समय से पहले जन्मे और गंभीर रूप से बीमार नवजात शिशुओं को उन्नत चिकित्सा सहायता प्रदान करने के लिए डिज़ाइन की गई है। अत्याधुनिक तकनीक जैसे इनक्यूबेटर, वेंटिलेटर, फोटोथैरेपी यूनिट और सतत निगरानी प्रणालियों से सुसज्जित हमारा NICU, स्वास्थ्य चुनौतियों का सामना कर रहे नवजातों को सर्वोच्च स्तर की देखभाल प्रदान करता है। हमारे विशेषज्ञ नवजात रोग विशेषज्ञों, बाल रोग नर्सों और सहायक स्टाफ की टीम श्वसन कष्ट, कम जन्म वजन, पीलिया, सेप्सिस और जन्मजात विकारों जैसी स्थितियों का प्रबंधन करने के लिए प्रशिक्षित है। हम एक परिवार-केंद्रित देखभाल दृष्टिकोण का पालन करते हैं, जिससे माता-पिता को अपने शिशु की रिकवरी के प्रत्येक चरण में शामिल किया जाता है। बीएम अस्पताल का NICU स्वच्छता और सुरक्षा के कड़े मानकों का पालन करता है ताकि उपचार और बेहतर परिणाम सुनिश्चित हो सकें।",
                "image": Banner,
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.nicu_services_title || "24x7 नवजात गहन चिकित्सा इकाई (NICU) सेवाएं",
                "description": translations?.nicu_services_description || "24x7 नवजात गहन चिकित्सा इकाई (NICU) सेवाएं – हर नवजात जीवन के लिए विशेष देखभाल",
                "services": [
                    {
                        title: translations?.nicu_services_title || "उन्नत नवजात निगरानी",
                        desc: translations?.nicu_services_desc || "गंभीर नवजात देखभाल के लिए इनक्यूबेटर, वेंटिलेटर और हाई-एंड मॉनिटर का उपयोग करते हुए सतत महत्वपूर्ण संकेतों की निगरानी।",
                        icon: ANM,
                    },
                    {
                        title: translations?.nicu_services_title02 || "विशेषज्ञ नवजात रोग विशेषज्ञ और नर्सें",
                        desc: translations?.nicu_services_desc02 || "नवजात रोग विशेषज्ञों और NICU प्रशिक्षित नर्सों की कुशल टीम द्वारा चौबीसों घंटे विशेष देखभाल।",
                        icon: ENN,
                    },
                    {
                        title: translations?.nicu_services_title04 || "श्वसन सहायता प्रणालियाँ",
                        desc: translations?.nicu_services_desc04 || "श्वसन कठिनाई या RDS वाले नवजातों के लिए CPAP, वेंटिलेटर और ऑक्सीजन थेरेपी से सुसज्जित।",
                        icon: RSS,
                    },
                    {
                        title: translations?.nicu_services_title05 || "संक्रमण नियंत्रण प्रोटोकॉल",
                        desc: translations?.nicu_services_desc05 || "संवेदनशील शिशुओं के लिए संक्रमण जोखिम को न्यूनतम करने हेतु स्वच्छ NICU वातावरण।",
                        icon: ICP,
                    },
                    {
                        title: translations?.nicu_services_title06 || "परिवार-केंद्रित समर्थन",
                        desc: translations?.nicu_services_desc06 || "माता-पिता को अपने शिशु की रिकवरी में शामिल रखने के लिए भावनात्मक, शैक्षिक और विजिटिंग समर्थन।",
                        icon: FCS,
                    },
                    {
                        title: translations?.nicu_services_title03 || "समय से पूर्व और कम वजन वाले शिशुओं की देखभाल",
                        desc: translations?.nicu_services_desc03 || "समय से पहले या कम वजन में जन्मे शिशुओं के लिए समर्पित सहायता और तकनीक, जो स्वस्थ विकास को प्रोत्साहित करती है।",
                        icon: LBWC,
                    },
                ],
                "cta": {
                    "label": translations?.Request_Now || "अनुरोध करें",
                    "href": "/book-ambulance",
                    "helpline": "+917318000753",
                    "link": "tel:+7318000753"
                }
            },
            "blood_bank": {
                "title": translations?.nicu_servicess_title ||  "नवजात गहन चिकित्सा इकाई (NICU) सेवाएं",
                "description": translations?.nicu_servicess_description || "नवजात गहन चिकित्सा इकाई (NICU) सेवाएं – आपके नवजात के पहले महत्वपूर्ण पलों के लिए विशेषज्ञ देखभाल",
                "services": [
                    {
                        title: translations?.nicu_services_title1 || "24x7 गंभीर नवजात देखभाल",
                        desc: translations?.nicu_services_desc1 || "समय से पूर्व और बीमार नवजातों के लिए विशेष निगरानी और जीवनरक्षक उपकरण द्वारा चौबीसों घंटे देखभाल।",
                        icon: CNC,
                    },
                    {
                        title: translations?.nicu_services_title2 || "अनुभवी NICU टीम",
                        desc: translations?.nicu_services_desc2 || "नवजात रोग विशेषज्ञ, नर्सें और श्वसन चिकित्सक कमजोर नवजातों को विशेषज्ञ देखभाल प्रदान करते हैं।",
                        icon: NICUT,
                    },
                    {
                        title: translations?.nicu_services_title3 || "उन्नत जीवन समर्थन प्रणाली",
                        desc: translations?.nicu_services_desc3 || "उच्च जोखिम वाले शिशुओं को स्थिर और पोषित करने हेतु इनक्यूबेटर, वेंटिलेटर और फीडिंग सहायता से सुसज्जित।",
                        icon: ALSS,
                    },
                ],
                    "cta": {
                        "image": NICUS,
                        "alt": 'Blood Donation',
                        "title": translations?.nicu_cta_title || "भरोसा करें बीएम अस्पताल की नवजात गहन चिकित्सा इकाई (NICU) सेवाओं पर",
                        "description": translations?.nicu_cta_desc || "हर 2 सेकंड में किसी को रक्त की आवश्यकता होती है। एक डोनर बनकर हमें एक मजबूत और सुरक्षित रक्त आपूर्ति बनाए रखने में सहायता करें।",
                        "points": [
                            translations?.nicu_cta_points_one || "कीमती शुरुआत की रक्षा करें - हमारा NICU समय से पहले और गंभीर रूप से बीमार नवजातों को चौबीसों घंटे जीवनरक्षक देखभाल प्रदान करता है।",
                            translations?.nicu_cta_points_two || "नाजुक जीवन के साथ खड़े रहें - विशेषज्ञ नवजात रोग विशेषज्ञों और अत्याधुनिक उपकरणों के साथ, हम नवजातों को जीवित रहने और स्वस्थ होने का सर्वोत्तम अवसर प्रदान करते हैं।",
                            translations?.nicu_cta_points_three || "परिवारों को आशा से सहारा दें - सहानुभूतिपूर्ण, परिवार-केंद्रित NICU देखभाल भावनात्मक ताकत के साथ-साथ चिकित्सकीय उत्कृष्टता सुनिश्चित करती है।",
                        ],
                        "cta_button": {
                            "text": "Become a Donor",
                            "href": "/donate-now"
                        }
                    },
                    "final_cta": {
                        "heading": translations?.nicu_final_cta_heading || "चुनें बीएम अस्पताल की नवजात गहन चिकित्सा इकाई (NICU) सेवाएं",
                        "paragraph": translations?.nicu_final_cta_paragraph || "हमारा NICU समय से पहले और गंभीर रूप से बीमार नवजातों को हर घंटे जीवनरक्षक देखभाल प्रदान करता है।",
                        "buttons": [
                            {
                                "text": translations?.nicu_final_buttons0 || "शेड्यूल के लिए अनुरोध करें",
                                "href": "/register-donor",
                                "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                            },
                            {
                                "text": translations?.nicu_final_buttons1 || "कॉल अनुरोध करें",
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
