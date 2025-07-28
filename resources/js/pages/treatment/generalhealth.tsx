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
import Images from '@/assets/Treatment/General Health Check-ups/General Health Check-ups.svg'
import BloodTests from '@/assets/Treatment/General Health Check-ups/Blood Tests.svg'
import ImagingScans from '@/assets/Treatment/General Health Check-ups/Imaging Scans.svg'
import PhysicalExamination from '@/assets/Treatment/General Health Check-ups/Physical Examination.svg'
import SpecialtyScreenings from '@/assets/Treatment/General Health Check-ups/Specialty Screenings.svg'

export default function Generalhealth() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "General Health Checkups Treatment ",
                overview: "Overview",
                subtitle:  translations?.Generalhealth_sections_subtitle || 'स्वस्थ भविष्य के लिए संपूर्ण जनरल हेल्थ चेकअप उपचार',
                description: translations?.Generalhealth_sections_description || 'बीएम हॉस्पिटल में जनरल हेल्थ चेकअप उपचार नियमित मूल्यांकन के माध्यम से संभावित स्वास्थ्य समस्याओं का प्रारंभिक पता लगाने और रोकथाम सुनिश्चित करता है। ये चेकअप आपकी समग्र सेहत का आकलन करते हैं और डायबिटीज, हाइपरटेंशन, हृदय रोग, लिवर फंक्शन आदि जैसी बीमारियों की जांच करते हैं। हम पुरुषों, महिलाओं और वरिष्ठ नागरिकों के लिए उम्र, जीवनशैली और चिकित्सा इतिहास के आधार पर कस्टम पैकेज प्रदान करते हैं। हमारी अनुभवी मेडिकल टीम सटीक परिणामों के लिए उन्नत डायग्नोस्टिक्स और लैब परीक्षणों का उपयोग करती है। नियमित हेल्थ चेकअप से आप अपने स्वास्थ्य की जिम्मेदारी ले सकते हैं और समय पर चिकित्सा सलाह प्राप्त कर सकते हैं।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title:  translations?.Generalhealth_info_title || 'जनरल हेल्थ चेकअप उपचार क्या है?',
                content: translations?.Generalhealth_info_content || 'जनरल हेल्थ चेकअप उपचार एक निवारक स्वास्थ्य देखभाल पद्धति है, जिसमें आपकी समग्र सेहत की निगरानी के लिए नियमित जांच और मूल्यांकन शामिल हैं। बीएम हॉस्पिटल में यह उपचार डायबिटीज, हाइपरटेंशन, कोलेस्ट्रॉल असंतुलन, लिवर विकार और हृदय रोग जैसी बीमारियों के शुरुआती संकेतों का पता लगाने के लिए डिजाइन किया गया है। नियमित जांच से महत्वपूर्ण स्वास्थ्य संकेतकों की निगरानी की जाती है जिससे समय पर इलाज संभव हो सके। हमारे संपूर्ण पैकेजों में ब्लड टेस्ट, यूरिन एनालिसिस, ईसीजी, इमेजिंग स्कैन और शारीरिक परीक्षण शामिल हैं — जो विशेषज्ञ पर्यवेक्षण में किए जाते हैं। ये जांचें उम्र, लिंग, जीवनशैली और चिकित्सा इतिहास के अनुसार व्यक्तिगत रूप से तैयार की जाती हैं। जनरल हेल्थ चेकअप उपचार अपनाकर व्यक्ति एक स्वस्थ जीवनशैली बनाए रख सकता है, चिकित्सा जटिलताओं से बच सकता है और दीर्घकालिक स्वास्थ्य खर्चों को कम कर सकता है। रोकथाम इलाज से बेहतर है — और नियमित चेकअप एक स्वस्थ जीवन की दिशा में पहला कदम हैं।',
            },
            {
                type: "treatments",
                title:  translations?.Generalhealth_treatments_title || 'जनरल हेल्थ चेकअप उपचार के लिए उपलब्ध उपचार',
                description: translations?.Generalhealth_treatments_description || 'स्वास्थ्य जोखिमों से समय रहते निपटें और व्यक्तिगत देखभाल पाएं! हमारे उपलब्ध उपचारों की जानकारी लें, जिनमें शामिल हैं:',
                cards: [
                    {
                        icon: BloodTests, // Test tube – represents lab testing (blood, glucose, etc.)
                        title:  translations?.Generalhealth_cards_title || 'ब्लड टेस्ट',
                        content:  translations?.Generalhealth_cards_content || 'ग्लूकोज, कोलेस्ट्रॉल, लिवर और किडनी फंक्शन का मूल्यांकन करें।',
                    },
                    {
                        icon: ImagingScans, // Monitor – symbolizes imaging/scanning equipment
                        title:  translations?.Generalhealth_cards_title1 || 'इमेजिंग स्कैन',
                        content:  translations?.Generalhealth_cards_content1 || 'एक्स-रे, अल्ट्रासाउंड और ईसीजी जैसी जांचें आंतरिक अंगों की जांच के लिए।',
                    },
                    {
                        icon: PhysicalExamination, // Stethoscope – perfect for physical checkups
                        title:  translations?.Generalhealth_cards_title2 || 'शारीरिक परीक्षण',
                        content:  translations?.Generalhealth_cards_content2 || 'डॉक्टर द्वारा महत्वपूर्ण संकेत, बीएमआई और समग्र स्वास्थ्य मूल्यांकन।',
                    },
                    {
                        icon: SpecialtyScreenings, // Microscope – used for specialityscreenings and detailed evaluations
                        title:   translations?.Generalhealth_cards_title3 || 'विशेष जांचें',
                        content:  translations?.Generalhealth_cards_content3 || 'हृदय, डायबिटीज, थायरॉयड और कैंसर जोखिम की जांच समय रहते पहचान के लिए।',
                    }
                ]

            },
            {
                type: "helpline",
                title:  translations?.Generalhealth_helpline_title || '24/7 सहायता हेल्पलाइन – जनरल हेल्थ चेकअप उपचार के लिए',
                subtitle:  translations?.Generalhealth_helpline_subtitle || 'आपातकालीन हेल्पलाइन',
                description:  translations?.Generalhealth_helpline_description || 'हम हमेशा आपकी सेवा में हैं! किसी भी जानकारी या बुकिंग के लिए हमारी आपातकालीन हेल्पलाइन पर कॉल करें।',
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
            question: translations?.Generalhealth_question || 'थायरॉयड विकारों के सामान्य लक्षण क्या हैं?',
            answer: translations?.Generalhealth_answer || 'थायरॉयड विकारों के लक्षण अलग-अलग हो सकते हैं, लेकिन इनमें थकान, वजन में बदलाव, मूड स्विंग्स, बालों का झड़ना, अनियमित दिल की धड़कन और तापमान के प्रति संवेदनशीलता शामिल हो सकते हैं। प्रारंभिक निदान जटिलताओं को रोकने में मदद करता है।',
        },
        {
            question: translations?.Generalhealth_question1 || 'बीएम अस्पताल में किन प्रकार के थायरॉयड विकारों का इलाज किया जाता है?',
            answer: translations?.Generalhealth_answer1 || 'हम हाइपोथायरायडिज्म, हाइपरथायरायडिज्म, गॉइटर, थायरॉयड नोड्यूल्स और थायरॉयड कैंसर का इलाज दवाओं, हार्मोन थेरेपी और आवश्यक होने पर सर्जरी द्वारा करते हैं।',
        },
        {
            question: translations?.Generalhealth_question2 || 'थायरॉयड विकार का निदान कैसे किया जाता है?',
            answer: translations?.Generalhealth_answer2 || 'निदान में शारीरिक जांच, टीएसएच ब्लड टेस्ट, थायरॉयड हार्मोन स्तर की जांच, अल्ट्रासाउंड और लक्षणों के आधार पर रेडियोएक्टिव आयोडीन अपटेक स्कैन शामिल होता है।',
        },
        {
            question: translations?.Generalhealth_question3 || 'हाइपोथायरायडिज्म का इलाज क्या है?',
            answer: translations?.Generalhealth_answer3 || 'हाइपोथायरायडिज्म का आमतौर पर इलाज लेवोथायरॉक्सिन नामक सिंथेटिक थायरॉयड हार्मोन से किया जाता है, जो हार्मोन स्तर को सामान्य करता है और लक्षणों को कम करता है।',
        },
        {
            question: translations?.Generalhealth_question4 || 'क्या थायरॉयड विकारों का स्थायी इलाज संभव है?',
            answer: translations?.Generalhealth_answer4 || 'कुछ थायरॉयड विकारों का उचित उपचार से प्रबंधन या समाधान किया जा सकता है, लेकिन हाइपोथायरायडिज्म जैसी स्थितियों के लिए आमतौर पर जीवनभर दवा लेनी होती है।',
        },
        {
            question: translations?.Generalhealth_question5 || 'क्या थायरॉयड के इलाज के लिए सर्जरी की आवश्यकता होती है?',
            answer: translations?.Generalhealth_answer5 || 'बड़े गॉइटर, थायरॉयड कैंसर, या सांस लेने या निगलने में समस्या उत्पन्न करने वाले नोड्यूल्स के लिए सर्जरी की सिफारिश की जाती है। हमारे विशेषज्ञ सर्जन सुरक्षित प्रक्रिया और पोस्ट-ऑपरेटिव देखभाल सुनिश्चित करते हैं।',
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
