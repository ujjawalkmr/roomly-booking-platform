import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

function DefaultLayout() {
  return (
    <div>
          <Navbar />
          <Dashboard/>
      {/* <Hero /> */}
    </div>
  );
}

export default DefaultLayout;
