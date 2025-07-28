import React, { useEffect, useState } from 'react'
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
import Nav from './components/Nav';
import Footer from './components/Footer';
import BackToTop from "./components/BackToTopButton"
import Subnav from "./components/subnav";


export default function Treatment() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const treatments = [
        {
            label: translations?.Allergy_Treatment || 'एलर्जी उपचार',
            link: "/allergy-treatment",
            icon: AllergyTreatment,
        },
        {
            label: translations?.Anemia_Treatment || 'एनीमिया (लाल रक्त कोशिकाओं / हीमोग्लोबिन) उपचार',
            link: "/anemia-treatment",
            icon: AnemiaTreatment,
        },
        {
            label: translations?.Asthma_and_Bronchitis_Treatment || 'अस्थमा और ब्रोंकाइटिस उपचार',
            link: "/asthma-bronchitis",
            icon: AsthmaandBronchitis,
        },
        {
            label: translations?.Cold_Cough_and_Flu_Treatment || 'सर्दी, खांसी और फ्लू उपचार',
            link: "/cold-cough",
            icon: ColdCoughandFlu,
        },
        {
            label: translations?.Cholesterol_and_Lipid_Disorder_Treatment || 'कोलेस्ट्रॉल, ट्राइग्लिसराइड्स और अन्य उपचार',
            link: "/cholesterol-treatment",
            icon: CholesterolandLipid,
        },
        {
            label: translations?.Dehydration_and_IV_Fluids || 'निर्जलीकरण (शरीर में पानी की कमी) IV फ्लुइड्स उपचार',
            link: "/dehydration-treatment",
            icon: DehydrationandIVFluids,
        },
        {
            label: translations?.Diabetes_Treatment || 'डायबिटीज उपचार',
            link: "/diabetes-treatment",
            icon: DiabetesManagement,
        },
        {
            label: translations?.Fever_Treatment || 'बुखार उपचार',
            link: "/fever-treatment",
            icon: FeverManagement,
        },
        {
            label: translations?.Gastrointestinal_Treatment || 'पाचन तंत्र संबंधित उपचार',
            link: "/gastrointestinal-treatment",
            icon: GastrointestinalTreatment,
        },
        {
            label: translations?.General_Health_Check || 'सामान्य स्वास्थ्य जांच',
            link: "/general-health",
            icon: GeneralHealth,
        },
        {
            label: translations?.Hypertension_treatment || 'उच्च रक्तचाप उपचार',
            link: "/hypertension-treatment",
            icon: Hypertension,
        },
        {
            label: translations?.Immunizations_and_Vaccinations || 'टीकाकरण और वैक्सीनेशन उपचार',
            link: "/immunizations-and-vaccinations",
            icon: ImmunizationsandVaccinations,
        },
        {
            label: translations?.Minor_Injury_Care || 'छोटे-मोटे घावों या चोटों उपचार',
            link: "/minor-injury-care",
            icon: MinorInjuryCare,
        },
        {
            label: translations?.Nutritional_Counseling || 'पोषण परामर्श',
            link: "/nutritional-counseling",
            icon: NutritionalCounseling,
        },
        {
            label: translations?.Pain_Treatment || 'दर्द उपचार',
            link: "/pain-treatment",
            icon: PainManagement,
        },
        {
            label: translations?.Sleep_Disorder_Treatment || 'नींद संबंधित उपचार',
            link: "/sleep-disorder-treatment",
            icon: SleepDisorder,
        },
        {
            label: translations?.Skin_Conditions || 'त्वचा रोग उपचार',
            link: "/skin-conditions",
            icon: SkinConditions,
        },
        {
            label: translations?.Thyroid_Disorder_Treatment || 'थायरॉइड ग्रंथि उपचार',
            link: "/thyroid-disorder-treatment",
            icon: ThyroidDisorder,
        },
        {
            label: translations?.Urinary_Tract_Infection_Treatment || 'यूरिन इन्फेक्शन (मूत्र मार्ग संक्रमण) उपचार',
            link: "/urinarytract-infection",
            icon: UrinaryTractInfection,
        },
    ];


    return (
        <div className='bg-white'>
            <BackToTop />
            <Subnav onTranslations={handletranslate} />
            <Nav translations={translations} />
            <div className="bg-white p-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">{translations?.Our_Treatments || 'हमारे उपचार'}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {treatments.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            className="group flex flex-col items-center text-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md hover:bg-white transition duration-200"
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="h-15 w-15 mb-3 rounded-full shadow-sm group-hover:scale-110 transition-transform"
                            />
                            <p className="text-md font-bold text-gray-800 group-hover:text-blue-700">
                                {item.label}
                            </p>
                            <a href={item.link} className="text-sm font-medium text-gray-800 group-hover:text-blue-700">
                                Read more→
                            </a>
                        </a>
                    ))}
                </div>
            </div>
            <Footer translations={translations} />
        </div>
    )
}
