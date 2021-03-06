import React, { useState } from "react";
import "./respo.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Research from './components/Research/Research'
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
import Cpaper from "./components/Callforpaper/Cpaper";
import TAD from "./components/TurnAroundDates/TAD";
import About from "./components/about/About";
import Aim from "./components/Aim/Aim";
import Booksubmission from "./components/submissions/Booksubmission";
import Guidlinesub from "./components/submissions/Guidlinesub";
import AddNews from "./components/admin/AddNews";
import UploadVolume from "./components/admin/UploadVolume";
import Volumes from "./components/pdffile/Volumes";
// import Chairman from "./components/Editor/Chairman";
// import Vicecanceler from "./components/Editor/Vicecanceler";

const AllRoutes = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="repo">
      <Router>
        <Header />
        <div className="respo">

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

            <Route path="/Editor" element={<Home />} />
            <Route path="/Editor/Editors" element={<Editor />} />
            <Route path="/Editor/editornew" element={<editornew />} />

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

            <Route path="/TurnAroundDates" element={<Home />} />

            <Route path="/TurnAroundDates/TAD" element={<TAD />} />

            <Route path="/about/Objectives" element={<Objectives />} />
            <Route path="/firebase" element={<Home />} />

            <Route path="/Aim/Aim" element={<Aim />} />

            <Route path="/Research/Research" element={<Research />}></Route>
            <Route
              path="/submission/Booksubmission"
              element={<Booksubmission />}
            />
            <Route path="/submission/Guidlinesub" element={<Guidlinesub />} />

            <Route />
            <Route
              setShowSideBar={setShowSideBar}
              path="/turnaround/TAD"
              element={<TAD setShowSideBar={setShowSideBar} />}
            />
            {/* Admin */}
            <Route path="/add/volume" element={<UploadVolume />} />
            <Route path="/view/file/:docid/:index" element={<Volumes />} />
            <Route path="/admin/create/new" element={<AddNews />} />
          </Routes>
          {showSideBar && <Sidebar />}
        </div>
        <Footer />
      </Router>
    </div>
  );
};
export default AllRoutes;
