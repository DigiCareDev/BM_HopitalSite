import Footer from '@/pages/components/Footer';
import Navbar from '../components/home/navbar'
import Subnav from '../components/subnav'
import React, { useState } from 'react'

export default function FreeMedicalCamp({ newsevent }) {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    };

    return (
        <div className='bg-white'>
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />

            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200 my-8">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                    {newsevent.title || 'TITLE'}
                </h1>

                {/* Category & Created At */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {newsevent.category}
                    </span>
                    <span>{new Date(newsevent.created_at).toLocaleDateString('hi-IN')}</span>
                </div>

                {/* Optional Image */}
                {newsevent.image && (
                    <div className="mb-4">
                        <img
                            src={newsevent.image}
                            alt={newsevent.title}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                )}

                {/* Description (Rich HTML) */}
                <div
                    className="prose prose-sm md:prose-base prose-blue max-w-none leading-relaxed text-gray-800"
                    dangerouslySetInnerHTML={{ __html: newsevent.description }}
                />
            </div>

            <Footer translations={translations} />
        </div>
    );
}

