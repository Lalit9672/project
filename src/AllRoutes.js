import React from "react";
import "./respo.css";
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
import Newsfirebase from "./components/firebase/Newsfirebase";
import Cpaper from "./components/Callforpaper/Cpaper";

import About from "./components/about/About";
import Aim from "./components/Aim/Aim";
import Booksubmission from "./components/submissions/Booksubmission";
import Guidlinesub from "./components/submissions/Guidlinesub";

const AllRoutes = () => {
  return (
    <div className="repo" >
      <Router>
        <Header />
        <div className="respo">
          {/* style={{ display: "flex", paddingLeft: "70px", paddingRight: "70px" }} */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/about/introduction" element={<Introduction />} />
            <Route path="/about/Objectives" element={<Objectives />} />
            <Route
              path="/about/MissionAndVision"
              element={<MissionAndVision />}
            />
            <Route path="/Contact" element={<Home />} />
            <Route path="/Contact/Contact" element={<Contact />} />
            <Route path="/Editor/Editor" element={<Editor />} />
            <Route
              path="/Editor/chairepersons-message"
              element={<Chairman />}
            />
            <Route
              path="/Editor/message-of-ethical-committee-chairman"
              element={<Vicecanceler />}
            />
            <Route
              path="/Editor/editors-message"
              element={<Editorsmessage />}
            />
            <Route
              path="/Editor/associate-editors-message"
              element={<Associate />}
            />
            <Route
              path="/about/MissionAndVision"
              element={<MissionAndVision />}
            />

            <Route path="/Callforpaper" element={<Home />} />

            <Route path="/Callforpaper/Cpaper" element={<Cpaper />} />
            <Route path="/about/Objectives" element={<Objectives />} />
            <Route path="/firebase" element={<Home />} />
            <Route path="/firebase/Newsfirebase" element={<Newsfirebase />} />
            <Route path="/Aim/Aim" element={<Aim />} />
            <Route
              path="/submission/Booksubmission"
              element={<Booksubmission />}
            />
            <Route path="/submission/Guidlinesub" element={<Guidlinesub />} />
          </Routes>
          <Sidebar />
        </div>
        <Footer />
      </Router>
    </div>
  );
};
export default AllRoutes;
