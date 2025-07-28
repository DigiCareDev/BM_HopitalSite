import { useState } from "react";
import devURL from '@/pages/constent/devURL';
import Swal from 'sweetalert2';

export default function HomeAppointmentFrom({ header }) {

    const [appointment, setAppointment] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        department: '',
        note: '',
    });

    const handleAppointmentChange = (e) => {
        const { name, value } = e.target;
        setAppointment(prev => ({ ...prev, [name]: value }));
    };

    const handleAppointmentSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://emarketplace.progatetechnology.com/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointment),
            });

            const text = await res.text();
            console.log("🟡 Raw Response Text:", text);

            try {
                const data = JSON.parse(text);
                console.log("✅ Parsed JSON Response:", data); 

                if (res.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Submitted!',
                        text: data.message || 'Appointment submitted successfully!',
                        timer: 3000,
                    });
                    setAppointment({
                        name: '',
                        email: '',
                        phone: '',
                        date: '',
                        time: '',
                        department: '',
                        note: ''
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
                    text: parseError.message || "Server returned an invalid response. Check the console for details.",
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
            <form onSubmit={handleAppointmentSubmit} className="space-y-4 border-y-4 border-blue-700 text-blue-700 p-4 rounded-md shadow-xl">
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={appointment.name}
                        onChange={handleAppointmentChange}
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
                            value={appointment.email}
                            onChange={handleAppointmentChange}
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
                            value={appointment.phone}
                            onChange={handleAppointmentChange}
                            required
                            className="border border-gray-300 p-2 rounded w-full"
                            placeholder="+91 12345 67890"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Preferred Date</label>
                        <input
                            type="date"
                            name="date"
                            value={appointment.date}
                            onChange={handleAppointmentChange}
                            required
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Preferred Time</label>
                        <input
                            type="time"
                            name="time"
                            value={appointment.time}
                            onChange={handleAppointmentChange}
                            required
                            className="border border-gray-300 p-2 rounded w-full"
                        />

                    </div>
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Department</label>
                    <select
                        name="department"
                        value={appointment.department}
                        onChange={handleAppointmentChange}
                        required
                        className="border border-gray-300 p-2 rounded w-full"
                    >
                        <option value="">Select Department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Emergency Medicine">Emergency Medicine</option>
                        <option value="ENT">ENT</option>
                        <option value="Gastroenterology">Gastroenterology</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="General Surgery">General Surgery</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Respiratory">Respiratory</option>
                        <option value="Pediatric Intensive Care Unit (PICU)">Pediatric Intensive Care Unit (PICU)</option>
                        <option value=" Neonatal Intensive Care Unit (NICU)"> Neonatal Intensive Care Unit (NICU)</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Additional Message</label>
                    <textarea
                        name="note"
                        value={appointment.note}
                        onChange={handleAppointmentChange}
                        rows="4"
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Describe your concern or request (optional)"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded w-full transition"
                    >
                        Submit Appointment Request
                    </button>
                </div>
            </form>
        </div>
    )
}
