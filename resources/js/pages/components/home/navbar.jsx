import React, { useState } from "react";
import { FaDonate } from 'react-icons/fa';
import Logo from "@/assets/Logo.webp";
import Cardiology from '@/assets/folderDepartments/Cardiology.svg';
import EmergencyMedicine from '@/assets/folderDepartments/EmergencyMedicine.svg';
import Orthopedics from '@/assets/folderDepartments/Orthopedics.svg'
import Gastroenterology from '@/assets/folderDepartments/Gastroenterology.svg';
import Gynecology from '@/assets/folderDepartments/Gynaecology.svg';
import GeneralSurgery from '@/assets/folderDepartments/GeneralSurgery.svg'
import Neurology from '@/assets/folderDepartments/Neurology.svg';
import Respiratory from '@/assets/folderDepartments/Respiratory.svg';
import PICU from '@/assets/folderSpecialities/PICU.png'
import NICU from '@/assets/folderSpecialities/NICU.png';
import ENT from '@/assets/folderSpecialities/ENT.png';
// =========================================================
import AllergyTreatment from '@/assets/Treatment/Allergy Treatment.svg';
import AnemiaTreatment from '@/assets/Treatment/Anemia Treatment.svg';
import AsthmaandBronchitis from '@/assets/Treatment/Asthma and Bronchitis Management.svg';
import CholesterolandLipid from '@/assets/Treatment/Cholesterol and Lipid Disorder Treatment.svg';
import ColdCoughandFlu from '@/assets/Treatment/Cold, Cough, and Flu Treatment.svg';
import DehydrationandIVFluids from '@/assets/Treatment/Dehydration and IV Fluids.svg';
import DiabetesManagement from '@/assets/Treatment/Diabetes Management.svg';
import FeverManagement from '@/assets/Treatment/Fever Management.svg';
import GastrointestinalTreatment from '@/assets/Treatment/Gastrointestinal Treatment (Acidity, Constipation, Diarrhea).svg';
import GeneralHealth from '@/assets/Treatment/General Health Check-ups.svg';
import Hypertension from '@/assets/Treatment/Hypertension (High Blood Pressure) Treatment.svg';
import ImmunizationsandVaccinations from '@/assets/Treatment/Immunizations and Vaccinations.svg';
import MinorInjuryCare from '@/assets/Treatment/Minor Injury Care (Cuts, Burns, Sprains).svg';
import NutritionalCounseling from '@/assets/Treatment/Nutritional Counseling.svg';
import PainManagement from '@/assets/Treatment/Pain Management (Headache, Body Pain, Migraine).svg';
import SkinConditions from '@/assets/Treatment/Skin Conditions (Rashes, Eczema, Acne).svg';
import SleepDisorder from '@/assets/Treatment/Sleep Disorder Management.svg';
import ThyroidDisorder from '@/assets/Treatment/Thyroid Disorder Management.svg';
import UrinaryTractInfection from '@/assets/Treatment/Urinary Tract Infection (UTI) Treatment.svg';
// ==========================SERVICES=====================
import Ambulance from '@/assets/services/Ambulance.svg'
import Bloodbank from '@/assets/services/Blood bank.svg'
import TPA from '@/assets/services/Insurance and TPA.svg'
import ICU from '@/assets/services/Intensive Care Unit (ICU).svg'
import MOT from '@/assets/services/Modular Operation Theatre.svg'
import NICUSER from '@/assets/services/Neonatal Intensive Care Unit (NICU).svg'
import Pathology from '@/assets/services/Pathology 24-7.svg'
import Patient from '@/assets/services/Patient care 24-7.svg'
import PICUSER from '@/assets/services/Pediatric Intensive Care Unit (PICU).svg'
import Pharmacy from '@/assets/services/Pharmacy.svg'
// =============================blog================
import Blogs from '@/assets/Media/Blog.svg';
import NewsandEvents from '@/assets/Media/News & Events.svg';
import Gallery from '@/assets/Media/Gallery.svg';


const Navbar = ({ translations }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        about: false,
        services: false,
        departments: false,
        language: false,
    });

    const toggleDropdown = (key) => {
        setDropdowns((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const closeAllDropdowns = () => {
        setDropdowns({
            about: false,
            services: false,
            departments: false,
            language: false,
        });
    };

    const closeMenu = () => {
        setMenuOpen(false);
        closeAllDropdowns();
    };

    const dropdownKeys = [
        { key: 'departments', label: translations?.Departments || 'विभाग' },
        { key: 'treatment', label: translations?.Treatment || 'उपचार' },
        { key: 'services', label: translations?.Services || 'सेवाएं' },
        { key: 'media', label: translations?.BM_Media || 'बी.एम. मिडिया' },
    ];

    return (
        <nav className="bg-white shadow-md px-4 py-2 relative">
            <div className="max-w-9xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex justify-between items-center">
                    <img src={Logo} className="h-10 mr-1" alt="Logo" />
                    <span className=" text-xl font-semibold whitespace-nowrap text-blue-800"><span className="text-[#80CAC7]">BM</span> Hospital</span>
                </a>
                <div className="hidden md:flex items-center gap-10">
                    {dropdownKeys.map(({ key, label }) => (
                        <div key={key} className="relative group">
                            <button className="text-gray-700 hover:text-blue-600 flex items-center">
                                {label}
                                <svg
                                    className="ml-1 mt-1 w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {key === 'departments' && (
                                <>
                                    <ul className="absolute top-full left-0 bg-white shadow-md rounded min-w-[620px] z-50 p-2 grid grid-cols-2 gap-1 hidden group-hover:grid">
                                        <li>
                                            <a href="/cardiology" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Cardiology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Cardiology || 'हृदय रोग विशेषज्ञता'}</a>
                                        </li>
                                        <li>
                                            <a href="/emergency-medicine" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={EmergencyMedicine} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.emergency_medicine || 'आपातकालीन सेवाएं'}</a>
                                        </li>
                                        <li>
                                            <a href="/ent" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={ENT} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.ENT || 'कान, नाक और गला'}</a>
                                        </li>
                                        <li>
                                            <a href="/gastroenterology" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Gastroenterology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Gastroenterology || 'जठरांत्र'}</a>
                                        </li>
                                        <li>
                                            <a href="/gynaecology" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Gynecology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Gynecology || 'स्त्री रोग विशेषज्ञता'}</a>
                                        </li>
                                        <li>
                                            <a href="/general-surgery" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={GeneralSurgery} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" />{translations?.General_Surgery || 'जनरल सर्जरी'}</a>
                                        </li>
                                        <li>
                                            <a href="/neurology" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Neurology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Neurology || 'तंत्रिका विशेषज्ञता'}</a>
                                        </li>
                                        <li>
                                            <a href="/nicu" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={NICU} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.nicu || 'नवजात शिशु गहन चिकित्सा'}</a>
                                        </li>
                                        <li>
                                            <a href="/orthopedics" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Orthopedics} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Orthopedics || 'अस्थिरोग विशेषज्ञता'}</a>
                                        </li>
                                        <li>
                                            <a href="/picu" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={PICU} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" />{translations?.picu || 'बाल चिकित्सा गहन चिकित्सा'}</a>
                                        </li>
                                        <li>
                                            <a href="/respiratory" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Respiratory} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Respiratory || 'साँस विशेषज्ञता'}</a>
                                        </li>
                                    </ul>
                                </>
                            )}
                            {key === 'treatment' && (
                                <>
                                    <ul className="absolute top-full left-0 bg-white shadow-md rounded min-w-[800px] z-50 p-2 grid grid-cols-2 gap-1 hidden group-hover:grid">
                                        <li><a href="/allergy-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={AllergyTreatment} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Allergy_Treatment || 'एलर्जी उपचार'}</a>
                                        </li>
                                        <li><a href="/anemia-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={AnemiaTreatment} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Anemia_Treatment || 'एनीमिया (लाल रक्त कोशिकाओं / हीमोग्लोबिन) उपचार'}</a>
                                        </li>
                                        <li><a href="/asthma-bronchitis" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={AsthmaandBronchitis} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Asthma_and_Bronchitis_Treatment || 'अस्थमा और ब्रोंकाइटिस उपचार'}</a>
                                        </li>
                                        <li><a href="/cold-cough" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={ColdCoughandFlu} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Cold_Cough_and_Flu_Treatment || 'सर्दी, खांसी और फ्लू उपचार'}</a>
                                        </li>
                                        <li><a href="/cholesterol-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={CholesterolandLipid} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Cholesterol_and_Lipid_Disorder_Treatment || 'कोलेस्ट्रॉल, ट्राइग्लिसराइड्स और अन्य उपचार'}</a>
                                        </li>
                                        <li><a href="/dehydration-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={DehydrationandIVFluids} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Dehydration_and_IV_Fluids || 'निर्जलीकरण (शरीर में पानी की कमी) IV फ्लुइड्स उपचार'}</a>
                                        </li>
                                        <li><a href="/diabetes-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={DiabetesManagement} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Diabetes_Treatment || 'डायबिटीज उपचार'}</a>
                                        </li>
                                        <li>
                                            <a href="/fever-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                <img src={FeverManagement} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Fever_Treatment || 'बुखार उपचार'}</a>
                                        </li>
                                        <li><a href="/gastrointestinal-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={GastrointestinalTreatment} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Gastrointestinal_Treatment || 'पाचन तंत्र संबंधित उपचार'}</a>
                                        </li>
                                        <li><a href="/general-health" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={GeneralHealth} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.General_Health_Check || 'सामान्य स्वास्थ्य जांच'}</a>
                                        </li>
                                        <li><a href="/hypertension-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={Hypertension} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Hypertension_treatment || 'उच्च रक्तचाप उपचार'}</a>
                                        </li>
                                        <li><a href="/immunizations-and-vaccinations" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={ImmunizationsandVaccinations} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Immunizations_and_Vaccinations || 'टीकाकरण और वैक्सीनेशन उपचार'}</a>
                                        </li>
                                        <li><a href="/minor-injury-care" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={MinorInjuryCare} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Minor_Injury_Care || 'छोटे-मोटे घावों या चोटों उपचार'}</a>
                                        </li>
                                        <li><a href="/nutritional-counseling" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={NutritionalCounseling} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Nutritional_Counseling || 'पोषण परामर्श'}</a>
                                        </li>
                                        <li><a href="/pain-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={PainManagement} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Pain_Treatment || 'दर्द उपचार'}</a>
                                        </li>
                                        <li><a href="/sleep-disorder-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={SleepDisorder} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Sleep_Disorder_Treatment || 'नींद संबंधित उपचार'}</a>
                                        </li>

                                        <li><a href="/skin-conditions" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={SkinConditions} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Skin_Conditions || 'त्वचा रोग उपचार'}</a>
                                        </li>
                                        <li><a href="/thyroid-disorder-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={ThyroidDisorder} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Thyroid_Disorder_Treatment || 'थायरॉइड ग्रंथि उपचार'}</a>
                                        </li>
                                        <li><a href="/urinarytract-infection" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={UrinaryTractInfection} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Urinary_Tract_Infection_Treatment || 'यूरिन इन्फेक्शन (मूत्र मार्ग संक्रमण) उपचार'}</a>
                                        </li>
                                    </ul>
                                </>
                            )}
                            {key === 'services' && (
                                <>
                                    <ul className="absolute top-full left-0 bg-white shadow-md rounded min-w-[710px] z-50 p-2 grid grid-cols-2 gap-1 hidden group-hover:grid">
                                        <li>
                                            <a href="/ambulance" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Ambulance} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Ambulance || 'एम्बुलेंस(रोगी-वाहन)'}</a>
                                        </li>
                                        <li>
                                            <a href="/blood-bank" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Bloodbank} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Blood_Bank || 'ब्लड बैंक'}</a>
                                        </li>

                                        <li>
                                            <a href="/icu" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={ICU} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.icu || 'इंटेंसिव केयर यूनिट (गहन चिकित्सा इकाई)'}</a>
                                        </li>
                                        <li>
                                            <a href="/tpa" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={TPA} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.tpa || 'बीमा(इंश्योरेंस) और टीपीए'}</a>
                                        </li>
                                        <li>
                                            <a href="/modular-operation-theatre" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={MOT} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.mot || 'मॉड्यूलर ऑपरेशन थिएटर'}</a>
                                        </li>
                                        <li>
                                            <a href="/neonatal-intensive-care-unit" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={NICUSER} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.NICU || 'नवजात शिशु गहन चिकित्सा'}</a>
                                        </li>
                                        <a href="/pathlogy" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                            <img src={Pathology} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Pathlogy || 'पैथोलॉजी (रोग विशेषज्ञता)'}
                                        </a>

                                        <li>
                                            <a href="/patient-care" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Patient} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Patient_Care || 'रोगी देखभाल 27/4'}</a>
                                        </li>
                                        <li>
                                            <a href="/pharmacy" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Pharmacy} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Pharmacy || 'फार्मेसी(औषधालय )'}</a>
                                        </li>
                                        <li>
                                            <a href="/pediatric-intensive-care-unit" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={PICUSER} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.PICU || 'बाल चिकित्सा गहन चिकित्सा'}</a>
                                        </li>
                                    </ul>
                                </>
                            )}
                            {key === 'media' && (
                                <>
                                    <ul className="absolute top-full left-0 bg-white shadow-md rounded min-w-[280px] z-50 p-1 hidden group-hover:grid">
                                        <li>
                                            <a href="/blog" className="block px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Blogs} alt="" className="h-5 w-5 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Blog || 'ब्लॉग (चिट्ठा / वेब दैनिकी)'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/news-and-event" className="block px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={NewsandEvents} alt="" className="h-5 w-5 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.News_and_Events || 'समाचार और घटनाएं'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/gallery" className="block px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Gallery} alt="" className="h-5 w-5 mx-1  rounded-sm hover:shadow-lg" />
                                                {translations?.Gallery || 'गैलरी'}
                                            </a>
                                        </li>
                                    </ul>
                                </>
                            )}
                        </div>
                    ))}

                    <a href="/careers" className="text-gray-700 hover:text-blue-600">{translations?.Careers || 'करियर'}</a>
                    <a href="/about-us" className="text-gray-700 hover:text-blue-600">{translations?.About || 'हमारे विषय में'}</a>
                    <a href="/contact-us" className="text-gray-700 hover:text-blue-600">{translations?.Contact || 'हमसे संपर्क करें'}</a>

                    <a href="/donate" >
                        <span class="bg-blue-200 hover:bg-white hover:border border-blue-700 text-blue-800 rounded-full py-3 px-5 shadow hover:shadow-2xl transition duration-500 flex">
                            <FaDonate className='mt-1 mr-2' />  Donation
                        </span>
                    </a>
                </div>


                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <a
                        href="/donate"
                    >
                        <span class="bg-blue-200 hover:bg-white hover:border border-blue-700 text-blue-800 rounded-full py-3 px-5 shadow hover:shadow-2xl transition duration-500 flex">
                            <FaDonate className='mt-1 mr-2' />  Donation
                        </span>
                    </a>
                    <button
                        className="text-gray-700 text-2xl"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-0 left-0 w-full bg-white shadow-md z-50 p-4 space-y-4 md:hidden h-[400px] overflow-auto">
                        {/* Cancel / Close button */}
                        <button
                            className=" text-right w-full text-xl font-bold text-gray-700 hover:text-blue-600"
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>

                        <div className="md:flex items-center gap-7">
                            {dropdownKeys.map(({ key, label }) => (
                                <div key={key} className="relative">
                                    <button
                                        onClick={() => toggleDropdown(key)}
                                        className="text-gray-700 hover:text-blue-600 flex items-center py-2"
                                    >
                                        {label}
                                        <svg className="ml-1 mt-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {dropdowns[key] && (
                                        <ul className="absolute top-full left-0 bg-white shadow-md rounded min-w-[290px] h-[100] z-50 p-2 grid grid-cols-2 gap-1">
                                            {key === 'departments' && (
                                                <>
                                                    <li>
                                                        <a href="/cardiology" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={Cardiology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Cardiology || 'हृदय रोग विशेषज्ञता'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/emergency-medicine" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={EmergencyMedicine} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.emergency_medicine || 'आपातकालीन सेवाएं'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ent" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={ENT} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.ENT || 'कान, नाक और गला'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/gastroenterology" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={Gastroenterology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Gastroenterology || 'जठरांत्र'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/gynaecology" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={Gynecology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Gynecology || 'स्त्री रोग विशेषज्ञता'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/general-surgery" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={GeneralSurgery} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" />{translations?.General_Surgery || 'जनरल सर्जरी'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/neurology" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={Neurology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Neurology || 'तंत्रिका विशेषज्ञता'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/nicu" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={NICU} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.nicu || 'नवजात शिशु गहन चिकित्सा'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/orthopedics" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={Orthopedics} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Orthopedics || 'अस्थिरोग विशेषज्ञता'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/picu" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={PICU} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" />{translations?.picu || 'बाल चिकित्सा गहन चिकित्सा'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/respiratory" className="block px-1 py-1 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                            <img src={Respiratory} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Respiratory || 'साँस विशेषज्ञता'}</a>
                                                    </li>
                                                </>
                                            )}
                                            {key === 'treatment' && (
                                                <>
                                                    <li><a href="/allergy-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={AllergyTreatment} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Allergy_Treatment || 'एलर्जी उपचार'}</a>
                                                    </li>
                                                    <li><a href="/anemia-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={AnemiaTreatment} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Anemia_Treatment || 'एनीमिया (लाल रक्त कोशिकाओं / हीमोग्लोबिन) उपचार'}</a>
                                                    </li>
                                                    <li><a href="/asthma-bronchitis" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={AsthmaandBronchitis} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Asthma_and_Bronchitis_Treatment || 'अस्थमा और ब्रोंकाइटिस उपचार'}</a>
                                                    </li>
                                                    <li><a href="/cold-cough" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={ColdCoughandFlu} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Cold_Cough_and_Flu_Treatment || 'सर्दी, खांसी और फ्लू उपचार'}</a>
                                                    </li>
                                                    <li><a href="/cholesterol-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={CholesterolandLipid} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Cholesterol_and_Lipid_Disorder_Treatment || 'कोलेस्ट्रॉल, ट्राइग्लिसराइड्स और अन्य उपचार'}</a>
                                                    </li>
                                                    <li><a href="/dehydration-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={DehydrationandIVFluids} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Dehydration_and_IV_Fluids || 'निर्जलीकरण (शरीर में पानी की कमी) IV फ्लुइड्स उपचार'}</a>
                                                    </li>
                                                    <li><a href="/diabetes-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={DiabetesManagement} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Diabetes_Treatment || 'डायबिटीज उपचार'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/fever-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                            <img src={FeverManagement} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.Fever_Treatment || 'बुखार उपचार'}</a>
                                                    </li>
                                                    <li><a href="/gastrointestinal-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={GastrointestinalTreatment} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Gastrointestinal_Treatment || 'पाचन तंत्र संबंधित उपचार'}</a>
                                                    </li>
                                                    <li><a href="/general-health" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={GeneralHealth} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.General_Health_Check || 'सामान्य स्वास्थ्य जांच'}</a>
                                                    </li>
                                                    <li><a href="/hypertension-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={Hypertension} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Hypertension_treatment || 'उच्च रक्तचाप उपचार'}</a>
                                                    </li>
                                                    <li><a href="/immunizations-and-vaccinations" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={ImmunizationsandVaccinations} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Immunizations_and_Vaccinations || 'टीकाकरण और वैक्सीनेशन उपचार'}</a>
                                                    </li>
                                                    <li><a href="/minor-injury-care" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={MinorInjuryCare} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Minor_Injury_Care || 'छोटे-मोटे घावों या चोटों उपचार'}</a>
                                                    </li>
                                                    <li><a href="/nutritional-counseling" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={NutritionalCounseling} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Nutritional_Counseling || 'पोषण परामर्श'}</a>
                                                    </li>
                                                    <li><a href="/pain-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={PainManagement} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Pain_Treatment || 'दर्द उपचार'}</a>
                                                    </li>
                                                    <li><a href="/sleep-disorder-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={SleepDisorder} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Sleep_Disorder_Treatment || 'नींद संबंधित उपचार'}</a>
                                                    </li>

                                                    <li><a href="/skin-conditions" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={SkinConditions} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Skin_Conditions || 'त्वचा रोग उपचार'}</a>
                                                    </li>
                                                    <li><a href="/thyroid-disorder-treatment" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={ThyroidDisorder} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Thyroid_Disorder_Treatment || 'थायरॉइड ग्रंथि उपचार'}</a>
                                                    </li>
                                                    <li><a href="/urinarytract-infection" className="block  px-1 py-2 text-blue-700 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                        <img src={UrinaryTractInfection} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Urinary_Tract_Infection_Treatment || 'यूरिन इन्फेक्शन (मूत्र मार्ग संक्रमण) उपचार'}</a>
                                                    </li>

                                                </>
                                            )}
                                            {key === 'services' && (
                                                <>
                                                    <li>
                                                        <a href="/ambulance" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={Ambulance} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.Ambulance || 'एम्बुलेंस(रोगी-वाहन)'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/blood-bank" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={Bloodbank} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.Blood_Bank || 'ब्लड बैंक'}</a>
                                                    </li>

                                                    <li>
                                                        <a href="/icu" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={ICU} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.icu || 'इंटेंसिव केयर यूनिट (गहन चिकित्सा इकाई)'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/tpa" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={TPA} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.tpa || 'बीमा(इंश्योरेंस) और टीपीए'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/modular-operation-theatre" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={MOT} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.mot || 'मॉड्यूलर ऑपरेशन थिएटर'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/neonatal-intensive-care-unit" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={NICUSER} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.NICU || 'नवजात शिशु गहन चिकित्सा'}</a>
                                                    </li>
                                                    <a href="/pathlogy" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                        <img src={Pathology} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                        {translations?.Pathlogy || 'पैथोलॉजी (रोग विशेषज्ञता)'}
                                                    </a>

                                                    <li>
                                                        <a href="/patient-care" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={Patient} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.Patient_Care || 'रोगी देखभाल 27/4'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/pharmacy" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={Pharmacy} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.Pharmacy || 'फार्मेसी(औषधालय )'}</a>
                                                    </li>
                                                    <li>
                                                        <a href="/pediatric-intensive-care-unit" className="block  px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={PICUSER} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.PICU || 'बाल चिकित्सा गहन चिकित्सा'}</a>
                                                    </li>

                                                </>
                                            )}
                                            {key === 'media' && (
                                                <>
                                                    <li>
                                                        <a href="/blog" className="block px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={Blogs} alt="" className="h-5 w-5 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.Blog || 'ब्लॉग (चिट्ठा / वेब दैनिकी)'}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/news-and-event" className="block px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={NewsandEvents} alt="" className="h-5 w-5 mx-1  rounded-xl hover:shadow-lg" />
                                                            {translations?.News_and_Events || 'समाचार और घटनाएं'}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/gallery" className="block px-4 py-2 text-blue-700 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                            <img src={Gallery} alt="" className="h-5 w-5 mx-1  rounded-sm hover:shadow-lg" />
                                                            {translations?.Gallery || 'गैलरी'}
                                                        </a>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            {/* Static Links */}
                            <a href="/about-us" className="text-gray-700 hover:text-blue-600 my-2">{translations?.About || 'हमारे विषय में'}</a><br />
                            <a href="/careers" className="text-gray-700 hover:text-blue-600 my-2">{translations?.Careers || 'करियर'}</a><br />
                            <a href="/contact-us" className="text-gray-700 hover:text-blue-600 my-2">{translations?.Contact || 'हमसे संपर्क करें'}</a>

                        </div>
                    </div>
                )}
            </div>
        </nav>

    );
};

export default Navbar;
