import devURL from '@/pages/constent/devURL'
import React from 'react'

export default function Show({ selectCareer, onClose, onSuccess }) {
    return (
        <div>
            <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative border-2 border-blue-700">
                    {/* Close Button */}
                    <button
                        className="absolute top-3 right-4 text-red-600 text-xl font-bold"
                        onClick={onClose}
                    >
                        ×
                    </button>

                    {/* Header */}
                    <h2 className="text-2xl font-bold text-blue-800 mb-2">
                        {selectCareer.title}
                    </h2>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            {selectCareer.job_type}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                            {selectCareer.location}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                            Deadline: {new Date(selectCareer.deadline).toLocaleDateString()}
                        </span>
                        <span className="text-gray-500 text-xs">
                            Posted: {new Date(selectCareer.created_at).toLocaleString()}
                        </span>
                    </div>

                    {/* Optional: Image */}
                    {selectCareer.image && (
                        <div className="mt-6 items-center justify-items-center">
                            <img
                                src={`${devURL}/storage/${selectCareer.image}`}
                                alt="Career"
                                className="w-100 h-100 rounded shadow-md"
                            />
                        </div>
                    )}

                    {/* Description */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-1 text-blue-800">
                            Description
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            {selectCareer.description}
                        </p>
                    </div>

                    {/* Requirements (HTML content) */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-1 text-blue-800">
                            Requirements & Responsibilities
                        </h3>
                        <div
                            className="prose max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{ __html: selectCareer.requirements }}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
