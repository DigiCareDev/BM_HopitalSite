import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Mangement from '../components/Mangement';
import FAQSection from '../components/Faqs';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Thyroid Disorder Management/Thyroid Disorder Treatment.svg'
import AntiThyroid from '@/assets/Treatment/Thyroid Disorder Management/Anti-Thyroid Medications.svg'
import RadioactiveIodine from '@/assets/Treatment/Thyroid Disorder Management/Radioactive Iodine Therapy.svg'
import ThyroidHormone from '@/assets/Treatment/Thyroid Disorder Management/Thyroid Hormone Replacement.svg'
import ThyroidSurgery from '@/assets/Treatment/Thyroid Disorder Management/Thyroid Surgery.svg'


export default function Thyroiddisordertreatment() {
 const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Thyroid disorder treatment",
                overview: "Overview",
                subtitle: translations?.Thyroiddisordertreatment_sections_subtitle || "बीएम अस्पताल में थायरॉइड विकार का उपचार",
                description: translations?.Thyroiddisordertreatment_sections_description || "बीएम अस्पताल विशेष थायरॉइड विकार उपचार प्रदान करता है ताकि हार्मोनल संतुलन को बनाए रखा जा सके। हाइपोथायरायडिज्म, हाइपरथायरायडिज्म, ग्वॉटर और थायरॉइड नोड्यूल्स जैसे विकार आपके चयापचय, ऊर्जा स्तर, वजन और संपूर्ण स्वास्थ्य को प्रभावित कर सकते हैं। हमारे विशेषज्ञ एंडोक्रिनोलॉजिस्ट थायरॉइड फंक्शन का आकलन करने के लिए उन्नत डायग्नोस्टिक टूल्स का उपयोग करते हैं और व्यक्तिगत उपचार योजनाएं प्रदान करते हैं, जिनमें दवाएं, हार्मोन थेरेपी, जीवनशैली में बदलाव और आवश्यक होने पर सर्जरी शामिल है। थायरॉइड विकारों का समय पर निदान और प्रभावी उपचार आवश्यक है। चाहे आप थकान, वजन में बदलाव या मूड स्विंग्स का अनुभव कर रहे हों, हमारी विशेषज्ञ टीम आपके थायरॉइड स्वास्थ्य के लिए समग्र देखभाल सुनिश्चित करती है।",
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.Thyroiddisordertreatment_info_title || "थायरॉइड विकार उपचार क्या है?",
                content: translations?.Thyroiddisordertreatment_info_content || "थायरॉइड विकार उपचार उन स्थितियों की चिकित्सा देखभाल और प्रबंधन को संदर्भित करता है जो थायरॉइड ग्रंथि को प्रभावित करती हैं, जैसे हाइपोथायरायडिज्म, हाइपरथायरायडिज्म, ग्वॉटर और थायरॉइड नोड्यूल्स। थायरॉइड ग्रंथि शरीर के महत्वपूर्ण कार्यों जैसे चयापचय, हृदय गति और शरीर के तापमान को नियंत्रित करती है। जब यह खराब कार्य करता है तो थकान, वजन में उतार-चढ़ाव, मूड में बदलाव आदि हो सकते हैं। उपचार में रक्त परीक्षण (टीएसएच, टी3, टी4) और इमेजिंग द्वारा सटीक निदान शामिल है। स्थिति के आधार पर, उपचार में थायरॉइड हार्मोन रिप्लेसमेंट थेरेपी, एंटी-थायरॉइड दवाएं, रेडियोएक्टिव आयोडीन, आहार में परिवर्तन या गंभीर मामलों में थायरॉइड सर्जरी शामिल हो सकती है। बीएम अस्पताल में हमारे विशेषज्ञ एंडोक्रिनोलॉजिस्ट उन्नत तकनीक और सहानुभूतिपूर्ण समर्थन के साथ व्यक्तिगत और समग्र देखभाल प्रदान करते हैं। नियमित फॉलो-अप और निगरानी से हार्मोन स्तर को संतुलित बनाए रखने और जीवन की गुणवत्ता में सुधार सुनिश्चित होता है। क्या आप थायरॉइड के लक्षणों से जूझ रहे हैं? बीएम अस्पताल में विशेषज्ञ देखभाल प्राप्त करें।",

            },
            {
                type: "treatments",
                title: translations?.Thyroiddisordertreatment_treatments_title || "थायरॉइड विकार उपचार क्या है?",
                description: translations?.Thyroiddisordertreatment_treatments_description || "थायरॉइड विकार उपचार के लिए हमारे विशेषज्ञ-निर्देशित उपलब्ध उपचारों की खोज करें, जो संतुलन और स्वास्थ्य बहाल करने के लिए डिज़ाइन किए गए हैं:",

                cards: [
                    {
                        icon: ThyroidHormone, // Test tube — symbolizing hormone replacement therapy
                        title: translations?.Thyroiddisordertreatment_cards_title || "थायरॉइड हार्मोन रिप्लेसमेंट",
                        content: translations?.Thyroiddisordertreatment_cards_content || "लेवोथायरोक्सिन से हाइपोथायरायडिज्म का इलाज करें।",
                    },
                    {
                        icon: AntiThyroid, // Pill — fits antitranslations?.thyroid medications
                        title: translations?.Thyroiddisordertreatment_cards_title1 || "एंटी-थायरॉइड दवाएं",
                        content: translations?.Thyroiddisordertreatment_cards_content1 || "थायरॉइड हार्मोन उत्पादन को कम कर हाइपरथायरायडिज्म को नियंत्रित करता है।",

                    },
                    {
                        icon: RadioactiveIodine, // Radioactive sign — perfect for radioactive iodine therapy
                        title: translations?.Thyroiddisordertreatment_cards_title2 || "रेडियोएक्टिव आयोडीन थेरेपी",
                        content: translations?.Thyroiddisordertreatment_cards_content2 || "अत्यधिक सक्रिय थायरॉइड ऊतक को प्रभावी रूप से सिकोड़ता है।",

                    },
                    {
                        icon: ThyroidSurgery, // Scalpel — clearly represents surgery
                        title: translations?.Thyroiddisordertreatment_cards_title3 || "थायरॉइड सर्जरी",
                        content: translations?.Thyroiddisordertreatment_cards_content3 || "गंभीर मामलों में नोड्यूल्स या पूरी ग्रंथि को हटाना।",

                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.Thyroiddisordertreatment_helpline_title || "24/7 हेल्पलाइन सहायता के लिए",
                subtitle: translations?.Thyroiddisordertreatment_helpline_subtitle || "आपातकालीन हेल्पलाइन",
                description: translations?.Thyroiddisordertreatment_helpline_description || "थायरॉइड विकार उपचार के लिए विशेषज्ञ सहायता चाहिए? हमारी हेल्पलाइन 24/7 उपलब्ध है आपकी मदद के लिए।",

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
            question: translations?.Thyroiddisordertreatment_question || 'थायरॉइड विकार के सामान्य लक्षण क्या हैं?',
            answer: translations?.Thyroiddisordertreatment_answer || 'थायरॉइड विकार के लक्षणों में थकान, वजन में बदलाव, मूड स्विंग्स, बालों का झड़ना, अनियमित हृदयगति और तापमान के प्रति संवेदनशीलता शामिल हो सकते हैं। शीघ्र निदान जटिलताओं को रोकने में मदद करता है।',

        },
        {
            question: translations?.Thyroiddisordertreatment_question1 || 'बीएम अस्पताल में कौन-कौन से थायरॉइड विकारों का इलाज होता है?',
            answer: translations?.Thyroiddisordertreatment_answer1 || 'हम हाइपोथायरायडिज्म, हाइपरथायरायडिज्म, ग्वॉटर, थायरॉइड नोड्यूल्स और थायरॉइड कैंसर का इलाज दवाओं, हार्मोन थेरेपी और आवश्यकता पड़ने पर सर्जरी से करते हैं।',

        },
        {
            question: translations?.Thyroiddisordertreatment_question2 || 'थायरॉइड विकार का निदान कैसे किया जाता है?',
            answer: translations?.Thyroiddisordertreatment_answer2 || 'निदान में शारीरिक परीक्षण, टीएसएच रक्त परीक्षण, थायरॉइड हार्मोन स्तर की जांच, अल्ट्रासाउंड और लक्षणों के अनुसार रेडियोएक्टिव आयोडीन अपटेक स्कैन शामिल हैं।',

        },
        {
            question: translations?.Thyroiddisordertreatment_question3 || 'हाइपोथायरायडिज्म का इलाज क्या है?',
            answer: translations?.Thyroiddisordertreatment_answer3 || 'हाइपोथायरायडिज्म का आमतौर पर लेवोथायरोक्सिन नामक सिंथेटिक थायरॉइड हार्मोन से इलाज किया जाता है, जो सामान्य हार्मोन स्तर को बहाल करता है और लक्षणों को कम करता है।',

        },
        {
            question: translations?.Thyroiddisordertreatment_question4 || 'क्या थायरॉइड विकारों का स्थायी इलाज संभव है?',
            answer: translations?.Thyroiddisordertreatment_answer4 || 'कुछ थायरॉइड विकारों को उचित इलाज से नियंत्रित या ठीक किया जा सकता है, लेकिन हाइपोथायरायडिज्म जैसी स्थितियों के लिए आमतौर पर जीवनभर दवा की आवश्यकता होती है।',

        },
        {
            question: translations?.Thyroiddisordertreatment_question5 || 'क्या थायरॉइड के इलाज के लिए सर्जरी आवश्यक है?',
            answer: translations?.Thyroiddisordertreatment_answer5 || 'बड़े ग्वॉटर, थायरॉइड कैंसर या ऐसे नोड्यूल्स जो सांस लेने या निगलने में बाधा डालते हैं, के लिए सर्जरी की सिफारिश की जाती है। हमारे विशेषज्ञ सर्जन सुरक्षित सर्जरी और ऑपरेशन के बाद की देखभाल सुनिश्चित करते हैं।',

        }
    ];

    return (
        <div className='bg-white'>
            <BackToTop />
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations}/>
            <Mangement contentData={contentData} />
            <FAQSection faqItems={faqItems} translations={translations} />
            <Footer translations={translations} />
        </div>
    )
}
