import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto border-t border-[var(--border-subtle)] relative z-10 bg-[var(--bg-nav)] backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex items-center gap-2.5 mb-5 opacity-90 hover:opacity-100 transition-opacity">
          <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain theme-logo" />
          <span className="font-heading font-bold text-[var(--text-secondary)] text-base tracking-tight">Anteshwar</span>
        </div>

        <div className="flex gap-6 mb-6">
          <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        
        <p className="text-sm font-mono text-[var(--text-faint)] hover:text-[var(--text-primary)] transition-colors duration-300 cursor-pointer">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            Designed & Built by Anteshwar Waghmare
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
