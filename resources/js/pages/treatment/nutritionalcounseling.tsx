import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Mangement from '../components/Mangement';
import FAQSection from '../components/Faqs';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Nutritional Counseling/Nutritional Counseling.svg'
import CardiacNutrition from '@/assets/Treatment/Nutritional Counseling/Cardiac Nutrition.svg'
import DiabetesDiet from '@/assets/Treatment/Nutritional Counseling/Diabetes Diet Planning.svg'
import TherapeuticDiets from '@/assets/Treatment/Nutritional Counseling/Therapeutic Diets.svg'
import WeightManagement from '@/assets/Treatment/Nutritional Counseling/Weight Management.svg'


export default function Nutritionalcounseling() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Nutritional counseling",
                overview: "Overview",
                subtitle: translations?.Nutritionalcounseling_sections_subtitle || "Personalized Nutritional Counseling for Better Health and Wellness ",
                description: translations?.Nutritionalcounseling_sections_description || "At BM Hospital, our Nutritional Counseling service is designed to help individuals achieve optimal health through personalized dietary guidance. Whether you're managing a chronic condition, recovering from surgery, or simply aiming for a healthier lifestyle, our expert dietitians craft customized meal plans tailored to your medical history, nutritional needs, and wellness goals. From weight management to diabetes care, heart health, and pediatric nutrition, we cover all essential areas with compassion and scientific precision.  We focus on practical, sustainable habits that fit your lifestyle—not crash diets. Every consultation includes education on balanced eating, food-label reading, and behavior modification strategies. Take control of your health through professional Nutritional Counseling today. ",
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.Nutritionalcounseling_info_title || "What Is Nutritional Counseling?  ",
                content: translations?.Nutritionalcounseling_info_content || "Nutritional Counseling is a science-based, personalized approach to improving health through food and lifestyle choices. At BM Hospital, our expert dietitians assess your medical history, eating habits, and health goals to create customized nutrition plans. Whether you’re managing diabetes, hypertension, obesity, or recovering from illness, Nutritional Counseling provides effective strategies for optimal well-being. This service goes beyond just meal plans—it includes education on portion control, label reading, mindful eating, and behavior change. Nutritional Counseling supports better immunity, digestion, energy levels, and overall health through a sustainable and practical approach. Whether you're seeking preventive care or chronic condition support, our Nutritional Counseling empowers you with the tools to make healthier choices every day. ",

            },
            {
                type: "treatments",
                title: translations?.Nutritionalcounseling_treatments_title || "Available Treatments in Nutritional Counseling ",
                description: translations?.Nutritionalcounseling_treatments_description || "Boost your well-being with expert-guided Available Treatments designed for your body’s needs. Personalized care that fuels health and balances life through:",
                cards: [
                    {
                        icon: WeightManagement, // Balance scale — symbolizes weight management
                        title: translations?.Nutritionalcounseling_cards_title || "Weight Management",
                        content: translations?.Nutritionalcounseling_cards_content || "Tailored meal plans for weight loss or gain.",
                    },
                    {
                        icon: DiabetesDiet, // Candy — representing diabetes and sugar control
                        title: translations?.Nutritionalcounseling_cards_title1 || "Diabetes Diet Planning",
                        content: translations?.Nutritionalcounseling_cards_content1 || "Glycemic-focused nutrition for blood sugar control.",
                    },
                    {
                        icon: CardiacNutrition, // Heart — perfect for cardiac nutrition
                        title: translations?.Nutritionalcounseling_cards_title2 || "Cardiac Nutrition",
                        content: translations?.Nutritionalcounseling_cards_content2 || "Heart-healthy diets reducing cholesterol and hypertension.",
                    },
                    {
                        icon: TherapeuticDiets, // Salad bowl — general therapeutic diets
                        title: translations?.Nutritionalcounseling_cards_title3 || "Therapeutic Diets",
                        content: translations?.Nutritionalcounseling_cards_content3 || "Condition-based plans for thyroid, PCOS, GI issues, and more.",
                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.Nutritionalcounseling_helpline_title || "24/7 Help Line for Assistance ",
                subtitle: translations?.Nutritionalcounseling_helpline_subtitle || "Emergency Help Line",
                description: translations?.Nutritionalcounseling_helpline_description || "Get expert Nutritional Counseling anytime! For diet plans, weight advice, or health queries, connect now. ",
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
            question: translations?.Nutritionalcounseling_question || 'न्यूट्रिशनल काउंसलिंग क्या है?',
            answer: translations?.Nutritionalcounseling_answer || 'न्यूट्रिशनल काउंसलिंग एक व्यक्तिगत सेवा है जो प्रमाणित विशेषज्ञों द्वारा अनुकूलित आहार और पोषण योजनाओं के माध्यम से स्वास्थ्य सुधारने में मदद करती है।',
        },
        {
            question: translations?.Nutritionalcounseling_question1 || 'किन लोगों को न्यूट्रिशनल काउंसलिंग लेनी चाहिए?',
            answer: translations?.Nutritionalcounseling_answer1 || 'जो लोग वजन नियंत्रण, मधुमेह या हाई ब्लड प्रेशर जैसी पुरानी बीमारियों, खान-पान संबंधी विकारों से जूझ रहे हैं या स्वस्थ जीवनशैली अपनाना चाहते हैं, उन्हें न्यूट्रिशनल काउंसलिंग लेनी चाहिए।',

        },
        {
            question: translations?.Nutritionalcounseling_question2 || "पहले न्यूट्रिशनल काउंसलिंग सेशन में क्या अपेक्षा रखें?",
            answer: translations?.Nutritionalcounseling_answer2 || 'पहला सेशन स्वास्थ्य मूल्यांकन, खान-पान की आदतों, चिकित्सा इतिहास की समीक्षा और आपके लक्ष्यों के आधार पर व्यक्तिगत पोषण सिफारिशों पर केंद्रित होता है।',

        },
        {
            question: translations?.Nutritionalcounseling_question3 || 'क्या न्यूट्रिशनल काउंसलिंग वजन घटाने में प्रभावी है?',
            answer: translations?.Nutritionalcounseling_answer3 || 'हां, एक प्रमाणित न्यूट्रिशनिस्ट द्वारा तैयार की गई योजनाएं स्वस्थ और टिकाऊ वजन घटाने में मदद करती हैं और भविष्य की स्वास्थ्य समस्याओं से बचाव करती हैं।',

        },
        {
            question: translations?.Nutritionalcounseling_question4 || 'क्या न्यूट्रिशनल काउंसलिंग पुरानी बीमारियों के नियंत्रण में मदद करती है?',
            answer: translations?.Nutritionalcounseling_answer4 || 'बिल्कुल। मधुमेह, उच्च कोलेस्ट्रॉल, ब्लड प्रेशर, पीसीओएस और पाचन विकारों के इलाज में चिकित्सकीय आहारों के माध्यम से यह काउंसलिंग अहम भूमिका निभाती है।',
        },
        {
            question: translations?.Nutritionalcounseling_question5 || 'क्या न्यूट्रिशनल काउंसलिंग के लिए डॉक्टर की रेफरल ज़रूरी है?',
            answer: translations?.Nutritionalcounseling_answer5 || 'नहीं, रेफरल की आवश्यकता नहीं है। आप सीधे बीएम अस्पताल के योग्य न्यूट्रिशनिस्ट और डाइटिशियन से अपॉइंटमेंट ले सकते हैं।',

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
