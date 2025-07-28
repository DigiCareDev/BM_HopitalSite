import React, { useEffect, useState } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import HeaderHero from '../components/HeaderHero';
import Faq from '../components/faq';
import tweentyfour from '@/assets/Emergency Medicine/Emergency Medicine 24x7.svg';
import Condition from '@/assets/Emergency Medicine/Emergency Medicine_Condition.svg';
import WhyChooseUs from '@/assets/Emergency Medicine/Emergency Medicine_Why Choose Us.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";


export default function EmergencyMedicine() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.emergency_medicine || 'आपातकालीन सेवाएं',
            header: {
                title: translations?.emergency_medicine || 'आपातकालीन सेवाएं',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.emergency_medicine_heading || 'आपातकालीन चिकित्सा जो हर सेकंड महत्वपूर्ण होने पर प्रतिक्रिया देती है',
                subheading: translations?.emergency_medicine_subheading || 'बीएम अस्पताल आघात, स्ट्रोक, हृदयाघात और गंभीर चिकित्सा आपात स्थितियों के लिए त्वरित प्रतिक्रिया के साथ 24/7 विशेषज्ञ आपातकालीन चिकित्सा देखभाल प्रदान करता है।' ,
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.emergency_medicine_subheadingOne || 'बीएम अस्पताल आघात, स्ट्रोक, हृदयाघात और गंभीर चिकित्सा आपात स्थितियों के लिए त्वरित प्रतिक्रिया के साथ 24/7 विशेषज्ञ आपातकालीन चिकित्सा देखभाल प्रदान करता है।' ,
            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "Emergency Medicine Department Image",
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
                    alt: "Emergency Medicine",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.emergency_medicine_whyChoose_content_title || 'आपातकालीन चिकित्सा के लिए बीएम अस्पताल क्यों चुनें?',
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.emergency_medicine_whyChoose_points_one || '24/7 पूर्णतः कार्यात्मक आपातकालीन विभाग',
                        translations?.emergency_medicine_whyChoose_points_two || 'आईसीयू, ओटी, रेडियोलॉजी और लैब सेवाओं तक तत्काल पहुँच',
                        translations?.emergency_medicine_whyChoose_points_three || 'तत्काल मामलों के लिए फास्ट-ट्रैक ट्राइएज प्रणाली',
                        translations?.emergency_medicine_whyChoose_points_four || 'अस्पताल-पूर्व देखभाल सहायता के साथ एम्बुलेंस सेवा',
                        translations?.emergency_medicine_whyChoose_points_five || 'पुनर्जीवन और महत्वपूर्ण देखभाल प्रोटोकॉल में प्रशिक्षित कुशल टीम',
                    ],
                    listClasses: "text-gray-700 space-y-3 list-disc list-inside"
                },
                cta: {
                    label: translations?.emergency_medicine_cta_label || 'अपॉइंटमेंट बुक करें',
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
                    alt: "Emergency Medicine",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.emergency_medicine_conditions_title || 'आपातकालीन चिकित्सा में उपचारित स्थितियां',
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.emergency_medicine_content_points_one || 'हृदय गति रुकना, सीने में दर्द, दिल का दौरा',
                        translations?.emergency_medicine_content_points_two || 'स्ट्रोक, दौरा, चेतना की हानि',
                        translations?.emergency_medicine_content_points_three || 'गंभीर रक्तस्राव, आघात, फ्रैक्चर, जलन',
                        translations?.emergency_medicine_content_points_four || 'विषाक्तता, एलर्जी प्रतिक्रियाएं, सेप्सिस',
                        translations?.emergency_medicine_content_points_five || 'श्वसन संकट, अस्थमा का दौरा,  जटिलताएँ',
                        translations?.emergency_medicine_content_points_six || 'संक्रमण, तेज बुखार, अनियंत्रित मधुमेह',
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
                    title: translations?.emergency_medicine_centersection_title || 'बीएम अस्पताल में 24/7 आपातकालीन चिकित्सा सेवाएँ - त्वरित प्रतिक्रिया, विश्वसनीय देखभाल',
                    subtitle: translations?.emergency_medicine_centersection_subtitle || 'शीघ्रता, विशेषज्ञता और करुणा के साथ जीवन रक्षक आपातकालीन चिकित्सा',
                }
            },
            threedSection: {
                heading: translations?.emergency_medicine_threedSection_heading || 'बीएम अस्पताल का आपातकालीन चिकित्सा विभाग तत्काल प्रतिक्रिया और विशेषज्ञ देखभाल के साथ गंभीर चिकित्सा स्थितियों से निपटने के लिए पूरी तरह सुसज्जित है। 24/7 संचालित, हमारी आपातकालीन इकाई में उच्च प्रशिक्षित आपातकालीन चिकित्सक, नर्स और आघात विशेषज्ञ कार्यरत हैं जो हर पल महत्वपूर्ण होने पर त्वरित और सटीक उपचार प्रदान करते हैं।',
                subheading: translations?.emergency_medicine_threedSection_subheading || 'सीने में दर्द और स्ट्रोक से लेकर आघात, जलन और गंभीर संक्रमण तक, हमारी आपातकालीन चिकित्सा टीम बिना किसी देरी के स्थिरीकरण, निदान और उपचार सुनिश्चित करती है। हम उन्नत निगरानी प्रणालियों, वेंटिलेटर, डिफाइब्रिलेटर और एक समर्पित ट्राइएज ज़ोन से लैस हैं ताकि मरीज़ों का आकलन किया जा सके और उन्हें तत्काल आवश्यकता के आधार पर प्राथमिकता दी जा सके।',
                image: {
                    src: tweentyfour,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full "
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.emergency_medicine_ctaSection_title || 'आपके हृदय का स्वास्थ्य मायने रखता है।',
                subtitle: translations?.emergency_medicine_ctaSection_subtitle || 'लक्षणों का इंतज़ार न करें.',
                description: translations?.emergency_medicine_ctaSection_description || 'आज ही हमारे कार्डियोलॉजी विभाग में अपॉइंटमेंट बुक करें।',
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
                footerNote: translations?.emergency_medicine_footerNote || 'बीएम अस्पताल - विशेषज्ञ आपातकालीन चिकित्सा प्रदान करना, जहां हर सेकंड एक जीवन बचाता है।',
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
            question: translations?.EmergencyMedicine_question || 'बीएम अस्पताल के आपातकालीन चिकित्सा विभाग में कौन सी सेवाएं प्रदान की जाती हैं?',
            answer: translations?.EmergencyMedicine_answer || 'हम आघात, स्ट्रोक, दिल का दौरा, दौरे, श्वसन संकट, जलन और अन्य गंभीर स्थितियों के लिए 24/7 आपातकालीन देखभाल प्रदान करते हैं, जो आईसीयू, ओटी और डायग्नोस्टिक्स द्वारा समर्थित है।',
        },
        {
            question: translations?.EmergencyMedicine_question2 || 'आपातकालीन स्थिति में मुझे कितनी जल्दी उपचार मिल सकता है?',
            answer: translations?.EmergencyMedicine_answer2 || 'हमारी प्रशिक्षित ट्राइएज टीम प्रत्येक रोगी के आगमन पर तुरंत उसका मूल्यांकन करती है, ताकि स्थिति की गंभीरता के आधार पर देखभाल को प्राथमिकता दी जा सके, जिससे त्वरित उपचार सुनिश्चित हो सके।',
        },
        {
            question: translations?.EmergencyMedicine_question3 || 'क्या बीएम अस्पताल में एम्बुलेंस सेवा उपलब्ध है?',
            answer: translations?.EmergencyMedicine_answer3 || 'हां, हम अस्पताल ले जाते समय मरीजों को स्थिर करने के लिए अस्पताल-पूर्व देखभाल और प्रशिक्षित आपातकालीन कर्मचारियों के साथ पूरी तरह सुसज्जित एम्बुलेंस सेवाएं प्रदान करते हैं।',
        },
        {
            question: translations?.EmergencyMedicine_question4 || 'चिकित्सा आपातकाल में मुझे क्या लाना चाहिए?',
            answer: translations?.EmergencyMedicine_answer4 || 'अपने सभी उपलब्ध मेडिकल रिकॉर्ड, पहचान पत्र, मौजूदा दवाओं की सूची और आपातकालीन संपर्क विवरण साथ लाएँ। हालाँकि, आपका स्वास्थ्य सर्वोपरि है—हम बिना देर किए इलाज करते हैं।',
        },
        {
            question: translations?.EmergencyMedicine_question5 || 'क्या बीएम अस्पताल में बच्चों और वरिष्ठ नागरिकों के लिए विशेष आपातकालीन देखभाल उपलब्ध है?',
            answer: translations?.EmergencyMedicine_answer5 || 'हां, हम बाल चिकित्सा और वृद्धावस्था के लिए आयु-विशिष्ट आपातकालीन देखभाल प्रदान करते हैं, यह सुनिश्चित करते हुए कि बच्चों और बुजुर्ग रोगियों को प्रशिक्षित विशेषज्ञों से समय पर, उचित और दयालु उपचार मिले।',
        },
        {
            question: translations?.EmergencyMedicine_question6 || 'क्या आपातकालीन विभाग जहर या ओवरडोज के मामलों से निपटने के लिए सुसज्जित है?',
            answer: translations?.EmergencyMedicine_answer6 || 'बिल्कुल। हमारी आपातकालीन टीम विष विज्ञान में प्रशिक्षित है और विषाक्तता, दवा की अधिक मात्रा और रासायनिक जोखिम के मामलों का प्रभावी और तत्काल उपचार करने के लिए एंटीडोट्स और प्रोटोकॉल से लैस है।',
        },
        {
            question: translations?.EmergencyMedicine_question7 || 'क्या मैं बिना पूर्व नियुक्ति या रेफरल के आपातकालीन चिकित्सा केंद्र जा सकता हूँ?',
            answer: translations?.EmergencyMedicine_answer7 || 'हाँ। हमारा आपातकालीन विभाग 24/7 खुला रहता है और इसके लिए किसी अपॉइंटमेंट की आवश्यकता नहीं होती। तत्काल ज़रूरत वाले मरीज़ों का हमेशा स्वागत है और उनके आते ही तुरंत जाँच की जाती है।',
        },
        {
            question: translations?.EmergencyMedicine_question8 || 'आपातकालीन स्थिरीकरण के बाद गहन देखभाल कैसे की जाती है?',
            answer: translations?.EmergencyMedicine_answer8 || 'प्रारंभिक स्थिरीकरण के बाद, मरीजों को बहु-विषयक टीमों द्वारा गहन निगरानी और उन्नत देखभाल के तहत आईसीयू, एचडीयू या संबंधित विशेषज्ञ वार्डों में स्थानांतरित कर दिया जाता है।',
        },
        {
            question: translations?.EmergencyMedicine_question9 || 'क्या आपके पास आपात स्थिति के लिए विशेषज्ञों की ऑन-कॉल टीम है?',
            answer: translations?.EmergencyMedicine_answer9 || 'हां, बीएम अस्पताल किसी भी समय जटिल आपात स्थितियों का प्रबंधन करने के लिए हृदय रोग विशेषज्ञों, न्यूरोलॉजिस्ट, सर्जन और क्रिटिकल केयर विशेषज्ञों की एक समर्पित ऑन-कॉल रोस्टर रखता है।',
        },
        {
            question: translations?.EmergencyMedicine_question10 || 'क्या बीएम अस्पताल में आपातकालीन उपचार बीमा और टीपीए के अंतर्गत कवर किया जाता है?',
            answer: translations?.EmergencyMedicine_answer10 || 'ज़्यादातर आपातकालीन उपचार पार्टनर इंश्योरेंस और टीपीए योजनाओं के अंतर्गत आते हैं। हमारी हेल्पडेस्क, जहाँ भी आवश्यक हो, त्वरित दस्तावेज़ीकरण और कैशलेस सुविधा प्रदान करती है।',
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
