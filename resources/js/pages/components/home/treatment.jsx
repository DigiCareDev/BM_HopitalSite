import React from 'react'
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

function treatment({translations}) {
    //  console.log('translations', translations.allergy_treatment_title)

     const treatments = [
    
        {
            id: 2,
            label: translations?.anemia_treatment || 'एनीमिया उपचार',
            link: '/treatment',
            icon: AnemiaTreatment,
            desc: translations?.anemia_treatment_title || "BM Hospital offers expert anemia treatment to restore energy, improve health, and prevent complications."
        },
        {
            id: 3,
            label: translations?.asthma_and_bronchitis_treatment || 'अस्थमा और ब्रोंकाइटिस उपचार',
            link: '/treatment',
            icon: AsthmaandBronchitis,
            desc: translations?.asthma_and_bronchitis_treatment_title || "BM Hospital provides expert care for asthma and bronchitis with advanced treatment and personalized support."
        },
        {
            id: 4,
            label: translations?.cold_cough_fever_and_pain_relief || 'सर्दी, खांसी और फ्लू उपचार',
            link: '/treatment',
            icon: ColdCoughandFlu,
            desc: translations?.cold_cough_fever_and_pain_relief_title || "BM Hospital offers effective Cold, Cough, and Flu treatment with expert care and 24/7 medical support."
        },
        {
            id: 5,
            label: translations?.cholesterol_diabetes_and_hypertension_care || 'कोलेस्ट्रॉल और लिपिड विकार उपचार',
            link: '/treatment',
            icon: CholesterolandLipid,
            desc: translations?.cholesterol_diabetes_and_hypertension_care_title || "BM Hospital provides expert care for cholesterol and lipid disorders with advanced treatment and diagnosis."
        },
        {
            id: 6,
            label: translations?.dehydration_and_iv_fluids || 'डिहाइड्रेशन और IV तरल पदार्थ',
            link: '/treatment',
            icon: DehydrationandIVFluids,
            desc: translations?.dehydration_and_iv_fluids_title || "BM Hospital offers prompt dehydration care with IV fluids to restore balance and ensure quick recovery."
        },
        {
            id: 7,
            label: translations?.diabetes_treatment || 'डायबिटीज उपचार',
            link: '/treatment',
            icon: DiabetesManagement,
            desc: translations?.diabetes_treatment_title || "BM Hospital provides expert diabetes care with personalized treatment plans and advanced monitoring."
        },
        {
            id: 8,
            label: translations?.fever_treatment || 'बुखार उपचार',
            link: '/treatment',
            icon: FeverManagement,
            desc: translations?.fever_treatment_title || "BM Hospital offers accurate fever diagnosis and effective treatment with expert doctors and 24/7 care."
        },
         {
            id: 10,
            label: translations?.allergy_treatment || 'एलर्जी उपचार',
            link: '/treatment',
            icon: AllergyTreatment,
            des: translations?.allergy_treatment_title || "BM Hospital offers expert care for allergy relief at BM Hospital—breathe easier with personalized treatment today.",        
        },
        {
            id: 11,
            label: translations?.gastrointestinal_treatment || 'गैस्ट्रोइंटेस्टाइनल उपचार',
            link: '/treatment',
            icon: GastrointestinalTreatment,
            desc: translations?.gastrointestinal_treatment_title || "BM Hospital provides expert care for acidity, constipation, diarrhea with advanced gastrointestinal treatment."
        },
        {
            id: 12,
            label: translations?.general_health_checkups || 'सामान्य स्वास्थ्य जांच',
            link: '/treatment',
            icon: GeneralHealth,
            desc: translations?.general_health_checkups_title || "BM Hospital offers comprehensive general health check-ups for early detection and preventive care."
        },
        {
            id: 13,
            label: translations?.hypertension_high_blood_pressure_treatment || 'हाइपरटेंशन (उच्च रक्तचाप) उपचार',
            link: '/treatment',
            icon: Hypertension,
            desc: translations?.hypertension_high_blood_pressure_treatment_title || "BM Hospital provides expert care for hypertension with accurate diagnosis and personalized treatment."
        },
        {
            id: 14,
            label: translations?.immunizations_and_vaccinations || 'टीकाकरण और वैक्सीनेशन',
            link: '/treatment',
            icon: ImmunizationsandVaccinations,
            desc: translations?.immunizations_and_vaccinations_title || "BM Hospital offers essential immunizations and vaccinations for all ages to protect your health."
        },
        {
            id: 15,
            label: translations?.minor_injury_care || 'मामूली चोटों की देखभाल (काटने, जलने, मोच आने पर)',
            link: '/treatment',
            icon: MinorInjuryCare,
            desc: translations?.minor_injury_care_title || "BM Hospital provides prompt care for minor injuries like cuts, burns, and sprains with expert attention."

        },
        {
            id: 16,
            label: translations?.nutritional_counseling || 'पोषण संबंधी परामर्श',
            icon: NutritionalCounseling,
            link: '/treatment',
            desc: translations?.nutritional_counseling_title || "BM Hospital offers expert nutritional counseling to support healthy eating, wellness, and disease prevention."
        },
        {
            id: 17,
            label: translations?.pain_management || 'दर्द उपचार',
            icon: PainManagement,
            link: '/treatment',
            desc: translations?.pain_management_title || "BM Hospital provides expert pain treatment for headaches, body pain, and migraines with lasting relief."
        },
        {
            id: 18,
            label: "More Treatment →",
            link: '/treatment',
            icon: "https://static.vecteezy.com/system/resources/previews/020/291/170/non_2x/see-more-icon-see-more-typography-logo-vector.jpg",
            desc: translations?.more_treatment_title || "Read about more treatments →"
        },
        
    ];

    return (
        <section className="bg-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">{translations?.all_treatments || 'सभी उपचार'}</h2>
                <div className="grid md:grid-cols-4 bg-white rounded-lg overflow-hidden shadow-lg ">
                    {/* Left Sidebar */}
                    <div className="bg-blue-400 text-white p-6 md:col-span-1 flex flex-col justify-between">
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-2">{translations?.our_all_treatments || 'हमारे सभी उपचार'}</h4>
                            <h2 className="text-lg font-bold leading-snug mb-4">{translations?.comprehensive_health || 'बीएम अस्पताल में व्यापक स्वास्थ्य समाधान: रोज़मर्रा की बीमारियों के लिए विशेषज्ञ देखभाल'}</h2>
                            <p className="text-sm text-gray-100">
                                {translations?.treatment2 || 'बीएम हॉस्पिटल रोज़मर्रा की स्वास्थ्य समस्याओं के अनुरूप उपचारों की एक विस्तृत श्रृंखला प्रदान करता है। एलर्जी और एनीमिया के उपचार से लेकर अस्थमा और ब्रोंकाइटिस के प्रबंधन तक, हमारे विशेषज्ञ विशेषज्ञ देखभाल प्रदान करते हैं। हम सर्दी, खांसी, बुखार और दर्द से तुरंत राहत सुनिश्चित करते हैं, साथ ही कोलेस्ट्रॉल, मधुमेह और उच्च रक्तचाप के लिए भी प्रभावी देखभाल प्रदान करते हैं। हमारी सेवाओं में निर्जलीकरण और अंतःशिरा द्रव्य, जठरांत्र संबंधी उपचार और निवारक स्वास्थ्य के लिए सामान्य स्वास्थ्य जांच शामिल हैं। मामूली चोटों की देखभाल, टीकाकरण और पोषण संबंधी परामर्श के साथ, हम दीर्घकालिक स्वास्थ्य को बढ़ावा देते हैं। बीएम हॉस्पिटल में, आपको और आपके परिवार को स्वस्थ रखने के लिए हर उपचार करुणा, उन्नत तकनीक और रोगी-प्रथम दृष्टिकोण के साथ प्रदान किया जाता है।'}
                            </p>
                        </div>
                        <a href="/treatment" className="text-md text-white underline mt-6 inline-block font-bold">{translations?.read_about_more_treatments || 'अधिक उपचारों के बारे में पढ़ें →'}</a>
                    </div>

                    {/* Right Grid */}
                    <div className="bg-gray-50 p-6 md:col-span-3">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {treatments.map((item) => (
                                <a
                                    key={item.id}
                                    className="group relative flex flex-col items-center text-center p-4  hover:shadow-lg hover:rounded-xl hover:bg-white transition-transform hover:scale-105"
                                >
                                    {/* Icon */}
                                    <div className="w-15 h-15 mb-2 flex items-center justify-center rounded-full bg-blue-100 text-2xl">
                                        <img src={item.icon} alt={item.label} className='shodaw-xl' />
                                    </div>

                                    {/* Label */}
                                    <p className="text-sm font-medium text-gray-700 mb-2">{item.label}</p>

                                    {/* Description (hidden by default, shown on hover) */}
                                    <a href={item.link} className="absolute inset-0 bg-white bg-opacity-95 p-4 flex items-center justify-center text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-10 text-center">
                                        {item.desc}
                                    </a >
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default treatment
