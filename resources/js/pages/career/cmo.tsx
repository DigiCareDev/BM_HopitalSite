import React, { useState } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CareerDetails from '../components/CareerDetails';


function Cmo() {

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
            <Nav />
            <CareerDetails Details={Details} />
            <Footer />
        </div>
    )
}

export default Cmo
