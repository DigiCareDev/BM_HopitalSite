import { useState } from "react";

const Faq = ({faqs, translations}) => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold text-blue-900 leading-[3.25rem]">
                            {translations?.faq || ''}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`accordion px-6 py-5 border-b border-blue-400 rounded-2xl transition-all duration-500 ${openIndex === index ? "bg-blue-50" : "hover:bg-blue-50"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between text-left text-blue-800 hover:text-blue-600 transition duration-300 font-medium"
                                >
                                    <h5 className="text-xl">{faq.question}</h5>
                                    <svg
                                        className={`w-5 h-5 text-blue-500 transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-600" : ""
                                            }`}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                                {openIndex === index && (
                                    <div className="mt-4 text-base text-gray-900 leading-6 font-bold">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
export default Faq;