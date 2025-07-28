import devURL from '@/pages/constent/devURL';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function JobForm() {

    const [resumeFileName, setResumeFileName] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            const file = files[0];
            setFormData(prev => ({ ...prev, [name]: file }));
            setResumeFileName(file.name);
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleApplicationSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('position', formData.position);
        data.append('message', formData.message);
        if (formData.resume) {
            data.append('resume', formData.resume);
        }

        try {
            const res = await axios.post('http://emarketplace.progatetechnology.com/api/job-application', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Swal.fire({
                icon: 'success',
                title: 'Submitted!',
                text: res.data.message || 'Application submitted successfully!',
                timer: 3000,
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                position: '',
                resume: null,
                message: '',
            });
            setResumeFileName('');
        } catch (error) {
            console.error("❌ Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response?.data?.message || "Submission failed.",
                timer: 3000,
            });
        } finally {
            setLoading(false);
        }
    };



    return (
        <div>
            <form onSubmit={handleApplicationSubmit} className="space-y-5">
                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b px-4 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-600"
                />
                <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b px-4 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-600"
                />
                <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-b px-4 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-600"
                />

                <label className="block text-sm font-medium text-gray-600 mb-1">Position</label>
                <input
                    type="text" // Optional: change from "tel" to "text"
                    name="position" // ✅ Corrected name
                    placeholder="Position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full border-b px-4 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-600"
                />

                <label className="bg-white text-slate-500 font-semibold text-base rounded max-w-md h-22 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-3 fill-gray-500">
                        <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
                        <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
                    </svg>
                    Upload file
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="hidden"
                    />
                    {resumeFileName && (
                        <p className="text-center text-blue-600 font-semibold mt-2">{resumeFileName}</p>
                    )}
                    <p className="text-xs font-medium text-slate-400 mt-1">PDF, DOC, DOCX allowed.</p>
                </label>

                <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                <textarea
                    name="message"
                    placeholder="Your Message / Cover Letter"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b px-4 py-2 rounded shadow-sm"
                ></textarea>

                <button
                    disabled={loading}
                    type="submit"
                    className="bg-blue-700 text-white w-full py-3 rounded font-semibold hover:bg-blue-800 transition"
                >
                    {loading ? "Submitting..." : "Submit Application"}
                </button>
            </form>
        </div>
    )
}

export default JobForm
