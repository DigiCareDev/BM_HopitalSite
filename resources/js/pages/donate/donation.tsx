import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from '../../assets/hero.jpg'
import { FaSyringe, FaProcedures, FaUserMd } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import BannerImages from '../../assets/DepartmentBanner.png';
import DonateForm from '../components/form/donateFrom';
import DonateContact from '../components/form/donateContact';
import axios from 'axios';
import { AiOutlineX } from "react-icons/ai";
import { FaFacebookF, FaInstagram,} from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import Logo from "@/assets/Logo.webp"

const useTranslations = (lang) => {
    const [translations, setTranslations] = useState({});
    const [loading, setLoading] = useState(true);

    console.log('Fetching translations for language:', lang);
    console.log('Fetched translations:', translations);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://emarketplace.progatetechnology.com/api/translations/${lang}`)
            .then(res => {
                console.log('API Response:', res.data);
                if (res.data.error) {
                    console.error('Error fetching translations:', res.data.error);
                    setTranslations({});
                } else {
                    console.log('Translations fetched successfully:', res.data.translations);
                }
                console.log('Setting translations:', res.data.translations || {});
                setTranslations(res.data.translations || {});
                setLoading(false);
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setLoading(false);
            });
    }, [lang]);

    return { translations, loading };
};

export default function Donation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

   


    return (
        <>
            {/* <div className="bg-blue-800 top-0 relative z-100">
                <div className="max-w-screen-xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="w-0 flex-1 items-center">
                            <p className="ml-3 font-medium text-white truncate ">
                                <div className="flex md:hidden">
                                    <a href="https://www.facebook.com/people/BM-Hospital/61576562265378/" target="_blank" rel="noopener noreferrer" className="hover:text-[#82CAC7] p-1 mx-1 rounded-2xl border-white border">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://x.com/bmHospital65" target="_blank" rel="noopener noreferrer" className="hover:text-[#82CAC7] p-1 mx-1 rounded-2xl border-white border">
                                        <AiOutlineX />
                                    </a>
                                    <a href="https://www.instagram.com/bmHospital65/" target="_blank" rel="noopener noreferrer" className="hover:text-[#82CAC7] p-1 mx-1 rounded-2xl border-white border">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </p>
                        </div>
                        <span className="hidden md:inline">
                            <marquee scrollamount="5" scrolldelay="50" direction="left" className="text-md font-semibold text-white hidden md:inline" onMouseOver={(e) => e.target.stop()} onMouseOut={(e) => e.target.start()}>
                                            "BM Hospital to host Free Medical Camp on 14th September 2025, 10AM – 5PM with top specialist doctors."
                                        </marquee>
                        </span>

                        <div className="mr-1">
                            <a href="tel:+917318000753" className="flex py-1 px-2 border border-white rounded-sm text-white text-sm md:text-base bg-blue-800 hover:bg-white hover:text-blue-800 transition-all duration-300 w-full md:w-auto">
                                <ImPhone className='text-[#80CAC7] mt-0.5 mr-1' />  Requset call
                            </a>
                        </div>

                        <div className="relative z-50 text-right md:text-left">
                            <button
                                onClick={() => setLanguageDropdown(!languageDropdown)}
                                className="py-1 px-2 border border-white rounded-sm text-white text-sm md:text-base bg-blue-800 hover:bg-white hover:text-blue-800 transition-all duration-300 w-full md:w-auto"
                            >
                                🌐 Languages
                            </button>

                            {languageDropdown && (
                                <ul className="absolute right-0 mt-2 w-45 bg-white border rounded shadow-md z-50 text-left">
                                    <button onClick={() => setLanguage('en')} className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">English (India)</button>
                                   
                                    <button onClick={() => setLanguage('hi')} className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">हिन्दी (Hindi) </button>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div> */}
            <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <a href='/' className="flex items-center gap-3 text-xl font-bold bg-gradient-to-r from-[#80CAC7] to-blue-700 text-transparent bg-clip-text">
                            <img src={Logo} alt="logo" className="h-12 w-auto" />
                            <span>BM Hospital</span>
                        </a >
                        <div className="hidden md:flex gap-8 items-center">
                            <a href="#home" className="block text-blue-700 hover:text-[#80CAC7] transition font-bold">Home</a>
                            <a href="#about" className="block text-blue-700 hover:text-[#80CAC7] transition font-bold">About Us</a>
                            <a href="#impact" className="block text-blue-700 hover:text-[#80CAC7] transition font-bold">Our Work</a>
                            <a href="#donate" className="block text-blue-700 hover:text-[#80CAC7] transition font-bold">Donate</a>
                            <a href="#contact" className="block text-blue-700 hover:text-[#80CAC7] transition font-bold">Contact Us</a>
                            <button onClick={() => setIsOpen(true)} className="bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white px-2 py-2 rounded-md hover:from-blue-800 hover:to-[#80CAC7] transition">
                                Donate Now
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
                        <a href="#home" className="block text-gray-700 hover:text-[#80CAC7] transition">Home</a>
                        <a href="#about" className="block text-gray-700 hover:text-[#80CAC7] transition">About Us</a>
                        <a href="#impact" className="block text-gray-700 hover:text-[#80CAC7] transition">Our Work</a>
                        <a href="#donate" className="block text-gray-700 hover:text-[#80CAC7] transition">Donate</a>
                        <a href="#contact" className="block text-gray-700 hover:text-[#80CAC7] transition">Contact Us</a>
                        <a href="#donate" className="inline-block w-full text-center bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white py-2 rounded-md hover:from-blue-800 hover:to-[#80CAC7] transition">
                            Donate Now
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
                                Donate & Help Save Lives  With BM Hospital
                            </h1>
                            <p className="text-lg md:text-xl mb-8 text-gray-700 font-bold">
                                Every contribution supports life-saving surgeries, critical care units,
                                and essential supplies for our patients.
                            </p>
                            <a
                                href="#donate"
                                className="inline-block  bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white font-semibold px-8 py-3 rounded-full hover:from-blue-800 hover:to-[#80CAC7] transition shadow-lg"
                            >
                                Make a Donation
                            </a>
                        </div>

                        {/* Right: Donation Form */}
                        <div className="bg-white text-gray-800 p-5 md:p-7 rounded-2xl shadow-2xl w-full animate-fade-in-up">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-5">
                                Donate Now
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
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">About BM Hospital</h2>
                                <p className="text-gray-600">
                                    BM Hospital is a trusted Multi-Speciality Center dedicated to compassionate, expert care. With advanced facilities, skilled doctors, and a patient-first approach, we strive to Save Lives  and improve health every day in Barabanki.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-5 rounded-xl shadow-md">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Our Mission</h3>
                                    <p className="text-gray-600 text-sm">
                                        Delivering ethical, compassionate, and advanced healthcare to every patient, every time.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-5 rounded-xl shadow-md">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Our Vision</h3>
                                    <p className="text-gray-600 text-sm">
                                        To lead in compassionate, innovative, and patient-first healthcare across every Specialty.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-5 rounded-xl shadow-md sm:col-span-2">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Our Impact</h3>
                                    <p className="text-gray-600 text-sm">
                                        Empowering lives through free medical camps and accessible quality healthcare.
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
                            Support Our Mission to Save Lives
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                            Your contribution helps BM Hospital deliver critical care, surgeries, and life-saving treatments to those in need. Every donation supports emergency services, free health camps, and compassionate care for underprivileged patients.                         </p>

                        <div className=" max-w-3xl mx-auto mb-10">
                            <div className=' px-2 py-2 hover:shadow-[#80CAC7] rounded-xl shadow mb-3'>
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Why Donate?</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Save Lives : Help fund emergency treatments and surgeries for critical patients. </li>
                                    <li>Support the Needy: Provide care to underprivileged individuals who cannot afford treatment. </li>
                                    <li>Empower Health Initiatives: Strengthen community outreach, health camps, and maternal-child care. </li>
                                </ul>
                            </div>
                            <div className=' px-2 py-2 hover:shadow-[#80CAC7] rounded-xl shadow mb-3'>
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">How to Donate?</h3>
                                <p className="text-gray-700">
                                    Visit our website, choose a donation amount, and contribute securely online or via bank transfer. Every rupee makes a difference.
                                </p>
                            </div>
                            <div className=' px-2 py-2 hover:shadow-[#80CAC7] rounded-xl shadow mb-3'>
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Get In Touch</h3>
                                <p className="text-gray-700">
                                    Email: <a href="mailto:info@bmswtrust.org" className="text-blue-600 underline">info@bmswtrust.org</a><br />
                                    Phone: <a href="tel:+917318000751" className="text-blue-600 underline">+91-7318000751 – 55 </a>
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white py-3 px-10 rounded-md font-semibold hover:from-blue-800 hover:to-[#80CAC7] transition"
                        >
                            Contact to Donate
                        </button>
                    </div>
                </section>

                {/* Impact Section */}
                <section className="py-7 max-w-7xl bg-white mx-auto grid md:grid-cols-3 gap-5 text-center" id='impact'>
                    <div className='hover:shadow-xl hover:rounded-2xl transform-3d p-4 border-2 border-[#80CAC7] rounded-2xl hover:border-2 border-blue-400'>
                        <div className="text-blue-700 text-5xl mb-4 flex justify-center">
                            <FaSyringe />
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-[#80CAC7]">Vaccinate Children</h3>
                        <p className="text-gray-600">Protect young lives with timely vaccines for a healthier future. </p>
                    </div>
                    <div className='hover:shadow-xl hover:rounded-2xl transform-3d p-4 border-2 border-[#80CAC7] rounded-2xl hover:border-2 border-blue-400'>
                        <div className="text-blue-700 text-5xl mb-4 flex justify-center">
                            <FaProcedures />
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-[#80CAC7]">Build Emergency Wards</h3>
                        <p className="text-gray-600">Help create life-saving emergency units for critical patient care. </p>
                    </div>
                    <div className='hover:shadow-xl hover:rounded-2xl transform-3d p-4 border-2 border-[#80CAC7] rounded-2xl hover:border-2 border-blue-400'>
                        <div className="text-blue-700 text-5xl mb-4 flex justify-center">
                            <FaUserMd />
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-[#80CAC7]">Support Surgeries</h3>
                        <p className="text-gray-600">Sponsor urgent operations for patients who cannot afford treatment. </p>
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
                                Donate Now to Make a Difference
                                <div className='bg-gradient-to-r from-[#80CAC7] to-blue-700 p-0.5'></div>
                            </h3>
                            <DonateForm />
                        </div>
                    </div>
                )}

                <section id="donate" className="py-20 bg-blue-50">
                    <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl ">
                        <h3 className="text-4xl font-bold text-blue-800 mb-6">
                            Donate Now to Make a Difference
                        </h3>
                        <p className="text-lg text-gray-700 mb-8">
                            At BM Hospital, every donation helps us heal, serve, and save more lives. Your generous contribution directly supports patients who lack access to quality healthcare. From providing life-saving surgeries and emergency care to funding neonatal equipment and free vaccinations for underprivileged children, your help brings hope and healing.
                            We believe every life is invaluable—and with your support, we ensure no one is left behind. Whether it’s building advanced ICU facilities, offering essential diagnostics, or organizing free medical camps across Barabanki and nearby regions, your donation plays a vital role in strengthening our mission.

                            Together, we can expand our reach, upgrade our technology, and deliver compassionate, world-class care to those in need. No amount is too small—every rupee you give creates a ripple of health and hope.
                            Join hands with us. Be a part of someone’s healing journey.

                            Donate now to BM Hospital and truly make a difference in someone’s life today.
                        </p>
                        <div className="space-y-6 text-left max-w-xl">
                            <div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-2">Why Donate?</h4>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Support life-saving treatments and medicines</li>
                                    <li>Provide meals and shelter for patients and families</li>
                                    <li>Fund community health programs and awareness</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-2">How to Donate?</h4>
                                <p className="text-gray-700">
                                    You can donate via bank transfer, online payment portals, or by contacting our donation support team. Reach out to us for more details.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-2">Contact Us</h4>
                                <p className="text-gray-700">
                                    Email: <a href="mailto:info@bmswtrust.org " className="text-blue-600 font-bold">info@bmswtrust.org </a><br />
                                    Phone: <a href="tel:+917318000751" className="text-blue-600 font-bold">+9191-7318000751 – 55 </a>
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="mt-10 bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white px-10 py-3 rounded-md font-semibold hover:from-blue-800 hover:to-[#80CAC7] transition"
                        >
                            Get Donation Info
                        </button>
                    </div>
                </section>


                <section id="contact" className="bg-white py-20 px-6 text-gray-800">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: Contact Info */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                                Get in Touch With Us
                            </h2>
                            <p className="text-gray-600 mb-8">
                                We’d love to hear from you. Whether you want to support, volunteer, or simply ask a question — reach out.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-blue-700 text-xl mt-1" />
                                    <a>
                                        <h4 className="font-semibold text-gray-800">Visit Us</h4>
                                        <p className="text-gray-600 hover:text-blue-600 font-bold">Plot Gata No. 2322,2323,2324 Situated at Mauja, Kola Gahbadi, Pargana Satrikh, Tehsil Nawabganj, Dist - Barabanki. 225414</p>
                                    </a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FaPhoneAlt className="text-blue-700 text-xl mt-1" />
                                    <a href='tel:+91 7318000751'>
                                        <h4 className="font-semibold text-gray-800">Call Us</h4>
                                        <p className="text-gray-600 hover:text-blue-600 font-bold">+91 7318000751 – 55</p>
                                    </a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FaEnvelope className="text-blue-700 text-xl mt-1" />
                                    <a href='mailto:info@bmswtrust.org' className=''>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
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
