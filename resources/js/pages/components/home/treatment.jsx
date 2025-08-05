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
            desc: translations?.anemia_treatment_title || 'बीएम अस्पताल ऊर्जा बहाल करने, स्वास्थ्य में सुधार करने और जटिलताओं को रोकने के लिए विशेषज्ञ एनीमिया उपचार प्रदान करता है।',
        },
        {
            id: 3,
            label: translations?.asthma_and_bronchitis_treatment || 'अस्थमा और ब्रोंकाइटिस उपचार',
            link: '/treatment',
            icon: AsthmaandBronchitis,
            desc: translations?.asthma_and_bronchitis_treatment_title || 'बीएम अस्पताल अस्थमा और ब्रोंकाइटिस के लिए उन्नत उपचार और व्यक्तिगत सहायता के साथ विशेषज्ञ देखभाल प्रदान करता है।',
        },
        {
            id: 4,
            label: translations?.cold_cough_fever_and_pain_relief || 'सर्दी, खांसी और फ्लू उपचार',
            link: '/treatment',
            icon: ColdCoughandFlu,
            desc: translations?.cold_cough_fever_and_pain_relief_title || 'बीएम अस्पताल विशेषज्ञ देखभाल और 24/7 चिकित्सा सहायता के साथ प्रभावी सर्दी, खांसी और फ्लू का उपचार प्रदान करता है।',
        },
        {
            id: 5,
            label: translations?.cholesterol_diabetes_and_hypertension_care || 'कोलेस्ट्रॉल और लिपिड विकार उपचार',
            link: '/treatment',
            icon: CholesterolandLipid,
            desc: translations?.cholesterol_diabetes_and_hypertension_care_title || 'बीएम अस्पताल उन्नत उपचार और निदान के साथ कोलेस्ट्रॉल और लिपिड विकारों के लिए विशेषज्ञ देखभाल प्रदान करता है।',
        },
        {
            id: 6,
            label: translations?.dehydration_and_iv_fluids || 'डिहाइड्रेशन और IV तरल पदार्थ',
            link: '/treatment',
            icon: DehydrationandIVFluids,
            desc: translations?.dehydration_and_iv_fluids_title ||  'बीएम अस्पताल संतुलन बहाल करने और शीघ्र स्वास्थ्य लाभ सुनिश्चित करने के लिए IV तरल पदार्थ के साथ त्वरित निर्जलीकरण देखभाल प्रदान करता है।',
        },
        {
            id: 7,
            label: translations?.diabetes_treatment || 'मधुमेह (डायबिटीज) उपचार',
            link: '/treatment',
            icon: DiabetesManagement,
            desc: translations?.diabetes_treatment_title ||'बीएम अस्पताल व्यक्तिगत उपचार योजनाओं और उन्नत निगरानी के साथ विशेषज्ञ मधुमेह देखभाल प्रदान करता है।',
        },
        {
            id: 8,
            label: translations?.fever_treatment || 'बुखार उपचार',
            link: '/treatment',
            icon: FeverManagement,
            desc: translations?.fever_treatment_title || 'बीएम अस्पताल विशेषज्ञ डॉक्टरों और 24/7 देखभाल के साथ सटीक बुखार निदान और प्रभावी उपचार प्रदान करता है।',
        },
         {
            id: 10,
            label: translations?.allergy_treatment || 'एलर्जी उपचार',
            link: '/treatment',
            icon: AllergyTreatment,
            des: translations?.allergy_treatment_title ||  'बीएम अस्पताल में एलर्जी से राहत के लिए विशेषज्ञ देखभाल—आज ही व्यक्तिगत उपचार के साथ बेहतर सांस लें।',
        },
        {
            id: 11,
            label: translations?.gastrointestinal_treatment || 'जठरांत्र(गैस्ट्रोइंटेस्टाइनल) उपचार',
            link: '/treatment',
            icon: GastrointestinalTreatment,
            desc: translations?.gastrointestinal_treatment_title || 'बीएम अस्पताल उन्नत गैस्ट्रोइंटेस्टाइनल उपचार के साथ एसिडिटी, कब्ज, दस्त के लिए विशेषज्ञ देखभाल प्रदान करता है।',
        },
        {
            id: 12,
            label: translations?.general_health_checkups || 'सामान्य स्वास्थ्य जांच',
            link: '/treatment',
            icon: GeneralHealth,
            desc: translations?.general_health_checkups_title || 'बीएम अस्पताल शीघ्र पहचान और निवारक देखभाल के लिए व्यापक सामान्य स्वास्थ्य जांच प्रदान करता है।',
        },
        {
            id: 13,
            label: translations?.hypertension_high_blood_pressure_treatment || 'हाइपरटेंशन (उच्च रक्तचाप) उपचार',
            link: '/treatment',
            icon: Hypertension,
            desc: translations?.hypertension_high_blood_pressure_treatment_title ||  'बीएम अस्पताल सटीक निदान और व्यक्तिगत उपचार के साथ उच्च रक्तचाप के लिए विशेषज्ञ देखभाल प्रदान करता है।',
        },
        {
            id: 14,
            label: translations?.immunizations_and_vaccinations || 'टीकाकरण और वैक्सीनेशन',
            link: '/treatment',
            icon: ImmunizationsandVaccinations,
            desc: translations?.immunizations_and_vaccinations_title ||  'बीएम अस्पताल आपके स्वास्थ्य की रक्षा के लिए सभी उम्र के लोगों के लिए आवश्यक टीकाकरण और टीकाकरण प्रदान करता है।',
        },
        {
            id: 15,
            label: translations?.minor_injury_care || 'मामूली चोटों की देखभाल (काटने, जलने, मोच आने पर)',
            link: '/treatment',
            icon: MinorInjuryCare,
            desc: translations?.minor_injury_care_title ||  'बीएम अस्पताल कटने, जलने और मोच जैसी छोटी चोटों के लिए विशेषज्ञ ध्यान के साथ त्वरित देखभाल प्रदान करता है।',

        },
        {
            id: 16,
            label: translations?.nutritional_counseling || 'पोषण संबंधी परामर्श',
            icon: NutritionalCounseling,
            link: '/treatment',
            desc: translations?.nutritional_counseling_title || 'बीएम अस्पताल स्वस्थ आहार, स्वास्थ्य और रोग निवारण के लिए विशेषज्ञ पोषण परामर्श प्रदान करता है।',
        },
        {
            id: 17,
            label: translations?.pain_management || 'दर्द उपचार',
            icon: PainManagement,
            link: '/treatment',
            desc: translations?.pain_management_title ||'बीएम अस्पताल सिरदर्द, शरीर दर्द और माइग्रेन के लिए स्थायी राहत के साथ विशेषज्ञ दर्द उपचार प्रदान करता है।',
        },
        {
            id: 18,
            label: "More Treatment →",
            link: '/treatment',
            icon: "https://static.vecteezy.com/system/resources/previews/020/291/170/non_2x/see-more-icon-see-more-typography-logo-vector.jpg",
            desc: translations?.more_treatment_title || 'अधिक उपचारों के बारे में पढ़ें →',
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
