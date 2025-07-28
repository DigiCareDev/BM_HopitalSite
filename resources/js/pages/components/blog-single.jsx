import React from 'react';
import Logo from '../../assets/images/logo.jpg'
import { RiXingLine } from 'react-icons/ri';

function Blogsingle({ blogData }) {

    console.log('blogData', blogData)

    const relatedPosts = [
        {
            id: 1,
            title: 'How to Improve Your Heart Health',
            excerpt: 'Learn simple lifestyle changes to protect your cardiovascular system...',
            image: Logo,
        },
        {
            id: 2,
            title: 'Benefits of Regular Medical Checkups',
            excerpt: 'Early detection can Save Lives . Here’s why routine exams matter...',
            image: Logo,
        },
        {
            id: 3,
            title: 'Top 10 Tips for Mental Wellness',
            excerpt: 'Balance your mind with these proven daily habits...',
            image: Logo,
        },
        {
            id: 4,
            title: 'Top 10 Tips for Mental Wellness',
            excerpt: 'Balance your mind with these proven daily habits...',
            image: Logo,
        },
    ];

    return (
        <>
            <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
                {/* Title Section */}
                <div>
                    <div className="max-w-7xl mx-auto mb-10">
                        <h1 className="text-4xl font-bold text-blue-900 mb-2">{blogData.title}</h1>
                        <p className="text-sm text-gray-500">by {blogData.author || 'By Dr. Meera Sharma'} {blogData.date || '- Published on June 15, 2025'}</p>
                    </div>

                    {/* Blog Content */}
                    <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md leading-relaxed text-gray-700">
                        <div className="bg-white text-gray-800 font-sans">

                            {/* Intro */}
                            <section className="py-4 px-4 sm:px-2">
                                <div className="max-w-7xl mx-auto text-lg text-gray-700 space-y-3">
                                    {blogData.intro.map((item, i) => (
                                        <p key={i}>
                                            {item}
                                        </p>
                                    ))}

                                </div>
                            </section>

                            {/* Features */}
                            <section className="bg-blue-50 py-16 px-6 sm:px-12">
                                <div className="max-w-6xl mx-auto">
                                    <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
                                        {blogData.features.title}
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {blogData.features.items.map((item, i) => (
                                            <div key={i} className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-xl">
                                                <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                                                <p className="text-gray-700 leading-relaxed">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Patient Outcomes */}
                            <section className="py-6 px-6 sm:px-6">
                                <div className="max-w-5xl mx-auto space-y-6">
                                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                                        {blogData.outcomes.title}
                                    </h2>
                                    <p className="text-lg text-gray-700">
                                        {blogData.outcomes.content}
                                    </p>
                                    {blogData.outcomes.bullets.map((item, i) => (
                                        <ul key={i} className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>{item}</li>
                                        </ul>
                                    ))}

                                </div>
                            </section>

                            {/* Hospital Commitment */}
                            <section className="bg-blue-100 py-16 px-6 sm:px-12">
                                <div className="max-w-6xl mx-auto text-center">
                                    <h2 className="text-2xl font-bold text-blue-900 mb-10">
                                          {blogData.commitment.title}
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {blogData.commitment.items.map((item, i) => (
                                            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                                                <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                                                <p className="text-gray-700">{item.text || 'text'}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Related Posts Section */}
                <div className="max-w-7xl mx-auto mt-16">
                    <h2 className="text-2xl font-bold text-blue-800 mb-6">Related Posts</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {relatedPosts.map((post) => (
                            <div key={post.id} className="bg-white border rounded-lg shadow hover:shadow-lg transition">
                                <img src={post.image} alt={post.title} className="rounded-t-lg h-40 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-blue-700">{post.title}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                                    <a href="#" className="text-sm text-blue-600 mt-3 inline-block hover:underline">Read More →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogsingle
