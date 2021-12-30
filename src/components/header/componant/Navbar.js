import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { navItems } from "./Navitems";
import Dropdown from "./Dropdown";
import Guidlinesdrop from "./Guidlinesdrop";
import Volumedrop from "./Volumedrop";
import Editordrop from './Editordrop';
import { FaAngleDown,FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  const menuRef=useRef();
  const [dropdown, setDrrodown] = useState(false);
  const [guidlinesdrop, setGuidline] = useState(false);
  const [volume, setVolume] = useState(false);
  const[editor,setEditor]=useState(false)
  const [isMobile,setIsMobile]=useState(false);
  return (
    <>
      <nav className="navbar">
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Aboutus")
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDrrodown(true)}
                  onMouseLeave={() => setDrrodown(false)}
                >
                  <Link to={item.path}>{item.title}<i className="icon"><FaAngleDown/></i></Link>
                  {dropdown && <Dropdown />}
                </li>
              );

            if (item.title === "issue of our journel")
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setVolume(true)}
                  onMouseLeave={() => setVolume(false)}
                >
                  <Link to={item.path}>{item.title}<i className="icon"><FaAngleDown/></i></Link>
                  {volume && <Volumedrop />}
                </li>
              );

            if (item.title === "Guidlines")
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setGuidline(true)}
                  onMouseLeave={() => setGuidline(false)}
                >
                  <Link to={item.path}>{item.title}<i className="icon"><FaAngleDown/></i></Link>
                  {guidlinesdrop && <Guidlinesdrop />}
                </li>
              );
              if (item.title === "Editorial")
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setEditor(true)}
                  onMouseLeave={() => setEditor(false)}
                >
                  <Link to={item.path}>{item.title}<i className="icon"><FaAngleDown/></i></Link>
                  {editor && <Editordrop/>}
                </li>
              );


            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}

        </ul>
        
        
      </nav>
    </>
  );
};

export default Navbar;
