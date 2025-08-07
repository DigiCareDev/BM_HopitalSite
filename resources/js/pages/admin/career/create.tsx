import CKEditorComponent from '@/components/CKEditorClassic';
import AppLayout from '@/layouts/app-layout';
import devURL from '@/pages/constent/devURL';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Career Posts > Add New Post',
        href: '/contact-page',
    },
];

export default function Create() {

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        deadline: '',
        location: '',
        job_type: '',
        description: '',
        requirements: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setForm((prev) => ({ ...prev, image: file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', form.title);
            formDataToSend.append('deadline', form.deadline);
            formDataToSend.append('location', form.location);
            formDataToSend.append('job_type', form.job_type);
            formDataToSend.append('description', form.description);
            formDataToSend.append('requirements', form.requirements);
            formDataToSend.append('image', form.image);


            // const response = await fetch('http://localhost:8000/api/jobs', {
             const response = await fetch(`${devURL}/api/jobs`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formDataToSend,
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: 'Posted!',
                    text: 'Job posted successfully!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
            } else {
                Swal.fire(data.message || 'Something went wrong');
            }
        } catch (error) {
            Swal.fire('Error submitting form: ' + error.message);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Career Post" />
            <form onSubmit={handleSubmit} className="min-h-screen space-y-4 bg-white text-blue-700 p-6 shadow">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                        <label className="block mb-1 font-medium">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            required
                            placeholder='Enter job title'
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Application Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={form.deadline}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                        <label className="block mb-1 font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            required
                            placeholder='Enter job location'
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Job Type</label>
                        <select
                            name="job_type"
                            value={form.job_type}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option>Select option</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder='Enter job description'
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Requirements</label>
                    <CKEditorComponent
                        value={form.requirements}
                        onChange={(value) => setForm({ ...form, requirements: value })}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                        <label className="block mb-1 font-medium">Upload Images</label>
                        <input
                            type="file"
                            name="images"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            className="w-full border rounded px-3 py-2"
                        />
                        {form.image ? (
                            <img src={URL.createObjectURL(form.image)} alt="Preview" className='h-30 mt-2' />
                        ) : null}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            required
                            placeholder='Enter job location'
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Posting...' : 'Post Job'}
                    </button>
                </div>
            </form>
        </AppLayout >
    )
};
