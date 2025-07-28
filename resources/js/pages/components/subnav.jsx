import { useState, useEffect } from 'react';
import { AiOutlineX } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaPhoneAlt, } from "react-icons/fa";
import { PiTranslate } from "react-icons/pi";
import { ImLocation, ImPhone } from "react-icons/im";
import Logo from "@/assets/Logo.webp"
import axios from 'axios';

const useTranslations = (lang) => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);

  // console.log('Fetching translations for language:', lang);
  // console.log('Fetched translations:', translations);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://emarketplace.progatetechnology.com/api/translations/${lang}`)
    // axios.get(`http://localhost:8000/api/translations/${lang}`)
      .then(res => {
        // console.log('API Response:', res.data);
        if (res.data.error) {
          console.error('Error fetching translations:', res.data.error);
          setTranslations({});
        } else {
          // console.log('Translations fetched successfully:', res.data.translations);
        }
        // console.log('Setting translations:', res.data.translations || {});
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

const TopNotificationBar = ({ onTranslations }) => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState('hi');
  const { translations, loading } = useTranslations(language);

  useEffect(() => {
    if (translations && onTranslations) {
      onTranslations(translations);
    }
  }, [translations]);

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <img src={Logo} alt="bm logo" className="h-32" />
          <span className="text-blue-800 text-4xl font-bold">Loading...</span>
        </div>
      </div>
    );
  };

  // console.log('translations==', translations);


  return (
    <div className="bg-blue-800 top-0 relative z-100">
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
            <marquee
              scrollamount="5"
              scrolldelay="50"
              direction="left"
              className="text-md font-semibold text-white hidden md:inline"
              onMouseOver={(e) => e.target.stop()}
              onMouseOut={(e) => e.target.start()}>
              {translations?.news || ' "बीएम अस्पताल 14 सितंबर 2025 को सुबह 10 बजे से शाम 5 बजे तक शीर्ष विशेषज्ञ डॉक्टरों के साथ नि:शुल्क चिकित्सा शिविर का आयोजन करेगा। "'}
            </marquee>
          </span>

          <div className="mr-1">
            <a href="tel:+917318000753" className="flex py-1 px-2 border border-white rounded-sm text-white text-sm md:text-base bg-blue-800 hover:bg-white hover:text-blue-800 transition-all duration-300 w-full md:w-auto">
              <ImPhone className='text-[#80CAC7] mt-0.5 mr-1' />  {translations?.Requset_call || 'अनुरोध करें'}
            </a>
          </div>

          {/* Language Dropdown Button */}
          <div className="relative z-50 text-right md:text-left">
            <button
              onClick={() => setLanguageDropdown(!languageDropdown)}
              className="flex py-1 px-2 border border-white rounded-sm text-white text-sm md:text-base bg-blue-800 hover:bg-white hover:text-blue-800 transition-all duration-300 w-full md:w-auto"
            >
                <PiTranslate  className='text-[#80CAC7] mt-0.5 mr-1 font-bold text-xl' /> {translations?.Languages || 'भाषाएँ'}
            </button>

            {/* Dropdown */}
            {languageDropdown && (
              <ul className="absolute right-0 mt-2 w-45 bg-white border rounded shadow-md z-50 text-left">
                <button onClick={() => setLanguage('en')} className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">English (India)</button>
                 <button onClick={() => setLanguage('bn')} className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">Bangali (India)</button>
                <button onClick={() => setLanguage('hi')} className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">हिन्दी (Hindi) </button>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNotificationBar;
