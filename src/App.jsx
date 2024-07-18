import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import PricingPage from "./pages/Pricing/PricingPage";
import Contact from "./pages/Contact/Contact";
import CopyRight from "./components/copyright/CopyRight";
import TrialPopup from "./components/TrialPopup/TrialPopup";
import React, { useState, useEffect } from "react";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Spinner from "./components/Spinner/Spinner";
import { Toaster } from "react-hot-toast";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isRestricted, setIsRestricted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const restrictedCountries = ["CN", "RU", "PK"]; // Add country codes you want to restrict

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const response = await fetch(
          `https://ipinfo.io?token=${import.meta.env.VITE_APP_IP_API_KEY}`
        ); // Replace with a real token if needed
        const data = await response.json();
        if (restrictedCountries.includes(data.country)) {
          setIsRestricted(true);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setIsLoading(false); // Set loading to false after location check
      }
    };

    checkLocation();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-green-100 text-green-800">
        <Spinner />
      </div>
    ); // Display loading indicator while checking location
  }

  if (isRestricted) {
    return <NotFoundPage />;
  }

  return (
    <Router>
      <Toaster position="top-center" />
      <ScrollToTop />
      <TrialPopup openModal={openModal} setOpenModal={setOpenModal} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <CopyRight />
    </Router>
  );
}

export default App;
