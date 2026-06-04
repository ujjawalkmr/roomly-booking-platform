import "../styles/Dashboard.css";
import PropertyCard from "../components/PropertyCard";
import HeroSearch from "../components/HeroSearch";

function Dashboard() {
  return (
    <section id="dashboard">
      <div>
        <HeroSearch />
        <div className="dashboard-container">
          <PropertyCard />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
