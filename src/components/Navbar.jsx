import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const close = () => setMenuOpen(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    close();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'glass shadow-lg py-3 border-[var(--border-subtle)]' : 'bg-transparent py-5 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-3 group" onClick={close}>
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-1.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--border-hover)] shadow-sm">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain theme-logo" />
            </div>
            <span className="text-2xl font-heading font-bold tracking-tight gradient-text">
              Anteshwar
            </span>
          </Link>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Desktop Nav Links & Controls */}
        <nav className={`lg:flex items-center gap-7 ${menuOpen ? 'flex flex-col absolute top-full left-0 w-full glass border-b border-[var(--border-subtle)] py-6 px-6 space-y-5 shadow-2xl slide-down' : 'hidden'}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200">
            Home
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200">
            Projects
          </a>
          
          <Link to="/Education" onClick={close} className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200">
            Education
          </Link>

          <a href="#resume" onClick={(e) => handleNavClick(e, "resume")} className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200">
            Resume
          </a>

          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200">
            Contact
          </a>

          <div className="hidden lg:flex items-center">
            <ThemeToggle />
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="px-5 py-2.5 rounded-lg bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] text-sm font-semibold transition-all duration-200 shadow-lg shadow-[var(--btn-primary-shadow)] border border-[var(--border-subtle)] flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Resume (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
