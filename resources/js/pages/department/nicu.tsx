import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer';
import HeaderHero from '../components/HeaderHero';
import Faq from '../components/faq';
import Whychoose from '../../assets/folderDepartments/Neonatal Intensive Care Unit (NICU)/NICU_Why Choose Us.svg';
import Condition from '../../assets/folderDepartments/Neonatal Intensive Care Unit (NICU)/NICU_Condition.svg';
import RespiratoryHero from '../../assets/folderDepartments/Neonatal Intensive Care Unit (NICU)/Neonatal Intensive Care Unit (NICU) 24x7.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";

export default function Nicu() {
  const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.nicu || 'नवजात शिशु गहन चिकित्सा',
            header: {
                title: translations?.nicu || 'नवजात शिशु गहन चिकित्सा',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.Nicu_heading || "आपके नवजात के लिए स्नेहमय NICU देखभाल",
                subheading: translations?.Nicu_subheading || "BM हॉस्पिटल की नवजात गहन देखभाल इकाई (NICU) समय से पहले जन्मे, कम वजन वाले और गंभीर रूप से बीमार नवजात शिशुओं के लिए चौबीसों घंटे विशेष देखभाल प्रदान करती है। हमारे विशेषज्ञ नियोनैटोलॉजिस्ट और नर्सों द्वारा संचालित, यह इकाई उन्नत वेंटिलेटर, इनक्यूबेटर और मॉनिटरिंग सिस्टम से सुसज्जित है। हम नवजातों को स्थिर करने, पोषण देने और स्वस्थ शुरुआत सुनिश्चित करने पर केंद्रित हैं।",
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.Nicu_subheadingOne || "हमारा NICU वैश्विक मानकों का पालन करता है और फैमिली-सेंटर केयर पर बल देता है जहाँ माता-पिता को पूरी जानकारी, सहयोग और जुड़ाव मिलता है।",
            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "Neonatal Intensive Care Unit (NICU) Department Image",
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
                    alt: "Neonatal Intensive Care Unit (NICU)",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Nicu_whyChoose_content_title || "BM हॉस्पिटल का NICU क्यों चुनें?",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Nicu_whyChoose_points_one || "24x7 नियोनैटोलॉजिस्ट के नेतृत्व वाली टीम",
                        translations?.Nicu_whyChoose_points_two || "सुरक्षित, स्वच्छ और आधुनिक NICU वातावरण",
                        translations?.Nicu_whyChoose_points_three || "बेहतर परिणामों के लिए प्रमाण-आधारित इलाज प्रोटोकॉल",
                        translations?.Nicu_whyChoose_points_four || "गंभीर क्षणों में परिवारों के लिए सहानुभूतिपूर्ण सहयोग",

                    ],
                    listClasses: "text-gray-700 space-y-3 list-disc list-inside"
                },
                cta: {
                    label: translations?.cta_label || 'अपॉइंटमेंट बुक करें',
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
                    alt: "Neonatal Intensive Care Unit (NICU)",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Nicu_conditions_title || "BM हॉस्पिटल NICU की प्रमुख विशेषताएं",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Nicu_content_points_one || "समय से पहले और गंभीर रूप से बीमार नवजातों की विशेष देखभाल",
                        translations?.Nicu_content_points_two || "उन्नत उपकरण: इनक्यूबेटर, वेंटिलेटर, एंडोट्रेकियल ट्यूब, फोटोथैरेपी और ECMO",
                        translations?.Nicu_content_points_three || "रक्त गैस, ऑक्सीजन स्तर और जीवन संकेतों की निगरानी",
                        translations?.Nicu_content_points_four || "गेवेज फीडिंग, रक्त संक्रमण और दवाओं जैसी सहायक सेवाएं",
                        translations?.Nicu_content_points_five || "फैमिली-सेंटर केयर और माता-पिता की सक्रिय भागीदारी पर जोर",

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
                    title: translations?.Nicu_centersection_title || "BM हॉस्पिटल में विशेष नवजात गहन देखभाल इकाई (NICU) – हर नवजात को स्वस्थ शुरुआत दें",
                    subtitle: translations?.Nicu_centersection_subtitle || "समय से पहले, गंभीर या कम वजन वाले शिशुओं के लिए विशेषज्ञ नवजात देखभाल",
                }
            },
            threedSection: {
                heading: translations?.Nicu_threedSection_heading || "BM हॉस्पिटल का NICU एक अत्याधुनिक सुविधा है जो विशेष देखभाल की आवश्यकता वाले नवजातों के लिए समर्पित है। अनुभवी नियोनैटोलॉजिस्ट, NICU नर्सों और बाल रोग विशेषज्ञों की टीम द्वारा संचालित, यह इकाई 24/7 निगरानी और जीवनरक्षक देखभाल प्रदान करती है।",
                subheading: translations?.Nicu_threedSection_subheading || "हम RDS, एप्निया, ब्रैडीकार्डिया, पीलिया, सेप्सिस, NEC और IVH जैसी स्थितियों का इलाज इनक्यूबेटर, वेंटिलेटर, फोटोथैरेपी यूनिट और इन्फ्यूजन पंप जैसे आधुनिक उपकरणों से करते हैं।",
                image: {
                    src: RespiratoryHero,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.Nicu_ctaSection_title || "आपका स्वास्थ्य महत्वपूर्ण है।",
                subtitle: translations?.Nicu_ctaSection_subtitle || "लक्षणों का इंतजार न करें।",
                description: translations?.Nicu_ctaSection_description || "हमारी NICU सेवाओं के बारे में जानने या नियोनैटोलॉजिस्ट से परामर्श के लिए अभी कॉल करें।",

                details: {
                    address: {
                        label: translations?.address_label || "दौरा",
                        value: translations?.address_value || "बीएम अस्पताल, बाराबंकी",
                    },
                    phone: {
                        label: translations?.phone_label || "कॉल",
                        value: "+91 7318000751 – 55",
                        link: "tel:+917318000751"
                    }
                },
                footerNote: translations?.Nicu_footerNote || "BM हॉस्पिटल – हर कीमती शुरुआत में विशेषज्ञ देखभाल।",
                button: {
                    label: translations?.cta_label || 'अपॉइंटमेंट बुक करें',
                    link: "/Neonatal Intensive Care Unit (NICU)",
                    backgroundColor: "#80CAC7",
                    hoverColor: "#1D4ED8",
                    textColor: "#FFFFFF"
                }
            }
        }
    ];

    const faqs = [
        {
            question: translations?.Nicu_question || "बीएम हॉस्पिटल का ऑर्थोपेडिक्स विभाग किन समस्याओं का इलाज करता है?",
            answer: translations?.Nicu_answer || "हमारा ऑर्थोपेडिक्स विभाग हड्डियों, जोड़ों, स्नायुबंधन, टेंडन, मांसपेशियों और नसों से संबंधित समस्याओं जैसे फ्रैक्चर, गठिया, मोच और खेल संबंधी चोटों का इलाज करता है।",
        },
        {
            question: translations?.Nicu_question2 || "मुझे ऑर्थोपेडिक डॉक्टर से कब मिलना चाहिए?",
            answer: translations?.Nicu_answer2 || "अगर आपको जोड़ों में दर्द, चलने में कठिनाई, सूजन, चोटें या लंबे समय से हड्डियों या मांसपेशियों में परेशानी है, तो आपको ऑर्थोपेडिक विशेषज्ञ से संपर्क करना चाहिए।",
        },
        {
            question: translations?.Nicu_question3 || "बीएम हॉस्पिटल में किन आम ऑर्थोपेडिक स्थितियों का इलाज होता है?",
            answer: translations?.Nicu_answer3 || "हम गठिया, ऑस्टियोआर्थराइटिस, रूमेटॉयड आर्थराइटिस, फ्रैक्चर, टेंडोनाइटिस, बर्साइटिस, रोटेटर कफ की चोटें, शिन स्प्लिंट्स और कार्पल टनल सिंड्रोम का इलाज करते हैं।",
        },
        {
            question: translations?.Nicu_question4 || "क्या आप जॉइंट रिप्लेसमेंट सर्जरी करते हैं?",
            answer: translations?.Nicu_answer4 || "हाँ, हमारे अनुभवी ऑर्थोपेडिक सर्जन हिप, घुटने और कंधे की जॉइंट रिप्लेसमेंट सर्जरी करते हैं, वह भी एडवांस मिनिमली इनवेसिव तकनीकों के माध्यम से जिससे जल्दी रिकवरी होती है।",
        },
        {
            question: translations?.Nicu_question5 || "क्या फिजियोथेरेपी भी उपचार योजना का हिस्सा है?",
            answer: translations?.Nicu_answer5 || "बिल्कुल। हम फिजियोथेरेपी और रिहैबिलिटेशन को उपचार योजना में शामिल करते हैं ताकि ताकत, गति और दीर्घकालिक स्वास्थ्य बहाल हो सके।",
        },
        {
            question: translations?.Nicu_question6 || "ऑर्थोपेडिक समस्याओं के निदान के लिए कौन-कौन सी जांचें की जाती हैं?",
            answer: translations?.Nicu_answer6 || "हम एक्स-रे, एमआरआई, सीटी स्कैन, अल्ट्रासाउंड और ब्लड टेस्ट का उपयोग कर ऑर्थोपेडिक और जॉइंट से जुड़ी समस्याओं का निदान करते हैं।",
        },
        {
            question: translations?.Nicu_question7 || "बीएम हॉस्पिटल में फ्रैक्चर का इलाज कैसे किया जाता है?",
            answer: translations?.Nicu_answer7 || "हम फ्रैक्चर का इलाज प्लास्टर, स्प्लिंट, ब्रेस या सर्जिकल फिक्सेशन के माध्यम से करते हैं, जो चोट की गंभीरता पर निर्भर करता है। इसके बाद रिहैबिलिटेशन और चलने-फिरने की सहायता दी जाती है।",
        },
        {
            question: translations?.Nicu_question8 || "क्या ऑर्थोपेडिक समस्याओं का बिना सर्जरी इलाज संभव है?",
            answer: translations?.Nicu_answer8 || "हाँ। कई स्थितियों का इलाज दवाओं, फिजियोथेरेपी, आराम-आइस-कंप्रेशन-एलिवेशन (R.I.C.E.), इंजेक्शन और जीवनशैली में बदलाव से किया जाता है ताकि सर्जरी की आवश्यकता न पड़े।",
        },
        {
            question: translations?.Nicu_question9 || "गठिया के कौन-कौन से लक्षण हैं जिन पर ध्यान देना चाहिए?",
            answer: translations?.Nicu_answer9 || "जोड़ों में दर्द, अकड़न, सूजन, गति में कमी और सुबह के समय असहजता—इन लक्षणों को अनदेखा न करें। जल्दी इलाज से जोड़ों को नुकसान से बचाया जा सकता है।",
        },
        {
            question: translations?.Nicu_question10 || "मैं बीएम हॉस्पिटल में ऑर्थोपेडिक परामर्श कैसे बुक कर सकता हूँ?",
            answer: translations?.Nicu_answer10 || "हमारे ऑर्थोपेडिक हेल्पलाइन पर कॉल करें, सीधे हॉस्पिटल आएं या हमारी वेबसाइट के माध्यम से ऑनलाइन अपॉइंटमेंट बुक करें।",
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
