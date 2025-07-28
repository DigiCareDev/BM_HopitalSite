import React, { useEffect, useState } from 'react';
import Navbar from '../components/Nav'
import Footer from '../components/Footer';
import HeaderHero from '../components/HeaderHero';
import Faq from '../components/faq';
import Whychoose from '../../assets/folderDepartments/Orthopedics/Orthopedics_Why Choose Us.svg';
import Condition from '../../assets/folderDepartments/Orthopedics/Orthopedics_Condition.svg';
import OrthopedicsHero from '../../assets/folderDepartments/Orthopedics/Orthopedics.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";

export default function Orthopedics() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.Orthopedics || 'हड्डी रोग / अस्थिरोग विशेषज्ञता',
            header: {
                title: translations?.Orthopedics || 'हड्डी रोग / अस्थिरोग विशेषज्ञता',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.Orthopedics_heading || "हड्डी, जोड़ और गतिशीलता की विशेषज्ञ देखभाल",
                subheading: translations?.Orthopedics_subheading || "बीएम हॉस्पिटल का ऑर्थोपेडिक्स विभाग फ्रैक्चर, जोड़ दर्द, गठिया, रीढ़ की समस्याओं और खेल चोटों के लिए विशेषज्ञ उपचार प्रदान करता है। उन्नत इमेजिंग, मिनिमली इनवेसिव सर्जरी और व्यक्तिगत रिहैबिलिटेशन के साथ, हम गतिशीलता को बहाल करते हैं और जीवन की गुणवत्ता को बेहतर बनाते हैं। चाहे ट्रॉमा केयर हो या जॉइंट रिप्लेसमेंट, हमारे विशेषज्ञ तेज़ रिकवरी और लंबी अवधि के हड्डी-जोड़ स्वास्थ्य को सुनिश्चित करते हैं।",
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.Orthopedics_subheadingOne || "चाहे आप किसी चोट से उबर रहे हों या किसी पुरानी समस्या से जूझ रहे हों, हमारा ऑर्थोपेडिक्स टीम हर चरण में आपके साथ है—दर्द राहत से लेकर सर्जरी और रिहैबिलिटेशन तक।",
            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "Orthopedics Department Image",
                classes: "h-56 w-full object-cover sm:h-62 md:h-66 lg:w-full lg:h-full"
            },
            layout: {
                background: "bg-white",
                paddingTop: "pt-10",
                contentWidth: "max-w-screen-xl",
                contentAlignment: "sm:text-center lg:text-left"
            },
            whyChoose: {
                image: {
                    src: Whychoose,
                    alt: "Orthopedics",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Orthopedics_whyChoose_content_title || "बीएम हॉस्पिटल को ऑर्थोपेडिक्स के लिए क्यों चुनें?",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Orthopedics_whyChoose_points_one || "अनुभवी ऑर्थोपेडिक सर्जन और फिजियोथेरेपिस्ट की टीम",
                        translations?.Orthopedics_whyChoose_points_two || "उन्नत डायग्नोस्टिक और सर्जिकल सुविधाएं",
                        translations?.Orthopedics_whyChoose_points_three || "तेज़ रिकवरी योजनाओं के साथ रोगी-केंद्रित देखभाल",
                        translations?.Orthopedics_whyChoose_points_four || "व्यक्तिगत दर्द प्रबंधन और गतिशीलता बहाली",
                    ],
                    listClasses: "text-gray-700 space-y-3 list-disc list-inside"
                },
                cta: {
                    label: "Book an Appointment",
                    link: "/appointment",
                    classes:
                        "mt-6 inline-block bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
                },
                layout: {
                    wrapperClasses:
                        "container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                }
            },
            conditions: {
                image: {
                    src: Condition,
                    alt: "Orthopedics",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Orthopedics_conditions_title || "बीएम हॉस्पिटल में प्रमुख ऑर्थोपेडिक सेवाएं",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Orthopedics_content_points_one || "फ्रैक्चर, गठिया और खेल चोटों का उपचार",
                        translations?.Orthopedics_content_points_two || "लिगामेंट, टेंडन, जोड़ों और कार्टिलेज समस्याओं की देखभाल",
                        translations?.Orthopedics_content_points_three || "ऑस्टियोपोरोसिस और हड्डी विकृति का निदान और प्रबंधन",
                        translations?.Orthopedics_content_points_four || "मिनिमली इनवेसिव सर्जरी और जॉइंट रिप्लेसमेंट प्रक्रियाएं",
                        translations?.Orthopedics_content_points_five || "आर.आई.सी.ई. (विश्राम, बर्फ, दबाव, ऊंचाई) और फिजिकल रिहैबिलिटेशन",

                    ],
                    listClasses: "text-gray-700 space-y-3 list-disc list-inside"
                },
                layout: {
                    wrapperClasses:
                        "container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                }
            },
            centersection: {
                center: {
                    title: translations?.Orthopedics_centersection_title || "बीएम हॉस्पिटल में एडवांस ऑर्थोपेडिक्स केयर – ताकत, गति और गतिशीलता की बहाली",
                    subtitle: translations?.Orthopedics_centersection_subtitle || "हड्डी, जोड़ और मांसपेशियों की समस्याओं के लिए विशेष ऑर्थोपेडिक उपचार",
                }
            },
            threedSection: {
                heading: translations?.Orthopedics_threedSection_heading || "बीएम हॉस्पिटल का ऑर्थोपेडिक्स विभाग मस्कुलोस्केलेटल विकारों से पीड़ित रोगियों के लिए विशेषज्ञ देखभाल प्रदान करता है। हमारे अनुभवी ऑर्थोपेडिक सर्जन, फिजियोथेरेपिस्ट और सहायक स्टाफ आपको ताकत, गतिशीलता और दर्द-मुक्त जीवन वापस पाने में मदद करने के लिए समर्पित हैं।",
                subheading: translations?.Orthopedics_threedSection_subheading || "हम फ्रैक्चर, मोच, खिंचाव से लेकर गठिया, टेंडोनाइटिस, कार्पल टनल सिंड्रोम, रोटेटर कफ चोटों और रूमेटॉयड आर्थराइटिस जैसी जटिल स्थितियों का इलाज करते हैं। हमारी सेवाएं सर्जिकल और गैर-सर्जिकल दोनों तरीकों को शामिल करती हैं, जो रोगी की जरूरतों के अनुसार होती हैं। एक्स-रे, एमआरआई और आर्थोस्कोपी जैसी नवीनतम डायग्नोस्टिक तकनीकों का उपयोग करके हम सटीक उपचार योजना बनाते हैं।",
                image: {
                    src: OrthopedicsHero,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.Orthopedics_ctaSection_title || "आपका स्वास्थ्य हमारे लिए महत्वपूर्ण है।",
                subtitle: translations?.Orthopedics_ctaSection_subtitle || "लक्षणों का इंतजार न करें।",
                description: translations?.Orthopedics_ctaSection_description || "अपनी ऑर्थोपेडिक जांच या चोट का आकलन बुक करने के लिए अभी कॉल करें।",
                details: {
                    address: {
                        label: "Visit",
                        value: "BM Hospital, Barabanki"
                    },
                    phone: {
                        label: "Call",
                        value: "+91 7318000751 – 55",
                        link: "tel:+917318000751"
                    }
                },
                footerNote: translations?.Orthopedics_footerNote || "बीएम हॉस्पिटल – आपके हर कदम की देखभाल के लिए ऑर्थोपेडिक्स में भरोसेमंद नाम।",
                button: {
                    label: "Book Appointment",
                    link: "/Orthopedics",
                    backgroundColor: "#80CAC7",
                    hoverColor: "#1D4ED8",
                    textColor: "#FFFFFF"
                }
            }
        }
    ];

    const faqs = [
        {
            question: translations?.Orthopedics_question || "बीएम हॉस्पिटल का ऑर्थोपेडिक्स विभाग किन समस्याओं का इलाज करता है?",
            answer: translations?.Orthopedics_answer || "हमारा ऑर्थोपेडिक्स विभाग हड्डियों, जोड़ों, स्नायुबंधन, टेंडन, मांसपेशियों और नसों से संबंधित समस्याओं जैसे फ्रैक्चर, गठिया, मोच और खेल संबंधी चोटों का इलाज करता है।",
        },
        {
            question: translations?.Orthopedics_question2 || "मुझे ऑर्थोपेडिक डॉक्टर से कब मिलना चाहिए?",
            answer: translations?.Orthopedics_answer2 || "अगर आपको जोड़ों में दर्द, चलने में कठिनाई, सूजन, चोटें या लंबे समय से हड्डियों या मांसपेशियों में परेशानी है, तो आपको ऑर्थोपेडिक विशेषज्ञ से संपर्क करना चाहिए।",
        },
        {
            question: translations?.Orthopedics_question3 ||"बीएम हॉस्पिटल में किन आम ऑर्थोपेडिक स्थितियों का इलाज होता है?",
            answer: translations?.Orthopedics_answer3 || "हम गठिया, ऑस्टियोआर्थराइटिस, रूमेटॉयड आर्थराइटिस, फ्रैक्चर, टेंडोनाइटिस, बर्साइटिस, रोटेटर कफ की चोटें, शिन स्प्लिंट्स और कार्पल टनल सिंड्रोम का इलाज करते हैं।",
        },
        {
            question: translations?.Orthopedics_question4 || "क्या आप जॉइंट रिप्लेसमेंट सर्जरी करते हैं?",
            answer: translations?.Orthopedics_answer4 || "हाँ, हमारे अनुभवी ऑर्थोपेडिक सर्जन हिप, घुटने और कंधे की जॉइंट रिप्लेसमेंट सर्जरी करते हैं, वह भी एडवांस मिनिमली इनवेसिव तकनीकों के माध्यम से जिससे जल्दी रिकवरी होती है।",
        },
        {
            question: translations?.Orthopedics_question5 || "क्या फिजियोथेरेपी भी उपचार योजना का हिस्सा है?",
            answer: translations?.Orthopedics_answer5 || "बिल्कुल। हम फिजियोथेरेपी और रिहैबिलिटेशन को उपचार योजना में शामिल करते हैं ताकि ताकत, गति और दीर्घकालिक स्वास्थ्य बहाल हो सके।",
        },
        {
            question: translations?.Orthopedics_question6 || "ऑर्थोपेडिक समस्याओं के निदान के लिए कौन-कौन सी जांचें की जाती हैं?",
            answer: translations?.Orthopedics_answer6 || "हम एक्स-रे, एमआरआई, सीटी स्कैन, अल्ट्रासाउंड और ब्लड टेस्ट का उपयोग कर ऑर्थोपेडिक और जॉइंट से जुड़ी समस्याओं का निदान करते हैं।",
        },
        {
            question: translations?.Orthopedics_question7 ||  "बीएम हॉस्पिटल में फ्रैक्चर का इलाज कैसे किया जाता है?",
            answer: translations?.Orthopedics_answer7 || "हम फ्रैक्चर का इलाज प्लास्टर, स्प्लिंट, ब्रेस या सर्जिकल फिक्सेशन के माध्यम से करते हैं, जो चोट की गंभीरता पर निर्भर करता है। इसके बाद रिहैबिलिटेशन और चलने-फिरने की सहायता दी जाती है।",
        },
        {
            question: translations?.Orthopedics_question8 || "क्या ऑर्थोपेडिक समस्याओं का बिना सर्जरी इलाज संभव है?",
            answer: translations?.Orthopedics_answer8 || "हाँ। कई स्थितियों का इलाज दवाओं, फिजियोथेरेपी, आराम-आइस-कंप्रेशन-एलिवेशन (R.I.C.E.), इंजेक्शन और जीवनशैली में बदलाव से किया जाता है ताकि सर्जरी की आवश्यकता न पड़े।",
        },
        {
            question: translations?.Orthopedics_question9 || "गठिया के कौन-कौन से लक्षण हैं जिन पर ध्यान देना चाहिए?",
            answer: translations?.Orthopedics_answer9 || "जोड़ों में दर्द, अकड़न, सूजन, गति में कमी और सुबह के समय असहजता—इन लक्षणों को अनदेखा न करें। जल्दी इलाज से जोड़ों को नुकसान से बचाया जा सकता है।",
        },
        {
            question: translations?.Orthopedics_question10 || "मैं बीएम हॉस्पिटल में ऑर्थोपेडिक परामर्श कैसे बुक कर सकता हूँ?",
            answer: translations?.Orthopedics_answer10 || "हमारे ऑर्थोपेडिक हेल्पलाइन पर कॉल करें, सीधे हॉस्पिटल आएं या हमारी वेबसाइट के माध्यम से ऑनलाइन अपॉइंटमेंट बुक करें।",
        },

    ];

    return (
        <div className='bg-white'>
            <BackToTop />
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />
            <HeaderHero HeaderData={HeaderData} translations={translations} />
            <Faq faqs={faqs} translations={translations} />
            <Footer translations={translations} />
        </div>
    )
}
