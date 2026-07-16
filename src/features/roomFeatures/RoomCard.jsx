import React, { useRef, useState, useEffect } from 'react';

// Sample data matching your UI cards
const cardsData = [
  {
    id: 1,
    title: "Luxury Apartment in London",
    sub: "23 Department",
    rating: "4.8",
    price: "$150/night",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Cozy Boutique Hotel",
    sub: "25 Department",
    rating: "4.8",
    price: "$220/night",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Modern Cabin in the Alps",
    sub: "23 Reviews",
    rating: "4.8",
    price: "$220/night",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Seaside Villa in Santorini",
    sub: "25 Department",
    rating: "4.8",
    price: "$400/night",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Charming Forest Cottage",
    sub: "18 Reviews",
    rating: "4.9",
    price: "$180/night",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=600&auto=format&fit=crop"
  }
];

export default function RoomCard() {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  // Checks scroll position to determine button visibility
  const updateButtonVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // Hide left button if scrolled to the very start (with a 2px tolerance)
      setShowLeftBtn(scrollLeft > 2);
      
      // Hide right button if we reached the maximum scroll width
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Initial check on mount
      updateButtonVisibility();
      
      // Attach scroll listener
      container.addEventListener('scroll', updateButtonVisibility);
      
      // Optional: Check again if the window resizes
      window.addEventListener('resize', updateButtonVisibility);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateButtonVisibility);
      }
      window.removeEventListener('resize', updateButtonVisibility);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320; // Width + gap estimates the scroll step
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full mx-auto py-8 group">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Rooms</h1>
      
      {/* Left Navigation Arrow */}
      {showLeftBtn && (
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-100 transition duration-200"
          aria-label="Scroll Left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Scrollable Container (Updated with vertical padding 'py-6' to prevent clipping when card expands) */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth py-6 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cardsData.map((card) => (
          /* Card Container with Hover Scale */
          <div
            key={card.id}
            className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer
                       transition-all duration-300 ease-out 
                       hover:scale-105 hover:shadow-lg hover:border-gray-200"
          >
            {/* Card Header & Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              {/* Rating Tag */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <span className="text-amber-500 text-sm">★</span>
                <span className="text-xs font-semibold text-gray-700">{card.rating}</span>
              </div>
              {/* Price Tag */}
              <div className="absolute bottom-3 right-3 bg-black/75 px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-white">{card.price}</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-snug line-clamp-1">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition duration-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Navigation Arrow */}
      {showRightBtn && (
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-100 transition duration-200"
          aria-label="Scroll Right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}