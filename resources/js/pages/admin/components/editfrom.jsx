import React from 'react';
import Swal from 'sweetalert2';
import devURL from '../../constent/devURL';

function Editfrom() {

    const [editingId, setEditingId] = useState(null);
    const [editGallery, setEditGallery] = useState({
        title: '',
        category: '',
        description: '',
        image: null,
        imagePreview: '',
    });
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
                method: 'POST', // Laravel POST for FormData update
                body: formData,
            });

            const data = await res.json();

            if (res.ok) {
                Swal.fire({
                    title: 'updated!',
                    text: 'Gallery deleted successfully.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                setEditModalOpen(false);
                fetchGalleryList(); // Refresh table
            } else {
                Swal.fire("Failed to update.");
            }
        } catch (err) {
            console.error("Update error", err);
        }
    };

    const fetchGalleryList = () => {
        fetch(`${devURL}/api/gallery`)
            .then(res => res.json())
            .then(data => {
                setGallery(data);
                setLoading(false);
            })
            .catch(err => console.error('Failed to fetch contacts:', err));
    };

    useEffect(() => {
        fetchGalleryList();
    }, []);

    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white w-full max-w-lg p-6 rounded shadow relative">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                        onClick={() => setEditModalOpen(false)}
                    >
                        ✕
                    </button>
                    <h2 className="text-xl font-bold text-blue-700 mb-4">Edit Gallery Image</h2>
                    <form onSubmit={handleEditSubmit} className="grid gap-3">
                        <input
                            type="text"
                            name="title"
                            value={editGallery.title}
                            onChange={handleEditChange}
                            className="border rounded px-3 py-2"
                            placeholder="Title"
                            required
                        />
                        <input
                            type="text"
                            name="category"
                            value={editGallery.category}
                            onChange={handleEditChange}
                            className="border rounded px-3 py-2"
                            placeholder="Category"
                            required
                        />
                        <textarea
                            name="description"
                            value={editGallery.description}
                            onChange={handleEditChange}
                            className="border rounded px-3 py-2"
                            placeholder="Description"
                        />
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleEditChange}
                            className="border rounded px-3 py-2"
                        />
                        {editGallery.imagePreview && (
                            <img src={editGallery.imagePreview} alt="Preview" className="w-32 h-20 rounded object-cover" />
                        )}
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Editfrom
