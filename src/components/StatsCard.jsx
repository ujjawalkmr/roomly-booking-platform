import "../styles/Dashboard.css";

const stats = [
  { title: "Bookings", value: "1,245" },
  { title: "Revenue", value: "$24,500" },
  { title: "Guests", value: "865" },
  { title: "Properties", value: "28" },
];

function StatsCard() {
  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div key={item.title} className="stat-card">
          <p className="stat-title">{item.title}</p>
          <h2 className="stat-value">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCard;