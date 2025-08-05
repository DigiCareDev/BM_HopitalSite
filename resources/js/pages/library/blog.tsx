import React, { useEffect, useState } from 'react'
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Vaccine from '@/assets/images/Vaccine.png'
import Subnav from '../components/subnav'
import devURL from '../constent/devURL'


const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
};

export default function Blog() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('http://localhost:8000/api/blogs')
        fetch(`${devURL}/api/blogs`)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setLoading(false);
            })
            .then(err => {
                console.log('Failed', err);
                setLoading(false);
            })
    }, [])


    const blogPosts = [
        {
            title: translations?.blog_title || 'एआई-ओसीटी और प्रिसिशन एंजियोप्लास्टी: हृदय देखभाल में क्रांति',
            description: translations?.blog_description || "हम हृदय देखभाल में हालिया प्रगति को लेकर बेहद उत्साहित हैं, खासकर डायग्नोस्टिक इमेजिंग में आर्टिफिशियल इंटेलिजेंस (AI) के एकीकरण के साथ।",
            author: translations?.blog_auther || "बीएम हॉस्पिटल टीम",
            date: "June 15, 2025",
            image: 'https://behearthealthy.in/wp-content/uploads/2024/04/artificial-intelligence-angioplasty-india-img.webp',
            tags: ["Cardiology", "Wellness"],
            redirect: "/ai-oct"
        },
        {
            title: translations?.blog_title1 || 'हर माता-पिता को जाननी चाहिएं ये 10 सामान्य बाल रोग – बीएम हॉस्पिटल की ज़रूरी सलाह',
            description: translations?.blog_description1 || "माता-पिता के रूप में, बच्चों की बीमारियों को समझना कभी-कभी भारी लग सकता है। नाक बहने से लेकर चकत्तों तक, जब आपके बच्चे की तबीयत ठीक नहीं होती, तो चिंता होना स्वाभाविक है।",
            author: translations?.blog_auther || "बीएम हॉस्पिटल टीम",
            date: "June 15, 2025",
            image: 'https://continentalHospitals.com/uploads/mceu_21896820611699938032843.jpg',
            tags: ["Diabetes", "Nutrition"],
            redirect: "/common-childhood-illnesses"
        },
        {
            title: translations?.blog_title2 || "सामान्य ईएनटी समस्याएं समझें: कब विशेषज्ञ से मिलना ज़रूरी है",
            description: translations?.blog_description2 || "सुनने, सूंघने, स्वाद और संतुलन की हमारी इंद्रियां रोज़मर्रा की ज़िंदगी में अहम भूमिका निभाती हैं। बीएम हॉस्पिटल में हमारे समर्पित ईएनटी विशेषज्ञ विभिन्न समस्याओं का निदान और इलाज करते हैं ताकि आपको फिर से आराम और संतुलन मिल सके।",
            author: translations?.blog_auther || "बीएम हॉस्पिटल टीम",
            date: "June 15, 2025",
            image: Vaccine,
            tags: ["Pediatrics", "Immunization"],
            redirect: "/ent-problems"
        },
        {
            title: translations?.blog_title3 || "5 संकेत जो बताते हैं कि आपको तुरंत स्त्री रोग विशेषज्ञ से मिलना चाहिए",
            description: translations?.blog_description3 || "बीएम हॉस्पिटल में हम महिलाओं को उनके स्वास्थ्य को प्राथमिकता देने के लिए संपूर्ण और संवेदनशील स्त्री रोग सेवाएं प्रदान करते हैं। ऐसे संकेत पहचानें जिन्हें कभी नजरअंदाज नहीं करना चाहिए।",
            author: translations?.blog_auther || "बीएम हॉस्पिटल टीम",
            date: "June 15, 2025",
            image: Vaccine,
            tags: ["Pediatrics", "Immunization"],
            redirect: "/Gynaecologist-immediately"
        },
    ];

    return (
        <div>
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />
            <div>
                <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
                    <div className="max-w-8xl mx-auto">
                        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
                            {translations?.blog_heading || 'नवीनतम स्वास्थ्य लेख'}
                        </h2>

                        {/* <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            {blogPosts.map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-82 object-cover"
                                    />

                                    <div className="p-5">
                                        <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4">{post.description}</p>

                                        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                            <span>{post.author}</span>
                                            <span>{post.date}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {post.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={post.redirect}
                                            className="inline-block text-sm text-blue-600 hover:underline font-medium"
                                        >
                                            {translations?.read_more || 'अधिक पढ़ें'} →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {loading ? (
                                <div className="flex justify-center items-center py-6">
                                    <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                </div>
                            ) : blog.length === 0 ? (
                                <div>
                                    <div className="text-gray-500 py-4 flex justify-self-center">Data No found.</div>
                                </div>
                            ) : (blog.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                                >
                                    <img
                                        src={item.image ? `http://localhost:8000/storage/${item.image}` : Logo}
                                        alt='title'
                                        className="w-full h-90 object-cover"
                                    />

                                    <div className="p-5">
                                        <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                            {item?.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4">  {stripHtml(item.subtitle).slice(0, 200)}...</p>

                                        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                            <span>{item?.author}</span>
                                            <span>{new Date(item?.updated_at).toLocaleDateString()}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {item.tags &&
                                                item.tags.split(',').map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                                    >
                                                        {tag.trim()}
                                                    </span>
                                                ))}
                                        </div>
                                        <a href="" className="text-blue-700" >
                                            {translations?.read_more || 'अधिक पढ़ें →'}
                                        </a>
                                    </div>
                                </div>
                            )))}
                        </div>

                    </div>
                </section>
            </div>
            <Footer translations={translations} />
        </div>
    )
}
