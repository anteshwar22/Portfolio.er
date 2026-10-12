import React, { useState, useEffect } from 'react';

const dummyProjects = [
  {
    _id: "6accc76ba65ed117c9d51187",
    title: "Random Innovators Page",
    description: "Random Innovators is a full-stack web application designed to manage and showcase team members, organizational information, and educational or informational video content through a centralized platform. It provides a responsive public-facing website and an admin dashboard for managing content dynamically.",
    imageUrl: "https://random-innovators.onrender.com/",
    technologies: ["Reactjs", "Nodejs", "MongoDB", "Expressjs"],
    githubLink: "https://github.com/anteshwar22/new-random_innovators-client",
    liveLink: "https://random-innovators.onrender.com/",
    createdAt: "2026-10-12T11:41:31.593Z",
    updatedAt: "2026-10-12T11:41:31.593Z",
    __v: 0
  },
  {
    _id: "6accc893a65ed117c9d51188",
    title: "EduPulse – Interactive Learning Platform",
    description: "EduPulse is a full-stack web application designed to provide an interactive and centralized learning environment for students and teachers. The platform enables students to explore classes and courses, enroll in learning programs, and access online meeting links, while teachers can create and manage courses. An administrative dashboard allows administrators to manage users, classes, and educational content efficiently.",
    imageUrl: "https://edupluse1.onrender.com/",
    technologies: ["Reactjs", "Nodejs", "Expressjs", "MongoDB", "Tailwindcss"],
    githubLink: "",
    liveLink: "https://edupluse1.onrender.com/",
    createdAt: "2026-10-12T11:46:27.093Z",
    updatedAt: "2026-10-12T11:46:27.093Z",
    __v: 0
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://anteshwar-back.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(dummyProjects);
        }
        setLoading(false);
      })
      .catch(() => {
        setProjects(dummyProjects);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="mb-12 sm:mb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] font-medium text-xs mb-3 tracking-wide uppercase transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-dot)] animate-pulse"></span>
          Featured Portfolio
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 relative inline-block transition-colors duration-300">
          Some Things I've <span className="gradient-text">Built</span>
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 gradient-accent rounded-full"></span>
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 transition-colors duration-300">
          A showcase of recent web applications, full-stack systems, and engineering projects.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--text-primary)]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => {
            const hasGithub = project.githubLink && project.githubLink !== '#';
            const hasLive = project.liveLink && project.liveLink !== '#';

            return (
              <div
                key={project._id}
                className="glass rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 border border-[var(--border-subtle)] hover:border-[var(--border-hover)] shadow-lg"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-[var(--bg-card-solid)]">
                  <div className="absolute inset-0 bg-[var(--bg-page)]/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop';
                    }}
                  />

                  {/* Desktop Hover Overlay */}
                  <div className="hidden lg:flex absolute inset-0 bg-[var(--bg-page)]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 items-center justify-center gap-5">
                    {hasGithub && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] transition-colors duration-300 shadow-md"
                        title="View Source Code"
                        aria-label={`View ${project.title} source code`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    )}
                    {hasLive && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] transition-colors duration-300 shadow-md"
                        title="Open Live Preview"
                        aria-label={`Open ${project.title} live preview`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--btn-primary-bg)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-4 flex-grow transition-colors duration-300">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <li key={index} className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] transition-colors duration-300">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Touch/Mobile Action Bar (Always visible and easily tap-able on mobile devices) */}
                  <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-subtle)] mt-auto">
                    {hasLive ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 min-h-[38px]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        <span>Live Demo</span>
                      </a>
                    ) : null}

                    {hasGithub ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className={`py-2 px-3 rounded-xl bg-[var(--bg-card-solid)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-95 min-h-[38px] ${hasLive ? 'flex-1' : 'w-full'
                          }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <span>Code Repo</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
