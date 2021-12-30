import React from 'react'
import "./sidebar.css"
import { FaSearch } from "react-icons/fa";
const Sidebar = () => {
    return (
        <>
        <div className="rightside">
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
        </div>
        
        </>
    )
}

export default Sidebar
