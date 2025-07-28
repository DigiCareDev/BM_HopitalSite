
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Gynaecologistimmediately() {

    const signs = [
        {
            title: "Persistent or Unusual Pelvic Pain",
            author: "BM Hospital team",
            date: "June 15, 2025",
            symptoms: [
                "Chronic pelvic pain lasting more than a few days",
                "Sharp pain during intercourse",
                "Pain radiating to back or legs",
                "Pain interfering with daily activities"
            ],
            concerns:
                "Could indicate uterine fibroids, ovarian cysts, endometriosis, pelvic inflammatory disease, or gynecologic cancers."
        },
        {
            title: "Abnormal Vaginal Bleeding or Discharge",
            symptoms: [
                "Bleeding between periods",
                "Heavy periods requiring frequent changes",
                "Bleeding after menopause",
                "Unusual colored or foul-smelling discharge"
            ],
            concerns:
                "May signal infections, polyps, fibroids, hormonal imbalance, or gynecologic cancers."
        },
        {
            title: "Severe Menopausal Symptoms",
            symptoms: [
                "Intense hot flashes",
                "Severe night sweats",
                "Mood swings",
                "Persistent vaginal dryness",
                "Sleep disturbances"
            ],
            concerns:
                "Can be managed with HRT or alternatives; evaluation rules out other causes."
        },
        {
            title: "Pelvic Pressure, Bloating, or Bowel/Bladder Changes",
            symptoms: [
                "Persistent bloating or fullness",
                "Early satiety",
                "Frequent or urgent urination",
                "New/persistent bowel habit changes"
            ],
            concerns:
                "Could point to fibroids, ovarian cysts, or early-stage ovarian cancer."
        },
        {
            title: "Lumps, Bumps, or Persistent Genital Itching",
            symptoms: [
                "New lumps or sores",
                "Persistent itching or pain",
                "Discoloration or swelling"
            ],
            concerns:
                "May relate to STIs, cysts, benign growths, or precancerous conditions."
        }
    ];


    return (
        <div className='bg-white'>
            <Nav />
            <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                        5 Signs You Should See a Gynecologist Immediately
                    </h1>
                    <ul className="list-disc pl-6 mb-8 text-gray-700">
                    <li className="text-gray-700 mb-1 max-w-3xl">
                        At BM Hospital, we empower women to prioritize their health with comprehensive and compassionate gynecological care. Learn to recognize signs that should never be ignored.
                    </li>
                    <li className="text-gray-600 mb-1">June 15, 2025</li>
                    <li className="text-gray-600 mb-1">BM Hospital Team</li>
                    </ul>
                    <div className="grid gap-8 md:grid-cols-2">
                        {signs.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                    {index + 1}. {item.title}
                                </h3>
                                <p className="text-gray-700 mb-2 font-medium">What to look for:</p>
                                <ul className="list-disc list-inside text-gray-600 mb-2">
                                    {item.symptoms.map((s, i) => (
                                        <li key={i}>{s}</li>
                                    ))}
                                </ul>
                                <p className="text-gray-700 italic">
                                    <strong>Potential concerns:</strong> {item.concerns}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 bg-blue-100 p-8 rounded-lg text-center">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4">
                            Trust BM Hospital for Expert Gynecological Care
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                            From routine check-ups to specialized treatments, our experienced gynecologists provide comprehensive care tailored to your needs. Don’t wait—early intervention can Save Lives .
                        </p>
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition">
                            Book an Appointment Now
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Gynaecologistimmediately
