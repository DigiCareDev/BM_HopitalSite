import React from 'react';
import Heart from '@/assets/images/heart.png'
import Diabetes from '@/assets/images/diabetes.png'
import Vaccine from '@/assets/images/Vaccine.png'
import Logo from '@/assets/Logo.webp'

function HomeBlog({ translations }) {
    const blogPosts = [
        {
            title: "AI-OCT and Precision Angioplasty: Revolutionizing Heart Care in ",
            description:
                "We are incredibly excited about the recent strides in cardiac care, particularly with the integration of Artificial Intelligence (AI) in diagnostic imaging.",
            author: "BM Hospital team",
            date: "July 03, 2025",
            avatar: Logo,
            image: Heart,
            tags: ["Cardiology", "Wellness"],
            redirect: "/ai-oct"
        },
        {
            title: "Top 10 Common Childhood Illnesses Every Parent Should Know – Essential Guidance from BM Hospital ",
            description:
            "As parents, navigating the world of childhood illnesses can feel overwhelming. From sniffles to rashes, it's natural to worry when your little one isn't feeling their best. ",
            author: "BM Hospital team",
            date: "July 03, 2025",
            image: Diabetes,
            tags: ["Diabetes", "Nutrition"],
            redirect: "/common-childhood-illnesses",
            avatar: Logo,
        },
        {
            title: "Child Vaccination Schedule You Should Follow",
            description:
                "Ensure your child's immunity with a complete vaccination roadmap. Stay updated with the latest immunization guidelines.",
            author: "BM Hospital team",
            date: "July 03, 2025",
            image: Vaccine,
            avatar: Logo,
            tags: ["Pediatrics", "Immunization"],
            redirect: "/ent-problems"
        },
        // {
        //     title: "Child Vaccination Schedule You Should Follow",
        //     description:
        //         "Ensure your child's immunity with a complete vaccination roadmap. Stay updated with the latest immunization guidelines.",
        //     author: "BM Hospital team",
        //     date: "July 03, 2025",
        //     image: Vaccine, 
        //     avatar: Logo,
        //     tags: ["Pediatrics", "Immunization"],
        //     redirect: "/Gynaecologist-immediately"
        // },
    ];
    return (
        <div>
            <div className="bg-white ">
                <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">
                    {/* Title */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-blue-800 ">
                            Latest Blog
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
                                        <h5 className="text-sm text-gray-900 dark:group-hover:text-[#80CAC7] font-bold ">By {post.author}</h5>
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
                            Read More
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeBlog
