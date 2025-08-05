import React from 'react';
import AboutHeader from '@/assets/images/aboutHeader.jpg';

function Hero({ translations }) {
  return (
    <div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                    <section className="flex flex-col lg:flex-row items-center gap-3">
                        <div className="flex-1">

                            <h2 className="text-xl font-extrabold text-blue-800  sm:text-xl sm:leading-none md:text-4xl mt-5">
                             {translations?.heading || 'विश्वसनीय स्वास्थ्य सेवा, करुणा और विशेषज्ञता के साथ तैयार'}   
                            </h2>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                                  {translations?.heading2 || 'बीएम हॉस्पिटल में, हमारा मरीज़-प्रथम दृष्टिकोण यह सुनिश्चित करता है कि प्रत्येक व्यक्ति को व्यक्तिगत और करुणामयी देखभाल मिले। हमारे सुपर स्पेशलिस्ट डॉक्टरों की टीम सबसे प्रभावी और अनुकूलित उपचार प्रदान करने के लिए सहज सहयोग करती है। हमारे मूल सिद्धांत - "हर जीवन अमूल्य है" - के मार्गदर्शन में, हम उन्नत तकनीक, विश्वस्तरीय बुनियादी ढाँचे, कुशल पेशेवरों और हार्दिक सेवा के संयोजन से स्वास्थ्य सेवा में उत्कृष्टता के लिए प्रतिबद्ध हैं। निदान से लेकर स्वास्थ्य लाभ तक, हम सुरक्षा, आराम और कल्याण को प्राथमिकता देते हैं—जिससे बीएम हॉस्पिटल बाराबंकी और उसके बाहर उपचार और आशा का एक विश्वसनीय नाम बन गया है।'}   
                            </p>
                        </div>
                        <div className="flex-1 mt-10">
                            <img
                                src={AboutHeader}
                                alt="BM hopital about"
                                className="rounded-3xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </section>
                </div>
    </div>
  )
}

export default Hero
