import Footer from '@/pages/components/Footer';
import Navbar from '../components/home/navbar';
import Subnav from '../components/subnav';
import React, { useState } from 'react';

export default function FreeMedicalCamp() {
     const [translations, setTranslations] = useState({});
        
            const handletranslate = (data) => {
                setTranslations(data);
            }
    return (
        <>
            <div className='bg-white'>
                <Subnav onTranslations={handletranslate} />
                <Navbar translations={translations} />
                <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg border border-gray-200  my-10">
                    <h1 className="text-3xl font-bold text-blue-800 mb-4 text-left">
                        {translations?.news_events_heading || 'बीएम हॉस्पिटल द्वारा नि:शुल्क चिकित्सा शिविर – स्वास्थ्य सेवा, करुणा का विस्तार'}
                    </h1>

                    <p className="text-gray-700 mb-4">
                        {translations?.news_events_description || 'बीएम हॉस्पिटल को बाराबंकी और आस-पास के क्षेत्रों के लोगों को सुलभ चिकित्सा सेवा प्रदान करने और सामुदायिक स्वास्थ्य को बढ़ावा देने के लिए नि:शुल्क चिकित्सा शिविर की घोषणा करते हुए प्रसन्नता हो रही है।'}
                    </p>

                    <div className="bg-blue-50 p-4 rounded-md mb-4">
                        <p className="text-gray-800"><strong>📅 {translations?.Date || 'दिनांक' }:</strong> 14th September 2025</p>
                        <p className="text-gray-800"><strong>🕒 {translations?.Time ||  'समय'}:</strong> 10:00 AM – 05:00 PM</p>
                        <p className="text-gray-800"><strong>📍{translations?.Venue || 'स्थान'}:</strong> {translations?.news_event_Venue || 'बीएम हॉस्पिटल कैंपस, कोला गहबाड़ी, परगना सतरिख, तहसील नवाबगंज, जिला – बाराबंकी'}</p>
                    </div>

                    <p className="text-gray-700 mb-4">
                        {translations?.news_events_heading1 || 'यह पहल बीएम हॉस्पिटल की सभी के लिए गुणवत्तापूर्ण स्वास्थ्य सेवा को सुलभ बनाने की प्रतिबद्धता का हिस्सा है।'}
                    </p>

                    <p className="text-gray-700 mb-4">
                        {translations?.news_events_heading2 || 'शिविर में अनुभवी डॉक्टर, जिनमें एक जनरल फिजिशियन और एक स्त्री रोग विशेषज्ञ शामिल हैं, पूरे दिन परामर्श के लिए उपलब्ध रहेंगे।'}
                    </p>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">🩺{translations?.news_event_point_heading || 'Free Health Services Offered'}:</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>{translations?.news_event_point1 || 'Blood Pressure Screening'}</li>
                            <li>{translations?.news_event_point2 || 'General Health Checkup'}</li>
                            <li>{translations?.news_event_point3 || 'Pregnant Women Diet Plan Counseling'}</li>
                            <li>{translations?.news_event_point4 || 'Diabetes Screening'}</li>
                        </ul>
                    </div>

                    <p className="text-gray-700 mb-4">
                        {translations?.news_events_heading3 ||  'चाहे आप किसी दीर्घकालिक बीमारी का प्रबंधन कर रहे हों, गर्भावस्था की योजना बना रहे हों या केवल एक सामान्य जांच कराना चाहते हों, विशेषज्ञ डॉक्टरों से नि:शुल्क परामर्श लेने का यह एक शानदार अवसर है।'}
                    </p>

                    <p className="text-gray-700 mb-4">
                        {translations?.news_events_heading4 || 'बाराबंकी और आसपास के क्षेत्र के निवासियों को भाग लेने के लिए प्रोत्साहित किया जाता है। शिविर सभी आयु वर्ग के लिए खुला है और इसमें पूर्व पंजीकरण की आवश्यकता नहीं है।'}
                    </p>

                    <div className="bg-gray-100 py-5 px-5 rounded-md mb-6">
                        <a href='tel:+91 7318000751' className="text-gray-800 py-4"><strong>📞 Phone:</strong> +91 7318000751 – 55</a> <br />
                        <a href='mailto:info@bmswtrust.org' className="text-gray-800"><strong>📧 Email:</strong> info@bmswtrust.org</a>
                    </div>

                    <p className="text-center text-blue-900 font-semibold text-lg">
                        {translations?.news_events_heading5 || 'बीएम हॉस्पिटल – आपका स्वास्थ्य, हमारा मिशन। आइए मिलकर एक स्वस्थ भविष्य बनाएं।'}
                    </p>
                </div>
                <Footer translations={translations}/>
            </div>
        </>
    );
}
