import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import devURL from '../../constent/devURL';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gallery > Add image',
        href: '/add-image',
    },
];

const AddGalleryImage = () => {

    const [gallery, setGallery] = useState({
        title: '',
        category: '',
        description: '',
        image: null,
    });
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            const file = files[0];
            setGallery({ ...gallery, image: file });
            setPreview(URL.createObjectURL(file));
        } else {
            setGallery({ ...gallery, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true); // Start loading  

        const formData = new FormData();
        formData.append('title', gallery.title);
        formData.append('category', gallery.category);
        formData.append('description', gallery.description);
        formData.append('image', gallery.image);

        try {
            const res = await fetch(`${devURL}/api/gallery`, {
                method: 'POST',
                body: formData,
            });

            const text = await res.text();

            try {
                const data = JSON.parse(text);
                console.log("✅ Parsed JSON Response:", data);

                if (res.ok) {
                    alert(data.message || "Image uploaded successfully!");
                    setGallery({
                        title: '',
                        category: '',
                        description: '',
                        image: null,
                    });
                    setPreview(null);
                } else {
                    alert("❌ Failed: " + (data.message || "Something went wrong."));
                }
            } catch (parseError) {
                console.error("❗ Error parsing JSON:", parseError);
                console.log("📄 Response looked like:", text);
                alert("Server returned an invalid response.");
            }
        } catch (networkError) {
            console.error("🌐 Network or Fetch Error:", networkError);
            alert("Could not connect to the server.");
        } finally {
            setLoading(false); // ✅ Always stop loading
        }
    };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gallery manage" />
            <div className="min-h-screen bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-6 text-blue-800">Add New Gallery Image</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="grid gap-2">
                    <div className='mb-3'>
                        <label className="block mb-1 font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={gallery.title}
                            onChange={handleChange}
                            required
                            className="w-full text-gray-700 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Enter image title"
                        />
                    </div>

                    <div className='mb-3'>
                        <label className="block mb-1 font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={gallery.category}
                            onChange={handleChange}
                            required
                            className="w-full text-gray-700 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="e.g., Events, Awards, Camp"
                        />
                    </div>

                    <div className='mb-3'>
                        <label className="block mb-1 font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={gallery.description}
                            onChange={handleChange}
                            className="w-full text-gray-700 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            rows="4"
                            placeholder="Optional description"
                        ></textarea>
                    </div>

                    <label className="  font-medium text-gray-700">Image Upload</label>
                    <div className='mb-3'>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            required
                            className="w-[190px] text-gray-700 text-sm text-gray-600 border-2 border-gray-700 rounded p-1"
                        />
                        {preview && (
                            <div className="mt-3">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="h-15 object-cover rounded border shadow"
                                />
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-blue-600 text-white px-6 py-2 rounded transition font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                            }`}
                    >
                        {loading ? 'Uploading...' : 'Upload Image'}
                    </button>
                </form>
            </div>
        </AppLayout>
    );
};

export default AddGalleryImage;
