import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Heart from '@/assets/images/heart.png'
import Diabetes from '@/assets/images/diabetes.png'
import Vaccine from '@/assets/images/Vaccine.png'

export default function Blog() {

    const blogPosts = [
        {
            title: "AI-OCT and Precision Angioplasty: Revolutionizing Heart Care in ",
            description:
                "We are incredibly excited about the recent strides in cardiac care, particularly with the integration of Artificial Intelligence (AI) in diagnostic imaging.",
            author: "BM Hospital team",
            date: "June 15, 2025",
            image: 'https://behearthealthy.in/wp-content/uploads/2024/04/artificial-intelligence-angioplasty-india-img.webp',
            tags: ["Cardiology", "Wellness"],
            redirect: "/ai-oct"
        },
        {
            title: "Top 10 Common Childhood Illnesses Every Parent Should Know – Essential Guidance from BM Hospital ",
            description:
                "As parents, navigating the world of childhood illnesses can feel overwhelming. From sniffles to rashes, it's natural to worry when your little one isn't feeling their best. ",
            author: "BM Hospital team",
            date: "June 15, 2025",
            image: 'https://continentalHospitals.com/uploads/mceu_21896820611699938032843.jpg',
            tags: ["Diabetes", "Nutrition"],
            redirect: "/common-childhood-illnesses"
        },
        {
              title: "Understanding Common ENT Problems: When to See a Specialist",
            description:
                "Our senses of hearing, smell, taste, and balance play a crucial role in our daily lives. At BM Hospital, our dedicated ENT specialists diagnose and treat a wide range of conditions to restore comfort and function.",
            author: "BM Hospital team",
            date: "June 15, 2025",
            image: Vaccine,
            tags: ["Pediatrics", "Immunization"],
            redirect: "/ent-problems"
        },
        {
            title: " 5 Signs You Should See a Gynecologist Immediately",
            description:
                "  At BM Hospital, we empower women to prioritize their health with comprehensive and compassionate gynecological care. Learn to recognize signs that should never be ignored.",
            author: "BM Hospital team",
            date: "June 15, 2025",
            image: Vaccine,
            tags: ["Pediatrics", "Immunization"],
            redirect: "/Gynaecologist-immediately"
        },
    ];

    return (
        <div>
            <Nav />
            <div>
                <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
                    <div className="max-w-8xl mx-auto">
                        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
                            Latest Health Articles
                        </h2>

                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
                                            Read More →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
