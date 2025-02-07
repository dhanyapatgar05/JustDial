import React from "react";
import { FaBell } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiBuildings, BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdMegaphone } from "react-icons/io";
import "./Header.css";

const Header = () => {
  return (
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
          <AiOutlineMail className="icon" /> Leads
        </div>
        <div className="nav-item">
          <IoMdMegaphone className="icon" /> Advertise
        </div>
        <div className="business-container">
          <div className="business-badge">BUSINESS</div>
          <div className="nav-item">
            <BiBuildings className="icon" /> Free Listing
          </div>
        </div>
        <FaBell className="icon" />
        <button className="login-button">
          <BiUser /> Login / Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Header;
