
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Edit, Trash2, Plus, Eye } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blog',
        href: '/blog-page',
    },
];



export default function Blog() {

    const [blogs, setBlogs] = useState({
        name: '',
        subtitle: '',
        author: '',
        description: '',
        image: null,
    })

    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            const file = files[0];
            setBlogs({ ...blogs, image: file });
            setPreview(URL.createObjectURL(file));
        } else {
            setBlogs({ ...blogs, [name]: value });
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="blog" />
            <div className="bg-white shadow p-2 rounded-xl border border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-blue-600">All Blogs</h2>
                        <button className=" text-white px-2 py-2 rounded  ">
                            <a href='/add-blog' className='flex border border-blue-700 text-blue-700 hover:bg-blue-600 hover:text-white transition p-1 rounded'>
                                <Plus /> Add Blog
                            </a>
                        </button>
                    </div>
                       <div className="overflow-x-auto  bg-white p-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {[1, 2].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border rounded-lg shadow-md p-4 flex flex-col gap-3"
                                    >
                                        <img
                                            src="https://via.placeholder.com/300x180"
                                            alt="Gallery item"
                                            className="rounded-md object-cover h-40 w-full"
                                        />

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Sample Title {item}</h3>
                                            <p className="text-sm text-gray-600">Category: Events</p>
                                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                                This is a short description for the gallery item. You can customize this as needed.
                                            </p>
                                        </div>

                                        <div className="flex justify-between">
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 text-sm rounded-md">
                                                Edit
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 text-sm rounded-md">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                </div>
        </AppLayout>
    );
}