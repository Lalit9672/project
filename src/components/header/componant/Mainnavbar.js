import React from 'react'
import "./mainnavbar.css";
import{Link } from 'react-router-dom'
import { FaHome,FaSearch } from "react-icons/fa";


const Mainnavbar = () => {
    return (
        <>
        <div className="main">
            <div className='main-compo'>
                <Link to="/" ><FaHome/></Link>
                <Link to ="/">AboutUS</Link>
                <Link to ="/">Editor message</Link>
                <Link to ="/">Contact us </Link>
            </div>
            <div className='seacrh-icon'>
               <i className="searcgh"><FaSearch/></i> 
            </div>
            
            
        </div>
        </>
    )
}

export default Mainnavbar
