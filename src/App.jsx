import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
    </>
  );
}

export default App;
