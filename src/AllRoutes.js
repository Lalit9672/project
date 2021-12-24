import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";
const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
