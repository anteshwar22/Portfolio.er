import React, { useState } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('interactive'); // 'interactive' | 'pdf'

  const skillsData = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'C++', 'SQL', 'HTML5', 'CSS3']
    },
    {
      category: 'Frontend Development',
      skills: ['React.js', 'Redux Toolkit', 'Context API', 'Tailwind CSS']
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'bcrypt']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'LocalStorage']
    },
    {
      category: 'Developer Tools',
      skills: ['Git', 'GitHub', 'Linux', 'Bash Scripting', 'Postman', 'Vercel', 'VS Code']
    }
  ];

  return (
    <section id="resume" className="py-16 sm:py-24 relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[var(--orb-1)] rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-500 max-w-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-[28rem] sm:h-[28rem] bg-[var(--orb-2)] rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-500 max-w-full"></div>

      {/* Section Header */}
      <div className="mb-10 sm:mb-14 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] font-medium text-xs mb-3 tracking-wide uppercase transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-dot)] animate-pulse"></span>
          Curriculum Vitae
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 relative inline-block transition-colors duration-300">
          Resume & <span className="gradient-text">Experience</span>
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 gradient-accent rounded-full"></span>
        </h2>
        
        <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 transition-colors duration-300">
          Comprehensive overview of my technical proficiencies, professional training, projects, and career milestones.
        </p>

        {/* View Switcher & Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
          {/* Segmented Control */}
          <div className="inline-flex p-1 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-md w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('interactive')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 min-h-[38px] ${
                activeTab === 'interactive'
                  ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              <span>Interactive View</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pdf')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 min-h-[38px] ${
                activeTab === 'pdf'
                  ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>PDF Document</span>
            </button>
          </div>

          {/* Quick PDF Actions */}
          <div className="grid grid-cols-2 sm:flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="/resume.pdf"
              download="Anteshwar_Waghmare_Resume.pdf"
              className="px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-[var(--btn-primary-shadow)] flex items-center justify-center gap-2 min-h-[40px] active:scale-95 text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-text)] text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 min-h-[40px] active:scale-95 text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>Open in Tab</span>
            </a>
          </div>
        </div>
      </div>

      {/* TAB 1: INTERACTIVE RESUME VIEW */}
      {activeTab === 'interactive' && (
        <div className="space-y-8 sm:space-y-10">
          
          {/* Header Card / Contact Info */}
          <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[var(--border-subtle)] relative overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 sm:gap-6 pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight">
                  Anteshwar Waghmare
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base font-medium mt-1">
                  Computer Engineering Student & Full-Stack Developer
                </p>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[var(--text-muted)] mt-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)] flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Lonavala, Maharashtra, India</span>
                </div>
              </div>

              {/* Quick Contact & Links (Responsive Grid on Mobile) */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 w-full lg:w-auto">
                <a
                  href="mailto:anteshwarwaghmare.sit.comp@gmail.com"
                  className="px-3 py-2 rounded-xl bg-[var(--bg-card-solid)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors min-h-[38px] active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/anteshwar22"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl bg-[var(--bg-card-solid)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors min-h-[38px] active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/anteshwar-waghmare"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl bg-[var(--bg-card-solid)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors min-h-[38px] active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/AnteshwarWaghmare"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl bg-[var(--bg-card-solid)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors min-h-[38px] active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="pt-5 sm:pt-6">
              <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                Professional Summary
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                Computer Engineering student with strong foundations in Java, Python, Data Structures and Algorithms, SQL, Object-Oriented Programming, and Full-Stack Web Development. Hands-on experience developing React.js and Node.js applications with REST APIs, authentication, database integration, and responsive user interfaces. Familiar with MongoDB, MySQL, Git, GitHub, Linux, and Bash scripting. Strong problem-solving skills with 100+ LeetCode problems solved.
              </p>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--btn-primary-bg)]"></span>
              Technical Proficiencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skillsData.map((group, idx) => (
                <div
                  key={idx}
                  className="glass p-5 sm:p-6 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all duration-300"
                >
                  <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center justify-between">
                    {group.category}
                    <span className="text-xs text-[var(--text-faint)] font-mono">0{idx + 1}</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--btn-primary-bg)]"></span>
              Work Experience
            </h3>

            <div className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-[var(--text-primary)]">
                    Web Development Intern
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)]">
                    INGenious Technohub Pvt. Ltd.
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] w-max">
                  2023
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)] mb-5 list-disc list-inside leading-relaxed">
                <li>Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript.</li>
                <li>Implemented interactive frontend features and dynamic functionality using JavaScript.</li>
                <li>Wrote and executed SQL queries for data retrieval, manipulation, and database management.</li>
                <li>Debugged application issues and gained hands-on experience with modern software development workflows.</li>
              </ul>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mr-1">
                  Technologies:
                </span>
                {['HTML', 'CSS', 'JavaScript', 'SQL'].map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-[var(--bg-pill)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Achievements Dual Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Certifications */}
            <div className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[var(--border-subtle)]">
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-secondary)]"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                <span>Certifications & Training</span>
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl sm:rounded-2xl bg-[var(--bg-card-solid)] border border-[var(--border-subtle)]">
                  <h4 className="font-bold text-xs sm:text-sm text-[var(--text-primary)]">
                    Complete Web Development Course
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5 mb-2">
                    Hitesh Choudhary, Udemy
                  </p>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Completed a 100-hour comprehensive course covering HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS, Git, GitHub, and JWT.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[var(--border-subtle)]">
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-secondary)]"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                <span>Key Achievements</span>
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-dot)] mt-1.5 flex-shrink-0"></span>
                  <span>Solved <strong>100+ Data Structures and Algorithms</strong> problems on LeetCode.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-dot)] mt-1.5 flex-shrink-0"></span>
                  <span>Active <strong>ACM Member</strong> and contributor to the Event Management Team.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-dot)] mt-1.5 flex-shrink-0"></span>
                  <span>Participated in <strong>Fusion Hackathon, Pune</strong>.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: EMBEDDED PDF VIEWER (MOBILE OPTIMIZED) */}
      {activeTab === 'pdf' && (
        <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[var(--border-subtle)] shadow-2xl">
          {/* Mobile Helper Card */}
          <div className="md:hidden mb-4 p-4 rounded-xl bg-[var(--bg-card-solid)] border border-[var(--border-subtle)] text-center">
            <p className="text-xs text-[var(--text-secondary)] mb-3">
              On mobile devices, opening the PDF directly provides the best pinch-to-zoom and readable view.
            </p>
            <div className="flex gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                <span>Open Full Screen</span>
              </a>
              <a
                href="/resume.pdf"
                download="Anteshwar_Waghmare_Resume.pdf"
                className="flex-1 py-2 px-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Download</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 pb-4 border-b border-[var(--border-subtle)] px-1 sm:px-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <span className="text-xs font-mono text-[var(--text-muted)] ml-1 truncate max-w-[200px] sm:max-w-none">
                Anteshwar_Waghmare_Resume.pdf
              </span>
            </div>
            
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="/resume.pdf"
                download="Anteshwar_Waghmare_Resume.pdf"
                className="px-3.5 py-1.5 rounded-lg bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-semibold hover:bg-[var(--btn-primary-hover)] transition-colors flex items-center gap-1.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-card-solid)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Full Screen
              </a>
            </div>
          </div>

          <div className="w-full h-[520px] sm:h-[700px] md:h-[880px] rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-[var(--border-subtle)] shadow-inner">
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0"
              title="Anteshwar Waghmare Resume PDF"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Resume;
