import React from 'react'
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import devURL from '../constent/devURL';
import { Trash2 } from 'lucide-react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Career Posts',
        href: '/contact-page',
    },
];

export default function Career() {



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contact Queries" />
            <div className="overflow-x-auto  bg-white p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-blue-700">Career Posts</h1>
                    <a href='/create' className="bg-blue-500  text-white px-4 py-2 rounded-md">
                        Add New Post
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {[1, 2].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border rounded-lg shadow-md p-4 flex flex-col gap-3"
                        >
                            <img
                                src="https://via.placeholder.com/300x180"
                                alt="Gallery item"
                                className="rounded-md object-cover h-40 w-full"
                            />

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Sample Title {item}</h3>
                                <p className="text-sm text-gray-600">Category: Events</p>
                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                    This is a short description for the gallery item. You can customize this as needed.
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 text-sm rounded-md">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 text-sm rounded-md">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </AppLayout>
    )
}
