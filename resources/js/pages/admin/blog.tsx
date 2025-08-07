
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Edit, Trash2, Plus, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from '@/assets/Logo.webp'
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi';
import EditBlogForm from './blog/edit';
import Swal from 'sweetalert2';
import devURL from '../constent/devURL';
import Show from './blog/show';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blog',
        href: '/blog-page',
    },
];


const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
};


export default function Blog() {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [editOpen, setEditOpen] = useState(false);
    const [editBlog, setEditBlog] = useState(null);


    console.log('blog===', blog[0])

    useEffect(() => {
        // fetch('http://localhost:8000/api/blogs')
        fetch(`${devURL}/api/blogs`)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setLoading(false)
            })
            .then(err => {
                console.log('failed', err);
                setLoading(false);
            });
    }, [])

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        })

        if (!result.isConfirmed) return;

        try {
            // const res = await fetch(`http://localhost:8000/api/blogs/${id}`, {
            const res = await fetch(`${devURL}/api/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                }
            });

            if (res.ok) {
                setBlog(prev => prev.filter(blogs => blogs.id !== id));
                Swal.fire({
                    title: 'Deleted!',
                    text: res.message || 'Blog deleted successfully!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
            } else {
                const error = await res.json();
                Swal.fire('Failed to delete: ' + error.message);
            }
        } catch (err) {
            console.error('Delete failed:', err);
            Swal.fire('Error deleting contact');
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blog Management" />
            <div className="bg-white shadow p-2 min-h-full border border-gray-200">
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
                                    src={item.image ? `${devURL}/storage/${item.image}` : Logo}
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
                                    <div className='flex justify-between items-center mt-5 space-x-2'>
                                        <button
                                            onClick={() => {
                                                setIsOpen(true)
                                                setSelectedBlog(item);
                                            }}
                                            className='flex items-center gap-2 text-green-700 border border-green-700 hover:bg-green-700 hover:text-white text-sm font-bold rounded-lg shadow-md px-6 py-2'
                                        >
                                            <HiEye /> Show
                                        </button>

                                        <button
                                            onClick={() => {
                                                setEditOpen(true);
                                                setEditBlog(item)
                                            }}
                                            className='flex items-center gap-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white text-sm font-bold rounded-lg shadow-md px-6 py-2'
                                        >
                                            <HiPencil /> Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className='flex items-center gap-2 text-rose-700 border border-rose-700 hover:bg-rose-700 hover:text-white text-sm font-bold rounded-2xl shadow-md px-6 py-2'
                                        >
                                            <HiTrash /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )))}
                    </div>
                    {isOpen && selectedBlog && (
                        <Show
                            selectedBlog={selectedBlog}
                            onClose={() => setIsOpen(false)}
                            onSuccess={() => setIsOpen(false)}
                        />
                    )}

                    {editOpen && editBlog && (
                        <div className="fixed inset-0 text-blue-700 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl w-full relative max-h-[90vh] overflow-y-auto">
                                <button
                                    className="absolute top-2 right-2 text-red-600 font-bold text-2xl"
                                    onClick={() => setEditOpen(false)}
                                >
                                    ×
                                </button>

                                <EditBlogForm
                                    selectedBlog={editBlog}
                                />
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </AppLayout>
    );
}