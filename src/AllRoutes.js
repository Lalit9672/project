import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Navbar from './components/header/componant/Navbar';
const AllRoutes = () => {
  return (
    <Router>
     
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
