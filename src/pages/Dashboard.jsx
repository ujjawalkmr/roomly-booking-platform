import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { getAllProperties } from "../api/services/propertyService";

import "../styles/Dashboard.css";
import PropertyCard from "../components/PropertyCard";
import HeroSearch from "../components/HeroSearch";

function Dashboard() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const data = await getAllProperties();
      console.log("Properties in Dashboard:", data);

      setProperties(data);
    } catch (error) {
      console.error(error);
    }
  };
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
