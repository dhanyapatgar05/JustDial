import React from "react";
import { FaSearch, FaMicrophone,FaChartLine } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
//import { BiBuildings} from "react-icons/bi";
import {  IoMailUnreadOutline } from "react-icons/io5";
//import { AiOutlineMail } from "react-icons/ai";
import { IoMdMegaphone, IoMdDownload } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidBellRing } from "react-icons/bi";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <span className="logo-highlight">Just</span>dial
      </div>
      
      {/* Navigation */}
      <nav className="nav-links">
        <div className="nav-item">
          <MdGTranslate className="icon" /> EN ˅
        </div>
        <span className="nav-item">We are Hiring</span>
        <span className="nav-item">Investor Relations</span>
        <div className="nav-item">
          <IoMailUnreadOutline className="icon" /> Leads
        </div>
        <div className="nav-item">
          <IoMdMegaphone className="icon" /> Advertise
        </div>
        <div className="business-container">
          <div className="business-badge">BUSINESS</div>
          <div className="nav-item">
            <FaChartLine className="icon" /> Free Listing
          </div>
        </div>
        <BiSolidBellRing className="icon" />
        <button className="login-button">
           Login / Sign Up
        </button>
      </nav>
    </header>
      {/* Search Section */}
      <div className="search-section">
        <h2>Search across ‘4.7 Crore+’ <span className="highlight"> Businesses</span></h2>
        <div className="search-container">
          <div className="search-location">
            <CiLocationOn className="icon" />
            <input type="text" placeholder="Betkuli, Karwar" />
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search in Karwar" />
            <FaMicrophone className="icon" />
            <button className="search-button"><FaSearch /></button>
          </div>
          {/* Download Section */}
          <div className="download-section">
            <button className="download-button">
            Download App <IoMdDownload className="icon" />
            </button>
          </div>
        </div>
        
      </div>
      
     
    </div>
  );
};

export default Header;
