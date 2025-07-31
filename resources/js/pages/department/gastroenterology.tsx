import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer';
import HeaderHero from '../components/HeaderHero';
import Faq from '../components/faq';
import Hero from '@/assets/folderDepartments/Gastroenterology/Gastroenterology 24x7.svg';
import Condition from '@/assets/folderDepartments/Gastroenterology/Gastroenterology_Condition.svg';
import WhyChoose from '@/assets/folderDepartments/Gastroenterology/Gastroenterology_Why Choose Us.svg'
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";

export default function Gastroenterology() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.Gastroenterology || 'जठरांत्र / पाचन तंत्र रोग विशेषज्ञता',
            header: {
                title: translations?.Gastroenterology || 'जठरांत्र / पाचन तंत्र रोग विशेषज्ञता',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.Gastroenterology_heading || "स्वस्थ पाचन तंत्र के लिए उन्नत गैस्ट्रोएंटरोलॉजी देखभाल",
                subheading: translations?.Gastroenterology_subheading || "BM Hospital में एसिडिटी, अल्सर, लिवर रोग और पैंक्रियाज संबंधी समस्याओं के लिए विशेषज्ञ गैस्ट्रोएंटरोलॉजी देखभाल उपलब्ध है। हमारे अनुभवी विशेषज्ञ उन्नत तकनीक से सटीक निदान और न्यूनतम इनवेसिव उपचार प्रदान करते हैं।",
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.Gastroenterology_subheadingOne || "BM Hospital में पाचन समस्याओं, लिवर रोगों और एंडोस्कोपी के लिए विशेषज्ञ डॉक्टरों द्वारा उन्नत देखभाल प्रदान की जाती है।",
            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "Gastroenterology Department Image",
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
                    src: WhyChoose,
                    alt: "Gastroenterology",
                    classes: "rounded-xl "
                },
                content: {
                    title: translations?.Gastroenterology_whyChoose_content_title || "गैस्ट्रोएंटरोलॉजी के लिए BM Hospital क्यों चुनें?",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Gastroenterology_whyChoose_points_one || "अनुभवी गैस्ट्रोएंटरोलॉजिस्ट और लिवर विशेषज्ञ",
                        translations?.Gastroenterology_whyChoose_points_two || "एंडोस्कोपी, इमेजिंग और बायोप्सी जैसी उन्नत जांच सुविधाएं",
                        translations?.Gastroenterology_whyChoose_points_three || "दीर्घकालिक देखभाल के लिए व्यक्तिगत डाइट और जीवनशैली मार्गदर्शन",
                        translations?.Gastroenterology_whyChoose_points_four || "रोगी-केंद्रित दृष्टिकोण और विशेषज्ञ फॉलो-अप सेवा",
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
                    alt: "Gastroenterology",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Gastroenterology_conditions_title || "BM Hospital में प्रमुख गैस्ट्रोएंटरोलॉजी सेवाएं",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Gastroenterology_content_points_one || "एसिडिटी, गैस्ट्राइटिस, अल्सर और IBS का इलाज",
                        translations?.Gastroenterology_content_points_two || "लिवर सिरोसिस, हेपेटाइटिस और फैटी लिवर का प्रबंधन",
                        translations?.Gastroenterology_content_points_three || "पित्ताशय की पथरी, पैंक्रियाटाइटिस और बाइल डक्ट विकारों की देखभाल",
                        translations?.Gastroenterology_content_points_four || "एंडोस्कोपी और कोलोनोस्कोपी द्वारा निदान और लघु प्रक्रियाएं",
                        translations?.Gastroenterology_content_points_five || "पेट दर्द, कब्ज, दस्त और पाचन संबंधी रक्तस्राव का मूल्यांकन",
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
                    title: translations?.Gastroenterology_centersection_title || "BM Hospital में विशेषज्ञ गैस्ट्रोएंटरोलॉजी देखभाल – आपकी पाचन स्वास्थ्य, हमारी प्राथमिकता",
                    subtitle: translations?.Gastroenterology_centersection_subtitle || "सभी पाचन और लिवर रोगों के लिए उन्नत निदान और उपचार",

                }
            },
            threedSection: {
                heading: translations?.Gastroenterology_threedSection_heading || "BM Hospital में हमारा गैस्ट्रोएंटरोलॉजी विभाग सटीकता और देखभाल के साथ पाचन तंत्र के विकारों का निदान और उपचार करने के लिए समर्पित है। हमारे विशेषज्ञ डॉक्टर इसोफेगस, पेट, आंत, लिवर, पित्ताशय, बाइल डक्ट और पैंक्रियाज से संबंधित कई रोगों का इलाज करते हैं।",
                subheading: translations?.Gastroenterology_threedSection_subheading ||"हम सामान्य पाचन समस्याओं, इसोफेगस विकारों, पेट व आंत की समस्याओं, लिवर रोगों, पित्ताशय और बाइल डक्ट बीमारियों और पैंक्रियास की स्थिति के लिए उन्नत उपचार विकल्प प्रदान करते हैं। एंडोस्कोपी, इमेजिंग और बायोप्सी जैसे अत्याधुनिक उपकरणों का उपयोग करके सटीक निदान और लक्षित उपचार सुनिश्चित किया जाता है।",
                image: {
                    src: Hero,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.Gastroenterology_ctaSection_title || "आपका स्वास्थ्य हमारे लिए महत्वपूर्ण है।",
                subtitle: translations?.Gastroenterology_ctaSection_subtitle || "लक्षणों का इंतजार न करें।",
                description: translations?.Gastroenterology_ctaSection_description || "आज ही हमारे गैस्ट्रोएंटरोलॉजी विशेषज्ञों से अपॉइंटमेंट बुक करें!",

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
                footerNote: translations?.Gastroenterology_footerNote || "BM Hospital – समग्र गैस्ट्रोएंटरोलॉजी और पाचन स्वास्थ्य देखभाल में विश्वसनीय नाम।",
                button: {
                    label: "Book Appointment",
                    link: "/Gastroenterology",
                    backgroundColor: "#80CAC7",
                    hoverColor: "#1D4ED8",
                    textColor: "#FFFFFF"
                }
            }
        }
    ];


    const faqs = [
        {
            question: translations?.Gastroenterology_question || "गैस्ट्रोएंटरोलॉजी क्या है?",
            answer: translations?.Gastroenterology_answer || "गैस्ट्रोएंटरोलॉजी चिकित्सा की एक शाखा है जो पाचन तंत्र और इससे संबंधित अंगों जैसे इसोफेगस, पेट, आंत, लिवर, पित्ताशय और पैंक्रियास पर केंद्रित होती है।",
        },
        {
            question: translations?.Gastroenterology_question2 || "BM Hospital के गैस्ट्रोएंटरोलॉजी विभाग में किन रोगों का इलाज किया जाता है?",
            answer: translations?.Gastroenterology_answer2 || "हम एसिडिटी, गैस्ट्राइटिस, अल्सर, IBS, लिवर रोग, पित्ताशय की पथरी, पैंक्रियाटाइटिस, हेपेटाइटिस और अन्य पाचन एवं जठरांत्र संबंधी समस्याओं का इलाज करते हैं।",
        },
        {
            question: translations?.Gastroenterology_question3 || "गैस्ट्रोएंटरोलॉजिस्ट से कब मिलना चाहिए?",
            answer: translations?.Gastroenterology_answer3 || "अगर आपको लगातार पेट दर्द, गैस, दस्त, कब्ज, सीने में जलन या अनचाहा वजन कम हो रहा है, तो आपको गैस्ट्रोएंटरोलॉजिस्ट से परामर्श लेना चाहिए।",
        },
        {
            question: translations?.Gastroenterology_question4 || "क्या आप एंडोस्कोपी और कोलोनोस्कोपी सेवाएं प्रदान करते हैं?",
            answer: translations?.Gastroenterology_answer4 || "हाँ, BM Hospital में एंडोस्कोपी और कोलोनोस्कोपी की सुविधा उपलब्ध है जो आधुनिक उपकरणों और विशेषज्ञ डॉक्टरों द्वारा की जाती है।",
        },
        {
            question: translations?.Gastroenterology_question5 || "क्या BM Hospital में लिवर की समस्याओं का इलाज होता है?",
            answer: translations?.Gastroenterology_answer5 || "बिल्कुल। हमारे गैस्ट्रोएंटरोलॉजी विभाग में लिवर सिरोसिस, फैटी लिवर, हेपेटाइटिस जैसी बीमारियों का विशेषज्ञ डॉक्टरों द्वारा इलाज किया जाता है।",
        },
        {
            question: translations?.Gastroenterology_question6 || "पित्ताशय या बाइल डक्ट की समस्याओं के लक्षण क्या हैं?",
            answer: translations?.Gastroenterology_answer6 || "इसके सामान्य लक्षणों में ऊपरी दाएं पेट में दर्द, मतली, उल्टी, पीलिया और वसायुक्त भोजन के बाद अपच शामिल हैं।",
        },
        {
            question: translations?.Gastroenterology_question7 || "क्या इलाज के दौरान डाइट और जीवनशैली में बदलाव भी शामिल होता है?",
            answer: translations?.Gastroenterology_answer7 || "हाँ, हम लंबे समय तक पाचन स्वास्थ्य बनाए रखने और रोग की पुनरावृत्ति रोकने के लिए व्यक्तिगत डाइट और जीवनशैली सुझाव प्रदान करते हैं।",
        },
        {
            question: translations?.Gastroenterology_question8 || "क्या बच्चों के लिए भी गैस्ट्रोएंटरोलॉजी सेवाएं उपलब्ध हैं?",
            answer: translations?.Gastroenterology_answer8 || "हाँ, हम बच्चों और किशोरों में पाचन संबंधी समस्याओं के निदान और उपचार के लिए पीडियाट्रिक गैस्ट्रोएंटरोलॉजी सेवाएं प्रदान करते हैं।",
        },
        {
            question: translations?.Gastroenterology_question9 || "क्या गैस्ट्रोएंटरोलॉजी सेवाएं बीमा के तहत कवर होती हैं?",
            answer: translations?.Gastroenterology_answer9 || "अधिकांश प्रक्रियाएं और परामर्श स्वास्थ्य बीमा के अंतर्गत आते हैं। कृपया अपने बीमा प्रदाता या हमारे बिलिंग विभाग से पुष्टि करें।",
        },
        {
            question: translations?.Gastroenterology_question10 || "BM Hospital में गैस्ट्रोएंटरोलॉजिस्ट से अपॉइंटमेंट कैसे लें?",
            answer: translations?.Gastroenterology_answer10 || "आप हमारी रिसेप्शन पर कॉल कर सकते हैं, सीधे अस्पताल आ सकते हैं, या हमारी वेबसाइट के माध्यम से ऑनलाइन अपॉइंटमेंट बुक कर सकते हैं।",
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
