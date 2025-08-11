import { useState } from "react";
// ==============================================
import Cardiology from '@/assets/folderDepartments/Cardiology.svg';
import EmergencyMedicine from '@/assets/folderDepartments/EmergencyMedicine.svg';
import Orthopedics from '@/assets/folderDepartments/Orthopedics.svg'
import Gastroenterology from '@/assets/folderDepartments/Gastroenterology.svg';
import Gynaecology from '@/assets/folderDepartments/Gynaecology.svg';
import GeneralSurgery from '@/assets/folderDepartments/GeneralSurgery.svg'
import Neurology from '@/assets/folderDepartments/Neurology.svg';
import Respiratory from '@/assets/folderDepartments/Respiratory.svg';
// ======================================================
import CardiologyBanner from '@/assets/Specialities_Banner/Cardiology.webp';
import EmergencyMedicineBanner from '@/assets/Specialities_Banner/EmergencyMedicine.webp';
import OrthopedicsBanner from '@/assets/Specialities_Banner/Orthopedics.webp'
import GastroenterologyBanner from '@/assets/Specialities_Banner/Gastroenterology.webp';
import GynaecologyBanner from '@/assets/Specialities_Banner/Gynaecology.webp';
import GeneralSurgeryBanner from '@/assets/Specialities_Banner/GeneralSurgery.webp'
import NeurologyBanner from '@/assets/Specialities_Banner/Neurology.webp';
import RespiratoryBanner from '@/assets/Specialities_Banner/Respiratory.webp';

function Specialities({ translations }) {

    const [hoveredSpeciality, setHoveredSpeciality] = useState();

    const specialities = [
        {
            icon: Cardiology,
            backgroundImage: CardiologyBanner,
            link: '/departments',
            name: translations?.cardiology || 'हृदय रोग विशेषज्ञता',
            title: 'Advanced Cardiology Care at BM Hospital',
            description: `At BM Hospital, our Cardiology department offers comprehensive heart care using the latest technology and expertise. We specialize in diagnosing and treating Arrhythmia, Valvular disorders, Atrial Fibrillation, and Heart Failure. Our team performs advanced procedures like Angioplasty, Pacemaker implantation, and Cardiac Surgery with precision. We manage critical conditions such as Heart Attack, Aneurysm, Coronary Artery Disease, and even offer Heart Transplant services. With a strong focus on Cardiovascular health, we also provide Antiarrhythmic therapies to stabilize irregular heart rhythms. BM Hospital is committed to delivering world-class cardiology solutions with compassion and care, ensuring your heart beats stronger, longer.`
        },
        {
            icon: EmergencyMedicine,
            backgroundImage: EmergencyMedicineBanner,
            link: '/departments',
            name: translations?.emergency_medicine ||'आपातकालीन सेवाएं',
            title: '24/7 Expert Emergency Medicine Care at BM Hospital ',
            description: `BM Hospital’s Emergency Medicine department delivers rapid, life-saving care for critical conditions. Our fully equipped emergency department handles Trauma, Sepsis, Burns, Acute Coronary Syndrome, Poisoning, Stroke, and Seizure with precision and speed. We specialize in managing Cardiac Arrest, Acute Ischemic Stroke, Chest Pain, Difficulty Breathing, Severe Bleeding, and Loss of Consciousness. Supported by advanced resuscitation units, skilled emergency nursing, and 24/7 emergency medical services, our team ensures immediate attention. We also offer comprehensive pre-Hospital care to stabilize patients before arrival. BM Hospital is committed to excellence in Emergency Medicine, ensuring timely, expert care when every second counts.`
        },
        {
            icon: Orthopedics,
            backgroundImage: OrthopedicsBanner,
            link: '/departments',
            name: translations?.orthopedics || 'हड्डी रोग / अस्थिरोग विशेषज्ञता',
            title: 'Expert Orthopedics Care for Stronger Bones and Joints at BM Hospital ',
            description: `BM Hospital’s Orthopedics department offers advanced care for conditions affecting the musculoskeletal system, including bones, joints, ligaments, tendons, muscles, nerves, and cartilage. Our experienced orthopedic surgeons treat a wide range of issues like Arthritis, Osteoarthritis, Rheumatoid Arthritis, Fractures, Sprains, Strains, Stress Fractures, Shin Splints, Carpal Tunnel Syndrome, Rotator Cuff Injury, Bursitis, and Tendonitis. We utilize modern diagnostic tools like X-Ray and MRI (Magnetic Resonance Imaging) to ensure accurate treatment. From surgical interventions to conservative care like R.I.C.E. (Rest, Ice, Compression, Elevation), BM Hospital provides personalized, effective solutions to restore mobility and improve quality of life through world-class orthopedics services. `
        },
        {
            icon: Gastroenterology,
            backgroundImage: GastroenterologyBanner,
            link: '/departments',
            name: translations?.gastroenterology ||  'जठरांत्र / पाचन तंत्र रोग विशेषज्ञता',
            title: 'Comprehensive Gastroenterology Care at BM Hospital for Better Digestive Health ',
            description: `At BM Hospital, our Gastroenterology department provides expert diagnosis and treatment for a wide range of digestive conditions. We treat General Digestive Issues, Esophageal Disorders, Stomach Disorders, Small Intestine Disorders, and Large Intestine Disorders with precision and care. Our specialists are highly experienced in managing Liver Diseases, Gallbladder and Bile Duct Diseases, and Pancreatic Diseases using advanced tools like Endoscopy, Imaging, and Biopsy. With a patient-first approach, BM Hospital offers comprehensive Gastroenterology services tailored to individual needs, ensuring faster recovery and long-term wellness. Trust us for accurate diagnosis, compassionate care, and complete digestive system support under one roof. `
        },
        {
            icon: Gynaecology,
            backgroundImage: GynaecologyBanner,
            link: '/departments',
            name: translations?.gynecology || 'स्त्री रोग विशेषज्ञता',
            title: 'Expert Gynecology Care for Every Stage of a Woman’s Life at BM Hospital ',
            description: `BM Hospital’s Gynecology department provides comprehensive care for women’s reproductive health through every stage of life. Our experienced Gynecologists specialize in Obstetrics and Gynecology, addressing conditions related to the Uterus, Ovaries, Fallopian Tubes, Vagina, and Vulva. We treat Menopause, Infertility, Cervical Cancer, Endometriosis, Ovarian Cysts, Uterine Fibroids, Polycystic Ovary Syndrome (PCOS), Abnormal Uterine Bleeding, and Ectopic Pregnancy. We also focus on preventing and managing Sexually Transmitted Infections, including Human Papillomavirus (HPV). With advanced diagnostics, personalized treatment plans, and compassionate care, our Gynecology team ensures every woman receives safe, respectful, and effective care at BM Hospital. `
        },
        {
            icon: GeneralSurgery,
            backgroundImage: GeneralSurgeryBanner,
            link: '/departments',
            name: translations?.general_surgery || 'जनरल सर्जरी',
            title: 'Advanced General Surgery Services at BM Hospital for Safe and Precise Care ',
            description: `BM Hospital offers expert General Surgery services with a focus on safety, precision, and faster recovery. Our skilled surgeons manage conditions related to the Abdomen, Breast, Endocrine System, Skin and Soft Tissue, and Alimentary Tract. We perform procedures like Appendectomy, Cholecystectomy, Hernia Repair, Mastectomy, Thyroidectomy, Bowel Resection, Biopsy, Grafts, and advanced Wound Care. Our team is experienced in both Laparoscopic Surgery and Open Surgery, using Minimally Invasive Surgery techniques for reduced pain and quicker healing. We also offer Trauma Surgery, Critical Care, and follow ERAS (Enhanced Recovery After Surgery) protocols to ensure the best outcomes in General Surgery.`
        },
        {
            icon: Neurology,
            backgroundImage: NeurologyBanner,
            link: '/departments',
            name: translations?.neurology || 'तंत्रिका / नायु विशेषज्ञता',
            title: 'Comprehensive Neurology Care at BM Hospital for Brain and Nerve Health ',
            description: `BM Hospital’s Neurology department provides expert diagnosis and treatment for disorders of the Brain, Spinal Cord, and Peripheral Nerves. Our experienced neurologists specialize in managing complex conditions like Stroke, Multiple Sclerosis, Traumatic Brain Injury, Neuromuscular Disorders, Epileptic Seizures, Brain Tumors, and Spinal Muscular Atrophy. We also care for chronic neurological conditions such as Alzheimer's Disease, Parkinson's Disease, Dementia, Aphasia, and Autism. From persistent Headaches to advanced neurodegenerative disorders, we offer comprehensive care using the latest diagnostic tools and personalized treatment plans. BM Hospital is dedicated to delivering world-class Neurology services, ensuring every patient receives expert, compassionate care for a better quality of life. `
        },
        {
            icon: Respiratory,
            backgroundImage: RespiratoryBanner,
            link: '/departments',
            name: translations?.respiratory || 'श्वसन संबंधी / साँस विशेषज्ञता',
            title: 'Specialized Respiratory Care at BM Hospital for Healthy Breathing ',
            description: `BM Hospital’s Respiratory department provides expert care for disorders affecting the organs and processes of the respiratory system, including the lungs, airways, and breathing muscles. Our specialists diagnose and treat common diseases like asthma, COPD, bronchitis, pneumonia, and tuberculosis. We manage infections, breathing difficulties, and other conditions such as sleep apnea and interstitial lung disease. Using advanced diagnostic tools and treatment methods, we ensure accurate identification of respiratory terms and symptoms. From early detection to long-term care, BM Hospital’s respiratory services focus on restoring and maintaining optimal lung health, providing comprehensive support for every patient’s breathing and overall wellness. `
        },
    ];;


    return (
        <section className="bg-white py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">

                {/* Left Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-blue-900 border-b pb-2 mb-4">
                        {translations?.specialities || 'विशेषताएँ'}
                    </h2>

                    {/* Specialities Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-3 text-blue-900">
                        {specialities.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                onMouseEnter={() => setHoveredSpeciality(item)}
                                className="group flex items-center space-x-2 hover:text-blue-700 hover:bg-gray-100 transition-colors duration-200 rounded-lg hover:shadow px-1 cursor-pointer"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-10 h-10 shadow-lg rounded-full group-hover:border-[#80CAC7] dark:group-hover:border-[#80CAC7]"
                                />
                                <span className="font-bold text-blue-800 group-hover:text-[#80CAC7] dark:group-hover:text-[#80CAC7]">
                                    {item.name}
                                </span>
                            </a>

                        ))}
                    </div>

                    <div className="mt-6">
                        <a href="/departments" className="text-sm font-medium text-blue-800 hover:underline flex items-center space-x-1">
                            <span>{translations?.view_all || 'सभी देखें'}</span>
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[350px] lg:w-[400px] rounded-xl relative overflow-hidden bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${hoveredSpeciality?.backgroundImage || CardiologyBanner})`
                    }}
                >
                    {/* Optional Content Layer (uncomment if needed) */}
                    {/* 
                                <div className="relative z-10 p-4 rounded-xl shadow bg-white/70 backdrop-blur-md">
                                    <h3 className="text-[#80CAC7] text-lg sm:text-xl font-semibold border-b-2 border-blue-600 mb-2 px-2">
                                    {hoveredSpeciality?.title || 'Advanced Cardiology Care at BM Hospital'}
                                    </h3>
                                    <p className="text-blue-800 text-sm sm:text-base">
                                    {hoveredSpeciality?.description || '...'}
                                    </p>
                                </div> 
                 */}
                </div>


            </div>
        </section>

    )
}

export default Specialities
