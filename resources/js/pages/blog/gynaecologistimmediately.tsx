
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Subnav from '../components/subnav';
import Navbar from '../components/home/navbar';
import HomeAppointmentFrom from '../components/form/homeAppointment';

function Gynaecologistimmediately() {
    const [modelOpen, setModelOpen]= useState(false)
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }


    const signs = [
        {
            title: translations?.blog_title_heading || "लगातार या असामान्य पेल्विक दर्द",
            symptoms: [
                translations?.Unusual_Pelvic_Pain_symptoms1 || "कुछ दिनों से अधिक समय तक बना रहने वाला पुराना पेल्विक दर्द",
                translations?.Unusual_Pelvic_Pain_symptoms2 || "संभोग के दौरान तेज दर्द",
                translations?.Unusual_Pelvic_Pain_symptoms3 || "कमर या पैरों तक फैलने वाला दर्द",
                translations?.Unusual_Pelvic_Pain_symptoms4 || "दैनिक गतिविधियों में बाधा डालने वाला दर्द",
            ],
            concerns: translations?.Unusual_Pelvic_Pain_symptoms_concerns || "यह यूटेराइन फायब्रॉइड्स, ओवेरियन सिस्ट, एंडोमेट्रियोसिस, पेल्विक इंफ्लेमेटरी डिज़ीज़ या स्त्रीरोग से जुड़े कैंसर का संकेत हो सकता है।"
        },
        {
            title: translations?.Vaginal_title || "असामान्य योनि से रक्तस्राव या स्राव",
            symptoms: [
                translations?.Vaginal_symptoms_one || "मासिक धर्म के बीच में रक्तस्राव",
                translations?.Vaginal_symptoms_two || "बहुत अधिक रक्तस्राव जिससे बार-बार पैड बदलने की आवश्यकता हो",
                translations?.Vaginal_symptoms_three || "रजोनिवृत्ति के बाद रक्तस्राव",
                translations?.Vaginal_symptoms_four || "असामान्य रंग या दुर्गंधयुक्त योनि स्राव",
            ],
            concerns: translations?.Vaginal_concerns || "यह संक्रमण, पॉलिप्स, फायब्रॉइड्स, हार्मोनल असंतुलन या स्त्री कैंसर का संकेत हो सकता है।",
        },
        {
            title: translations?.Menopausal_title || "गंभीर रजोनिवृत्ति (Menopause) के लक्षण",
            symptoms: [
                translations?.Menopausal_symptoms_one || "तीव्र हॉट फ्लैशेस",
                translations?.Menopausal_symptoms_two || "रात में अत्यधिक पसीना आना",
                translations?.Menopausal_symptoms_three || "मूड स्विंग्स",
                translations?.Menopausal_symptoms_four || "लगातार योनि में सूखापन",
                translations?.Menopausal_symptoms_five || "नींद की गड़बड़ी",
            ],
            concerns: translations?.Menopausal_concerns || "एचआरटी या अन्य विकल्पों से इसका इलाज किया जा सकता है; मूल्यांकन अन्य कारणों को बाहर करता है।",
        },
        {
            title: translations?.Pelvic_Pressure_title || "पेल्विक पर दबाव, सूजन, या मल/मूत्र की आदतों में बदलाव",
            symptoms: [
                translations?.Pelvic_Pressure_symptoms1 || "लगातार पेट भरा हुआ या फूला हुआ महसूस होना",
                translations?.Pelvic_Pressure_symptoms2 || "थोड़ा खाने पर ही पेट भरने जैसा महसूस होना",
                translations?.Pelvic_Pressure_symptoms3 || "बार-बार या अचानक पेशाब लगना",
                translations?.Pelvic_Pressure_symptoms4 || "नई या लगातार बनी हुई मल त्याग की आदतों में बदलाव",
            ],
            concerns: translations?.Pelvic_Pressure_concerns || "यह फायब्रॉइड्स, ओवेरियन सिस्ट या ओवेरियन कैंसर की प्रारंभिक अवस्था का संकेत हो सकता है।",
        },
        {
            title: translations?.fibroids_title || "गाँठें, सूजन या लगातार जननांगों में खुजली",
            symptoms: [
                translations?.fibroids_symptoms_point_one || "नई गाँठें या घाव",
                translations?.fibroids_symptoms_point_two || "लगातार खुजली या दर्द",
                translations?.fibroids_symptoms_point_three || "त्वचा का रंग बदलना या सूजन",
            ],
            concerns: translations?.fibroids_concerns || "यह एसटीआई, सिस्ट, सौम्य वृद्धि या पूर्व-कैंसर स्थितियों से संबंधित हो सकता है।",
        }
    ];


    return (
        <div className='bg-white'>
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />
            <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                        {translations?.blog_title3 || "5 संकेत जो बताते हैं कि आपको तुरंत स्त्री रोग विशेषज्ञ से मिलना चाहिए"}
                    </h1>
                    <ul className="list-disc pl-6 mb-8 text-gray-700">
                        <li className="text-gray-700 mb-1 max-w-3xl">
                            {translations?.blog_description3 || "बीएम हॉस्पिटल में हम महिलाओं को उनके स्वास्थ्य को प्राथमिकता देने के लिए संपूर्ण और संवेदनशील स्त्री रोग सेवाएं प्रदान करते हैं। ऐसे संकेत पहचानें जिन्हें कभी नजरअंदाज नहीं करना चाहिए।"}
                        </li>
                        <li className="text-gray-600 mb-1">June 15, 2025</li>
                        <li className="text-gray-600 mb-1">{translations?.blog_auther || "बीएम हॉस्पिटल टीम"}</li>
                    </ul>
                    <div className="grid gap-8 md:grid-cols-2">
                        {signs.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                    {index + 1}. {item.title}
                                </h3>
                                <p className="text-gray-700 mb-2 font-medium">{translations?.What_look || 'ध्यान देने योग्य संकेत'}:</p>
                                <ul className="list-disc list-inside text-gray-600 mb-2">
                                    {item.symptoms.map((s, i) => (
                                        <li key={i}>{s}</li>
                                    ))}
                                </ul>
                                <p className="text-gray-700 italic">
                                    <strong>{translations?.Potential_concerns || 'संभावित चिंताएं'}:</strong> {item.concerns}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 bg-blue-100 p-8 rounded-lg text-center">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4">
                            {translations?.Expert_Gynecological_Care_title || 'विशेषज्ञ स्त्री रोग देखभाल के लिए बीएम हॉस्पिटल पर भरोसा करें'}
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                            {translations?.Expert_Gynecological_Care_sub || 'नियमित जांच से लेकर विशेष उपचार तक, हमारे अनुभवी स्त्री रोग विशेषज्ञ आपकी आवश्यकताओं के अनुसार समग्र देखभाल प्रदान करते हैं। देर न करें — समय पर हस्तक्षेप जीवन बचा सकता है।'}                        </p>
                        <button onClick={()=>setModelOpen(true)} className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition">
                             {translations?.Appointment || 'अपॉइंटमेंट'}
                        </button>
                    </div>
                    {modelOpen && (
                        <div>
                            <span onClick={()=>setModelOpen(false)} className='text-rose-700 font-bold'>Close</span>
                            <HomeAppointmentFrom translations={translations}/>
                        </div>
                    )}
                </div>
            </div>
            <Footer translations={translations} />
        </div>
    )
}

export default Gynaecologistimmediately
