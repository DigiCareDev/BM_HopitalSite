import React, { useState } from 'react'
import Footer from '../components/Footer';
import CareerDetails from '../components/CareerDetails';
import Subnav from '../components/subnav';
import Navbar from '../components/home/navbar';
import Logo from '../../assets/images/logo.jpg'
import { RiXingLine } from 'react-icons/ri';
import JobForm from '../components/form/jobForm';

function Cmo({ job }) {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    console.log('job==', job)

    const Details = {
        position: "Chief Medical Officer (CMO)",
        qualification: "MBBS / MD / MS",
        experience: "Minimum 15-20 years of clinical experience with at least 5 years in a leadership or administrative role.",
        jobType: "Full-Time",
        location: "Barabanki (U.P)",
        jobSummary: "We are seeking a highly experienced and visionary Chief Medical Officer (CMO) to lead our Hospital's medical operations. The CMO will play a pivotal role in ensuring the highest standards of patient care, clinical excellence, and regulatory compliance across all departments. The ideal candidate will bring over three decades of Hospital experience, exceptional leadership capabilities, and deep clinical expertise to drive continuous improvement in medical services.",
        keyResponsibilities: [
            "Provide strategic leadership to all clinical departments, ensuring high-quality, patient-centered care.",
            "Oversee clinical governance, quality assurance, and adherence to medical protocols and regulatory standards.",
            "Collaborate with the executive team in setting strategic goals and implementing Hospital-wide initiatives.",
            "Supervise and support physicians, surgeons, and healthcare teams to maintain clinical excellence.",
            "Lead recruitment, training, and performance evaluation of senior medical staff.",
            "Act as a liaison between medical staff and Hospital management to address concerns and align objectives.",
            "Monitor and improve patient safety, clinical outcomes, and service delivery.",
            "Develop and enforce policies on medical ethics, patient rights, and professional conduct.",
            "Stay updated with advances in medical science, technologies, and regulatory frameworks.",
            "Represent the Hospital in professional, governmental, and accreditation bodies."
        ],
        requiredSkillsCompetencies: [
            "Strong leadership and organizational management skills.",
            "Deep clinical knowledge and multidisciplinary understanding.",
            "Excellent communication, interpersonal, and conflict-resolution abilities.",
            "High integrity, professional ethics, and decision-making skills.",
            "Proven track record in Hospital administration and clinical leadership."
        ],
        preferred: [
            "Experience in NABH/JCI-accredited Hospitals.",
            "Additional training or certification in Healthcare Administration or Hospital Management.",
            "Exposure to digital health technologies and EMR/HIS systems."
        ]
    };

    return (
        <div>
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />
            {/* <CareerDetails Details={job} /> */}

            <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                    {/* Left Column - Job Details */}
                    <div className="w-full lg:w-2/3">
                        <div className=" p-6 mb-10 bg-white rounded-lg shadow-md">
                            <h1 className="text-4xl font-bold text-blue-900 mb-2">{job.title}</h1>
                            <p className="text-sm text-gray-500">
                                {job.location} | {job.job_type}
                            </p>


                            <div className=" pt-5 leading-relaxed text-gray-700">
                                <h2 className="text-xl font-semibold mb-4 text-blue-700">Job Description</h2>
                                <p>{job.description}</p>

                                {job.requirements && (
                                    <>
                                        <h2 className="text-xl font-semibold mt-8 mb-4 text-blue-700">Requirements</h2>
                                        <div
                                            className="prose max-w-none"
                                            dangerouslySetInnerHTML={{ __html: job.requirements }}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Application Form */}
                    <div className="w-full lg:w-1/3 ">
                        <h1 className='text-xl font-bold text-blue-800 mb-5'>Fill this form</h1>
                        <JobForm />
                    </div>
                </div>
            </div>


            <Footer translations={translations} />
        </div>
    )
}

export default Cmo
