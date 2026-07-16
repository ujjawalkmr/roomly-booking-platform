import React from 'react';

export default function ImageGrid({ images = [] }) {
    // Safe layout fallbacks for an asymmetric 3-photo grid
    const mainImage = images[0] || { url: 'https://placehold.co/800x500', alt: 'Main Room View' };
    const topSub = images[1] || { url: 'https://placehold.co/400x240', alt: 'Bathroom View' };
    const bottomSub = images[2] || { url: 'https://placehold.co/400x240', alt: 'Balcony View' };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-2xl overflow-hidden shadow-sm">
            {/* Large Featured Left Image */}
            <div className="md:col-span-2 h-[320px] md:h-[450px]">
                <img
                    src={mainImage.url}
                    alt={mainImage.alt}
                    className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-300"
                />
            </div>

            {/* Right Multi-Stack Panel */}
            <div className="grid grid-rows-2 gap-3 h-[320px] md:h-[450px]">
                <div className="h-full overflow-hidden">
                    <img src={topSub.url} alt={topSub.alt} className="w-full h-full object-cover" />
                </div>
                <div className="h-full overflow-hidden">
                    <img src={bottomSub.url} alt={bottomSub.alt} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};