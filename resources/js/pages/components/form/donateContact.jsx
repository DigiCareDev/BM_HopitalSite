import React, { useState } from 'react'
import devURL from '@/pages/constent/devURL';
import Swal from 'sweetalert2';

function DonateContact() {

    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactData((prev) => ({ ...prev, [name]: value }))
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://emarketplace.progatetechnology.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            const data = await response.json();
            console.log("Response data:", data);

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Submitted!',
                    text: 'Query submitted successfully!',
                    timer: 3000,
                });

                // Reset the form
                setContactData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.message || 'Something went wrong.',
                    timer: 3000,
                });

            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error. Check console.");
        }
    };



    return (
        <div>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div>
                    <label className="block mb-1 text-sm font-medium">Your Name</label>
                    <input
                        type="text"
                        name="name" // ✅ This is important
                        placeholder="Enter your full name"
                        value={contactData.name}
                        onChange={handleContactChange}
                        className="w-full px-2 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Your Email</label>
                    <input
                        type="email"
                        name="email" // ✅
                        value={contactData.email}
                        onChange={handleContactChange}
                        placeholder="Enter your email"
                        className="w-full px-2 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Your Contact</label>
                    <input
                        type="number"
                        name="phone" // ✅
                        value={contactData.phone}
                        onChange={handleContactChange}
                        placeholder="Enter your number"
                        className="w-full px-2 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Your Message</label>
                    <textarea
                        rows="5"
                        name="message" // ✅
                        value={contactData.message}
                        onChange={handleContactChange}
                        placeholder="Write your message..."
                        className="w-full px-2 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white py-2 rounded-md font-semibold hover:from-blue-800 hover:to-[#80CAC7] transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default DonateContact
