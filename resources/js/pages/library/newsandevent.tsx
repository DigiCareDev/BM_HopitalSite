import React, { useEffect, useState } from 'react'
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer';
import Logo from "@/assets/Logo.webp";
import axios from 'axios';
import Subnav from '../components/subnav'

export default function NewsAndEvent() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const [newsEvent, setNewsEvent] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://emarketplace.progatetechnology.com/api/news-events')
            .then(res => {
                console.log('News and Events:', res.data);
                setNewsEvent(res.data);
                setLoading(false);
            })
            .catch(err => console.error('Error fetching news and events:', err));
        setLoading(false);
    }, []);

    return (
        <>
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />
            <div className='bg-white'>
                <div className="max-w-8xl mx-auto">
                    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            {/* Main Heading */}
                            <h2 className="text-3xl font-bold text-blue-900 mb-8">{translations?.news_events_top_heading ||  'समाचार और कार्यक्रम'}</h2>

                            {/* Featured and Side Posts */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Featured Post */}
                                <div className="lg:col-span-2">
                                    <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                                        <img
                                            className="w-70 h-70 object-cover flex justify-items-center"
                                            src={Logo}
                                            alt="Featured News"
                                        />
                                        <a href='/free-medical-camp' className="p-4">
                                            <p className="text-md text-blue-700 mb-2 px-5 font-bold">{translations?.news_events_type || 'कार्यक्रम'}</p>
                                            <h3 className="text-xl font-semibold text-gray-800 leading-snug px-5">
                                                {translations?.news_events_heading || 'बीएम हॉस्पिटल द्वारा नि:शुल्क चिकित्सा शिविर – स्वास्थ्य सेवा, करुणा का विस्तार'}
                                            </h3>
                                            <p className="text-md text-blue-800 mb-2 px-5">{translations?.news_events_description || 'बीएम हॉस्पिटल को बाराबंकी और आस-पास के क्षेत्रों के लोगों को सुलभ चिकित्सा सेवा प्रदान करने और सामुदायिक स्वास्थ्य को बढ़ावा देने के लिए नि:शुल्क चिकित्सा शिविर की घोषणा करते हुए प्रसन्नता हो रही है।'}</p>
                                        </a>
                                    </div>
                                </div>

                                {/* Side Posts */}
                                <div className="flex flex-col space-y-4">
                                    {newsEvent.map((item, idx) => (
                                        <div key={idx} className="flex items-start space-x-3">
                                            <img
                                                src={`http://emarketplace.progatetechnology.com/storage/${item.image_path || Logo}`}
                                                className="w-20 h-20 object-cover rounded-md"
                                                alt="side-news"
                                            />
                                            <div>
                                                <div className='flex justify-between items-center'>
                                                    <h4 className="text-md font-medium text-gray-900">{item.title}</h4>
                                                    <span className="text-sm text-gray-500">{new Date(item.created_at).toLocaleDateString()}</span>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1">{item.description.slice(0, 100)}...</p>
                                                <a href={`/news-event/${item.id}`} className="text-blue-600 text-sm font-medium hover:underline mt-1">Read More</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trending News Section */}
                            {/* <div className="mt-12">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-semibold text-blue-900">Trending News</h3>
                                    <a
                                        href="#"
                                        className="text-blue-600 text-sm font-medium hover:underline flex items-center"
                                    >
                                        See More →
                                    </a>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        {
                                            title: "Innovative Farming Technology Transforms Local Agriculture Practices",
                                            desc: "Farmers can now increase efficiency and sustainability...",
                                            img: Logo,
                                        },
                                        {
                                            title: "Cultural Festival Highlights Diversity Through Food and Performances",
                                            desc: "Local cultures will be showcased throughout the event...",
                                            img: Logo,
                                        },
                                        {
                                            title: "Regional Sports League Welcomes New Teams and Opportunities",
                                            desc: "Encouraging participation and development of regional teams...",
                                            img: Logo,
                                        },
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden ">
                                            <img
                                                className="w-full h-44 object-cover"
                                                src={item.img}
                                                alt={item.title}
                                            />
                                            <div className="p-4">
                                                <h4 className="text-lg font-semibold text-gray-800 hover:text-blue-800">{item.title}</h4>
                                                <p className="text-sm text-gray-600 mt-1 hover:text-[#80CAC7] ">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    </section>

                </div>
            </div >
            <Footer translations={translations}/>
        </>
    )
}
