import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import devURL from '../constent/devURL';
import { Edit, Trash2, Image, Plus } from 'lucide-react';
import Logo from '../../assets/Logo.webp'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gallery',
        href: '/gallery-manage',
    },
];

function Gallery() {
    const [editingId, setEditingId] = useState(null);
    const [editGallery, setEditGallery] = useState({
        title: '',
        category: '',
        description: '',
        image: null,
        imagePreview: '',
    });
    
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log('editGallery==', editGallery)
    useEffect(() => {
        // fetch(`${devURL}/api/gallery`)
        fetch('http://emarketplace.progatetechnology.com/api/gallery')
            .then(res => res.json())
            .then(data => {
                setGallery(data.data);
                setLoading(false);
            })
            .catch(err => console.error('Failed to fetch contacts:', err));
    }, []);

    // ==================edit contect========
    const editContact = async (id) => {
        setEditModalOpen(true);
        setEditingId(id);

        try {
            // const res = await fetch(`${devURL}/api/gallery/${id}`);
            const res = await fetch(`http://emarketplace.progatetechnology.com/api/gallery/${id}`);
            const data = await res.json();

            setEditGallery({
                title: data.title,
                category: data.category,
                description: data.description,
                image: null,
                imagePreview: `${devURL}/storage/${data.image_path}`,
            });
            
            console.log('data', editGallery)
        } catch (error) {
            console.error("❌ Failed to fetch item:", error);
            alert("Failed to load gallery item.");
        }
    };

    const handleEditChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            const file = files[0];
            setEditGallery({ ...editGallery, image: file, imagePreview: URL.createObjectURL(file) });
        } else {
            setEditGallery({ ...editGallery, [name]: value });
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', editGallery.title);
        formData.append('category', editGallery.category);
        formData.append('description', editGallery.description);
        if (editGallery.image) {
            formData.append('image', editGallery.image);
        }

        try {
            // const res = await fetch(`${devURL}/api/gallery/${editingId}`, {
             const res = await fetch(`http://emarketplace.progatetechnology.com/api/gallery/${editingId}`, {
                method: 'POST',
                body: formData
            });

            const contentType = res.headers.get("content-type");

            const responseText = await res.text();

            console.log('responseText', responseText)

            let data;
            if (contentType && contentType.includes("application/json")) {
                try {
                    data = JSON.parse(responseText);
                } catch (jsonErr) {
                    console.error("❌ Invalid JSON response", responseText);
                    alert("Server returned an unreadable JSON response.");
                    return;
                }
            } else {
                console.error("❌ Expected JSON but got:", responseText);
                alert("Unexpected server response (not JSON). Check console.");
                return;
            }

            if (res.ok) {
                alert(data.message || "Gallery updated!");
                setEditModalOpen(false); 
                        } else {
                alert("❌ Failed to update: " + (data.message || "Unknown error."));
            }
        } catch (err) {
            console.error("🌐 Network or server error:", err);
            alert("Update failed due to a network or server issue.");
        }
    };

    // ========delete contect ===============
    const deleteContact = async (id) => {
        if (!window.confirm('Are you sure you want to delete this contact?')) return;

        try {
            const res = await fetch(`${devURL}/api/gallery/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const data = await res.json();

            if (res.ok) {
                setGallery(prev => prev.filter(gallery => gallery.id !== id));
                alert(data.message || 'Deleted successfully');
            } else {
                alert('Failed to delete: ' + data.message);
            }
        } catch (err) {
            console.error('Delete failed:', err);
            alert('Error deleting contact');
        }
    };



    return (
        <div>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Gallery manage" />
                <div className="p-3 bg-gray-50 min-h-screen">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-blue-700">Gallery Management</h1>
                        <button className=" text-white px-2 py-2 rounded  ">
                            <a href='/add-image' className='flex border border-blue-700 text-blue-700 hover:bg-blue-600 hover:text-white transition p-1 rounded'>
                                <Plus /> Add Image
                            </a>
                        </button>
                    </div>

                    <div className="bg-white shadow rounded-lg overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                            <thead className="bg-blue-50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-bold text-blue-900">#</th>
                                    <th className="px-4 py-2 text-left font-bold text-blue-900">Preview</th>
                                    <th className="px-4 py-2 text-left font-bold text-blue-900">Title</th>
                                    <th className="px-4 py-2 text-left font-bold text-blue-900">Category</th>
                                    <th className="px-4 py-2 text-left font-bold text-blue-900">Uploaded At</th>
                                    <th className="px-4 py-2 text-center font-bold text-blue-900">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100 text-gray-700">
                                {loading ? (
                                    <div className="flex justify-center items-center py-6">
                                        <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                        </svg>
                                        <span className="ml-2 text-blue-600 font-medium">Loading data...</span>
                                    </div>
                                ) : gallery.length === 0 ? (
                                    <tr>
                                        <td className="text-center text-gray-500 py-4">No contact found.</td>
                                    </tr>
                                ) : (
                                    gallery.map((item, i) => (
                                        <tr key={i} className="hover:bg-blue-50 transition">
                                            <td className="px-4 py-2 font-semibold text-blue-600">{i + 1}</td>
                                            <td className="px-4 py-2">
                                                <img src={`http://localhost:8000/storage/${item.image_path || Logo}`} alt={item.title} className="w-20 h-14 object-cover rounded shadow" />
                                            </td>
                                            <td className="px-4 py-2">{item.title}</td>
                                            <td className="px-4 py-2">{item.category}</td>
                                            <td className="px-4 py-2">{new Date(item.created_at).toLocaleDateString()}</td>
                                            <td className="px-4 py-2 text-center space-x-2">
                                                <button onClick={() => editContact(item.id)} className="inline-flex items-center border-green-600 hover:bg-green-800 hover:text-white px-2 py-1 rounded text-sm transition">
                                                    <Edit className="w-5 h-5 text-green-600 hover:text-white" />
                                                </button>
                                                <button onClick={() => deleteContact(item.id)} className="inline-flex items-center border-red-600 hover:bg-red-800 hover:text-white px-2 py-1 rounded text-sm transition">
                                                    <Trash2 className="w-5 h-5 text-red-600 hover:text-white" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
                {editModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center ">
                        <div className="bg-white w-full max-w-4xl p-6 rounded shadow relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                                onClick={() => setEditModalOpen(false)}
                            >
                                ✕
                            </button>
                            <h2 className="text-xl font-bold text-blue-700 mb-4">Edit</h2>
                            <form onSubmit={handleEditSubmit} className="grid gap-3">
                                <input
                                    type="text"
                                    name="title"
                                    value={editGallery.title}
                                    onChange={handleEditChange}
                                    className="border rounded px-3 py-2 text-gray-600 font-bold"
                                    placeholder="Title"
                                    required
                                />
                                <input
                                    type="text"
                                    name="category"
                                    value={editGallery.category}
                                    onChange={handleEditChange}
                                    className="border rounded px-3 py-2 text-gray-600 font-bold"
                                    placeholder="Category"
                                    required
                                />
                                <textarea
                                    name="description"
                                    value={editGallery.description}
                                    onChange={handleEditChange}
                                    className="border rounded px-3 py-2 text-gray-600 font-bold"
                                    placeholder="Description"
                                />
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleEditChange}
                                    className="border rounded px-3 py-2 text-gray-600 font-bold"
                                />
                                {editGallery.imagePreview && (
                                    <img src={editGallery.imagePreview} alt="Preview" className="w-32 h-32 rounded object-cover" />
                                )}
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </AppLayout>
        </div>
    )
}

export default Gallery
