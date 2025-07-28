import React, { useState } from 'react';

const FAQSection = ({faqItems, translations}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                    <div className="max-w-xs">
                        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-blue-700">
                           {translations?.frequently_asked_questions_title || 'अक्सर पूछे जाने वाले प्रश्न'}
                        </h2>
                        <p className="mt-1 hidden md:block text-gray-600">
                           {translations?.frequently_asked_questions_title2 || 'सबसे अधिक पूछे जाने वाले प्रश्नों के उत्तर।'}
                        </p>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="divide-y divide-gray-200">
                        {faqItems.map((item, index) => (
                            <div key={index} className="pt-3 pb-2">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full text-lg font-semibold text-start text-blue-800 rounded-lg transition hover:text-gray-500">
                                    {item.question}
                                    <svg
                                        className={`shrink-0 size-5 text-blue-600 font-bold transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>
                                {activeIndex === index && (
                                    <div className="transition-all duration-300">
                                        <p className="font-bold text-gray-800">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
