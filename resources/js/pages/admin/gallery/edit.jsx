import React from 'react'
import Swal from 'sweetalert2';
import devURL from '../../constent/devURL';

function Edit({isOpen, onClose, galleryItem, onUpdate}) {
        const [editingId, setEditingId] = useState(null);
        const [editGallery, setEditGallery] = useState({
            title: '',
            category: '',
            description: '',
            image: null,
            imagePreview: '',
        });

        const editContact = async (id) => {
            setEditModalOpen(true);
            setEditingId(id);
    
            try {
                const res = await fetch(`${devURL}/api/gallery/${id}`);
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
                const res = await fetch(`${devURL}/api/gallery/${editingId}`, {
                //  const res = await fetch(`http://localhost:8000/api/gallery/${editingId}`, {
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
                        Swal.fire("Server returned an unreadable JSON response.");
                        return;
                    }
                } else {
                    console.error("❌ Expected JSON but got:", responseText);
                    Swal.fire("Unexpected server response (not JSON). Check console.");
                    return;
                }
    
                if (res.ok) {
                    Swal.fire(data.message || "Gallery updated!");
                    setEditModalOpen(false); 
                            } else {
                    Swal.fire("❌ Failed to update: " + (data.message || "Unknown error."));
                }
            } catch (err) {
                console.error("🌐 Network or server error:", err);
                Swal.fire("Update failed due to a network or server issue.");
            }
        };

    return (
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
                        <img src={editGallery.imagePreview} alt="Preview" className="w-32  h-32 rounded object-cover" />
                    )}
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Edit
