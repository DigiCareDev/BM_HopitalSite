import React from 'react'
import JobForm from './form/jobForm'

function CareerDetails({Details}) {

    return (
        <div>
            <div className="bg-gray-50 py-10 px-4 md:px-2">
                <div className="px-4 md:px-12 lg:px-20">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5">
                        {/* LEFT: Job Description */}
                        <div className="w-full lg:w-1/1 p-3 bg-white rounded-lg shadow-md">
                            <h2 className="text-3xl font-bold text-blue-800 mb-4">{Details.position}</h2>
                            <p className="text-sm text-gray-500 mb-6">{Details.location} &bull; {Details.jobType}</p>

                            <div className="space-y-5 text-gray-700 leading-relaxed">
                                <section>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-900 border-b border-blue-200 pb-1">Job Summary</h3>
                                    <p>{Details.jobSummary}</p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-900 border-b border-blue-200 pb-1">Key Responsibilities</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {Details.keyResponsibilities.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-900 border-b border-blue-200 pb-1">Required Skills & Competencies</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {Details.requiredSkillsCompetencies.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </section>

                                {Details.preferred?.length > 0 && (
                                    <section>
                                        <h3 className="text-xl font-semibold mb-3 text-blue-900 border-b border-blue-200 pb-1">Preferred Qualifications</h3>
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
                        <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-md h-fit text-blue-800">
                            <h3 className="text-2xl font-bold mb-4">Apply Now</h3>
                           <JobForm/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CareerDetails
