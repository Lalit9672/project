import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";
// import Introduction from './components/about'
import Introduction from './components/about/Introduction'
import MissionAndVision from './components/about/MissionAndVision'
import Objectives from './components/about/Objectives'
const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/Introduction" element={<Introduction/>}/>
        <Route path="/about/MissionAndVision" element={<MissionAndVision/>}/>
        <Route path="/about/Objectives" element={<Objectives/>}/>
        <Route path="/about" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
