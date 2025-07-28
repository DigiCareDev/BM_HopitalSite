import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Mangement from '../components/Mangement';
import FAQSection from '../components/Faqs';
import AboutHeader from '@/assets/images/aboutHeader.jpg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Cholesterol and Lipid Disorder Treatment/Cholesterol and Lipid Disorder Treatment.svg'
import StatinTherapy from '@/assets/Treatment/Cholesterol and Lipid Disorder Treatment/Statin Therapy.svg'
import FibrateMedications from '@/assets/Treatment/Cholesterol and Lipid Disorder Treatment/Fibrate Medications.svg'
import DietaryCounseling from '@/assets/Treatment/Cholesterol and Lipid Disorder Treatment/Dietary Counseling_1.svg'
import LifestyleModifications from '@/assets/Treatment/Cholesterol and Lipid Disorder Treatment/Vitamin Therapy.svg'

export default function Cholesteroltreatment() {
     const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Cholesterol and lipid disorders Treatment ",
                overview: "Overview",
                subtitle: translations?.Cholesteroltreatment_sections_subtitle || "स्वस्थ हृदय के लिए कोलेस्ट्रॉल और लिपिड विकारों का उपचार",
                description: translations?.Cholesteroltreatment_sections_description || 'बीएम अस्पताल उन्नत कोलेस्ट्रॉल और लिपिड विकारों के उपचार प्रदान करता है, जो उच्च कोलेस्ट्रॉल, ट्राइग्लिसराइड्स और अन्य लिपिड असंतुलनों को प्रबंधित करने में मदद करता है, जो हृदय रोग का कारण बन सकते हैं। हमारे विशेषज्ञ हृदय रोग विशेषज्ञों और आहार विशेषज्ञों की टीम व्यक्तिगत उपचार योजनाएं प्रदान करती है, जिनमें जीवनशैली में बदलाव, आहार मार्गदर्शन और दवाएं शामिल हैं। हम प्रारंभिक पहचान, जोखिम कारकों के नियंत्रण और दीर्घकालिक स्वास्थ्य सुधार पर ध्यान केंद्रित करते हैं। हमारे साक्ष्य-आधारित दृष्टिकोण से एथेरोस्क्लेरोसिस, स्ट्रोक और हार्ट अटैक के जोखिम को कम किया जा सकता है। नियमित निगरानी और रोगी शिक्षा हमारे उपचार का एक महत्वपूर्ण हिस्सा हैं।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.Cholesteroltreatment_info_title || "कोलेस्ट्रॉल और लिपिड विकारों का उपचार क्या है?",
                content: translations?.Cholesteroltreatment_info_content || "कोलेस्ट्रॉल और लिपिड विकारों का उपचार रक्त में वसा—विशेषकर कोलेस्ट्रॉल और ट्राइग्लिसराइड्स—के असामान्य स्तर को नियंत्रित करने पर केंद्रित होता है। एलडीएल (खराब कोलेस्ट्रॉल) के उच्च या एचडीएल (अच्छे कोलेस्ट्रॉल) के निम्न स्तर से हृदय रोग, स्ट्रोक और अन्य हृदय संबंधी समस्याओं का खतरा बढ़ सकता है। बीएम अस्पताल में, हमारी विशेषज्ञ टीम एक व्यापक उपचार योजना प्रदान करती है जिसमें जीवनशैली में बदलाव, आहार सुधार, शारीरिक गतिविधि और स्टैटिन या फाइब्रेट जैसी दवाएं शामिल होती हैं। हम रक्त परीक्षण से लिपिड स्तर की जांच करते हैं, फिर प्रत्येक रोगी की स्थिति के अनुसार व्यक्तिगत देखभाल प्रदान करते हैं। नियमित निगरानी, रोगी शिक्षा और निवारक देखभाल हमारे उपचार की आधारशिला हैं। पारिवारिक हाइपरकोलेस्ट्रोलेमिया हो या जीवनशैली से संबंधित लिपिड विकार—हमारा उपचार आपको दीर्घकालिक हृदय स्वास्थ्य की दिशा में मार्गदर्शन करता है। आज ही अपॉइंटमेंट बुक करें!",
            },
            {
                type: "treatments",
                title: translations?.Cholesteroltreatment_treatments_title || "कोलेस्ट्रॉल और लिपिड विकारों के लिए उपलब्ध उपचार",
                description: translations?.Cholesteroltreatment_treatments_description || "कोलेस्ट्रॉल और लिपिड असंतुलन को नियंत्रित करने और हृदय स्वास्थ्य को प्रभावी रूप से सुधारने के लिए विशेषज्ञ देखभाल और सतत निगरानी के साथ वैयक्तिकृत उपचार खोजें।",
                cards: [
                    {
                        icon: StatinTherapy, // DNA – symbolizes cellular-level action like statins
                        title: translations?.Cholesteroltreatment_cards_title || "स्टैटिन थेरेपी",
                        content: translations?.Cholesteroltreatment_cards_content || "एलडीएल कोलेस्ट्रॉल स्तर को कम करता है और हृदय रोग के जोखिम को घटाता है।",
                    },
                    {
                        icon: FibrateMedications, // Stethoscope – general medical monitoring
                        title: translations?.Cholesteroltreatment_cards_title1 || "फाइब्रेट दवाएं",
                        content: translations?.Cholesteroltreatment_cards_content1 || "ट्राइग्लिसराइड्स को नियंत्रित करती हैं और एचडीएल (अच्छे) कोलेस्ट्रॉल को बढ़ावा देती हैं।",
                    },
                    {
                        icon: DietaryCounseling, // Salad – represents healthy eating
                        title: translations?.Cholesteroltreatment_cards_title2 || "आहार परामर्श",
                        content: translations?.Cholesteroltreatment_cards_content2 || "संतृप्त वसा और ट्रांस फैट को कम करने के लिए कस्टमाइज्ड आहार योजना।",
                    },
                    {
                        icon: "🏃", // Running – signifies lifestyle changes like exercise
                        title: translations?.Cholesteroltreatment_cards_title3 || "जीवनशैली में परिवर्तन",
                        content: translations?.Cholesteroltreatment_cards_content3 || "व्यायाम, धूम्रपान छोड़ना और तनाव कम करने की रणनीतियाँ शामिल हैं।",
                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.Cholesteroltreatment_helpline_title || "24/7 सहायता हेल्पलाइन – कोलेस्ट्रॉल और लिपिड विकारों के उपचार के लिए",
                subtitle: translations?.Cholesteroltreatment_helpline_subtitle || "आपातकालीन हेल्पलाइन",
                description: translations?.Cholesteroltreatment_helpline_description || "कोलेस्ट्रॉल और लिपिड विकारों के उपचार के लिए किसी भी समय विशेषज्ञ मार्गदर्शन प्राप्त करें। हमारी मेडिकल टीम हर समय आपके हृदय स्वास्थ्य की देखभाल के लिए तैयार है।",
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
            question: translations?.Cholesteroltreatment_question ||  'थायरॉयड विकारों के सामान्य लक्षण क्या हैं?',
            answer: translations?.Cholesteroltreatment_answer || 'थायरॉयड विकारों के लक्षण अलग-अलग हो सकते हैं, लेकिन इनमें थकान, वजन में बदलाव, मूड स्विंग्स, बालों का झड़ना, अनियमित दिल की धड़कन और तापमान के प्रति संवेदनशीलता शामिल हो सकते हैं। प्रारंभिक निदान जटिलताओं को रोकने में मदद करता है।',
        },
        {
            question: translations?.Cholesteroltreatment_question1 || 'बीएम अस्पताल में किन प्रकार के थायरॉयड विकारों का इलाज किया जाता है?',
            answer: translations?.Cholesteroltreatment_answer1 || 'हम हाइपोथायरायडिज्म, हाइपरथायरायडिज्म, गॉइटर, थायरॉयड नोड्यूल्स और थायरॉयड कैंसर का इलाज दवाओं, हार्मोन थेरेपी और आवश्यक होने पर सर्जरी द्वारा करते हैं।',
        },
        {
            question: translations?.Cholesteroltreatment_question2 ||  'थायरॉयड विकार का निदान कैसे किया जाता है?',
            answer: translations?.Cholesteroltreatment_answer2 || 'निदान में शारीरिक जांच, टीएसएच ब्लड टेस्ट, थायरॉयड हार्मोन स्तर की जांच, अल्ट्रासाउंड और लक्षणों के आधार पर रेडियोएक्टिव आयोडीन अपटेक स्कैन शामिल होता है।',
        },
        {
            question: translations?.Cholesteroltreatment_question3 ||  'हाइपोथायरायडिज्म का इलाज क्या है?',
            answer: translations?.Cholesteroltreatment_answer3 || 'हाइपोथायरायडिज्म का आमतौर पर इलाज लेवोथायरॉक्सिन नामक सिंथेटिक थायरॉयड हार्मोन से किया जाता है, जो हार्मोन स्तर को सामान्य करता है और लक्षणों को कम करता है।',
        },
        {
            question: translations?.Cholesteroltreatment_question4 ||  'क्या थायरॉयड विकारों का स्थायी इलाज संभव है?',
            answer: translations?.Cholesteroltreatment_answer4 || 'कुछ थायरॉयड विकारों का उचित उपचार से प्रबंधन या समाधान किया जा सकता है, लेकिन हाइपोथायरायडिज्म जैसी स्थितियों के लिए आमतौर पर जीवनभर दवा लेनी होती है।',
        },
        {
            question: translations?.Cholesteroltreatment_question5 || 'क्या थायरॉयड के इलाज के लिए सर्जरी की आवश्यकता होती है?',
            answer: translations?.Cholesteroltreatment_answer5 ||  'बड़े गॉइटर, थायरॉयड कैंसर, या सांस लेने या निगलने में समस्या उत्पन्न करने वाले नोड्यूल्स के लिए सर्जरी की सिफारिश की जाती है। हमारे विशेषज्ञ सर्जन सुरक्षित प्रक्रिया और पोस्ट-ऑपरेटिव देखभाल सुनिश्चित करते हैं।',
        }
    ];

    return (
        <div className='bg-white'>
           <BackToTop />
            <Subnav onTranslations={handletranslate} />
            <Nav translations={translations} />
            <Mangement contentData={contentData} />
            <FAQSection faqItems={faqItems} translations={translations} />
            <Footer translations={translations} />
        </div>
    )
}
