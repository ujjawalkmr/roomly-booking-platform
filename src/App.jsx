import {Routes, Route } from "react-router-dom";
import "./styles/theme.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
