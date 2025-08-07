import devURL from '@/pages/constent/devURL'
import React from 'react'

export default function Show({selectNewsEvent, onClose, onSuccess }) {

    console.log('selectNewsEvent===', selectNewsEvent)
    
    return (
        <div>
            <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative border-2 border-blue-700">
                    <button
                        className="absolute top-3 right-4 text-red-600 text-xl font-bold"
                        onClick={onClose}
                    >
                        ×
                    </button>

                    <h2 className="text-2xl font-bold text-blue-800 mb-2">
                        {selectNewsEvent.title}
                    </h2>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            {selectNewsEvent.category}
                        </span>
                    </div>
                    {selectNewsEvent.image && (
                        <div className="mt-6 items-center justify-items-center">
                            <img
                                src={`${devURL}/storage/${selectNewsEvent.image || 'Na'}` || 'N/a'}
                                alt="Career"
                                className="w-100 h-100 rounded shadow-md"
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-1 text-blue-800">
                            Description
                        </h3>
                        <div
                            className="prose max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{ __html: selectNewsEvent.description }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
