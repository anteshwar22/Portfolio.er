import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-10 mt-auto border-t border-[var(--border-subtle)] relative z-10 bg-[var(--bg-nav)] backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Brand & Scroll to Top */}
        <div className="flex items-center justify-between w-full max-w-2xl mb-6 pb-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] p-1 flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain theme-logo" />
            </div>
            <span className="font-heading font-bold text-[var(--text-secondary)] text-base tracking-tight">Anteshwar Waghmare</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all active:scale-95 cursor-pointer"
          >
            <span>Top</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"></path></svg>
          </button>
        </div>

        {/* Quick Links for Mobile / Desktop */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 text-xs sm:text-sm font-medium text-[var(--text-muted)]">
          <a href="#home" className="hover:text-[var(--text-primary)] transition-colors">Home</a>
          <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">Projects</a>
          <Link to="/Education" className="hover:text-[var(--text-primary)] transition-colors">Education</Link>
          <a href="#resume" className="hover:text-[var(--text-primary)] transition-colors">Resume</a>
          <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</a>
          <Link to="/admin" className="hover:text-[var(--text-primary)] transition-colors opacity-60 hover:opacity-100">Admin</Link>
        </div>

        {/* Social Media Links with Touch-friendly Targets */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6">
          <a
            href="https://github.com/anteshwar22"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all shadow-sm active:scale-95"
            aria-label="GitHub Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>

          <a
            href="https://linkedin.com/in/anteshwar-waghmare"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all shadow-sm active:scale-95"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          <a
            href="https://leetcode.com/u/AnteshwarWaghmare"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all shadow-sm active:scale-95"
            aria-label="LeetCode Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
          </a>

          <a
            href="mailto:anteshwarwaghmare.sit.comp@gmail.com"
            className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all shadow-sm active:scale-95"
            aria-label="Send Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>
        </div>
        
        <p className="text-xs sm:text-sm font-mono text-[var(--text-faint)] leading-relaxed">
          Designed & Built with ❤️ by <span className="text-[var(--text-secondary)] font-medium">Anteshwar Waghmare</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
