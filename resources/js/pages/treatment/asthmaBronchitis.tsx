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
import Images from '@/assets/Treatment/Asthma and Bronchitis Management/Asthma and Bronchitis Treatment.svg'
import Bronchodilators from '@/assets/Treatment/Asthma and Bronchitis Management/Bronchodilators.svg'
import Corticosteroids from '@/assets/Treatment/Asthma and Bronchitis Management/Inhaled Corticosteroids.svg'
import Nebulization from '@/assets/Treatment/Asthma and Bronchitis Management/Nebulization Therapy.svg'
import Oxygen from '@/assets/Treatment/Asthma and Bronchitis Management/Oxygen Support.svg'

export default function AsthmaBronchitis() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Asthma and Bronchitis Treatment",
                overview: "Overview",
                subtitle: translations?.asthmabronchitis_sections_subtitle || 'अस्थमा और ब्रोंकाइटिस उपचार – बेहतर सांस लें, स्वस्थ जीवन जिएं',
                description: translations?.asthmabronchitis_sections_description || 'बीएम अस्पताल में, हमारा अस्थमा और ब्रोंकाइटिस उपचार उन्नत श्वसन देखभाल के माध्यम से आसानी से और स्वस्थ तरीके से सांस लेने को बहाल करने पर केंद्रित है। अस्थमा एक पुरानी स्थिति है जिसमें वायुमार्ग में सूजन और संकुचन होता है, जबकि ब्रोंकाइटिस ब्रोंकियल ट्यूब्स की सूजन है, जो अक्सर संक्रमण या प्रदूषकों के कारण होती है। दोनों स्थितियों में खांसी, घरघराहट, सीने में जकड़न और सांस लेने में कठिनाई हो सकती है। हमारे विशेषज्ञ पल्मोनोलॉजिस्ट व्यक्तिगत देखभाल योजनाएं प्रदान करते हैं जिनमें इनहेलर, ब्रोंकोडाइलेटर, कॉर्टिकोस्टेरॉयड्स, नेब्युलाइज़ेशन और जीवनशैली मार्गदर्शन शामिल है। हम सटीक निदान के लिए पल्मोनरी फंक्शन टेस्ट और एलर्जी स्क्रीनिंग भी करते हैं। चाहे वह तीव्र या पुरानी ब्रोंकाइटिस हो, या हल्का से गंभीर अस्थमा, हमारी टीम आपातकालीन और नियमित देखभाल के लिए 24x7 उपलब्ध है।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.asthmabronchitis_info_title || 'अस्थमा और ब्रोंकाइटिस का उपचार क्या है?',
                content: translations?.asthmabronchitis_info_content || 'अस्थमा और ब्रोंकाइटिस का उपचार वायुमार्ग की सूजन को नियंत्रित करने, सांस लेने में सुधार करने और श्वसन जटिलताओं के जोखिम को कम करने पर केंद्रित है। अस्थमा एक पुरानी स्थिति है जिसमें वायुमार्ग संकुचित हो जाते हैं, जिससे घरघराहट, खांसी और सांस की तकलीफ होती है। दूसरी ओर, ब्रोंकाइटिस ब्रोंकियल ट्यूब्स की सूजन है और यह तीव्र (कम समय के लिए) या पुरानी (लंबे समय तक) हो सकती है, जो अक्सर संक्रमण या प्रदूषण के कारण होती है। बीएम अस्पताल में हमारा उपचार दृष्टिकोण ब्रोंकोडाइलेटर, इनहेल्ड कॉर्टिकोस्टेरॉयड्स, नेब्युलाइज़ेशन थेरेपी, ऑक्सीजन सहायता और जीवनशैली में सुधार को शामिल करता है। सटीक निदान के लिए हम फेफड़ों की कार्यक्षमता की जांच, छाती का एक्स-रे और एलर्जी स्क्रीनिंग करते हैं। हमारे श्वसन विशेषज्ञ प्रत्येक रोगी की स्थिति की गंभीरता के अनुसार एक अनुकूलित योजना बनाते हैं। समय पर और प्रभावी उपचार बार-बार होने वाले अटैक्स, अस्पताल में भर्ती से बचाव और जीवन की गुणवत्ता में सुधार में मदद कर सकता है।',
            },
            {
                type: "treatments",
                title: translations?.asthmabronchitis_treatments_title || 'उपलब्ध उपचार',
                description: translations?.asthmabronchitis_treatments_description || 'अस्थमा और ब्रोंकाइटिस उपचार के लिए उपलब्ध विकल्पों का उद्देश्य लक्षणों को नियंत्रित करना, सूजन को कम करना और श्वसन में सुधार करना है। ये सभी योजनाएं हमारे श्वसन विशेषज्ञों द्वारा रोगी की जरूरतों के अनुसार तैयार की जाती हैं।',
                cards: [
                    {
                        icon: Bronchodilators, // Lungs — perfect for bronchodilation
                        title: translations?.asthmabronchitis_cards_title || 'ब्रोंकोडाइलेटर',
                        content: translations?.asthmabronchitis_cards_content || 'वायुमार्ग की मांसपेशियों को तेजी से आराम देकर सांस लेने में मदद करते हैं।',
                    },
                    {
                        icon: Corticosteroids, // Air — symbolizes inhalation and airflow
                        title: translations?.asthmabronchitis_cards_title1 || 'इनहेल्ड कॉर्टिकोस्टेरॉयड्स',
                        content: translations?.asthmabronchitis_cards_content1 || 'सूजन को कम करते हैं और अस्थमा या ब्रोंकाइटिस के बार-बार होने वाले अटैक्स को रोकते हैं।',
                    },
                    {
                        icon: Nebulization, // Spray bottle — visually represents nebulizers
                        title: translations?.asthmabronchitis_cards_title2 || 'नेब्युलाइज़ेशन थेरेपी',
                        content: translations?.asthmabronchitis_cards_content2 || 'दवा को सीधे फेफड़ों तक पहुंचाकर त्वरित राहत प्रदान करता है।',
                    },
                    {
                        icon: Oxygen, // Fire extinguisher — metaphor for oxygen/rescue support
                        title: translations?.asthmabronchitis_cards_title3 || 'ऑक्सीजन सहायता',
                        content: translations?.asthmabronchitis_cards_content3 || 'गंभीर श्वसन समस्या या कम ऑक्सीजन स्तर वाले रोगियों की सहायता करता है।',
                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.asthmabronchitis_helpline_title || '24/7 सहायता हेल्पलाइन – हम आपकी आसान सांसों के लिए हर समय उपलब्ध हैं!',
                subtitle: translations?.asthmabronchitis_helpline_subtitle || 'आपातकालीन हेल्पलाइन',
                description: translations?.asthmabronchitis_helpline_description || 'अस्थमा और ब्रोंकाइटिस की आपात स्थितियों या अचानक बढ़े लक्षणों के लिए कभी भी विशेषज्ञ देखभाल प्राप्त करें।',
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
            question: translations?.asthmabronchitis_question || 'अस्थमा और ब्रोंकाइटिस में क्या अंतर है?',
            answer: translations?.asthmabronchitis_answer || 'अस्थमा एक दीर्घकालिक स्थिति है जिसमें वायुमार्ग में सूजन और संकुचन होता है, जबकि ब्रोंकाइटिस ब्रोंकियल ट्यूब्स की सूजन है, जो आमतौर पर संक्रमण या प्रदूषकों के कारण होती है। अस्थमा लंबे समय तक रहता है, जबकि ब्रोंकाइटिस तीव्र या पुराना हो सकता है।',
        },
        {
            question: translations?.asthmabronchitis_question1 || 'अस्थमा और ब्रोंकाइटिस के सामान्य लक्षण क्या हैं?',
            answer: translations?.asthmabronchitis_answer1 || 'लक्षणों में खांसी, घरघराहट, सांस लेने में कठिनाई, सीने में जकड़न और थकान शामिल हैं। ब्रोंकाइटिस में बलगम आना और गले में खराश भी हो सकती है।',
        },
        {
            question: translations?.asthmabronchitis_question2 || 'अस्थमा और ब्रोंकाइटिस का निदान कैसे किया जाता है?',
            answer: translations?.asthmabronchitis_answer2 || 'निदान के लिए शारीरिक जांच, चिकित्सा इतिहास, फेफड़ों की कार्यक्षमता जांच (जैसे स्पाइरोमेट्री), छाती का एक्स-रे और एलर्जी परीक्षण किए जाते हैं ताकि कारण और गंभीरता का पता चल सके।',
        },
        {
            question: translations?.asthmabronchitis_question3 || 'अस्थमा और ब्रोंकाइटिस के लिए कौन-कौन से उपचार उपलब्ध हैं?',
            answer: translations?.asthmabronchitis_answer3 || 'उपचार में ब्रोंकोडाइलेटर, कॉर्टिकोस्टेरॉयड्स, नेब्युलाइज़ेशन, एंटीबायोटिक्स (ब्रोंकाइटिस के लिए), जीवनशैली में बदलाव और गंभीर मामलों में ऑक्सीजन थेरेपी शामिल हैं।',
        },
        {
            question: translations?.asthmabronchitis_question4 || 'क्या अस्थमा या ब्रोंकाइटिस पूरी तरह से ठीक हो सकते हैं?',
            answer: translations?.asthmabronchitis_answer4 || 'अस्थमा एक नियंत्रित की जाने वाली पुरानी स्थिति है। तीव्र ब्रोंकाइटिस अक्सर ठीक हो जाता है, लेकिन पुरानी ब्रोंकाइटिस को लंबे समय तक प्रबंधन की आवश्यकता होती है। समय पर इलाज से जटिलताओं से बचा जा सकता है।',
        },
        {
            question: translations?.asthmabronchitis_question5 || 'अस्थमा या ब्रोंकाइटिस के लिए आपातकालीन चिकित्सा कब लेनी चाहिए?',
            answer: translations?.asthmabronchitis_answer5 || 'अगर सांस लेने में अत्यधिक कठिनाई, होंठ या चेहरा नीला पड़ना, तेज बुखार या सीने में दर्द हो, तो तुरंत सहायता लें। हमारी 24x7 हेल्पलाइन पर तुरंत संपर्क करें।',
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
