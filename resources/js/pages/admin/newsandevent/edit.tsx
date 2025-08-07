import devURL from '@/pages/constent/devURL';
import CKEditorComponent from '@/components/CKEditorClassic';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Edit({ onSuccess, onClose, selectNewsEvent }) {

    const [form, setForm] = useState({
        title: '',
        category: '',
        description: '',
        image: null,
    })

    useEffect(() => {
        if (selectNewsEvent) {
            setForm({
                title: selectNewsEvent.title,
                category: selectNewsEvent.category,
                description: selectNewsEvent.description,
                image: null,
            })
        }

    }, [selectNewsEvent])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setForm((prev) => ({
            ...prev,
            image: file
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("category", form.category);
        formData.append("description", form.description);
        if (form.image) {
            formData.append("image", form.image);
        }

        try {
            if (id) {
                // Update operation
                await axios.post(`${devURL}/api/news-events/update/${id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                alert("Updated successfully");
            } else {
                // Create operation
                await axios.post(`${devURL}/api/news-events/create`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                alert("Created successfully");
            }

            // Reset or refresh list
            setForm({
                title: "",
                category: "",
                description: "",
                image: null
            });
        } catch (error) {
            console.error("Error saving data", error);
        }
    };

    return (
        <div>
            <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative border-2 border-blue-700">
                    <button
                        className="absolute top-3 right-4 text-red-600 text-xl font-bold"
                        onClick={onSuccess}
                    >
                        ×
                    </button>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                        {/* Title */}
                        <div className="col-span-1">
                            <label className="block mb-1 font-medium">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleInputChange}
                                placeholder="Enter title"
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                        </div>

                        {/* Category */}
                        <div className="col-span-1">
                            <label className="block mb-1 font-medium">Category</label>
                            <input
                                type="text"
                                name="category"
                                value={form.category}
                                onChange={handleInputChange}
                                placeholder="e.g. Seminar, Workshop"
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                        </div>

                        {/* Image */}

                        {/* Description - Full Width */}
                        <div className="col-span-2">
                            <label className="block mb-2 font-medium text-gray-700">Description</label>
                            <CKEditorComponent
                                value={form.description}
                                onChange={(value) => setForm({ ...form, description: value })}
                                className="block w-full text-sm text-gray-700 border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div className="mt-15">
                            <label className="block mb-1 font-medium">Upload Image</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="block w-full text-sm text-gray-700 border border-gray-300 rounded px-3 py-2"
                                required
                            />
                            {selectNewsEvent.image && !form.image && (
                                <img
                                    src={`${devURL}/storage/${selectNewsEvent.image}`}
                                    alt="Current"
                                    className="mt-2 h-40 object-cover rounded"
                                />
                            )}
                            {form.image ? (
                                <img src={URL.createObjectURL(form.image)} alt="Preview" className='h-50' />
                            ) : null}
                        </div>

                        {/* Submit */}
                        <div className="col-span-2 flex justify-between">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
                            >
                                Update
                            </button>
                            <button className='underline text-red-600 font-bold' onClick={onClose}>
                                close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
