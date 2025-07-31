import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer';
import FAQSection from '../components/Faqs';
import Mangement from '../components/Mangement'
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Fever Management/Fever Treatment.svg'
import Antibiotics from '@/assets/Treatment/Fever Management/Antibiotics.svg'
import Antipyretic from '@/assets/Treatment/Fever Management/Antipyretic.svg'
import Diagnostic from '@/assets/Treatment/Fever Management/Diagnostic.svg'
import Fluids from '@/assets/Treatment/Fever Management/IV Fluids.svg'

export default function FeverTreatment() {
  const [translations, setTranslations] = useState({});

  const handletranslate = (data) => {
    setTranslations(data);
  }

  const contentData = {
    sections: [
      {
        type: "header",
        title: "Fever Treatment",
        overview: "Overview",
        subtitle: translations?.FeverTreatment_sections_subtitle || "बीएम अस्पताल में विशेषज्ञ बुखार उपचार – त्वरित राहत और सटीक निदान",
        description: translations?.FeverTreatment_sections_description || "बीएम अस्पताल में सभी उम्र के मरीजों के लिए विशेषज्ञ बुखार उपचार की सुविधा है, जो त्वरित राहत और सटीक देखभाल प्रदान करता है। हमारे विशेषज्ञ डॉक्टर बुखार के मूल कारण – जैसे वायरल, बैक्टीरियल, डेंगू, मलेरिया या अन्य संक्रमण – का निदान करते हैं उन्नत लैब टेस्ट और क्लिनिकल मूल्यांकन द्वारा। हम प्रत्येक मरीज की स्थिति के अनुसार व्यक्तिगत उपचार योजना प्रदान करते हैं, जिसमें एंटीपायरेटिक्स, एंटीबायोटिक्स, हाइड्रेशन थैरेपी और निगरानी शामिल है। हमारी टीम सटीक निदान, समय पर हस्तक्षेप और पूर्ण देखभाल सुनिश्चित करती है ताकि निर्जलीकरण या लम्बे समय तक बीमारी जैसी जटिलताओं से बचा जा सके। 24/7 इमरजेंसी और ओपीडी सेवाओं के साथ, बीएम अस्पताल बुखार के लिए एक सुरक्षित और भरोसेमंद विकल्प है।",
        image: Images,
      },
      {
        type: "info",
        icon: Treatmenticon,
        title: translations?.FeverTreatment_info_title || "क्या है बुखार? जानिए त्वरित उपचार की आवश्यकता",
        content: translations?.FeverTreatment_info_content || "बुखार शरीर के तापमान में अस्थायी वृद्धि है, जो आमतौर पर संक्रमण से लड़ने की शरीर की प्रतिक्रिया को दर्शाता है। सामान्य तापमान लगभग 98.6°F (37°C) होता है, और 100.4°F (38°C) से ऊपर तापमान को बुखार माना जाता है। इसके सामान्य कारणों में वायरल संक्रमण, बैक्टीरियल संक्रमण, हीट स्ट्रोक या सूजन संबंधी स्थितियां शामिल हैं। लक्षणों में ठंड लगना, पसीना आना, सिरदर्द, बदन दर्द, थकावट और कमजोरी की भावना हो सकती है। जबकि हल्का बुखार आमतौर पर घर पर संभाला जा सकता है, लगातार या अधिक तापमान वाला बुखार गंभीर स्वास्थ्य समस्या का संकेत हो सकता है और त्वरित उपचार की आवश्यकता होती है। बीएम अस्पताल में हम बुखार संबंधित स्थितियों के लिए सटीक निदान, लैब टेस्ट और व्यक्तिगत उपचार योजनाओं के माध्यम से विशेषज्ञ देखभाल प्रदान करते हैं।",
      },
      {
        type: "treatments",
        title: translations?.FeverTreatment_treatments_title || "उपलब्ध उपचार",
        description: translations?.FeverTreatment_treatments_description || "त्वरित राहत की शुरुआत होती है सही और विशेषज्ञ-संस्तुत बुखार उपचार से – बीएम अस्पताल में विश्वसनीय देखभाल के साथ",
        cards: [
          {
            icon: Antipyretic, // Bandage – general care, fits antipyretic symptom relief
            title: translations?.FeverTreatment_cards_title || "एंटीपायरेटिक",
            content: translations?.FeverTreatment_cards_content || "शरीर का तापमान कम करने के लिए बुखार घटाने वाली दवाएं",
          },
          {
            icon: Antibiotics, // Pill – ideal for antibiotic medications
            title: translations?.FeverTreatment_cards_title1 || "एंटीबायोटिक्स",
            content: translations?.FeverTreatment_cards_content1 || "तेज़ या लंबे समय तक बने रहने वाले बुखार के लिए इन्पेशेंट देखभाल",
          },
          {
            icon: Diagnostic, // Microscope – perfect for diagnostics and lab testing
            title: translations?.FeverTreatment_cards_title2 || "डायग्नोस्टिक",
            content: translations?.FeverTreatment_cards_content2 || "वायरल या बैक्टीरियल संक्रमण का पता लगाने के लिए जांच",
          },
          {
            icon: Fluids, // Fluid bottle – visually suggests IV fluid therapy
            title: translations?.FeverTreatment_cards_title3 || "आईवी फ्लूइड्स",
            content: translations?.FeverTreatment_cards_content3 || "गंभीर मामलों में तरल पदार्थ और हाइड्रेशन थैरेपी",
          }
        ]

      },
      {
        type: "helpline",
        title: translations?.FeverTreatment_helpline_title || "24/7 बुखार उपचार हेल्पलाइन – बस एक कॉल की दूरी पर!",
        subtitle: translations?.FeverTreatment_helpline_subtitle || "आपातकालीन हेल्पलाइन",
        description: translations?.FeverTreatment_helpline_description || "तेज बुखार या अचानक लक्षणों का सामना कर रहे हैं? दिन हो या रात – कभी भी त्वरित चिकित्सा परामर्श और सहायता प्राप्त करें। जब बुखार हो, तब इंतज़ार न करें। हमारी आपातकालीन टीम 24/7 आपकी सहायता के लिए तैयार है।",
        contacts: [
          {
            icon: "📞",
            label: translations?.contacts_label || 'आपातकालीन हेल्पलाइन',
            value: "+91-7318000751 – 55"
          },
          {
            icon: "📧",
            label: translations?.contacts_label1 || 'ईमेल पता',
            value: "info@bmswtrust.org"
          }
        ],
        image: {
          src: Helpline,
          alt: "Doctor Appointment",
          badge: {
            icon: "📅",
            title: translations?.image_badge_title || 'अपॉइंटमेंट',
            subtitle: translations?.image_badge_subtitle || 'कभी भी, कहीं भी अपॉइंटमेंट बुक करें',
          }
        }
      }
    ]
  };

  const faqItems = [
    {
      question: translations?.FeverTreatment_question || 'थायरॉयड विकारों के सामान्य लक्षण क्या हैं?',
      answer: translations?.FeverTreatment_answer || 'थायरॉयड विकारों के लक्षण अलग-अलग हो सकते हैं, लेकिन इनमें थकान, वजन में बदलाव, मूड स्विंग्स, बालों का झड़ना, अनियमित दिल की धड़कन और तापमान के प्रति संवेदनशीलता शामिल हो सकते हैं। प्रारंभिक निदान जटिलताओं को रोकने में मदद करता है।',
    },
    {
      question: translations?.FeverTreatment_question1 || 'बीएम अस्पताल में किन प्रकार के थायरॉयड विकारों का इलाज किया जाता है?',
      answer: translations?.FeverTreatment_answer1 || 'हम हाइपोथायरायडिज्म, हाइपरथायरायडिज्म, गॉइटर, थायरॉयड नोड्यूल्स और थायरॉयड कैंसर का इलाज दवाओं, हार्मोन थेरेपी और आवश्यक होने पर सर्जरी द्वारा करते हैं।',
    },
    {
      question: translations?.FeverTreatment_question2 || 'थायरॉयड विकार का निदान कैसे किया जाता है?',
      answer: translations?.FeverTreatment_answer2 || 'निदान में शारीरिक जांच, टीएसएच ब्लड टेस्ट, थायरॉयड हार्मोन स्तर की जांच, अल्ट्रासाउंड और लक्षणों के आधार पर रेडियोएक्टिव आयोडीन अपटेक स्कैन शामिल होता है।',
    },
    {
      question: translations?.FeverTreatment_question3 || 'हाइपोथायरायडिज्म का इलाज क्या है?',
      answer: translations?.FeverTreatment_answer3 || 'हाइपोथायरायडिज्म का आमतौर पर इलाज लेवोथायरॉक्सिन नामक सिंथेटिक थायरॉयड हार्मोन से किया जाता है, जो हार्मोन स्तर को सामान्य करता है और लक्षणों को कम करता है।',
    },
    {
      question: translations?.FeverTreatment_question4 || 'क्या थायरॉयड विकारों का स्थायी इलाज संभव है?',
      answer: translations?.FeverTreatment_answer4 || 'कुछ थायरॉयड विकारों का उचित उपचार से प्रबंधन या समाधान किया जा सकता है, लेकिन हाइपोथायरायडिज्म जैसी स्थितियों के लिए आमतौर पर जीवनभर दवा लेनी होती है।',
    },
    {
      question: translations?.FeverTreatment_question5 || 'क्या थायरॉयड के इलाज के लिए सर्जरी की आवश्यकता होती है?',
      answer: translations?.FeverTreatment_answer5 || 'बड़े गॉइटर, थायरॉयड कैंसर, या सांस लेने या निगलने में समस्या उत्पन्न करने वाले नोड्यूल्स के लिए सर्जरी की सिफारिश की जाती है। हमारे विशेषज्ञ सर्जन सुरक्षित प्रक्रिया और पोस्ट-ऑपरेटिव देखभाल सुनिश्चित करते हैं।',
    }
  ];



  return (
    <>
      <div className='bg-white'>
        <BackToTop />
        <Subnav onTranslations={handletranslate} />
        <Navbar translations={translations}/>
        <Mangement contentData={contentData} />
        <FAQSection faqItems={faqItems} translations={translations} />
        <Footer translations={translations} />
      </div>
    </>
  )
}
