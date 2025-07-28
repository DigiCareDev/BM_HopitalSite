import React, { useState } from 'react'
import devURL from '@/pages/constent/devURL';
import Swal from 'sweetalert2';


function DonateFrom() {

    const countries = [
        { name: "Afghanistan", code: "AF", dial_code: "+93", flag: "🇦🇫" },
        { name: "Albania", code: "AL", dial_code: "+355", flag: "🇦🇱" },
        { name: "Algeria", code: "DZ", dial_code: "+213", flag: "🇩🇿" },
        { name: "Andorra", code: "AD", dial_code: "+376", flag: "🇦🇩" },
        { name: "Angola", code: "AO", dial_code: "+244", flag: "🇦🇴" },
        { name: "Argentina", code: "AR", dial_code: "+54", flag: "🇦🇷" },
        { name: "Armenia", code: "AM", dial_code: "+374", flag: "🇦🇲" },
        { name: "Australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
        { name: "Austria", code: "AT", dial_code: "+43", flag: "🇦🇹" },
        { name: "Azerbaijan", code: "AZ", dial_code: "+994", flag: "🇦🇿" },
        { name: "Bangladesh", code: "BD", dial_code: "+880", flag: "🇧🇩" },
        { name: "Brazil", code: "BR", dial_code: "+55", flag: "🇧🇷" },
        { name: "Canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
        { name: "China", code: "CN", dial_code: "+86", flag: "🇨🇳" },
        { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },
        { name: "Germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
        { name: "India", code: "IN", dial_code: "+91", flag: "🇮🇳" },
        { name: "Indonesia", code: "ID", dial_code: "+62", flag: "🇮🇩" },
        { name: "Italy", code: "IT", dial_code: "+39", flag: "🇮🇹" },
        { name: "Japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
        { name: "Malaysia", code: "MY", dial_code: "+60", flag: "🇲🇾" },
        { name: "Mexico", code: "MX", dial_code: "+52", flag: "🇲🇽" },
        { name: "Nepal", code: "NP", dial_code: "+977", flag: "🇳🇵" },
        { name: "Pakistan", code: "PK", dial_code: "+92", flag: "🇵🇰" },
        { name: "Philippines", code: "PH", dial_code: "+63", flag: "🇵🇭" },
        { name: "Russia", code: "RU", dial_code: "+7", flag: "🇷🇺" },
        { name: "South Africa", code: "ZA", dial_code: "+27", flag: "🇿🇦" },
        { name: "South Korea", code: "KR", dial_code: "+82", flag: "🇰🇷" },
        { name: "Spain", code: "ES", dial_code: "+34", flag: "🇪🇸" },
        { name: "Thailand", code: "TH", dial_code: "+66", flag: "🇹🇭" },
        { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
        { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" },
        { name: "Vietnam", code: "VN", dial_code: "+84", flag: "🇻🇳" }
    ]


    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        phone: '',
        country: '',
        currency: '',
        amount: '',
        interest: '',
        date: '',
        message: ''
    });

    const handleDonateChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://emarketplace.progatetechnology.com/api/donations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Submitted!',
                    text: data.message || 'Donation Query submitted successfully!',
                    timer: 3000,
                });
                // Reset the form
                setFormData({
                    fullName: '',
                    email: '',
                    address: '',
                    phone: '',
                    country: '',
                    currency: '',
                    amount: '',
                    interest: '',
                    date: '',
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
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error. Check console.");
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your name"
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        value={formData.fullName}
                        onChange={handleDonateChange}
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        value={formData.email}
                        onChange={handleDonateChange}
                        required
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        value={formData.address}
                        onChange={handleDonateChange}
                        required
                    />
                </div>

                {/* Contact */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Contact</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Contact number"
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        value={formData.phone}
                        onChange={handleDonateChange}
                        required
                    />
                </div>

                {/* Country */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Country</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleDonateChange}
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        required
                    >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                            <option key={country.code} value={country.name}>
                                {country.flag} {country.name} ({country.dial_code})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Currency Symbol */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Currency Symbol</label>
                    <select
                        name="currency"
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        value={formData.currency}
                        onChange={handleDonateChange}
                        required
                    >
                        <option value="">Select Currency</option>
                        <option value="A$">AUD (A$) - Australian Dollar</option>
                        <option value="R$">BRL (R$) - Brazilian Real</option>
                        <option value="C$">CAD (C$) - Canadian Dollar</option>
                        <option value="Kč">CZK (Kč) - Czech Koruna</option>
                        <option value="DKK">DKK (kr) - Danish Krone</option>
                        <option value="EGP">EGP - Egyptian Pound</option>
                        <option value="€">EUR (€) - Euro</option>
                        <option value="Ft">HUF (Ft) - Hungarian Forint</option>
                        <option value="HK$">HKD (HK$) - Hong Kong Dollar</option>
                        <option value="₹">INR (₹) - Indian Rupee</option>
                        <option value="₪">ILS (₪) - Israeli New Shekel</option>
                        <option value="¥">JPY (¥) - Japanese Yen</option>
                        <option value="₩">KRW (₩) - South Korean Won</option>
                        <option value="₦">NGN (₦) - Nigerian Naira</option>
                        <option value="kr">NOK (kr) - Norwegian Krone</option>
                        <option value="NZ$">NZD (NZ$) - New Zealand Dollar</option>
                        <option value="₱">PHP (₱) - Philippine Peso</option>
                        <option value="zł">PLN (zł) - Polish Zloty</option>
                        <option value="£">GBP (£) - British Pound</option>
                        <option value="₽">RUB (₽) - Russian Ruble</option>
                        <option value="﷼">SAR (﷼) - Saudi Riyal</option>
                        <option value="SGD">SGD - Singapore Dollar</option>
                        <option value="ZAR">ZAR - South African Rand</option>
                        <option value="kr">SEK (kr) - Swedish Krona</option>
                        <option value="CHF">CHF - Swiss Franc</option>
                        <option value="฿">THB (฿) - Thai Baht</option>
                        <option value="₺">TRY (₺) - Turkish Lira</option>
                        <option value="د.إ">AED (د.إ) - UAE Dirham</option>
                        <option value="$">USD ($) - United States Dollar</option>
                        <option value="₫">VND (₫) - Vietnamese Dong</option>
                    </select>
                </div>

                {/* Amount */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Enter amount"
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        value={formData.amount}
                        onChange={handleDonateChange}
                        required
                    />
                </div>

                {/* Interest */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Your Interest</label>
                    <select
                        name="interest"
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        value={formData.interest}
                        onChange={handleDonateChange}
                    >
                        <option value="">Choose option</option>
                        <option value="patient-adoption">Adopt a Patient (Full Treatment Cost)</option>
                        <option value="blood-bank">Support Blood Bank</option>
                        <option value="cardiology">Support Cardiology Department</option>
                        <option value="education">Fund Medical Education / Staff Training</option>
                        <option value="emergency-care">Support Emergency Services</option>
                        <option value="equipment">Donate Medical Equipment</option>
                        <option value="general-donation">General Donation</option>
                        <option value="gynecology">Support Gynecology Department</option>
                        <option value="icu">Support ICU / Critical Care</option>
                        <option value="infrastructure">Support Hospital Infrastructure</option>
                        <option value="medicine-supply">Fund Medicines for Needy Patients</option>
                        <option value="oncology">Support Oncology Department</option>
                        <option value="orthopedics">Support Orthopedics Department</option>
                        <option value="other">Other</option>
                        <option value="pediatrics">Support Pediatrics Department</option>
                        <option value="surgery-sponsorship">Sponsor a Surgery</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Available Date */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Donate Planing Date</label>
                    <input
                        type="date"
                        name="date"
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        value={formData.date}
                        onChange={handleDonateChange}
                        required
                    />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                    <label className="block mb-1 text-sm font-medium text-gray-700">Message (optional)</label>
                    <textarea
                        rows="3"
                        name="message"
                        placeholder="Write a message..."
                        className="w-full px-2 py-1.5 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                        value={formData.message}
                        onChange={handleDonateChange}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#80CAC7] to-blue-700 text-white py-3 rounded-md font-semibold hover:from-blue-800 hover:to-[#80CAC7] transition"
                    >
                        Donate Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DonateFrom
