import "../styles/Dashboard.css";
import Hero from "../components/Hero";
import PropertyCard from "./PropertyCard";

function Dashboard() {
  return (
    <section id="dashboard">
      <div>
        <Hero />
        <div className="dashboard-container">
          <PropertyCard />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
