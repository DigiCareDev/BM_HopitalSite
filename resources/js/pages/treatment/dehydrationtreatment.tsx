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
import Images from '@/assets/Treatment/Dehydration and IV Fluids/Dehydration and IV Fluids.svg'
import Glucose from '@/assets/Treatment/Dehydration and IV Fluids/Glucose Saline.svg'
import Saline from '@/assets/Treatment/Dehydration and IV Fluids/Normal Saline IV.svg'
import ORS from '@/assets/Treatment/Dehydration and IV Fluids/Oral Rehydration Solution (ORS).svg'
import Lactate from '@/assets/Treatment/Dehydration and IV Fluids/Ringer’s Lactate.svg'

export default function dehydrationtreatment() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const contentData = {
        sections: [
            {
                type: "header",
                title: "Allergy Treatment",
                overview: "Overview",
                subtitle: translations?.dehydrationtreatment_sections_subtitle || 'डिहाइड्रेशन और IV फ्लूइड्स ट्रीटमेंट – त्वरित राहत, चौबीसों घंटे देखभाल',
                description: translations?.dehydrationtreatment_sections_description || 'बीएम हॉस्पिटल में हमारा विशेषज्ञ डिहाइड्रेशन और IV फ्लूइड्स ट्रीटमेंट आपकी बॉडी का फ्लूइड और इलेक्ट्रोलाइट संतुलन तेजी से और प्रभावी रूप से बहाल करता है। अत्यधिक गर्मी, दस्त, उल्टी, बुखार या अपर्याप्त तरल सेवन से डिहाइड्रेशन हो सकता है—जिससे थकावट, चक्कर, शुष्क त्वचा और कम ब्लड प्रेशर जैसी समस्याएँ हो सकती हैं। हमारा उपचार पहले डिहाइड्रेशन की गंभीरता का मूल्यांकन करता है और फिर IV फ्लूइड्स, आवश्यक इलेक्ट्रोलाइट्स और सहायक देखभाल दी जाती है। हम 24x7 इमरजेंसी और वॉक-इन सेवाएं प्रदान करते हैं ताकि समय पर हाइड्रेशन और रिकवरी सुनिश्चित की जा सके। हमारी मेडिकल टीम बाँझ प्रक्रियाओं का पालन करती है और विशेष रूप से बच्चों, बुजुर्गों और गंभीर रूप से बीमार मरीजों पर उपचार के दौरान निगरानी रखती है।',
                image: Images,
            },
            {
                type: "info",
                icon: Treatmenticon,
                title: translations?.dehydrationtreatment_info_title || 'डिहाइड्रेशन और IV फ्लूइड्स ट्रीटमेंट क्या है?',
                content: translations?.dehydrationtreatment_info_content || 'डिहाइड्रेशन और IV फ्लूइड्स ट्रीटमेंट एक आवश्यक चिकित्सा प्रक्रिया है जिसका उपयोग मध्यम से गंभीर डिहाइड्रेशन से पीड़ित मरीजों में खोए हुए तरल और जरूरी इलेक्ट्रोलाइट्स को पुनः बहाल करने के लिए किया जाता है। जब शरीर जितना तरल ले रहा है उससे अधिक खो देता है, तो यह असंतुलन पैदा करता है जिससे अंगों की कार्यप्रणाली, रक्तचाप और समग्र स्वास्थ्य पर प्रभाव पड़ता है। इसके सामान्य कारणों में हीट एग्जॉशन, उल्टी, दस्त, अत्यधिक पसीना और बुखार शामिल हैं। लक्षणों में सूखा मुँह, थकान, चक्कर, भ्रम, कम यूरिन और तेज़ धड़कन हो सकते हैं। IV फ्लूइड्स ट्रीटमेंट में बाँझ तरल पदार्थों को सीधे नसों में दिया जाता है जिससे त्वरित हाइड्रेशन मिलता है। ये फ्लूइड्स आमतौर पर पानी, सोडियम, पोटैशियम और ग्लूकोज का संतुलित मिश्रण होते हैं जो मरीज की स्थिति को तुरंत स्थिर करने में मदद करते हैं।',
            },
            {
                type: "treatments",
                title: translations?.dehydrationtreatment_treatments_title || 'उपलब्ध उपचार',
                description: translations?.dehydrationtreatment_treatments_description || 'डिहाइड्रेशन और IV फ्लूइड्स ट्रीटमेंट तेज, प्रभावी और मरीज की आवश्यकताओं के अनुसार तैयार किए जाते हैं—जल्द और सुरक्षित रिकवरी के लिए हाइड्रेशन, इलेक्ट्रोलाइट्स और ऊर्जा को बहाल करते हैं।',
                cards: [
                    {
                        icon: Lactate, // Test tube – represents medical fluid like Ringer's
                        title: translations?.dehydrationtreatment_cards_title || 'रिंगर लैक्टेट',
                        content: translations?.dehydrationtreatment_cards_content || 'इलेक्ट्रोलाइट और तरल पूर्ति के लिए आदर्श।',
                    },
                    {
                        icon: Saline, // Syringe – fits IV delivery like Normal Saline
                        title: translations?.dehydrationtreatment_cards_title1 || 'नॉर्मल सलाइन IV',
                        content: translations?.dehydrationtreatment_cards_content1 || 'हाइड्रेशन करता है और सोडियम संतुलन बहाल करता है।',
                    },
                    {
                        icon: Glucose, // Juice box – symbolizes energy drink/sugar boost
                        title: translations?.dehydrationtreatment_cards_title2 || 'ग्लूकोज सलाइन',
                        content: translations?.dehydrationtreatment_cards_content2 || 'हाइड्रेशन के साथ ऊर्जा भी प्रदान करता है।',
                    },
                    {
                        icon: ORS, // Drink cup – visually cues ORS (oral intake)
                        title: translations?.dehydrationtreatment_cards_title3 || 'ओरल रिहाइड्रेशन सॉल्यूशन (ORS)',
                        content: translations?.dehydrationtreatment_cards_content3 || 'मामूली डिहाइड्रेशन के लिए उपयोगी।',
                    }
                ]

            },
            {
                type: "helpline",
                title: translations?.dehydrationtreatment_helpline_title || '24/7 डिहाइड्रेशन और IV फ्लूइड्स ट्रीटमेंट हेल्पलाइन – हम हमेशा आपके साथ हैं!',
                subtitle: translations?.dehydrationtreatment_helpline_subtitle || 'आपातकालीन हेल्पलाइन',
                description: translations?.dehydrationtreatment_helpline_description || 'डिहाइड्रेशन की आपात स्थिति में तुरंत मेडिकल सहायता प्राप्त करें – कभी भी, कहीं भी।',

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
            question: translations?.dehydrationtreatment_question || 'थायरॉयड विकारों के सामान्य लक्षण क्या हैं?',
            answer: translations?.dehydrationtreatment_answer || 'थायरॉयड विकारों के लक्षण अलग-अलग हो सकते हैं, लेकिन इनमें थकान, वजन में बदलाव, मूड स्विंग्स, बालों का झड़ना, अनियमित दिल की धड़कन और तापमान के प्रति संवेदनशीलता शामिल हो सकते हैं। प्रारंभिक निदान जटिलताओं को रोकने में मदद करता है।',
        },
        {
            question: translations?.dehydrationtreatment_question1 || 'बीएम अस्पताल में किन प्रकार के थायरॉयड विकारों का इलाज किया जाता है?',
            answer: translations?.dehydrationtreatment_answer1 || 'हम हाइपोथायरायडिज्म, हाइपरथायरायडिज्म, गॉइटर, थायरॉयड नोड्यूल्स और थायरॉयड कैंसर का इलाज दवाओं, हार्मोन थेरेपी और आवश्यक होने पर सर्जरी द्वारा करते हैं।',
        },
        {
            question: translations?.dehydrationtreatment_question2 || 'थायरॉयड विकार का निदान कैसे किया जाता है?',
            answer: translations?.dehydrationtreatment_answer2 || 'निदान में शारीरिक जांच, टीएसएच ब्लड टेस्ट, थायरॉयड हार्मोन स्तर की जांच, अल्ट्रासाउंड और लक्षणों के आधार पर रेडियोएक्टिव आयोडीन अपटेक स्कैन शामिल होता है।',
        },
        {
            question: translations?.dehydrationtreatment_question3 || 'हाइपोथायरायडिज्म का इलाज क्या है?',
            answer: translations?.dehydrationtreatment_answer3 || 'हाइपोथायरायडिज्म का आमतौर पर इलाज लेवोथायरॉक्सिन नामक सिंथेटिक थायरॉयड हार्मोन से किया जाता है, जो हार्मोन स्तर को सामान्य करता है और लक्षणों को कम करता है।',
        },
        {
            question: translations?.dehydrationtreatment_question4 || 'क्या थायरॉयड विकारों का स्थायी इलाज संभव है?',
            answer: translations?.dehydrationtreatment_answer4 || 'कुछ थायरॉयड विकारों का उचित उपचार से प्रबंधन या समाधान किया जा सकता है, लेकिन हाइपोथायरायडिज्म जैसी स्थितियों के लिए आमतौर पर जीवनभर दवा लेनी होती है।',
        },
        {
            question: translations?.dehydrationtreatment_question5 || 'क्या थायरॉयड के इलाज के लिए सर्जरी की आवश्यकता होती है?',
            answer: translations?.dehydrationtreatment_answer5 || 'बड़े गॉइटर, थायरॉयड कैंसर, या सांस लेने या निगलने में समस्या उत्पन्न करने वाले नोड्यूल्स के लिए सर्जरी की सिफारिश की जाती है। हमारे विशेषज्ञ सर्जन सुरक्षित प्रक्रिया और पोस्ट-ऑपरेटिव देखभाल सुनिश्चित करते हैं।',
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
