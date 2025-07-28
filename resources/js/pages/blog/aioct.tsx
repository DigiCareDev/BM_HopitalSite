import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Single from '../components/blog-single';

function Aioct() {

  const blogData = {
    title: "AI-OCT and Precision Angioplasty: Revolutionizing Heart Care in",
    author: "BM Hospital team",
    date: "June 15, 2025",
    intro: [
      "At BM Hospital, we’re proud to bring cutting-edge AI-powered technologies like Optical Coherence Tomography (OCT) into our cardiac care approach. In collaboration with leaders like SGPGI Barabanki, we deliver unprecedented diagnostic precision and treatment accuracy.",
      "AI-OCT transforms traditional angioplasty by providing high-resolution, real-time 3D imaging of arterial blockages, enabling personalized and highly effective interventions."
    ],
    features: {
      title: "Why AI-OCT Makes a Difference",
      style: "blue",
      items: [
        {
          title: "Microscopic Precision",
          text: "Visualize plaque structure and composition using near-infrared light in stunning detail."
        },
        {
          title: "Tailored Interventions",
          text: "Precisely size and place stents based on individual artery characteristics."
        },
        {
          title: "Enhanced Deployment",
          text: "AI algorithms ensure optimal stent expansion and positioning during the procedure."
        },
        {
          title: "Timely Diagnosis",
          text: "Early, accurate insights into coronary conditions common in young Indian patients."
        }
      ]
    },
    outcomes: {
      title: "Proven Impact on Patient Outcomes",
      content: [
        "With AI-OCT, cardiologists gain deeper insights and better control during procedures, translating into fewer re-interventions, better stent longevity, and improved long-term patient health."
      ],
      bullets: [
        "Reduced chance of restenosis (artery re-narrowing)",
        "Intra-procedural adjustments powered by real-time AI data",
        "Faster recovery and fewer Hospital readmissions"
      ]
    },
    commitment: {
      title: "BM Hospital: Your Partner in Heart Health",
      style: "highlight",
      items: [
        {
          title: "Specialist OPD Access",
          text: "Easily connect with expert cardiologists via a streamlined outpatient department."
        },
        {
          title: "Modern Infrastructure",
          text: "Regular upgrades in diagnostic and surgical tech to deliver world-class care."
        },
        {
          title: "24/7 Emergency Readiness",
          text: "A fully equipped trauma center ensures we’re ready when seconds count."
        }
      ]
    }
  };



  return (
    <div>
      <Nav />
      <Single blogData={blogData} />
      <Footer />
    </div>
  )
}

export default Aioct;
