import React, { useState } from 'react'
import Footer from '../components/Footer';
import Single from '../components/blog-single';
import Subnav from '../components/subnav';
import Navbar from '../components/home/navbar';

function Aioct() {
  const [translations, setTranslations] = useState({});

  const handletranslate = (data) => {
    setTranslations(data);
  }

  const blogData = {
    title: translations?.blog_title || 'ओसीटी और प्रिसिशन एंजियोप्लास्टी: हृदय देखभाल में क्रांति',
    author: translations?.blog_auther || "बीएम हॉस्पिटल टीम",
    date: "June 15, 2025",
    intro: [
      translations?.Aioct_intro || "बीएम हॉस्पिटल में, हम अत्याधुनिक एआई-संचालित तकनीकों जैसे ऑप्टिकल कोहेरेंस टोमोग्राफी (OCT) को अपनी हृदय देखभाल प्रक्रिया में शामिल करके गर्व महसूस करते हैं। एसजीपीजीआई बाराबंकी जैसे अग्रणी संस्थानों के साथ मिलकर हम अद्वितीय डायग्नोस्टिक सटीकता और उपचार प्रभावशीलता प्रदान करते हैं।",
      translations?.Aioct_intro1 || "OCT पारंपरिक एंजियोप्लास्टी को बदल देता है, जो धमनी रुकावटों की उच्च-रिज़ॉल्यूशन, रियल-टाइम 3D इमेजिंग प्रदान करता है, जिससे व्यक्तिगत और अत्यधिक प्रभावी हस्तक्षेप संभव होता है।",
    ],
    features: {
      title: translations?.Aioct_features_heading || "OCT क्यों है अलग",
      style: "blue",
      items: [
        {
          title: translations?.Aioct_features_title || "सूक्ष्म सटीकता",
          text: translations?.Aioct_features_text || "निकट-अवरक्त प्रकाश की मदद से पट्टिका की संरचना और संरचना को बेहद स्पष्टता से देखें।",
        },
        {
          title: translations?.Aioct_features_title1 || "व्यक्तिगत उपचार",
          text: translations?.Aioct_features_text1 || "हर मरीज की धमनी की विशेषताओं के अनुसार स्टेंट का आकार तय करना और उन्हें सही जगह पर लगाना।",
        },
        {
          title: translations?.Aioct_features_title2 || "बेहतर स्टेंट लगाने की प्रक्रिया",
          text: translations?.Aioct_features_text2 || "प्रक्रिया के दौरान एआई एल्गोरिद्म स्टेंट को बेहतर तरीके से फैलाने और सही स्थिति में लगाने में मदद करते हैं।",
        },
        {
          title: translations?.Aioct_features_title3 || "समय पर निदान",
          text: translations?.Aioct_features_text3 || "भारतीय युवाओं में सामान्य हृदय समस्याओं की जल्दी और सटीक पहचान।",
        }
      ]
    },
    outcomes: {
      title: translations?.Aioct_outcomes_title || "रोगी के परिणामों पर सिद्ध प्रभाव",
        content: [
          translations?.Aioct_outcomes_content || "AI-OCT के साथ, हृदय रोग विशेषज्ञों को प्रक्रियाओं के दौरान अधिक जानकारी और बेहतर नियंत्रण मिलता है, जिससे पुनः हस्तक्षेप की आवश्यकता कम होती है, स्टेंट की उम्र बढ़ती है और मरीज का दीर्घकालिक स्वास्थ्य बेहतर होता है।",
        ],
          bullets: [
            translations?.Aioct_outcomes_bullets || "री-स्टेनोसिस (धमनी का फिर से संकरा होना) की संभावना में कमी",
            translations?.Aioct_outcomes_bullets1 || "रियल-टाइम एआई डेटा से संचालित प्रक्रिया के दौरान समायोजन",
            translations?.Aioct_outcomes_bullets2 || "तेज़ रिकवरी और अस्पताल में पुनः भर्ती की कम संभावना",
          ]
},
commitment: {
  title: translations?.Aioct_commitment_heading || "बीएम हॉस्पिटल – आपका हृदय स्वास्थ्य का साथी",
    style: "highlight",
      items: [
        {
          title: translations?.Aioct_commitment_title || "विशेषज्ञ ओपीडी की सुविधा",
          text: translations?.Aioct_commitment_text || "विशेषज्ञ हृदय रोग विशेषज्ञों से आसानी से जुड़ें, एक सुव्यवस्थित बाह्य रोगी विभाग के माध्यम से।",
        },
        {
          title: translations?.Aioct_commitment_title1 || "आधुनिक बुनियादी ढांचा",
          text: translations?.Aioct_commitment_text1 || "नियमित रूप से डायग्नोस्टिक और सर्जिकल तकनीक को अपडेट कर विश्वस्तरीय देखभाल प्रदान करना।",
        },
        {
          title: translations?.Aioct_commitment_title2 || "24/7 आपातकालीन तत्परता",
          text: translations?.Aioct_commitment_text2 || "पूरी तरह सुसज्जित ट्रॉमा सेंटर, जो संकट की घड़ी में तुरंत सेवा के लिए तैयार रहता है।",
        }
      ]
}
  };



return (
  <div>
    <Subnav onTranslations={handletranslate} />
    <Navbar translations={translations} />
    <Single blogData={blogData} />
    <Footer translations={translations} />
  </div>
)
}

export default Aioct;
