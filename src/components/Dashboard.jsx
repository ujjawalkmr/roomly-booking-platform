import "../styles/Dashboard.css";

import StatsCard from "../components/StatsCard";
import RecentBookings from "../components/RecentBookings";
import QuickActions from "../components/QuickActions";
import Hero from "../components/Hero";

function Dashboard() {
    return (
        <section id="dashboard">
            <div>
                <Hero/>
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Manage your bookings and properties</p>
      </div>

      <div className="dashboard-content">
        <StatsCard />

        <div className="dashboard-grid">
          <RecentBookings />
          <QuickActions />
        </div>
      </div>
                </div>
                </div>
            </section>
  );
}

export default Dashboard;