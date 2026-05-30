import { useState } from "react";
import "../styles/Navbar.css";
const logo = "assets/navbar/bs.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img
          src={logo}
          alt="logo"
        />
        <h1>StayEase</h1>
      </div>

      {/* Menu */}

      {/* Right Section */}

      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="item-1">Homes & Villas</li>
          <li className="item-2">Hotels & Stays</li>
          <li className="item-3">Experiences</li>
        </ul>

        <div
          className="profile-wrapper desktop-dropdown"
          onMouseEnter={() => {
            if (window.innerWidth > 500) {
              setIsOpen(true);
            }
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 500) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="profile"
            onClick={() => {
              if (window.innerWidth <= 500) {
                setMobileMenuOpen(true);
              }
            }}
          >
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="profile"
            />
          </div>

          {/* web dropdown */}
          {isOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>My Profile</li>
                <li>Bookings</li>
                <li>Wishlist</li>
                <li>Settings</li>
                <li className="logout">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* mobile sidebar */}
      <>
        <div
          className={`sidebar-overlay ${
            mobileMenuOpen ? "overlay-open" : "overlay-close"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`mobile-sidebar ${
            mobileMenuOpen ? "sidebar-open" : "sidebar-close"
          }`}
        >
          <div className="sidebar-header">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="profile"
            />

            <button onClick={() => setMobileMenuOpen(false)}>✕</button>
          </div>

          <ul>
            <li>Profile</li>
            <li>Homes & Villas</li>
            <li>Hotels & Stays</li>
            <li>Experiences</li>
            <li className="logout">Logout</li>
          </ul>
        </div>
      </>
    </nav>
  );
}
