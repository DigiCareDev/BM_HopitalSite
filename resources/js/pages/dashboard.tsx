import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import DonationGraphic from './admin/components/dontaion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import devURL from './constent/devURL';
import { Users, Calendar, MessageCircle, Heart, Mail, Briefcase } from 'lucide-react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const Data = {
    "Message": true,
    "message": "Dashboard data fetched successfully",
    "data": {
        "appointments": [
            { "day": "Monday", "count": 6 },
            { "day": "Tuesday", "count": 9 },
            { "day": "Wednesday", "count": 4 },
            { "day": "Thursday", "count": 7 },
            { "day": "Friday", "count": 5 },
            { "day": "Saturday", "count": 3 },
            { "day": "Sunday", "count": 2 }
        ],
        "donations": [
            { "month": "January", "amount": 4500 },
            { "month": "February", "amount": 3700 },
            { "month": "March", "amount": 6100 },
            { "month": "April", "amount": 2900 },
            { "month": "May", "amount": 5100 },
            { "month": "June", "amount": 4200 }
        ]
    }
}

export default function Dashboard() {

    const [appointments, setAppointment] = useState([]);
    const [loadingAppointment, setLoadingAppointment] = useState(true);
    const [dontionContact, setDonationContact] = useState([]);
    const [lodingdontionContact, setLoadingDonationContact] = useState(true);
    const [dontion, setDonation] = useState([]);
    const [lodingdontion, setLoadingDonation] = useState(true);
    const [contact, setContact] = useState([]);
    const [lodingContact, setLoadingContact] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [lodingFeedback, setLoadingFeedback] = useState(true);
    const [enquiries, setEnquiries] = useState([]);
    const [lodingEnquiries, setLoadingEnquiries] = useState(true);
    const [jobApplications, setJobApplications] = useState([]);
    const [loadingJobApplications, setLoadingJobApplications] = useState(true);


    useEffect(() => {
        axios.get('http://emarketplace.progatetechnology.com/api/appointments')
        // axios.get('http://localhost:8000/api/appointments ')
            .then(res => {
                const firstFive = res.data.slice(0, 5);
                setAppointment(res.data);
                setLoadingAppointment(false);
            })
            .then(err => {
                console.log('fail to fetch', err)
                setLoadingAppointment(false);
            });
        // ================Donation contact 1============
        axios.get('http://emarketplace.progatetechnology.com/api/contact')
        //   axios.get('http://localhost:8000/api/contact')
            .then(res => {
                const firstFive = res.data.slice(0, 5);
                setDonationContact(res.data);
                setLoadingDonationContact(false);
            })
            .then(err => {
                console.log('fail to fetch', err);
                setLoadingAppointment(false);
            });
        // ================ Contact 2============
        axios.get('http://emarketplace.progatetechnology.com/api/contactdata')
        //  axios.get('http://localhost:8000/api/contactdata')
            .then(res => {
                const firstFive = res.data.slice(0, 5);
                setContact(res.data);
                setLoadingContact(false);
            })
            .then(err => {
                console.log('fail to fetch', err);
                setLoadingContact(false);
            });
        // ================ Contact 3============
        axios.get('http://emarketplace.progatetechnology.com/api/feedback')
        //  axios.get('http://localhost:8000/api/feedback')
            .then(res => {
                const firstFive = res.data.slice(0, 5);
                setFeedback(res.data);
                setLoadingFeedback(false);
            })
            .then(err => {
                console.log('fail to fetch', err);
                setLoadingFeedback(false);
            });
        // ================ Contact 4============
        axios.get('http://emarketplace.progatetechnology.com/api/enquiries')
        // axios.get('http://localhost:8000/api/enquiries')
            .then(res => {
                const firstFive = res.data.slice(0, 5);
                setEnquiries(res.data);
                setLoadingEnquiries(false);
            })
            .then(err => {
                console.log('fail to fetch', err);
                setLoadingEnquiries(false);
            });
        // ================ Contact 4============
        axios.get('http://emarketplace.progatetechnology.com/api/donations')
        // axios.get('http://localhost:8000/api/donations')
            .then(res => {
                const firstFive = res.data.slice(0, 5);
                setDonation(res.data);
                setLoadingDonation(false);
            })
            .then(err => {
                console.log('fail to fetch', err);
                setLoadingDonation(false);
            });
        // ================ Contact 5============
       axios.get('http://emarketplace.progatetechnology.com/api/job-application')
        //   axios.get('http://localhost:8000/api/job-application')
        .then(res => {
            setJobApplications(res.data?.data || []);  // assuming `data` is under `res.data.data`
        })
        .catch(err => {
            console.error('❌ Failed to fetch job applications:', err);
        })
        .finally(() => {
            setLoadingJobApplications(false);
        });
    }, []);

    console.log('jobApplications=======', jobApplications);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Dashboard" />
            <div className="min-h-screen bg-gray-100 p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">

                    <div className="bg-white shadow rounded-lg p-5 flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-gray-500 text-sm font-medium">Appointments</h2>
                            <p className="text-2xl font-bold text-blue-600">{loadingAppointment ? 'Loading...' : appointments.length || 'N/A'}</p>
                        </div>
                        <Calendar className="text-green-500 w-6 h-6" />
                    </div>

                    <div className="bg-white shadow rounded-lg p-5 flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-gray-500 text-sm font-medium">Feedback</h2>
                            <p className="text-2xl font-bold text-red-600">{lodingFeedback ? 'Loading...' : feedback.length || 'N/A'}</p>
                        </div>
                        <MessageCircle className="text-red-500 w-6 h-6" />
                    </div>

                    <div className="bg-white shadow rounded-lg p-5 flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-gray-500 text-sm font-medium">Contact Queries</h2>
                            <p className="text-2xl font-bold text-purple-600">{lodingContact ? 'Loading...' : contact.length || 'N/A'}</p>
                        </div>
                        <Mail className="text-purple-500 w-6 h-6" />
                    </div>

                    <div className="bg-white shadow rounded-lg p-5 flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-gray-500 text-sm font-medium">Job Applications</h2>
                            <p className="text-2xl font-bold text-pink-600">  {loadingJobApplications ? 'Loading...' : jobApplications.length || 'N/A'}</p>
                        </div>
                      <Briefcase className="text-blue-500 w-6 h-6" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                    {/* Stat Cards */}

                    <div className="bg-white shadow rounded-lg p-5 flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-gray-500 text-sm font-medium">Appointments</h2>
                            <p className="text-2xl font-bold text-blue-600">{loadingAppointment ? 'Loading...' : appointments.length || 'N/A'}</p>
                        </div>
                        <Calendar className="text-green-500 w-6 h-6" />
                    </div>

                    <div className="bg-white shadow rounded-lg p-5 flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-gray-500 text-sm font-medium">Donations</h2>
                            <p className="text-2xl font-bold text-pink-600">{lodingdontion ? 'Loading...' : dontion.length || 'N/A'}</p>
                        </div>
                        <Heart className="text-pink-500 w-6 h-6" />
                    </div>

                    <div className="bg-white shadow rounded-lg p-5 flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-gray-500 text-sm font-medium">Donations queries</h2>
                            <p className="text-2xl font-bold text-pink-600">{lodingEnquiries ? 'Loading...' : enquiries.length || 'N/A'}</p>
                        </div>
                        <Users className="text-blue-500 w-6 h-6" />
                    </div>

                </div>

                <div className='grid grid-cols-1 mb-5'>
                    <DonationGraphic Data={Data} />
                </div>

                <div className="bg-white rounded-lg shadow p-4 mb-2">

                    <div className='flex justify-between items-center'>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Recent Appointments</h2>
                        <a href="/appointment-manage" className="text-blue-700 font-bold mb-2 underline">More querise→</a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">#</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Name</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">department</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">time</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Date</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Email</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Phone</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Message</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm">
                                {loadingAppointment ? (
                                    <div className="flex justify-center items-center py-6">
                                        <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                        </svg>
                                        <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                    </div>
                                ) : appointments.length === 0 ? (
                                    <div className='bg-white text-blue-600'>Data not found</div>
                                ) : (
                                    appointments.map((item, i) => (
                                        <tr key={i} className='text-gray-800'>
                                            <td className="px-2 py-1 font-medium text-gray-800">{i + 1 || 'sr.no'}</td>
                                            <td className="px-2 py-1">{item.name || 'name'}</td>
                                            <td className="px-2 py-1 text-blue-600 font-medium">{item.department || 'N/A'}</td>
                                            <td className="px-2 py-1">{item.time || 'N/A'}</td>
                                            <td className="px-2 py-1 text-blue-600 font-medium">{item.date || 'N/A'}</td>
                                            <td className="px-2 py-1">{item.email || 'N/A'}</td>
                                            <td className="px-2 py-1 text-blue-600 font-medium">{item.phone || 'N/A'}</td>
                                            <td className="px-2 py-1  w-1/4">{item.note || 'N/A'}</td>
                                        </tr>
                                    ))
                                )} ;
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 mb-2">
                    <div className='flex justify-between items-center'>
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">Recent Donations</h2>
                        <a href="/donation-manage" className="text-blue-700 font-bold mb-2 underline">More querise→</a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">#</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Name</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Phone</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Email</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Address</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Country</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Amount</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Date</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Interest</th>
                                    <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Message</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm">
                                {lodingdontion ? (
                                    <div className="flex justify-center items-center py-6">
                                        <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                        </svg>
                                        <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                    </div>
                                ) : dontion.length === 0 ? (
                                    <div className='bg-white text-blue-600'>Data not found</div>
                                ) : (
                                    dontion.map((item, i) => (
                                        <tr key={i} className='text-gray-800'>
                                            <td className="px-2 py-1 font-medium text-gray-800">{i + 1 || 'sr.no'}</td>
                                            <td className="px-2 py-1">{item.fullName || 'name'}</td>
                                            <td className="px-2 py-1 text-blue-600 font-medium">{item.phone || 'N/A'}</td>
                                            <td className="px-2 py-1 text-blue-600 font-medium">{item.email || 'N/A'}</td>
                                            <td className="px-2 py-1">{item.address || 'N/A'}</td>
                                            <td className="px-2 py-1 text-blue-600 font-medium">{item.country || 'N/A'}</td>
                                            <td className="px-2 py-1 text-blue-600 font-medium">{item.currency || 'N/A'} {item.amount || 'N/A'}</td>
                                            <td className="px-2 py-1 text-blue-600 font-medium">{item.date || 'N/A'}</td>
                                            <td className="px-2 py-1">{item.interest || 'N/A'}</td>
                                            <td className="px-2 py-1 w-1/4">{item.message || 'N/A'}</td>
                                        </tr>
                                    ))
                                )} ;
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Table Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-3'>

                    <div className="bg-white rounded-lg shadow p-4">

                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Recent Quick enquiries queries</h2>
                            <a href="/quick-enquiry-manage" className="text-blue-700 font-bold mb-2 underline">More querise→</a>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">#</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Name</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Email</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Date</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm">
                                    {lodingFeedback ? (
                                        <div className="flex justify-center items-center py-6">
                                            <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                            </svg>
                                            <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                        </div>
                                    ) : feedback.length === 0 ? (
                                        <div className='bg-white text-blue-600'>Data not found</div>
                                    ) : (
                                        feedback.map((rohit, sev) => (
                                            <tr key={sev} className='text-gray-800'>
                                                <td className="px-2 py-1 font-medium text-gray-800">{sev + 1}</td>
                                                <td className="px-2 py-1">{rohit.name}</td>
                                                <td className="px-2 py-1">{rohit.email}</td>
                                                <td className="px-2 py-1">{rohit.phone}</td>
                                                <td className="px-2 py-1 text-blue-600 font-semibold  w-1/3">{rohit.message}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">

                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Recent Feedback queries</h2>
                            <a href="/feedback-manage" className="text-blue-700 font-bold mb-2 underline">More querise→</a>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">#</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Name</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Email</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Date</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm">
                                    {lodingEnquiries ? (
                                        <div className="flex justify-center items-center py-6">
                                            <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                            </svg>
                                            <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                        </div>
                                    ) : enquiries.length === 0 ? (
                                        <div className='bg-white text-blue-600'>Data not found</div>
                                    ) : (
                                        enquiries.map((rohit, sev) => (
                                            <tr key={sev} className='text-gray-800'>
                                                <td className="px-2 py-1 font-medium text-gray-800">{sev + 1}</td>
                                                <td className="px-2 py-1">{rohit.name}</td>
                                                <td className="px-2 py-1">{rohit.email}</td>
                                                <td className="px-2 py-1">{rohit.phone}</td>
                                                <td className="px-2 py-1 text-blue-600 font-semibold w-1/3">{rohit.message}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-3'>

                    <div className="bg-white rounded-lg shadow p-4">

                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Recent Donation contact queries</h2>
                            <a href="/donation-contact" className="text-blue-700 font-bold mb-2 underline">More querise→</a>
                        </div>


                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">#</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Name</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Email</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Date</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm">
                                    {lodingdontionContact ? (
                                        <div className="flex justify-center items-center py-6">
                                            <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                            </svg>
                                            <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                        </div>
                                    ) : dontionContact.length === 0 ? (
                                        <div>
                                            <div className="text-center text-gray-500 py-4">No appointments found.</div>
                                        </div>
                                    ) : (
                                        dontionContact.map((item, i) => (
                                            <tr key={i} className='text-gray-800'>
                                                <td className="px-2 py-1 font-medium text-gray-800">{i + 1}</td>
                                                <td className="px-2 py-1">{item.name}</td>
                                                <td className="px-2 py-1">{item.email}</td>
                                                <td className="px-2 py-1">{item.phone}</td>
                                                <td className="px-2 py-1 text-blue-600 font-semibold w-1/3">{item.message}</td>
                                            </tr>))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Recent contact queries</h2>
                            <a href="/contact-manage" className="text-blue-700 font-bold mb-2 underline">More querise→</a>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">#</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Name</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Email</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Date</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Suject</th>
                                        <th className="text-left px-2 py-1 text-sm font-medium text-gray-500">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm">
                                    {lodingContact ? (
                                        <div className="flex justify-center items-center py-6">
                                            <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                            </svg>
                                            <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                        </div>
                                    ) : contact.length === 0 ? (
                                        <div>
                                            <div className="text-center text-gray-500 py-4">No appointments found.</div>
                                        </div>
                                    ) : (
                                        contact.map((item, i) => (
                                            <tr key={i} className='text-gray-800'>
                                                <td className="px-2 py-1 font-medium text-gray-800">{i + 1}</td>
                                                <td className="px-2 py-1">{item.name}</td>
                                                <td className="px-2 py-1">{item.email}</td>
                                                <td className="px-2 py-1">{item.phone}</td>
                                                <td className="px-2 py-1 w-1/4">{item.subject}</td>
                                                <td className="px-2 py-1 text-blue-600 font-semibold w-1/4">{item.message}</td>
                                            </tr>))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </AppLayout >
    );
}
