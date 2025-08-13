    import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer';
import HeaderHero from '../components/HeaderHero';
import Faq from '../components/faq';
import tweentyfour from '@/assets/ENT/ENT 24x7.svg';
import Condition from '@/assets/ENT/ENT_Condition.svg';
import WhyChooseUs from '@/assets/ENT/ENT_Why Choose Us.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";

export default function Ent() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.ENT || 'कान, नाक और गला',
            header: {
                title: translations?.ENT || 'कान, नाक और गला',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.ENT_heading || 'कान, नाक और गले के स्वास्थ्य के लिए संपूर्ण ईएनटी देखभाल',
                subheading: translations?.ENT_subheading || "बीएम हॉस्पिटल पाचन विकारों, यकृत रोगों, एसिडिटी, अल्सर और अग्न्याशय संबंधी समस्याओं के लिए विशेषज्ञ गैस्ट्रोएंटरोलॉजी देखभाल प्रदान करता है। अनुभवी गैस्ट्रोएंटेरोलॉजिस्ट की हमारी टीम सटीक निदान, एंडोस्कोपी और न्यूनतम इनवेसिव उपचार के लिए उन्नत तकनीक का उपयोग करती है। पुराने पेट दर्द से लेकर जटिल यकृत रोगों तक, हम आपकी आवश्यकताओं के अनुरूप दयालु और व्यापक जठरांत्र देखभाल प्रदान करते हैं।",
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.ENT_subheadingOne || "बीएम हॉस्पिटल सभी उम्र के लोगों के लिए उन्नत ईएनटी (कान, नाक, गला) देखभाल प्रदान करता है। हमारे ईएनटी विशेषज्ञ आधुनिक नैदानिक उपकरणों और न्यूनतम आक्रामक प्रक्रियाओं का उपयोग करके श्रवण हानि, साइनसाइटिस, टॉन्सिलाइटिस, स्वर संबंधी समस्याओं, एलर्जी और संतुलन संबंधी विकारों का इलाज करते हैं। चाहे साधारण संक्रमण हो या जटिल नाक की सर्जरी, हम त्वरित राहत और बेहतर जीवन के लिए विशेषज्ञ देखभाल सुनिश्चित करते हैं। आज ही अपना ईएनटी परामर्श बुक करें!",

            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "ENT Department Image",
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
                    src: WhyChooseUs,
                    alt: "ENT",
                    classes: "rounded-xl "
                },
                content: {
                    title: translations?.ENT_whyChoose_content_title || "बीएम अस्पताल का ईएनटी विभाग क्यों चुनें?",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.ENT_whyChoose_points_one || "अनुभवी ईएनटी विशेषज्ञ",
                        translations?.ENT_whyChoose_points_two || "आधुनिक उपकरण और नैदानिक उपकरण",
                        translations?.ENT_whyChoose_points_three || "व्यक्तिगत उपचार योजनाएँ",
                        translations?.ENT_whyChoose_points_four || "सभी ईएनटी चिंताओं के लिए व्यापक देखभाल"
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
                    alt: "ENT",
                    classes: "rounded-xl "
                },
                content: {
                    title: translations?.ENT_conditions_title || "बीएम अस्पताल में प्रमुख ईएनटी सेवाएं",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.ENT_content_points_one || "कान विकारों का निदान और उपचार",
                        translations?.ENT_content_points_two || "नाक और साइनस की स्थितियों के लिए चिकित्सा और शल्य चिकित्सा देखभाल",
                        translations?.ENT_content_points_three || "Voice, speech, and throat treatments",
                        translations?.ENT_content_points_four || "संक्रमण, ट्यूमर और थायरॉइड समस्याओं का प्रबंधन",
                        translations?.ENT_content_points_five || "उन्नत तकनीकों का उपयोग करके विशेषज्ञ ईएनटी सर्जरी"
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
                    title: translations?.ENT_centersection_title || "बीएम अस्पताल में व्यापक ईएनटी देखभाल - कान, नाक और गले के स्वास्थ्य के लिए विशेषज्ञ समाधान",
                    subtitle: translations?.ENT_centersection_subtitle || "हर उम्र के लिए उन्नत ईएनटी सेवाएं, करुणा और सटीकता के साथ प्रदान की जाती हैं"
                }
            },
            threedSection: {
                heading: translations?.ENT_threedSection_heading || "बीएम अस्पताल में, हमारा ईएनटी (कान, नाक और गला) विभाग सभी ईएनटी-संबंधी विकारों के लिए विशेषज्ञ निदान, उपचार और शल्य चिकित्सा देखभाल प्रदान करता है। हमारे अनुभवी ईएनटी विशेषज्ञ नवीनतम नैदानिक उपकरणों और न्यूनतम आक्रामक तकनीकों का उपयोग करके सभी उम्र के रोगियों को व्यक्तिगत देखभाल प्रदान करते हैं।",
                subheading: translations?.ENT_threedSection_heading || "We manage a wide range of ENT conditions including Hearing Loss, Tinnitus, Vertigo, Ear Infections, Otosclerosis, and Meniere’s Disease. Nasal and sinus problems such as Sinusitis, Allergic Rhinitis, Nosebleeds, and Nasal Obstruction are treated with precision and care. Throat-related conditions like Tonsillitis, Sore Throat, Laryngitis, Dysphonia, Aphonia, Swallowing Disorders, and Throat Cancer are handled with a multi-disciplinary approach.",
                image: {
                    src: tweentyfour,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.ENT_ctaSection_title || "आपका स्वास्थ्य मायने रखता है",
                subtitle: translations?.ENT_ctaSection_subtitle || "लक्षणों का इंतज़ार न करें.",
                description: translations?.ENT_ctaSection_description || "आज ही हमारे ईएनटी विभाग में अपॉइंटमेंट बुक करें।",
                details: {
                    address: {
                        label: translations?.address_label || 'दौरा',
                        value: translations?.address_value || "बीएम अस्पताल, बाराबंकी"
                    },
                    phone: {
                        label: translations?.phone_label || "कॉल",
                        value: "+91 7318000751 – 55",
                        link: "tel:+917318000751"
                    }
                },
                footerNote: translations?.ENT_footerNote || "बीएम अस्पताल - संपूर्ण ईएनटी देखभाल और कल्याण में आपका विश्वसनीय भागीदार।",
                button: {
                    label: "Book Appointment",
                    link: "/cardiology",
                    backgroundColor: "#80CAC7",
                    hoverColor: "#1D4ED8",
                    textColor: "#FFFFFF"
                }
            }
        }
    ];

    const faqs = [
        {
            question: translations?.ENT_question || 'बीएम अस्पताल में ईएनटी विभाग द्वारा किन स्थितियों का इलाज किया जाता है?',
            answer: translations?.ENT_question || 'हमारे ईएनटी विशेषज्ञ श्रवण हानि, साइनसाइटिस, टॉन्सिलिटिस, चक्कर आना, टिनिटस, नाक की रुकावट, लैरींगाइटिस, थायरॉयड विकार और सिर और गर्दन के कैंसर का इलाज करते हैं।',
        },
        {
            question: translations?.ENT_question2 || 'क्या आप ईएनटी विकारों के लिए शल्य चिकित्सा उपचार प्रदान करते हैं?',
            answer: translations?.ENT_question2 || 'हां, बीएम अस्पताल न्यूनतम आक्रामक और उन्नत ईएनटी सर्जरी दोनों प्रदान करता है, जिसमें टॉन्सिल, नाक पॉलीप्स, थायरॉयड और चेहरे के पुनर्निर्माण की प्रक्रियाएं शामिल हैं।',
        },
        {
            question: translations?.ENT_question3 || 'क्या बच्चों और बुजुर्ग मरीजों को बीएम अस्पताल में ईएनटी देखभाल मिल सकती है?',
            answer: translations?.ENT_question3 || 'बिल्कुल। हम बच्चों, वयस्कों और बुज़ुर्ग मरीज़ों के लिए विशेष ईएनटी देखभाल प्रदान करते हैं, और सभी के लिए सुरक्षित, आयु-उपयुक्त उपचार योजनाएँ सुनिश्चित करते हैं।',
        },
        {
            question: translations?.ENT_question4 || 'मैं ईएनटी विशेषज्ञ के साथ अपॉइंटमेंट कैसे बुक कर सकता हूं?',
            answer: translations?.ENT_question4 || 'आप अपने पसंदीदा समय पर हमारे ईएनटी विशेषज्ञ के साथ अपॉइंटमेंट बुक करने के लिए हमारे अस्पताल के रिसेप्शन पर कॉल कर सकते हैं या हमारी वेबसाइट पर जा सकते हैं।',
        },
        {
            question: translations?.ENT_question5 || 'क्या आप बीएम अस्पताल में श्रवण परीक्षण और श्रवण सहायता सहायता प्रदान करते हैं?',
            answer: translations?.ENT_question5 || 'हां, हम व्यापक ऑडियोलॉजी सेवाएं प्रदान करते हैं, जिनमें श्रवण मूल्यांकन, श्रवण यंत्र फिटिंग, और आयु-संबंधी या शोर-जनित श्रवण हानि का प्रबंधन शामिल है।',
        },
        {
            question: translations?.ENT_question6 || 'वे कौन से सामान्य लक्षण हैं जिनके आधार पर मुझे ईएनटी विशेषज्ञ से मिलना चाहिए?',
            answer: translations?.ENT_question6 || 'लगातार गले में खराश, नाक बंद होना, कान से पानी आना, चक्कर आना, खर्राटे आना, आवाज में बदलाव या निगलने में कठिनाई जैसे लक्षणों का मूल्यांकन ईएनटी विशेषज्ञ से कराया जाना चाहिए।',
        },
        {
            question: translations?.ENT_question7 || 'क्या बीएम अस्पताल में एंडोस्कोपिक साइनस सर्जरी उपलब्ध है?',
            answer: translations?.ENT_question7 || 'हां, हम क्रोनिक साइनसाइटिस और नाक के पॉलिप्स के लिए एंडोस्कोपिक साइनस सर्जरी में विशेषज्ञ हैं, जो तेजी से रिकवरी के साथ सटीक, निशान-रहित प्रक्रिया सुनिश्चित करते हैं।',
        },
        {
            question: translations?.ENT_question8 || 'क्या ईएनटी विभाग एलर्जी से संबंधित समस्याओं का समाधान करता है?',
            answer: translations?.ENT_question8 || 'बिल्कुल। हमारे ईएनटी विशेषज्ञ अनुकूलित चिकित्सा और जीवनशैली समाधानों के साथ एलर्जिक राइनाइटिस, नाक बंद होने और मौसमी एलर्जी का निदान और उपचार करते हैं।',
        },
        {
            question: translations?.ENT_question9 || 'क्या आपके ईएनटी विशेषज्ञ आवाज और भाषण विकारों का इलाज करते हैं?',
            answer: translations?.ENT_question9 || 'हां, हम आवाज संबंधी विकार, स्वरभंग, स्वरयंत्र संबंधी समस्याओं का प्रबंधन करते हैं, तथा पूर्ण देखभाल और पुनर्वास के लिए भाषण चिकित्सकों के साथ सहयोग करते हैं।',
        },
        {
            question: translations?.ENT_question10 || 'क्या आप आपातकालीन ईएनटी सेवाएं प्रदान करते हैं?',
            answer: translations?.ENT_question10 || 'बीएम अस्पताल का ईएनटी विभाग नाक से खून आना, बाहरी वस्तु निकालना, वायुमार्ग में रुकावट या अचानक सुनने की क्षमता में कमी जैसी आपात स्थितियों के लिए 24/7 उपलब्ध है।',
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
