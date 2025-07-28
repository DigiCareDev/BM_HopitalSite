import React, { useState, useEffect } from 'react';
import Logo from "@/assets/Logo.webp";
import { FaDonate } from 'react-icons/fa';
import Subnav from './subnav';
// =====================================================
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


export default function Nav({ translations }) {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [departmentsDropdown, setDepartmentsDropdown] = useState(false);
    const [treatmentDropdown, setTreatmentDropdown] = useState(false);
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const [libraryDropdown, setLibraryDropdown] = useState(false);

    const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <div>
            {/* <Subnav /> */}
            <nav className="sticky top-0 z-60 bg-gray-200 border-gray-200 dark:bg-white shadow-md ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mx-2">
                    <a href="/" className="flex justify-between items-center py-3">
                        <img src={Logo} className="h-10 mr-1" alt="Logo" />
                        <span className=" text-xl font-semibold whitespace-nowrap text-blue-800"><span className="text-[#80CAC7]">BM</span> Hospital</span>
                    </a>

                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0">

                        <a href='/donate'>
                            <span class="bg-blue-200 hover:bg-white hover:border border-blue-700 text-blue-800 rounded-full py-3 px-5 shadow hover:shadow-2xl transition duration-500 flex"><FaDonate className='mt-1 mr-2' />Donation</span>
                        </a>

                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="inline-flex items-center pr-4 w-10 h-10 justify-center  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* Navbar Links */}
                    <div className={`items-center justify-between ${mobileMenu ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
                        <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 md:mt-0  md:dark:bg-transparent">

                            {/* Dropdown (Services) */}
                            <li className="relative group">
                                <button
                                    onClick={() => setDepartmentsDropdown(!departmentsDropdown)}
                                    className="flex items-center justify-between w-full py-2 px-3 text-md text-blue-700  dark:hover:text-blue-800 md:cursor-pointer"
                                >
                                    {translations?.Departments || 'विभाग'}
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {(departmentsDropdown || window.innerWidth >= 768) && (
                                    <ul className='absolute left-0 top-full hidden group-hover:grid grid-cols-2 md:grid-cols-2 bg-white text-blue-700 rounded-md shadow-lg z-50 min-w-[700px]'>
                                        <li>
                                            <a href="/cardiology" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Cardiology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Cardiology || 'हृदय रोग विशेषज्ञता'}</a>
                                        </li>
                                        <li>
                                            <a href="/emergency-medicine" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={EmergencyMedicine} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.emergency_medicine || 'आपातकालीन सेवाएं'}</a>
                                        </li>
                                        <li>
                                            <a href="/ent" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={ENT} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.ENT || 'कान, नाक और गला'}</a>
                                        </li>
                                        <li>
                                            <a href="/gastroenterology" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Gastroenterology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Gastroenterology || 'जठरांत्र'}</a>
                                        </li>
                                        <li>
                                            <a href="/gynaecology" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Gynecology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Gynecology || 'स्त्री रोग विशेषज्ञता'}</a>
                                        </li>
                                        <li>
                                            <a href="/general-surgery" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={GeneralSurgery} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" />{translations?.General_Surgery || 'जनरल सर्जरी'}</a>
                                        </li>
                                        <li>
                                            <a href="/neurology" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Neurology} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Neurology || 'तंत्रिका विशेषज्ञता'}</a>
                                        </li>
                                        <li>
                                            <a href="/nicu" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={NICU} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.nicu || 'नवजात शिशु गहन चिकित्सा'}</a>
                                        </li>
                                        <li>
                                            <a href="/orthopedics" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Orthopedics} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Orthopedics || 'अस्थिरोग विशेषज्ञता'}</a>
                                        </li>
                                        <li>
                                            <a href="/picu" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={PICU} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" />{translations?.picu || 'बाल चिकित्सा गहन चिकित्सा'}</a>
                                        </li>
                                        <li>
                                            <a href="/respiratory" className="block px-1 py-1 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex items-center">
                                                <img src={Respiratory} alt="" className="h-8 w-8 mx-1  rounded-xl hover:shadow-lg" /> {translations?.Respiratory || 'साँस विशेषज्ञता'}</a>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Dropdown (Services) */}
                            <li className="relative group">
                                <button
                                    onClick={() => setTreatmentDropdown(!treatmentDropdown)}
                                    className="flex items-center justify-between w-full text-md py-2 px-3 text-blue-700  dark:hover:text-blue-800 md:cursor-pointer"
                                >
                                    {translations?.Treatment || 'उपचार'}
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}

                                {(treatmentDropdown || window.innerWidth >= 768) && (
                                    <ul className='absolute left-0 top-full hidden group-hover:grid grid-cols-2 md:grid-cols-2 bg-white text-blue-700 rounded-md shadow-lg z-50 p-2 min-w-[850px]'>
                                        <li><a href="/allergy-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={AllergyTreatment} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Allergy_Treatment || 'एलर्जी उपचार'}</a>
                                        </li>
                                        <li><a href="/anemia-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={AnemiaTreatment} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Anemia_Treatment || 'एनीमिया (लाल रक्त कोशिकाओं / हीमोग्लोबिन) उपचार'}</a>
                                        </li>
                                        <li><a href="/asthma-bronchitis" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={AsthmaandBronchitis} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Asthma_and_Bronchitis_Treatment || 'अस्थमा और ब्रोंकाइटिस उपचार'}</a>
                                        </li>
                                        <li><a href="/cold-cough" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={ColdCoughandFlu} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Cold_Cough_and_Flu_Treatment || 'सर्दी, खांसी और फ्लू उपचार'}</a>
                                        </li>
                                        <li><a href="/cholesterol-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={CholesterolandLipid} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Cholesterol_and_Lipid_Disorder_Treatment || 'कोलेस्ट्रॉल, ट्राइग्लिसराइड्स और अन्य उपचार'}</a>
                                        </li>
                                        <li><a href="/dehydration-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={DehydrationandIVFluids} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Dehydration_and_IV_Fluids || 'निर्जलीकरण (शरीर में पानी की कमी) IV फ्लुइड्स उपचार'}</a>
                                        </li>
                                        <li><a href="/diabetes-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={DiabetesManagement} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Diabetes_Treatment || 'डायबिटीज उपचार'}</a>
                                        </li>
                                        <li>
                                            <a href="/fever-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                                <img src={FeverManagement} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Fever_Treatment || 'बुखार उपचार'}</a>
                                        </li>
                                        <li><a href="/gastrointestinal-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={GastrointestinalTreatment} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Gastrointestinal_Treatment || 'पाचन तंत्र संबंधित उपचार'}</a>
                                        </li>
                                        <li><a href="/general-health" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={GeneralHealth} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.General_Health_Check || 'सामान्य स्वास्थ्य जांच'}</a>
                                        </li>
                                        <li><a href="/hypertension-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={Hypertension} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Hypertension_treatment || 'उच्च रक्तचाप उपचार'}</a>
                                        </li>
                                        <li><a href="/immunizations-and-vaccinations" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={ImmunizationsandVaccinations} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Immunizations_and_Vaccinations || 'टीकाकरण और वैक्सीनेशन उपचार'}</a>
                                        </li>
                                        <li><a href="/minor-injury-care" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={MinorInjuryCare} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Minor_Injury_Care || 'छोटे-मोटे घावों या चोटों उपचार'}</a>
                                        </li>
                                        <li><a href="/nutritional-counseling" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={NutritionalCounseling} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Nutritional_Counseling || 'पोषण परामर्श'}</a>
                                        </li>
                                        <li><a href="/pain-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={PainManagement} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Pain_Treatment || 'दर्द उपचार'}</a>
                                        </li>
                                        <li><a href="/sleep-disorder-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={SleepDisorder} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Sleep_Disorder_Treatment || 'नींद संबंधित उपचार'}</a>
                                        </li>

                                        <li><a href="/skin-conditions" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={SkinConditions} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Skin_Conditions || 'त्वचा रोग उपचार'}</a>
                                        </li>
                                        <li><a href="/thyroid-disorder-treatment" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={ThyroidDisorder} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Thyroid_Disorder_Treatment || 'थायरॉइड ग्रंथि उपचार'}</a>
                                        </li>
                                        <li><a href="/urinarytract-infection" className="block  px-1 py-2 hover:bg-gray-100 rounded-md hover:shadow flex">
                                            <img src={UrinaryTractInfection} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Urinary_Tract_Infection_Treatment || 'यूरिन इन्फेक्शन (मूत्र मार्ग संक्रमण) उपचार'}</a>
                                        </li>

                                    </ul>
                                )}
                            </li>

                            {/* Dropdown (Services) */}
                            <li className="relative group">
                                <button
                                    onClick={() => setServicesDropdown(!servicesDropdown)}
                                    className="flex items-center justify-between w-full text-md py-2 px-1 text-blue-700  dark:hover:text-blue-800 md:cursor-pointer"
                                >
                                    {translations?.Services || 'सेवाएं'}
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {(servicesDropdown || window.innerWidth >= 768) && (
                                    <ul className='absolute left-0 top-full hidden group-hover:grid grid-cols-2 md:grid-cols-2 bg-white text-blue-700 rounded-md shadow-lg z-50 p-2 min-w-[730px]'>
                                        <li>
                                            <a href="/ambulance" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Ambulance} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Ambulance || 'एम्बुलेंस(रोगी-वाहन)'}</a>
                                        </li>
                                        <li>
                                            <a href="/blood-bank" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Bloodbank} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Blood_Bank || 'ब्लड बैंक'}</a>
                                        </li>

                                        <li>
                                            <a href="/icu" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={ICU} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.icu || 'इंटेंसिव केयर यूनिट (गहन चिकित्सा इकाई)'}</a>
                                        </li>
                                        <li>
                                            <a href="/tpa" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={TPA} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.tpa || 'बीमा(इंश्योरेंस) और टीपीए'}</a>
                                        </li>
                                        <li>
                                            <a href="/modular-operation-theatre" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={MOT} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.mot || 'मॉड्यूलर ऑपरेशन थिएटर'}</a>
                                        </li>
                                        <li>
                                            <a href="/neonatal-intensive-care-unit" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={NICUSER} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.NICU || 'नवजात शिशु गहन चिकित्सा'}</a>
                                        </li>
                                        <a href="/pathlogy" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                            <img src={Pathology} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                            {translations?.Pathlogy || 'पैथोलॉजी (रोग विशेषज्ञता)'}
                                        </a>

                                        <li>
                                            <a href="/patient-care" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Patient} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Patient_Care || 'रोगी देखभाल 27/4'}</a>
                                        </li>
                                        <li>
                                            <a href="/pharmacy" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Pharmacy} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Pharmacy || 'फार्मेसी(औषधालय )'}</a>
                                        </li>
                                        <li>
                                            <a href="/pediatric-intensive-care-unit" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={PICUSER} alt="" className="h-6 w-6 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.PICU || 'बाल चिकित्सा गहन चिकित्सा'}</a>
                                        </li>

                                    </ul>
                                )}
                            </li>

                            {/* Dropdown (Services) */}
                            <li className="relative group">
                                <button
                                    onClick={() => setLibraryDropdown(!libraryDropdown)}
                                    className="flex items-center justify-between w-full text-md py-2 px-1 text-blue-700 dark:hover:text-blue-800 md:cursor-pointer"
                                >
                                    {translations?.BM_Media || 'बी.एम. मिडिया'}
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {(libraryDropdown || window.innerWidth >= 768) && (
                                    <ul className="absolute left-0 bg-white dark:bg-white pb-2  text-blue-700 dark:text-blue-700 rounded-md shadow-lg z-50 min-w-[300px] md:group-hover:block md:hidden">
                                        <li>
                                            <a href="/blog" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Blogs} alt="" className="h-5 w-5 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.Blog || 'ब्लॉग (चिट्ठा / वेब दैनिकी)'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/news-and-event" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={NewsandEvents} alt="" className="h-5 w-5 mx-1  rounded-xl hover:shadow-lg" />
                                                {translations?.News_and_Events || 'समाचार और घटनाएं'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/gallery" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white rounded-md mx-1 hover:shadow-md flex">
                                                <img src={Gallery} alt="" className="h-5 w-5 mx-1  rounded-sm hover:shadow-lg" />
                                                {translations?.Gallery || 'गैलरी'}
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li><a href="/careers" className="block py-2 px-1 text-md text-blue-700 dark:hover:text-blue-800">{translations?.Careers || 'करियर'}</a></li>
                            <li><a href="/about-us" className="block py-2 px-1 text-md text-blue-700 dark:hover:text-blue-800">{translations?.About || 'हमारे विषय में'}</a></li>
                            <li><a href="/contact-us" className="block py-2 px-1 text-md text-blue-700 dark:hover:text-blue-800">{translations?.Contact || 'हमसे संपर्क करें'}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
