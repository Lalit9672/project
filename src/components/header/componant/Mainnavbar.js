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
            <Link classname="home-icon" to ="./">
              <FaHome />
            </Link>
            <Link id="about" className="header-about" to="./About">AboutUS</Link>
            <Link className="header-editor" to="./Editor/Editors">Editor message</Link>
            <Link className="header-contact" to="./Contact/Contact">ContactUs </Link>
            {/* <i className="searcgh"><FaSearch/></i>  */}
          </div>

          <div className="seacrh-icon"  onClick={() => setSearch(!isSearch)} >
           

            {isSearch ? (
              <i className="searcgh">
                <FaTimes />
              </i>
            ) : (
              <i className="after-icon">
                <FaSearch />
              </i>
            )}
           
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
        <div className={isSearch ? "nav-link-search" : "search"} onClick={() => setSearch(true)} >
            <form >
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">Submit</button>
            </form>
          </div>
      </div>
    </>
  );
};

export default Mainnavbar;
