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
import Images from '@/assets/Treatment/Immunizations and Vaccinations/Immunizations and Vaccinations.svg'
import AdultImmunizations from '@/assets/Treatment/Immunizations and Vaccinations/Adult Immunizations.svg'
import BoosterShots from '@/assets/Treatment/Immunizations and Vaccinations/Booster Shots & Catch-Up.svg'
import RoutineChildhood from '@/assets/Treatment/Immunizations and Vaccinations/Routine Childhood Vaccinations.svg'
import TravelVaccinations from '@/assets/Treatment/Immunizations and Vaccinations/Travel Vaccinations.svg'

export default function Immunizationsandvaccinations() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Immunizations and vaccinations",
                overview: "Overview",
                subtitle: translations?.Immunizationsandvaccinations_sections_subtitle || 'टीकाकरण और प्रतिरक्षण के साथ व्यापक देखभाल',
                description: translations?.Immunizationsandvaccinations_sections_description || 'बीएम अस्पताल में हम अपने विशेषज्ञ टीकाकरण और प्रतिरक्षण सेवाओं के माध्यम से निवारक स्वास्थ्य देखभाल को प्राथमिकता देते हैं। टीकाकरण जानलेवा बीमारियों से व्यक्तिगत और सामुदायिक सुरक्षा प्रदान करता है। हमारी टीम नवजात शिशुओं, बच्चों, वयस्कों और वरिष्ठ नागरिकों के लिए सभी आवश्यक और यात्रा संबंधी टीके प्रदान करती है। हम राष्ट्रीय और अंतरराष्ट्रीय टीकाकरण कार्यक्रमों का पालन करते हैं और सुरक्षा, स्वच्छता और कोल्ड-चेन स्टोरेज सुनिश्चित करते हैं।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.Immunizationsandvaccinations_info_title || 'टीकाकरण और प्रतिरक्षण क्या हैं?',
                content: translations?.Immunizationsandvaccinations_info_content || 'टीकाकरण और प्रतिरक्षण संक्रमण रोगों से बचाव के लिए महत्वपूर्ण निवारक स्वास्थ्य उपाय हैं। टीकों में वायरस या बैक्टीरिया का कमजोर या निष्क्रिय रूप शरीर में डाला जाता है जिससे प्रतिरक्षा प्रणाली उसे पहचान कर भविष्य में संक्रमण से लड़ने में सक्षम हो जाती है। बीएम अस्पताल में हम नवजात शिशुओं से लेकर बुजुर्गों तक के लिए पूरी रेंज के टीके प्रदान करते हैं जैसे कि खसरा, मम्प्स, रूबेला (MMR), पोलियो, फ्लू, हेपेटाइटिस, एचपीवी आदि। हम सरकारी और वैश्विक स्वास्थ्य दिशानिर्देशों का पालन करते हुए सुरक्षित और प्रभावी टीकाकरण सुनिश्चित करते हैं।',
            },
            {
                type: "treatments",
                title: translations?.Immunizationsandvaccinations_treatments_title || 'उपलब्ध उपचार – समय पर टीकाकरण से अपने स्वास्थ्य की रक्षा करें',
                description: translations?.Immunizationsandvaccinations_treatments_description || 'स्वस्थ रहें, सुरक्षित रहें संक्रामक रोगों से बचाव और सभी उम्र के लोगों के लिए आजीवन सुरक्षा हेतु हमारे 4 प्रमुख उपचार जानें।',
                cards: [
                    {
                        icon: RoutineChildhood, // Teddy bear — symbolizes childhood and pediatric care
                        title: translations?.Immunizationsandvaccinations_cards_title || 'नियमित बाल टीकाकरण',
                        content: translations?.Immunizationsandvaccinations_cards_content || 'MMR, पोलियो, DPT और हेपेटाइटिस B जैसे टीके lifelong immunity के लिए।',
                    },
                    {
                        icon: AdultImmunizations, // Stethoscope — general adult healthcare and immunizations
                        title: translations?.Immunizationsandvaccinations_cards_title1 || 'वयस्कों का टीकाकरण',
                        content: translations?.Immunizationsandvaccinations_cards_content1 || 'इन्फ्लुएंजा, ज़ोस्टर, टेटनस और HPV जैसे टीके दीर्घकालिक सुरक्षा के लिए।',
                    },
                    {
                        icon: TravelVaccinations, // Globe — for travel-related vaccines
                        title: translations?.Immunizationsandvaccinations_cards_title2 || 'यात्रा हेतु टीके',
                        content: translations?.Immunizationsandvaccinations_cards_content2 || 'टाइफाइड, यलो फीवर और हेपेटाइटिस A जैसे जरूरी टीके यात्रियों के लिए।',
                    },
                    {
                        icon: BoosterShots, // Syringe — booster and catch-up shots
                        title: translations?.Immunizationsandvaccinations_cards_title3 || 'बूस्टर शॉट्स और कैच-अप',
                        content: translations?.Immunizationsandvaccinations_cards_content3 || 'प्रतिरक्षा को बनाए रखने के लिए बूस्टर डोज़ या छूटे हुए टीकों की पूर्ति।',
                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.Immunizationsandvaccinations_helpline_title || '24/7 हेल्पलाइन – हमेशा सुरक्षित रहें!',
                subtitle: translations?.Immunizationsandvaccinations_helpline_subtitle || 'आपातकालीन हेल्पलाइन',
                description: translations?.Immunizationsandvaccinations_helpline_description || 'टीकाकरण और प्रतिरक्षण से जुड़े सभी सवालों के लिए हम हर समय मदद के लिए तैयार हैं।',
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
            question: translations?.Immunizationsandvaccinations_question || 'टीकाकरण और प्रतिरक्षण क्या हैं?',
            answer: translations?.Immunizationsandvaccinations_answer || 'टीकाकरण और प्रतिरक्षण ऐसी चिकित्सीय प्रक्रियाएं हैं जो शरीर की प्रतिरक्षा प्रणाली को सक्रिय करके संक्रमण रोगों से सुरक्षा प्रदान करती है ',
        },
        {
            question: translations?.Immunizationsandvaccinations_question1 || 'टीकाकरण क्यों आवश्यक हैं?',
            answer: translations?.Immunizationsandvaccinations_answer1 || "टीकाकरण जानलेवा बीमारियों को रोकते हैं, समुदाय में संक्रमण के प्रसार को कम करते हैं, और उन लोगों की रक्षा करते हैं जो बहुत छोटे या बीमार हैं और टीका नहीं लगवा सकते।"
        },
        {
            question: translations?.Immunizationsandvaccinations_question3 || 'मेरे बच्चे को कौन-कौन से टीके लगवाने चाहिए?',
            answer: translations?.Immunizationsandvaccinations_answer3 || 'महत्वपूर्ण टीकों में बीसीजी, हेपेटाइटिस बी, डीपीटी, पोलियो, एमएमआर आदि शामिल हैं, जो बच्चे की उम्र और चिकित्सा इतिहास पर निर्भर करते हैं। एक बाल रोग विशेषज्ञ से व्यक्तिगत टीका कार्यक्रम की सलाह लें।',
        },
        {
            question: translations?.Immunizationsandvaccinations_question2 || 'क्या बच्चों और वयस्कों के लिए टीके सुरक्षित हैं?',
            answer: translations?.Immunizationsandvaccinations_answer2 || 'हाँ, टीकों को सुरक्षा और प्रभावशीलता के लिए कठोर परीक्षणों से गुजारा जाता है। दुष्प्रभाव आमतौर पर हल्के और अस्थायी होते हैं, जैसे हल्का बुखार या सूजन।',
        },
        {
            question: translations?.Immunizationsandvaccinations_question4 || 'क्या वयस्कों को भी टीकों की आवश्यकता होती है?',
            answer: translations?.Immunizationsandvaccinations_answer4 || 'हाँ, वयस्कों को फ्लू, कोविड-19, टेटनस, हेपेटाइटिस, ज़ोस्टर और यात्रा से संबंधित टीकों की आवश्यकता हो सकती है ताकि दीर्घकालिक सुरक्षा सुनिश्चित हो सके।',
        },
        {
            question: translations?.Immunizationsandvaccinations_question5 || 'क्या मैं एक ही बार में कई टीके लगवा सकता हूँ?',
            answer: translations?.Immunizationsandvaccinations_answer5 || 'हाँ, एक ही बार में कई टीके लगवाना सुरक्षित होता है। आपका स्वास्थ्य सेवा प्रदाता आपकी उम्र, चिकित्सा इतिहास और टीकों की उपलब्धता के अनुसार मार्गदर्शन करेगा।',
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
