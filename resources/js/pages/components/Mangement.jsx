import React from 'react'

function Mangement({ contentData }) {

    const data = contentData.sections;

    console.log('contentData', data)

    return (
        <div>
            <div className="bg-gradient-to-b from-white via-blue-50 to-white text-blue-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {data.map((section, index) => {
                        if (section.type === "header") {
                            return (
                                <section key={index} className="py-16 flex flex-col lg:flex-row items-center gap-12">
                                    <div className="flex-1">
                                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{section.subtitle}</h1>
                                        <p className="text-gray-700 text-lg leading-relaxed">{section.description}</p>
                                    </div>
                                    <div className="flex-1">
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="rounded-3xl w-full object-cover"
                                        />
                                    </div>
                                </section>
                            );
                        }

                        if (section.type === "info") {
                            return (
                                <section key={index} className="bg-blue-100/30 rounded-2xl py-14 text-center mb-12 items-center">
                                    <img src={section.icon} alt="" className="h-25 mx-auto mb-4 block" />
                                    <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                                    <p className="text-gray-700 max-w-6xl mx-auto text-lg">{section.content}</p>
                                </section>

                            );
                        }

                        if (section.type === "treatments") {
                            return (
                                <section key={index} className="py-16">
                                    <h2 className="text-4xl font-bold text-center mb-4">{section.title}</h2>
                                    <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto text-lg">{section.description}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {section.cards.map((card, i) => (
                                            <div
                                                key={i}
                                                className="bg-white/70 border border-blue-200 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform"
                                            >
                                                <img src={card.icon} alt="" className="h-10 mx-auto mb-3" />
                                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                                <p className="text-gray-600 text-sm">{card.content}</p>
                                            </div>

                                        ))}
                                    </div>
                                </section>
                            );
                        }

                        if (section.type === "helpline") {
                            return (
                                <section key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-2xl py-16 px-6">
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <h2 className="text-4xl font-bold mb-2">{section.title}</h2>
                                            <h3 className="text-2xl text-blue-800 font-semibold mb-4">{section.subtitle}</h3>
                                            <p className="text-gray-700 mb-6 text-lg">{section.description}</p>
                                            <ul className="space-y-4">
                                                {section.contacts.map((contact, i) => (
                                                    <li key={i} className="flex items-start gap-4">
                                                        <img src={contact.icon} alt="" className='h-10' />
                                                        <div>
                                                            <div className="text-sm font-semibold text-blue-900">{contact.label}</div>
                                                            <div className="text-gray-800">{contact.value}</div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={section.image.src}
                                                alt={section.image.alt}
                                                className="rounded-3xl w-full object-cover"
                                            />
                                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl">
                                                <div className="text-2xl">{section.image.badge.icon}</div>
                                                <div className="font-bold text-blue-900">{section.image.badge.title}</div>
                                                <div className="text-sm text-gray-600">{section.image.badge.subtitle}</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        }

                        return null;
                    })}

                </div>
            </div>

        </div>
    )
}

export default Mangement
