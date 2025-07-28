import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import BackToTop from "./components/BackToTopButton"
import Subnav from "./components/subnav";

const TermsAndConditions = () => {
  const [translations, setTranslations] = useState({});

  const handletranslate = (data) => {
    setTranslations(data);
  }
  return (
    <>
      <BackToTop />
      <Subnav onTranslations={handletranslate} />
      <Nav translations={translations} />
      <div className='bg-white py-10'>
        <div className="rounded-xl shadow hover:shadow-2xl p-10 text-gray-800 px-4 py-8 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">{translations?.pp_heading || "नियम और शर्तें – बीएम अस्पताल"}</h1>
          <p className="mb-4">
            {translations?.pp_title || "बीएम अस्पताल में आपका स्वागत है। हमारी सेवाओं, वेबसाइट या सुविधाओं का उपयोग करके, आप निम्नलिखित नियमों और शर्तों का पालन करने और उनसे बंधे रहने के लिए सहमत होते हैं। कृपया इन्हें ध्यानपूर्वक पढ़ें।"}

          </p>

          <h2 className="text-xl font-semibold text-blue-600 mb-2">{translations?.pp_terms_heading || "1. नियमों की स्वीकृति"}</h2>
          <p className="mb-4">
            {translations?.pp_terms_heading_desc || "बीएम अस्पताल द्वारा प्रदान की गई किसी भी सेवा का उपयोग करके, जिसमें चिकित्सा परामर्श, डायग्नोस्टिक सेवाएं, सर्जरी या डिजिटल प्लेटफॉर्म शामिल हैं, आप इन नियमों से सहमत होते हैं। यदि आप सहमत नहीं हैं, तो कृपया हमारी सेवाओं का उपयोग न करें।"}
          </p>

          <h2 className="text-xl font-semibold text-blue-600 mb-2">{translations?.pp_Disclaimer_title || "चिकित्सा सेवा अस्वीकरण"}</h2>
          <p className="mb-4">
            {translations?.pp_Disclaimer_heading || "बीएम अस्पताल सर्वोत्तम चिकित्सा प्रथाओं और उपलब्ध संसाधनों के आधार पर स्वास्थ्य सेवाएं प्रदान करता है। हम सटीकता और उत्कृष्टता के लिए प्रयास करते हैं, लेकिन कोई भी उपचार किसी विशिष्ट परिणाम की गारंटी नहीं देता।"}
          </p>
          <p className="mb-4">
            {translations?.pp_Disclaimer_desc || "हम रोगियों को पूर्ण और सटीक चिकित्सा इतिहास प्रदान करने के लिए प्रोत्साहित करते हैं। ऐसा न करने से देखभाल की गुणवत्ता और परिणाम प्रभावित हो सकते हैं।"}
          </p>


          <h2 className="text-xl font-semibold text-blue-600 mb-2">{translations?.pp_Appointments_title || " अपॉइंटमेंट और रद्दीकरण"}</h2>
          <p className="mb-4">
            {translations?.pp_Appointments_heading || "अपॉइंटमेंट ऑनलाइन, फोन द्वारा या व्यक्तिगत रूप से निर्धारित किए जा सकते हैं। हम अनुरोध करते हैं कि मरीज निर्धारित समय से कम से कम 15 मिनट पहले पहुंचें।"}
          </p>
          <p className="mb-4">
            {translations?.pp_Appointments_desc || "रद्दीकरण की जानकारी पहले से दी जानी चाहिए। आपात स्थिति या अनपेक्षित परिस्थितियों में बीएम अस्पताल अपॉइंटमेंट को पुनर्निर्धारित या रद्द करने का अधिकार सुरक्षित रखता है।"}
          </p>

          {/* Section 1 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{translations?.pp_Payments_title || "भुगतान और बिलिंग"}</h2>
            <p className="mt-2">{translations?.pp_Payments_heading || "सभी उपचार, परामर्श और प्रक्रियाएं शुल्क योग्य हैं जब तक कि अन्यथा उल्लेख न किया गया हो।"}</p>
            <p className="mt-2">{translations?.pp_Payments_desc || "रोगी जिम्मेदार हैं"}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{translations?.pp_Payments_point_one || "अस्पताल की नीति के अनुसार बिल चुकाने के लिए"}</li>
              <li>{translations?.pp_Payments_point_two || "प्रक्रियाओं से पहले बीमा कवरेज की पुष्टि करने के लिए"}</li>
              <li>{translations?.pp_Payments_point_three || "जो राशि बीमा द्वारा कवर नहीं की गई हो उसे चुकाने के लिए"}</li>
              <li>{translations?.pp_Payments_point_four || "विलंबित या अप्राप्त बिलों पर दंड लग सकते हैं या गैर-आपातकालीन सेवाओं की पहुंच प्रभावित हो सकती है।"}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{translations?.pp_dp_title || "5. वेबसाइट और डिजिटल प्लेटफ़ॉर्म का उपयोग"}</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>{translations?.pp_dp_heading || "उपयोगकर्ता सहमत होते हैं"}</li>
              <li>{translations?.pp_dp_point_one || "साइट या सेवाओं का दुरुपयोग या नुकसान न करें"}</li>
              <li>{translations?.pp_dp_point_two || "केवल वेबसाइट की सामग्री पर चिकित्सा निर्णय के लिए निर्भर न रहें"}</li>
              <li>{translations?.pp_dp_point_three || "लॉगिन क्रेडेंशियल्स की गोपनीयता बनाए रखें (यदि कोई हो)"}</li>
              <li>{translations?.pp_dp_point_four || "बीएम अस्पताल हमारी वेबसाइट के माध्यम से एक्सेस किए गए किसी भी तृतीय-पक्ष लिंक या सेवाओं से होने वाले नुकसान के लिए जिम्मेदार नहीं है।"}</li>
            </ul>
          </section>

          <h2 className="text-xl font-semibold text-blue-600 my-2 ">{translations?.pp_ds_title || " गोपनीयता और डेटा सुरक्षा"}</h2>
          <p className="mb-4">
            {translations?.pp_ds_heading || "हम आपकी गोपनीयता का मूल्य रखते हैं और हमारे गोपनीयता नीति के अनुसार आपके व्यक्तिगत और चिकित्सा डेटा की सुरक्षा करते हैं। हमारी सेवाओं का उपयोग करके, आप नीति के अनुसार डेटा संग्रहण और उपयोग के लिए सहमति देते हैं।"}
          </p>

          {/* Section 3 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{translations?.pp_coc_title || "आचार संहिता"}</h2>
            <p>{translations?.pp_coc_point_one || "रोगियों और आगंतुकों से अपेक्षा की जाती है कि वे"}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{translations?.pp_coc_point_two || "चिकित्सा कर्मचारियों और अन्य रोगियों के साथ सम्मानपूर्वक व्यवहार करें"}</li>
              <li>{translations?.pp_coc_point_three || "अस्पताल के दिशानिर्देशों और सुरक्षा नियमों का पालन करें"}</li>
              <li>{translations?.pp_coc_point_four || "अशिष्ट, अपमानजनक या हानिकारक व्यवहार से बचें"}</li>
              <li>{translations?.pp_coc_point_five || "बीएम अस्पताल उन व्यक्तियों को सेवा देने से इनकार करने का अधिकार सुरक्षित रखता है जो इन मानकों का उल्लंघन करते हैं। "}</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">6. {translations?.pp_lol_title || "8. दायित्व की सीमा"}</h2>
            <p>
              {translations?.pp_lol_heading || "जब तक सिद्ध लापरवाही या कदाचार न हो, बीएम अस्पताल, उसका स्टाफ और सहयोगी किसी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक या परिणामी नुकसान के लिए उत्तरदायी नहीं होंगे।"}
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">7. {translations?.pp_mtt_title || "शर्तों में संशोधन"}</h2>
            <p>
              {translations?.pp_mtt_heading || "इन शर्तों को बिना किसी पूर्व सूचना के अपडेट किया जा सकता है। सेवाओं का निरंतर उपयोग परिवर्तनों की स्वीकृति को दर्शाता है।"}
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">8.{translations?.pp_contact_title || " संपर्क करें"}</h2>
            <p className="mb-1">{translations?.pp_constent_name || "बीएम अस्पताल"}</p>
            <p className="mb-1">{translations?.pp_constent_place || "बाराबंकी, उत्तर प्रदेश"}</p>
            <a href='tel:+917318000751' className="mb-1">{translations?.pp_constent_number || "📞 फ़ोन"}: +91 7318000751 – 55</a >
            <p>{translations?.pp_constent_email || "✉️ ईमेल"}: <a href="mailto:info@bmswtrust.org" className="text-blue-500 underline">info@bmswtrust.org</a></p>
          </section>
        </div>
      </div>
      <Footer translations={translations} />
    </>
  );
};

export default TermsAndConditions;
