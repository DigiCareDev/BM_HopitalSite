import React from 'react'
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import devURL from '../constent/devURL';
import { Edit, Trash2, Plus } from 'lucide-react';
import Logo from '../../assets/Logo.webp'
import Swal from 'sweetalert2';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'News and Event manage',
        href: '/news-and-event-manage',
    },
];


export default function Newsandevent() {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [newsEvent, setNewsEvent] = useState([]);

    
    useEffect(() => {
        // fetch('http://localhost:8000/api/news-events')
        fetch(`${devURL}/api/news-events`)
        .then(res => res.json())
        .then(data => {
            setNewsEvent(data);
            setLoading(false);
        })
        .catch(err => console.log('Fail', err))
    }, [])
    
    const deleteNewsEvent = async (id) => {
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
                // const res = await fetch(`http://emarketplace.progatetechnology.com/api/news-events/${id}`, {
                const res = await fetch(`${devURL}/api/news-events/${id}`, {
                    method: 'DELETE',
                });
    
                if (res.ok) {
                    setNewsEvent(prev => prev.filter(newsevents => newsevents.id !== id));
                    Swal.fire({
                    title: 'Deleted!',
                    text: ' deleted successfully.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                } else {
                    const error = await res.json();
                     Swal.fire('Failed', error.message || 'Failed to delete .', 'error');
                }
            } catch (err) {
                console.error('Delete failed:', err);
                 Swal.fire('Error', 'Something went wrong while deleting.', err);
            }
        };
    
    return (
        <div>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="News and Event manage" />
                <div className="overflow-x-auto min-h-screen bg-white p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-blue-800">News & Events</h2>
                        <a href='/add-news-and-event' className='flex border border-blue-700 text-blue-700 hover:bg-blue-600 hover:text-white transition p-1 rounded'>
                            <Plus /> Add News/event
                        </a>
                    </div>
                    <table className="min-w-full table-auto divide-y divide-gray-200 text-sm">
                        <thead className="bg-blue-50">
                            <tr>
                                <th className="px-3 py-2 text-left font-semibold text-blue-900">#</th>
                                <th className="px-3 py-2 text-left font-semibold text-blue-900">Image</th>
                                <th className="px-3 py-2 text-left font-semibold text-blue-900">Title</th>
                                <th className="px-3 py-2 text-left font-semibold text-blue-900">Category</th>
                                <th className="px-3 py-2 text-left font-semibold text-blue-900">Description</th>
                                <th className="px-3 py-2 text-left font-semibold text-blue-900">Date</th>
                                <th className="px-3 py-2 text-center font-semibold text-blue-900">Actions</th>
                            </tr>

                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-700">
                            {loading ? (
                                <div className="flex justify-center items-center py-6">
                                    <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                </div>
                            ) : newsEvent === 0 ? (
                                <div>
                                    <div className="text-center text-gray-900 py-4">No contact found.</div>
                                </div>
                            ) : (
                                newsEvent.map((item, i) => (
                                    <tr key={i} className="hover:bg-blue-50 transition-all">
                                        <td className="px-3 py-2 font-semibold text-blue-600"> {i + 1}</td>
                                        <td className="px-3 py-2">
                                            <img
                                                // src={`${devURL}/storage/${item.image_path || Logo}`}
                                                src={item.image ? `http://localhost:8000/storage/${item.image}` : Logo}
                                                alt={item.title}
                                                className="w-10 h-10 object-cover"
                                            />
                                        </td>
                                        <td className="px-3 py-2 w-1/4">{item.title}</td>
                                        <td className="px-3 py-2 capitalize">{item.category}</td>
                                       <td className="px-3 py-2 w-1/2 max-h-[200px] overflow-y-auto"   dangerouslySetInnerHTML={{ __html: item.description }} />
                                        <td className="px-3 py-2 capitalize">{new Date(item.created_at).toLocaleDateString()}</td>
                                        <td className="px-3 py-2 text-center space-x-2">
                                            <button
                                                onClick={() => setIsOpen(true)}
                                                className="inline-flex items-center text-green-600 hover:bg-green-700 hover:text-white px-2 py-1 rounded text-sm transition"
                                            >
                                                <Edit className="w-5 h-5 text-green-600 hover:text-white" />
                                            </button>
                                            <button
                                                onClick={() => deleteNewsEvent(item.id)}
                                                className="inline-flex items-center text-red-600 hover:bg-red-700 hover:text-white px-2 py-1 rounded text-sm transition"
                                            >
                                                <Trash2 className="w-5 h-5 text-red-600 hover:text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    {isOpen && (
                        <div>
                            <h1 className='text-blue-600'>Update News & Events</h1>
                        </div>
                    )}
                </div>

            </AppLayout>
        </div>
    )
}
