import React from "react";
import "./mainnavbar.css";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaAlignJustify, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Mainnavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setSearch] = useState(false);

  return (
    <>
      <div className="main-nav">
        <div className="main">
          <div
            className={isMobile ? "nav-link-mobile" : "main-compo"}
            onClick={() => setIsMobile(false)}
          >
            <Link to="./">
              <FaHome />
            </Link>
            <Link to="./About">AboutUS</Link>
            <Link to="./Editor/Editor">Editor message</Link>
            <Link to="./Contact/Contact">ContactUs </Link>
            {/* <i className="searcgh"><FaSearch/></i>  */}
          </div>

          <div className="seacrh-icon">
            <i className="searcgh">
              <FaSearch onClick={() => setSearch(false)} />
            </i>
          </div>
          <div className={isSearch ? "nav-link-search" : "search"} onClick={() => setSearch(!isSearch)}>
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">Submit</button>
            </form>
          </div>

          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="after-icon">
                <FaTimes />
              </i>
            ) : (
              <i className="after-icon">
                <FaAlignJustify />
              </i>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Mainnavbar;
