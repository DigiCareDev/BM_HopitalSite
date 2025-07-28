import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import devURL from '../constent/devURL';
import { Trash2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Contact',
        href: '/contact-page',
    },
];

export default function Contact() {

    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://emarketplace.progatetechnology.com/api/contactdata')
        // fetch('http://localhost:8000/api/contactdata')
            .then(res => res.json())
            .then(data => {
                setContact(data);
                setLoading(false);
            })
            .catch(err => console.error('failed to fetch', err))
    }, [])

    const deleteContact = async (id) => {
        if (!window.confirm('Are you sure you want to delete this contact?')) return;

        try {
            const res = await fetch(`http://emarketplace.progatetechnology.com/api/contactdata/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setContact(prev => prev.filter(contactdata => contactdata.id !== id));
                alert(res.statusData || 'Contact query deleted successfully!');
            } else {
                const error = await res.json();
                alert('Failed to delete: ' + error.message);
            }
        } catch (err) {
            console.error('Delete failed:', err);
            alert('Error deleting contact');
        }
    };

    const handleDownloadCSV = () => {
        if (!contact.length) {
            alert("No data to download.");
            return;
        }

        const headers = ["Name", "Email", "Phone", "Subject", "Message", "Created At"];
        const rows = contact.map(app => [
            `"${app.name}"`,
            `"${app.email}"`,
            `"${app.phone}"`,
            `"${app.subject}"`,
            `"${app.message || ''}"`,
            `"${new Date(app.created_at).toLocaleString()}"`
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(row => row.join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "contact.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contact Queries" />
            <div className="overflow-x-auto rounded shadow-md bg-white p-4">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-lg font-semibold text-blue-500'>Contact Queries</h2>
                    <button
                        onClick={handleDownloadCSV}
                        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                        Download CSV
                    </button>
                </div>
                <table className="min-w-full table-auto divide-y divide-gray-200 text-sm">
                    <thead className="bg-blue-50">
                        <tr>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">#</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Name</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Email</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Phone</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Subject</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Message</th>
                            <th className="px-2 py-2 text-center font-bold text-blue-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                        {
                            loading ? (
                                <div className="flex justify-center items-center py-6">
                                    <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                </div>
                            ) : contact.length === 0 ? (
                                <tr>
                                    <div className="text-gray-500 py-4 flex justify-self-center">Data No found.</div>
                                </tr>
                            ) : (
                                contact.map((item, i) => (
                                    <tr key={item.id} className="hover:bg-blue-50 transition-all">
                                        <td className="px-2 py-2 font-semibold text-blue-600">{i + 1}</td>
                                        <td className="px-2 py-2">{item.name || 'N/A'}</td>
                                        <td className="px-2 py-2">{item.email || 'N/A'}</td>
                                        <td className="px-2 py-2">{item.phone || 'N/A'}</td>
                                        <td className="px-2 py-2 w-1/4">{item.subject || 'N/A'}</td>
                                        <td className="px-2 py-2 w-1/4">{item.message || 'N/A'}</td>
                                        <td className="px-2 py-2 text-center space-x-2">
                                            <button
                                                onClick={() => deleteContact(item.id)}
                                                className="inline-flex items-center text-red-600 hover:bg-red-700 hover:text-white px-2 py-1 rounded text-sm transition"
                                            >
                                                <Trash2 className="w-5 h-5 text-red-600 hover:text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )
                        }

                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
