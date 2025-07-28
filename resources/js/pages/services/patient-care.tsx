import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Treatment from '../components/Treatment';
import {
    FaUserClock,
    FaClipboardList,
    FaBed,
    FaUserNurse,
    FaHospitalAlt,
    FaLeaf,
    FaBrain,
    FaAmbulance,
    FaUsers
} from "react-icons/fa";
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";


export default function Patientcare() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const TreatmentData = [
        {
            "heading": translations?.Patient_Care || 'रोगी देखभाल 27/4',
            "hero": {
                "heading": translations?.Patientcare_heading || "बीएम अस्पताल में करुणामय रोगी देखभाल – दिल से उपचार और उत्कृष्टता के साथ",
                "paragraph": translations?.Patientcare_title || "बीएम अस्पताल में हम रोगी देखभाल को एक समग्र दृष्टिकोण के साथ प्राथमिकता देते हैं, जो उन्नत चिकित्सा विशेषज्ञता, करुणा और व्यक्तिगत देखभाल को जोड़ता है। हमारे समर्पित डॉक्टरों, नर्सों और सहायक कर्मचारियों की टीम यह सुनिश्चित करती है कि हर रोगी को उसके स्वास्थ्य सफर के हर चरण में सम्मानजनक, सुरक्षित और उत्तरदायी देखभाल मिले। भर्ती से लेकर रिकवरी तक, हम आराम, स्पष्ट संवाद और निरंतर निगरानी पर ध्यान केंद्रित करते हैं। हम नर्सिंग केयर, दर्द प्रबंधन, पोषण परामर्श और डिस्चार्ज के बाद सहायता जैसी विशेष सेवाएं प्रदान करते हैं ताकि रिकवरी और संपूर्ण स्वास्थ्य को बेहतर बनाया जा सके। हमारा रोगी-केंद्रित वातावरण गोपनीयता, गरिमा और सहज उपचार अनुभव को सुनिश्चित करता है। बीएम अस्पताल की रोगी देखभाल में प्रतिबद्धता विश्वास, सहानुभूति और उत्कृष्टता पर आधारित है – जो हमें पूरे क्षेत्र में परिवारों की पसंद बनाता है।",
                "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.Patientcare_services_title || "24x7 रोगी देखभाल सेवाएं",
                "description": translations?.Patientcare_services_description || "24x7 रोगी देखभाल सेवाएं – जब भी आवश्यकता हो, करुणामय समर्थन",
                "services": [
                    {
                        "title":  translations?.Patientcare_services_title || "राउंड-द-क्लॉक नर्सिंग",
                        "desc": translations?.Patientcare_services_desc || "व्यक्तिगत चिकित्सा आवश्यकताओं और रिकवरी लक्ष्यों के अनुसार अनुकूलित देखभाल योजनाएं।",
                        "icon": <FaUserNurse className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        "title": translations?.Patientcare_services_title02 || "इन-पेशेंट सेवाएं",
                        "desc":  translations?.Patientcare_services_desc02 || "सुविधाजनक कमरे, स्वच्छ वातावरण और सहायक सेवाएं एक तनावमुक्त अस्पताल प्रवास के लिए।",
                        "icon": <FaHospitalAlt className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        "title": translations?.Patientcare_services_title03 || "पोषण और आहार योजना",
                        "desc": translations?.Patientcare_services_desc03 || "विशेषज्ञ आहार विशेषज्ञ तेज़ उपचार और ताकत के लिए संतुलित भोजन सुनिश्चित करते हैं।",
                        "icon": <FaLeaf className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        "title": translations?.Patientcare_services_title04 || "भावनात्मक और मानसिक समर्थन",
                        "desc": translations?.Patientcare_services_desc04 || "सहानुभूतिपूर्ण स्टाफ उपचार के दौरान रोगियों और उनके परिवारों को मनोवैज्ञानिक आराम प्रदान करता है।",
                        "icon": <FaBrain className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        "title": translations?.Patientcare_services_title05 || "आपातकालीन प्रतिक्रिया",
                        "desc": translations?.Patientcare_services_desc05 || "आपातकालीन स्थान पर न्यूनतम समय में पहुंच, 24/7 डिस्पैच सेवा।",
                        "icon": <FaAmbulance className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        "title": translations?.Patientcare_services_title06 || "परिवार-केंद्रित देखभाल",
                        "desc": translations?.Patientcare_services_desc06 || "स्पष्ट संवाद, निर्णयों में भागीदारी और लचीली विज़िटिंग नीतियां परिवारों को जानकारीपूर्ण और जुड़े रखती हैं।",
                        "icon": <FaUsers className="text-4xl text-[#80CAC7]" />
                    }
                ],
                "cta": {
                    "label": translations?.Request_Now || "अभी अनुरोध करें",
                    "href": "/patient-care",
                    "helpline": "+917318000753",
                    "link": "tel:+917318000753"
                }
            },
            "blood_bank": {
                "title": "Patient Care Services ",
                "services": [
                    {
                        "title": translations?.Patientcare_servicess_title || "रोगी देखभाल सेवाएं",
                        "desc":translations?.Patientcare_servicess_description || "रोगी देखभाल सेवाएं – हर कदम पर आराम, करुणा और चिकित्सा उत्कृष्टता",
                        "icon": <FaUserClock className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        "title": translations?.Patientcare_services_title1 || "24x7 चिकित्सा समर्थन",
                        "desc": translations?.Patientcare_services_desc1 || "हमारी समर्पित टीम निरंतर देखभाल, निगरानी और प्रत्येक रोगी की आवश्यकता पर त्वरित प्रतिक्रिया सुनिश्चित करती है।",
                        "icon": <FaClipboardList className="text-4xl text-[#80CAC7]" />
                    },
                    {
                        "title": translations?.Patientcare_services_title3 || "आरामदायक वातावरण",
                        "desc": translations?.Patientcare_services_desc3 || "हमारे साथ मिलकर अपने कार्यस्थल या संस्था में रक्तदान अभियान आयोजित करें।",
                        "icon": <FaBed className="text-4xl text-[#80CAC7]" />
                    }
                ],
                "cta": {
                    "image": Logo,
                    "alt": 'Blood Donation',
                    "title": translations?.Patientcare_cta_title || "बीएम अस्पताल की रोगी देखभाल सेवाओं को चुनें",
                    "description": translations?.Patientcare_cta_desc || "बीएम अस्पताल की रोगी देखभाल सेवाओं को चुनें",
                    "points": [
                        translations?.Patientcare_cta_points_one || "बनें उनकी ताकत - सुनिश्चित करें कि आपके प्रियजनों को 24x7 विशेषज्ञ देखभाल और निरंतर चिकित्सकीय ध्यान मिले।",
                        translations?.Patientcare_cta_points_two || "आराम के साथ रिकवरी को प्रोत्साहन दें - हमारी रोगी-प्रथम नीति एक सहायक वातावरण में तेज़ उपचार को बढ़ावा देती है।",
                        translations?.Patientcare_cta_points_three || "हर कदम पर भरोसा - भर्ती से डिस्चार्ज तक, हम आपको करुणा, स्पष्टता और चिकित्सकीय उत्कृष्टता के साथ मार्गदर्शन करते हैं।",
                    ],
                    "cta_button": {
                        "text": "Become a Donor",
                        "href": "/donate-now"
                    }
                },
                "final_cta": {
                    "heading": translations?.Patientcare_final_cta_heading || "बीएम अस्पताल की रोगी देखभाल सेवाओं को चुनें",
                    "paragraph": translations?.Patientcare_final_cta_paragraph || "बनें उनकी ताकत - सुनिश्चित करें कि आपके प्रियजनों को 24x7 विशेषज्ञ देखभाल और निरंतर चिकित्सकीय ध्यान मिले।",
                    "buttons": [
                        {
                            "text": translations?.Patientcare_final_buttons0 || "समय तय करने के लिए अनुरोध करें",
                            "href": "/register-donor",
                            "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                        },
                        {
                            "text": translations?.Patientcare_final_buttons1 || "कॉल का अनुरोध करें",
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
            <Nav translations={translations} />
            <Treatment TreatmentData={TreatmentData} />
            <Footer translations={translations} />
        </div>
    )
}
