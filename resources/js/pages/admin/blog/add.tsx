import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import CKEditorComponent from '@/components/CKEditorManual';
import { useState } from 'react';
import Swal from 'sweetalert2';
import devURL from '@/pages/constent/devURL';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blog',
        href: '/blog-page',
    },
];

export default function AddBlog() {

    const [form, setForm] = useState({
        title: '',
        subtitle: '',
        author: '',
        tags: '',
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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('subtitle', form.subtitle);
        formData.append('author', form.author);
        formData.append('tags', form.tags);
        formData.append('description', form.description);
        if (form.image) {
            formData.append('image', form.image);
        }

        try {
            // const response = await fetch('http://localhost:8000/api/blogs', {
            const response = await fetch(`${devURL}/api/blogs`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: 'Added!',
                    text: 'Blog added successfully!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                // Reset form or redirect
            } else {
                Swal.fire('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire('Something went wrong.');
        }
    };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="blog" />
            <div>
                <div className="bg-white min-h-screen text-blue-600 shadow p-6 border border-gray-200">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleInputChange}
                                placeholder="Enter blog title"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Subtitle</label>
                            <input
                                type="text"
                                name="subtitle"
                                value={form.subtitle}
                                onChange={handleInputChange}
                                placeholder="Enter blog subtitle"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Author</label>
                            <input
                                type="text"
                                name="author"
                                value={form.author}
                                onChange={handleInputChange}
                                placeholder="Author name"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Tags</label>
                            <input
                                type="text"
                                name="tags"
                                value={form.tags}
                                onChange={handleInputChange}
                                placeholder="Enter tags (comma separated)"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium">Description</label>
                            <CKEditorComponent
                                value={form.description}
                                onChange={(value) => setForm({ ...form, description: value })}
                                className="block w-full text-sm text-gray-700 border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium">Upload Image</label>
                            <input
                                type="file"
                                name='image'
                                accept="image/*"
                                onChange={handleImageChange}
                                className="block mt-1 border border-gray-300 rounded w-[220px] p-2"
                            />{form.image ? (
                                <img src={URL.createObjectURL(form.image)} alt="Preview" className='h-50' />
                            ) : null}
                        </div>
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                            >
                                Add Blog
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}
