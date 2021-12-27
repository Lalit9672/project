import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Introduction from "./components/about/Introduction";
import Sidebar from "./components/Sidebar.js/Sidebar";
const AllRoutes = () => {
  return (
    <Router>
     
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/about/introduction" element={<Introduction />} />
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  );
};

export default AllRoutes;
