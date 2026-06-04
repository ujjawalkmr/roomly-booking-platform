import { useEffect, useState } from "react";
import "../styles/Hero.css";

import { FaSearch, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
];

export default function HeroSearch() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* Search */}
        <div className="destination-search">
          <FaMapMarkerAlt className="icon" />

          <input
            type="text"
            placeholder="Search destinations (e.g. London, Paris)"
          />

          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        {/* Filters */}
        <div className="booking-filters">
          <div className="filter-box">
            <label>Check-in</label>

            <div className="input-box">
              <FaRegCalendarAlt />
              <span>Date range</span>
            </div>
          </div>

          <div className="filter-box">
            <label>Check-out</label>

            <div className="input-box">
              <FaRegCalendarAlt />
              <span>Date range</span>
            </div>
          </div>

          <div className="filter-box">
            <label>Guests</label>

            <div className="input-box">
              <FaUser />
              <span>2 Adults, 0 Children</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}