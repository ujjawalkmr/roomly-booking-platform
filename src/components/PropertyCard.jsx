import "../styles/PropertyCard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAllRoomImage } from "../api/services/roomImageService";
const properties = [
  {
    id: 1,
    title: "Luxury Apartment in London",
    rooms: "23 Department",
    rating: 4.8,
    price: "$150/night",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 2,
    title: "Cozy Boutique Hotel",
    rooms: "25 Department",
    rating: 4.8,
    price: "$220/night",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    id: 3,
    title: "Modern Cabin in the Alps",
    rooms: "23 Reviews",
    rating: 4.8,
    price: "$220/night",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 4,
    title: "Seaside Villa in Santorini",
    rooms: "25 Department",
    rating: 4.8,
    price: "$400/night",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    id: 5,
    title: "Seaside Villa in Santorini",
    rooms: "25 Department",
    rating: 4.8,
    price: "$400/night",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
];
function PropertyCard({ roomDetails = [] }) {
  const [roomImages, setRoomImages] = useState([]);
  const navigate = useNavigate();

  console.log("roomDetails in PropertyCard:", roomDetails);
  useEffect(() => {
    fetchAllRoomImages();
  }, []);

  const fetchAllRoomImages = async () => {
    try {
      const data = await getAllRoomImage();
      setRoomImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="property-grid">
      {roomDetails.map((item) => {
        const roomImage = roomImages.find((img) => img.roomId === item.id);

        const imageUrl =
          roomImage?.images?.find((img) => img.isPrimary)?.imageUrl ??
          roomImage?.images?.[0]?.imageUrl;

        return (
          <div
            key={item.id}
            className="property-card"
            onClick={() =>
              navigate(`/room-detail-view/${item.id}`,{
      state: {
        room: {item},
        imageUrl: {imageUrl},
      },
    })
            }
          >
            <div className="property-image-wrapper">
              <img
                src={imageUrl}
                alt={item.roomType}
                className="property-image"
              />
              <div className="property-rating">⭐ {item.rating}4.3</div>
              <div className="property-price">{item.price}</div>
            </div>
            <div className="property-content">
              <div className="property-text">
                <h3 className="property-title">{item.title}</h3>
                <p className="property-rooms">{item.subTitle}</p>
              </div>

              <button className="book-btn">Book Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PropertyCard;
