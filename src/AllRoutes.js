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
import Editor from "./components/Editor/Editors";
import Chairman from "./components/Editor/Chairman";
import Vicecanceler from "./components/Editor/Vicecanceler";
import Editorsmessage from "./components/Editor/Editorsmessage";
import Associate from "./components/Editor/Associate";
import Newsfirebase from "./components/firebase/Newsfirebase"


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
          <Route path="/Editor/Editor" element={<Editor />} />
          <Route path="/Editor/chairepersons-message" element={<Chairman />} />
          <Route path="/Editor/message-of-ethical-committee-chairman" element={<Vicecanceler/>} />
          <Route path="/Editor/editors-message" element={<Editorsmessage/>} />
          <Route path="/Editor/associate-editors-message" element={<Associate/>} />
          <Route path="/about/MissionAndVision" element={<MissionAndVision/>} />
          <Route path="/about/Objectives" element={<Objectives/>} />
          <Route path="/firebase" element={<Home/>}/>
          <Route path="/firebase/Newsfirebase" element={<Newsfirebase/>}/>
        </Routes>
        <Sidebar />
      </div>
      <Footer/>
    </Router>
  );
};
export default AllRoutes;
