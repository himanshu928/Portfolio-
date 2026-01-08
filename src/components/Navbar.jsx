import React from 'react'
import logoImage from '../assets/logo.png'
import "../Styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <img src={logoImage} alt="Logo" />

      {/* Hamburger Icon */}
      <div className="hamburger-menu">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
        <li id="contact" onClick={() => setMenuOpen(false)}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
