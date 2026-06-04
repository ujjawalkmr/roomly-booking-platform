import { useNavigate } from "react-router-dom";

import "../styles/Dashboard.css";
import PropertyCard from "../components/PropertyCard";
import HeroSearch from "../components/HeroSearch";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <section id="dashboard">
      <div>
        <HeroSearch />
        <div className="dashboard-container">
          <PropertyCard />
        </div>
        <button onClick={() => navigate("/login")}>Login</button>{" "}
      </div>
    </section>
  );
}

export default Dashboard;
