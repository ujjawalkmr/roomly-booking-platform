import React from 'react';
import { useEffect, useState } from "react";
import ImageGrid from '../features/roomFeatures/ImageGride';
import RoomInfo from '../features/roomFeatures/RoomInfo';
import RoomBookingCard from '../features/roomFeatures/RoomBookingCard';
import RoomCard from '../features/roomFeatures/RoomCard';
import ReviewCard from '../features/roomFeatures/RoomReview';
import { getAllRoom } from "../api/services/roomService";



export default function RoomDetailView() {
    // Mock image payloads from Unsplash matching your original design aesthetic
    const mockImages = [
        { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80', alt: 'Oceanview Master Suite Bedroom' },
        { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=500&q=80', alt: 'Premium Marble Bathroom En Suite' },
        { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80', alt: 'Balcony Overlooking Turquoise Ocean' }
    ];
    const mockReviews = [
        { id: 1, author: 'Alex Rivera', rating: 5, date: '2 weeks ago', comment: 'Absolutely breathtaking view! Clean, comfortable, and the staff was amazingly helpful.' },
        { id: 2, author: 'Emma Watson', rating: 4, date: '1 month ago', comment: 'Loved the room design and the balcony view. Bed was exceptionally comfortable.' },
        { id: 3, author: 'Marcus Chen', rating: 5, date: '1 month ago', comment: 'Modern facilities, fast WiFi, and high-end tech. Ideal workspace setup for travel.' },
        { id: 4, author: 'Sarah Jenkins', rating: 5, date: '2 months ago', comment: 'The Nespresso machine and mini-bar selection made mornings perfect. Highly recommend!' },
        { id: 5, author: 'David K.', rating: 4, date: '2 months ago', comment: 'Very clean space. The walk-in shower felt like a luxury spa experience.' },
        // These reviews below will make the container scrollable:
        { id: 6, author: 'Jessica Miller', rating: 5, date: '3 months ago', comment: 'Staff went above and beyond. We were welcomed with custom ocean view recommendations.' },
        { id: 7, author: 'Tom Cruise', rating: 4, date: '3 months ago', comment: 'Excellent location, easy beach access, and peaceful nights.' }
    ];


    useEffect(() => {
        fetchProperties();
      }, []);
    
      const fetchProperties = async () => {
        try {
          const data = await getAllRoom();
          console.log("Properties in Dashboard:", data);
    
          setProperties(data);
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
            <div className=" mx-auto space-y-8">
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
            <RoomCard />

            <ReviewCard reviews={mockReviews} />

        </div>
    );
};