import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/home/navbar'
import BackToTop from "./components/BackToTopButton"
import Subnav from "./components/subnav";


const PrivacyPolicy = () => {
    const [translations, setTranslations] = useState({});

    const handletranslate =(data)=> {
        setTranslations(data);
    }

    return (
        <>
                           <BackToTop/>
                <Subnav onTranslations={handletranslate}/>
            <Navbar translations={translations}/>
            <div className='bg-white py-10'>
                <div className="rounded-xl shadow hover:shadow-2xl p-10 text-gray-800 px-4 py-8 max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">{translations?.tac_heading || 'गोपनीयता नीति – बीएम अस्पताल'}</h1>
                    <p className="mb-4">
                        {translations?.tac_title || 'बीएम अस्पताल में, हम अपने मरीजों और आगंतुकों की गोपनीयता और गोपनीय जानकारी की सुरक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति यह बताती है कि हम आपके व्यक्तिगत जानकारी को कैसे एकत्रित, उपयोग, प्रकट और सुरक्षित करते हैं जब आप हमारे अस्पताल, वेबसाइट पर आते हैं या हमारी सेवाओं का उपयोग करते हैं।'}
                    </p>

                    {/* Section 1 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">1. {translations?.tac_iwc_heading || 'हम कौन-कौन सी जानकारी एकत्र करते हैं'}</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>{translations?.tac_iwc_point_one || 'नाम, पता, फ़ोन नंबर, ईमेल पता'}</li>
                            <li>{translations?.tac_iwc_point_two || 'जन्म तिथि, लिंग और पहचान संबंधी विवरण'}</li>
                            <li>{translations?.tac_iwc_point_three || 'चिकित्सा इतिहास, रिपोर्ट और उपचार रिकॉर्ड'}</li>
                            <li>{translations?.tac_iwc_point_four || 'वेबसाइट उपयोग डेटा (कुकीज़ या समान तकनीकों के माध्यम से)'}</li>
                            <li>{translations?.tac_iwc_point_five || 'बीमा और बिलिंग जानकारी'}</li>
                        </ul>
                        <p className="mt-2">{translations?.tac_iwc_paragraph || 'यह जानकारी तब एकत्र की जाती है जब आप:'}</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>{translations?.tac_iwc_paragraph_point_one || 'हमारे अस्पताल में पंजीकरण करते हैं या आते हैं'}</li>
                            <li>{translations?.tac_iwc_paragraph_point_two || 'फॉर्म या दस्तावेज़ जमा करते हैं'}</li>
                            <li>{translations?.tac_iwc_paragraph_point_three || 'हमारे स्वास्थ्य देखभाल पेशेवरों से संपर्क करते हैं'}</li>
                            <li>{translations?.tac_iwc_paragraph_point_four || 'हमारी वेबसाइट या डिजिटल प्लेटफार्म तक पहुंचते हैं'}</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">2. {translations?.tac_uoi_heading || 'जानकारी का उपयोग'}</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>{translations?.tac_uoi_point_one || 'सटीक निदान और उपचार प्रदान करना'}</li>
                            <li>{translations?.tac_uoi_point_two || 'नियुक्तियों को निर्धारित करना और प्रबंधित करना'}</li>
                            <li>{translations?.tac_uoi_point_three || 'भुगतान और बीमा दावों की प्रक्रिया'}</li>
                            <li>{translations?.tac_uoi_point_four || 'चिकित्सा और कानूनी रिकॉर्ड बनाए रखना'}</li>
                            <li>{translations?.tac_uoi_point_five || 'अस्पताल संचालन और रोगी देखभाल में सुधार करना'}</li>
                            <li>{translations?.tac_uoi_point_six || 'महत्वपूर्ण अपडेट और स्वास्थ्य संबंधी जानकारी देना'}</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">3. {translations?.tac_doi_heading || 'जानकारी का प्रकटीकरण'}</h2>
                        <p>{translations?.tac_doi_title || 'व्यक्तिगत जानकारी केवल निम्न के साथ साझा की जा सकती है:'}</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>{translations?.tac_doi_point_one || 'आपके उपचार में शामिल स्वास्थ्य पेशेवर'}</li>
                            <li>{translations?.tac_doi_point_two || 'बीमा प्रदाता, दावे की प्रक्रिया के लिए'}</li>
                            <li>{translations?.tac_doi_point_three || 'कानूनी या नियामक प्राधिकरण, जब कानून द्वारा आवश्यक हो'}</li>
                            <li>{translations?.tac_doi_point_four || 'तीसरे पक्ष की सेवा प्रदाताओं के साथ, कड़ी गोपनीयता के तहत'}</li>
                        </ul>
                        <p className="mt-2">{translations?.tac_doi_paragraph || 'हम आपकी व्यक्तिगत जानकारी को किसी भी तीसरे पक्ष को विपणन या व्यावसायिक उद्देश्यों के लिए नहीं बेचते, किराए पर नहीं देते या व्यापार नहीं करते।'}</p>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">4. {translations?.tac_ds_heading || 'डेटा सुरक्षा'}</h2>
                        <p>
                            {translations?.tac_ds_title || 'बीएम अस्पताल आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए निम्न उपाय करता है:'}'
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>{translations?.tac_ds_point_one || 'सुरक्षित सर्वर और एन्क्रिप्टेड सिस्टम'}</li>
                            <li>{translations?.tac_ds_point_two || 'संवेदनशील डेटा तक सीमित पहुंच'}</li>
                            <li>{translations?.tac_ds_point_three || 'नियमित ऑडिट और डेटा सुरक्षा कानूनों के अनुपालन'}</li>
                        </ul>
                        <p className="mt-2">{translations?.tac_ds_paragraph || 'हमारे प्रयासों के बावजूद, इंटरनेट पर डेटा ट्रांसमिशन या स्टोरेज की कोई भी विधि 100% सुरक्षित नहीं है।'}</p>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">5. {translations?.tac_yr_heading || 'आपके अधिकार'}</h2>
                        <p>{translations?.tac_yr_title || 'एक मरीज या आगंतुक के रूप में, आपके पास निम्न अधिकार हैं:'}</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>{translations?.tac_yr_point_one || 'अपने व्यक्तिगत रिकॉर्ड तक पहुंच'}</li>
                            <li>{translations?.tac_yr_point_two || 'सुधार या अपडेट का अनुरोध'}</li>
                            <li>{translations?.tac_yr_point_three || 'सहमति को वापस लेना (जहाँ लागू हो)'}</li>
                            <li>{translations?.tac_yr_point_four || 'यदि आपको लगता है कि आपकी जानकारी का दुरुपयोग हुआ है, तो शिकायत दर्ज करना'}</li>
                        </ul>
                        <p className="mt-2">
                            {translations?.tac_yr_paragraph || 'हमारे डेटा संरक्षण अधिकारी से ऊपर दिए गए ईमेल पर संपर्क करें।'} <a href="mailto:info@bmswtrust.org" className="text-blue-500 underline">info@bmswtrust.org</a>
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">6. {translations?.tac_cwu_heading || 'कुकीज़ और वेबसाइट उपयोग'}</h2>
                        <p>
                            {translations?.tac_cwu_paragraph || 'हमारी वेबसाइट उपयोगकर्ता अनुभव में सुधार और ट्रैफिक विश्लेषण के लिए कुकीज़ का उपयोग कर सकती है।'}
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">7. {translations?.tac_pu_heading || 'नीति अपडेट'}</h2>
                        <p>
                            BM Hospital reserves the right to modify this Privacy Policy at any time. Updates will be posted on this page with a revised “Last Updated” date.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">8. {translations?.pp_contact_title || " संपर्क करें"}</h2>
                        <p className="mb-1">{translations?.pp_constent_name || "बीएम अस्पताल"}</p>
                        <p className="mb-1">{translations?.pp_constent_place || "बाराबंकी, उत्तर प्रदेश"}</p>
                        <p className="mb-1">{translations?.pp_constent_number || "📞 फ़ोन"}: +91 7318000751 – 55</p>
                        <p>{translations?.pp_constent_email || "✉️ ईमेल"}: <a href="mailto:info@bmswtrust.org" className="text-blue-500 underline">info@bmswtrust.org</a></p>
                    </section>
                </div>
            </div>
            <Footer translations={translations} />
        </>
    );
};

export default PrivacyPolicy;
