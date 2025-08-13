import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import HeaderHero from '../components/HeaderHero'
import Faq from '../components/faq';
import Care from '@/assets/care.jpg';
import Hero from '@/assets/Cardiology 24x7.svg';
import Center from '@/assets/Cardiology_Condition.svg';
import WhyChoose from '@/assets/Cardiology_Why Choose us.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";



export default function cardiology() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.Cardiology || 'हृदय रोग विशेषज्ञता ',
            header: {
                title: translations?.Cardiology || 'हृदय रोग विशेषज्ञता ',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.Cardiology_heading || 'मज़बूत और स्वस्थ हृदय के लिए विशेषज्ञ कार्डियोलॉजी देखभाल',
                subheading: translations?.Cardiology_subheading || "बीएम अस्पताल हृदय रोग, अतालता और हृदय संबंधी आपात स्थितियों के लिए विशेषज्ञ डॉक्टरों और आधुनिक तकनीक के साथ उन्नत कार्डियोलॉजी देखभाल प्रदान करता है।",
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.Cardiology_subheadingOne || "बीएम अस्पताल हृदय रोग, अतालता और हृदय संबंधी आपात स्थितियों के लिए विशेषज्ञ डॉक्टरों और आधुनिक तकनीक के साथ उन्नत कार्डियोलॉजी देखभाल प्रदान करता है। हमारा कार्डियोलॉजी विभाग सटीक निदान, न्यूनतम इनवेसिव प्रक्रियाओं और निरंतर हृदय स्वास्थ्य निगरानी सुनिश्चित करता है। रोगी-प्रथम दृष्टिकोण के साथ, हम बेहतर स्वास्थ्य लाभ और दीर्घकालिक हृदय स्वास्थ्य के लिए 24/7 हृदय सेवाएँ, निवारक जाँचें और व्यक्तिगत उपचार योजनाएँ प्रदान करते हैं।"
            },
            heroImage: {
                src: Care,
                alt: "Cardiology Department Image",
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
                    alt: "Cardiology",
                    classes: "rounded h-110"
                },
                content: {
                    title: translations?.Why_Choose_Cardiology || 'बीएम अस्पताल के कार्डियोलॉजी विभाग को क्यों चुनें?',
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.points_one || 'अनुभवी हृदय रोग विशेषज्ञों और हृदय शल्य चिकित्सकों की टीम',
                        translations?.points_two || 'ईसीजी, इको, टीएमटी, एंजियोग्राफी सहित उन्नत नैदानिक उपकरण',
                        translations?.points_three || 'न्यूनतम आक्रामक प्रक्रियाओं के लिए अत्याधुनिक कैथ लैब',
                        translations?.points_four || 'दिल का दौरा, स्ट्रोक और सीने में दर्द के लिए 24/7 आपातकालीन देखभाल',
                        translations?.points_five || 'सर्जरी के बाद पुनर्वास और हृदय स्वास्थ्य निगरानी',
                        translations?.points_six || 'कस्टम उपचार योजनाओं के साथ रोगी-केंद्रित दृष्टिकोण'
                    ],
                    listClasses: "text-gray-700 space-y-3 list-disc list-inside"
                },
                cta: {
                    label: translations?.Cardiology_label || 'अपॉइंटमेंट बुक करें',
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
                    src: Center,
                    alt: "Cardiology",
                    classes: "rounded-xl h-110"
                },
                content: {
                    title: translations?.Conditions_title || 'जिनका हम इलाज करते हैं',
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.Conditions_points_one || '',
                        translations?.Conditions_points_two || '',
                        translations?.Conditions_points_three || '',
                        translations?.Conditions_points_four || '',
                        translations?.Conditions_points_five || '',
                        translations?.Conditions_points_six || '',
                        translations?.Conditions_points_seven || '',
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
                    title: translations?.centersection_title || 'बीएम अस्पताल में उन्नत कार्डियोलॉजी विभाग - आपके हृदय का विश्वसनीय देखभाल भागीदार',
                    subtitle: translations?.centersection_subtitle || 'एक स्वस्थ कल के लिए करुणामय, अत्याधुनिक हृदय विज्ञान'
                }
            },
            threedSection: {
                heading: translations?.threedSection_heading || 'बीएम अस्पताल का कार्डियोलॉजी विभाग शीघ्र निदान, उन्नत उपचार और रोगी-केंद्रित स्वास्थ्य लाभ पर ध्यान केंद्रित करते हुए विश्व स्तरीय हृदय देखभाल प्रदान करने के लिए प्रतिबद्ध है। हमारे उच्च-योग्य हृदय रोग विशेषज्ञ और हृदय रोग विशेषज्ञ, हृदय संबंधी विभिन्न रोगों के प्रबंधन के लिए आधुनिक तकनीक के साथ विशेषज्ञता का संयोजन करते हैं।',
                subheading: translations?.threedSection_subheading || 'हम अतालता, हृदय गति रुकना, वाल्वुलर हृदय रोग, अलिंद विकम्पन, कोरोनरी धमनी रोग और हृदयाघात जैसी स्थितियों के निदान और उपचार में विशेषज्ञ हैं। चाहे आपको एंजियोप्लास्टी, हृदय शल्य चिकित्सा, पेसमेकर प्रत्यारोपण, या निरंतर हृदय देखभाल की आवश्यकता हो, बीएम अस्पताल हर कदम पर सटीकता और सुरक्षा सुनिश्चित करता है।',
                image: {
                    src: Hero,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.ctaSection_title || 'आपके हृदय का स्वास्थ्य मायने रखता है।',
                subtitle: translations?.ctaSection_subtitle || 'लक्षणों का इंतज़ार न करें.',
                description: translations?.ctaSection_description || 'आज ही हमारे कार्डियोलॉजी विभाग में अपॉइंटमेंट बुक करें।',
                details: {
                    address: {
                        label: translations?.address_label || 'दौरा',
                        value: translations?.address_value || 'बीएम अस्पताल, बाराबंकी',
                    },
                    phone: {
                        label: translations?.phone_label || 'कॉल',
                        value: "+91 7318000751 – 55",
                        link: "tel:+917318000751"
                    }
                },
                footerNote: translations?.footerNote_title || 'बीएम अस्पताल - क्योंकि हर दिल की धड़कन अमूल्य है।',
                button: {
                    label: translations?.cta_label || 'अपॉइंटमेंट बुक करें',
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
            question: translations?.question1 || "बीएम अस्पताल के कार्डियोलॉजी विभाग में हृदय संबंधी किन स्थितियों का इलाज किया जाता है?",
            answer: translations?.answer1 || "बीएम हॉस्पिटल हृदय संबंधी कई तरह की बीमारियों का इलाज करता है, जिनमें हार्ट अटैक, अतालता, एट्रियल फ़िब्रिलेशन, हार्ट फ़ेल्योर, वाल्वुलर विकार और कोरोनरी आर्टरी डिज़ीज़ शामिल हैं। हम उच्च रक्तचाप और कोलेस्ट्रॉल की भी देखभाल करते हैं।",
        },
        {
            question: translations?.question2 || "क्या बीएम अस्पताल एंजियोप्लास्टी और हृदय संबंधी सर्जरी करता है?",
            answer: translations?.answer2 || "हां, हमारा कार्डियोलॉजी विभाग एंजियोप्लास्टी, पेसमेकर प्रत्यारोपण और कार्डियक सर्जरी को सुरक्षित और प्रभावी ढंग से करने के लिए एक उन्नत कैथ लैब और विशेषज्ञ सर्जनों से सुसज्जित है।",
        },
        {
            question: translations?.question3 || "मुझे कैसे पता चलेगा कि मुझे हृदय रोग विशेषज्ञ के पास जाने की आवश्यकता है?",
            answer: translations?.answer3 || "यदि आपको सीने में दर्द, सांस लेने में तकलीफ, अनियमित दिल की धड़कन या चक्कर आना जैसे लक्षण महसूस होते हैं, तो शीघ्र निदान और उपचार के लिए हृदय रोग विशेषज्ञ से परामर्श करना महत्वपूर्ण है।",
        },
        {
            question: translations?.question4 || "क्या बीएम अस्पताल में आपातकालीन हृदय देखभाल उपलब्ध है?",
            answer: translations?.answer4 || "बिल्कुल। बीएम अस्पताल हृदयाघात, स्ट्रोक और अन्य गंभीर हृदय संबंधी आपात स्थितियों के लिए त्वरित प्रतिक्रिया और विशेषज्ञ देखभाल के साथ 24/7 आपातकालीन कार्डियोलॉजी सेवाएं प्रदान करता है।",
        },
    ];


    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <BackToTop />
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />
            <HeaderHero HeaderData={HeaderData} translations={translations} />
            <Faq faqs={faqs} translations={translations} />
            <Footer translations={translations} />
        </div>
    )
}
