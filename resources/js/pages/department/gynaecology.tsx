import React, { useEffect, useState } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import HeaderHero from '../components/HeaderHero';
import Faq from '../components/faq';
import Hero from '@/assets/folderDepartments/Gynaecology/Gynaecology 24x7.svg';
import Condition from '@/assets/folderDepartments/Gynaecology/Gynaecology_Condition.svg';
import WhyChoose from '@/assets/folderDepartments/Gynaecology/Gynaecology_Why Choose Us.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";

export default function Gynecology() {
     const [translations, setTranslations] = useState({});
    
        const handletranslate = (data) => {
            setTranslations(data);
        }
    

    const HeaderData = [
        {
            department: translations?.Gynecology || 'स्त्री रोग विशेषज्ञता',
            header: {
                title: translations?.Gynecology || 'स्त्री रोग विशेषज्ञता',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.Gynecology_heading || "हर महिला की ज़रूरतों के अनुसार समर्पित स्त्री रोग देखभाल",
                subheading: translations?.Gynecology_subheading || "BM अस्पताल सभी आयु की महिलाओं के लिए उन्नत स्त्री रोग सेवाएं प्रदान करता है, जिसमें बांझपन, PCOS, मासिक धर्म विकार, रजोनिवृत्ति, गर्भाशय फाइब्रॉइड्स, सर्वाइकल कैंसर और गर्भावस्था से जुड़ी सभी देखभाल शामिल हैं। हमारे अनुभवी स्त्री रोग विशेषज्ञ व्यक्तिगत, सुरक्षित और समग्र समाधान स्नेह और गोपनीयता के साथ प्रदान करते हैं।",
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.Gynecology_subheadingOne || "हम अत्याधुनिक निदान और न्यूनतम इनवेसिव प्रक्रियाओं का उपयोग करके अधिक सुरक्षा, आराम और तेज़ रिकवरी सुनिश्चित करते हैं।",

            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "Gynecology Department Image",
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
                    alt: "Gynecology",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Gynecology_whyChoose_content_title || "BM अस्पताल में प्रमुख स्त्री रोग सेवाएँ",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Gynecology_whyChoose_points_one || "बांझपन, मासिक धर्म विकार, फाइब्रॉइड्स और ओवरी सिस्ट का इलाज",
                        translations?.Gynecology_whyChoose_points_two || "PCOS, एंडोमेट्रियोसिस और असामान्य रक्तस्राव की देखभाल",
                        translations?.Gynecology_whyChoose_points_three || "गर्भावस्था पूर्व, प्रसव और पश्चात देखभाल",
                        translations?.Gynecology_whyChoose_points_four || "PAP स्मीयर, HPV स्क्रीनिंग और सर्वाइकल कैंसर उपचार",
                        translations?.Gynecology_whyChoose_points_five || "उन्नत अल्ट्रासाउंड और लैप्रोस्कोपिक सर्जरी",
                        translations?.Gynecology_whyChoose_points_six || "रजोनिवृत्ति और हार्मोन असंतुलन का प्रबंधन",
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
                    alt: "Gynecology",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Gynecology_conditions_title || "BM अस्पताल को स्त्री रोग के लिए क्यों चुनें?",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Gynecology_content_points_one || "कुशल और सहानुभूतिपूर्ण स्त्री रोग विशेषज्ञ",
                        translations?.Gynecology_content_points_two || "रोगी-केंद्रित, गोपनीय और समग्र दृष्टिकोण",
                        translations?.Gynecology_content_points_three || "आधुनिक सुविधाएं और डायग्नोस्टिक लैब्स",
                        translations?.Gynecology_content_points_four || "परामर्श से लेकर रिकवरी तक सहायक देखभाल",
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
                    title: translations?.Gynecology_centersection_title || "BM अस्पताल में संपूर्ण स्त्री रोग देखभाल – हर जीवन चरण की महिलाओं के लिए समर्पित",
                    subtitle: translations?.Gynecology_centersection_subtitle || "सुरक्षित, व्यक्तिगत और करुणामयी देखभाल के लिए विशेषज्ञ स्त्री रोग सेवाएं",
                }
            },
            threedSection: {
                heading: translations?.Gynecology_threedSection_heading || "BM अस्पताल का स्त्री रोग विभाग महिलाओं को किशोरावस्था से लेकर मातृत्व और रजोनिवृत्ति तक उन्नत और व्यापक देखभाल प्रदान करता है। हमारे विशेषज्ञ गर्भाशय, अंडाशय, फैलोपियन ट्यूब, योनि और प्रजनन प्रणाली से संबंधित रोगों का निदान, इलाज और सहायता करते हैं।",
                subheading: translations?.Gynecology_threedSection_subheading || "हम बांझपन, PCOS, गर्भाशय फाइब्रॉइड्स, ओवरी सिस्ट, एंडोमेट्रियोसिस, असामान्य मासिक धर्म, सर्वाइकल कैंसर, गर्भावस्था देखभाल, नियमित स्त्री रोग परीक्षण और रजोनिवृत्ति जैसे लक्षणों का इलाज करने में विशेषज्ञता रखते हैं।",
                image: {
                    src: Hero,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.Gynecology_ctaSection_title || "आपका स्वास्थ्य महत्वपूर्ण है।",
                subtitle: translations?.Gynecology_ctaSection_subtitle || "लक्षणों का इंतजार न करें।",
                description: translations?.Gynecology_ctaSection_description || "आज ही अपनी स्त्री रोग विशेषज्ञ से परामर्श लें!",
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
                footerNote: translations?.Gynecology_footerNote || "BM अस्पताल – जीवनभर की स्त्री रोग और महिला स्वास्थ्य देखभाल के लिए आपका विश्वसनीय साथी।",
                button: {
                    label: "Book Appointment",
                    link: "/Gynecology",
                    backgroundColor: "#80CAC7",
                    hoverColor: "#1D4ED8",
                    textColor: "#FFFFFF"
                }
            }
        }
    ];

    const faqs = [
        {
            question: translations?.Gynecology_question || "बीएम हॉस्पिटल का न्यूरोलॉजी विभाग किन बीमारियों का इलाज करता है?",
            answer: translations?.Gynecology_answer || "हम मस्तिष्क, रीढ़ की हड्डी, नसों और मांसपेशियों से जुड़ी बीमारियों जैसे स्ट्रोक, मिर्गी, पार्किंसन, अल्जाइमर और ब्रेन इंजरी का निदान और उपचार करते हैं।",
        },
        {
            question: translations?.Gynecology_question2 || "मुझे न्यूरोलॉजिस्ट को कब दिखाना चाहिए?",
            answer: translations?.Gynecology_answer2 || "अगर आपको बार-बार सिरदर्द, याददाश्त की कमी, दौरे, सुन्नपन, संतुलन की समस्या या मांसपेशियों की कमजोरी महसूस होती है तो न्यूरोलॉजिस्ट से संपर्क करें।",
        },
        {
            question: translations?.Gynecology_question3 || "क्या स्ट्रोक के लिए इमरजेंसी देखभाल उपलब्ध है?",
            answer: translations?.Gynecology_answer3 || "हां, हमारी 24/7 आपातकालीन सेवाओं में स्ट्रोक की तुरंत पहचान, जांच और इलाज की सुविधा उपलब्ध है जिसमें आधुनिक इमेजिंग और आईसीयू सपोर्ट शामिल है।",
        },
        {
            question: translations?.Gynecology_question4 || "बीएम हॉस्पिटल में मिर्गी की जांच कैसे की जाती है?",
            answer: translations?.Gynecology_answer4 || "हम ईईजी (इलेक्ट्रोएन्सेफलोग्राम), ब्रेन स्कैन और क्लीनिकल जांचों का उपयोग करके मिर्गी के दौरे का सही तरीके से निदान और प्रबंधन करते हैं।",
        },
        {
            question: translations?.Gynecology_question5 || "पार्किंसन रोग के लिए कौन-कौन से इलाज उपलब्ध हैं?",
            answer: translations?.Gynecology_answer5 || "हमारे न्यूरोलॉजिस्ट पार्किंसन रोग के लिए व्यक्तिगत उपचार योजना प्रदान करते हैं जिसमें दवाइयाँ, फिजियोथेरेपी और मूवमेंट डिसऑर्डर का प्रबंधन शामिल है।",
        },
        {
            question: translations?.Gynecology_question6 || "क्या बीएम हॉस्पिटल में डिमेंशिया और अल्जाइमर का इलाज होता है?",
            answer: translations?.Gynecology_answer6 || "हां, हम अल्जाइमर और डिमेंशिया के लिए निदान, दवा प्रबंधन, कॉग्निटिव थेरेपी और परिवार परामर्श की सुविधा प्रदान करते हैं।",
        },
        {
            question: translations?.Gynecology_question7 || "न्यूरोलॉजी में कौन-कौन से डायग्नोस्टिक टेस्ट किए जाते हैं?",
            answer: translations?.Gynecology_answer7 || "हम एमआरआई, सीटी स्कैन, ईईजी, ईएमजी और नर्व कंडक्शन स्टडीज का उपयोग करके न्यूरोलॉजिकल बीमारियों का सटीक मूल्यांकन करते हैं।",
        },
        {
            question: translations?.Gynecology_question8 || "क्या न्यूरोलॉजिकल मरीजों के लिए पुनर्वास सेवा उपलब्ध है?",
            answer: translations?.Gynecology_answer8 || "हां, हम स्ट्रोक, ट्रॉमा और पुरानी बीमारियों के लिए फिजियोथेरेपी, स्पीच थेरेपी और कॉग्निटिव थेरेपी जैसी न्यूरोलॉजिकल रिहैबिलिटेशन सेवाएं प्रदान करते हैं।",
        },
        {
            question: translations?.Gynecology_question9 || "क्या बीएम हॉस्पिटल में बच्चों के लिए न्यूरोलॉजी देखभाल उपलब्ध है?",
            answer: translations?.Gynecology_answer9 || "बिलकुल। हम बच्चों के लिए न्यूरोलॉजी सेवाएं प्रदान करते हैं जैसे ऑटिज्म, मिर्गी, विकास में देरी और न्यूरोमस्कुलर डिसऑर्डर।",
        },
        {
            question: translations?.Gynecology_question10 || "मैं न्यूरोलॉजिस्ट से अपॉइंटमेंट कैसे ले सकता हूँ?",
            answer: translations?.Gynecology_answer10 || "आप हमारे रिसेप्शन पर कॉल कर सकते हैं, हॉस्पिटल आकर संपर्क कर सकते हैं, या हमारी वेबसाइट से ऑनलाइन बुकिंग कर सकते हैं।",
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
