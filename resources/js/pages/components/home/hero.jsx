import React from 'react';
import AboutHeader from '@/assets/images/aboutHeader.jpg';

function Hero({ translations }) {
  return (
    <div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                    <section className="flex flex-col lg:flex-row items-center gap-3">
                        <div className="flex-1">

                            <h2 className="text-xl font-extrabold text-blue-800  sm:text-xl sm:leading-none md:text-4xl mt-5">
                             {translations?.heading ?? 'Trusted Healthcare, Tailored with Compassion and Expertise'}   
                            </h2>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                                  {translations?.heading2 ?? 'At BM Hospital, our patient-first approach ensures that every individual receives personalised and compassionate care. Our team of super specialist doctors collaborate seamlessly to deliver the most effective and tailored treatments. Guided by our core philosophy – "Every Life is Invaluable" – we are committed to excellence in healthcare, combining advanced technology, world-class infrastructure, skilled professionals, and heartfelt service. From diagnosis to recovery, we prioritise safety, comfort, and well-being—making BM Hospital a trusted name in healing and hope across Barabanki and beyond.'}   
                            </p>
                        </div>
                        <div className="flex-1 mt-10">
                            <img
                                src={AboutHeader}
                                alt="BM hopital about"
                                className="rounded-3xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </section>
                </div>
    </div>
  )
}

export default Hero
