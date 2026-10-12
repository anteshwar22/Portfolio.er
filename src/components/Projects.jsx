import React, { useState, useEffect } from 'react';

const dummyProjects = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with MERN stack. Includes user authentication, product management, shopping cart, and Stripe payment integration.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    _id: '2',
    title: 'Task Management App',
    description: 'A drag-and-drop kanban board application for managing tasks and projects. Features real-time updates and team collaboration.',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React', 'Firebase', 'Tailwind', 'Redux'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    _id: '3',
    title: 'EduPulse',
    description: 'Edupulse is an online learning platform where the entire system is designed like a school environment.',
    imageUrl: 'https://edupluse1.onrender.com/edupulse-logo.png',
    technologies: ['MERN Stack'],
    githubLink: '#',
    liveLink: 'https://edupluse1.onrender.com/'
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
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
    <section id="projects" className="py-24 relative w-full max-w-7xl mx-auto px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 relative inline-block transition-colors duration-300">
          Some Things I've Built
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 gradient-accent rounded-full"></span>
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--text-primary)]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project._id} 
              className="glass rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 border border-[var(--border-subtle)] hover:border-[var(--border-hover)]"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--bg-page)]/25 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop';
                  }}
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-[var(--bg-page)]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-6">
                  {project.githubLink && project.githubLink !== '#' && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] transition-colors duration-300 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== '#' && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] transition-colors duration-300 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--btn-primary-bg)] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="text-xs font-medium px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] transition-colors duration-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
