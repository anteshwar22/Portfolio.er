import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import EducationPage from './components/EducationPage';
import { ThemeProvider } from './context/ThemeContext';

const MainPortfolio = () => (
  <main className="w-full flex flex-col items-center">
    <Hero />
    <Projects />
    <Resume />
    <Contact />
  </main>
);

const AppContent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] font-sans transition-colors duration-300 max-w-full overflow-x-hidden">
      <div className="bg-grid"></div>
      <Navbar isScrolled={isScrolled} />
      <div className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/Education" element={<EducationPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/resume" element={<main className="w-full flex flex-col items-center pt-20 sm:pt-24"><Resume /></main>} />
          <Route path="/Resume" element={<main className="w-full flex flex-col items-center pt-20 sm:pt-24"><Resume /></main>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<MainPortfolio />} />
        </Routes>
      </div>
      <Footer />

      {/* Floating Scroll to Top button for mobile & desktop */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 w-11 h-11 rounded-2xl glass border border-[var(--border-medium)] hover:border-[var(--border-hover)] text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] flex items-center justify-center shadow-2xl active:scale-90 transition-all duration-300 slide-down cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"></path></svg>
        </button>
      )}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
