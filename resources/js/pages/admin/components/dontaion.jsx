import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    Legend,
} from 'recharts';


const donationData = [
    { month: 'Jan', donations: 4000 },
    { month: 'Feb', donations: 3000 },
    { month: 'Mar', donations: 5000 },
    { month: 'Apr', donations: 2500 },
    { month: 'May', donations: 4500 },
];

const appointmentData = [
    { day: 'Mon', appointments: 5 },
    { day: 'Tue', appointments: 7 },
    { day: 'Wed', appointments: 3 },
    { day: 'Thu', appointments: 8 },
    { day: 'Fri', appointments: 6 },
];

function Dontaion({Data}) {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Donations Bar Chart */}
                <div className="bg-white shadow rounded-lg p-5">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Donations</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={donationData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="donations" fill="#3b82f6" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Appointments Line Chart */}
                <div className="bg-white shadow rounded-lg p-5">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Weekly Appointments</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={appointmentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="appointments" stroke="#10b981" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Dontaion
