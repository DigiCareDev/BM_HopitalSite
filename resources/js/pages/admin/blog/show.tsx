import devURL from '@/pages/constent/devURL'
import React from 'react'

export default function Show({selectedBlog, onClose, onSuccess}) {
  return (
    <div>
      <div className="fixed inset-0  text-blue-700 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full relative max-h-[90vh] overflow-y-auto">
                                <button
                                    className="absolute top-2 right-2 text-red-600 font-bold text-2xl"
                                    onClick={onSuccess}
                                >
                                    ×
                                </button>

                                <h2 className="text-xl font-bold mb-2 text-blue-800">{selectedBlog.title}</h2>
                                <p className="text-gray-600 mb-2">{selectedBlog.subtitle}</p>
                                <p className="text-sm text-gray-500 mb-4">By {selectedBlog.author}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {selectedBlog.tags &&
                                        selectedBlog.tags.split(',').map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                            >
                                                {tag.trim()}
                                            </span>
                                        ))}
                                </div>
                                {selectedBlog.image && (
                                    <img
                                        src={`${devURL}/storage/${selectedBlog.image}`}
                                        alt="Blog"
                                        className="w-full h-auto rounded mb-4"
                                    />
                                )}

                                <div
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: selectedBlog.description }}
                                />
                            </div>
                        </div>
    </div>
  )
}
