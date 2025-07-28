import React, { useEffect, useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import devURL from '../constent/devURL';
import { Trash2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Career',
        href: '/job-manage',
    },
];

function Job() {

    const [applications, setApplications] = useState([]);
    const [loadingApplications, setLoadingApplications] = useState(true);

    useEffect(() => {
        axios.get(`${devURL}/api/job-application`)
            .then(res => {
                setApplications(res.data?.data || []);
            })
            .catch(err => {
                console.error('❌ Failed to fetch job applications:', err);
            })
            .finally(() => {
                setLoadingApplications(false);
            });
    }, []);

    const deleteContact = async (id) => {
        if (!window.confirm('Are you sure you want to delete this application?')) return;

        try {
            const res = await axios.delete(`${devURL}/api/job-application/${id}`);

            if (res.status === 200) {
                setApplications(prev => prev.filter(app => app.id !== id));
                alert(res.data.message || 'Deleted successfully');
            } else {
                alert('Failed to delete: ' + res.data.message);
            }
        } catch (err) {
            console.error('❌ Delete failed:', err);
            alert('Error deleting application');
        }
    };

    const handleDownloadCSV = () => {
        if (!applications.length) {
            alert("No data to download.");
            return;
        }

        const headers = ["Name", "Email", "Phone", "Position", "Message", "Resume Link", "Created At"];

        const escapeCSV = (value) => {
            if (typeof value !== 'string') value = String(value ?? '');
            return `"${value.replace(/"/g, '""')}"`; // escape internal quotes
        };

        const rows = applications.map(app => {
            const resumeURL = app.resume_path
                ? `${devURL}/storage/${app.resume_path}`
                : '';

            return [
                escapeCSV(app.name),
                escapeCSV(app.email),
                escapeCSV(app.phone),
                escapeCSV(app.position),
                escapeCSV(app.message || ''),
                escapeCSV(resumeURL), // ✅ FULL CV link
                escapeCSV(new Date(app.created_at).toLocaleString()),
            ];
        });

        const csvContent = [
            headers.join(","),         // Header row
            ...rows.map(row => row.join(",")) // Data rows
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "job_applications.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Job Applications" />
            <div className="overflow-x-auto rounded shadow-md bg-white p-4">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-lg font-semibold text-blue-500'>Job Applications Queries</h2>
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
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Resume</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Name</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Email</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Phone</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Position</th>
                            <th className="px-2 py-2 text-left font-bold text-blue-900">Message</th>
                            <th className="px-2 py-2 text-center font-bold text-blue-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                        {loadingApplications ? (
                            <div className="flex justify-center items-center py-6">
                                <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                </svg>
                                <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                            </div>
                        ) : applications.length === 0 ? (
                            <div>
                                <div className="text-center text-gray-500 py-4">No contact found.</div>
                            </div>
                        ) : (
                            applications.map((item, i) => (
                                <tr key={item.id} className="hover:bg-blue-50 transition-all">
                                    <td className="px-2 py-2 font-semibold text-blue-600">{i + 1}</td>
                                    <td className="px-2 py-2">
                                        {item.resume_path ? (
                                            <a
                                                href={`${devURL}/storage/${item.resume_path}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download
                                                className="flex items-center text-blue-600 hover:text-blue-800 underline"
                                            >
                                                <div className='items-center'>
                                                    <img src="https://images.vexels.com/content/140030/preview/cv-icon-340479.png" alt="cv" className='h-10 ml-2' />
                                                    Download
                                                </div>
                                            </a>
                                        ) : (
                                            'N/A'
                                        )}
                                    </td>
                                    <td className="px-2 py-2">{item.name || 'N/A'}</td>
                                    <td className="px-2 py-2">{item.email || 'N/A'}</td>
                                    <td className="px-2 py-2">{item.phone || 'N/A'}</td>
                                    <td className="px-2 py-2">{item.position || 'N/A'}</td>
                                    <td className="px-2 py-2 w-1/3">{item.message || 'N/A'}</td>
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
    );
}

export default Job
