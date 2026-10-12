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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] font-sans transition-colors duration-300">
      <div className="bg-grid"></div>
      <Navbar isScrolled={isScrolled} />
      <div className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/Education" element={<EducationPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/resume" element={<main className="w-full flex flex-col items-center pt-16"><Resume /></main>} />
          <Route path="/Resume" element={<main className="w-full flex flex-col items-center pt-16"><Resume /></main>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<MainPortfolio />} />
        </Routes>
      </div>
      <Footer />
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
