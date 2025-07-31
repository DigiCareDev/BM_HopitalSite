import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer';
import FAQSection from '../components/Faqs';
import Mangement from '../components/Mangement';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Hypertension (High Blood Pressure) Treatment/Hypertension (High Blood Pressure) Treatment.svg'
import LifestyleCounseling from '@/assets/Treatment/Hypertension (High Blood Pressure) Treatment/Lifestyle Counseling.svg'
import MedicationManagement from '@/assets/Treatment/Hypertension (High Blood Pressure) Treatment/Medication Management.svg'
import RegularMonitoring from '@/assets/Treatment/Hypertension (High Blood Pressure) Treatment/Regular Monitoring.svg'
import StressManagement from '@/assets/Treatment/Hypertension (High Blood Pressure) Treatment/Stress Management Therapy.svg'

export default function HypertensionTreatment() {
       const [translations, setTranslations] = useState({});
   
       const handletranslate = (data) => {
           setTranslations(data);
       }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Hypertension Treatment",
                overview: "Overview",
                subtitle:  translations?.HypertensionTreatment_sections_subtitle || 'बीएम अस्पताल में हाइपरटेंशन उपचार – अपने हृदय की सेहत को नियंत्रण में रखें',
                description: translations?.HypertensionTreatment_sections_description || 'बीएम अस्पताल में उच्च रक्तचाप को नियंत्रित करने और हृदय रोग, स्ट्रोक और किडनी जटिलताओं के जोखिम को कम करने के लिए विशेषज्ञ-नेतृत्व में हाइपरटेंशन उपचार प्रदान किया जाता है। हमारे कार्डियोलॉजिस्ट और जनरल फिजिशियन विस्तृत मूल्यांकन, जीवनशैली परामर्श और साक्ष्य-आधारित दवाओं के माध्यम से व्यक्तिगत देखभाल प्रदान करते हैं। हम ब्लड प्रेशर मॉनिटरिंग, ईसीजी और ब्लड टेस्ट जैसे उन्नत डायग्नोस्टिक उपकरणों का उपयोग करते हैं। उपचार में डाइट गाइडेंस, एक्सरसाइज प्लानिंग, तनाव प्रबंधन और नियमित फॉलो-अप शामिल हैं ताकि हाइपरटेंशन को सही से नियंत्रित किया जा सके। अनियंत्रित हाइपरटेंशन जानलेवा हो सकता है। समय पर पहचान और उचित प्रबंधन से आप स्वस्थ जीवन जी सकते हैं।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title:   translations?.HypertensionTreatment_info_title || 'हाइपरटेंशन उपचार क्या है? – बेहतर हृदय स्वास्थ्य के लिए आपकी मार्गदर्शिका',
                content:  translations?.HypertensionTreatment_info_content || 'हाइपरटेंशन उपचार उन चिकित्सा और जीवनशैली संशोधनों को कहते हैं जो उच्च रक्तचाप को नियंत्रित करने और हृदय रोग, स्ट्रोक तथा किडनी डैमेज जैसे गंभीर जोखिमों से बचाव में मदद करते हैं। बीएम अस्पताल में हम संपूर्ण दृष्टिकोण अपनाते हैं जिसमें सही डायग्नोसिस, लगातार मॉनिटरिंग और वैयक्तिकृत उपचार योजनाएं शामिल होती हैं। हमारे विशेषज्ञ ब्लड प्रेशर मॉनिटरिंग, ईसीजी और ब्लड टेस्ट जैसे डायग्नोस्टिक टूल्स का उपयोग करते हैं। उपचार विकल्पों में दवाएं, आहार परिवर्तन, वजन प्रबंधन, नियमित व्यायाम, नमक का सेवन घटाना और तनाव नियंत्रण शामिल हैं। हाइपरटेंशन उपचार का उद्देश्य ब्लड प्रेशर को सामान्य सीमा में लाना और दीर्घकालिक हृदय स्वास्थ्य को बनाए रखना है। समय पर पहचान और नियमित फॉलो-अप अत्यंत आवश्यक हैं।',
            },
            {
                type: "treatments",
                title:  translations?.HypertensionTreatment_treatments_title || 'उपलब्ध उपचार',
                description:   translations?.HypertensionTreatment_treatments_description || 'हाइपरटेंशन के लिए उपलब्ध उपचारों के साथ अपनी सेहत की जिम्मेदारी लें। बीएम अस्पताल रक्तचाप को प्रभावी ढंग से नियंत्रित करने और जटिलताओं से बचाव के लिए व्यक्तिगत उपचार प्रदान करता है।',
                cards: [
                    {
                        icon: MedicationManagement, // Pill – represents prescribed medications
                        title:  translations?.HypertensionTreatment_cards_title || 'दवा प्रबंधन',
                        content:  translations?.HypertensionTreatment_cards_content || 'उच्च रक्तचाप को कम करने और नियंत्रण में रखने के लिए निर्धारित एंटीहाइपरटेंसिव दवाएं।',
                    },
                    {
                        icon: LifestyleCounseling, // Salad bowl – symbolizes healthy lifestyle/diet
                        title:   translations?.HypertensionTreatment_cards_title1 || 'जीवनशैली परामर्श',
                        content:   translations?.HypertensionTreatment_cards_content1 || 'नमक की कमी, संतुलित आहार, नींद और शारीरिक गतिविधियों पर विशेषज्ञ सलाह।',
                    },
                    {
                        icon: StressManagement, // Person in lotus position – fits stress management & yoga
                        title:  translations?.HypertensionTreatment_cards_title2 || 'तनाव प्रबंधन थेरेपी',
                        content:   translations?.HypertensionTreatment_cards_content2 || 'मानसिक तनाव को कम करने के लिए योग और रिलैक्सेशन तकनीकें।',
                    },
                    {
                        icon: RegularMonitoring, // Stethoscope – best represents health monitoring
                        title:  translations?.HypertensionTreatment_cards_title3 || 'नियमित निगरानी',
                        content:  translations?.HypertensionTreatment_cards_content3 || 'ब्लड प्रेशर की जांच, ईसीजी और स्वास्थ्य मूल्यांकन के माध्यम से उपचार की सटीक निगरानी।',
                    }
                ]

            },
            {
                type: "helpline",
                title:    translations?.HypertensionTreatment_helpline_title || 'हाइपरटेंशन सहायता के लिए 24/7 हेल्पलाइन – हम हमेशा आपके साथ हैं',
                subtitle:   translations?.HypertensionTreatment_helpline_subtitle || 'आपातकालीन हेल्पलाइन',
                description:  translations?.HypertensionTreatment_helpline_description || 'क्या आप उच्च रक्तचाप से संबंधित चिंताओं का सामना कर रहे हैं? हमारी समर्पित सहायता टीम से दिन-रात कभी भी विशेषज्ञ सहायता प्राप्त करें।',
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
            question: translations?.HypertensionTreatment_question || 'हाइपरटेंशन क्या है और इसका उपचार क्यों जरूरी है?',
            answer: translations?.HypertensionTreatment_answer ||'हाइपरटेंशन या उच्च रक्तचाप वह स्थिति है जब धमनियों पर रक्त का दबाव अत्यधिक होता है। इसका उपचार न करने पर यह हृदय रोग, स्ट्रोक या किडनी फेलियर का कारण बन सकता है।',
        },
        {
            question: translations?.HypertensionTreatment_question1 ||'हाइपरटेंशन के सामान्य लक्षण क्या हैं?',
            answer: translations?.HypertensionTreatment_answer1 || 'अक्सर हाइपरटेंशन के कोई स्पष्ट लक्षण नहीं होते। कुछ मामलों में सिरदर्द, चक्कर आना या सांस फूलना हो सकता है — नियमित जांच आवश्यक है।',
        },
        {
            question: translations?.HypertensionTreatment_question2 ||  'बीएम अस्पताल में हाइपरटेंशन के लिए कौन-कौन से उपचार उपलब्ध हैं?',
            answer: translations?.HypertensionTreatment_answer2 || 'हमारे उपचारों में दवाइयां, आहार और जीवनशैली परामर्श, तनाव प्रबंधन और हाइपरटेंशन विशेषज्ञों द्वारा निरंतर निगरानी शामिल हैं।',
        },
        {
            question: translations?.HypertensionTreatment_question3 || 'क्या हाइपरटेंशन को स्थायी रूप से ठीक किया जा सकता है?',
            answer: translations?.HypertensionTreatment_answer3 || 'हाइपरटेंशन का पूरी तरह इलाज संभव नहीं है, लेकिन सही उपचार और लगातार जीवनशैली में सुधार से इसे प्रभावी ढंग से नियंत्रित किया जा सकता है।',
        },
        {
            question: translations?.HypertensionTreatment_question4 ||'मुझे कितनी बार अपने रक्तचाप की जांच करनी चाहिए?',
            answer: translations?.HypertensionTreatment_answer4 || 'हाइपरटेंशन से ग्रस्त मरीजों को अपने डॉक्टर की सलाह के अनुसार नियमित रूप से, आमतौर पर रोजाना या सप्ताह में कई बार रक्तचाप की जांच करनी चाहिए।',
        },
        {
            question: translations?.HypertensionTreatment_question5 || 'क्या सभी हाइपरटेंशन मरीजों को दवाइयों की आवश्यकता होती है?',
            answer: translations?.HypertensionTreatment_answer5 || 'जरूरी नहीं। हल्के मामलों को आहार, व्यायाम और जीवनशैली में बदलाव से नियंत्रित किया जा सकता है, लेकिन कई मरीजों को प्रभावी नियंत्रण के लिए दवाइयों की आवश्यकता होती है।',
        }
    ];


    return (
        <>
            <div className='bg-white'>
         <BackToTop />
            <Subnav onTranslations={handletranslate} />
                <Navbar translations={translations}/>
                <Mangement contentData={contentData} />
                <FAQSection faqItems={faqItems} translations={translations} />
                <Footer translations={translations} />
            </div>
        </>
    )
}
