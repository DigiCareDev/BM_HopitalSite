import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import HeaderHero from '../components/HeaderHero'
import Faq from '../components/faq';
import Hero from '@/assets/folderDepartments/Neurology/Neurology 24x7.svg';
import Condition from '@/assets/folderDepartments/Neurology/Neurology_Condition.svg';
import WhyChoose from '@/assets/folderDepartments/Neurology/Neurology_Why Choose Us.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";

export default function Neurology() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.Neurology || 'तंत्रिका / नायु विशेषज्ञता',
            header: {
                title: translations?.Neurology || 'तंत्रिका / नायु विशेषज्ञता',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.Neurology_heading || "मस्तिष्क, रीढ़ और नसों की बीमारियों के लिए उन्नत न्यूरोलॉजी देखभाल",
                subheading: translations?.Neurology_subheading || "बीएम हॉस्पिटल में स्ट्रोक, मिर्गी, पार्किंसन, डिमेंशिया, माइग्रेन, मल्टीपल स्क्लेरोसिस, न्यूरोपैथी और जटिल ब्रेन-स्पाइन डिसऑर्डर्स के लिए उन्नत न्यूरोलॉजी सेवाएं उपलब्ध हैं। आधुनिक डायग्नोस्टिक्स, न्यूरोइमेजिंग और विशेषज्ञ न्यूरोलॉजिस्ट की मदद से हम सटीक निदान, समय पर उपचार और सहानुभूतिपूर्ण देखभाल प्रदान करते हैं। हमारी टीम सभी उम्र के रोगियों के लिए 24x7 इमरजेंसी और इनपेशेंट सेवाओं के साथ व्यापक न्यूरोलॉजिकल स्वास्थ्य सुनिश्चित करती है।",
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.Neurology_subheadingOne || "हमारी न्यूरोलॉजी टीम आधुनिक इमेजिंग, ईईजी, ईएमजी और पुनर्वास सेवाओं से समर्थित है, जिससे समग्र रोगी देखभाल और शीघ्र रिकवरी सुनिश्चित होती है।",

            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "Neurology Department Image",
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
                    alt: "Neurology",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Neurology_whyChoose_content_title || "न्यूरोलॉजी के लिए बीएम हॉस्पिटल क्यों चुनें?",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Neurology_whyChoose_points_one || "अनुभवी न्यूरोलॉजिस्ट और न्यूरोफिजिशियन",
                        translations?.Neurology_whyChoose_points_two || "उन्नत डायग्नोस्टिक्स: ईईजी, एमआरआई, सीटी, ईएमजी",
                        translations?.Neurology_whyChoose_points_three || "24/7 स्ट्रोक और आपातकालीन न्यूरोलॉजी देखभाल",
                        translations?.Neurology_whyChoose_points_four || "व्यक्तिगत उपचार योजनाओं के साथ सहानुभूतिपूर्ण देखभाल",
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
                    alt: "Neurology",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Neurology_conditions_title || "बीएम हॉस्पिटल में प्रमुख न्यूरोलॉजी सेवाएं",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Neurology_content_points_one || "स्ट्रोक देखभाल, सिरदर्द प्रबंधन और मिर्गी का इलाज",
                        translations?.Neurology_content_points_two || "पार्किंसन और अल्जाइमर जैसे न्यूरोडिजेनेरेटिव रोगों का प्रबंधन",
                        translations?.Neurology_content_points_three || "दिमाग की चोट, न्यूरोमस्कुलर डिसऑर्डर और ब्रेन ट्यूमर की देखभाल",
                        translations?.Neurology_content_points_four || "डिमेंशिया, अफेसिया और ऑटिज्म स्पेक्ट्रम डिसऑर्डर का इलाज",
                        translations?.Neurology_content_points_five || "स्ट्रोक के बाद और न्यूरोलॉजिकल रिहैबिलिटेशन सपोर्ट",

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
                    title: translations?.Neurology_centersection_title ||"बीएम हॉस्पिटल में उन्नत न्यूरोलॉजी देखभाल – मस्तिष्क, रीढ़ और नसों के स्वास्थ्य की बहाली",
                    subtitle: translations?.Neurology_centersection_subtitle ||"व्यापक निदान, उपचार और पुनर्वास के लिए विशेष न्यूरोलॉजी सेवाएं",
                }
            },
            threedSection: {
                heading: translations?.Neurology_threedSection_heading || "बीएम हॉस्पिटल का न्यूरोलॉजी विभाग मस्तिष्क, रीढ़ की हड्डी, नसों और मांसपेशियों से संबंधित विकारों के निदान और उपचार के लिए समर्पित है। हमारे अनुभवी न्यूरोलॉजिस्ट अत्याधुनिक उपकरणों और साक्ष्य-आधारित तरीकों का उपयोग करके सभी आयु वर्ग के रोगियों के लिए सटीक और व्यक्तिगत न्यूरोलॉजिकल देखभाल प्रदान करते हैं।",
                subheading: translations?.Neurology_threedSection_subheading || "हम स्ट्रोक, मिर्गी, पार्किंसन, अल्जाइमर, मल्टीपल स्क्लेरोसिस, ब्रेन इंजरी और न्यूरोमस्कुलर डिसऑर्डर जैसे अनेक न्यूरोलॉजिकल रोगों का इलाज करते हैं। ब्रेन ट्यूमर, स्पाइनल मस्कुलर एट्रॉफी और डिमेंशिया जैसे जटिल मामलों में समय पर निदान और उपचार महत्वपूर्ण है।",
                image: {
                    src: Hero,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.Neurology_ctaSection_title || "आपका स्वास्थ्य हमारे लिए महत्वपूर्ण है।",
                subtitle: translations?.Neurology_ctaSection_subtitle || "लक्षणों का इंतजार न करें।",
                description: translations?.Neurology_ctaSection_description || "आज ही न्यूरोलॉजी परामर्श बुक करें और अपने मस्तिष्क एवं नसों के स्वास्थ्य की रक्षा करें।",
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
                footerNote: translations?.Neurology_footerNote || "बीएम हॉस्पिटल – विशेषज्ञ न्यूरोलॉजी देखभाल और पुनर्वास में आपका भरोसेमंद साथी।",

                button: {
                    label: translations?.cta_label || 'अपॉइंटमेंट बुक करें',
                    link: "/Neurology",
                    backgroundColor: "#80CAC7",
                    hoverColor: "#1D4ED8",
                    textColor: "#FFFFFF"
                }
            }
        }
    ];

    const faqs = [
        {
            question: translations?.Neurology_question || "बीएम हॉस्पिटल का न्यूरोलॉजी विभाग किन बीमारियों का इलाज करता है?",
            answer: translations?.Neurology_answer || "हम मस्तिष्क, रीढ़ की हड्डी, नसों और मांसपेशियों से जुड़ी बीमारियों जैसे स्ट्रोक, मिर्गी, पार्किंसन, अल्जाइमर और ब्रेन इंजरी का निदान और उपचार करते हैं।",
        },
        {
            question: translations?.Neurology_question2 || "मुझे न्यूरोलॉजिस्ट को कब दिखाना चाहिए?",
            answer: translations?.Neurology_answer2 || "अगर आपको बार-बार सिरदर्द, याददाश्त की कमी, दौरे, सुन्नपन, संतुलन की समस्या या मांसपेशियों की कमजोरी महसूस होती है तो न्यूरोलॉजिस्ट से संपर्क करें।",
        },
        {
            question: translations?.Neurology_question3 || "क्या स्ट्रोक के लिए इमरजेंसी देखभाल उपलब्ध है?",
            answer: translations?.Neurology_answer3 || "हां, हमारी 24/7 आपातकालीन सेवाओं में स्ट्रोक की तुरंत पहचान, जांच और इलाज की सुविधा उपलब्ध है जिसमें आधुनिक इमेजिंग और आईसीयू सपोर्ट शामिल है।",
        },
        {
            question: translations?.Neurology_question4 || "बीएम हॉस्पिटल में मिर्गी की जांच कैसे की जाती है?",
            answer: translations?.Neurology_answer4 || "हम ईईजी (इलेक्ट्रोएन्सेफलोग्राम), ब्रेन स्कैन और क्लीनिकल जांचों का उपयोग करके मिर्गी के दौरे का सही तरीके से निदान और प्रबंधन करते हैं।",
        },
        {
            question: translations?.Neurology_question5 || "पार्किंसन रोग के लिए कौन-कौन से इलाज उपलब्ध हैं?",
            answer: translations?.Neurology_answer5 || "हमारे न्यूरोलॉजिस्ट पार्किंसन रोग के लिए व्यक्तिगत उपचार योजना प्रदान करते हैं जिसमें दवाइयाँ, फिजियोथेरेपी और मूवमेंट डिसऑर्डर का प्रबंधन शामिल है।",
        },
        {
            question: translations?.Neurology_question6 || "क्या बीएम हॉस्पिटल में डिमेंशिया और अल्जाइमर का इलाज होता है?",
            answer: translations?.Neurology_answer6 || "हां, हम अल्जाइमर और डिमेंशिया के लिए निदान, दवा प्रबंधन, कॉग्निटिव थेरेपी और परिवार परामर्श की सुविधा प्रदान करते हैं।",
        },
        {
            question: translations?.Neurology_question7 || "न्यूरोलॉजी में कौन-कौन से डायग्नोस्टिक टेस्ट किए जाते हैं?",
            answer: translations?.Neurology_answer7 || "हम एमआरआई, सीटी स्कैन, ईईजी, ईएमजी और नर्व कंडक्शन स्टडीज का उपयोग करके न्यूरोलॉजिकल बीमारियों का सटीक मूल्यांकन करते हैं।",
        },
        {
            question: translations?.Neurology_question8 || "क्या न्यूरोलॉजिकल मरीजों के लिए पुनर्वास सेवा उपलब्ध है?",
            answer: translations?.Neurology_answer8 || "हां, हम स्ट्रोक, ट्रॉमा और पुरानी बीमारियों के लिए फिजियोथेरेपी, स्पीच थेरेपी और कॉग्निटिव थेरेपी जैसी न्यूरोलॉजिकल रिहैबिलिटेशन सेवाएं प्रदान करते हैं।",
        },
        {
            question: translations?.Neurology_question9 || "क्या बीएम हॉस्पिटल में बच्चों के लिए न्यूरोलॉजी देखभाल उपलब्ध है?",
            answer: translations?.Neurology_answer9 || "बिलकुल। हम बच्चों के लिए न्यूरोलॉजी सेवाएं प्रदान करते हैं जैसे ऑटिज्म, मिर्गी, विकास में देरी और न्यूरोमस्कुलर डिसऑर्डर।",
        },
        {
            question: translations?.Neurology_question10 || "मैं न्यूरोलॉजिस्ट से अपॉइंटमेंट कैसे ले सकता हूँ?",
            answer: translations?.Neurology_answer10 || "आप हमारे रिसेप्शन पर कॉल कर सकते हैं, हॉस्पिटल आकर संपर्क कर सकते हैं, या हमारी वेबसाइट से ऑनलाइन बुकिंग कर सकते हैं।",
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
