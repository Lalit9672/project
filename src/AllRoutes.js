import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Introduction from "./components/about/Introduction";
import MissionAndVision from "./components/about/MissionAndVision";
import Sidebar from "./components/Sidebar.js/Sidebar";
import Objectives from "./components/about/Objectives";


const AllRoutes = () => {
  return (
    <Router>

     <Header/>
      <div style={{ display: "flex", paddingLeft: "70px", paddingRight: "70px" }}>
        <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/about/introduction" element={<Introduction />} />
          <Route path="/about/MissionAndVision" element={<MissionAndVision/>} />
          <Route path="/about/Objectives" element={<Objectives/>} />
        </Routes>
        </Sidebar>
      </div>
     <Footer/>
    </Router>
  );
};

export default AllRoutes;
