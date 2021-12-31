import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Introduction from "./components/about/Introduction";
import Objectives from "./components/about/Objectives";
import MissionAndVision from "./components/about/MissionAndVision";
import Sidebar from "./components/Sidebar.js/Sidebar";

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
          <Route path="/about/MissionAndVision" element={<MissionAndVision/>} />
          <Route path="/about/Objectives" element={<Objectives/>} />
        </Routes>
        <Sidebar />
      </div>
      <Footer/>
    </Router>
  );
};
export default AllRoutes;
