import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import DefaultLayout from "../pages/DefaultLayout";
import Dashboard from "../components/Dashboard";
function RoutesApp() { 
    return (
        <Routes>
      <Route path="/" element={<DefaultLayout />} />

      <Route path="/dashboard" element={<Dashboard />} />

      {/* <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
    );
    
}

export default RoutesApp;