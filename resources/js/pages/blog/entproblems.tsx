import React, { useState } from 'react'
import Footer from '../components/Footer'
import Subnav from '../components/subnav';
import Navbar from '../components/home/navbar';

function Entproblems() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }


    return (
        <div className='bg-white'>
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />
            <div className='py-10'>
                <div className="max-w-7xl mx-auto mb-10">
                    <h1 className="text-4xl font-bold text-blue-900 mb-2">{translations?.Entproblems_heading || 'सामान्य ईएनटी समस्याएं समझें: विशेषज्ञ से कब संपर्क करें'}</h1>
                    <ul>
                        <li className=" text-gray-500">{translations?.Entproblems_sunheading || 'बीएम अस्पताल से आपकी मार्गदर्शिका'}</li>
                        <li className="text-gray-600 mb-1">June 15, 2025</li>
                        <li className="text-gray-600 mb-1">{translations?.blog_auther || "बीएम हॉस्पिटल टीम"}</li>
                    </ul>
                </div>

                <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md leading-relaxed text-gray-700">
                    <section className="py-4 px-4 sm:px-2 space-y-4">
                        <p>
                            {translations?.Entproblems_heading1 || 'हमारी सुनने, सूंघने, स्वाद लेने और संतुलन बनाए रखने की क्षमता हमारे दैनिक जीवन में महत्वपूर्ण भूमिका निभाती है। बीएम अस्पताल में, हमारे समर्पित ईएनटी विशेषज्ञ विभिन्न स्थितियों का निदान और उपचार करते हैं ताकि आराम और कार्यक्षमता बहाल की जा सके।'}                        </p>
                        <p>
                            {translations?.Entproblems_subheading1 || 'यहां कुछ सामान्य ईएनटी समस्याओं और विशेषज्ञ की देखभाल कब लेनी चाहिए, इसका विवरण दिया गया है:'}
                        </p>
                    </section>

                    {/* EAR ISSUES */}
                    <section className="bg-blue-50 py-12 px-4 sm:px-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">1. {translations?.Ear_Issues || 'लगातार कान की समस्याएं'}</h2>
                        <div className="space-y-4">
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>{translations?.Ear_Infections_title || 'कान का संक्रमण (ओटाइटिस मीडिया / एक्सटर्ना)'}:</strong>{translations?.Ear_Infections_sub || 'बार-बार या इलाज से ठीक न होने वाले संक्रमणों के लिए ईएनटी मूल्यांकन आवश्यक है।'}</li>
                                <li><strong>{translations?.Swimmer_Ear || 'स्विमर ईयर'} :</strong> {translations?.Swimmer_Ear_sub || 'तैराकी के बाद लगातार दर्द विशेष उपचार की मांग करता है।'}</li>
                                <li><strong>{translations?.Hearing_Loss || 'श्रवण हानि'} :</strong> {translations?.Hearing_Loss_sub || 'अचानक या धीरे-धीरे सुनाई देना बंद होना, विशेषज्ञ द्वारा जांच की आवश्यकता होती है।'}</li>
                                <li><strong>{translations?.Tinnitus || 'कानों में घंटी बजना (टिनाइटस)'} :</strong> {translations?.Tinnitus_sub || 'कानों में बजना या गूंज सुनाई देना आगे जांच की आवश्यकता को दर्शाता है।'}</li>
                                <li><strong>{translations?.Vertigo || 'वर्टिगो'} :</strong> {translations?.Vertigo_sub || 'चक्कर आना या घूमने जैसा महसूस होना आंतरिक कान की समस्या का संकेत हो सकता है।'}</li>
                                <li><strong>{translations?.Cholesteatoma || 'कोलेस्टेटोमा'}:</strong> {translations?.Cholesteatoma_sub || 'लगातार कान बहना या सुनने की कमी एक गंभीर मिडिल ईयर कंडीशन को दर्शा सकती है।'}</li>
                            </ul>
                        </div>
                    </section>

                    {/* NOSE & SINUS */}
                    <section className="py-12 px-4 sm:px-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">2. {translations?.Chronic_Nose_Complaints || 'नाक और साइनस की पुरानी समस्याएं'}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>{translations?.SinusProblems || 'साइनस की समस्याएं'}:</strong> {translations?.SinusProblems_sub || 'लगातार जकड़न, दबाव या संक्रमण पुरानी साइनोसाइटिस का संकेत हो सकता है।'}</li>
                            <li><strong>{translations?.Nosebleeds || 'नाक से खून आना'}:</strong> {translations?.Nosebleeds_sub || 'बार-बार या अत्यधिक नाक से खून आना विशेषज्ञ की देखभाल की मांग कर सकता है।' }</li>
                            <li><strong>{translations?.Allergies || 'एलर्जी'}:</strong> {translations?.Allergies_sub || 'ओवर-द-काउंटर दवाओं से ठीक न होने वाली एलर्जिक राइनाइटिस के लिए ईएनटी समर्थन की आवश्यकता होती है।'}</li>
                        </ul>
                    </section>

                    {/* THROAT ISSUES */}
                    <section className="bg-blue-50 py-12 px-4 sm:px-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">3. {translations?.Throat_Voice_Concerns || 'गला और आवाज से जुड़ी चिंताएं'}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>{translations?.Hoarseness || 'आवाज़ में भारीपन'}:</strong> {translations?.Hoarseness_sub || '2 सप्ताह से अधिक समय तक आवाज में भारीपन होने पर ईएनटी जांच जरूरी है।'}</li>
                            <li><strong>{translations?.Dysphagia || 'निगलने में कठिनाई (डिस्फेजिया)'}:</strong> {translations?.Dysphagia_sub || 'बार-बार निगलने में कठिनाई या भोजन अटकना आगे परीक्षण की आवश्यकता को दर्शाता है।'}</li>
                            <li><strong>{translations?.Tonsils_Adenoids || 'टॉन्सिल्स और एडिनॉइड्स'}:</strong> {translations?.Tonsils_Adenoids_sub || 'बच्चों में बार-बार गले में खराश या खर्राटे आना सर्जरी की आवश्यकता हो सकती है।'}</li>
                            <li><strong>{translations?.LPR || 'एलपीआर (गैस्ट्रिक रिफ्लक्स)'}:</strong> {translations?.LPR_sub || 'गले में लक्षण गैस्ट्रिक रिफ्लक्स के कारण हो सकते हैं, जिन्हें ईएनटी विशेषज्ञ द्वारा नियंत्रित किया जा सकता है।'}</li>
                        </ul>
                    </section>

                    {/* SLEEP DISORDERS */}
                    <section className="py-12 px-4 sm:px-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">4. {translations?.Sleep_Related_Disorders || 'नींद से संबंधित सांस लेने की समस्याएं'}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Snoring:</strong>{translations?.Snoring || 'लगातार खर्राटे लेना, विशेष रूप से सांस रुकने के साथ, स्लीप एपनिया का संकेत हो सकता है।'}</li>
                            <li><strong>Sleep Apnea:</strong>{translations?.Sleep_Apnea || 'ईएनटी विशेषज्ञ इस गंभीर स्थिति का मूल्यांकन और उपचार कर सकते हैं ताकि स्वास्थ्य बेहतर हो सके।'}</li>
                        </ul>
                    </section>

                    {/* CALL TO ACTION */}
                    <section className="bg-blue-100 py-16 px-4 sm:px-6 text-center">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">{translations?.ENT_Specialists || 'बीएम अस्पताल के ईएनटी विशेषज्ञों से कब संपर्क करें'}</h2>
                        <p className="text-lg mb-4">
                            {translations?.ENT_Specialists_Sub || 'हमारा ईएनटी विभाग नवीनतम तकनीक के साथ विशेषज्ञ निदान और उपचार प्रदान करता है। जीवन में बार-बार असुविधा को नजरअंदाज न करें — समय पर देखभाल से फर्क पड़ता है।'}
                        </p>
                        <p className="text-lg text-blue-800 font-semibold">
                            {translations?.Call_ENT_team || ' आज ही हमारे विशेषज्ञ ईएनटी टीम से परामर्श के लिए कॉल करें।'}
                        </p>
                    </section>
                </div>
            </div>
            <Footer translations={translations} />
        </div>
    )
}

export default Entproblems
