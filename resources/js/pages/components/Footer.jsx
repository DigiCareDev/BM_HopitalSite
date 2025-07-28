import React from 'react';
import Logo from "@/assets/images/logo.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaInfoCircle, FaPhoneAlt, FaHospitalSymbol, FaHome, FaStethoscope } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";


const Footer = ({ translations }) => {
    return (
        <footer className="bg-blue-50 text-gray-900 shadow-lg">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-6">
                    {/* treatment Info */}
                    <div>
                        <h4 className="text-lg font-semibold my-4 text-blue-800">{translations?.Our_Treatments || 'हमारे उपचार'}</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/allergy-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Allergy_Treatment || 'एलर्जी उपचार'}</a></li>
                            <li><a href="/anemia-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Anemia_Treatment || 'एनीमिया (लाल रक्त कोशिकाओं / हीमोग्लोबिन) उपचार'}</a></li>
                            <li><a href="/asthma-bronchitis" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Asthma_and_Bronchitis_Treatment || 'अस्थमा और ब्रोंकाइटिस उपचार'}</a></li>
                            <li><a href="/cold-cough" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Cold_Cough_and_Flu_Treatment || 'सर्दी, खांसी और फ्लू उपचार'}</a></li>
                            <li><a href="/dehydration-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Dehydration_and_IV_Fluids || 'निर्जलीकरण (शरीर में पानी की कमी) IV फ्लुइड्स उपचार'}</a></li>
                            <li><a href="/diabetes-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Diabetes_Treatment || 'डायबिटीज उपचार'}</a></li>
                            <li><a href="/fever-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Fever_Treatment || 'बुखार उपचार'}</a></li>
                            <li><a href="/gastrointestinal-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline">  {translations?.Gastrointestinal_Treatment || 'पाचन तंत्र संबंधित उपचार'}</a></li>
                            <li><a href="/hypertension-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Hypertension_treatment || 'उच्च रक्तचाप उपचार'}</a></li>
                            <li><a href="/paintreatment" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Pain_Treatment || 'दर्द उपचार'}</a></li>
                        </ul>
                    </div>
                    {/* Other Info */}
                    <div>
                        <h4 className="text-lg font-semibold my-4 text-blue-800">{translations?.Other_Treatments || 'अन्य उपचार'}</h4>
                        <ul className="space-y-2 text-sm">

                            <li><a href="/cholesterol-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Cholesterol_and_Lipid_Disorder_Treatment || 'कोलेस्ट्रॉल, ट्राइग्लिसराइड्स और अन्य उपचार'}</a></li>
                            <li><a href="/general-health" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.General_Health_Check || 'सामान्य स्वास्थ्य जांच'}</a></li>
                            <li><a href="/immunizations-and-vaccinations" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Immunizations_and_Vaccinations || 'टीकाकरण और वैक्सीनेशन उपचार'}</a></li>
                            <li><a href="/minor-injury-care" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Minor_Injury_Care || 'छोटे-मोटे घावों या चोटों उपचार'}</a></li>
                            <li><a href="/nutritional-counseling" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Nutritional_Counseling || 'पोषण परामर्श'}</a></li>
                            <li><a href="/skin-conditions" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Skin_Conditions || 'त्वचा रोग उपचार'}</a></li>
                            <li><a href="/sleep-disorder-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Sleep_Disorder_Treatment || 'नींद संबंधित उपचार'}</a></li>
                            <li><a href="/thyroid-disorder-treatment" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Thyroid_Disorder_Treatment || 'थायरॉइड ग्रंथि उपचार'}</a></li>
                            <li><a href="/urinarytract-infection" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Urinary_Tract_Infection_Treatment || 'यूरिन इन्फेक्शन (मूत्र मार्ग संक्रमण) उपचार'}</a></li>
                        </ul>
                    </div>
                    {/* Departments */}
                    <div>
                        <h4 className="text-lg font-semibold my-4 text-blue-800">{translations?.Our_Departments || 'हमारा विभाग'}</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/cardiology" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Cardiology || 'हृदय रोग विशेषज्ञता'}</a></li>
                            <li><a href="/ent" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.ENT || 'कान, नाक और गला'}</a></li>
                            <li><a href="/gastroenterology" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Gastroenterology || 'जठरांत्र'}</a></li>
                            <li><a href="/Gynecology" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.General_Surgery || 'जनरल सर्जरी'}</a></li>
                            <li><a href="/general-surgery" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Gynecology || 'स्त्री रोग विशेषज्ञता'}</a></li>
                            <li><a href="/neurology" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Neurology || 'तंत्रिका विशेषज्ञता'}</a></li>
                            <li><a href="/nicu" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.nicu || 'नवजात शिशु गहन चिकित्सा'}</a></li>
                            <li><a href="/picu" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Orthopedics || 'अस्थिरोग विशेषज्ञता'}</a></li>
                            <li><a href="/respiratory" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.picu || 'बाल चिकित्सा गहन चिकित्सा'}</a></li>
                            <li><a href="/orthopedics" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Respiratory || 'साँस विशेषज्ञता'}</a></li>
                        </ul>
                    </div>
                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold my-4 text-blue-800">{translations?.Our_Services || 'हमारी सेवाएं'}</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/ambulance" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Ambulance || 'एम्बुलेंस(रोगी-वाहन)'}</a></li>
                            <li><a href="/bloodbank" className="hover:text-[#82CAC7] font-semibold hover:underline">  {translations?.Blood_Bank || 'ब्लड बैंक'}</a></li>
                            <li><a href="/emergency-medicine" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.emergency_medicine || 'आपातकालीन सेवाएं'}</a></li>
                            <li><a href="/tpa" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.tpa || 'बीमा(इंश्योरेंस) और टीपीए'}</a></li>
                            <li><a href="/icu" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.icu || 'इंटेंसिव केयर यूनिट (गहन चिकित्सा इकाई)'}</a></li>
                            <li><a href="/modular-operation-theatre" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.mot || 'मॉड्यूलर ऑपरेशन थिएटर'}</a></li>
                            <li><a href="/neonatal-intensive-care-unit" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.NICU || 'नवजात शिशु गहन चिकित्सा'}</a></li>
                            <li><a href="/pathlogy" className="hover:text-[#82CAC7] font-semibold hover:underline"> {translations?.Pathlogy || 'पैथोलॉजी (रोग विशेषज्ञता)'}</a></li>
                            <li><a href="/patient-care" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Patient_Care || 'रोगी देखभाल 27/4'}</a></li>
                            <li><a href="/pediatric-intensive-care-unit" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.PICU || 'बाल चिकित्सा गहन चिकित्सा'}</a></li>
                            <li><a href="/pharmacy" className="hover:text-[#82CAC7] font-semibold hover:underline">{translations?.Pharmacy || 'फार्मेसी(औषधालय )'}</a></li>
                        </ul>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold my-4 text-blue-800">{translations?.Quick_Links || 'त्वरित लिंक'}</h4>

                        <ul className="space-y-2 text-sm text-blue-900">
                            <li className="flex items-center gap-2">
                                <FaInfoCircle className="text-[#82CAC7] text-mg hover:underline" />
                                <a href="/about" className="hover:text-[#82CAC7] text-mg hover:underline font-semibold">{translations?.About || 'हमारे विषय में'}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-[#82CAC7] text-mg hover:underline" />
                                <a href="/contact" className="hover:text-[#82CAC7] text-mg hover:underline font-semibold">{translations?.Contact || 'हमसे संपर्क करें'}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaHospitalSymbol className="text-[#82CAC7] text-mg hover:underline" />
                                <a href="/departments" className="hover:text-[#82CAC7] text-mg hover:underline font-semibold"> {translations?.Departments || 'विभाग'}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaHome className="text-[#82CAC7] text-mg hover:underline" />
                                <a href="/" className="hover:text-[#82CAC7] text-mg hover:underline font-semibold">{translations?.Home || 'घर'}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaStethoscope className="text-[#82CAC7] text-mg hover:underline" />
                                <a href="/treatment" className="hover:text-[#82CAC7] text-mg hover:underline font-semibold"> {translations?.Treatment || 'उपचार'}</a>
                            </li>
                        </ul>

                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold my-4 text-blue-800">{translations?.Contact || 'हमसे संपर्क करें'}</h4>
                        <ul className="space-y-2 text-sm text-blue-900">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-[#82CAC7]" />
                                <a href="tel:+917318000753" className="hover:text-[#82CAC7] font-semibold hover:underline hover:underline">+91 7318000753</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-[#82CAC7]" />
                                <a href="tel:+917318000754" className="hover:text-[#82CAC7] font-semibold hover:underline hover:underline">+91 7318000754</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-[#82CAC7]" />
                                <a href="mailto:info@bmswtrust.org" className="hover:text-[#82CAC7] font-semibold hover:underline hover:underline">info@bmswtrust.org</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-[#82CAC7] text-4xl" />
                                <a href="#" className="hover:text-[#82CAC7] font-semibold hover:underline hover:underline">{translations?.Address || 'प्लाट गाटा संख्या 2322,2323,2324 मौजा, कोला गहबड़ी, परगना सतरिख, तहसील नवाबगंज, जिला-बाराबंकी में स्थित है। 225414'}</a>
                            </li>
                            <div>
                                <h4 className="text-lg font-semibold mt-4 text-blue-800">{translations?.Head_office || 'प्रधान कार्यालय'}</h4>
                                <ul>
                                    <li className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-[#82CAC7] text-xl" />
                                        <a href="#" className="hover:text-[#82CAC7] text-sm hover:underline font-semibold text-blue-900">{translations?.main_Address || '07, खसरा नं. 426एसए, लौलाई, मल्हौर, लखनऊ - 226028'}</a>
                                    </li>
                                </ul>
                            </div>
                            <li className=" gap-4 text-[#82CAC7] text-md mt-4">
                                <span className='text-lg font-semibold my-4 text-blue-800'>{translations?.Follow_us || 'फॉलो करें'}</span>
                                <div className='flex' ><a href="https://www.facebook.com/people/BM-Hospital/61576562265378/" target="_blank" rel="noopener noreferrer" className=" border-2 border-[#82CAC7] hover:border-blue-600 p-1 m-1 rounded-2xl hover:text-blue-700 ">
                                    <FaFacebookF />
                                </a>
                                    <a href="https://x.com/bmHospital65" target="_blank" rel="noopener noreferrer" className=" border-2 border-[#82CAC7] hover:border-gray-800 p-1 m-1 rounded-2xl hover:text-gray-800 ">
                                        <AiOutlineX />
                                    </a>
                                    <a href="https://www.instagram.com/bmHospital65/" target="_blank" rel="noopener noreferrer" className=" border-2 border-[#82CAC7] hover:border-pink-700 p-1 m-1 rounded-2xl hover:text-pink-700 ">
                                        <FaInstagram />
                                    </a></div>
                            </li>
                        </ul>

                    </div>

                </div>
                {/* <hr className="m-1 border-gray-700" /> */}
            </div>
            <div className="text-center text-sm py-5 bg-blue-900 text-white mt-3 flex justify-between items-center px-10">
                <div> &copy; {new Date().getFullYear()} BM Hospital. All rights reserved.</div>
                <div className=' flex justify-between items-center px-10 underline '>
                    <span className='px-2'><a href="/privacy-policy" className="href">{translations?.Privacy_Policy || 'प्राइवेसी पॉलिसी'}</a></span>
                    <span className='px-2'><a href="/terms-conditions" className="href">{translations?.Terms_and_Conditions || 'नियम और शर्तें'}</a></span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
