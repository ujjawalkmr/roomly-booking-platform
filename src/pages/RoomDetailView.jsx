import React from 'react';
import ImageGrid from '../features/roomFeatures/ImageGride';
import RoomInfo from '../features/roomFeatures/RoomInfo';
import RoomBookingCard from '../features/roomFeatures/RoomBookingCard';



export default function RoomDetailView() {
    // Mock image payloads from Unsplash matching your original design aesthetic
    const mockImages = [
        { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80', alt: 'Oceanview Master Suite Bedroom' },
        { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=500&q=80', alt: 'Premium Marble Bathroom En Suite' },
        { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80', alt: 'Balcony Overlooking Turquoise Ocean' }
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <h1>Room Detail</h1>
                {/* Top Media Gallery Component */}
                <ImageGrid images={mockImages} />

                {/* Structural Info Split Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Main Room Description Panel */}
                    <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                        <RoomInfo />
                    </div>

                    {/* Sticky Sidebar Reservation Form widget */}
                    <div className="lg:col-span-1">
                        <RoomBookingCard />
                    </div>

                </div>

            </div>
        </div>
    );
};