import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Mangement from '../components/Mangement';
import FAQSection from '../components/Faqs';
import AboutHeader from '@/assets/images/aboutHeader.jpg';
import BackToTop from "../components/BackToTopButton"
import Subnav from "../components/subnav";
import Treatmenticon from '@/assets/Treatment/What Is Treatment.svg'
import Helpline from '@/assets/Treatment/Helpline.svg'
import MainImage from '@/assets/Treatment/Allergy Treatment/Allergy Treatment.svg'
import Antihistamines from '@/assets/Treatment/Allergy Treatment/Antihistamines.svg'
import Immunotherapy from '@/assets/Treatment/Allergy Treatment/Immunotherapy.svg'
import Inhalers from '@/assets/Treatment/Allergy Treatment/Inhalers & Eye Drops.svg'
import Nasal from '@/assets/Treatment/Allergy Treatment/Nasal Corticosteroids.svg'

export default function AllergyTreatment() {
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
        subtitle: translations?.AllergyTreatment_sections_subtitle || 'बीएम अस्पताल में एलर्जी उपचार – आसानी से साँस लें, स्वतंत्र रूप से जिएं',
        description: translations?.AllergyTreatment_sections_description || 'बीएम अस्पताल मौसमी, खाद्य, त्वचा, श्वसन या पर्यावरणीय एलर्जी से पीड़ित लोगों के लिए विशेषज्ञ नेतृत्व में एलर्जी उपचार प्रदान करता है। हमारे अनुभवी एलर्जिस्ट और ईएनटी विशेषज्ञ त्वचा परीक्षण, रक्त परीक्षण और एलिमिनेशन डाइट जैसी उन्नत जांच विधियों का उपयोग करते हैं ताकि ट्रिगर को सटीकता से पहचाना जा सके। हम व्यक्तिगत उपचार योजनाएँ प्रदान करते हैं जिनमें एंटीहिस्टामाइन, इम्यूनोथेरेपी (एलर्जी शॉट्स), नेजल स्प्रे और जीवनशैली में बदलाव शामिल हैं, ताकि छींक, चकत्ते, अस्थमा, खुजली वाली आँखों आदि जैसे लक्षणों से राहत मिल सके। हमारा उद्देश्य न केवल लक्षणों का इलाज करना है बल्कि प्रतिरक्षा को मजबूत कर एलर्जी की पुनरावृत्ति को भी कम करना है।',
        image: MainImage,
      },
      {
        type: "info",
        icon: Treatmenticon,
        title: translations?.AllergyTreatment_info_title || 'एलर्जी उपचार क्या है? – सही देखभाल से राहत की शुरुआत',
        content: translations?.AllergyTreatment_info_content || 'एलर्जी उपचार में पराग, धूल, भोजन, पालतू जानवरों की रूसी, कीट के काटने या दवाओं जैसे पदार्थों से उत्पन्न एलर्जी प्रतिक्रियाओं की पहचान और प्रबंधन शामिल है। एलर्जी तब होती है जब प्रतिरक्षा प्रणाली हानिरहित पदार्थों के प्रति अधिक प्रतिक्रिया करती है, जिससे छींक आना, त्वचा पर चकत्ते, सांस लेने में समस्या या सूजन जैसे लक्षण उत्पन्न होते हैं। बीएम अस्पताल में हमारी विशेषज्ञ टीम त्वचा परीक्षण, रक्त परीक्षण और एलिमिनेशन डाइट जैसी जांच विधियों से विशिष्ट एलर्जन की पहचान करती है। एक बार एलर्जन की पहचान हो जाने पर, हमारी उपचार योजना में एंटीहिस्टामाइन, डीकंजेस्टेंट, नेजल स्प्रे, इनहेलर या इम्यूनोथेरेपी (एलर्जी शॉट्स) शामिल हो सकते हैं। हम दीर्घकालिक राहत प्रदान करने पर ध्यान केंद्रित करते हैं, जिससे मरीज बेहतर सांस ले सकें और आरामदायक जीवन जी सकें।',
      },
      {
        type: "treatments",
        title: translations?.AllergyTreatment_treatments_title || 'उपलब्ध उपचार',
        description: translations?.AllergyTreatment_treatments_description || 'एलर्जी से राहत के लिए हमारे प्रमाणित उपचारों के साथ स्वतंत्रता से सांस लें – लक्षणों को नियंत्रित करने और एलर्जिक फ्लेयर-अप को रोकने के लिए विशेषज्ञ देखभाल और व्यक्तिगत समाधान।',
        cards: [
          {
            icon: Antihistamines, // Stethoscope - for general treatment/diagnosis
            title: translations?.AllergyTreatment_cards_title || 'एंटीहिस्टामाइन',
            content: translations?.AllergyTreatment_cards_content || 'छींक, खुजली और बहती नाक को प्रभावी रूप से दूर करें।',
          },
          {
            icon: Nasal, // Nose - relates directly to nasal treatments
            title: translations?.AllergyTreatment_cards_title1 || 'नेजल कोर्टिकोस्टेरॉइड्स',
            content: translations?.AllergyTreatment_cards_content1 || 'नाक की सूजन और जमाव को कम करें।',
          },
          {
            icon: Immunotherapy, // Syringe - for shots like immunotherapy
            title: translations?.AllergyTreatment_cards_title2 || 'इम्यूनोथेरेपी',
            content: translations?.AllergyTreatment_cards_content2 || 'लंबे समय तक सहनशीलता बढ़ाने के लिए एलर्जी शॉट्स।',
          },
          {
            icon: Inhalers, // Lungs - for inhalers and asthma treatment
            title: translations?.AllergyTreatment_cards_title3 || 'इनहेलर और आई ड्रॉप्स',
            content: translations?.AllergyTreatment_cards_content3 || 'एलर्जन के कारण अस्थमा और आँखों की जलन को नियंत्रित करें।',
          }
        ]

      },
      {
        type: "helpline",
        title: translations?.AllergyTreatment_helpline_title || '24/7 एलर्जी राहत हेल्पलाइन – मदद हमेशा बस एक कॉल दूर!',
        subtitle: translations?.AllergyTreatment_helpline_subtitle || 'हमारी विशेषज्ञ देखभाल टीम से अचानक एलर्जी लक्षणों, फ्लेयर-अप या आपात स्थितियों के लिए चौबीसों घंटे सहायता प्राप्त करें।',
        description: translations?.AllergyTreatment_helpline_description || 'CareDoc हर समय आपकी सहायता के लिए उपलब्ध है। तत्काल सहायता या प्रश्नों के लिए हमारे 24/7 हेल्पलाइन से संपर्क करें। हम त्वरित और भरोसेमंद सेवा प्रदान करने के लिए समर्पित हैं।',
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
      question: translations?.AllergyTreatment_question || 'एलर्जी क्या है और इसका निदान कैसे किया जाता है?',
      answer: translations?.AllergyTreatment_answer || 'एलर्जी एक प्रतिरक्षा प्रतिक्रिया है जो पराग, भोजन या धूल जैसे हानिरहित पदार्थों के प्रति होती है। इसका निदान त्वचा परीक्षण, रक्त परीक्षण और एलिमिनेशन डाइट के माध्यम से किया जाता है।',
    },
    {
      question: translations?.AllergyTreatment_question1 || 'एलर्जी के सामान्य लक्षण क्या हैं?',
      answer: translations?.AllergyTreatment_answer1 || 'लक्षणों में छींक आना, बहती नाक, खुजली वाली आँखें, त्वचा पर चकत्ते, सांस की तकलीफ और सूजन शामिल हैं, जो एलर्जन पर निर्भर करते हैं।',
    },
    {
      question: translations?.AllergyTreatment_question2 || 'बीएम अस्पताल में कौन-कौन से एलर्जी उपचार उपलब्ध हैं?',
      answer: translations?.AllergyTreatment_answer2 || 'हमारे उपचारों में एंटीहिस्टामाइन, नेजल स्प्रे, इम्यूनोथेरेपी (एलर्जी शॉट्स), इनहेलर और प्रत्येक मरीज के लिए अनुकूलित जीवनशैली परिवर्तन शामिल हैं।',
    },
    {
      question: translations?.AllergyTreatment_question3 || 'क्या इम्यूनोथेरेपी (एलर्जी शॉट्स) प्रभावी है?',
      answer: translations?.AllergyTreatment_answer3 || 'हाँ, इम्यूनोथेरेपी समय के साथ आपके शरीर को एलर्जन के प्रति सहनशील बनाती है, जिससे एलर्जी की तीव्रता और आवृत्ति कम होती है।',
    },
    {
      question: translations?.AllergyTreatment_question4 || 'क्या एलर्जी पूरी तरह से ठीक हो सकती है?',
      answer: translations?.AllergyTreatment_answer4 || 'हालाँकि एलर्जी का स्थायी इलाज नहीं है, लेकिन सही दवा, बचाव रणनीतियों और दीर्घकालिक देखभाल से इसे प्रभावी ढंग से नियंत्रित किया जा सकता है।',
    },
    {
      question: translations?.AllergyTreatment_question5 || 'एलर्जी के लक्षणों के लिए डॉक्टर को कब दिखाना चाहिए?',
      answer: translations?.AllergyTreatment_answer5 || 'यदि आपके लक्षण बार-बार होते हैं, गंभीर हैं या आपकी दैनिक गतिविधियों को प्रभावित करते हैं, तो उचित निदान और उपचार के लिए एलर्जिस्ट से परामर्श करें।',
    }
  ];

  return (
    <div className='bg-white'>
      <BackToTop />
      <Subnav onTranslations={handletranslate} />
      <Nav translations={translations} />
      <Mangement contentData={contentData} />
      <FAQSection faqItems={faqItems} translations={translations} />
      <Footer translations={translations} />
    </div>
  )
}
