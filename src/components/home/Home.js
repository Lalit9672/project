import React from "react";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="blog">
        <div className="leftside">
          <h1>Welcome to Journal of Indian Research</h1>
          <p>
            The Journal of Indian Research (JIR) (ISSN: (Online) 2321 -4155) is
            a quarterly peer-reviewed, online, open-access (OA), journal
            supported by an editorial board comprising of subject matter experts
            drawn from all disciplines.
          </p>

          {/* Slidebar Start */}
          <div className="slidebar">
            <div className="slides">
              {/* <faC  width={20} height={20} icon={"facebook"} />
              <FontAwesomeIcon icon="fa-solid fa-angle-right" /> */}
              {/* <FontAwesomeIcon icon={faCoffee}/> */}
            </div>
          </div>

          {/* Slidebar End */}

          <div className="middle-div">
            <p>
              The main purpose of the JOURNAL OF INDIAN RESEARCH (JIR) is to
              bring into focus the latest developments in the field of research
              by academicians and students. JIR publishes research papers on the
              topics related to science, engineering, information technology,
              arts, social science, law, management, commerce, etc. We welcome
              papers on topics related to core areas of research as well as on
              interdisciplinary topics. Please send your articles to
            </p>

            <a href="https://www.aravalieducation.org/">
              https://www.aravalieducation.org
            </a>

            <p>
              <b>Publisher :</b> Mewar University, Gangrar, Chittorgarh, Rajasthan <br />
              <b>Printers :</b> M.K. Printers, 5459, New Chandrawal, Kamla Nagar, Delhi-110007 <br />
              <b>Copyright © Authors. All rights reserved.</b> Authors are
              responsible for obtaining permission to reproduce copyright
              material from other sources. The Publisher assumes no
              responsibility for any statement of fact or opinion or copyright
              violations in the published papers. The views expressed by authors
              do not necessarily represent the viewpoint of the Journal.
            </p>
            <hr />

            <img
              src="https://jir.mewaruniversity.org/wp-content/uploads/2021/02/magazinefront-768x259.png"
              alt="Image-2"
            />
            <div className="mainbtn">
              <a href="https://www.aravalieducation.org/">
                <button className="btn">Get All Issue for JIR</button>
              </a>
              <hr />
              <img
                src="https://jir.mewaruniversity.org/wp-content/uploads/2021/09/Jir-Vol-9-Issue-12.jpg"
                alt="pk"
                className="img2"
              />
            </div>
            <div className="bot">
              <a href="https://www.aravalieducation.org/">
                https://www.aravalieducation.org/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
