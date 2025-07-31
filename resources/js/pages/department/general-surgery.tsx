import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer';
import HeaderHero from '../components/HeaderHero';
import Faq from '../components/faq';
import Hero from '@/assets/folderDepartments/General Surgery/General Surgery 24x7.svg';
import Condition from '@/assets/folderDepartments/General Surgery/General Surgery_Condition.svg';
import WhyChoose from '@/assets/folderDepartments/General Surgery/General Surgery_Why Choose Us.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";

export default function GeneralSurgery() {
  const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.General_Surgery || 'जनरल सर्जरी',
            header: {
                title: translations?.General_Surgery || 'जनरल सर्जरी',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.GeneralSurgery_heading || "सुरक्षित और प्रभावी उपचार के लिए उन्नत जनरल सर्जरी",
                subheading: translations?.GeneralSurgery_subheading || "BM Hospital में अपेंडिक्स, हर्निया, थायरॉयड, गॉलब्लैडर और सॉफ्ट टिशू के लिए विशेषज्ञ जनरल सर्जरी देखभाल उपलब्ध है। हम उन्नत और मिनिमली इनवेसिव तकनीकों के माध्यम से कम दर्द और तेज़ रिकवरी सुनिश्चित करते हैं।",
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.GeneralSurgery_subheadingOne || "BM Hospital में अपेंडिक्स, हर्निया, थायरॉयड, गॉलब्लैडर और सॉफ्ट टिशू के लिए विशेषज्ञ जनरल सर्जरी मिनिमली इनवेसिव तकनीकों से की जाती है।",
            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "General Surgery Department Image",
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
                    alt: "General Surgery",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.GeneralSurgery_whyChoose_content_title || "BM Hospital में जनरल सर्जरी की प्रमुख सेवाएं",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.GeneralSurgery_whyChoose_points_one || "अपेंडेक्टोमी, कोलेसिस्टेक्टोमी और हर्निया रिपेयर",
                        translations?.GeneralSurgery_whyChoose_points_two || "थायरॉयडेक्टोमी, मास्टेक्टोमी और आंत की सर्जरी",
                        translations?.GeneralSurgery_whyChoose_points_three || "त्वचा और सॉफ्ट टिशू की सर्जरी, फोड़ा निकालना और ग्राफ्ट",
                        translations?.GeneralSurgery_whyChoose_points_four || "रोग की प्रारंभिक पहचान के लिए बायोप्सी प्रक्रियाएं",
                        translations?.GeneralSurgery_whyChoose_points_five || "आधुनिक उपकरणों के साथ लैप्रोस्कोपिक और ओपन सर्जरी",
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
                    alt: "General Surgery",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.GeneralSurgery_conditions_title || "BM Hospital को जनरल सर्जरी के लिए क्यों चुनें?",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.GeneralSurgery_content_points_one || "प्रशिक्षित और अनुभवी जनरल सर्जनों की टीम",
                        translations?.GeneralSurgery_content_points_two || "तेज़ रिकवरी के लिए मिनिमली इनवेसिव तकनीकें",
                        translations?.GeneralSurgery_content_points_three || "फुल-टाइम एनेस्थीसिया और क्रिटिकल केयर सुविधा",
                        translations?.GeneralSurgery_content_points_four || "24x7 आपातकालीन सर्जरी की सुविधा",
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
                    title: translations?.GeneralSurgery_centersection_title || "BM Hospital में विशेषज्ञ जनरल सर्जरी – सुरक्षित, सटीक और मरीज-केन्द्रित देखभाल",
                    subtitle: translations?.GeneralSurgery_centersection_subtitle || "आपके विश्वास के योग्य, उन्नत और मिनिमली इनवेसिव जनरल सर्जरी",
                }
            },
            threedSection: {
                heading: translations?.GeneralSurgery_threedSection_heading || "BM Hospital का जनरल सर्जरी विभाग ओपन और मिनिमली इनवेसिव दोनों तकनीकों के साथ संपूर्ण शल्य चिकित्सा देखभाल प्रदान करता है। हमारे अनुभवी जनरल सर्जन पेट, पाचन तंत्र, एंडोक्राइन सिस्टम, त्वचा और मुलायम ऊतकों से संबंधित रोगों का प्रबंधन करते हैं।",
                subheading: translations?.GeneralSurgery_threedSection_subheading || "हम अपेंडेक्टोमी, हर्निया रिपेयर, गॉलब्लैडर रिमूवल (कोलेसिस्टेक्टोमी), थायरॉयडेक्टोमी, आंत की सर्जरी, मास्टेक्टोमी और बायोप्सी जैसी प्रक्रियाओं में विशेषज्ञ हैं। हमारी टीम आधुनिक लैप्रोस्कोपिक सर्जरी में प्रशिक्षित है और शीघ्र स्वस्थ होने के लिए ERAS प्रोटोकॉल का पालन करती है।",
                image: {
                    src: Hero,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.GeneralSurgery_ctaSection_title || "आपका स्वास्थ्य हमारे लिए महत्वपूर्ण है।",
                subtitle: translations?.GeneralSurgery_ctaSection_subtitle || "लक्षणों का इंतजार न करें।",
                description: translations?.GeneralSurgery_ctaSection_description || "आज ही अपनी सर्जरी कंसल्टेशन बुक करें!",
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
                footerNote: translations?.GeneralSurgery_footerNote || "BM Hospital – सुरक्षित, प्रभावी और सहानुभूतिपूर्ण जनरल सर्जरी देखभाल में भरोसे का नाम",
                button: {
                    label: "Book Appointment",
                    link: "/General Surgery",
                    backgroundColor: "#80CAC7",
                    hoverColor: "#1D4ED8",
                    textColor: "#FFFFFF"
                }
            }
        }
    ];

    const faqs = [
        {
            question: translations?.GeneralSurgery_question || "बीएम हॉस्पिटल का न्यूरोलॉजी विभाग किन बीमारियों का इलाज करता है?",
            answer: translations?.GeneralSurgery_answer || "हम मस्तिष्क, रीढ़ की हड्डी, नसों और मांसपेशियों से जुड़ी बीमारियों जैसे स्ट्रोक, मिर्गी, पार्किंसन, अल्जाइमर और ब्रेन इंजरी का निदान और उपचार करते हैं।",
        },
        {
            question: translations?.GeneralSurgery_question2 || "मुझे न्यूरोलॉजिस्ट को कब दिखाना चाहिए?",
            answer: translations?.GeneralSurgery_answer2 || "अगर आपको बार-बार सिरदर्द, याददाश्त की कमी, दौरे, सुन्नपन, संतुलन की समस्या या मांसपेशियों की कमजोरी महसूस होती है तो न्यूरोलॉजिस्ट से संपर्क करें।",
        },
        {
            question: translations?.GeneralSurgery_question3 || "क्या स्ट्रोक के लिए इमरजेंसी देखभाल उपलब्ध है?",
            answer: translations?.GeneralSurgery_answer3 || "हां, हमारी 24/7 आपातकालीन सेवाओं में स्ट्रोक की तुरंत पहचान, जांच और इलाज की सुविधा उपलब्ध है जिसमें आधुनिक इमेजिंग और आईसीयू सपोर्ट शामिल है।",
        },
        {
            question: translations?.GeneralSurgery_question4 || "बीएम हॉस्पिटल में मिर्गी की जांच कैसे की जाती है?",
            answer: translations?.GeneralSurgery_answer4 || "हम ईईजी (इलेक्ट्रोएन्सेफलोग्राम), ब्रेन स्कैन और क्लीनिकल जांचों का उपयोग करके मिर्गी के दौरे का सही तरीके से निदान और प्रबंधन करते हैं।",
        },
        {
            question: translations?.GeneralSurgery_question5 || "पार्किंसन रोग के लिए कौन-कौन से इलाज उपलब्ध हैं?",
            answer: translations?.GeneralSurgery_answer5 || "हमारे न्यूरोलॉजिस्ट पार्किंसन रोग के लिए व्यक्तिगत उपचार योजना प्रदान करते हैं जिसमें दवाइयाँ, फिजियोथेरेपी और मूवमेंट डिसऑर्डर का प्रबंधन शामिल है।",
        },
        {
            question: translations?.GeneralSurgery_question6 || "क्या बीएम हॉस्पिटल में डिमेंशिया और अल्जाइमर का इलाज होता है?",
            answer: translations?.GeneralSurgery_answer6 || "हां, हम अल्जाइमर और डिमेंशिया के लिए निदान, दवा प्रबंधन, कॉग्निटिव थेरेपी और परिवार परामर्श की सुविधा प्रदान करते हैं।",
        },
        {
            question: translations?.GeneralSurgery_question7 || "न्यूरोलॉजी में कौन-कौन से डायग्नोस्टिक टेस्ट किए जाते हैं?",
            answer: translations?.GeneralSurgery_answer7 || "हम एमआरआई, सीटी स्कैन, ईईजी, ईएमजी और नर्व कंडक्शन स्टडीज का उपयोग करके न्यूरोलॉजिकल बीमारियों का सटीक मूल्यांकन करते हैं।",
        },
        {
            question: translations?.GeneralSurgery_question8 || "क्या न्यूरोलॉजिकल मरीजों के लिए पुनर्वास सेवा उपलब्ध है?",
            answer: translations?.GeneralSurgery_answer8 || "हां, हम स्ट्रोक, ट्रॉमा और पुरानी बीमारियों के लिए फिजियोथेरेपी, स्पीच थेरेपी और कॉग्निटिव थेरेपी जैसी न्यूरोलॉजिकल रिहैबिलिटेशन सेवाएं प्रदान करते हैं।",
        },
        {
            question: translations?.GeneralSurgery_question9 || "क्या बीएम हॉस्पिटल में बच्चों के लिए न्यूरोलॉजी देखभाल उपलब्ध है?",
            answer: translations?.GeneralSurgery_answer9 || "बिलकुल। हम बच्चों के लिए न्यूरोलॉजी सेवाएं प्रदान करते हैं जैसे ऑटिज्म, मिर्गी, विकास में देरी और न्यूरोमस्कुलर डिसऑर्डर।",
        },
        {
            question: translations?.GeneralSurgery_question10 || "मैं न्यूरोलॉजिस्ट से अपॉइंटमेंट कैसे ले सकता हूँ?",
            answer: translations?.GeneralSurgery_answer10 || "आप हमारे रिसेप्शन पर कॉल कर सकते हैं, हॉस्पिटल आकर संपर्क कर सकते हैं, या हमारी वेबसाइट से ऑनलाइन बुकिंग कर सकते हैं।",
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
