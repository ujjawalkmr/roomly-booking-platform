import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/theme.css";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import PageTransition from "./utils/PageTransition";
import RoutePages from "./routes/RoutePages";

const Checkpage = lazy(() => import("./pages/Checkpage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <RoutePages />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        toastStyle={{
          background: "#333",
          color: "#fff",
        }}
      />
    </>
  );
}

export default App;
