import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function DefaultLayout() {
  const navigate = useNavigate();
  return (
    <div>
          <Navbar />
      <Dashboard />
<button onClick={() => navigate("/login")}>
  Click
      </button>
      {/* <Hero /> */}
    </div>
  );
}

export default DefaultLayout;
