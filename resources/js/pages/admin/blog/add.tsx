import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blog',
        href: '/blog-page',
    },
];

export default function AddBlog() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="blog" />
            <div>
                <div className="bg-white min-h-screen text-blue-600 shadow p-6 border border-gray-200">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Title</label>
                            <input
                                type="text"
                                placeholder="Enter blog title"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Subtitle</label>
                            <input
                                type="text"
                                placeholder="Enter blog subtitle"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Author</label>
                            <input
                                type="text"
                                placeholder="Author name"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Tags</label>
                            <input
                                type="text"
                                placeholder="Enter tags (comma separated)"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium">Description</label>
                            <textarea
                                rows={4}
                                placeholder="Short blog description..."
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium">Upload Image</label>
                            <input type="file" className="block mt-1 border border-gray-300 rounded w-[220px] p-2" />
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
