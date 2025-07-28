import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Entproblems() {
    return (
        <div className='bg-white'>
            <Nav />
            <div className='py-10'>
                <div className="max-w-7xl mx-auto mb-10">
                    <h1 className="text-4xl font-bold text-blue-900 mb-2">Understanding Common ENT Problems: When to See a Specialist</h1>
                    <ul>
                    <li className=" text-gray-500">Your Guide from BM Hospital</li>
                        <li className="text-gray-600 mb-1">June 15, 2025</li>
                    <li className="text-gray-600 mb-1">BM Hospital Team</li>
                    </ul>
                </div>

                <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md leading-relaxed text-gray-700">
                    <section className="py-4 px-4 sm:px-2 space-y-4">
                        <p>
                            Our senses of hearing, smell, taste, and balance play a crucial role in our daily lives. At <strong>BM Hospital</strong>, our dedicated ENT specialists diagnose and treat a wide range of conditions to restore comfort and function.
                        </p>
                        <p>
                            Here's a look at common ENT problems and when to seek a specialist’s care:
                        </p>
                    </section>

                    {/* EAR ISSUES */}
                    <section className="bg-blue-50 py-12 px-4 sm:px-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">1. Persistent Ear Issues</h2>
                        <div className="space-y-4">
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Ear Infections (Otitis Media/Externa):</strong> Recurring or unresponsive infections need ENT evaluation.</li>
                                <li><strong>Swimmer’s Ear:</strong> Persistent pain post-swimming requires targeted care.</li>
                                <li><strong>Hearing Loss:</strong> Sudden or gradual hearing loss must be assessed by a specialist.</li>
                                <li><strong>Tinnitus:</strong> Ringing or buzzing in ears warrants further investigation.</li>
                                <li><strong>Vertigo:</strong> Dizziness or spinning sensations may point to inner ear issues.</li>
                                <li><strong>Cholesteatoma:</strong> Chronic ear drainage or hearing loss could indicate this serious middle ear condition.</li>
                            </ul>
                        </div>
                    </section>

                    {/* NOSE & SINUS */}
                    <section className="py-12 px-4 sm:px-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">2. Chronic Nose and Sinus Complaints</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Sinus Problems:</strong> Persistent congestion, pressure, or infections suggest chronic sinusitis.</li>
                            <li><strong>Nosebleeds:</strong> Frequent or severe nosebleeds may require specialist intervention.</li>
                            <li><strong>Allergies:</strong> ENT support for persistent allergic rhinitis beyond OTC medications.</li>
                        </ul>
                    </section>

                    {/* THROAT ISSUES */}
                    <section className="bg-blue-50 py-12 px-4 sm:px-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">3. Throat and Voice Concerns</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Hoarseness:</strong> Persistent hoarseness beyond 2 weeks needs ENT evaluation.</li>
                            <li><strong>Dysphagia:</strong> Frequent trouble swallowing or food getting stuck requires further tests.</li>
                            <li><strong>Tonsils & Adenoids:</strong> Recurring sore throats or snoring in children might need surgery.</li>
                            <li><strong>LPR (Gastric Reflux):</strong> Throat symptoms due to reflux are manageable with ENT care.</li>
                        </ul>
                    </section>

                    {/* SLEEP DISORDERS */}
                    <section className="py-12 px-4 sm:px-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">4. Sleep-Related Breathing Disorders</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Snoring:</strong> Chronic snoring, especially with gasping, could indicate sleep apnea.</li>
                            <li><strong>Sleep Apnea:</strong> ENT can assess and treat this serious condition to improve health outcomes.</li>
                        </ul>
                    </section>

                    {/* CALL TO ACTION */}
                    <section className="bg-blue-100 py-16 px-4 sm:px-6 text-center">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">When to Consult BM Hospital’s ENT Specialists</h2>
                        <p className="text-lg mb-4">
                            Our ENT department provides expert diagnosis and treatment using the latest technology. Don’t let chronic discomfort affect your life — timely care makes all the difference.
                        </p>
                        <p className="text-lg text-blue-800 font-semibold">
                            Call us today to book your consultation with our expert ENT team.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Entproblems
