import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Treatment from '../components/Treatment';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Banner from '@/assets/services/Modular Operation Theater/Modular Operation Theater.svg';
import Orthopadic from '@/assets/services/Modular Operation Theater/orthopadic.svg'
import AST from '@/assets/services/Modular Operation Theater/Advanced Surgical Technology.svg';
import GLS from '@/assets/services/Modular Operation Theater/General & Laparoscopic Surgery.svg';
import MOT1 from '@/assets/services/Modular Operation Theater/Modular Operation Theater_1.svg';
import MSS from '@/assets/services/Modular Operation Theater/Multispeciality Surgical Support.svg';
import NSP from '@/assets/services/Modular Operation Theater/Neurosurgery & Spine Procedures.svg';
import OGS from '@/assets/services/Modular Operation Theater/Obstetrics & Gynecological Surgery.svg';
import ETCCS from '@/assets/services/Modular Operation Theater/Emergency Trauma & Critical Care Surgery.svg';
import CVS from '@/assets/services/Modular Operation Theater/Cardiothoracic & Vascular Surgery.svg';
import MOTS from '@/assets/services/Modular Operation Theater/Modular Operation Theater Services.svg';



export default function Modularoperationtheatre() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const TreatmentData = [
        {
            "heading": translations?.mot || 'मॉड्यूलर ऑपरेशन थिएटर',
            "hero": {
                "heading": translations?.mot_heading || "बीएम अस्पताल में उन्नत मॉड्यूलर ऑपरेशन थिएटर – सटीकता और सुरक्षा का संगम",
                "paragraph": translations?.mot_title || "बीएम अस्पताल का मॉड्यूलर ऑपरेशन थिएटर अत्याधुनिक इंफ्रास्ट्रक्चर के साथ डिज़ाइन किया गया है ताकि संक्रमण नियंत्रण, स्वच्छता और शल्य चिकित्सा सटीकता के उच्चतम मानकों को सुनिश्चित किया जा सके। HEPA फिल्टर, लैमिनार एयरफ्लो और स्टरलाइज़ पैनल्स से सुसज्जित हमारे ऑपरेशन थिएटर सभी प्रकार की प्रमुख और मामूली सर्जरी के लिए नियंत्रित वातावरण प्रदान करते हैं। हम सामान्य सर्जरी, आर्थोपेडिक्स, कार्डियोलॉजी, न्यूरोलॉजी, गायनोकोलॉजी और आपातकालीन प्रक्रियाओं सहित विभिन्न विशेषज्ञताओं का समर्थन करते हैं। हमारी सर्जिकल टीम एनेस्थीसिया विशेषज्ञों और कुशल नर्सों के साथ मिलकर रोगी-केंद्रित देखभाल प्रदान करती है।",
                "image": Banner,
                "alt": "BM Hospital logo"
            },
            "ambulance_services": {
                "title": translations?.mot_services_title ||"24x7 मॉड्यूलर ऑपरेशन थिएटर",
                "description": translations?.mot_services_description || "बीएम अस्पताल के मॉड्यूलर ऑपरेशन थिएटर (MOTs) उन्नत संरचना के साथ डिज़ाइन किए गए हैं ताकि संक्रमण-मुक्त, उच्च-सटीकता वाली सर्जरी किसी भी समय की जा सके। हमारी 24x7 सर्जिकल तत्परता नियोजित और आपातकालीन दोनों प्रकार की सर्जरी के लिए समय पर हस्तक्षेप सुनिश्चित करती है।",
                "services": [
                    {
                        title: translations?.mot_services_title || "जनरल और लेप्रोस्कोपिक सर्जरी",
                        desc: translations?.mot_services_desc ||"पेट, पित्ताशय और अपेंडिक्स से संबंधित स्थितियों के लिए न्यूनतम इनवेसिव और ओपन सर्जरी, जिसमें बेहतर रिकवरी प्रोटोकॉल शामिल हैं।",
                        icon: GLS,
                    },
                    {
                        title:  translations?.mot_services_title02 || "ऑर्थोपेडिक और जोड़ प्रत्यारोपण सर्जरी",
                        desc: translations?.mot_services_desc02 || "फ्रैक्चर, गठिया और जोड़ प्रत्यारोपण के लिए उन्नत प्रक्रियाएं, जो स्टरल तकनीक से की जाती हैं।",
                        icon: Orthopadic,
                    },
                    {
                        title: translations?.mot_services_title03 ||"हृदय-फुफ्फुसीय और संवहनी सर्जरी",
                        desc: translations?.mot_services_desc03 ||"उच्च जोखिम वाली हृदय और नसों की सर्जरी को निरंतर निगरानी के साथ अत्यंत सुरक्षित वातावरण में किया जाता है।",
                        icon: CVS,
                    },
                    {
                        title: translations?.mot_services_title04 ||  "न्यूरोसर्जरी और रीढ़ की सर्जरी",
                        desc: translations?.mot_services_desc04 ||"ब्रेन ट्यूमर, ट्रॉमा और स्पाइनल समस्याओं के लिए जटिल सर्जरी माइक्रो-सर्जिकल सटीकता के साथ की जाती हैं।",
                        icon: NSP,
                    },
                    {
                        title: translations?.mot_services_title05 || "प्रसूति और स्त्री रोग सर्जरी",
                        desc: translations?.mot_services_desc05 || "सी-सेक्शन से लेकर फाइब्रॉइड रिमूवल तक, हम 24x7 सुरक्षित मातृत्व और महिला सर्जिकल देखभाल प्रदान करते हैं।",
                        icon: OGS,
                    },
                    {
                        title: translations?.mot_services_title06 || "आपातकालीन ट्रॉमा और क्रिटिकल केयर सर्जरी",
                        desc: translations?.mot_services_desc06 ||"दुर्घटनाओं, आंतरिक चोटों और जीवन-धमकी की स्थितियों में त्वरित सर्जिकल प्रतिक्रिया – हर सेकंड कीमती होता है।",
                        icon: ETCCS,
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
                "title": translations?.mot_servicess_title || "मॉड्यूलर ऑपरेशन थिएटर",
                "description": translations?.mot_servicess_description || "बीएम अस्पताल उन्नत मॉड्यूलर ऑपरेशन थिएटर सेवाएं प्रदान करता है जो सटीकता, सुरक्षा और तेज़ रिकवरी के लिए डिज़ाइन की गई हैं। हमारे MOTs लैमिनार एयरफ्लो, HEPA फिल्टर्स और नियंत्रित वातावरण से सुसज्जित हैं ताकि संक्रमण-मुक्त सर्जरी सुनिश्चित की जा सके।",
                "services": [
                    {
                        title: translations?.mot_servicess_title || "मॉड्यूलर ऑपरेशन थिएटर",
                        desc: translations?.mot_servicess_description || "बीएम अस्पताल उन्नत मॉड्यूलर ऑपरेशन थिएटर सेवाएं प्रदान करता है जो सटीकता, सुरक्षा और तेज़ रिकवरी के लिए डिज़ाइन की गई हैं। हमारे MOTs लैमिनार एयरफ्लो, HEPA फिल्टर्स और नियंत्रित वातावरण से सुसज्जित हैं ताकि संक्रमण-मुक्त सर्जरी सुनिश्चित की जा सके।",
                        icon: MOT1,
                    },
                    {
                        title: translations?.mot_services_title2 || "उन्नत सर्जिकल तकनीक",
                        desc: translations?.mot_services_desc1 ||"हमारे मॉड्यूलर OTs क्लीनरूम तकनीक और नियंत्रित एयर फिल्ट्रेशन का उपयोग करते हैं ताकि सर्जरी के दौरान और बाद में संक्रमण का जोखिम कम हो।",
                        icon: AST,
                    },
                    {
                        title: translations?.mot_services_title3 ||"मल्टीस्पेशियलिटी सर्जिकल सपोर्ट",
                        desc: translations?.mot_services_desc2 ||"आधुनिक ऑपरेटिंग टेबल, सर्जिकल लाइट्स, एनेस्थीसिया वर्कस्टेशन और रियल-टाइम मरीज की निगरानी की सुविधाएं उच्च सटीकता वाली प्रक्रियाओं के लिए सुसज्जित हैं।",
                        icon: MSS,
                    }
                ],
                "cta": {
                    "image": MOTS,
                    "alt": 'Blood Donation',
                    "title": translations?.mot_final_cta_heading || "बीएम अस्पताल की मॉड्यूलर ऑपरेशन थिएटर सेवाएं चुनें",
                    "description": translations?.mot_cta_desc || "हर 2 सेकंड में किसी को खून की जरूरत होती है। रक्तदाता बनकर हमें एक मजबूत और सुरक्षित रक्त आपूर्ति बनाए रखने में मदद करें।",
                    "points": [
                        translations?.mot_cta_points_one || "सटीक सर्जरी का अनुभव करें – उन्नत इमेजिंग, रोबोटिक सहायता और रीयल-टाइम निगरानी हमारे सर्जनों को न्यूनतम आघात के साथ जटिल सर्जरी करने में सक्षम बनाती है।",
                        translations?.mot_cta_points_two || "संक्रमण से सुरक्षा – HEPA-फिल्टर लैमिनार एयरफ्लो और निर्बाध स्टरल पैनल एक किले जैसे सुरक्षा घेरा बनाते हैं, जिससे संक्रमण का जोखिम घटता है और मरीज तेजी से ठीक होते हैं।",
                        translations?.mot_cta_points_three || "आपातकालीन क्षणों में प्रतिक्रिया दें – 24x7 मल्टीस्पेशियलिटी तत्परता सुनिश्चित करती है जीवनरक्षक हस्तक्षेप – ट्रॉमा, कार्डियक, न्यूरो या प्रसूति – जब हर सेकंड मायने रखता है।",
                    ],
                    "cta_button": {
                        "text": "Become a Donor",
                        "href": "/donate-now"
                    }
                },
                "final_cta": {
                    "heading": translations?.mot_final_cta_heading || "बीएम अस्पताल की मॉड्यूलर ऑपरेशन थिएटर सेवाएं चुनें",
                    "paragraph": translations?.mot_final_cta_paragraph || "उन्नत इमेजिंग, रोबोटिक सहायता और रीयल-टाइम निगरानी हमारे सर्जनों को सुपरहीरो जैसी सटीकता और न्यूनतम आघात के साथ जटिल प्रक्रियाएं करने में सक्षम बनाती है।",
                    "buttons": [
                        {
                            "text": translations?.mot_final_buttons0 || "शेड्यूल के लिए अनुरोध करें",
                            "href": "/register-donor",
                            "classes": "bg-white text-blue-700 border border-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100"
                        },
                        {
                            "text": translations?.mot_final_buttons1 || "कॉल अनुरोध करें",
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
