import React from 'react';
import Button from "../../components/Button"


export default function RoomBookingCard() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Proceeding to reservation checkout stack...");
    };

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Book Your Stay</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Check-In Input */}
                <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        Check-in
                    </label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Check-Out Input */}
                <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        Check-out
                    </label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Guests Dropdown */}
                <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        Guests
                    </label>
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                    </select>
                </div>

                {/* Breakdown Calculation Block */}
                <div className="pt-4 border-t border-gray-100 flex items-end justify-between">
                    <div>
                        <span className="text-xs text-gray-500 block">$220/night + $35 tax</span>
                        <span className="text-sm font-semibold text-gray-700">Total (with tax)</span>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">$255.00</span>
                    </div>
                </div>

                {/* Action Button */}
                {/* <Button variant="primary" fullWidth type="submit" className="mt-2">
                    Book Now
                </Button> */}

                <Button
                    text="Book Now"
                    variant="primary"
                    onClick={() => console.log("Booked")}
                    disabled={false}
                    loading={false}
                />

            </form>
        </div>
    );
};