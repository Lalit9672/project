import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Introduction from "./components/about/Introduction";
<<<<<<< HEAD
import MissionAndVision from "./components/about/MissionAndVision";
import Sidebar from "./components/Sidebar.js/Sidebar";
import Objectives from "./components/about/Objectives";

=======
import Objectives from "./components/about/Objectives";
import MissionAndVision from "./components/about/MissionAndVision";
import Sidebar from "./components/Sidebar.js/Sidebar";
>>>>>>> f3ac5b58306079f89a2bbe5fe53fdf8ea110a6f7

const AllRoutes = () => {
  return (
    <Router>
      <Header />
<<<<<<< HEAD
      <div 
        style={{ display: "flex", paddingLeft: "70px", paddingRight: "70px" }}
      >
        
    
=======

      <div className="respo">
        {/* // style={{ display: "flex", paddingLeft: "70px", paddingRight: "70px" }} */}
        
>>>>>>> f3ac5b58306079f89a2bbe5fe53fdf8ea110a6f7
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/about/introduction" element={<Introduction />} />
<<<<<<< HEAD
          <Route path="/about/MissionAndVision" element={<MissionAndVision/>} />
          <Route path="/about/Objectives" element={<Objectives/>} />
=======
          <Route path="/about/Objectives" element={<Objectives />} />
          <Route path="/about/MissionAndVision" element={<MissionAndVision />} />
>>>>>>> f3ac5b58306079f89a2bbe5fe53fdf8ea110a6f7
        </Routes>
        <Sidebar />
      </div>
      <Footer/>
    </Router>
  );
};

export default AllRoutes;
