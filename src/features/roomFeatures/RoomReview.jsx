import React from 'react';
import { Star, User } from 'lucide-react';

export default function ReviewCard({ reviews = [] }) {
    // Calculate the average rating dynamically
    const averageRating = reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : 0;

    return (
        <div className="w-full  bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">

            {/* 1. Header Section with Average Score */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Guest Reviews</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{reviews.length} verified reviews</p>
                </div>

                {/* Average Rating Badge */}
                <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                    <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                    <span className="text-sm font-bold text-blue-900">{averageRating}</span>
                </div>
            </div>

            {/* 
        2. Scrollable Reviews List Container
        - h-[380px]: Exactly calculated fixed height to fit exactly 5 review entries.
        - overflow-y-auto: Shows scrollbar if 6 or more items exist.
        - pr-1: Padding adjustment so scrollbar doesn't overlap text.
      */}
            <div className="h-[380px] overflow-y-auto pr-1 space-y-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                {reviews.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                        No reviews yet
                    </div>
                ) : (
                    reviews.map((review, index) => (
                        <div
                            key={review.id || index}
                            className="pb-4 border-b border-gray-50 last:border-none last:pb-0"
                        >
                            {/* User Meta & Stars Row */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    {/* User Avatar Circle */}
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-800">{review.author}</h4>
                                        <span className="text-[10px] text-gray-400 block">{review.date}</span>
                                    </div>
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-3 h-3 ${i < review.rating
                                                ? 'text-amber-400 fill-amber-400'
                                                : 'text-gray-200'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Review Comment Text */}
                            <p className="mt-2 text-xs text-gray-600 leading-relaxed line-clamp-2 hover:line-clamp-none transition-all duration-300">
                                {review.comment}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}