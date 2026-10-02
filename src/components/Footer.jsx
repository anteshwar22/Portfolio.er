import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="#" className="social-icon">GH</a>
          <a href="#" className="social-icon">LI</a>
          <a href="#" className="social-icon">TW</a>
        </div>
        <p className="copyright">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">
            Designed & Built by Anteshwar Waghmare
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
