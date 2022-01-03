import React from 'react'
import "./mainnavbar.css";
import{Link } from 'react-router-dom'
import { FaHome,FaSearch,FaAlignJustify,FaTimes} from "react-icons/fa";
import { useState} from 'react';


const Mainnavbar = () => {
    
 
    const [isMobile,setIsMobile]=useState(false);
 
    return (
        <>
        <div className='main-nav'>
        <div className="main">
            <div className={isMobile?"nav-link-mobile":"main-compo"}
            onClick={()=>setIsMobile(false)}
            >
                <Link to="./" ><FaHome/></Link>
                <Link to ="/">AboutUS</Link>
                <Link to ="./Editor/Editor">Editor message</Link>
                <Link to ="./Contact/Contact">Contact us </Link>
                {/* <i className="searcgh"><FaSearch/></i>  */}
            </div>
           
            <div className='seacrh-icon'>
               <i className="searcgh"><FaSearch/></i> 
            </div>

            <button className='mobile-menu-icon'
            onClick={()=>setIsMobile(!isMobile)}
            >
          {isMobile ?(
        <i className='after-icon'><FaTimes/></i>
          ):(
            <i className='after-icon'><FaAlignJustify/></i>
          )}
        </button>
            
            
            
        </div>
        </div>
       
        </>
    )
}

export default Mainnavbar
