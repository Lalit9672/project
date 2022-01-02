import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Introduction from "./components/about/Introduction";
import Objectives from "./components/about/Objectives";
import MissionAndVision from "./components/about/MissionAndVision";
import Sidebar from "./components/Sidebar.js/Sidebar";
import Contact from "./components/Contact/Contact";

const AllRoutes = () => {
  return (
    <Router>
      <Header />

      <div className="respo">
          {/* style={{ display: "flex", paddingLeft: "70px", paddingRight: "70px" }} */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/about/introduction" element={<Introduction />} />
          <Route path="/about/Objectives" element={<Objectives />} />
          <Route path="/about/MissionAndVision" element={<MissionAndVision />} />
          <Route path="/Contact" element={<Home />} />
          <Route path="/Contact/Contact" element={<Contact />} />
        </Routes>
        <Sidebar />
      </div>
      <Footer/>
    </Router>
  );
};

export default AllRoutes;
