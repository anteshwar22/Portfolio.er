import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#home" className="gradient-text">Anteshwar</a>
        </div>
        
        <button 
          className={`menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#resume" className="btn" onClick={() => setMenuOpen(false)}>Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
