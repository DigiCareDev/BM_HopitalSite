import React, { useState } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CareerDetails from '../components/CareerDetails';


function ResidentDoctors() {

    const Details = {
        "position": "Resident Doctors",
        "qualification": "BAMS/MBBS",
        "experience": "Minimum 7 - 10 Years (Hospital Experience)",
        "jobType": "Full-Time | Rotational Shifts (Day & Night)",
        "location": "Barabanki (U.P)",
        "numberOfOpenings": 4,
        "jobSummary": "We are seeking skilled and experienced Resident Doctors with a MBBS/BAMS qualification to join our Hospital's medical team. The candidate must have at least 7-10 years of hands-on Hospital experience and be comfortable working in both day and night shifts. The role involves managing patient care, supporting emergency cases, and ensuring consistent monitoring and documentation.",
        "keyResponsibilities": [
            "Provide clinical care to patients during assigned shifts (day or night).",
            "Monitor patient vitals, administer prescribed treatments, and respond to emergencies.",
            "Coordinate with senior doctors, nurses, and paramedical staff for effective patient care.",
            "Maintain accurate medical records and update case notes regularly.",
            "Assist in emergency procedures, OPD/IPD management, and patient admissions/discharges.",
            "Ensure proper handover during shift changes.",
            "Follow Hospital protocols, ethical standards, and documentation guidelines."
        ],
        "requiredSkillsCompetencies": [
            "In-depth knowledge of medical practices.",
            "Clinical decision-making and emergency response skills.",
            "Good communication and interpersonal abilities.",
            "Strong patient management and documentation skills.",
            "Ability to work in a rotational shift environment."
        ],
        "preferred": [
            "Prior experience in a Multi-Speciality Hospital.",
            "Familiarity with Electronic Medical Records (EMR) systems."
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

export default ResidentDoctors
