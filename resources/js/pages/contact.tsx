import React, { useEffect, useState } from 'react';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import ContactImage from '@/assets/images/Contact.png'
import { ImLocation2 } from "react-icons/im";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import { MdInfo } from 'react-icons/md';
import axios from 'axios';
import devURL from './constent/devURL';
import Sweet2 from 'sweetalert2';
import Subnav from "./components/subnav";


export default function Contact() {
        const [translations, setTranslations] = useState({});

    const handletranslate =(data)=> {
        setTranslations(data);
    }

    const [contactData, setContactData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactData(prev => ({ ...prev, [name]: value }));
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/contactdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            const text = await response.text();
            console.log("🟡 Raw Response Text:", text);

            try {
                const data = JSON.parse(text);
                console.log("✅ Parsed JSON Response:", data);

                if (response.ok) {
                    Sweet2.fire({
                        icon: 'success',
                        title: 'Submitted!',
                        text: data.message || "Query submitted successfully!",
                        timer: 3000,
                    });
                    setContactData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                    });
                } else {
                    Sweet2.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.message || "Something went wrong.",
                        timer: 3000,
                    });
                }
            } catch (parseError) {
                console.error("❗ JSON Parse Error:", parseError);
                console.log("📄 Raw response:", text);
                Sweet2.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Invalid response from server.",
                    timer: 3000,
                });
            }

        } catch (error) {
            console.error("🌐 Network Error:", error);
            Sweet2.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Could not connect to the server." + error.message,
                timer: 3000,
            });
        }
    };



    return (
        <>
         <Subnav onTranslations={handletranslate}/>
            <Navbar translations={translations} />
            <div className="relative w-full h-40 bg-gray-100">
                <img src={ContactImage} alt="Illustration" className="w-full h-full object-cover rounded-xl px-1" />
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                    <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-left px-4">
                    {translations?.contact_heading || "हम यहां संपर्क करने के लिए हैं - किसी भी समय संपर्क करें।"}
                    </p>
                </div>
            </div>
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">
                <div className="max-w-2xl lg:max-w-5xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-blue-700">
                            {translations?.Contact || 'हमसे संपर्क करें'}
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-900">
                           { translations?.contact_title || 'हम इस बारे में बात करना चाहेंगे कि हम आपकी किस प्रकार मदद कर सकते हैं।'}
                        </p>
                    </div>

                    <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                        {/* Form Card */}
                        <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-blue-700">
                            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-blue-800">
                        {translations?.Get_In_Touch || "संपर्क करें"}
                            </h2>

                            <form onSubmit={handleContactSubmit}>
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="sr-only">{translations?.Name || 'नाम'}</label>
                                            <input
                                                type="text"
                                                value={contactData.name}
                                                onChange={handleContactChange}
                                                name="name"
                                                id="name"
                                                placeholder={translations?.Name || 'नाम'}
                                                className="py-2.5 sm:py-3 px-4 block w-full  rounded sm:text-sm focus:border-blue-500 focus:ring-blue-500 border-blue-800 border-b dark:border-blue-700 dark:text-blue-400 dark:placeholder-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="sr-only">{translations?.Phone_Number || 'फ़ोन नंबर'}</label>
                                            <input
                                                type="text"
                                                value={contactData.phone}
                                                onChange={handleContactChange}
                                                name="phone"
                                                id="phone"
                                                placeholder={translations?.Phone_Number || 'फ़ोन नंबर'}
                                                className="py-2.5 sm:py-3 px-4 block w-full  rounded sm:text-sm focus:border-blue-500 focus:ring-blue-500 border-blue-800 border-b dark:border-blue-700 dark:text-blue-400 dark:placeholder-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="sr-only"> {translations?.Email || 'ईमेल'}</label>
                                        <input
                                            type="email"
                                            value={contactData.email}
                                            onChange={handleContactChange}
                                            name="email"
                                            id="email"
                                            placeholder= {translations?.Email || 'ईमेल'}
                                            autoComplete="email"
                                            className="py-2.5 sm:py-3 px-4 block w-full  rounded sm:text-sm focus:border-blue-500 focus:ring-blue-500 border-blue-800 border-b dark:border-blue-700 dark:text-blue-400 dark:placeholder-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="sr-only">{translations?.Subject || 'विषय'}</label>
                                        <input
                                            type="text"
                                            value={contactData.subject}
                                            onChange={handleContactChange}
                                            name="subject"
                                            id="subject"
                                            placeholder={translations?.Subject || 'विषय'}
                                            className="py-2.5 sm:py-3 px-4 block w-full  rounded sm:text-sm focus:border-blue-500 focus:ring-blue-500 border-blue-800 border-b dark:border-blue-700 dark:text-blue-400 dark:placeholder-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="details" className="sr-only"> {translations?.message|| 'संदेश'}</label>
                                        <textarea
                                            name="message"
                                            value={contactData.message}
                                            onChange={handleContactChange}
                                            id="message"
                                            placeholder={translations?.message|| 'संदेश'}
                                            className="py-2.5 sm:py-3 px-4 block w-full  rounded sm:text-sm focus:border-blue-500 focus:ring-blue-500 border-blue-800 border-b dark:border-blue-700 dark:text-blue-400 dark:placeholder-blue-500"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="mt-4 grid">
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                                    >
                                       { translations?.Send_Inquiry || 'जांच भेजें' }
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Info Card */}
                        <div className="divide-y divide-gray-200 dark:divide-blue-800 space-y-6">
                            {[
                                {
                                    icon: <MdInfo className='text-4xl text-[#80CAC7]' />,
                                    title: translations?.About || 'हमारे विषय में',
                                    linkText: translations?.About_title || 'हमारा अस्पताल उन्नत बुनियादी ढाँचे, समर्पित विशेषज्ञों की टीम और अत्याधुनिक उपकरणों के लिए जाना जाता है। हम एक आरामदायक वातावरण में व्यक्तिगत देखभाल प्रदान करने के लिए समर्पित हैं।',
                                },
                                {
                                    icon: <BiPhone className='text-4xl text-[#80CAC7]' />,
                                    title: translations?.Contact || 'हमसे संपर्क करें',
                                    linkText: '7318000753',
                                    link: 'tel:+917318000753'
                                },
                                {
                                    icon: <BiPhone className='text-4xl text-[#80CAC7]' />,
                                    title: translations?.Emergency_Number || 'आपातकालीन नंबर',
                                    linkText: '7318000754',
                                    link: 'tel:+917318000754'
                                },
                                {
                                    icon: <ImLocation2 className='text-4xl text-[#80CAC7]' />,
                                    title: translations?.Add || 'पता',
                                    linkText: translations?.Address || 'प्लाट गाटा संख्या 2322,2323,2324 मौजा, कोला गहबड़ी, परगना सतरिख, तहसील नवाबगंज, जिला-बाराबंकी में स्थित है। 225414',
                                },
                                {
                                    icon: <ImLocation2 className='text-4xl text-[#80CAC7]' />,
                                    title: translations?.Head_office || 'प्रधान कार्यालय',
                                    linkText: translations?.main_Address || '07, खसरा नं. 426एसए, लौलाई, मल्हौर, लखनऊ - 226028',
                                },
                                {
                                    icon: <BiEnvelope className='text-4xl text-[#80CAC7]' />,
                                    title: translations?.Email,
                                    linkText: 'info@bmswtrust.org',
                                    link: 'mailto:info@bmswtrust.org',
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-x-7 py-1">
                                    <div className="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-blue-200">
                                        {item.icon}
                                    </div>
                                    <div className="grow">
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-800 text-lg">{item.title}</h3>
                                        <a
                                            href={item.link}
                                            className="inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-blue-800 dark:hover:text-blue-500"
                                        >
                                            {item.linkText}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-100 rounded-3xl shadow-xl bg-white">
                <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.7985876108246!2d81.05856207609267!3d26.84635776293767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzQ2LjkiTiA4McKwMDMnNDAuMSJF!5e0!3m2!1sen!2sin!4v1750306755113!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className='rounded-xl'
                ></iframe>
            </div>
            <Footer translations={translations}/>
        </>
    );
};