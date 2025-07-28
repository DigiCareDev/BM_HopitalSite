import React, { useEffect, useState } from 'react';
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import HeaderHero from '../components/HeaderHero'
import Faq from '../components/faq';
import Whychoose from '../../assets/folderDepartments/Respiratory/Respiratory_Why Choose Us.svg';
import Condition from '../../assets/folderDepartments/Respiratory/Respiratory_Condition.svg';
import RespiratoryHero from '../../assets/folderDepartments/Respiratory/Respiratory 24x7.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";

export default function Respiratory() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.Respiratory || 'श्वसन संबंधी / साँस विशेषज्ञता',
            header: {
                title: translations?.Respiratory || 'श्वसन संबंधी / साँस विशेषज्ञता',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.Respiratory_heading || "फेफड़ों, वायुमार्ग और सांस की बीमारियों के लिए संपूर्ण रेस्पिरेटरी देखभाल",
                subheading: translations?.Respiratory_subheading || "बीएम अस्पताल का रेस्पिरेटरी विभाग अस्थमा, सीओपीडी, निमोनिया, टीबी और अन्य फेफड़ों की समस्याओं के लिए विशेष उपचार प्रदान करता है। हम सटीक निदान, पल्मोनरी रिहैब और नेबुलाइजेशन, ऑक्सीजन थेरेपी और वेंटिलेटर सपोर्ट जैसी उन्नत चिकित्सा सेवाएं प्रदान करते हैं। अनुभवी पल्मोनोलॉजिस्ट और अत्याधुनिक उपकरणों के साथ, हम आपकी सांस की हर समस्या का समग्र समाधान सुनिश्चित करते हैं।",
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.Respiratory_subheadingOne || "चेस्ट एक्स-रे और स्पायरोमेट्री से लेकर नॉन-इनवेसिव वेंटिलेशन और ब्रोंकोस्कोपी जैसी उन्नत चिकित्सा तक, हम हर मरीज के लिए सटीक निदान और उपचार प्रदान करते हैं। साथ ही, हम दीर्घकालिक रेस्पिरेटरी मैनेजमेंट और रिहैब की सुविधा भी देते हैं।",

            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "Respiratory Department Image",
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
                    alt: "Respiratory",
                    classes: "rounded-xl "
                },
                content: {
                    title: translations?.Respiratory_whyChoose_content_title || "रेस्पिरेटरी केयर के लिए बीएम अस्पताल क्यों चुनें?",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Respiratory_whyChoose_points_one || "अनुभवी पल्मोनोलॉजिस्ट और रेस्पिरेटरी थेरेपिस्ट",
                        translations?.Respiratory_whyChoose_points_two || "24x7 आपातकालीन रेस्पिरेटरी सहायता",
                        translations?.Respiratory_whyChoose_points_three || "उन्नत उपकरण और मॉनिटरिंग सेवाएं",
                        translations?.Respiratory_whyChoose_points_four || "मरीज शिक्षा और दीर्घकालिक पुनर्वास",
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
                    alt: "Respiratory",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.Respiratory_conditions_title || "बीएम अस्पताल में प्रमुख रेस्पिरेटरी सेवाएं",
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Respiratory_content_points_one || "अस्थमा, सीओपीडी, ब्रोंकाइटिस और निमोनिया का उपचार",
                        translations?.Respiratory_content_points_two || "टीबी और अन्य फेफड़ों के संक्रमण का प्रबंधन",
                        translations?.Respiratory_content_points_three || "रेस्पिरेटरी फेल्योर और पुरानी सांस की बीमारियों के लिए सहायता",
                        translations?.Respiratory_content_points_four || "उन्नत डायग्नोस्टिक्स: पीएफटी, एक्स-रे और सीटी स्कैन",
                        translations?.Respiratory_content_points_five || "ऑक्सीजन थेरेपी, वेंटिलेटर सहायता और नेबुलाइजेशन",

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
                    title: translations?.Respiratory_centersection_title || "बीएम अस्पताल में उन्नत रेस्पिरेटरी देखभाल – फेफड़ों और श्वास रोगों के लिए विशेषज्ञ उपचार",
                    subtitle: translations?.Respiratory_centersection_subtitle || "फेफड़ों के संक्रमण, सांस की समस्याओं और पुरानी बीमारियों के लिए विशेष सेवाएं",

                }
            },
            threedSection: {
                heading: translations?.Respiratory_threedSection_heading || "बीएम अस्पताल का रेस्पिरेटरी विभाग फेफड़ों और सांस से संबंधित सभी रोगों का निदान और उपचार करता है। हमारे अनुभवी पल्मोनोलॉजिस्ट, रेस्पिरेटरी थेरेपिस्ट और क्रिटिकल केयर विशेषज्ञ व्यक्तिगत देखभाल प्रदान करते हैं।",
                subheading: translations?.Respiratory_threedSection_subheading || "हम अस्थमा, सीओपीडी, निमोनिया, ब्रोंकाइटिस, टीबी और रेस्पिरेटरी फेल्योर जैसी बीमारियों का इलाज करते हैं। हमारी देखभाल प्रणाली साक्ष्य-आधारित और रोगी-केंद्रित है।",
                image: {
                    src: RespiratoryHero,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.Respiratory_ctaSection_title || "आपका स्वास्थ्य हमारे लिए महत्वपूर्ण है।",
                subtitle: translations?.Respiratory_ctaSection_subtitle || "लक्षणों का इंतज़ार न करें।",
                description: translations?.Respiratory_ctaSection_description || "सांस लेने में तकलीफ हो रही है? अभी हमारे रेस्पिरेटरी विशेषज्ञों से संपर्क करें!",

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
                footerNote: translations?.Respiratory_footerNote || "बीएम अस्पताल – स्वस्थ फेफड़ों और बेहतर जीवन के लिए अग्रणी रेस्पिरेटरी देखभाल।",

                button: {
                    label: "Book Appointment",
                    link: "/Respiratory",
                    backgroundColor: "#80CAC7",
                    hoverColor: "#1D4ED8",
                    textColor: "#FFFFFF"
                }
            }
        }
    ];

    const faqs = [
        {
            question: translations?.Respiratory_question || "बीएम अस्पताल का रेस्पिरेटरी विभाग किन रोगों का इलाज करता है?",
            answer: translations?.Respiratory_answer || "हम अस्थमा, सीओपीडी, निमोनिया, टीबी, ब्रोंकाइटिस, सांस की बीमारियाँ और सांस लेने में विफलता जैसी कई श्वसन स्थितियों का इलाज करते हैं।",
        },
        {
            question: translations?.Respiratory_question2 || "मुझे रेस्पिरेटरी स्पेशलिस्ट को कब दिखाना चाहिए?",
            answer: translations?.Respiratory_answer2 || "यदि आपको सांस फूलना, लगातार खांसी, घरघराहट, सीने में जकड़न या बार-बार फेफड़ों का संक्रमण होता है, तो तुरंत श्वसन विशेषज्ञ से मिलें।",
        },
        {
            question: translations?.Respiratory_question3 || "रेस्पिरेटरी स्थिति का मूल्यांकन कैसे किया जाता है?",
            answer: translations?.Respiratory_answer3 || "हम Pulmonary Function Test (PFT), चेस्ट एक्स-रे, सीटी स्कैन, ब्रोंकोस्कोपी और ऑक्सीजन मॉनिटरिंग जैसी तकनीकों का उपयोग करते हैं।",
        },
        {
            question: translations?.Respiratory_question4 || "क्या अस्थमा का इलाज संभव है?",
            answer: translations?.Respiratory_answer4 || "अस्थमा एक पुरानी स्थिति है, लेकिन इसे इनहेलर, दवाओं, जीवनशैली में बदलाव और नियमित निगरानी से अच्छी तरह से नियंत्रित किया जा सकता है।",
        },
        {
            question: translations?.Respiratory_question5 || "सीओपीडी क्या है और इसका इलाज कैसे किया जाता है?",
            answer: translations?.Respiratory_answer5 || "सीओपीडी (क्रॉनिक ऑब्स्ट्रक्टिव पल्मोनरी डिजीज) एक प्रगतिशील फेफड़ों की बीमारी है। हम दवाएं, ऑक्सीजन थेरेपी और पल्मोनरी रिहैब प्रदान करते हैं।",
        },
        {
            question: translations?.Respiratory_question6 || "बीएम अस्पताल में निमोनिया का इलाज कैसे होता है?",
            answer: translations?.Respiratory_answer6 || "हम एंटीबायोटिक थेरेपी, नेबुलाइजेशन, ऑक्सीजन सपोर्ट और गंभीर मामलों में अस्पताल में भर्ती जैसी सेवाएं प्रदान करते हैं।",
        },
        {
            question: translations?.Respiratory_question7 || "क्या आप रेस्पिरेटरी फेल्योर के लिए इमरजेंसी केयर देते हैं?",
            answer: translations?.Respiratory_answer7 || "हां, हमारी आईसीयू में नॉन-इनवेसिव और इनवेसिव वेंटिलेटर की सुविधा है, जो गंभीर श्वसन संकट से पीड़ित मरीजों के लिए उपलब्ध है।",
        },
        {
            question: translations?.Respiratory_question8 || "क्या धूम्रपान से श्वसन रोग हो सकते हैं?",
            answer: translations?.Respiratory_answer8 || "बिलकुल। धूम्रपान फेफड़ों के कैंसर, सीओपीडी और पुरानी ब्रोंकाइटिस का मुख्य कारण है। हम धूम्रपान छोड़ने में भी सहायता करते हैं।",
        },
        {
            question: translations?.Respiratory_question9 || "क्या होम केयर मरीजों के लिए ऑक्सीजन थेरेपी उपलब्ध है?",
            answer: translations?.Respiratory_answer9 || "हां। हम घर पर ऑक्सीजन थेरेपी के लिए मार्गदर्शन और आवश्यक सुविधाएं उपलब्ध कराते हैं।",
        },
        {
            question: translations?.Respiratory_question10 || "रेस्पिरेटरी स्पेशलिस्ट से अपॉइंटमेंट कैसे लें?",
            answer: translations?.Respiratory_answer10 || "आप हमारे हेल्पलाइन पर कॉल कर सकते हैं, अस्पताल आ सकते हैं या ऑनलाइन अपॉइंटमेंट बुक कर सकते हैं।",
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
