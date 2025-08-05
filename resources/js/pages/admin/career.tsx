import { useEffect, useState } from 'react';
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import devURL from '../constent/devURL';
import Logo from '../../assets/Logo.webp'
import Edit from './career/edit';
import Swal from 'sweetalert2';



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Career Posts',
        href: '/contact-page',
    },
];

export default function Career() {

    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [openModel, setOpenModel] = useState(false);
    const [selectCareer, setSelectCareer] = useState(null);
    const [editModel, setEditModel] = useState(false);
    const [editCareer, setEditCareer] = useState(null);

    // console.log('post==', selectCareer)
    // console.log('editModel:', editModel);
    // console.log('editCareer:', editCareer);

    useEffect(() => {
        // fetch('http://localhost:8000/api/jobs')
        fetch(`${devURL}/api/jobs`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .then(err => {
                console.log('failed', err)
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (!result.isConfirmed) return;

        try {
            // const res = await fetch(`http://localhost:8000/api/jobs/${id}`, {
            const res = await fetch(`${devURL}/api/jobs/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                }
            });

            if (res.ok) {
                setPost(prev => prev.filter(jobs => jobs.id !== id));
                Swal.fire({
                    title: 'Deleted!',
                    text: res.message || 'Contact query deleted successfully!',
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
            <Head title="Career Posts Queries" />
            <div className="overflow-x-auto  bg-white p-4 min-h-full">
                <div className="flex justify-between items-center mb-4 ">
                    <h1 className="text-2xl font-bold text-blue-700">Career Posts</h1>
                    <a href='/create' className="bg-blue-500 rounded-lg shadow-lg text-white px-4 py-2 ">
                        Add New Post
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {loading ? (
                        <div className="flex justify-center items-center py-6">
                            <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                        </div>
                    ) : post.length === 0 ? (
                        <tr>
                            <div className="text-gray-500 py-4 flex justify-self-center">Data No found.</div>
                        </tr>
                    ) : (
                        post.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border rounded-lg shadow-md p-3 flex flex-col gap-3"
                            >
                                <div className='absolute z-50'>

                                </div>
                                <img
                                    src={item.image ? `http://localhost:8000/storage/${item.image}` : Logo}
                                    alt="Gallery item"
                                    className="rounded-md object-cover h-90 w-full relative"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{item?.title || 'N/A'}</h3>
                                    <p className="text-sm text-gray-600"><strong className='font-bold text-black'>Job type :</strong> {item?.job_type || 'N/A'}</p>
                                    <p className="text-sm text-gray-600"><strong className='font-bold text-black'>Location :</strong> {item?.location || 'N/A'}</p>
                                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                        {item?.description || 'N/A'}
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <button onClick={() => {
                                        setOpenModel(true)
                                        setSelectCareer(item)
                                    }}
                                        className='flex items-center gap-2 text-green-700 border border-green-700 hover:bg-green-700 hover:text-white text-sm font-bold rounded-lg shadow-md px-4 py-2'
                                    >
                                        <HiEye /> Show
                                    </button>

                                    <button onClick={() => {
                                        setEditModel(true)
                                        setEditCareer(item)
                                    }} className='flex items-center gap-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white text-sm font-bold rounded-lg shadow-md px-4 py-2'
                                    >
                                        <HiPencil /> Edit
                                    </button>

                                    <button onClick={() => handleDelete(item.id)}
                                        className='flex items-center gap-2 text-rose-700 border border-rose-700 hover:bg-rose-700 hover:text-white text-sm font-bold rounded-2xl shadow-md px-4 py-2'
                                    >
                                        <HiTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        )))}
                    {openModel && selectCareer && (
                        <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative border-2 border-blue-700">
                                {/* Close Button */}
                                <button
                                    className="absolute top-3 right-4 text-red-600 text-xl font-bold"
                                    onClick={() => setOpenModel(false)}
                                >
                                    ×
                                </button>

                                {/* Header */}
                                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                                    {selectCareer.title}
                                </h2>
                                <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-4">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                        {selectCareer.job_type}
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                                        {selectCareer.location}
                                    </span>
                                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                                        Deadline: {new Date(selectCareer.deadline).toLocaleDateString()}
                                    </span>
                                    <span className="text-gray-500 text-xs">
                                        Posted: {new Date(selectCareer.created_at).toLocaleString()}
                                    </span>
                                </div>

                                {/* Optional: Image */}
                                {selectCareer.image && (
                                    <div className="mt-6 items-center justify-items-center">
                                        <img
                                            src={`http://localhost:8000/storage/${selectCareer.image}`}
                                            alt="Career"
                                            className="w-100 h-100 rounded shadow-md"
                                        />
                                    </div>
                                )}

                                {/* Description */}
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-1 text-blue-800">
                                        Description
                                    </h3>
                                    <p className="text-gray-800 leading-relaxed">
                                        {selectCareer.description}
                                    </p>
                                </div>

                                {/* Requirements (HTML content) */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-1 text-blue-800">
                                        Requirements & Responsibilities
                                    </h3>
                                    <div
                                        className="prose max-w-none text-gray-700"
                                        dangerouslySetInnerHTML={{ __html: selectCareer.requirements }}
                                    />
                                </div>

                            </div>
                        </div>
                    )}
                    {editModel && editCareer && (
                        <>
                            <p>Modal is about to open</p>
                            <Edit
                                selectCareer={editCareer}
                                onClose={() => setEditModel(false)}
                                onSuccess={() => setEditModel(false)}
                            />
                        </>
                    )}
                </div>

            </div>
        </AppLayout >
    )
}
