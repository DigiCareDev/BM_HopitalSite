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
import Images from '@/assets/Treatment/Urinary Tract Infection (UTI) Treatment/Urinary Tract Infection (UTI) Treatment.svg'
import Antibiotic from '@/assets/Treatment/Urinary Tract Infection (UTI) Treatment/Antibiotic Therapy.svg'
import PainManagement from '@/assets/Treatment/Urinary Tract Infection (UTI) Treatment/Pain Management.svg'
import HydrationSupport from '@/assets/Treatment/Urinary Tract Infection (UTI) Treatment/Hydration Support.svg'
import Recurrent from '@/assets/Treatment/Urinary Tract Infection (UTI) Treatment/Recurrent UTI Management.svg'

export default function Urinarytractinfection() {
      const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Urinarytract infection",
                overview: "Overview",
                subtitle: translations?.Urinarytractinfection_sections_subtitle || "बीएम अस्पताल में प्रभावी मूत्र मार्ग संक्रमण (यूटीआई) उपचार",
                description: translations?.Urinarytractinfection_sections_description || 'मूत्र मार्ग संक्रमण (यूटीआई) उपचार जलन युक्त पेशाब, बार-बार पेशाब की इच्छा, और निचले पेट की परेशानी से त्वरित राहत प्रदान करता है। बीएम अस्पताल में हम मूत्राशय, किडनी, या मूत्रमार्ग से संबंधित सभी प्रकार के यूटीआई के लिए व्यापक निदान और उपचार प्रदान करते हैं। हमारे अनुभवी यूरोलॉजिस्ट उन्नत यूरिन परीक्षण, इमेजिंग, और कल्चर के माध्यम से संक्रमण के सटीक कारण की पहचान करते हैं। निदान के आधार पर, उपचार में एंटीबायोटिक्स, हाइड्रेशन थेरेपी, दर्द नियंत्रण और रोकथाम संबंधी मार्गदर्शन शामिल हो सकते हैं। बार-बार यूटीआई होने पर, हम विशेष देखभाल और दीर्घकालिक समाधान प्रदान करते हैं। हम पुरुषों और महिलाओं के लिए व्यक्तिगत, गोपनीय और सहानुभूतिपूर्ण देखभाल सुनिश्चित करते हैं। समय पर हस्तक्षेप किडनी संक्रमण जैसे जटिलताओं को रोकता है और तेज़ रिकवरी को बढ़ावा देता है।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.Urinarytractinfection_info_title || "मूत्र मार्ग संक्रमण (यूटीआई) उपचार क्या है?",
                content: translations?.Urinarytractinfection_info_content || "मूत्र मार्ग संक्रमण (यूटीआई) उपचार में मूत्र प्रणाली – मुख्यतः मूत्राशय, मूत्रमार्ग या किडनी को प्रभावित करने वाले संक्रमण का निदान और प्रबंधन शामिल है। यूटीआई बैक्टीरिया के मूत्रमार्ग में प्रवेश करने से होते हैं और इससे जलन युक्त पेशाब, बार-बार पेशाब आना, धुंधला पेशाब और पेल्विक दर्द जैसे लक्षण हो सकते हैं। बीएम अस्पताल में यूटीआई उपचार यूरिन टेस्ट, कल्चर और आवश्यकता होने पर इमेजिंग स्कैन के माध्यम से विस्तृत मूल्यांकन से शुरू होता है। एक बार निदान हो जाने पर, उपचार में लक्षित एंटीबायोटिक्स, तरल सेवन बढ़ाना और दर्द से राहत शामिल होती है। बार-बार या जटिल मामलों में, हमारे विशेषज्ञ दीर्घकालिक देखभाल योजनाएं और जीवनशैली संबंधी मार्गदर्शन प्रदान करते हैं। समय पर उपचार संक्रमण को किडनी तक फैलने या पुराना बनने से रोकता है। हम पुरुषों, महिलाओं और बच्चों के लिए सुरक्षित, प्रभावी और गोपनीय देखभाल को प्राथमिकता देते हैं। बीएम अस्पताल में अपने अनुकूलित यूटीआई उपचार के लिए कभी भी कॉल करें: +91-7318000751 – 55।",
            },
            {
                type: "treatments",
                title: translations?.Urinarytractinfection_treatments_title || "मूत्र मार्ग संक्रमण (यूटीआई) के लिए उपलब्ध उपचार",
                description: translations?.Urinarytractinfection_treatments_description || "यूटीआई के लिए उपलब्ध उपचार तेज़ राहत और दीर्घकालिक मूत्र स्वास्थ्य के लिए प्रभावी और लक्षित देखभाल प्रदान करते हैं। हम निम्नलिखित उपचार विकल्प प्रदान करते हैं:",
                cards: [
                    {
                        icon: Antibiotic, // Pill – for antibiotic therapy
                        title: translations?.Urinarytractinfection_cards_title || "एंटीबायोटिक थेरेपी",
                        content: translations?.Urinarytractinfection_cards_content || "संक्रमण पैदा करने वाले बैक्टीरिया को खत्म करने के लिए यूरिन कल्चर के आधार पर निर्धारित की जाती है।",

                    },
                    {
                        icon: PainManagement, // Collision symbol – representing pain and discomfort relief
                        title: translations?.Urinarytractinfection_cards_title1 || "दर्द प्रबंधन",
                        content: translations?.Urinarytractinfection_cards_content1 || "जलन और निचले पेट की परेशानी को कम करने के लिए दवाएं।",

                    },
                    {
                        icon: HydrationSupport, // Droplet – hydration support fits well here
                        title: translations?.Urinarytractinfection_cards_title2 || "हाइड्रेशन सपोर्ट",
                        content: translations?.Urinarytractinfection_cards_content2 || "बैक्टीरिया को शरीर से बाहर निकालने के लिए तरल सेवन या IV फ्लूइड्स को बढ़ावा देता है।",

                    },
                    {
                        icon: Recurrent, // Repeat arrows – symbolizing recurrent UTI management
                        title: translations?.Urinarytractinfection_cards_title3 || "बार-बार होने वाले यूटीआई का प्रबंधन",
                        content: translations?.Urinarytractinfection_cards_content3 || "बार-बार संक्रमण के लिए उन्नत निदान और रोकथाम रणनीतियाँ।",

                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.Urinarytractinfection_helpline_title || "24/7 हेल्पलाइन सहायता – मूत्र मार्ग संक्रमण (यूटीआई) उपचार",
                subtitle: translations?.Urinarytractinfection_helpline_subtitle || "आपातकालीन हेल्पलाइन",
                description: translations?.Urinarytractinfection_helpline_description || "यूटीआई के लक्षणों के लिए किसी भी समय विशेषज्ञ देखभाल प्राप्त करें। तेज़ सहायता, निदान और उपचार मार्गदर्शन केवल एक कॉल की दूरी पर।",
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
            question: translations?.Urinarytractinfection_question || 'मूत्र मार्ग संक्रमण (यूटीआई) के सामान्य लक्षण क्या हैं?',
            answer: translations?.Urinarytractinfection_answer || 'सामान्य लक्षणों में पेशाब करते समय जलन, बार-बार पेशाब आने की इच्छा, धुंधला या दुर्गंधयुक्त पेशाब, पेल्विक दर्द और कभी-कभी बुखार या ठंड लगना शामिल हैं।',

        },
        {
            question: translations?.Urinarytractinfection_question1 || 'मूत्र मार्ग संक्रमण (यूटीआई) के कारण क्या हैं?',
            answer: translations?.Urinarytractinfection_answer1 || 'यूटीआई आमतौर पर बैक्टीरिया (जैसे ई. कोलाई) द्वारा मूत्रमार्ग में प्रवेश करने से होते हैं। खराब स्वच्छता, पानी की कमी, और कुछ स्वास्थ्य स्थितियाँ जोखिम बढ़ा सकती हैं।',

        },
        {
            question: translations?.Urinarytractinfection_question2 || 'बीएम अस्पताल में यूटीआई का निदान कैसे किया जाता है?',
            answer: translations?.Urinarytractinfection_answer2 || 'हम बैक्टीरिया का पता लगाने के लिए यूरिन एनालिसिस और यूरिन कल्चर करते हैं। जटिल मामलों में, किडनी की जांच के लिए अल्ट्रासाउंड या सीटी स्कैन किया जाता है।',

        },
        {
            question: translations?.Urinarytractinfection_question3 || 'बीएम अस्पताल में यूटीआई के लिए कौन-कौन से उपचार उपलब्ध हैं?',
            answer: translations?.Urinarytractinfection_answer3 || 'उपचार में एंटीबायोटिक्स, दर्द से राहत, हाइड्रेशन थेरेपी और बार-बार होने वाले संक्रमणों के लिए दीर्घकालिक नियंत्रण शामिल हैं। सभी उपचार व्यक्तिगत आवश्यकताओं के अनुसार तय किए जाते हैं।',

        },
        {
            question: translations?.Urinarytractinfection_question4 || 'क्या यूटीआई को रोका जा सकता है?',
            answer: translations?.Urinarytractinfection_answer4 || 'हाँ। अधिक पानी पिएं, स्वच्छता बनाए रखें, यौन संबंध के बाद पेशाब करें, और कठोर साबुन या तंग अंडरवियर जैसे जलनकारी उत्पादों से बचें।',

        },
        {
            question: translations?.Urinarytractinfection_question5 || 'यूटीआई के लिए आपातकालीन देखभाल की आवश्यकता कब होती है?',
            answer: translations?.Urinarytractinfection_answer5 || 'अगर आपको तेज बुखार, पीठ दर्द, मतली, उल्टी या किडनी संक्रमण के संकेत दिखें, तो हमारी 24/7 हेल्पलाइन पर तुरंत संपर्क करें: +91-7318000751 – 55।',

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
