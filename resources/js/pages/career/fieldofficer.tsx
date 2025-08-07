import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CareerDetails from '../components/CareerDetails';

export default function Fieldofficer() {

    const Details = {
        "position": "Field Officer",
        "qualification": "BBA / MBA (Preferred in Healthcare Management, Marketing, or Operations)",
        "experience": "8 to 10 Years (Experience in Hospital or Healthcare Sector)",
        "jobType": "Full-Time",
        "location": "Barabanki, U.P",
        "jobSummary": "We are looking for a dynamic and experienced Field Officer to manage and coordinate field operations, build strong relationships with healthcare partners, and support the Hospital’s outreach, marketing, and service delivery initiatives. The ideal candidate will have 8–10 years of relevant experience in Hospital operations or healthcare marketing and a strong ability to work independently in a fast-paced environment.",
        "keyResponsibilities": [
            "Coordinate and supervise outreach programs, medical camps, and patient referral activities.",
            "Develop and maintain relationships with doctors, clinics, corporates, and other healthcare stakeholders.",
            "Promote Hospital services to the target audience and generate patient leads.",
            "Conduct field visits for business development, patient feedback, and community engagement.",
            "Monitor competitor activities and provide market intelligence for strategic planning.",
            "Ensure smooth coordination between field activities and Hospital departments.",
            "Prepare and present regular reports on outreach activities, lead conversions, and field operations.",
            "Support the Hospital in branding, visibility, and patient relationship management efforts.",
            "Identify opportunities for growth and partnership in the healthcare ecosystem."
        ],
        "requiredSkillsCompetencies": [
            "Strong communication and interpersonal skills.",
            "Ability to network effectively within the healthcare community.",
            "Strong analytical, reporting, and organizational capabilities.",
            "High level of initiative and a results-driven approach.",
            "Knowledge of Hospital services and patient care processes.",
            "Proficiency in MS Office and CRM tools."
        ],
        "preferred": [
            "Prior experience in Hospital business development or healthcare outreach.",
            "Familiarity with local geography and healthcare network.",
            "Willingness to travel extensively for field assignments."
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
