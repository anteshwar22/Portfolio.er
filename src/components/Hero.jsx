import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-68px)] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20 overflow-hidden w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[var(--orb-1)] rounded-full blur-3xl pointer-events-none transition-colors duration-500 max-w-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] bg-[var(--orb-2)] rounded-full blur-3xl pointer-events-none transition-colors duration-500 max-w-full"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full z-10">
        
        {/* Mobile Profile Photo (Centered on mobile, hidden on lg where desktop photo is placed) */}
        <div className="flex lg:hidden justify-center w-full">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--orb-1)] via-[var(--orb-2)] to-[var(--orb-1)] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-full h-full rounded-2xl p-1 bg-[var(--bg-card)] border border-[var(--border-medium)] shadow-xl overflow-hidden backdrop-blur-sm transition-colors duration-300">
              <img
                src="/profile.png"
                alt="Anteshwar Waghmare"
                className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[var(--bg-page)]/50 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col space-y-4 sm:space-y-6 max-w-2xl lg:col-span-7 text-center sm:text-left items-center sm:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] font-medium text-xs sm:text-sm w-max transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-dot)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-dot)]"></span>
            </span>
            Available for opportunities
          </div>
          
          <h4 className="text-[var(--text-secondary)] font-medium text-base sm:text-lg lg:text-xl tracking-wide transition-colors duration-300">
            Hi, my name is
          </h4>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.12] transition-colors duration-300 break-words">
            Anteshwar Waghmare.
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-muted)] leading-tight transition-colors duration-300">
            I build things for the web.
          </h2>
          
          <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl transition-colors duration-300">
            I'm a full-stack developer specializing in creating intuitive, high-performance digital experiences. Focused on building accessible, modern web products using the <span className="text-[var(--text-primary)] font-semibold">MERN stack</span>.
          </p>
          
          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[var(--btn-primary-shadow)] hover:-translate-y-0.5 active:scale-98 text-center flex items-center justify-center gap-2"
            >
              <span>Explore My Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>

            <div className="grid grid-cols-2 sm:flex items-center gap-3 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-3.5 rounded-xl bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-text)] font-semibold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-2 text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-secondary)]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="12" y2="18"></line><line x1="15" y1="15" x2="12" y2="18"></line></svg>
                <span>Resume (PDF)</span>
              </a>

              <a
                href="https://github.com/anteshwar22"
                target="_blank"
                rel="noreferrer"
                className="px-4 sm:px-6 py-3.5 rounded-xl bg-transparent hover:bg-[var(--bg-hover)] border border-[var(--border-medium)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-2 text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Profile Photo (Hidden on mobile, visible on lg) */}
        <div className="hidden lg:flex lg:col-span-5 relative w-full h-full min-h-[380px] items-center justify-end perspective-[1000px]">
          <div className="relative w-80 h-80 xl:w-96 xl:h-96 transform-style-3d hover:rotate-y-[6deg] hover:rotate-x-[6deg] transition-transform duration-700 ease-out group">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--orb-1)] via-[var(--orb-2)] to-[var(--orb-1)] rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            {/* Photo Container Frame */}
            <div className="relative w-full h-full rounded-3xl p-1.5 bg-[var(--bg-card)] border border-[var(--border-medium)] shadow-2xl overflow-hidden backdrop-blur-sm transition-colors duration-300">
              <img
                src="/profile.png"
                alt="Anteshwar Waghmare"
                className="w-full h-full object-cover object-top rounded-[1.35rem] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 rounded-[1.35rem] bg-gradient-to-t from-[var(--bg-page)]/60 via-transparent to-transparent pointer-events-none transition-colors duration-300"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
