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
import Images from '@/assets/Treatment/Pain Management (Headache, Body Pain, Migraine)/Pain Treatment.svg'
import LifestyleCounseling from '@/assets/Treatment/Pain Management (Headache, Body Pain, Migraine)/Lifestyle Counseling_1.svg'
import MedicationTherapy from '@/assets/Treatment/Pain Management (Headache, Body Pain, Migraine)/Medication Therapy.svg'
import Physiotherapy from '@/assets/Treatment/Pain Management (Headache, Body Pain, Migraine)/Physiotherapy.svg'
import TriggerPoint from '@/assets/Treatment/Pain Management (Headache, Body Pain, Migraine)/Trigger Point Injections.svg'


export default function Paintreatment() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Pain Treatment (Headache, Body Pain, Migraine) ",
                overview: "Overview",
                subtitle: translations?.Paintreatment_sections_subtitle || "दर्द उपचार (सिरदर्द, शरीर दर्द, माइग्रेन) – राहत की शुरुआत यहीं से होती है",
                description: translations?.Paintreatment_sections_description || "बीएम हॉस्पिटल में हम सिरदर्द, शरीर दर्द और माइग्रेन जैसे दर्दों के लिए विशेषज्ञ उपचार प्रदान करते हैं, जिससे रोगी रोजमर्रा की जिंदगी में आने वाली तकलीफ से राहत पा सकें। चाहे यह पुराना सिरदर्द हो, थकान से होने वाला शरीर दर्द, या तीव्र माइग्रेन अटैक—हमारी विशेषज्ञ टीम जड़ कारणों की जांच कर, रोगी के अनुसार उपचार योजना तैयार करती है। हम दर्द प्रबंधन थेरेपी, दवाएं, जीवनशैली मार्गदर्शन और आवश्यकतानुसार उन्नत निदान का उपयोग करते हैं। हमारा उद्देश्य आपको आराम, कार्यक्षमता और मानसिक शांति प्रदान करना है।",
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.Paintreatment_info_title || "दर्द उपचार (सिरदर्द, शरीर दर्द, माइग्रेन) क्या है?",
                content: translations?.Paintreatment_info_content || "दर्द उपचार (सिरदर्द, शरीर दर्द, माइग्रेन) एक चिकित्सकीय प्रक्रिया है, जिसका उद्देश्य विभिन्न प्रकार के शारीरिक दर्द का निदान, प्रबंधन और राहत प्रदान करना है। सिरदर्द तनाव, क्लस्टर या माइग्रेन आधारित हो सकता है। शरीर दर्द थकान, चोट, खराब पोस्चर या किसी रोग के कारण हो सकता है। माइग्रेन गंभीर सिरदर्द होता है जिसमें मतली, रोशनी और ध्वनि के प्रति संवेदनशीलता भी हो सकती है। बीएम हॉस्पिटल में हम नैदानिक मूल्यांकन, डायग्नोस्टिक इमेजिंग और व्यक्तिगत चिकित्सा के माध्यम से दर्द का प्रभावी उपचार करते हैं।",
            },
            {
                type: "treatments",
                title: translations?.Paintreatment_treatments_title || "उपलब्ध उपचार",
                description: translations?.Paintreatment_treatments_description || "दर्द उपचार (सिरदर्द, शरीर दर्द, माइग्रेन) के लिए उपलब्ध उपचार सुरक्षित, व्यक्तिगत और दीर्घकालिक राहत पर केंद्रित होते हैं—जिससे आप अपनी ज़िंदगी पर फिर से नियंत्रण पा सकें।",
                cards: [
                    {
                        icon: MedicationTherapy, // Pill – represents medication therapy
                        title: translations?.Paintreatment_cards_title || "टॉपिकल मेडिकेशन",
                        content: translations?.Paintreatment_cards_content || "क्रीम और मलहम से सूजन, खुजली और बैक्टीरिया को कम किया जाता है।",
                    },
                    {
                        icon: TriggerPoint, // Person doing exercise – fits physiotherapy and movement
                        title: translations?.Paintreatment_cards_title1 || "ओरल मेडिकेशन",
                        content: translations?.Paintreatment_cards_content1 || "गंभीर दर्द या लंबे समय से चल रहे दर्द को नियंत्रित करने के लिए दी जाने वाली दवाइयाँ।",

                    },
                    {
                        icon: Physiotherapy, // Syringe – matches trigger point injections
                        title: translations?.Paintreatment_cards_title2 || "फिजिकल थेरेपी",
                        content: translations?.Paintreatment_cards_content2 || "पुराने दर्द और मांसपेशियों की कमजोरी को दूर करने के लिए शरीर को सक्रिय और लचीला बनाने वाली थेरेपी।",

                    },
                    {
                        icon: LifestyleCounseling, // Person in lotus position – ideal for lifestyle counseling with stress management
                        title: translations?.Paintreatment_cards_title3 || "जीवनशैली एवं परामर्श",
                        content: translations?.Paintreatment_cards_content3 || "दर्द के ट्रिगर्स से बचाव और दैनिक जीवन में आराम के लिए व्यक्तिगत मार्गदर्शन।",


                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.Paintreatment_helpline_title || "24x7 हेल्पलाइन सहायता",
                subtitle: translations?.Paintreatment_helpline_subtitle || "आपातकालीन हेल्पलाइन",
                description: translations?.Paintreatment_helpline_description || "सिरदर्द, शरीर दर्द या माइग्रेन से परेशान हैं? कभी भी सहायता लें – हमारी विशेषज्ञ टीम आपकी मदद के लिए तैयार है।",
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
            question: translations?.Paintreatment_question || 'बार-बार सिरदर्द या माइग्रेन का क्या कारण होता है?',
            answer: translations?.Paintreatment_answer || 'सिरदर्द या माइग्रेन तनाव, नींद की कमी, हार्मोनल बदलाव, डिहाइड्रेशन, आंखों पर जोर या किसी छिपी हुई बीमारी के कारण हो सकते हैं। प्रभावी इलाज के लिए सही निदान जरूरी है।',

        },
        {
            question: translations?.Paintreatment_question1 || 'शरीर में दर्द के लिए मुझे कब डॉक्टर से संपर्क करना चाहिए?',
            answer: translations?.Paintreatment_answer1 || 'अगर दर्द लगातार बना रहे, बढ़ रहा हो या रोजमर्रा की गतिविधियों को प्रभावित कर रहा हो तो डॉक्टर से संपर्क करें। अगर दर्द के साथ सूजन, कमजोरी या बुखार हो तो तुरंत चिकित्सा सहायता लें।',

        },
        {
            question: translations?.Paintreatment_question2 || "बीएम हॉस्पिटल में माइग्रेन के क्या उपचार उपलब्ध हैं?",
            answer: translations?.Paintreatment_answer2 || 'हम माइग्रेन के लिए व्यक्तिगत उपचार प्रदान करते हैं, जिनमें दवाएं, ट्रिगर मैनेजमेंट, जीवनशैली में बदलाव और रोगी की स्थिति के अनुसार प्रिवेंटिव थेरेपी शामिल होती हैं।',

        },
        {
            question: translations?.Paintreatment_question3 || 'क्या फिजियोथेरेपी पुराने शरीर के दर्द में कारगर होती है?',
            answer: translations?.Paintreatment_answer3 || 'हाँ, फिजियोथेरेपी चलने-फिरने में सुधार, मांसपेशियों को मजबूत करने और पोस्चर सुधारने में मदद करती है, जिससे पुराने दर्द में काफी राहत मिलती है।',
        },
        {
            question: translations?.Paintreatment_question4 || 'क्या दर्द निवारक दवाएं लंबे समय तक सुरक्षित होती हैं?',
            answer: translations?.Paintreatment_answer4 || "यदि विशेषज्ञों की देखरेख में ली जाएं तो दर्द निवारक दवाएं सुरक्षित होती हैं। बीएम हॉस्पिटल में हम संतुलित दर्द प्रबंधन के साथ कम से कम साइड इफेक्ट सुनिश्चित करते हैं।",
        },
        {
            question: translations?.Paintreatment_question5 || 'क्या तनाव और जीवनशैली सिरदर्द और शरीर के दर्द में योगदान करते हैं?',
            answer: translations?.Paintreatment_answer5 || 'हाँ, तनाव, खराब नींद, खानपान और व्यायाम की कमी सभी इसका कारण बन सकते हैं। हम तनाव कम करने की योजनाएं और समग्र उपचार प्रदान करते हैं।',

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
