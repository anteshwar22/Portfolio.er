import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const close = () => {
    setMenuOpen(false);
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    close();

    const scrollTarget = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const navHeight = window.innerWidth < 768 ? 68 : 80;
        const top = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollTarget, 150);
      return;
    }

    scrollTarget();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled || menuOpen
            ? "glass shadow-lg py-2.5 sm:py-3 border-[var(--border-subtle)]"
            : "bg-transparent py-4 sm:py-5 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group" onClick={close}>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-1.5 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--border-hover)] shadow-sm">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain theme-logo" />
              </div>
              <span className="text-xl sm:text-2xl font-heading font-bold tracking-tight gradient-text">
                Anteshwar
              </span>
            </Link>
          </div>

          {/* Mobile Right Controls: Compact Theme Switcher + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <ThemeToggle compact={true} />
            <button
              type="button"
              className="flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] active:scale-95 transition-all text-[var(--text-primary)]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                }`}
              ></span>
            </button>
          </div>

          {/* Desktop Nav Links & Controls */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Projects
            </a>

            <Link
              to="/Education"
              onClick={close}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Education
            </Link>

            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, "resume")}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Resume
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Contact
            </a>

            <div className="flex items-center ml-2">
              <ThemeToggle showLabels={true} />
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] text-sm font-semibold transition-all duration-200 shadow-md shadow-[var(--btn-primary-shadow)] border border-[var(--border-subtle)] flex items-center gap-2 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Resume (PDF)
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden fade-in"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-down Drawer Menu */}
      <div
        className={`fixed top-[60px] sm:top-[68px] left-0 right-0 w-full z-40 lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-4 pointer-events-none invisible"
        }`}
      >
        <div className="glass mx-3 sm:mx-4 mt-2 rounded-2xl border border-[var(--border-medium)] p-5 shadow-2xl space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* Navigation Links List */}
          <div className="flex flex-col space-y-1.5">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)]"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span>Home</span>
            </a>

            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)]"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>Projects</span>
            </a>

            <Link
              to="/Education"
              onClick={close}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)]"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              <span>Education</span>
            </Link>

            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, "resume")}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] active:bg-[var(--bg-hover)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)]"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <span>Contact</span>
            </a>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] space-y-3">
            {/* Theme switcher inside mobile drawer */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Color Theme
              </span>
              <ThemeToggle showLabels={true} compact={false} />
            </div>

            {/* Mobile Resume Download Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="w-full py-3.5 px-4 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] text-sm font-semibold transition-all duration-200 shadow-md shadow-[var(--btn-primary-shadow)] flex items-center justify-center gap-2 active:scale-98"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
