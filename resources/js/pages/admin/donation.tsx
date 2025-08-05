
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import devURL from '../constent/devURL';
import { Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Donation',
        href: '/donation-page',
    },
];

export default function Donation() {

    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('http://emarketplace.progatetechnology.com/api/donations')
        // fetch('http://localhost:8000/api/donations')
        fetch(`${devURL}/api/donations`)
            .then(res => res.json())
            .then(data => {
                setDonations(data);
                setLoading(false);
            })
            .catch(err => console.error('failed to fetch', err))
    }, [])

    const deleteContact = async (id) => {
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
            // const res = await fetch(`http://emarketplace.progatetechnology.com/api/donations/${id}`, {
             const res = await fetch(`${devURL}/api/donations/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setDonations(prev => prev.filter(donations => donations.id !== id));
                Swal.fire({
                                title: 'Deleted!',
                                text: res.message || 'Donation query deleted  successfully!',
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

    const handleDownloadCSV = () => {
        if (!donations.length) {
            Swal.fire("No data to download.");
            return;
        }

        const headers = [
            "Full Name",
            "Email",
            "Phone",
            "Address",
            "Country",
            "Currency",
            "Amount",
            "Interest",
            "Date",
            "Message",
            "Created At"
        ];

        const escapeCSV = (value) => {
            if (typeof value !== 'string') value = String(value ?? '');
            return `"${value.replace(/"/g, '""')}"`; // Escape quotes
        };

        const rows = donations.map(donation => [
            escapeCSV(donation.fullName),
            escapeCSV(donation.email),
            escapeCSV(donation.phone),
            escapeCSV(donation.address),
            escapeCSV(donation.country),
            escapeCSV(donation.currency),
            escapeCSV(donation.amount),
            escapeCSV(donation.interest),
            escapeCSV(donation.date),
            escapeCSV(donation.message),
            escapeCSV(new Date(donation.created_at).toLocaleString()),
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(row => row.join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "donations.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Donation queries" />
            <div className="overflow-x-auto rounded shadow-md bg-white p-4">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-lg font-semibold text-blue-500'>Donation Queries</h2>
                    <button onClick={handleDownloadCSV} className="bg-green-600 text-white px-4 py-2 rounded">
                        Download 
                    </button>
                </div>
                <table className="min-w-full table-auto divide-y divide-gray-200 text-sm">
                    <thead className="bg-blue-50">
                        <tr>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">#</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Name</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Email</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Phone</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900"> country</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">amount</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">interest</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">date</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Message</th>
                            <th className="px-2 py-2 text-center font-bold text-blue-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                        {loading ?
                            (
                                <div className="flex justify-center items-center py-6">
                                    <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                </div>
                            ) : donations.length === 0 ? (
                                <tr>
                                    <td className="text-center text-gray-500 py-4">No appointments found.</td>
                                </tr>
                            ) : (
                                donations.map((item, i) => (
                                    <tr key={item.id} className="hover:bg-blue-50 transition-all">
                                        <td className="px-2 py-2 font-semibold text-blue-600">{i + 1}</td>
                                        <td className="px-2 py-2">{item.fullName || 'N/A'}</td>
                                        <td className="px-2 py-2">{item.email || 'N/A'}</td>
                                        <td className="px-2 py-2">{item.phone || 'N/A'}</td>
                                        <td className="px-2 py-2">{item.country || 'N/A'}</td>
                                        <td className="px-2 py-2">{item.currency || 'N/A'} {item.amount || 'N/A'}</td>
                                        <td className="px-2 py-2">{item.interest || 'N/A'}</td>
                                        <td className="px-2 py-2">{item.date || 'N/A'}</td>
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
                            )}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    )
}
