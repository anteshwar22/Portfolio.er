import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h4 className="greeting">Hi, my name is</h4>
        <h1 className="name">John Doe.</h1>
        <h2 className="title gradient-text">I build things for the web.</h2>
        <p className="description">
          I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using the MERN stack.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn">Check out my work!</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </div>
      <div className="hero-image glass">
        <div className="img-placeholder">
          <span>{'{ JS }'}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
