import React, { useState, useEffect } from 'react';
import CKEditorComponent from '../../../components/CKEditorManual';
import { useForm } from '@inertiajs/react';

const EditBlogForm = ({ selectedBlog, onClose, onSuccess }) => {

    const { data, setData, post, progress, processing, errors } = useForm({
        title: selectedBlog.title || '',
        subtitle: selectedBlog.subtitle || '',
        author: selectedBlog.author || '',
        tags: selectedBlog.tags || '',
        description: selectedBlog.description || '',
        image: null,
        _method: 'put',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('blogs.update', selectedBlog.id));
    };


    // const [form, setForm] = useState({
    //     title: '',
    //     subtitle: '',
    //     author: '',
    //     tags: '',
    //     description: '',
    //     image: null,
    // });

    // useEffect(() => {
    //     if (selectedBlog) {
    //         setForm({
    //             title: selectedBlog.title,
    //             subtitle: selectedBlog.subtitle,
    //             author: selectedBlog.author,
    //             tags: selectedBlog.tags,
    //             description: selectedBlog.description,
    //             image: null,
    //         });
    //     }
    // }, [selectedBlog]);

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setForm((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         setForm(prev => ({ ...prev, image: file }));
    //     }
    // };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append("title", form.title);
    //     formData.append("subtitle", form.subtitle);
    //     formData.append("author", form.author);
    //     formData.append("tags", form.tags);
    //     formData.append("description", form.description);

    //     if (form.image) {
    //         formData.append("image", form.image);
    //     }

    //     formData.append("_method", "PUT");

    //     try {
    //         const response = await fetch(`http://localhost:8000/api/blogs/${selectedBlog.id}`, {
    //             method: 'POST',
    //             body: formData,
    //             credentials: 'include', 
    //         });

    //         console.log('response===', response)

    //         if (response.ok) {
    //             alert('Job updated successfully!');
    //             onSuccess?.();
    //         }else {
    //             console.error('somthing worng' , error);
    //         }
    //     } catch (err) {
    //         console.error("Error updating blog:", err);
    //         alert('Failed to update job.');
    //     }
    // };




    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="max-w-4xl mx-auto p-6 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>

            <div className="mb-4">
                <label>Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className="w-full border p-2 rounded"
                />
                {errors.title && <div className="text-red-500">{errors.title}</div>}
            </div>

            <div className="mb-4">
                <label>Subtitle</label>
                <input
                    type="text"
                    value={data.subtitle}
                    onChange={(e) => setData('subtitle', e.target.value)}
                    className="w-full border p-2 rounded"
                />
                {errors.subtitle && <div className="text-red-500">{errors.subtitle}</div>}
            </div>

            <div className="mb-4">
                <label>Author</label>
                <input
                    type="text"
                    value={data.author}
                    onChange={(e) => setData('author', e.target.value)}
                    className="w-full border p-2 rounded"
                />
                {errors.author && <div className="text-red-500">{errors.author}</div>}
            </div>

            <div className="mb-4">
                <label>Tags</label>
                <input
                    type="text"
                    value={data.tags}
                    onChange={(e) => setData('tags', e.target.value)}
                    className="w-full border p-2 rounded"
                />
                {errors.tags && <div className="text-red-500">{errors.tags}</div>}
            </div>

            <div className="mb-4">
                <label>Description</label>
                <CKEditorComponent
                    value={data.description}
                    onChange={(value) => setData('description', value)}
                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded px-3 py-2"
                />
                {errors.description && <div className="text-red-500">{errors.description}</div>}
            </div>


            <div className="mb-4">
                <label>Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setData('image', e.target.files[0])}
                />
                {selectedBlog.image && !data.image && (
                    <img
                        src={`/storage/${selectedBlog.image}`}
                        alt="Current"
                        className="mt-2 h-40 object-cover rounded"
                    />
                )}
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    {processing ? 'Updating...' : 'Update Blog'}
                </button>
            </div>

            {progress && (
                <div className="mt-2">
                    Uploading: {progress.percentage}%
                </div>
            )}
        </form>
    );
};

export default EditBlogForm;
