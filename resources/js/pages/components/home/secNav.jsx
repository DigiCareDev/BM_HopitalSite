import { useState } from "react";
import HomeAppointmentFrom from '../form/homeAppointment'
import QuickEnquiry from "../form/quickEnquiry";
import Feedback from "../form/feedback"
import Other from "../form/other";
import Headline from "./headline"


function Secnav() {

    const [activeTab, setActiveTab] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const toggleTab = (tab) => {
        setActiveTab(tab);
        setShowModal(true);
    };

    const closeModal = () => {
        setActiveTab(null);
        setShowModal(false);
    };


    return (
        <>
            <div className="max-w-7xl mx-auto px-1 sm:px-3 lg:px-4 pb-2">
                <Headline />
                <div className="relative py-1 sm:px-3 lg:px-2">
                    <nav className="flex flex-wrap">
                        {['appointment', 'enquiry', 'feedback', 'other'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => toggleTab(tab)}
                                className={`font-medium transition px-1 py-1 mx-0.5 rounded ${activeTab === tab
                                    ? 'bg-blue-200 hover:bg-white hover:border border-blue-700 text-blue-800 rounded-full shadow hover:shadow-2xl transition duration-500'
                                    : 'bg-white hover:bg-blue-200 border border-blue-500 text-blue-500 rounded '
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                            </button>
                        ))}
                    </nav>
                </div>

                {showModal && (
                    <div className=" flex items-start justify-evenly mt-2 mx-2 z-50">
                        <div className="bg-white p-3 w-full max-w-lg relative ">
                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-3 text-red-600 hover:text-red-600 text-2xl font-bold"
                                onClick={closeModal}
                            >
                                &times;
                            </button>

                            {/* Modal Content */}
                            {activeTab === 'appointment' && (
                                <div className=" bg-white max-w-xl mx-auto text-blue-700">
                                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">Book an Appointment</h3>
                                    <HomeAppointmentFrom />
                                </div>
                            )}

                            {activeTab === 'enquiry' && (
                                <div className="text-blue-800">
                                    <h3 className="text-xl font-bold mb-4">Quick Enquiry</h3>
                                    <QuickEnquiry />
                                </div>
                            )}

                            {activeTab === 'feedback' && (
                                <div className="text-blue-800">
                                    <h3 className="text-xl font-bold mb-4">Feedback</h3>
                                    <Feedback />
                                </div>
                            )}

                            {activeTab === 'other' && (
                                <div className="text-blue-800">
                                    <h3 className="text-xl font-bold mb-4">Other Information</h3>
                                    <Other />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Secnav
