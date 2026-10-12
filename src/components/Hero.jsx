import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden w-full max-w-7xl px-6 lg:px-8 mx-auto">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--orb-1)] rounded-full blur-3xl pointer-events-none transition-colors duration-500"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-[var(--orb-2)] rounded-full blur-3xl pointer-events-none transition-colors duration-500"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full z-10">
        
        {/* Text Content */}
        <div className="flex flex-col space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] font-medium text-sm w-max mb-2 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-dot)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-dot)]"></span>
            </span>
            Available for work
          </div>
          
          <h4 className="text-[var(--text-secondary)] font-medium text-lg lg:text-xl tracking-wide transition-colors duration-300">
            Hi, my name is
          </h4>
          
          <h1 className="text-5xl lg:text-7xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.1] transition-colors duration-300">
            Anteshwar Waghmare.
          </h1>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[var(--text-muted)] leading-tight transition-colors duration-300">
            I build things for the web.
          </h2>
          
          <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-xl mt-4 transition-colors duration-300">
            I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using the <span className="text-[var(--text-primary)] font-medium">MERN stack</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="px-8 py-3.5 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-semibold transition-all duration-300 shadow-lg shadow-[var(--btn-primary-shadow)] hover:-translate-y-0.5">
              Check out my work!
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-xl bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-text)] font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-secondary)]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="12" y2="18"></line><line x1="15" y1="15" x2="12" y2="18"></line></svg>
              Resume (PDF)
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-xl bg-transparent hover:bg-[var(--bg-hover)] border border-[var(--border-medium)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold transition-all duration-300 hover:-translate-y-0.5">
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Hero Visual with User Profile Photo */}
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end perspective-[1000px]">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 transform-style-3d hover:rotate-y-[6deg] hover:rotate-x-[6deg] transition-transform duration-700 ease-out group">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--orb-1)] via-[var(--orb-2)] to-[var(--orb-1)] rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            {/* Photo Container Frame */}
            <div className="relative w-full h-full rounded-3xl p-1.5 bg-[var(--bg-card)] border border-[var(--border-medium)] shadow-2xl overflow-hidden backdrop-blur-sm transition-colors duration-300">
              <img
                src="/profile.png"
                alt="Anteshwar Waghmare"
                className="w-full h-full object-cover object-top rounded-[1.35rem] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle Ambient Gradient Vignette */}
              <div className="absolute inset-0 rounded-[1.35rem] bg-gradient-to-t from-[var(--bg-page)]/60 via-transparent to-transparent pointer-events-none transition-colors duration-300"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
