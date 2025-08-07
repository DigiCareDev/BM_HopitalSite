import React, { useState } from 'react'
import Footer from '../components/Footer';
import CareerDetails from '../components/CareerDetails';
import Subnav from '../components/subnav';
import Navbar from '../components/home/navbar';
import Logo from '../../assets/images/logo.jpg'
import { RiXingLine } from 'react-icons/ri';
import JobForm from '../components/form/jobForm';

function Cmo({ job }) {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    // console.log('job==', job)

    return (
        <div>
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />
            {/* <CareerDetails Details={job} /> */}

            <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                    {/* Left Column - Job Details */}
                    <div className="w-full lg:w-2/3">
                        <div className=" p-6 mb-10 bg-white rounded-lg shadow-md">
                            <h1 className="text-4xl font-bold text-blue-900 mb-2">{job.title}</h1>
                            <p className="text-sm text-gray-500">
                                {job.location} | {job.job_type}
                            </p>


                            <div className=" pt-5 leading-relaxed text-gray-700">
                                <h2 className="text-xl font-semibold mb-4 text-blue-700">Job Description</h2>
                                <p>{job.description}</p>

                                {job.requirements && (
                                    <>
                                        <h2 className="text-xl font-semibold mt-8 mb-4 text-blue-700">Requirements</h2>
                                        <div
                                            className="prose max-w-none"
                                            dangerouslySetInnerHTML={{ __html: job.requirements }}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Application Form */}
                    <div className="w-full lg:w-1/3 ">
                        <h1 className='text-xl font-bold text-blue-800 mb-5'>Fill this form</h1>
                        <JobForm />
                    </div>
                </div>
            </div>


            <Footer translations={translations} />
        </div>
    )
}

export default Cmo
