import { Route, Routes } from "react-router-dom";

import HomePage from "Pages/HomePage";
import AboutPage from "Pages/AboutPage";
import GetInvolvedPage from "Pages/GetInvolvedPage";
import EventsPage from "Pages/EventsPage";
import NotFoundPage from "Pages/NotFoundPage";

import Navbar from "@Navbar";
import Footer from "@Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        {/* <Route path="/events" element={<EventsPage />} /> */}
        {/* not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
