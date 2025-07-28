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
import Images from '@/assets/Treatment/Sleep Disorder Management/Sleep Disorder Treatment.svg'
import CPAP from '@/assets/Treatment/Sleep Disorder Management/CPAP Therapy.svg'
import CognitiveBehavioral from '@/assets/Treatment/Sleep Disorder Management/Cognitive Behavioral Therapy (CBT-I).svg'
import LifestyleModifications from '@/assets/Treatment/Sleep Disorder Management/Lifestyle Modifications.svg'
import SleepMedications from '@/assets/Treatment/Sleep Disorder Management/Sleep Medications.svg'



export default function Sleepdisordertreatment() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Sleep disorder Treatment",
                overview: "Overview",
                subtitle: translations?.Sleepdisordertreatment_sections_subtitle || 'बेहतर नींद के लिए विशेषज्ञ नींद विकार उपचार',
                description: translations?.Sleepdisordertreatment_sections_description || 'क्या आप नींद की कमी से परेशान हैं? बीएम अस्पताल नींद विकारों के लिए विशेष उपचार प्रदान करता है जिससे आप फिर से सुकूनभरी नींद प्राप्त कर सकें। हमारी विशेषज्ञ टीम अनिद्रा, स्लीप एपनिया, बेचैन पैर सिंड्रोम और नार्कोलेप्सी जैसी स्थितियों का इलाज डायग्नोस्टिक्स, लाइफस्टाइल काउंसलिंग और पर्सनलाइज्ड थेरेपी के ज़रिए करती है। उपचार में स्लीप स्टडी, बिहेवियरल थेरेपी, दवा प्रबंधन और सीपीएपी जैसे डिवाइसेज़ शामिल हैं। समय पर इलाज से उच्च रक्तचाप, हृदय रोग और क्रॉनिक थकान जैसे गंभीर परिणामों से बचा जा सकता है। बीएम अस्पताल में समग्र देखभाल के साथ अपनी नींद और जीवन की गुणवत्ता को बेहतर बनाएं।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.Sleepdisordertreatment_info_title || 'नींद विकार उपचार क्या है?',
                content: translations?.Sleepdisordertreatment_info_content || 'नींद विकार उपचार का तात्पर्य उन चिकित्सीय और उपचार विधियों से है जो नींद से जुड़ी विभिन्न समस्याओं की पहचान और प्रबंधन में मदद करती हैं। इनमें अनिद्रा, स्लीप एपनिया, रेस्टलेस लेग सिंड्रोम, नार्कोलेप्सी और अन्य विकार शामिल हैं जो नींद की गुणवत्ता और अवधि को प्रभावित करते हैं। बीएम अस्पताल में हमारा उपचार नींद के इतिहास, जीवनशैली और स्वास्थ्य स्थिति की गहराई से जांच के साथ शुरू होता है। हम उन्नत स्लीप स्टडी, पॉलीसोम्नोग्राफी और होम बेस्ड टेस्ट का उपयोग करते हैं। निदान के आधार पर हम CBT-I थेरेपी, सीपीएपी, दवाएं और जीवनशैली में सुधार जैसी विधियों का उपयोग करते हैं। हमारा लक्ष्य स्वस्थ नींद पैटर्न को बहाल करना, ऊर्जा स्तर बढ़ाना और हृदय रोग या अवसाद जैसे दीर्घकालिक स्वास्थ्य जोखिमों को कम करना है।',

            },
            {
                type: "treatments",
                title: translations?.Sleepdisordertreatment_treatments_title || 'उपलब्ध उपचार विकल्प',
                description: translations?.Sleepdisordertreatment_treatments_description || 'नींद सुधारने और स्वास्थ्य बढ़ाने के लिए व्यक्तिगत उपचार विकल्प खोजें।',
                cards: [
                    {
                        icon: CognitiveBehavioral,  // Brain — fitting for Cognitive Behavioral Therapy
                        title: translations?.Sleepdisordertreatment_treatments_title || 'उपलब्ध उपचार विकल्प',
                        content: translations?.Sleepdisordertreatment_treatments_description || 'नींद सुधारने और स्वास्थ्य बढ़ाने के लिए व्यक्तिगत उपचार विकल्प खोजें।',

                    },
                    {
                        icon: LifestyleModifications,  // Sleeping face — ideal for CPAP therapy and sleep aid
                        title: translations?.Sleepdisordertreatment_cards_title3 || 'जीवनशैली में बदलाव',
                        content: translations?.Sleepdisordertreatment_cards_content3 || 'तनाव कम करने, नींद स्वच्छता और बेहतर नींद के लिए दिनचर्या में सुधार।',
                    },
                    {
                        icon: CPAP,  // Pill — perfect for sleep medications
                        title: translations?.Sleepdisordertreatment_cards_title1 || 'सीपीएपी थेरेपी',
                        content: translations?.Sleepdisordertreatment_cards_content1 || 'स्लीप एपनिया रोगियों के लिए प्रभावी वायु प्रवाह सहायता।',
                    },
                    {
                        icon: SleepMedications,  // Crescent moon — symbolizes lifestyle modifications for better sleep
                        title: translations?.Sleepdisordertreatment_cards_title2 || 'नींद से संबंधित दवाएं',
                        content: translations?.Sleepdisordertreatment_cards_content2 || 'अस्थायी या क्रॉनिक अनिद्रा के इलाज के लिए निर्धारित दवाएं।',
                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.Sleepdisordertreatment_helpline_title || '24x7 नींद विकार सहायता हेल्पलाइन',
                subtitle: translations?.Sleepdisordertreatment_helpline_subtitle || 'आपातकालीन हेल्पलाइन',
                description: translations?.Sleepdisordertreatment_helpline_description || 'नींद न आने से परेशान हैं? हमारी विशेषज्ञ टीम हर समय आपकी सहायता के लिए उपलब्ध है।',

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
            question: translations?.Sleepdisordertreatment_question || 'नींद संबंधी विकारों के सामान्य लक्षण क्या हैं?',
            answer: translations?.Sleepdisordertreatment_answer || 'सामान्य लक्षणों में सोने में कठिनाई, बार-बार नींद खुलना, दिन में थकान, खर्राटे, बेचैन पैर, और चिड़चिड़ापन शामिल हैं।',

        },
        {
            question: translations?.Sleepdisordertreatment_question1 || 'नींद की समस्याओं के लिए डॉक्टर से कब संपर्क करना चाहिए?',
            answer: translations?.Sleepdisordertreatment_answer1 || 'यदि आप 2 सप्ताह से अधिक समय से खराब नींद, अत्यधिक दिन की नींद या तेज़ खर्राटों का अनुभव कर रहे हैं, तो नींद विशेषज्ञ से परामर्श करें।',

        },
        {
            question: translations?.Sleepdisordertreatment_question2 || 'नींद विकारों के प्रकार क्या हैं?',
            answer: translations?.Sleepdisordertreatment_answer2 || 'नींद विकारों में अनिद्रा, स्लीप एपनिया, रेस्टलेस लेग सिंड्रोम, नार्कोलेप्सी और सर्केडियन रिदम विकार शामिल हैं।',

        },
        {
            question: translations?.Sleepdisordertreatment_question3 || 'नींद विकारों के लिए कौन-कौन से उपचार उपलब्ध हैं?',
            answer: translations?.Sleepdisordertreatment_answer3 || 'उपचार में व्यवहार चिकित्सा, नींद स्वच्छता शिक्षा, दवाएं, सीपीएपी थेरेपी और जीवनशैली में बदलाव शामिल हो सकते हैं।',

        },
        {
            question: translations?.Sleepdisordertreatment_question4 || 'क्या जीवनशैली में बदलाव नींद विकारों में मदद कर सकते हैं?',
            answer: translations?.Sleepdisordertreatment_answer4 || 'हां। नियमित नींद समय, स्क्रीन टाइम कम करना, तनाव प्रबंधन और सोने से पहले कैफीन या शराब से बचना नींद में काफी सुधार कर सकता है।',

        },
        {
            question: translations?.Sleepdisordertreatment_question5 || 'क्या आप नींद विकारों के लिए डायग्नोस्टिक टेस्ट प्रदान करते हैं?',
            answer: translations?.Sleepdisordertreatment_answer5 || 'हां। हम स्लीप स्टडी (पॉलीसोम्नोग्राफी), होम स्लीप एपनिया टेस्टिंग और क्लिनिकल मूल्यांकन की सुविधा प्रदान करते हैं।',

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
