import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Mangement from '../components/Mangement';
import FAQSection from '../components/Faqs';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Skin Conditions (Rashes, Eczema, Acne)/Skin Conditions (Rashes, Eczema, Acne).svg'
import LifestyleSkincare from '@/assets/Treatment/Skin Conditions (Rashes, Eczema, Acne)/Lifestyle & Skincare Counseling.svg'
import OralMedications from '@/assets/Treatment/Skin Conditions (Rashes, Eczema, Acne)/Oral Medications_1.svg'
import Phototherapy from '@/assets/Treatment/Skin Conditions (Rashes, Eczema, Acne)/Phototherapy.svg'
import TopicalMedications from '@/assets/Treatment/Skin Conditions (Rashes, Eczema, Acne)/Topical Medications.svg'


export default function Skinconditions() {
   const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Skin Conditions (Rashes, Eczema, Acne) ",
                overview: "Overview",
                subtitle:  translations?.Skinconditions_sections_subtitle || " Comprehensive Care for Skin Conditions (Rashes, Eczema, Acne)  ",
                description: translations?.Skinconditions_sections_description ||  "At BM Hospital, we provide expert diagnosis and treatment for Skin Conditions (Rashes, Eczema, Acne) with personalized care for all age groups. These common dermatological issues can result from allergies, hormonal imbalances, infections, or environmental triggers. Our dermatology specialists use advanced skin analysis and evidence-based treatments to manage symptoms effectively and improve skin health. Whether it’s the itchiness of eczema, the inflammation of acne, or unexplained rashes, we offer a wide range of therapies—from topical and oral medications to lifestyle guidance—to restore your skin's natural balance. Early diagnosis and customized treatment can prevent complications and boost confidence.  ",
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title:  translations?.Skinconditions_info_title || "What Is Skin Conditions (Rashes, Eczema, Acne)? ",
                content:   translations?.Skinconditions_info_content || "Skin Conditions (Rashes, Eczema, Acne) refer to common dermatological problems that affect the skin's texture, appearance, and comfort. Rashes often appear as red, itchy, or inflamed patches caused by allergic reactions, infections, or irritants. Eczema, also known as atopic dermatitis, is a chronic condition marked by dry, itchy, and inflamed skin, often triggered by genetics or environmental factors. Acne is a skin disorder resulting from clogged hair follicles, excess oil production, and bacteria, causing pimples, blackheads, and whiteheads—most commonly on the face, chest, and back. These conditions not only affect appearance but also impact self-esteem and daily comfort. At BM Hospital, we offer expert diagnosis and advanced treatments tailored to individual skin needs, ensuring effective relief and lasting results.",

            },
            {
                type: "treatments",
                title: translations?.Skinconditions_treatments_title || "Available Treatments for Skin Conditions (Rashes, Eczema, Acne) ",
                description: translations?.Skinconditions_treatments_description || "Get healthier skin with our expert care. Our Available Treatments provide fast relief, long-term results, and confidence restoration. ",
                cards: [
                    {
                        icon: TopicalMedications, // Lotion bottle — fits topical medications
                        title: translations?.Skinconditions_cards_title ||  "Topical Medications",
                        content:  translations?.Skinconditions_cards_content || "Creams and ointments reduce inflammation, itching, and bacterial growth.",
                    },
                    {
                        icon: OralMedications, // Pill — suitable for oral medications
                        title:  translations?.Skinconditions_cards_title1 || "Oral Medications",
                        content: translations?.Skinconditions_cards_content1 || "Tablets to manage severe acne, allergic reactions, or chronic eczema.",
                    },
                    {
                        icon: Phototherapy, // Light bulb — represents phototherapy (light-based treatment)
                        title:  translations?.Skinconditions_cards_title2 ||  "Phototherapy",
                        content:  translations?.Skinconditions_cards_content2 ||"Light-based therapy used to treat moderate to severe eczema.",
                    },
                    {
                        icon: LifestyleSkincare, // Herb — symbolizes lifestyle and skincare counseling
                        title: translations?.Skinconditions_cards_title3 ||"Lifestyle & Skincare Counseling",
                        content:  translations?.Skinconditions_cards_content3 || "Personalized guidance to prevent triggers and maintain skin health.",
                    }
                ]

            },
            {
                type: "helpline",
                title:  translations?.Skinconditions_helpline_title || "24/7 Help Line for Assistance ",
                subtitle:  translations?.Skinconditions_helpline_subtitle || "Emergency Help Line",
                description: translations?.Skinconditions_helpline_description || "Experiencing discomfort from rashes, eczema, or acne? Get expert help anytime! Our dedicated team is here to assist you. ",

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
            question:  translations?.Skinconditions_question ||'खुजली, एक्जिमा और मुंहासों जैसी त्वचा की समस्याएं क्यों होती हैं?',
            answer:  translations?.Skinconditions_answer ||'त्वचा की समस्याएं एलर्जी, हार्मोनल बदलाव, तनाव, खराब स्वच्छता, संक्रमण या आनुवांशिक कारणों से हो सकती हैं। पर्यावरणीय प्रदूषक और कुछ खाद्य पदार्थ लक्षणों को और बढ़ा सकते हैं।',

        },
        {
            question:  translations?.Skinconditions_question1 ||'एक्जिमा एक सामान्य रैश से कैसे अलग है?',
            answer:  translations?.Skinconditions_answer1 ||'एक्जिमा एक दीर्घकालिक सूजनयुक्त त्वचा की समस्या है जिसमें तीव्र खुजली और सूखापन होता है। सामान्य रैश अस्थायी होता है और अक्सर एलर्जी या जलन के कारण होता है।',

        },
        {
            question: translations?.Skinconditions_question2 ||'क्या मुंहासों का स्थायी इलाज संभव है?',
            answer:   translations?.Skinconditions_answer2 ||'मुंहासों को नियंत्रित और काफी हद तक कम किया जा सकता है, लेकिन स्थायी इलाज व्यक्ति की त्वचा के प्रकार और उपचार प्रतिक्रिया पर निर्भर करता है। समय पर इलाज से दाग-धब्बों से बचा जा सकता है।',

        },
        {
            question:  translations?.Skinconditions_question3 ||'क्या त्वचा की समस्याएं संक्रामक होती हैं?',
            answer:  translations?.Skinconditions_answer3 ||'ज्यादातर त्वचा की समस्याएं जैसे एक्जिमा और मुंहासे संक्रामक नहीं होते। हालांकि, कुछ संक्रमणों जैसे फंगल या बैक्टीरियल रैश संपर्क से फैल सकते हैं।',

        },
        {
            question:   translations?.Skinconditions_question4 ||'गंभीर मुंहासों के लिए कौन से उपचार उपलब्ध हैं?',
            answer:  translations?.Skinconditions_answer4 ||'गंभीर मुंहासों के लिए ओरल मेडिकेशन, प्रिस्क्रिप्शन क्रीम, केमिकल पील या लेज़र थेरेपी की आवश्यकता हो सकती है। त्वचा विशेषज्ञ आमतौर पर बेहतर परिणाम के लिए संयुक्त उपचार देते हैं।',

        },
        {
            question:  translations?.Skinconditions_question5 ||'त्वचा की किसी समस्या के लिए डॉक्टर को कब दिखाना चाहिए?',
            answer: translations?.Skinconditions_answer5 ||'यदि समस्या बढ़ रही है, फैल रही है, दर्द हो रहा है, कई दिनों से बनी हुई है, या बुखार/संक्रमण जैसे लक्षणों के साथ है, तो तुरंत डॉक्टर से संपर्क करें।',

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
