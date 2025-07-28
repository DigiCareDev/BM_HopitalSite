import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FAQSection from '../components/Faqs';
import Mangement from '../components/Mangement';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Diabetes Management/Diabetes Treatment.svg'
import Continuous from '@/assets/Treatment/Diabetes Management/Continuous Monitoring.svg'
import LifestyleGuidance from '@/assets/Treatment/Diabetes Management/Diet & Lifestyle Guidance.svg'
import InsulinTherapy from '@/assets/Treatment/Diabetes Management/Insulin Therapy.svg'
import OralMedications from '@/assets/Treatment/Diabetes Management/Oral Medications.svg'


export default function DiabetesTreatment() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Allergy Treatment",
                overview: "Overview",
                subtitle: translations?.DiabetesTreatment_sections_subtitle || 'बीएम हॉस्पिटल में डायबिटीज का इलाज – ब्लड शुगर नियंत्रित करें, स्वास्थ्य की रक्षा करें',
                description: translations?.DiabetesTreatment_sections_description || 'बीएम हॉस्पिटल में विशेषज्ञों द्वारा डायबिटीज का इलाज किया जाता है जिससे मरीजों को ब्लड शुगर स्तर नियंत्रित करने और दीर्घकालिक जटिलताओं से बचने में मदद मिलती है। हमारा व्यापक दृष्टिकोण सटीक निदान, दवा प्रबंधन, डाइट काउंसलिंग और जीवनशैली योजना पर आधारित होता है। टाइप 1, टाइप 2 और गर्भकालीन डायबिटीज के अनुसार इलाज को अनुकूलित किया जाता है। हमारे एंडोक्रिनोलॉजिस्ट और डायबिटीज एजुकेटर नियमित रूप से ग्लूकोज मॉनिटरिंग, दवाओं में समायोजन और पोषण व व्यायाम के मार्गदर्शन से मरीजों की सहायता करते हैं। समय पर जांच और शुरुआती हस्तक्षेप अच्छे स्वास्थ्य की कुंजी हैं।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.DiabetesTreatment_info_title || 'डायबिटीज का इलाज क्या है? – बेहतर ब्लड शुगर नियंत्रण की दिशा में आपका मार्ग',
                content: translations?.DiabetesTreatment_info_content || 'डायबिटीज का इलाज उन चिकित्सीय उपायों और जीवनशैली में बदलावों को दर्शाता है जिनके माध्यम से टाइप 1, टाइप 2 या गर्भकालीन डायबिटीज के रोगियों में उच्च रक्त शर्करा के स्तर को नियंत्रित किया जाता है। इसका लक्ष्य स्वस्थ ग्लूकोज स्तर बनाए रखना और नसों की क्षति, हृदय रोग, किडनी फेलियर और दृष्टि संबंधी समस्याओं जैसी गंभीर जटिलताओं से बचाव करना होता है। बीएम हॉस्पिटल में इलाज में इंसुलिन थेरेपी या मौखिक दवाएं, अनुकूलित आहार योजना, व्यायाम और नियमित ब्लड शुगर मॉनिटरिंग शामिल होते हैं। हम मरीज-विशिष्ट देखभाल और निरंतर सहयोग प्रदान करते हैं।',
            },
            {
                type: "treatments",
                title: translations?.DiabetesTreatment_treatments_title || 'उपलब्ध उपचार',
                description: translations?.DiabetesTreatment_treatments_description || 'प्रभावी नियंत्रण की शुरुआत सही उपचार से होती है। बीएम हॉस्पिटल विश्वसनीय उपचार प्रदान करता है जो विशेषज्ञ देखभाल के साथ ब्लड शुगर प्रबंधन और मॉनिटरिंग के लिए डिज़ाइन किए गए हैं।',
                cards: [
                    {
                        icon: InsulinTherapy, // Syringe — best suited for insulin therapy
                        title: translations?.DiabetesTreatment_cards_title1 || 'इंसुलिन थेरेपी',
                        content: translations?.DiabetesTreatment_cards_content1 || 'टाइप 1 और एडवांस टाइप 2 डायबिटीज के लिए अनुकूलित इंसुलिन योजनाएं।',
                    },
                    {
                        icon: LifestyleGuidance, // Pill — perfect for oral medications
                        title: translations?.DiabetesTreatment_cards_title2 || 'आहार और जीवनशैली मार्गदर्शन',
                        content: translations?.DiabetesTreatment_cards_content2 || 'संतुलित पोषण और सक्रिय जीवनशैली के लिए व्यक्तिगत योजनाएं।',
                    },
                    {
                        icon: Continuous, // Salad bowl — represents diet and healthy eating
                        title: translations?.DiabetesTreatment_cards_title3 || 'निरंतर निगरानी',
                        content: translations?.DiabetesTreatment_cards_content3 || 'दीर्घकालिक नियंत्रण के लिए नियमित ब्लड शुगर जांच और स्वास्थ्य मूल्यांकन।',
                    },
                    {
                        icon: OralMedications, // Stethoscope — symbolizes regular monitoring and checkups
                        title: translations?.DiabetesTreatment_cards_title || 'मौखिक दवाएं',
                        content: translations?.DiabetesTreatment_cards_content || 'रक्त शर्करा को नियंत्रित करने के लिए सुरक्षित और डॉक्टर द्वारा निर्धारित दवाएं।',
                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.DiabetesTreatment_helpline_title || 'जब भी आवश्यकता हो, डायबिटीज सहायता – हमारी 24/7 हेल्पलाइन से जुड़ें!',
                subtitle: translations?.DiabetesTreatment_helpline_subtitle || 'आपातकालीन हेल्पलाइन',
                description: translations?.DiabetesTreatment_helpline_description || 'ब्लड शुगर से जुड़ी समस्याओं के लिए विशेषज्ञ सलाह और आपातकालीन सहायता सिर्फ एक कॉल या क्लिक दूर है।',
                contacts: [
                    {
                        icon: "📞",
                        label: translations?.contacts_label || 'आपातकालीन हेल्पलाइन',
                        value: "+91-7318000751 – 55"
                    },
                    {
                        icon: "📧",
                        label: translations?.contacts_label1 || 'ईमेल पता',
                        value: "info@bmswtrust.org"
                    }
                ],
                image: {
                    src: Helpline,
                    alt: "Doctor Appointment",
                    badge: {
                        icon: "📅",
                        title: translations?.image_badge_title || 'अपॉइंटमेंट',
                        subtitle: translations?.image_badge_subtitle || 'कभी भी, कहीं भी अपॉइंटमेंट बुक करें',
                    }
                }
            }
        ]
    };


    const faqItems = [
        {
            question: translations?.DiabetesTreatment_question || 'थायरॉयड विकारों के सामान्य लक्षण क्या हैं?',
            answer: translations?.DiabetesTreatment_answer || 'थायरॉयड विकारों के लक्षण अलग-अलग हो सकते हैं, लेकिन इनमें थकान, वजन में बदलाव, मूड स्विंग्स, बालों का झड़ना, अनियमित दिल की धड़कन और तापमान के प्रति संवेदनशीलता शामिल हो सकते हैं। प्रारंभिक निदान जटिलताओं को रोकने में मदद करता है।',
        },
        {
            question: translations?.DiabetesTreatment_question1 || 'बीएम अस्पताल में किन प्रकार के थायरॉयड विकारों का इलाज किया जाता है?',
            answer: translations?.DiabetesTreatment_answer1 || 'हम हाइपोथायरायडिज्म, हाइपरथायरायडिज्म, गॉइटर, थायरॉयड नोड्यूल्स और थायरॉयड कैंसर का इलाज दवाओं, हार्मोन थेरेपी और आवश्यक होने पर सर्जरी द्वारा करते हैं।',
        },
        {
            question: translations?.DiabetesTreatment_question2 || 'थायरॉयड विकार का निदान कैसे किया जाता है?',
            answer: translations?.DiabetesTreatment_answer2 || 'निदान में शारीरिक जांच, टीएसएच ब्लड टेस्ट, थायरॉयड हार्मोन स्तर की जांच, अल्ट्रासाउंड और लक्षणों के आधार पर रेडियोएक्टिव आयोडीन अपटेक स्कैन शामिल होता है।',
        },
        {
            question: translations?.DiabetesTreatment_question3 || 'हाइपोथायरायडिज्म का इलाज क्या है?',
            answer: translations?.DiabetesTreatment_answer3 || 'हाइपोथायरायडिज्म का आमतौर पर इलाज लेवोथायरॉक्सिन नामक सिंथेटिक थायरॉयड हार्मोन से किया जाता है, जो हार्मोन स्तर को सामान्य करता है और लक्षणों को कम करता है।',
        },
        {
            question: translations?.DiabetesTreatment_question4 || 'क्या थायरॉयड विकारों का स्थायी इलाज संभव है?',
            answer: translations?.DiabetesTreatment_answer4 || 'कुछ थायरॉयड विकारों का उचित उपचार से प्रबंधन या समाधान किया जा सकता है, लेकिन हाइपोथायरायडिज्म जैसी स्थितियों के लिए आमतौर पर जीवनभर दवा लेनी होती है।',
        },
        {
            question: translations?.DiabetesTreatment_question5 || 'क्या थायरॉयड के इलाज के लिए सर्जरी की आवश्यकता होती है?',
            answer: translations?.DiabetesTreatment_answer5 || 'बड़े गॉइटर, थायरॉयड कैंसर, या सांस लेने या निगलने में समस्या उत्पन्न करने वाले नोड्यूल्स के लिए सर्जरी की सिफारिश की जाती है। हमारे विशेषज्ञ सर्जन सुरक्षित प्रक्रिया और पोस्ट-ऑपरेटिव देखभाल सुनिश्चित करते हैं।',
        }
    ];


    return (
        <>
            <div className='bg-white'>
                <BackToTop />
                <Subnav onTranslations={handletranslate} />
                <Nav translations={translations} />
                <Mangement contentData={contentData} />
                <FAQSection faqItems={faqItems} translations={translations} />
                <Footer translations={translations} />
            </div>
        </>
    )
}
