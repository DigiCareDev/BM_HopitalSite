
import React, { useEffect, useState } from 'react';
import Navbar from './components/home/navbar'
import Footer from './components/Footer';
import Subnav from "./components/subnav";
import AboutUs from "@/assets/About/About Us.svg";
import Emergency from "@/assets/About/24-7 Emergency.svg";
import Modernlabs from "@/assets/About/Modern Labs.svg";
import PCC from "@/assets/About/Patient Centered Care.svg";
import Qualified from "@/assets/About/Qualified Doctors.svg";

export default function About() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }


    return (
        <>
            <div className='bg-white'>
                <Subnav onTranslations={handletranslate} />
                <Navbar translations={translations} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="py-16 flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl text-blue-700 font-bold mb-4"> {translations?.about_title || 'बीएम अस्पताल जहाँ हर जीवन अमूल्य है'}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed"> {translations?.about_desc || 'बीएम हॉस्पिटल एक विश्वसनीय मल्टी-स्पेशलिटी स्वास्थ्य सेवा केंद्र है जो उत्कृष्ट रोगी देखभाल प्रदान करने के लिए प्रतिबद्ध है। "हर जीवन अमूल्य है" के अपने सिद्धांत के अनुरूप, हम कार्डियोलॉजी, ऑर्थोपेडिक्स, गायनोकोलॉजी, न्यूरोलॉजी, इमरजेंसी मेडिसिन, पीडियाट्रिक्स आदि विभागों में उन्नत चिकित्सा सेवाएँ प्रदान करते हैं। हमारे विशेषज्ञ डॉक्टर, अत्याधुनिक तकनीक और समर्पित कर्मचारी एक सुरक्षित और स्वास्थ्यवर्धक वातावरण में व्यक्तिगत उपचार सुनिश्चित करते हैं। आधुनिक आईसीयू, एनआईसीयू, पीआईसीयू, डायग्नोस्टिक लैब और 24/7 आपातकालीन देखभाल के साथ, बीएम हॉस्पिटल बाराबंकी में गुणवत्तापूर्ण स्वास्थ्य सेवा का प्रतीक है। हम हर कदम पर सहानुभूति, नवाचार और रोगी-प्रथम दृष्टिकोण के साथ उपचार में विश्वास करते हैं।'}  </p>
                        </div>
                        <div className="flex-1">
                            <img
                                src={AboutUs}
                                alt="BM hopital about"
                                className="rounded-3xl w-full object-cover"
                            />
                        </div>
                    </section>
                </div>

                <section className="container mx-auto bg-white text-gray-800 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto">
                        {/* Mission & Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                                <h3 className="text-2xl font-semibold text-blue-700 mb-3">{translations?.Our_Mission || 'हमारा लक्ष्य'} </h3>
                                <p className="text-gray-700">
                                    {translations?.Our_Mission_title || 'बीएम हॉस्पिटल में, हमारा मिशन नैतिक चिकित्सा पद्धतियों, उन्नत तकनीक और करुणामयी सेवा के माध्यम से उच्च-गुणवत्ता वाली, रोगी-केंद्रित स्वास्थ्य सेवा प्रदान करना है। हम हर मरीज का सम्मान और गरिमा के साथ इलाज करने का प्रयास करते हैं, कार्डियोलॉजी, ऑर्थोपेडिक्स, गायनोकोलॉजी, न्यूरोलॉजी और आपातकालीन देखभाल सहित सभी विशेषज्ञताओं में सटीक निदान और व्यक्तिगत उपचार प्रदान करते हैं। हमारे मूल विश्वास - "हर जीवन अमूल्य है" - के मार्गदर्शन में, हम अपने समुदाय में जीवन बचाने और स्वास्थ्य परिणामों को बेहतर बनाने के लिए प्रतिबद्ध हैं।'}
                                </p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                                <h3 className="text-2xl font-semibold text-blue-700 mb-3">{translations?.Our_Vision || 'हमारा नज़रिया'}  </h3>
                                <p className="text-gray-700">
                                    {translations?.Our_Vision_title || 'हमारा लक्ष्य नैदानिक उत्कृष्टता, सुरक्षा और नवाचार के नए मानक स्थापित करके बाराबंकी और आसपास के क्षेत्रों में अग्रणी मल्टी-स्पेशलिटी अस्पताल बनना है। हमारा लक्ष्य अपने बुनियादी ढांचे को निरंतर उन्नत बनाना, अपने चिकित्सा पेशेवरों को सशक्त बनाना और आधुनिक चिकित्सा के साथ मानवीय स्पर्श का संयोजन प्रदान करना है। शिक्षा, अनुसंधान और सेवा के माध्यम से, बीएम अस्पताल सभी के लिए एक स्वस्थ भविष्य का निर्माण करना चाहता है।'}
                                </p>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-blue-800 mb-4"> {translations?.why_choose || 'क्यों चुनें बीएम अस्पताल ?'} </h3>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                {translations?.why_About_title || 'बीएम अस्पताल विशेषज्ञ डॉक्टरों, आधुनिक बुनियादी ढांचे और 24/7 आपातकालीन देखभाल को जोड़ता है ताकि कार्डियोलॉजी, ऑर्थोपेडिक्स, न्यूरोलॉजी और स्त्री रोग जैसी विशेषताओं में विश्वसनीय, रोगी-प्रथम उपचार प्रदान किया जा सके - जो हमें बाराबंकी और आसपास के क्षेत्रों में पसंदीदा मल्टी-स्पेशलिटी अस्पताल बनाता है।'}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                            {[
                                { title: translations?.Emergency || '24/7 आपातकालीन ', icon: Emergency },
                                { title: translations?.Qualified_Doctors || 'योग्य डॉक्टर', icon: Qualified },
                                { title: translations?.Modern_Labs || 'मॉडर्न_लैब्स', icon: Modernlabs },
                                { title: translations?.Patient_Centered_Care || 'रोगी केंद्रित देखभाल', icon: PCC }
                            ].map((item, idx) => (
                                <div key={idx}  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
                                    <img src={item.icon} alt="" className='h-15'/>
                                    <h4 className="text-xl font-semibold text-blue-700 mt-4">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer translations={translations} />
            </div>
        </>
    );
};