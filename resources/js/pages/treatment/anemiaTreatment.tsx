import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Mangement from '../components/Mangement';
import FAQSection from '../components/Faqs';
import AboutHeader from '@/assets/images/aboutHeader.jpg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import Images from '@/assets/Treatment/Anemia Treatment/Anemia Treatment.svg'
import Transfusion from '@/assets/Treatment/Anemia Treatment/Blood Transfusion.svg'
import Dietary from '@/assets/Treatment/Anemia Treatment/Dietary Counseling.svg'
import Supplements from '@/assets/Treatment/Anemia Treatment/Iron Supplements.svg'
import Vitamin from '@/assets/Treatment/Anemia Treatment/Vitamin Therapy.svg'


export default function AnemiaTreatment() {
  const [translations, setTranslations] = useState({});

  const handletranslate = (data) => {
    setTranslations(data);
  }

  const contentData = {
    sections: [
      {
        type: "header",
        title: "Allergy Treatment",
        overview: "Overview",
        subtitle: translations?.anemiaTreatment_sections_subtitle || "एनीमिया उपचार – विशेषज्ञ देखभाल के साथ अपनी ऊर्जा बहाल करें",
        description: translations?.anemiaTreatment_sections_description || 'BM अस्पताल में हमारा विशेष एनीमिया उपचार कम लाल रक्त कोशिकाओं के कारण की पहचान कर आपकी ताकत और ऊर्जा बहाल करने पर केंद्रित है। एनीमिया थकान, कमजोरी, पीली त्वचा, सांस फूलना और चक्कर जैसी समस्याएं उत्पन्न कर सकता है। इसके कारण आयरन की कमी, पुरानी बीमारियाँ, विटामिन B12 या फोलेट की कमी, या रक्त हानि हो सकते हैं। हमारी विशेषज्ञ टीम आयरन सप्लीमेंट्स, विटामिन थेरेपी, डाइट काउंसलिंग, दवाओं या आवश्यकता अनुसार ब्लड ट्रांसफ्यूजन जैसी व्यक्तिगत उपचार योजनाएं प्रदान करती है। हम आधुनिक डायग्नोस्टिक टूल्स का उपयोग करके एनीमिया के प्रकार और गंभीरता की पहचान करते हैं ताकि उचित उपचार सुनिश्चित किया जा सके। चाहे हल्का हो या गंभीर, BM अस्पताल सभी आयु वर्गों के लिए समय पर, सहानुभूतिपूर्ण और परिणाम-उन्मुख उपचार प्रदान करता है।',
        image: Images,
      },
      {
        type: "info",
        icon: Treatmenticon,
        title: translations?.anemiaTreatment_info_title || "एनीमिया उपचार क्या है?",
        content: translations?.anemiaTreatment_info_content || "एनीमिया उपचार का उद्देश्य लाल रक्त कोशिकाओं की संख्या बढ़ाना और शरीर में ऑक्सीजन प्रवाह को बेहतर बनाना होता है। जब रक्त में पर्याप्त स्वस्थ लाल रक्त कोशिकाएं या हीमोग्लोबिन नहीं होता, तो थकान, पीली त्वचा, चक्कर और सांस फूलना जैसे लक्षण होते हैं। BM अस्पताल में हमारा उपचार सटीक निदान से शुरू होता है जिसमें ब्लड टेस्ट, आयरन लेवल और विटामिन मूल्यांकन शामिल हैं। एनीमिया के प्रकार जैसे आयरन की कमी, विटामिन B12 या फोलेट की कमी, या पुरानी बीमारियों के कारण होने वाले एनीमिया के अनुसार व्यक्तिगत उपचार योजनाएं बनाई जाती हैं। आमतौर पर दिए जाने वाले उपचारों में आयरन सप्लीमेंट्स, विटामिन B12 इंजेक्शन, फोलिक एसिड टैबलेट, आहार में बदलाव और गंभीर मामलों में ब्लड ट्रांसफ्यूजन शामिल हैं। हमारी विशेषज्ञ टीम यह सुनिश्चित करती है कि मूल कारणों का भी इलाज किया जाए ताकि दीर्घकालिक स्वास्थ्य सुनिश्चित किया जा सके।",
      },
      {
        type: "treatments",
        title: translations?.anemiaTreatment_treatments_title || "उपलब्ध उपचार",
        description: translations?.anemiaTreatment_treatments_description || "एनीमिया के उपचार उसके प्रकार और गंभीरता के अनुसार तैयार किए जाते हैं, जिनका उद्देश्य लाल रक्त कोशिकाओं का स्तर बहाल करना, ऊर्जा बढ़ाना और समग्र स्वास्थ्य को प्रभावी रूप से सुधारना होता है।",
        cards: [
          {
            icon: Supplements, // Blood drop – represents iron and blood
            title: translations?.anemiaTreatment_cards_title || "आयरन सप्लीमेंट्स",
            content: translations?.anemiaTreatment_cards_content || "आयरन की कमी वाले एनीमिया में आयरन स्तर को पुनः बढ़ाएं।",
          },
          {
            icon: Vitamin, // Pill – general medication/vitamin icon
            title: translations?.anemiaTreatment_cards_title1 || "विटामिन थेरेपी",
            content: translations?.anemiaTreatment_cards_content1 || "विटामिन B12 और फोलिक एसिड की कमी का उपचार।",
          },
          {
            icon: Transfusion, // Test tube – symbolizes medical treatment like transfusion
            title: translations?.anemiaTreatment_cards_title2 || "ब्लड ट्रांसफ्यूजन",
            content: translations?.anemiaTreatment_cards_content2 || "गंभीर एनीमिया के मामलों में तुरंत राहत प्रदान करता है।",
          },
          {
            icon: Dietary, // Salad bowl – represents healthy eating and nutrition
            title: translations?.anemiaTreatment_cards_title3 || "आहार परामर्श",
            content: translations?.anemiaTreatment_cards_content3 || "प्राकृतिक रूप से आयरन और पोषक तत्वों का सेवन बढ़ाने में मदद करता है।",
          }
        ]

      },
      {
        type: "helpline",
        title: translations?.anemiaTreatment_helpline_title || "24/7 सहायता हेल्पलाइन – जब भी ज़रूरत हो, विशेषज्ञ देखभाल उपलब्ध!",
        subtitle: translations?.anemiaTreatment_helpline_subtitle || "आपातकालीन हेल्पलाइन",
        description: translations?.anemiaTreatment_helpline_description || "एनीमिया उपचार से संबंधित किसी भी तत्काल सहायता या प्रश्न के लिए कभी भी संपर्क करें।",
        contacts: [
          {
            icon: "📞",
            label: translations?.contacts_label || 'आपातकालीन हेल्पलाइन',
            value: "+91-7318000751 – 55 "
          },
          {
            icon: "📧",
            label: translations?.contacts_label1 || 'ईमेल पता',
            value: " info@bmswtrust.org"
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
      question: translations?.anemiaTreatment_question || 'एनीमिया क्या है और इसके कारण क्या हैं?',
      answer: translations?.anemiaTreatment_answer || 'एनीमिया एक ऐसी स्थिति है जिसमें शरीर में पर्याप्त स्वस्थ लाल रक्त कोशिकाएँ या हीमोग्लोबिन नहीं होते। सामान्य कारणों में आयरन की कमी, विटामिन B12 या फोलिक एसिड की कमी, पुरानी बीमारियाँ, या रक्त की हानि शामिल हैं।',
    },
    {
      question: translations?.anemiaTreatment_question1 || 'एनीमिया के लक्षण क्या हैं?',
      answer: translations?.anemiaTreatment_answer1 || 'आम लक्षणों में थकान, कमजोरी, पीली या पीली-सी त्वचा, सांस फूलना, चक्कर आना, अनियमित दिल की धड़कन, और हाथ-पैरों का ठंडा रहना शामिल हैं।',
    },
    {
      question: translations?.anemiaTreatment_question2 || "एनीमिया का निदान कैसे किया जाता है?",
      answer: translations?.anemiaTreatment_answer2 || 'एनीमिया का निदान ब्लड टेस्ट जैसे कि कंप्लीट ब्लड काउंट (CBC), आयरन स्टडी, विटामिन B12 और फोलेट स्तर, और जरूरत होने पर बोन मैरो टेस्ट से किया जाता है।',
    },
    {
      question: translations?.anemiaTreatment_question3 || 'एनीमिया के उपचार विकल्प क्या हैं?',
      answer: translations?.anemiaTreatment_answer3 || 'एनीमिया के उपचार में आयरन सप्लीमेंट्स, विटामिन B12 या फोलिक एसिड थेरेपी, आहार में बदलाव, अंतर्निहित बीमारियों के लिए दवाएं, और गंभीर मामलों में ब्लड ट्रांसफ्यूजन शामिल हैं।',
    },
    {
      question: translations?.anemiaTreatment_question4 || 'क्या एनीमिया को पूरी तरह से ठीक किया जा सकता है?',
      answer: translations?.anemiaTreatment_answer4 || 'हाँ, कई प्रकार के एनीमिया को सही उपचार और जीवनशैली में बदलाव के साथ पूरी तरह से ठीक या प्रभावी रूप से नियंत्रित किया जा सकता है, खासकर अगर समय रहते निदान हो जाए।',
    },
    {
      question: translations?.anemiaTreatment_question5 || 'एनीमिया के लिए डॉक्टर को कब दिखाना चाहिए?',
      answer: translations?.anemiaTreatment_answer5 || 'अगर आप लगातार थकान, सांस फूलना या पीली त्वचा महसूस करते हैं तो तुरंत डॉक्टर से संपर्क करें। समय पर निदान तेजी से और प्रभावी रूप से ठीक होने में मदद करता है।',
    }
  ];

  return (
    <div className='bg-white'>
      <BackToTop />
      <Subnav onTranslations={handletranslate} />
      <Navbar translations={translations} />
      <Mangement contentData={contentData} />
      <FAQSection faqItems={faqItems} translations={translations} />
      <Footer translations={translations} />
    </div>
  )
}
