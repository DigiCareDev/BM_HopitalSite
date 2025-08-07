import React, { useEffect, useState } from 'react';
import CKEditorComponent from '@/components/CKEditorClassic';
import axios from 'axios';
import Swal from 'sweetalert2';
import devURL from '@/pages/constent/devURL';


const Edit = ({ selectCareer, onClose, onSuccess }) => {


    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        deadline: '',
        location: '',
        job_type: '',
        description: '',
        requirements: '',
        image: null,
    });

    useEffect(() => {
        if (selectCareer) {
            setForm({
                title: selectCareer.title,
                deadline: selectCareer.deadline,
                location: selectCareer.location,
                job_type: selectCareer.job_type,
                description: selectCareer.description,
                requirements: selectCareer.requirements,
                image: null,
            });
        }
    }, [selectCareer]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setForm(prev => ({
            ...prev,
            image: e.target.files[0]
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('title', form.title);
            formData.append('deadline', form.deadline);
            formData.append('location', form.location);
            formData.append('job_type', form.job_type);
            formData.append('description', form.description);
            formData.append('requirements', form.requirements);
            if (form.image) {
                formData.append('image', form.image);
            }
            formData.append('_method', 'PUT'); // spoofing PUT

            // const response = await fetch(`http://localhost:8000/api/jobs/${selectCareer.id}`, {
             const response = await fetch(`${devURL}/api/jobs/${selectCareer.id}`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`Server error: ${response.status} - ${errText}`);
            }

            Swal.fire({
                title: 'Updated!',
                text: 'Job updated successfully!',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
            });
            onSuccess?.();
        } catch (err) {
            console.error('handleSubmit error:', err);
            Swal.fire('Failed to update job.');
        } finally {
            setLoading(false);
        }
    };



    if (!selectCareer) return null;

    return (
        <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative border-2 border-blue-700">
                <button onClick={onClose} className="absolute top-3 right-4 text-red-600 text-xl font-bold">Close</button>
                <div>
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
                                {selectCareer.image && !form.image && (
                                    <img
                                        src={`${devURL}/storage/${selectCareer.image}`}
                                        alt="Current"
                                        className="mt-2 h-40 object-cover rounded"
                                    />
                                )}
                                {form.image ? (
                                    <img src={URL.createObjectURL(form.image)} alt="Preview" className='h-30 mt-2' />
                                ) : null}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Posting...' : 'Update  job'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Edit
