import React from 'react';
import Logo from '@/assets/images/logo.jpg';


function Treatment({ TreatmentData }) {

    const data = TreatmentData[0];

    // console.log('TreatmentData', data)
    return (
        <>
            <div className='bg-white'>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="py-16 flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">{data.hero.heading || 'BM Hospital'}</h1>
                            <p className="text-gray-700 text-lg leading-relaxed">    {data.hero.paragraph || 'At BM Hospital, our patient-first approach ensures that every individual receives personalised and compassionate care. Our team of super specialist doctors collaborate seamlessly to deliver the most effective and tailored treatments. Guided by our core philosophy Every Life is Invaluable we are committed to excellence in healthcare, combining advanced technology, world infrastructure, skilled professionals, and heartfelt service. From diagnosis to recovery, we prioritise safety, comfort, and well-being—making BM Hospital a trusted name in healing and hope across Barabanki and beyond'}</p>
                        </div>
                        <div className="flex-1">
                            <img
                                src={data.hero.image}
                                alt={data.hero.alt}
                                className="rounded-3xl w-full object-cover"
                            />
                        </div>
                    </section>
                </div>
                
                <section className="bg-white py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Hero */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-blue-900 mb-4">{data.ambulance_services.title}</h2>
                            <p className="text-lg text-gray-600">
                                {data.ambulance_services.description}
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.ambulance_services.services.map(({ title, desc, icon }, i) => (
                                <div
                                    key={i}
                                    className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
                                >
                                    {/* <div className="text-4xl mb-4">{icon}</div> */}
                                    <img src={icon} alt={title} className="h-10 my-2" />
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
                                    <p className="text-gray-600">{desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-16">
                            <a
                                href={data.ambulance_services.cta.link}
                                className="inline-block bg-blue-800 text-white text-lg font-medium px-6 py-3 rounded-md hover:bg-blue-900 transition"
                            >
                                {data.ambulance_services.cta.label}
                            </a>
                            <p className="mt-2 text-sm text-gray-500"><a href={data.ambulance_services.cta.link} className="href"><strong>{data.ambulance_services.cta.helpline}</strong></a></p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
                            {data.blood_bank.title || 'Heading'}
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            {data.blood_bank.description || 'BM Hospital We provide safe, accessible, and reliable blood donation and transfusion services to Save Lives .'}
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {data.blood_bank.services.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
                                    <img src={item.icon} alt={item.title} className="h-10 my-2" />
                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-16 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <img
                                src={data.blood_bank.cta.image}
                                alt={data.blood_bank.cta.alt}
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-blue-800 mb-4">
                                {data.blood_bank.cta.title}
                            </h2>
                            <p className="text-gray-600 mb-6">
                                {data.blood_bank.cta.description}
                            </p>
                            <ul className="space-y-3 mb-6">
                                {data.blood_bank.cta.points.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-700 font-semibold">
                                        ✅ {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="relative bg-white text-blue-700 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-4 text-blue-700">{data.blood_bank.final_cta.heading || "heading"}</h1>
                        <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-700">
                            {data.blood_bank.final_cta.paragraph || "Now Join thousands of life savers across the country. Donate blood, find donors, or host a drive."}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            {data.blood_bank.final_cta.buttons.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={item.classes}
                                >
                                    {item.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* <section className="bg-blue-100 py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">{data.testimonials.title || "Heading"}</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {data.testimonials.testimonial.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow">
                                    <p className="text-gray-700 italic mb-4">“{item.feedback || 'this is good'}”</p>
                                    <div className="text-right text-blue-900 font-semibold">- {item.name || 'name'}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

            </div>
        </>
    )
}

export default Treatment;
