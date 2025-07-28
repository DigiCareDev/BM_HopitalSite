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
                           {translations?.why_choose || ' Why Choose <span className="text-[#80CAC7]">BM</span> Hospital ?'}
                        </h3>
                        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                           {translations?.why_choose_title || ' Trusted Healthcare, Compassionate Approach — The BM Hospital Difference'}
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
                                            {translations?.expert_medical_team || 'Expert Medical Team'}
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                             {translations?.expert_medical_team_title || 'BM Hospital is staffed with highly qualified specialists offering advanced care across multiple disciplines for accurate diagnosis and treatment.'}   
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
                                            {translations?.state_of_the_art_facilities || 'State-of-the-Art Facilities'}
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            {translations?.state_of_the_art_facilities_title || 'We provide modern infrastructure, cutting-edge technology, and well-equipped ICUs, OT, NICU, and PICU for superior healthcare delivery.'}
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
                                            {translations?.patient_centered_care || 'Patient-Centered Care'}
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            {translations?.patient_centered_care_title || 'Our philosophy, "Every Life is Invaluable", ensures personalized treatment plans and compassionate support for every patient and family.'}
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
                                            {translations?.emergency_services || '24/7 Emergency Services'}
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            {translations?.emergency_services_title || 'With a fully functional emergency department and ambulance support, BM Hospital ensures immediate care when every second counts.'}
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
