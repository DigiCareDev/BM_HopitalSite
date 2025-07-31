import React, { useState } from 'react'
import Footer from "../components/Footer";
import Subnav from '../components/subnav';
import Navbar from '../components/home/navbar';
import HomeAppointmentFrom from '../components/form/homeAppointment';

export default function ChildhoodIllnesses() {
    const [translations, setTranslations] = useState({});
    const [modelOpen, setModelOpen] =useState(false);
  
    const handletranslate = (data) => {
      setTranslations(data);
    }

    const childhoodIllnesses = [
  {
    title: translations?.common_cold_title || "सर्दी और फ्लू",
    summary: translations?.common_cold_summary || "ये अलग-अलग श्वसन संबंधित वायरल संक्रमण हैं जो बच्चों में अक्सर पाए जाते हैं। फ्लू के लक्षण आमतौर पर अधिक तीव्र होते हैं।",
    symptoms: translations?.common_cold_symptoms || "बहती या बंद नाक, छींक आना, खांसी, गले में खराश, बुखार, बदन दर्द, थकान।",
    doctorVisit: translations?.common_cold_doctorVisit || "तेज बुखार, सांस लेने में कठिनाई, लगातार खांसी, असामान्य सुस्ती।",
  },
  {
    title: translations?.bb_title || "ब्रोंकाइटिस और ब्रोंकियोलाइटिस",
    summary: translations?.bb_summary || "निम्न श्वसन मार्ग के संक्रमण जो नवजात और छोटे बच्चों में आम होते हैं।",
    symptoms: translations?.bb_symptoms || "लगातार खांसी, सांस फूलना, तेज या कठिन सांस लेना, घरघराहट, बुखार।",
    doctorVisit: translations?.bb_doctorVisit || "तेज सांस चलना, होंठों का नीला पड़ना, निर्जलीकरण के लक्षण।",
  },
  {
    title: translations?.ear_infections_title || "कान का संक्रमण",
    summary: translations?.ear_infections_summary || "अक्सर सर्दी के बाद होने वाली जटिलता, जब बैक्टीरिया या वायरस मिडिल ईयर को संक्रमित कर देते हैं।",
    symptoms: translations?.ear_infections_symptoms || "कान में दर्द, कान को खींचना, बुखार, चिड़चिड़ापन, नींद में परेशानी, सुनने में कमी।",
    doctorVisit: translations?.ear_infections_doctorVisit || "लगातार कान में दर्द, बुखार, कान से तरल पदार्थ का रिसाव।",
  },
  {
    title: translations?.hfm_title || "हैंड-फुट-माउथ डिज़ीज़",
    summary: translations?.hfm_summary || "एक संक्रामक वायरल बीमारी जिसमें मुंह में छाले और हाथ-पैरों पर चकत्ते होते हैं।",
    symptoms: translations?.hfm_symptoms || "बुखार, गले में खराश, मुंह में दर्दनाक छाले, हथेलियों, तलवों और नितंबों पर चकत्ते।",
    doctorVisit: translations?.hfm_doctorVisit || "तेज बुखार, मुंह में गंभीर दर्द, निर्जलीकरण के लक्षण।",
  },
  {
    title: translations?.gastroenteritis_title || "गैस्ट्रोएन्टेराइटिस (पेट फ्लू)",
    summary: translations?.gastroenteritis_summary || "पेट और आंतों में जलन, जिससे उल्टी और ढीले दस्त होते हैं।",
    symptoms: translations?.gastroenteritis_symptoms || "मतली, उल्टी, दस्त, पेट में ऐंठन, हल्का बुखार।",
    doctorVisit: translations?.gastroenteritis_doctorVisit || "गंभीर निर्जलीकरण, मल में खून, लगातार बुखार, पेट में दर्द।",
  },
  {
    title: translations?.chickenpox_title || "चेचक (चिकनपॉक्स)",
    summary: translations?.chickenpox_summary || "एक अत्यधिक संक्रामक वायरल संक्रमण जो खुजली वाले चकत्तों और फफोलों का कारण बनता है।",
    symptoms: translations?.chickenpox_symptoms || "लाल खुजली वाला चकत्ता, हल्का बुखार, थकान, भूख में कमी।",
    doctorVisit: translations?.chickenpox_doctorVisit || "आंखों के पास दाने, गंभीर दर्द, फफोलों के आसपास संक्रमण के लक्षण।",
  },
  {
    title: translations?.asthma_title || "अस्थमा",
    summary: translations?.asthma_summary || "एक दीर्घकालिक फेफड़ों की स्थिति जिससे वायुमार्ग में सूजन और संकुचन होता है।",
    symptoms: translations?.asthma_symptoms || "लगातार खांसी, घरघराहट, सांस की कमी, सीने में जकड़न।",
    doctorVisit: translations?.asthma_doctorVisit || "गंभीर घरघराहट, नीले होंठ, बोलने में कठिनाई।",
  },
  {
    title: translations?.eczema_title || "एक्जिमा (एटोपिक डर्माटाइटिस)",
    summary: translations?.eczema_summary || "एक त्वचा की स्थिति जिसमें लालिमा, रूखापन और तीव्र खुजली होती है।",
    symptoms: translations?.eczema_symptoms || "रूखी, लाल, खुजली वाली त्वचा, खुरदुरी या रिसने वाली त्वचा।",
    doctorVisit: translations?.eczema_doctorVisit || "अत्यधिक खुजली, संक्रमण के लक्षण, फैलता हुआ चकत्ता।",
  },
  {
    title: translations?.allergic_title || "एलर्जिक राइनाइटिस (हे फीवर)",
    summary: translations?.allergic_summary || "पराग या धूल जैसे हवाई एलर्जन के प्रति एलर्जिक प्रतिक्रिया।",
    symptoms: translations?.allergic_symptoms || "छींक आना, बहती नाक, आंखों में खुजली, आंखों से पानी आना।",
    doctorVisit: translations?.allergic_doctorVisit || "सांस लेने में कठिनाई, बार-बार साइनस संक्रमण।",
  },
  {
    title: translations?.skin_infections_title || "त्वचा संक्रमण",
    summary: translations?.skin_infections_summary || "बच्चों में कट, खरोंच या कीड़े के काटने के कारण आम।",
    symptoms: translations?.skin_infections_symptoms || "लाली, सूजन, चकत्ते, मवाद, फफोले।",
    doctorVisit: translations?.skin_infections_doctorVisit || "बुखार, फैलती लाली, गंभीर दर्द, हिलने-डुलने में कठिनाई।",
  }
];


  return (
    <div className="bg-white">
    <Subnav onTranslations={handletranslate} />
    <Navbar translations={translations} />
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
       {translations?.blog_title1 || 'हर माता-पिता को जाननी चाहिएं ये 10 सामान्य बाल रोग – बीएम हॉस्पिटल की ज़रूरी सलाह'}
      </h1>
    <ul>
      <li className="text-gray-600 mb-1">{translations?.childhoodIllnesses_heading || 'BM हॉस्पिटल की बाल चिकित्सा टीम से आवश्यक मार्गदर्शन – सूचित और आत्मविश्वासी देखभाल के लिए।'}</li>
      <li className="text-gray-600 mb-1"> {translations?.blog_auther || "बीएम हॉस्पिटल टीम"} </li>
      <li className="text-gray-600 mb-1">June 15, 2025</li>
    </ul>

      <div className="grid md:grid-cols-2 gap-8">
        {childhoodIllnesses.map((illness, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              {index + 1}. {illness.title}
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>{translations?.childhoodIllnesses_overview || 'सामान्य जानकारी'}:</strong> {illness.summary}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>{translations?.childhoodIllnesses_Symptoms || 'लक्षण'}:</strong> {illness.symptoms}
            </p>
            <p className="text-gray-700">
              <strong>{translations?.childhoodIllnesses_heading || 'डॉक्टर को कब दिखाएं'}</strong> {illness.doctorVisit}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">
          {translations?.childhoodIllnesses_heading_visithospital || 'BM हॉस्पिटल के बाल विभाग में आएं'}
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
         {translations?.childhoodIllnesses_description_visithospital || 'हमारा बाल रोग ओपीडी सुविधा और विशेषज्ञ देखभाल के लिए डिज़ाइन किया गया है। हम समय पर परामर्श, आपातकालीन सेवाएं और प्रारंभिक पहचान व उच्च गुणवत्ता वाले इलाज के लिए सहयोग प्रदान करते हैं। आपके बच्चे का स्वास्थ्य हमारी सर्वोच्च प्राथमिकता है।'}
        </p>
        <button  onClick={()=>setModelOpen(true)} className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
           {translations?.Appointment || 'अपॉइंटमेंट'}
        </button>
      </div>
      {modelOpen && (
        <div className='max-w-2xl items-center '>
          <button onClick={()=>setModelOpen(false)} className='text-rose-700 font-bold text-xl '>close</button>
          <HomeAppointmentFrom translations={translations} />
        </div>
        )}
    </div>
    
    <Footer translations={translations}/>
    </div>
  );
}
