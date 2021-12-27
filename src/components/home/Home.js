import React from "react";
import "./home.css"

const Home = () => {
  return (
    <>
    <div className="blog">
        <div className="leftside">
            <h1>Welcome to Journal of Indian Research</h1>
            <p>The Journal of Indian Research (JIR) (ISSN: (Online) 2321 -4155) 
                is a quarterly peer-reviewed, online, open-access (OA), journal supported 
                by an editorial board comprising of subject matter experts drawn 
                from all disciplines.
            </p>
            
        <div className="slidebar"></div>
            
        <div className="middle-div">
            <p>
                The main purpose of the JOURNAL OF INDIAN RESEARCH (JIR) is to 
                bring into focus the latest developments in the field of research 
                by academicians and students. JIR publishes research papers on the 
                topics related to science, engineering, information technology, 
                arts, social science, law, management, commerce, etc. We welcome papers 
                on topics related to core areas of research as well as on 
                interdisciplinary topics. Please send your articles to
            </p>

            <a href="https://www.aravalieducation.org/">https://www.aravalieducation.org</a>

            <p>
                <b>Publisher :</b> Mewar University, Gangrar, Chittorgarh, Rajasthan <br/>
                <b>Printers :</b> M.K. Printers, 5459, New Chandrawal, Kamla Nagar, Delhi-110007 <br/>
                <b>Copyright © Authors. All rights reserved.</b> Authors are responsible for obtaining 
                permission to reproduce copyright material from other sources. 
                The Publisher assumes no responsibility for any statement of fact or opinion or 
                copyright violations in the published papers. The views expressed by authors 
                do not necessarily represent the viewpoint of the Journal.
            </p>
            <hr/>

            <img src="https://jir.mewaruniversity.org/wp-content/uploads/2021/02/magazinefront-768x259.png" alt="Image"/>
            <div className="mainbtn">
                <a href="https://www.aravalieducation.org/"><button className="btn">Get All Issue for Student</button></a>
                <hr/>
                <img src="https://jir.mewaruniversity.org/wp-content/uploads/2021/09/Jir-Vol-9-Issue-12.jpg" alt="pk" className="img2"/>
            </div>
            <div className="bot">
                <a href="https://www.aravalieducation.org/">https://www.aravalieducation.org/</a>
            </div>
        </div>
    </div>

        {/* <div className="rightside">
            <div className="searchdiv">
                <h3>SEARCH VOLUME/ISSUE/RESEARCH PAPER</h3>
                <input type="text"/>
                <button>Search</button>            
            </div>
            <div id="news">
                <h3>News</h3>
                <div className="notice-section">
                    <a href="https://www.aravalieducation.org">Research paper invitation</a>
                    <p>
                        Journal of Indian Research (JIR) solicits original and unpublished research papers 
                        for its July-September- , 2021 issue (JIR, Volume 9, issue 3 ). Please send your 
                        Research paper at jir@mewaruniversity.org , latest by 15 Oct 2021
                    </p>
                </div>
            </div>
        </div> */}
    
    </div>

    {/* <header id="bottombar">
        <p>Copytighy @ Journal of Indian Research | Powered By JIR Team</p>
    </header> */}
</>
  );
};

export default Home;
