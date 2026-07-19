import React, { useState } from 'react';
import { Wifi, Wind, Tv, ChevronDown, ChevronUp } from 'lucide-react';

export default function RoomInfo() {
    const [openSection, setOpenSection] = useState(null);

    const amenities = [
        { icon: <Wifi size={20} />, label: "WiFi" },
        { icon: <Wind size={20} />, label: "AC" },
        { icon: <span className="text-sm font-bold">🌊</span>, label: "Ocean View" },
        { icon: <Tv size={20} />, label: "Smart TV" },
        { icon: <span className="text-sm font-bold">🍹</span>, label: "Mini-bar" },
        { icon: <span className="text-sm font-bold">☕</span>, label: "Nespresso Machine" },
    ];

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="space-y-6">
            {/* Title Meta */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Oceanview Deluxe Suite - The Meridian Horizon
                </h1>
                <p className="mt-3 text-gray-600 leading-relaxed text-[15px]">
                    Indulge in unparalleled coastal luxury. This spacious suite blends modern sophistication with
                    breathtaking, panoramic ocean vistas. Relax, unwind, and let the soothing sounds of the
                    waves be your soundtrack.
                </p>
            </div>

            {/* Highlights Metadata Badges */}
            <div className="text-sm text-gray-600 font-medium flex flex-wrap gap-2 py-1">
                <span>550 sq ft</span>
                <span className="text-gray-300">|</span>
                <span>King Bed</span>
                <span className="text-gray-300">|</span>
                <span>Max 2 Guests</span>
                <span className="text-gray-300">|</span>
                <span>Private Balcony</span>
            </div>

            {/* Grid Icons Row */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 pt-2">
                {amenities.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                        <div className="text-gray-700 mb-1.5">{item.icon}</div>
                        <span className="text-xs text-gray-600 font-medium whitespace-nowrap">{item.label}</span>
                    </div>
                ))}
            </div>

            <hr className="border-gray-200 my-4" />

            {/* Accordion Modules */}
            <div className="space-y-3">
                {/* Module 1: Room Facilities */}
                <div className="border-b border-gray-200 pb-3">
                    <button
                        type="button"
                        onClick={() => toggleSection('facilities')}
                        className="w-full flex justify-between items-center py-2 text-left font-semibold text-gray-800 hover:text-gray-900"
                    >
                        <span>Room Facilities</span>
                        {openSection === 'facilities' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {openSection === 'facilities' && (
                        <div className="mt-2 text-sm text-gray-600 space-y-1 pl-1">
                            <p>• 24/7 Room Service access</p>
                            <p>• Electronic safe storage box</p>
                            <p>• Fully customizable climate automated controls</p>
                        </div>
                    )}
                </div>

                {/* Module 2: Policy Information */}
                <div className="border-b border-gray-200 pb-3">
                    <button
                        type="button"
                        onClick={() => toggleSection('policies')}
                        className="w-full flex justify-between items-center py-2 text-left font-semibold text-gray-800 hover:text-gray-900"
                    >
                        <span>Policy Information</span>
                        {openSection === 'policies' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {openSection === 'policies' && (
                        <div className="mt-2 text-sm text-gray-600 space-y-1 pl-1">
                            <p>• Check-in window: 3:00 PM – Midnight</p>
                            <p>• Free cancellation up to 48 hours prior to check-in target</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};