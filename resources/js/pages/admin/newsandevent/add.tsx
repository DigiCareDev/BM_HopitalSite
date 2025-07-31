import React, { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import devURL from '@/pages/constent/devURL';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'News and Event manage > add',
        href: '/news-and-event-manage',
    },
];


function Add() {
    const [form, setForm] = useState({
        title: '',
        category: '',
        date: '',
        description: '',
        image: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setForm((prev) => ({ ...prev, image: file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('category', form.category);
        formData.append('description', form.description);  
        formData.append('image', form.image);

        try {
            // const response = await fetch(`${devURL}/api/news-events`, {
            const response = await fetch('http://emarketplace.progatetechnology.com/api/news-events', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || 'News/Event added successfully!');
                // Reset form if needed
                setForm({ title: '', category: '', description: '', image: null });
            } else {
                alert(data.message || 'Failed to add News/Event.');
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert('An error occurred. Please try again.');
        }
    };



    return (
        <div>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="News and Event manage" />
                <div className="bg-white p-6 min-h-screen shadow-md w-full  mx-auto">
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
                            <label className="block mb-1 font-medium">Description</label>
                              <QuillEditor value={form.description} onChange={(value) => setForm({ ...form, description: value })} />
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
                            />{form.image ? (
                                <img src={URL.createObjectURL(form.image)} alt="Preview" className='h-50' />
                            ) : null}
                        </div>

                        {/* Submit */}
                        <div className="col-span-2">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
                            >
                                Add News/Event
                            </button>
                        </div>
                    </form>
                </div>


            </AppLayout>
        </div>
    )
}

export default Add 
