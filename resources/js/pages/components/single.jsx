import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Single({ Job }) {
    const [resumeLabel, setResumeLabel] = useState("Upload Resume (.pdf/.doc)");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume') {
            const file = files[0];
            setFormData({ ...formData, resume: file });
            setResumeLabel(file?.name || "Upload Resume (.pdf/.doc)");
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        alert("Application submitted!");
        // Submit formData to backend
    };

    
    const Details = Job;
    
    console.log('job--------', Details)
    return (
        <>
            <Nav />
            <div className="bg-gray-50 py-10 px-2 md:px-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                    {/* LEFT: Job Description */}
                    <div className="lg:col-span-2 p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">{Details.position}</h2>
                        <p className="text-sm text-gray-500 mb-6">
                            {Details.location} &bull; {Details.jobType}
                        </p>

                        <div className="space-y-8 text-gray-700 leading-relaxed">
                            <section>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 border-b border-blue-200 pb-1">
                                    Job Summary
                                </h3>
                                <p>{Details.jobSummary}</p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 border-b border-blue-200 pb-1">
                                    Key Responsibilities
                                </h3>
                                <ul className="list-disc list-inside">
                                    {Details.keyResponsibilities.map((item, idx) => (
                                        <li key={idx} className='text-sm'>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 border-b border-blue-200 pb-1">
                                    Required Skills & Competencies
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {Details.requiredSkillsCompetencies.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            {Details.preferred && Details.preferred.length > 0 && (
                                <section>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900 border-b border-blue-200 pb-1">
                                        Preferred Qualifications
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {Details.preferred.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>
                    </div>




                    {/* RIGHT: Apply Form */}
                    <div className=" p-2 h-fit text-blue-800">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">Apply Now</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border-b px-4 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border-b px-4 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full border-b px-4 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-600"
                            />
                            <label className="block text-sm font-medium text-gray-600 mb-1">{resumeLabel}</label>
                            <label
                                className="bg-white text-slate-500 font-semibold text-base rounded max-w-md h-22 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-3 fill-gray-500 ">
                                    <path
                                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                        data-original="#000000" />
                                    <path
                                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                        data-original="#000000" />
                                </svg>
                                Upload file

                                <input
                                    type="file"
                                    id='uploadFile1'
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleChange}
                                    required
                                    className="hidden w-full border-b px-4 py-2 rounded shadow-sm" />
                                <p className="text-xs font-medium text-slate-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                            </label>
                            {/* <input
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleChange}
                                required
                                className="w-full border-b px-4 py-2 rounded shadow-sm"
                            /> */}
                            <textarea
                                name="message"
                                placeholder="Your Message / Cover Letter"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border-b px-4 py-2 rounded shadow-sm"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-700 text-white w-full py-3 rounded font-semibold hover:bg-blue-800 transition"
                            >
                                Submit Application
                            </button>

                            {submitted && (
                                <p className="text-green-600 text-sm mt-3">
                                    ✅ Your application was submitted successfully.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
