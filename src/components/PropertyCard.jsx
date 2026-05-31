import "../styles/PropertyCard.css";
 const properties = [
  {
    id: 1,
    title: "Luxury Apartment in London",
    rooms: "23 Department",
    rating: 4.8,
    price: "$150/night",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 2,
    title: "Cozy Boutique Hotel",
    rooms: "25 Department",
    rating: 4.8,
    price: "$220/night",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    id: 3,
    title: "Modern Cabin in the Alps",
    rooms: "23 Reviews",
    rating: 4.8,
    price: "$220/night",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 4,
    title: "Seaside Villa in Santorini",
    rooms: "25 Department",
    rating: 4.8,
    price: "$400/night",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },{
    id: 5,
    title: "Seaside Villa in Santorini",
    rooms: "25 Department",
    rating: 4.8,
    price: "$400/night",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
];
function PropertyCard() {
    
    return (
        <div className="property-grid">
            {properties.map((item) => (
                <div key={item.id} className="property-card">
                    <div className="property-image-wrapper">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="property-image"
                        />
                        <div className="property-rating">
                            ⭐ {item.rating}
                        </div>
                        <div className="property-price">
                            {item.price}
                        </div>
                    </div>
                    <div className="property-content">
  <div className="property-text">
    <h3 className="property-title">{item.title}</h3>
    <p className="property-rooms">{item.rooms}</p>
  </div>

  <button className="book-btn">
    Book Now
  </button>
</div>
                </div>
            ))}
        </div>
    );
}

export default PropertyCard;
   