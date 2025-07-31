import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaSyringe, FaProcedures, FaUserMd } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import BannerImages from '../../assets/DepartmentBanner.png';
import DonateForm from '../components/form/donateFrom';
import DonateContact from '../components/form/donateContact';
import Logo from "@/assets/Logo.webp"
import Subnav from "../components/subnav"

export default function Donation({}) {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <>
        <Subnav onTranslations={handletranslate} />
            <nav className="bg-white shadow-md left-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <a href='/' className="flex items-center gap-3 text-xl font-bold bg-gradient-to-r from-[#80CAC7] to-blue-700 text-transparent bg-clip-text">
                            <img src={Logo} alt="logo" className="h-12 w-auto" />
                            <span>BM Hospital</span>
                        </a >
                        <div className="hidden md:flex gap-8 items-center">
                            <a href="#home" className="block text-blue-700 hover:text-[#80CAC7] transition font-bold">{translations?.Home || 'घर'}</a>
                            <a href="#about" className="block text-blue-700 hover:text-[#80CAC7] transition font-bold">{translations?.About || 'हमारे विषय में'}</a>
                            <a href="#donate" className="block text-blue-700 hover:text-[#80CAC7] transition font-bold">{translations?.Donate || 'दान'}</a>
                            <a href="#contact" className="block text-blue-700 hover:text-[#80CAC7] transition font-bold">{translations?.Contact || 'हमसे संपर्क करें'}</a>
                            <button onClick={() => setIsOpen(true)} className="bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white px-2 py-2 rounded-md hover:from-blue-800 hover:to-[#80CAC7] transition">
                                {translations?.Donate_Now || 'Donate Now'}
                            </button>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-blue-800 focus:outline-none">
                                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-md px-2 py-4 space-y-4">
                        <a href="#home" className="block text-gray-700 hover:text-[#80CAC7] transition"> {translations?.Home || 'घर'}</a>
                        <a href="#about" className="block text-gray-700 hover:text-[#80CAC7] transition"> {translations?.About || 'हमारे विषय में'}</a>
                        <a href="#donate" className="block text-gray-700 hover:text-[#80CAC7] transition">{translations?.Donate || 'दान'}</a>
                        <a href="#contact" className="block text-gray-700 hover:text-[#80CAC7] transition">{translations?.Contact || 'हमसे संपर्क करें'}</a>
                        <a href="#donate" className="inline-block w-full text-center bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white py-2 rounded-md hover:from-blue-800 hover:to-[#80CAC7] transition">
                           {translations?.Donate_Now || 'Donate Now'}
                        </a>
                    </div>
                )}
            </nav>
            <div className="bg-white text-gray-800" id="home">
                {/* Hero Section */}
                <section
                    className="relative bg-gradient-to-r from-blue-800 to-blue-700 text-white py-24 px-6"
                    style={{
                        backgroundImage: `url(${BannerImages})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.9
                    }}
                >
                    <div className="w-full h-full absolute top-0 left-0 z-0"></div>
                    <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Hero Content */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 leading-tight tracking-tight drop-shadow-md">
                               {translations?.heading_donate || 'Donate & Help Save Lives With BM Hospital'}
                            </h1>
                            <p className="text-lg md:text-xl mb-8 text-gray-700 font-bold">
                                  {translations?.desciption_donate || 'Every contribution supports life-saving surgeries, critical care units, and essential supplies for our patients.'}

                            </p>
                            <a
                                href="#donate"
                                className="inline-block  bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white font-semibold px-8 py-3 rounded-full hover:from-blue-800 hover:to-[#80CAC7] transition shadow-lg"
                            >
                                 {translations?.donate_button || 'Make a Donation'}
                            </a>
                        </div>

                        {/* Right: Donation Form */}
                        <div className="bg-white text-gray-800 p-5 md:p-7 rounded-2xl shadow-2xl w-full animate-fade-in-up">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-5">
                                {translations?.Donate_Now || 'Donate Now'}
                            </h3>
                            <DonateForm />
                        </div>
                    </div>
                </section>


                {/* About Us  */}
                <section id="about" className="py-20 bg-white text-gray-800">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://png.pngtree.com/png-clipart/20230918/original/pngtree-indian-doctors-or-medical-team-standing-picture-image_13052512.png"
                                alt="Doctor Illustration"
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* Right Side - Content */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">{translations?.donate_about_title || 'About BM Hospital'}</h2>
                                <p className="text-gray-600">
                                        {translations?.donate_anout_desciption || 'BM Hospital is a trusted Multi-Speciality Center dedicated to compassionate, expert care. With advanced facilities, skilled doctors, and a patient-first approach, we strive to Save Lives and improve health every day in Barabanki.'}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-5 rounded-xl shadow-md">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{translations?.Our_Mission || 'Our Mission'}</h3>
                                    <p className="text-gray-600 text-sm">
                                            {translations?.donate_Our_mission_title || 'Delivering ethical, compassionate, and advanced healthcare to every patient, every time.'}
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-5 rounded-xl shadow-md">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{translations?.Our_Vision || 'Our Vision'}</h3>
                                    <p className="text-gray-600 text-sm">
                                            {translations?.donate_our_vision_title || 'To lead in compassionate, innovative, and patient-first healthcare across every Specialty.'}
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-5 rounded-xl shadow-md sm:col-span-2">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{translations?.Our_Impact || 'Our Impact'}</h3>
                                    <p className="text-gray-600 text-sm">
                                            {translations?.our_impact_title || 'Empowering lives through free medical camps and accessible quality healthcare.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* impact us  */}
                <section id="impact" className="py-20 bg-blue-50">
                    <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl ">
                        <h2 className="text-4xl font-extrabold text-blue-800 mb-6">
                                {translations?.save_life_heading || 'Support Our Mission to Save Lives'}
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                                {translations?.save_life_desc || 'Your contribution helps BM Hospital deliver critical care, surgeries, and life-saving treatments to those in need. Every donation supports emergency services, free health camps, and compassionate care for underprivileged patients.'}
                             </p>

                        <div className=" max-w-3xl mx-auto mb-10">
                            <div className=' px-2 py-2 hover:shadow-[#80CAC7] rounded-xl shadow mb-3'>
                                <h3 className="text-xl font-semibold text-blue-700 mb-2"> {translations?.Why_Donate || 'Why Donate?'}</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>    {translations?.Why_Donate_one || 'Save Lives : Help fund emergency treatments and surgeries for critical patients.'}</li>
                                    <li>    {translations?.Why_Donate_two || 'Support the Needy: Provide care to underprivileged individuals who cannot afford treatment.'}</li>
                                    <li>    {translations?.Why_Donate_three || 'Empower Health Initiatives: Strengthen community outreach, health camps, and maternal-child care.' }</li>
                                </ul>
                            </div>
                            <div className=' px-2 py-2 hover:shadow-[#80CAC7] rounded-xl shadow mb-3'>
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">{translations?.How_to_Donate || 'How to Donate?'}</h3>
                                <p className="text-gray-700">
                                       {translations?.How_to_Donate_heading || 'Visit our website, choose a donation amount, and contribute securely online or via bank transfer. Every rupee makes a difference.'}
                                </p>
                            </div>
                            <div className=' px-2 py-2 hover:shadow-[#80CAC7] rounded-xl shadow mb-3'>
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Get In Touch</h3>
                                <p className="text-gray-700">
                                     {translations?.Email || 'ईमेल'} :<a href="mailto:info@bmswtrust.org" className="text-blue-600 underline">info@bmswtrust.org</a><br />
                                     {translations?.Phone_Number || 'Phone Number'}: <a href="tel:+917318000751" className="text-blue-600 underline">+91-7318000751 – 55 </a>
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white py-3 px-10 rounded-md font-semibold hover:from-blue-800 hover:to-[#80CAC7] transition"
                        >
                            {translations?.Donation_Info || 'Get Donation Info'}
                        </button>
                    </div>
                </section>

                {/* Impact Section */}
                <section className="py-7 max-w-7xl bg-white mx-auto grid md:grid-cols-3 gap-5 text-center" id='impact'>
                    <div className='hover:shadow-xl hover:rounded-2xl transform-3d p-4 border-2 border-[#80CAC7] rounded-2xl hover:border-2 border-blue-400'>
                        <div className="text-blue-700 text-5xl mb-4 flex justify-center">
                            <FaSyringe />
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-[#80CAC7]"> {translations?.Vaccinate_Children || 'Vaccinate Children'}</h3>
                        <p className="text-gray-600"> {translations?.Vaccinate_Children_title || 'Protect young lives with timely vaccines for a healthier future.'}</p>
                    </div>
                    <div className='hover:shadow-xl hover:rounded-2xl transform-3d p-4 border-2 border-[#80CAC7] rounded-2xl hover:border-2 border-blue-400'>
                        <div className="text-blue-700 text-5xl mb-4 flex justify-center">
                            <FaProcedures />
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-[#80CAC7]">{translations?.Build_Emergency_Wards || 'Build Emergency Wards'}</h3>
                        <p className="text-gray-600">{translations?.Build_Emergency_Wards_title || 'Help create life-saving emergency units for critical patient care.'}</p>
                    </div>
                    <div className='hover:shadow-xl hover:rounded-2xl transform-3d p-4 border-2 border-[#80CAC7] rounded-2xl hover:border-2 border-blue-400'>
                        <div className="text-blue-700 text-5xl mb-4 flex justify-center">
                            <FaUserMd />
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-[#80CAC7]">{translations?.Support_Surgeries || 'Support Surgeries'}</h3>
                        <p className="text-gray-600">    {translations?.Support_Surgeries_title || 'Sponsor urgent operations for patients who cannot afford treatment.'} </p>
                    </div>
                </section>

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-opacity-100 flex items-center justify-center z-50"
                        onClick={() => setIsOpen(false)} // close modal on outside click
                    >
                        <div
                            className="bg-white rounded-2xl p-8 max-w-3xl w-full mx-4 relative  border border-blue-500 shadow-xl"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold "
                                aria-label="Close modal"
                            >
                                &times;
                            </button>

                            <h3 className="text-3xl font-bold text-blue-800 mb-8 text-center">
                                   {translations?.Donate_Difference || 'Donate Now to Make a Difference'}
                                <div className='bg-gradient-to-r from-[#80CAC7] to-blue-700 p-0.5'></div>
                            </h3>
                            <DonateForm />
                        </div>
                    </div>
                )}

                <section id="donate" className="py-20 bg-blue-50">
                    <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl ">
                        <h3 className="text-4xl font-bold text-blue-800 mb-6">
                               {translations?.Donate_Difference || 'Donate Now to Make a Difference'}
                        </h3>
                        <p className="text-lg text-gray-700 mb-8">
                             {translations?.Donate_Difference_title || 'At BM Hospital, every donation helps us heal, serve, and save more lives. Your generous contribution directly supports patients who lack access to quality healthcare. From providing life-saving surgeries and emergency care to funding neonatal equipment and free vaccinations for underprivileged children, your help brings hope and healing. We believe every life is invaluable—and with your support, we ensure no one is left behind. Whether it’s building advanced ICU facilities, offering essential diagnostics, or organizing free medical camps across Barabanki and nearby regions, your donation plays a vital role in strengthening our mission. Together, we can expand our reach, upgrade our technology, and deliver compassionate, world-class care to those in need. No amount is too small—every rupee you give creates a ripple of health and hope. Join hands with us. Be a part of someone’s healing journey. Donate now to BM Hospital and truly make a difference in someone’s life today.'}
                        </p>
                        <div className="space-y-6 text-left max-w-xl">
                            <div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-2">{translations?.Why_Donate || 'Why Donate?'}</h4>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>{translations?.Donate_one || 'Save Lives : Help fund emergency treatments and surgeries for critical patients.'}</li>
                                    <li>{translations?.Donate_two || 'Support the Needy: Provide care to underprivileged individuals who cannot afford treatment.'}</li>
                                    <li>{translations?.Donate_three || 'Empower Health Initiatives: Strengthen community outreach, health camps, and maternal-child care.'}</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-2"> {translations?.How_to_Donate || 'How to Donate?'}</h4>
                                <p className="text-gray-700">
                                        {translations?.transfer || 'You can donate via bank transfer, online payment portals, or by contacting our donation support team. Reach out to us for more details.'}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-2">Contact Us</h4>
                                <p className="text-gray-700">
                                    {translations?.Email || 'ईमेल'} <a href="mailto:info@bmswtrust.org " className="text-blue-600 font-bold">info@bmswtrust.org </a><br />
                                    {translations?.Phone_Number || 'Phone Number'}: <a href="tel:+917318000751" className="text-blue-600 font-bold">+9191-7318000751 – 55 </a>
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="mt-10 bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white px-10 py-3 rounded-md font-semibold hover:from-blue-800 hover:to-[#80CAC7] transition"
                        >
                            {translations?.Donation_Info || 'Get Donation Info'}
                        </button>
                    </div>
                </section>


                <section id="contact" className="bg-white py-20 px-6 text-gray-800">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: Contact Info */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                                {translations?.Get_In_Touch || "संपर्क करें"}
                            </h2>
                            <p className="text-gray-600 mb-8">
                                {   translations?.contact_heading || 'हमें आपसे सुनना अच्छा लगेगा। चाहे आप सहयोग करना चाहते हों, स्वयंसेवा करना चाहते हों, या बस कोई सवाल पूछना चाहते हों - हमसे संपर्क करें।'}
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-blue-700 text-xl mt-1" />
                                    <a>
                                        <h4 className="font-semibold text-gray-800">Visit</h4>
                                        <p className="text-gray-600 hover:text-blue-600 font-bold">{translations?.Address || 'प्लाट गाटा संख्या 2322,2323,2324 मौजा, कोला गहबड़ी, परगना सतरिख, तहसील नवाबगंज, जिला-बाराबंकी में स्थित है। 225414'}</p>
                                    </a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FaPhoneAlt className="text-blue-700 text-xl mt-1" />
                                    <a href='tel:+91 7318000751'>
                                        <h4 className="font-semibold text-gray-800">{translations?.Requset_call || 'अनुरोध करें'}</h4>
                                        <p className="text-gray-600 hover:text-blue-600 font-bold">+91 7318000751 – 55</p>
                                    </a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FaEnvelope className="text-blue-700 text-xl mt-1" />
                                    <a href='mailto:info@bmswtrust.org' className=''>
                                        <h4 className="font-semibold text-gray-800"> {translations?.Email || 'ईमेल'}</h4>
                                        <p className="text-gray-600 hover:text-blue-600 font-bold">info@bmswtrust.org</p>
                                    </a >
                                </li>
                            </ul>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="bg-blue-50 p-8 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold text-blue-800 mb-6">Send a Message</h3>
                            <DonateContact />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-blue-900 text-white py-6 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} BM Hospital. All rights reserved.
                    </p>
                </footer>
            </div>
        </>
    )
}
