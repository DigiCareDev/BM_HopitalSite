import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import HeaderHero from '../components/HeaderHero';
import Faq from '../components/faq';
import Whychoose from '../../assets/folderDepartments/Pediatric Intensive Care Unit (PICU)/PICU_Why Choose Us.svg';
import Condition from '../../assets/folderDepartments/Pediatric Intensive Care Unit (PICU)/PICU_Condition.svg';
import RespiratoryHero from '../../assets/folderDepartments/Pediatric Intensive Care Unit (PICU)/Pediatric Intensive Care Unit (PICU) 24x7.svg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";


export default function Picu() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const HeaderData = [
        {
            department: translations?.picu || 'बाल चिकित्सा गहन चिकित्सा',
            header: {
                title: translations?.picu || 'बाल चिकित्सा गहन चिकित्सा',
                underlineColor: "border-blue-800",
                titleColor: "text-blue-800"
            },
            hero: {
                heading: translations?.picu_heading || 'गंभीर रूप से बीमार बच्चों के लिए सहानुभूति और विशेषज्ञता से युक्त विशेष PICU देखभाल',
                subheading: translations?.picu_subheading || 'BM अस्पताल का पेडियाट्रिक इंटेंसिव केयर यूनिट (PICU) नवजात शिशुओं, बच्चों और किशोरों के लिए गंभीर संक्रमण, ट्रॉमा, सांस की समस्या, दौरे और न्यूरोलॉजिकल आपात स्थितियों में 24/7 विशेष गहन देखभाल प्रदान करता है। हमारी विशेषज्ञ टीम, बाल-अनुकूल वातावरण और उन्नत जीवन रक्षक तकनीकें बच्चों को शीघ्र स्वस्थ होने और बेहतर परिणाम प्राप्त करने में मदद करती हैं।',
                textColor: "text-blue-700",
                paragraphColor: "text-gray-500",
                subheadingOne: translations?.picu_subheadingOne || 'हमारी देखभाल की मूल भावना परिवार-केंद्रित है। हम पारदर्शी संवाद, भावनात्मक परामर्श और फॉलो-अप सहायता प्रदान करते हैं ताकि परिवार इस सफर को सहज रूप से तय कर सकें।',

            },
            heroImage: {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                alt: "Pediatric Intensive Care Unit (PICU) Department Image",
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
                    alt: "Pediatric Intensive Care Unit (PICU)",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.picu_whyChoose_content_title || 'BM अस्पताल का PICU क्यों चुनें?',
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.picu_whyChoose_points_one || 'बाल रोग विशेषज्ञों के अनुरूप प्रोटोकॉल और बाल-अनुकूल वातावरण',
                        translations?.picu_whyChoose_points_two || 'समग्र देखभाल के लिए बहु-विषयी टीम',
                        translations?.picu_whyChoose_points_three || 'सख्त संक्रमण नियंत्रण और लगातार चिकित्सा निगरानी',
                        translations?.picu_whyChoose_points_four || 'परिवारों के लिए भावनात्मक और मनोवैज्ञानिक सहयोग',
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
                    alt: "Pediatric Intensive Care Unit (PICU)",
                    classes: "rounded-xl"
                },
                content: {
                    title: translations?.picu_conditions_title || 'BM अस्पताल PICU की प्रमुख विशेषताएँ',
                    titleClasses: "text-2xl font-semibold text-blue-800 mb-4",
                    points: [
                        translations?.picu_content_points_one || 'प्रशिक्षित बाल रोग विशेषज्ञों द्वारा 24 / 7 निगरानी',
                        translations?.picu_content_points_two || 'श्वसन विफलता, दौरे, चोट और गंभीर संक्रमणों का उपचार',
                        translations?.picu_content_points_three || 'न्यूरोलॉजिकल स्थितियों, शॉक और सर्जरी के बाद की देखभाल',
                        translations?.picu_content_points_four || 'उन्नत उपकरण: वेंटिलेटर, IV इन्फ्यूजन, मॉनिटरिंग सिस्टम',
                        translations?.picu_content_points_five || 'परिवार-केंद्रित देखभाल और मानसिक स्वास्थ्य पर विशेष ध्यान',
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
                    title: translations?.picu_centersection_title || 'BM अस्पताल में पेडियाट्रिक इंटेंसिव केयर यूनिट (PICU) – बच्चों के लिए उन्नत गहन चिकित्सा देखभाल',
                    subtitle: translations?.picu_centersection_subtitle || 'आपात स्थिति, पुनर्वास और जीवनरक्षक हस्तक्षेप के लिए विशेष बाल चिकित्सा गहन देखभाल',
                }
            },
            threedSection: {
                heading: translations?.picu_threedSection_heading || 'BM अस्पताल का PICU एक समर्पित और अत्याधुनिक यूनिट है जो जीवन-धमकाने वाली स्थितियों का सामना कर रहे बच्चों और किशोरों की देखभाल के लिए डिज़ाइन किया गया है। हमारी टीम में अनुभवी बाल रोग विशेषज्ञ, गहन देखभाल नर्सें और विशेषज्ञ शामिल हैं जो निरंतर निगरानी, जीवनरक्षक सहयोग और करुणापूर्ण देखभाल प्रदान करते हैं।',
                subheading: translations?.picu_threedSection_subheading || 'हमारा PICU गंभीर संक्रमण, श्वसन संबंधी समस्याएं, ट्रॉमा, न्यूरोलॉजिकल विकार, सर्जरी के बाद की रिकवरी और जटिल स्थितियों जैसे सेप्सिस या मल्टी-ऑर्गन डिसफंक्शन के इलाज के लिए सुसज्जित है। हम शीघ्र हस्तक्षेप, लगातार निगरानी और मानसिक समर्थन को प्राथमिकता देते हैं ताकि परिणामों में सुधार हो और पोस्ट-इंटेंसिव केयर सिंड्रोम  के प्रभाव को कम किया जा सके।',
                image: {
                    src: RespiratoryHero,
                    alt: "Doctor or Procedure Image",
                    classes: "relative z-10 object-cover w-full h-full"
                }
            },
            ctaSection: {
                type: "cta",
                backgroundColor: "#F0FBFB",
                title: translations?.picu_ctaSection_title || "आपका स्वास्थ्य मायने रखता है.",
                subtitle: translations?.picu_ctaSection_subtitle || "लक्षणों का इंतज़ार न करें.",
                description: translations?.picu_ctaSection_description || 'आपातकालीन बाल चिकित्सा देखभाल की आवश्यकता है? हमारी 24/7 PICU हेल्पलाइन पर अभी कॉल करें।',
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
                footerNote: translations?.picu_footerNote || 'BM अस्पताल – जहां आपके बच्चे की रिकवरी देखभाल, प्रतिबद्धता और विशेषज्ञता से शुरू होती है।',
                button: {
                    label: "Book Appointment",
                    link: "/Pediatric Intensive Care Unit (PICU)",
                    backgroundColor: "#80CAC7",
                    hoverColor: "#1D4ED8",
                    textColor: "#FFFFFF"
                }
            }
        }
    ];

    const faqs = [
        {
            question: translations?.picu_question || "पेडियाट्रिक इंटेंसिव केयर यूनिट (PICU) क्या है?",
            answer: translations?.picu_answer || "PICU एक विशेष बाल गहन चिकित्सा क्षेत्र है जो शिशुओं, बच्चों और किशोरों को गंभीर संक्रमण, चोट, श्वसन बीमारियों या जटिल सर्जरी के बाद उन्नत देखभाल प्रदान करता है।",
        },
        {
            question: translations?.picu_question2 || "BM अस्पताल में किन स्थितियों में PICU में भर्ती की आवश्यकता होती है?",
            answer: translations?.picu_answer2 || "हम गंभीर श्वसन विफलता, सेप्टिक शॉक, बड़े हादसे, जटिल न्यूरोलॉजिकल स्थितियाँ, जन्मजात हृदय समस्याएं और निरंतर निगरानी या जीवन रक्षक देखभाल की आवश्यकता वाले सर्जरी के बाद के मामलों का इलाज करते हैं।",
        },
        {
            question: translations?.picu_question3 || "PICU में मेरे बच्चे की देखभाल कौन करेगा?",
            answer: translations?.picu_answer3 || "PICU में बाल रोग विशेषज्ञ, गहन देखभाल नर्सें, श्वसन चिकित्सक, फार्मासिस्ट और चाइल्ड-लाइफ विशेषज्ञों की एक बहु-विषयी टीम चौबीसों घंटे देखभाल प्रदान करती है।",
        },
        {
            question: translations?.picu_question4 || "PICU में पारिवारिक सहभागिता को कैसे प्रोत्साहित किया जाता है?",
            answer: translations?.picu_answer4 || "हम परिवार-केंद्रित देखभाल का पालन करते हैं – जिसमें लचीली विज़िटिंग सुविधा, नियमित संवाद, और परामर्श शामिल हैं ताकि देखभालकर्ताओं का तनाव कम हो और उपचार प्रक्रिया को मानवीय बनाया जा सके।",
        },
        {
            question: translations?.picu_question5 || "गंभीर रूप से बीमार बच्चों को स्थिर करने के लिए किस उपकरण का उपयोग किया जाता है?",
            answer: translations?.picu_answer5 || "PICU में वेंटिलेटर, हाई-फ्लो ऑक्सीजन, बेडसाइड अल्ट्रासाउंड, लगातार EEG, स्मार्ट IV पंप और उन्नत मॉनिटरिंग सिस्टम होते हैं जो हृदय गति, रक्तचाप और ऑक्सीजन सैचुरेशन को ट्रैक करते हैं।",
        },
        {
            question: translations?.picu_question6 || "BM अस्पताल में PICU में रहने की अवधि को कैसे कम किया जाता है?",
            answer: translations?.picu_answer6 || "हम प्रमाण-आधारित प्रोटोकॉल, शीघ्र पुनर्वास और एंटीबायोटिक स्टूअर्डशिप का पालन करते हैं ताकि इलाज की अवधि कम की जा सके और परिवारों के लिए बेहतर स्वास्थ्य लाभ सुनिश्चित किया जा सके।",
        },
        {
            question: translations?.picu_question7 || "पोस्ट-इंटेंसिव केयर सिंड्रोम (PICS) क्या है और इसका इलाज कैसे होता है?",
            answer: translations?.picu_answer7 || "PICS में शारीरिक, मानसिक और संज्ञानात्मक समस्याएं शामिल होती हैं जो गंभीर बीमारी के बाद होती हैं। हमारी टीम प्रारंभिक पुनर्वास, मानसिक सहायता और फॉलो-अप क्लीनिक के माध्यम से इसके प्रभाव को कम करती है।",
        },
        {
            question: translations?.picu_question8 || "PICU टीम से अपडेट प्राप्त करने के लिए कैसे संपर्क करें?",
            answer: translations?.picu_answer8 || "हमारी 24/7 PICU हेल्पलाइन पर कॉल करें या बेडसाइड नर्स से बात करें; तय समय पर होने वाले फैमिली राउंड्स के दौरान आपको पूरी जानकारी और योजना प्रदान की जाती है।",
        },
        {
            question: translations?.picu_question9 || "क्या PICU में संक्रमण-नियंत्रण उपाय सख्त हैं?",
            answer: translations?.picu_answer9 || "हाँ। कड़ी हाथ स्वच्छता, अलग कमरे और एंटीमाइक्रोबियल प्रोटोकॉल का पालन किया जाता है ताकि अस्पताल से होने वाले संक्रमणों को न्यूनतम रखा जा सके।",
        },
        {
            question: translations?.picu_question10 || "क्या माता-पिता अपने बच्चे के साथ रात भर रुक सकते हैं?",
            answer: translations?.picu_answer10 || "रातभर रहने की व्यवस्था और कमरे में आरामदायक कुर्सियाँ माता-पिता को बच्चे के पास रहने की सुविधा देती हैं – जिससे भावनात्मक समर्थन और पारिवारिक जुड़ाव को बढ़ावा मिलता है।",
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
