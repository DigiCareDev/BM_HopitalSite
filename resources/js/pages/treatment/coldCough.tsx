import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Mangement from '../components/Mangement';
import FAQSection from '../components/Faqs';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Cold, Cough, and Flu Treatment/Cold, Cough, Flu Treatment at BM Hospital.svg'
import Antiviral from '@/assets/Treatment/Cold, Cough, and Flu Treatment/Antiviral Medications.svg'
import CoughSuppressants from '@/assets/Treatment/Cold, Cough, and Flu Treatment/Cough Suppressants & Expectorants.svg'
import Decongestants from '@/assets/Treatment/Cold, Cough, and Flu Treatment/Decongestants & Steam Therapy.svg'
import PainRelievers from '@/assets/Treatment/Cold, Cough, and Flu Treatment/Fever & Pain Relievers.svg'


export default function coldCough() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Cold, Cough, Flu Treatment ",
                overview: "Overview",
                subtitle:  translations?.coldCough_sections_subtitle || 'बीएम हॉस्पिटल में सर्दी, खांसी, फ्लू का उपचार – त्वरित राहत, संपूर्ण देखभाल',
                description: translations?.coldCough_sections_description || 'मौसमी सांस संबंधी संक्रमण आपके जीवन की गति को न रोकें। बीएम हॉस्पिटल की विशेषज्ञ टीम व्यापक सर्दी, खांसी, फ्लू उपचार प्रदान करती है जो लक्षणों को तेजी से कम करता है और जटिलताओं को रोकता है। हमारे चिकित्सक सटीक निदान के लिए गहन मूल्यांकन और रैपिड टेस्ट करते हैं ताकि वायरल फ्लू और बैक्टीरियल संक्रमणों में अंतर किया जा सके। व्यक्तिगत योजना में एंटीवायरल, आवश्यक होने पर एंटीबायोटिक्स, डीकोन्जेस्टेंट्स, भाप लेने की सलाह, हाइड्रेशन थेरेपी और पोषण संबंधी मार्गदर्शन शामिल हो सकते हैं। हम उच्च जोखिम वाले मरीजों के लिए फ्लू वैक्सीन और फॉलोअप देखभाल भी प्रदान करते हैं। 24/7 आउटपेशेंट और आपातकालीन सेवाओं के साथ, बीएम हॉस्पिटल समय पर निदान और लक्षण नियंत्रण सुनिश्चित करता है।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.coldCough_info_title || 'सर्दी, खांसी, फ्लू का उपचार क्या है?',
                content: translations?.coldCough_info_content || 'सर्दी, खांसी, फ्लू का उपचार उन सामान्य वायरल संक्रमणों के निदान और प्रबंधन पर केंद्रित है जो श्वसन तंत्र को प्रभावित करते हैं। ये संक्रमण आमतौर पर राइनोवायरस, इनफ्लुएंजा वायरस या मौसमी वायरस के कारण होते हैं और गले में खराश, बहती नाक, छींक, बुखार, बदन दर्द, थकान और लगातार खांसी जैसे लक्षण उत्पन्न करते हैं। बीएम हॉस्पिटल में, हमारा लक्ष्य त्वरित राहत देना, जटिलताओं को रोकना और तेज़ रिकवरी सुनिश्चित करना है। डॉक्टर आपकी जांच कर आवश्यक परीक्षण करते हैं और आपकी स्थिति के अनुसार उपचार योजना देते हैं जिसमें एंटीवायरल दवाएं, बुखार कम करने की दवाएं, खांसी की दवाएं, डीकोन्जेस्टेंट्स और रोग प्रतिरोधक क्षमता बढ़ाने वाले सपोर्ट शामिल होते हैं। हम पर्याप्त तरल सेवन, आराम और लक्षणों की निगरानी पर ज़ोर देते हैं। बच्चों, बुजुर्गों और कमजोर प्रतिरक्षा वाले मरीजों के लिए विशेष देखभाल दी जाती है। हमारी समर्पित टीम हल्के से गंभीर फ्लू जैसी बीमारियों के लिए 24x7 उपलब्ध है।',
            },
            {
                type: "treatments",
                title: translations?.coldCough_treatments_title || 'उपलब्ध उपचार',
                description: translations?.coldCough_treatments_description || 'सर्दी, खांसी, फ्लू उपचार लक्षणों को जल्दी से राहत देने और लक्षित चिकित्सा देखभाल व घरेलू उपायों के माध्यम से तेज़ रिकवरी में मदद करने के लिए बनाए गए हैं।',
                cards: [
                    {
                        icon: Antiviral,
                        title: translations?.coldCough_cards_title || 'एंटीवायरल दवाएं',
                        content: translations?.coldCough_cards_content || 'फ्लू की अवधि और तीव्रता को कम करने के लिए शुरुआती चरणों में दी जाती हैं।',
                    },
                    {
                        icon: CoughSuppressants,
                        title: translations?.coldCough_cards_title1 || 'खांसी की दवाएं और एक्सपेक्टोरेंट्स',
                        content: translations?.coldCough_cards_content1 || 'सूखी या बलगम वाली खांसी को प्रभावी रूप से नियंत्रित करते हैं।',
                    },
                    {
                        icon: Decongestants,
                        title: translations?.coldCough_cards_title2 || 'डीकोन्जेस्टेंट्स और भाप चिकित्सा',
                        content: translations?.coldCough_cards_content2 || 'नाक की रुकावट दूर करते हैं और सांस लेने में आसानी लाते हैं।',
                    },
                    {
                        icon: PainRelievers,
                        title: translations?.coldCough_cards_title3 || 'बुखार और दर्द निवारक दवाएं',
                        content: translations?.coldCough_cards_content3 || 'तेज बुखार, बदन दर्द और असुविधा को कम करती हैं।',
                    }
                ]
            },
            {
                type: "helpline",
                title: translations?.coldCough_helpline_title || '24/7 सहायता हेल्पलाइन – हम हमेशा आपके साथ हैं!',
                subtitle: translations?.coldCough_helpline_subtitle || 'आपातकालीन हेल्पलाइन',
                description: translations?.coldCough_helpline_description || 'सर्दी, खांसी या फ्लू के लक्षण महसूस हो रहे हैं? किसी भी समय विशेषज्ञ चिकित्सा सहायता प्राप्त करें।',

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
            question: translations?.coldCough_question || 'थायरॉयड विकारों के सामान्य लक्षण क्या हैं?',
            answer: translations?.coldCough_answer || 'थायरॉयड विकारों के लक्षण अलग-अलग हो सकते हैं, लेकिन इनमें थकान, वजन में बदलाव, मूड स्विंग्स, बालों का झड़ना, अनियमित दिल की धड़कन और तापमान के प्रति संवेदनशीलता शामिल हो सकते हैं। प्रारंभिक निदान जटिलताओं को रोकने में मदद करता है।',
        },
        {
            question: translations?.coldCough_question1 || 'बीएम अस्पताल में किन प्रकार के थायरॉयड विकारों का इलाज किया जाता है?',
            answer: translations?.coldCough_answer1 || 'हम हाइपोथायरायडिज्म, हाइपरथायरायडिज्म, गॉइटर, थायरॉयड नोड्यूल्स और थायरॉयड कैंसर का इलाज दवाओं, हार्मोन थेरेपी और आवश्यक होने पर सर्जरी द्वारा करते हैं।',
        },
        {
            question: translations?.coldCough_question2 || 'थायरॉयड विकार का निदान कैसे किया जाता है?',
            answer: translations?.coldCough_answer2 || 'निदान में शारीरिक जांच, टीएसएच ब्लड टेस्ट, थायरॉयड हार्मोन स्तर की जांच, अल्ट्रासाउंड और लक्षणों के आधार पर रेडियोएक्टिव आयोडीन अपटेक स्कैन शामिल होता है।',
        },
        {
            question: translations?.coldCough_question3 || 'हाइपोथायरायडिज्म का इलाज क्या है?',
            answer: translations?.coldCough_answer3 || 'हाइपोथायरायडिज्म का आमतौर पर इलाज लेवोथायरॉक्सिन नामक सिंथेटिक थायरॉयड हार्मोन से किया जाता है, जो हार्मोन स्तर को सामान्य करता है और लक्षणों को कम करता है।',
        },
        {
            question: translations?.coldCough_question4 || 'क्या थायरॉयड विकारों का स्थायी इलाज संभव है?',
            answer: translations?.coldCough_answer4 || 'कुछ थायरॉयड विकारों का उचित उपचार से प्रबंधन या समाधान किया जा सकता है, लेकिन हाइपोथायरायडिज्म जैसी स्थितियों के लिए आमतौर पर जीवनभर दवा लेनी होती है।',
        },
        {
            question: translations?.coldCough_question5 || 'क्या थायरॉयड के इलाज के लिए सर्जरी की आवश्यकता होती है?',
            answer: translations?.coldCough_answer5 || 'बड़े गॉइटर, थायरॉयड कैंसर, या सांस लेने या निगलने में समस्या उत्पन्न करने वाले नोड्यूल्स के लिए सर्जरी की सिफारिश की जाती है। हमारे विशेषज्ञ सर्जन सुरक्षित प्रक्रिया और पोस्ट-ऑपरेटिव देखभाल सुनिश्चित करते हैं।',
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
