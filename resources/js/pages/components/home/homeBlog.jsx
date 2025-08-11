import React from 'react';
import Heart from '@/assets/images/heart.png'
import Diabetes from '@/assets/images/diabetes.png'
import Vaccine from '@/assets/images/Vaccine.png'
import Logo from '@/assets/Logo.webp'

function HomeBlog({ translations }) {
    const blogPosts = [
        {
            title: translations?.blog_title || 'एआई-ओसीटी और प्रिसिशन एंजियोप्लास्टी: हृदय देखभाल में क्रांति',
            description: translations?.blog_description || "हम हृदय देखभाल में हालिया प्रगति को लेकर बेहद उत्साहित हैं, खासकर डायग्नोस्टिक इमेजिंग में आर्टिफिशियल इंटेलिजेंस (AI) के एकीकरण के साथ।",
            author: translations?.blog_auther || "बीएम हॉस्पिटल टीम",
            date: "July 03, 2025",
            avatar: Logo,
            image: Heart,
            tags: ["Cardiology", "Wellness"],
            redirect: "/ai-oct"
        },
        {
            title: translations?.blog_title1 || 'हर माता-पिता को जाननी चाहिएं ये 10 सामान्य बाल रोग – बीएम हॉस्पिटल की ज़रूरी सलाह',
            description: translations?.blog_description1 || "माता-पिता के रूप में, बच्चों की बीमारियों को समझना कभी-कभी भारी लग सकता है। नाक बहने से लेकर चकत्तों तक, जब आपके बच्चे की तबीयत ठीक नहीं होती, तो चिंता होना स्वाभाविक है।",
            author: translations?.blog_auther || "बीएम हॉस्पिटल टीम",
            date: "July 03, 2025",
            image: Diabetes,
            tags: ["Diabetes", "Nutrition"],
            redirect: "/common-childhood-illnesses",
            avatar: Logo,
        },
        {
            title: translations?.blog_title2 || "सामान्य ईएनटी समस्याएं समझें: कब विशेषज्ञ से मिलना ज़रूरी है",
            description: translations?.blog_description2 || "सुनने, सूंघने, स्वाद और संतुलन की हमारी इंद्रियां रोज़मर्रा की ज़िंदगी में अहम भूमिका निभाती हैं। बीएम हॉस्पिटल में हमारे समर्पित ईएनटी विशेषज्ञ विभिन्न समस्याओं का निदान और इलाज करते हैं ताकि आपको फिर से आराम और संतुलन मिल सके।",
            author: translations?.blog_auther || "बीएम हॉस्पिटल टीम",
            date: "July 03, 2025",
            image: Vaccine,
            avatar: Logo,
            tags: ["Pediatrics", "Immunization"],
            redirect: "/ent-problems"
        },
    ];
    return (
        <div>
            <div className="bg-white ">
                <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">
                    {/* Title */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-blue-800 ">
                            {translations?.blog_heading || 'नवीनतम स्वास्थ्य लेख'}
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {blogPosts.map((post, idx) => (
                            <a
                                key={idx}
                                href={post.redirect}
                                className="group flex flex-col h-full border border-gray-900 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-2 dark:border-blue-700 dark:hover:border-transparent dark:hover:shadow-blue-500 dark:focus:border-transparent dark:focus:shadow-blue-500"
                            >
                                <div className="aspect-w-16 aspect-h-11">
                                    <img
                                        src={post.image}
                                        alt="Blog"
                                        className="w-full object-cover rounded-xl"
                                    />
                                </div>
                                <div className="my-3">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-900 dark:group-hover:text-blue-600">
                                        {post.title}
                                    </h3>
                                    <p className="mt-5 text-gray-600 dark:text-gray-900 dark:group-hover:text-blue-600">{post.description}</p>
                                </div>
                                <div className="mt-auto flex items-center gap-x-3">
                                    <img
                                        src={post.avatar}
                                        alt="Avatar"
                                        className="size-8 rounded-full"
                                    />
                                    <div>
                                        <h5 className="text-sm text-gray-900 dark:group-hover:text-[#80CAC7] font-bold "> {post.author}</h5>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <a
                            href='/blog'
                            className="inline-block mt-4 text-white bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded-lg transition"
                        >
                            {translations?.read_more || 'अधिक पढ़ें'} 
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeBlog
