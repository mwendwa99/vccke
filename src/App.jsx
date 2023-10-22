import { Route, Routes } from "react-router-dom";

import HomePage from "Pages/HomePage";
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
        {/* not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
