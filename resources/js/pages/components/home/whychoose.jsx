import React from 'react';
import ExpertMedical from '@/assets/folderChooseUs/ExpertMedical.svg';
import Facilities from '@/assets/folderChooseUs/StateFacilities.svg'
import PatientCentered from '@/assets/folderChooseUs/Patient.svg';
import EmergencyServices24 from '@/assets/folderChooseUs/EmergencyServices.svg';

function Whychoose({translations}) {
    return (
        <div>
            <div className="py-12 bg-white">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-800 sm:text-4xl sm:leading-10">
                           {translations?.why_choose || 'क्यों चुनें बीएम अस्पताल ?'}
                        </h3>
                        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                           {translations?.why_choose_title || 'विश्वसनीय स्वास्थ्य सेवा, करुणामय दृष्टिकोण - बीएम अस्पताल का अंतर'}
                        </p>
                    </div>

                    <div className="mt-10">
                        <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {/* Feature 1 */}
                            <li>
                                <div className="flex">
                                    <img src={ExpertMedical} alt="" className="h-20 w-24 rounded-xl hover:shadow-lg " />
                                    <div className="ml-4">
                                        <h4 className="text-lg leading-6 text-blue-800 font-bold">
                                            {translations?.expert_medical_team || 'विशेषज्ञ चिकित्सा दल'}
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                             {translations?.expert_medical_team_title || 'बीएम अस्पताल में उच्च योग्यता प्राप्त विशेषज्ञ कार्यरत हैं जो सटीक निदान और उपचार के लिए विभिन्न विषयों में उन्नत देखभाल प्रदान करते हैं।'}   
                                        </p>
                                    </div>
                                </div>
                            </li>

                            {/* Feature 2 */}
                            <li className="mt-10 md:mt-0">
                                <div className="flex">
                                    <img src={Facilities} alt="" className="h-20 w-20 rounded-xl hover:shadow-lg" />
                                    <div className="ml-4">
                                        <h4 className="text-lg leading-6 text-blue-800 font-bold">
                                            {translations?.state_of_the_art_facilities || 'हमारी अत्याधुनिक सुविधाएं उन्नत तकनीक '}
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            {translations?.state_of_the_art_facilities_title ||  'हम बेहतर स्वास्थ्य सेवा प्रदान करने के लिए आधुनिक बुनियादी ढांचा, अत्याधुनिक प्रौद्योगिकी और अच्छी तरह से सुसज्जित आईसीयू, ओटी, एनआईसीयू और पीआईसीयू प्रदान करते हैं।'}
                                        </p>
                                    </div>
                                </div>
                            </li>

                            {/* Feature 3 */}
                            <li className="mt-10 md:mt-0">
                                <div className="flex">
                                    <img src={PatientCentered} alt="" className="h-20 w-20  rounded-xl hover:shadow-lg" />
                                    <div className="ml-4">
                                        <h4 className="text-lg leading-6 text-blue-800 font-bold">
                                            {translations?.patient_centered_care || 'रोगी-केंद्रित देखभाल'}
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            {translations?.patient_centered_care_title || 'हमारा दर्शन, "प्रत्येक जीवन अमूल्य है", प्रत्येक रोगी और परिवार के लिए व्यक्तिगत उपचार योजना और दयालु समर्थन सुनिश्चित करता है।'}
                                        </p>
                                    </div>
                                </div>
                            </li>

                            {/* Feature 4 */}
                            <li className="mt-10 md:mt-0">
                                <div className="flex">
                                    <img src={EmergencyServices24} alt="" className="h-20 w-20 rounded-xl hover:shadow-lg" />
                                    <div className="ml-4">
                                        <h4 className="text-lg leading-6 text-blue-800 font-bold">
                                            {translations?.emergency_services ||  '24/7 आपातकालीन सेवाएं'}
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            {translations?.emergency_services_title || 'पूर्णतः कार्यात्मक आपातकालीन विभाग और एम्बुलेंस सहायता के साथ, बीएम अस्पताल हर सेकंड महत्वपूर्ण होने पर तत्काल देखभाल सुनिश्चित करता है।'}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whychoose
