import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const childhoodIllnesses = [
  {
    title: "Common Cold and Flu",
    summary:
      "These are distinct respiratory viral infections that frequently affect children. The flu typically presents with more intense symptoms.",
    symptoms:
      "Runny or stuffy nose, sneezing, cough, sore throat, fever, body aches, fatigue.",
    doctorVisit:
      "High fever, difficulty breathing, persistent cough, unusual lethargy."
  },
  {
    title: "Ear Infections",
    summary:
      "Often a complication of a cold, ear infections occur when bacteria or viruses infect the middle ear.",
    symptoms:
      "Ear pain, pulling at the ear, fever, irritability, difficulty sleeping, reduced hearing.",
    doctorVisit:
      "Persistent ear pain, fever, fluid draining from the ear."
  },
  {
    title: "Bronchitis and Bronchiolitis",
    summary:
      "Infections of the lower respiratory tract common in infants and young children.",
    symptoms:
      "Persistent cough, shortness of breath, fast or labored breathing, wheezing, fever.",
    doctorVisit:
      "Fast breathing, blue tinge to lips, signs of dehydration."
  },
  {
    title: "Hand-Foot-and-Mouth Disease",
    summary:
      "A contagious viral illness marked by small mouth ulcers and rash on hands and feet.",
    symptoms:
      "Fever, sore throat, painful mouth sores, rash on palms, soles, and buttocks.",
    doctorVisit:
      "High fever, severe mouth pain, signs of dehydration."
  },
  {
    title: "Gastroenteritis (Stomach Flu)",
    summary:
      "Irritation of the stomach and intestines causing nausea and loose stools.",
    symptoms:
      "Nausea, vomiting, diarrhea, cramps, mild fever.",
    doctorVisit:
      "Severe dehydration, blood in stool, persistent fever, abdominal pain."
  },
  {
    title: "Chickenpox (Varicella)",
    summary:
      "A highly contagious viral infection causing an itchy rash and blisters.",
    symptoms:
      "Red itchy rash, mild fever, tiredness, reduced appetite.",
    doctorVisit:
      "Rash near eyes, severe pain, signs of infection around blisters."
  },
  {
    title: "Asthma",
    summary:
      "A chronic lung condition causing inflammation and narrowing of the airways.",
    symptoms:
      "Frequent coughing, wheezing, shortness of breath, chest tightness.",
    doctorVisit:
      "Severe wheezing, blue lips, difficulty speaking."
  },
  {
    title: "Eczema (Atopic Dermatitis)",
    summary:
      "A skin condition marked by redness, dryness, and intense itching.",
    symptoms:
      "Dry, red, itchy patches, rough or oozing skin.",
    doctorVisit:
      "Severe itching, signs of infection, spreading rash."
  },
  {
    title: "Allergic Rhinitis (Hay Fever)",
    summary:
      "An allergic reaction to airborne allergens like pollen or dust.",
    symptoms:
      "Sneezing, runny nose, itchy eyes, watery eyes.",
    doctorVisit:
      "Difficulty breathing, recurring sinus infections."
  },
  {
    title: "Skin Infections",
    summary:
      "Common in children due to cuts, scrapes, or insect bites.",
    symptoms:
      "Redness, swelling, rash, pus, blistering.",
    doctorVisit:
      "Fever, spreading redness, severe pain, limited movement."
  }
];

export default function ChildhoodIllnesses() {
  return (
    <div className="bg-white">
    <Nav/>
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
        Top 10 Common Childhood illnesses Every Parent Should Know
      </h1>
    <ul>
      <li className="text-gray-600 mb-1">Essential guidance from BM Hospital’s pediatric team for informed, confident care.</li>
      <li className="text-gray-600 mb-1"> BM Hospital Team </li>
      <li className="text-gray-600 mb-1">June 15, 2025</li>
    </ul>

      <div className="grid md:grid-cols-2 gap-8">
        {childhoodIllnesses.map((illness, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              {index + 1}. {illness.title}
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Overview:</strong> {illness.summary}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Symptoms:</strong> {illness.symptoms}
            </p>
            <p className="text-gray-700">
              <strong>When to see a doctor:</strong> {illness.doctorVisit}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">
          Visit BM Hospital's Pediatric Department
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our pediatric OPD is designed for convenience and expert care. We offer timely
          consultations, emergency services, and support for early detection and high-quality
          treatment. Your child’s health is our highest priority.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
