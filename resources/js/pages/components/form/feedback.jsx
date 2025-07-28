import devURL from '@/pages/constent/devURL';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Feedback() {

    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleFeedbackChange = (e) => {
        const { name, value } = e.target;
        setFeedback((prev) => ({ ...prev, [name]: value }));
    };


    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://emarketplace.progatetechnology.com/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedback),
            });

            const text = await res.text();
            console.log("🟡 Raw Response Text:", text);

            try {
                const data = JSON.parse(text);
                console.log("✅ Parsed JSON Response:", data);

                if (res.ok) {
                    alert(data.message || "feedback saved successfully!");
                    Swal.fire({
                        icon: 'success',
                        title: 'Submitted!',
                        text: data.message || 'Feedback submitted successfully!',
                        timer: 3000,
                    });
                    setFeedback({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.message || 'Something went wrong.',
                        timer: 3000,
                    });
                }
            } catch (parseError) {
                console.error("❗ Error parsing JSON:", parseError);
                console.log("📄 Response looked like:", text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Server returned an invalid response. Check the console for details.",
                    timer: 3000,
                });
            }

        } catch (networkError) {
            console.error("🌐 Network or Fetch Error:", networkError);
            Swal.fire({
                icon: 'error',
                title: 'Network Error',
                text: "Could not connect to the server. Is it running?",
                timer: 3000,
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleFeedbackSubmit} className="space-y-4 border-y-4 border-blue-700 text-blue-700 p-4 rounded-md shadow-xl">
                <div>
                    <label className="block font-medium text-gray-700">Additional Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={feedback.message}
                        onChange={handleFeedbackChange}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Write your feedback"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={feedback.name}
                        onChange={handleFeedbackChange}
                        required
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={feedback.email}
                            onChange={handleFeedbackChange}
                            required
                            className="border border-gray-300 p-2 rounded w-full"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={feedback.phone}
                            onChange={handleFeedbackChange}
                            required
                            className="border border-gray-300 p-2 rounded w-full"
                            placeholder="+91 12345 67890"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded w-full transition"
                    >
                        Submit Feedback
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Feedback
