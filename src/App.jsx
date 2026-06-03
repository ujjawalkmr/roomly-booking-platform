import './styles/theme.css'
import DefaultLayout from './pages/DefaultLayout';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      
 <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
      {/* <DefaultLayout /> */}

    </div>
  );
}




export default App
