import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Mangement from '../components/Mangement';
import FAQSection from '../components/Faqs';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Gastrointestinal Treatment (Acidity, Constipation, Diarrhea)/Gastrointestinal Treatment.svg'
import AntacidTherapy from '@/assets/Treatment/Gastrointestinal Treatment (Acidity, Constipation, Diarrhea)/Antacid Therapy.svg'
import Immunotherapy from '@/assets/Dietary Modifications.svg'
import LaxativeManagement from '@/assets/Laxative Management.svg'
import ORS from '@/assets/Treatment/Gastrointestinal Treatment (Acidity, Constipation, Diarrhea)/Oral Rehydration Solution (ORS)_1.svg'

export default function Gastrointestinaltreatment() {
     const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Gastrointestinal Treatment (Acidity, Constipation, Diarrhea) ",
                overview: "Overview",
                subtitle:  translations?.Gastrointestinaltreatment_sections_subtitle || 'गैस्ट्रोइंटेस्टाइनल उपचार (एसिडिटी, कब्ज, डायरिया) – त्वरित राहत, विशेषज्ञ देखभाल',
                description: translations?.Gastrointestinaltreatment_sections_description || 'बीएम अस्पताल में गैस्ट्रोइंटेस्टाइनल उपचार (एसिडिटी, कब्ज, डायरिया) के लिए रोगी-केंद्रित विशेष सेवाएं उपलब्ध हैं। हमारे अनुभवी गैस्ट्रोएंटेरोलॉजिस्ट नवीनतम तकनीकों से पाचन संबंधी विकारों का सटीक निदान और इलाज करते हैं ताकि शीघ्र और दीर्घकालिक राहत सुनिश्चित की जा सके। चाहे जलन हो, अनियमित मल त्याग या अचानक डायरिया – हम व्यक्तिगत मूल्यांकन और इलाज प्रदान करते हैं। हम तीव्र और पुरानी दोनों पाचन समस्याओं का दवाओं, आहार सलाह और जीवनशैली में बदलाव के माध्यम से इलाज करते हैं। हमारा उद्देश्य आपके पाचन स्वास्थ्य को पुनर्स्थापित करना और संपूर्ण भलाई को बढ़ावा देना है। सभी पाचन समस्याओं के लिए सुरक्षित, प्रभावी और दयालु देखभाल के लिए बीएम अस्पताल पर भरोसा करें।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title:  translations?.Gastrointestinaltreatment_info_title || 'गैस्ट्रोइंटेस्टाइनल उपचार (एसिडिटी, कब्ज और डायरिया) क्या है?',
                content: translations?.Gastrointestinaltreatment_info_content || 'गैस्ट्रोइंटेस्टाइनल उपचार (एसिडिटी, कब्ज, डायरिया) का अर्थ है आम पाचन संबंधी विकारों की चिकित्सा देखभाल और प्रबंधन, जो दैनिक जीवन को प्रभावित करते हैं। बीएम अस्पताल में हम एसिडिटी (अत्यधिक अम्लता से होने वाली जलन), कब्ज (कठिन या अनियमित मल त्याग) और डायरिया (बार-बार ढीला मल) के लिए विशेषज्ञ देखभाल प्रदान करते हैं। इलाज की शुरुआत सटीक निदान से होती है जिसमें चिकित्सीय मूल्यांकन, आहार जांच और यदि आवश्यक हो तो प्रयोगशाला या इमेजिंग परीक्षण शामिल होते हैं। इलाज में एंटासिड, रेचक, या एंटी-डायरियल जैसी दवाएं, जल उपचार और व्यक्तिगत आहार योजना शामिल होती है। हमारा ध्यान लक्षणों को कम करने, मूल कारणों का इलाज करने और भविष्य में पुनरावृत्ति को रोकने पर होता है।',
            },
            {
                type: "treatments",
                title:  translations?.Gastrointestinaltreatment_treatments_title || 'उपलब्ध उपचार – पाचन असुविधा के लिए त्वरित राहत',
                description:  translations?.Gastrointestinaltreatment_treatments_description || 'त्वरित राहत और आराम के लिए बीएम अस्पताल में विशेषज्ञों द्वारा सुझाए गए प्रभावी गैस्ट्रोइंटेस्टाइनल उपचार का अनुभव करें। हम आपकी स्थिति के अनुसार प्रभावी थेरेपी प्रदान करते हैं:',
                cards: [
                    {
                        icon: AntacidTherapy, // Pouring liquid — fits antacid, soothing effect
                        title:  translations?.Gastrointestinaltreatment_cards_title || 'एंटासिड थेरेपी',
                        content:  translations?.Gastrointestinaltreatment_cards_content || 'अम्लता और सीने में जलन से राहत के लिए अतिरिक्त अम्लता को निष्क्रिय करता है।',
                    },
                    {
                        icon: LaxativeManagement, // Toilet — clearly represents relief from constipation
                        title:  translations?.Gastrointestinaltreatment_cards_title1 || 'रेचक प्रबंधन',
                        content:  translations?.Gastrointestinaltreatment_cards_content1 || 'सुरक्षित रूप से कब्ज को दूर करने के लिए मल त्याग को प्रोत्साहित करता है।',
                    },
                    {
                        icon: ORS, // Drink cup — matches ORS, fluid intake
                        title:  translations?.Gastrointestinaltreatment_cards_title2 || 'ओरल रिहाइड्रेशन सॉल्यूशन (ORS)',
                        content:  translations?.Gastrointestinaltreatment_cards_content2 || 'डायरिया के दौरान शरीर में तरल और इलेक्ट्रोलाइट्स की पूर्ति करता है।',
                    },
                    {
                        icon: Immunotherapy, // Salad bowl — ideal for personalized dietary plans
                        title:  translations?.Gastrointestinaltreatment_cards_title3 || 'आहार संशोधन',
                        content:  translations?.Gastrointestinaltreatment_cards_content3 || 'बार-बार होने से रोकने और आंत स्वास्थ्य के लिए व्यक्तिगत पोषण योजनाएं।',
                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.Gastrointestinaltreatment_helpline_title || 'गैस्ट्रोइंटेस्टाइनल राहत के लिए 24/7 हेल्पलाइन',
                subtitle:  translations?.Gastrointestinaltreatment_helpline_subtitle || 'आपातकालीन हेल्पलाइन',
                description:  translations?.Gastrointestinaltreatment_helpline_description || 'एसिडिटी, कब्ज या डायरिया से परेशान हैं? हमारी गैस्ट्रो केयर टीम से दिन-रात विशेषज्ञ सहायता प्राप्त करें।',
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
            question: translations?.Gastrointestinaltreatment_question || 'बार-बार एसिडिटी और सीने में जलन का कारण क्या है?',
            answer: translations?.Gastrointestinaltreatment_answer ||  'एसिडिटी और सीने में जलन आमतौर पर अधिक अम्लता, खराब आहार, तनाव, धूम्रपान और अनियमित भोजन के कारण होती है। गैस्ट्रो इसोफेजियल रिफ्लक्स (GERD) भी एक कारण हो सकता है जिसके लिए चिकित्सा देखभाल आवश्यक होती है।',
        },
        {
            question: translations?.Gastrointestinaltreatment_question1 || 'कब कब्ज के लिए डॉक्टर को दिखाना चाहिए?',
            answer: translations?.Gastrointestinaltreatment_answer1 || 'यदि कब्ज 3 दिनों से अधिक समय तक बनी रहे, दर्द हो, मल में खून हो, या ओवर-द-काउंटर दवाएं काम न करें तो डॉक्टर से संपर्क करें। लंबे समय से बनी स्थिति के लिए विशेषज्ञ देखभाल की आवश्यकता होती है।',
        },
        {
            question: translations?.Gastrointestinaltreatment_question2 ||  'डायरिया के लिए सबसे अच्छा इलाज क्या है?',
            answer: translations?.Gastrointestinaltreatment_answer2 || 'इलाज कारण पर निर्भर करता है, लेकिन इसमें आमतौर पर ओरल रिहाइड्रेशन थैरेपी, प्रोबायोटिक्स, आहार में बदलाव और लक्षणों को नियंत्रित करने एवं निर्जलीकरण को रोकने के लिए दवाएं शामिल होती हैं।',
        },
        {
            question: translations?.Gastrointestinaltreatment_question3 || 'क्या आहार में बदलाव से पाचन समस्याएं ठीक हो सकती हैं?',
            answer: translations?.Gastrointestinaltreatment_answer3 ||  'हां, फाइबर युक्त संतुलित आहार, पर्याप्त पानी पीना और मसालेदार या तैलीय भोजन से बचना पाचन स्वास्थ्य को बेहतर बनाने और दोबारा होने से रोकने में मदद करता है।',
        },
        {
            question: translations?.Gastrointestinaltreatment_question4 || 'क्या एसिडिटी, कब्ज और डायरिया आपस में संबंधित हैं?',
            answer: translations?.Gastrointestinaltreatment_answer4 || 'हां, ये आपस में संबंधित हो सकते हैं। खराब आंत स्वास्थ्य, संक्रमण, दवाएं या पाचन तंत्र विकार जैसे IBS इन सभी के लक्षण पैदा कर सकते हैं जिनके लिए समग्र उपचार आवश्यक होता है।',
        },
        {
            question: translations?.Gastrointestinaltreatment_question5 || 'क्या पाचन समस्याओं के लिए स्वयं दवा लेना सुरक्षित है?',
            answer: translations?.Gastrointestinaltreatment_answer5 || 'कभी-कभार आराम देने वाली दवाएं ठीक हैं, लेकिन बार-बार स्वयं दवा लेना गंभीर समस्याओं को छिपा सकता है। लगातार या बार-बार होने वाले लक्षणों के लिए हमेशा डॉक्टर से सलाह लें।',
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
