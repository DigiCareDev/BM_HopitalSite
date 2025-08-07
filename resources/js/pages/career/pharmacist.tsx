import React, { useState } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CareerDetails from '../components/CareerDetails';


function Pharmacist() {

    const Details = {
        "position": "Pharmacist",
        "qualification": "Diploma in Pharmacy from an accredited institution.",
        "experience": "2 to 3 Years (Hospital Experience)",
        "jobType": "Full-Time",
        "location": "Barabanki (U.P)",
        "jobSummary": "We are seeking a licensed and detail-oriented Pharmacist to join our team. The Pharmacist will be responsible for dispensing medications, providing pharmaceutical care, ensuring accurate prescription fulfillment, and advising patients on the safe and effective use of medications.",
        "keyResponsibilities": [
            "Review and interpret physician prescriptions for accuracy, dosage, and possible drug interactions.",
            "Dispense prescription and over-the-counter medications in accordance with legal and professional standards.",
            "Provide counseling and education to patients on medication usage, side effects, interactions, and storage.",
            "Ensure proper storage, handling, and disposal of pharmaceutical products.",
            "Monitor patient medication therapies to improve outcomes and prevent adverse drug reactions.",
            "Collaborate with healthcare professionals to optimize patient care.",
            "Maintain accurate patient records, inventory, and reports.",
            "Comply with all regulatory and safety standards (e.g., HIPAA, FDA, DEA, local regulations).",
            "Stay updated on new drug therapies, research, and developments in the pharmaceutical field."
        ],
        "requiredSkillsCompetencies": [
            "Valid and current pharmacy license in U.P.",
            "Proven experience as a pharmacist (e.g., retail, Hospital, or clinical).",
            "In-depth knowledge of pharmacology, pharmaceutical law, and ethics.",
            "Excellent communication and interpersonal skills.",
            "Strong attention to detail and accuracy."
        ],
        "preferred": [
            "Experience with pharmacy software.",
            "Ability to work in a fast-paced, multi-disciplinary environment."
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

export default Pharmacist
