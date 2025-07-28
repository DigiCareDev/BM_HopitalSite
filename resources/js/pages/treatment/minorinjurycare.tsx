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
import Images from '@/assets/Treatment/Minor Injury Care (Cuts, Burns, Sprains)/Minor Injury Care (Cuts, Burns, Sprains).svg'
import BurnManagement from '@/assets/Treatment/Minor Injury Care (Cuts, Burns, Sprains)/Burn Management.svg'
import PainInflammation from '@/assets/Treatment/Minor Injury Care (Cuts, Burns, Sprains)/Pain & Inflammation Relief.svg'
import SprainSupport from '@/assets/Treatment/Minor Injury Care (Cuts, Burns, Sprains)/Sprain Support.svg'
import WoundCleaning from '@/assets/Treatment/Minor Injury Care (Cuts, Burns, Sprains)/Wound Cleaning & Dressing.svg'


export default function Minorinjurycare() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Minor injury care",
                overview: "Overview",
                subtitle: translations?.Minorinjurycare_sections_subtitle || "छोटी चोटों की देखभाल (कट, जलन, मोच) – तुरंत राहत और विशेषज्ञ देखभाल",
                description: translations?.Minorinjurycare_sections_description || 'BM अस्पताल सभी उम्र के मरीजों के लिए छोटी चोटों (कट, जलन, मोच) की त्वरित और पेशेवर देखभाल प्रदान करता है। चाहे यह रसोई की दुर्घटना हो, खेल का झटका या कोई छोटी कार्यस्थल की चोट, हमारी टीम सही समय पर निदान और इलाज सुनिश्चित करती है। घावों की सफाई और पट्टी, जलन का प्रबंधन और मोच का स्थिरीकरण – हम हर कदम पर व्यक्तिगत ध्यान देते हैं। हमारी सुविधा संक्रमण-रहित उपकरण और आपातकालीन तैयार टीम के साथ सुसज्जित है। जल्दी इलाज संक्रमण को रोकता है, दर्द को कम करता है और उपचार को तेज करता है। आज ही आएं या हमारी 24/7 सहायता लाइन से संपर्क करें। BM अस्पताल पर भरोसा करें – कोई भी चोट छोटी नहीं होती।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.Minorinjurycare_info_title || "क्या है छोटी चोटों की देखभाल (कट, जलन, मोच)?",
                content: translations?.Minorinjurycare_info_content || "छोटी चोटों की देखभाल (कट, जलन, मोच) में उन चोटों का तत्काल इलाज शामिल है जो जानलेवा नहीं होतीं परंतु दर्दनाक और गंभीर हो सकती हैं। इसमें छोटे कट, हल्की जलन और जोड़ों की मोच शामिल हैं। BM अस्पताल में हमारी प्रशिक्षित आपातकालीन टीम शीघ्र राहत, संक्रमण नियंत्रण और सही इलाज सुनिश्चित करती है। अगर इन चोटों का इलाज न हो तो वे संक्रमण, गतिशीलता की समस्याएं या लम्बे समय तक असुविधा का कारण बन सकती हैं। हम स्वच्छता और इलाज के उच्चतम मानकों के साथ 24/7 उपलब्ध हैं – चाहे बच्चे की चोट हो या कार्यस्थल की दुर्घटना, हम आपकी तेजी से रिकवरी सुनिश्चित करते हैं।",
            },
            {
                type: "treatments",
                title: translations?.Minorinjurycare_treatments_title || "छोटी चोटों के लिए उपलब्ध उपचार (कट, जलन, मोच)",
                description: translations?.Minorinjurycare_treatments_description || "त्वरित, प्रभावी और व्यक्तिगत उपचार से दैनिक चोटों से शीघ्र राहत और आराम सुनिश्चित होता है।",
                cards: [
                    {
                        icon: WoundCleaning,  // Soap – representing cleaning wounds
                        title: translations?.Minorinjurycare_cards_title || "घाव की सफाई और पट्टी",
                        content: translations?.Minorinjurycare_cards_content || "संक्रमण से बचाव के लिए घाव की स्टरलाइज्ड सफाई और पट्टी।",
                    },
                    {
                        icon: BurnManagement,  // Fire – representing burns
                        title: translations?.Minorinjurycare_cards_title1 || "जलन का प्रबंधन",
                        content: translations?.Minorinjurycare_cards_content1 || "ठंडा करना, मरहम लगाना और स्टरलाइज्ड पट्टियों से उपचार।",
                    },
                    {
                        icon:SprainSupport,  // Bandage – representing sprain support and injury care
                        title: translations?.Minorinjurycare_cards_title2 || "मोच का उपचार",
                        content: translations?.Minorinjurycare_cards_content2 || "संपीड़न पट्टियाँ, बर्फ से चिकित्सा और ऊँचाई द्वारा राहत।",
                    },
                    {
                        icon: PainInflammation,  // Pill – representing medication for pain and inflammation relief
                        title: translations?.Minorinjurycare_cards_title3 || "दर्द और सूजन से राहत",
                        content: translations?.Minorinjurycare_cards_content3 || "दर्द प्रबंधन और सूजन कम करने के लिए दवाएँ।",
                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.Minorinjurycare_helpline_title || "24/7 सहायता के लिए हेल्पलाइन",
                subtitle: translations?.Minorinjurycare_helpline_subtitle || "आपातकालीन हेल्पलाइन",
                description: translations?.Minorinjurycare_helpline_description || "चोट लगी है? हमारी टीम त्वरित राहत और विशेषज्ञ देखभाल के लिए हर समय तैयार है।",
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
            question: translations?.Minorinjurycare_question || 'छोटी कट या खरोंच के तुरंत बाद क्या करना चाहिए?',
            answer: translations?.Minorinjurycare_answer || 'घाव को पानी से साफ करें, एंटीसेप्टिक लगाएं और साफ पट्टी से ढक दें। यदि खून बहना बंद न हो तो तुरंत डॉक्टर से संपर्क करें।',

        },
        {
            question: translations?.Minorinjurycare_question1 || 'कैसे जानें कि जलन के लिए चिकित्सकीय उपचार की आवश्यकता है?',
            answer: translations?.Minorinjurycare_answer1 || 'अगर जलन में फफोले हैं, तेज दर्द है या यह बड़ी जगह को प्रभावित कर रही है, तो डॉक्टर को दिखाना चाहिए। पहली डिग्री की जलन घर पर ठीक की जा सकती है।',

        },
        {
            question: translations?.Minorinjurycare_question2 || 'क्या मोच का इलाज घर पर किया जा सकता है?',
            answer: translations?.Minorinjurycare_answer2 || 'छोटी मोच का इलाज R.I.C.E. पद्धति (आराम, बर्फ, दबाव, और ऊंचाई) से किया जा सकता है। यदि सूजन या दर्द बना रहे तो अस्पताल जाएं।',

        },
        {
            question: translations?.Minorinjurycare_question3 || 'क्या छोटे घावों या कट्स के लिए टिटनेस का टीका जरूरी है?',
            answer: translations?.Minorinjurycare_answer3 || 'हाँ, यदि घाव गंदा है और पिछली टिटनेस खुराक को 5 साल से अधिक हो गए हैं, तो बूस्टर खुराक आवश्यक है।',

        },
        {
            question: translations?.Minorinjurycare_question4 || 'छोटी चोटों को ठीक होने में कितना समय लगता है?',
            answer: translations?.Minorinjurycare_answer4 || 'छोटी कट या जलन 5–10 दिनों में ठीक हो सकती है। मोच की गंभीरता के अनुसार 1–3 सप्ताह लग सकते हैं।',

        },
        {
            question: translations?.Minorinjurycare_question5 || 'छोटी चोट के लिए BM अस्पताल कब जाना चाहिए?',
            answer: translations?.Minorinjurycare_answer5 || 'अगर अत्यधिक खून बह रहा हो, तेज दर्द हो, संक्रमण के लक्षण हों, या घरेलू इलाज से 48 घंटों में आराम न मिले तो अस्पताल जाएं।',

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
