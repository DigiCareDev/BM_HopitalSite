import React, { useEffect, useState } from 'react'
import Navbar from '../components/home/navbar'
import Footer from '../components/Footer'
import Subnav from '../components/subnav';
import Logo from '@/assets/Logo.webp'


export default function Gallery() {
    const [translations, setTranslations] = useState({});

    const handletranslate = (data) => {
        setTranslations(data);
    }

    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://emarketplace.progatetechnology.com/api/gallery')
            .then(res => res.json())
            .then(data => {
                setGallery(data.data);
                setLoading(false);
            })
            .catch(err => console.error('Failed to fetch contacts:', err));
    }, []);

    return (
        <>
            <Subnav onTranslations={handletranslate} />
            <Navbar translations={translations} />
            <div className='bg-white'>
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-900 pt-10 text-center">
                        Latest Gallery
                    </h2>

                    <div className='py-10'>
                        <div className='max-w-6xl mx-auto p-4'>
                            {loading ? (
                                <p className='text-center text-blue-500 text-xl font-bold'>Loading.........</p>
                            ) : gallery.length === 0 ? (
                                <p className='text-center text-gray-500'>No images found.</p>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {gallery.map(item => (
                                        <div key={item.id} className="border border-blue-500 p-2 rounded-xl hover:shadow-xl transition-shadow duration-300">
                                            <img src={`http://emarketplace.progatetechnology.com/storage/${item.image_path || Logo}`} alt={item.title} className="w-full h-60 object-cover mb-2" />
                                            <div className='flex justify-between items-center '>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-blue-700 ">{item.title}</h3>
                                                    <p className="text-gray-600">{item.description}</p>
                                                </div>
                                                <div>
                                                    <a href={`http://emarketplace.progatetechnology.com/gallery/${item.id}`} className="bg-blue-500 text-white px-4 py-2 rounded mt-3">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div >
            <Footer translations={translations} />
        </>
    )
}
