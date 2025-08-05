import React from 'react';
import Image from '@/assets/images/logo.jpg'

function Modelcare({translations}) {
    return (
        <div>
            <section className="bg-white text-center py-10">
                <h2 className="text-blue-800 mx-2 text-3xl font-bold">{translations?.model_heading ||  'बीएम अस्पताल देखभाल का मॉडल'}</h2>
                <div className="py-5 mt-5  bg-white flex justify-center items-center">
                    <div className="relative w-[18rem] sm:w-[24rem] lg:w-[30rem] h-[18rem] sm:h-[24rem] lg:h-[30rem] rounded-full bg-[#80CAC7] flex items-center justify-center hidden lg:flex">

                        {/* Top Right */}
                        <div className="absolute top-1/4 -right-14 sm:-right-20 lg:-right-24 transform -translate-y-1/2 text-center flex items-center">
                            <span className="block w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#80CAC7] hover:bg-blue-800 rounded-full mx-auto"></span>
                            <p className="text-xs sm:text-sm lg:text-md text-blue-900 font-bold pl-1">
                               {translations?.patient_centered || 'रोगी-केंद्रित'}<br /> {translations?.approach || 'दृष्टिकोण'}
                            </p>
                        </div>

                        {/* Bottom Right */}
                        <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 -right-10 sm:-right-16 lg:-right-16 text-center flex items-center">
                            <span className="block w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#80CAC7] hover:bg-blue-800 rounded-full mx-auto"></span>
                            <p className="text-xs sm:text-sm lg:text-md text-blue-900 font-bold pl-2">
                                {translations?.multispeciality || 'बहु-विशेषज्ञ'}<br /> {translations?.collaboration || 'सहयोग'}
                            </p>
                        </div>

                        {/* Bottom Center */}
                        <div className="absolute -bottom-5 sm:-bottom-8 lg:-bottom-13 left-1/2 transform -translate-x-1/2 text-center">
                            <span className="block w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#80CAC7] hover:bg-blue-800 rounded-full mx-auto"></span>
                            <p className="text-xs sm:text-sm lg:text-md text-blue-900 font-bold mt-1">
                                {translations?.advanced_technology || 'उन्नत प्रौद्योगिकी'}<br /> {translations?.and_infrastructure || 'और अवसंरचना'}
                            </p>
                        </div>

                        {/* Bottom Left */}
                        <div className="absolute bottom-1/4 -left-20 sm:-left-28 lg:-left-34 transform translate-y-1/2 text-left flex flex-row-reverse items-center gap-x-2">
                            <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#80CAC7] hover:bg-blue-800 rounded-full"></span>
                            <p className="text-xs sm:text-sm lg:text-md text-blue-900 font-bold">
                                {translations?.continuous_monitoring ||  'निरंतर निगरानी'}<br /> {translations?.and_safety || 'और सुरक्षा'}
                            </p>
                        </div>

                        {/* Top Left */}
                        <div className="absolute top-1/4 -left-16 sm:-left-24 lg:-left-29 transform -translate-y-1/2 text-left flex flex-row-reverse items-center gap-x-2">
                            <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#80CAC7] hover:bg-blue-800 rounded-full"></span>
                            <p className="text-xs sm:text-sm lg:text-md text-blue-900 font-bold">
                                {translations?.compassionate_and ||  'करुणामय और'}<br /> {translations?.holistic_healing || 'समग्र उपचार'}
                            </p>
                        </div>

                        {/* Inner White Circle with Image */}
                        <div className="w-[16rem] sm:w-[22rem] lg:w-[29rem] h-[16rem] sm:h-[22rem] lg:h-[29rem] rounded-full bg-white flex items-center justify-center">
                            <img
                                src={Image}
                                alt="logo"
                                className="w-[14rem] sm:w-[20rem] lg:w-[26.25rem] h-[14rem] sm:h-[20rem] lg:h-[26.25rem] object-cover rounded-full border-2 border-blue-800 hover:shadow-blue-700"
                            />
                        </div>
                    </div>
                    <div className="bg-white flex justify-center items-center block lg:hidden">
                        <div className="relative w-[18rem] sm:w-[24rem] h-[18rem] sm:h-[24rem] rounded-full flex items-center justify-center">

                            {/* Top Right */}
                            <div className="absolute top-1/4 -right-6 transform -translate-y-1/2 text-center flex items-center">
                                <span className="block w-4 h-4 bg-[#80CAC7] hover:bg-blue-800 rounded-full"></span>
                                <p className="text-xs text-blue-900 font-bold pl-1">
                                  {translations?.patient || 'रोगी'}<br /> {translations?.centered ||  'केंद्रित'}<br /> {translations?.approach ||  'दृष्टिकोण'}
                                </p>
                            </div>

                            {/* Bottom Right */}
                            <div className="absolute bottom-16 -right-6 text-center flex items-center">
                                <span className="block w-4 h-4 bg-[#80CAC7] hover:bg-blue-800 rounded-full"></span>
                                <p className="text-xs text-blue-900 font-bold pl-1">
                                    {translations?.multispeciality || 'बहु-विशेषज्ञ'}<br /> {translations?.collaboration || 'सहयोग'}
                                </p>
                            </div>

                            {/* Bottom Center */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                                <span className="block w-4 h-4 bg-[#80CAC7] hover:bg-blue-800 rounded-full mx-auto"></span>
                                <p className="text-xs text-blue-900 font-bold mt-1">
                                    {translations?.compassionate_and || 'करुणामय और'}<br /> {translations?.holistic_healing || 'समग्र उपचार'}
                                </p>
                            </div>

                            {/* Bottom Left */}
                            <div className="absolute bottom-1/4 -left-6 transform translate-y-1/2 flex flex-row-reverse items-center gap-x-2">
                                <span className="w-4 h-4 bg-[#80CAC7] hover:bg-blue-800 rounded-full"></span>
                                <p className="text-xs text-blue-900 font-bold">
                                    {translations?.advanced ||  'उन्नत'}<br /> {translations?.technology || 'प्रौद्योगिकी'}
                                </p>
                            </div>

                            {/* Top Left */}
                            <div className="absolute top-1/4 -left-6 transform -translate-y-1/2 flex flex-row-reverse items-center gap-x-2">
                                <span className="w-4 h-4 bg-[#80CAC7] hover:bg-blue-800 rounded-full"></span>
                                <p className="text-xs text-blue-900 font-bold">
                                    {translations?.continuous || 'निरंतर'}<br /> {translations?.monitoring || 'निगरानी'}<br /> {translations?.and_safety || 'और सुरक्षा'}
                                </p>
                            </div>

                            {/* Inner White Circle with Image */}
                            <div className="w-[16rem] sm:w-[22rem] h-[16rem] sm:h-[22rem] rounded-full bg-white flex items-center justify-center">
                                <img
                                    src={Image}
                                    alt="logo"
                                    className="w-[14rem] sm:w-[20rem] h-[14rem] sm:h-[20rem] object-cover rounded-full border-2 border-blue-800 hover:shadow-blue-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Modelcare
