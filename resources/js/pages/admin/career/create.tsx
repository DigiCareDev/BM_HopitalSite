import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Career Posts > Add New Post',
        href: '/contact-page',
    },
];

export default function Create() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        deadline: '',
        location: '',
        jobType: 'Full-time',
        description: '',
        requirements: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', form.title);
            formDataToSend.append('deadline', form.deadline);
            formDataToSend.append('location', form.location);
            formDataToSend.append('job_type', form.jobType);
            formDataToSend.append('description', form.description);
            formDataToSend.append('requirements', form.requirements);

            // Append multiple images
            for (let i = 0; i < images.length; i++) {
                formDataToSend.append('images[]', images[i]);
            }

            const response = await fetch('http://emarketplace.progatetechnology.com/api/jobs', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();

            if (response.ok) {
                alert('Job posted successfully!');
                // reset form or redirect
            } else {
                alert(data.message || 'Something went wrong');
            }
        } catch (error) {
            alert('Error submitting form');
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
                            value={form.jobType}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        >
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
                    <textarea
                        name="requirements"
                        value={form.requirements}
                        onChange={handleChange}
                        rows="3"
                        placeholder='Enter job requirements'
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

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
                    {images.length > 0 && (
                        <div className="mt-2">
                            {images.map((image, index) => (
                                <div key={index} className="flex items-center">
                                    <img src={URL.createObjectURL(image)} alt={`Uploaded Preview ${index}`} className="w-16 h-16 object-cover rounded mr-2" />
                                    <span className="text-sm">{image.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? 'Posting...' : 'Post Job'}
                    </button>
                </div>
            </form>
        </AppLayout>
    )
};
