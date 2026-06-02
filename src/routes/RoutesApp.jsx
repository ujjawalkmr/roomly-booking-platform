import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../utils/PageTransition";

import ProtectedRoute from "./ProtectedRoutes";
import DefaultLayout from "../pages/DefaultLayout";
import Dashboard from "../components/Dashboard";
import LoginSection from "../components/Login";

function RoutesApp() {
  const location = useLocation();
  const withTransition = (Component) => (
    <PageTransition>
      <Component />
    </PageTransition>
  );
  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
       
        <Route
          path="/"
          element={withTransition(DefaultLayout)}
        />
         <Route
          path="/login"
          element={withTransition(LoginSection)}
        />

        {/*
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        */}
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesApp;
