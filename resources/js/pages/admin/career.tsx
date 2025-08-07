import { useEffect, useState } from 'react';
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import devURL from '../constent/devURL';
import Logo from '../../assets/Logo.webp'
import Edit from './career/edit';
import Swal from 'sweetalert2';
import Show from './career/show';



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
                        <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 mb-4 text-blue-400 animate-bounce"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h2 className="text-xl font-semibold">No Data Found</h2>
                            <p className="text-sm mt-2">We're sorry, but there’s nothing to display here right now.</p>
                        </div>
                    ) : (
                        post.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border rounded-lg shadow-md p-3 flex flex-col gap-3"
                            >
                                <div className='absolute z-50'>

                                </div>
                                <img
                                    src={item.image ? `${devURL}/storage/${item.image}` : Logo}
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
                        <Show
                            selectCareer={editCareer}
                            onClose={() => setEditModel(false)}
                            onSuccess={() => setEditModel(false)}
                        />
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
