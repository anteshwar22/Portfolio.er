import React, { useState, useEffect } from 'react';
import './Projects.css';

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
    title: 'Weather Dashboard',
    description: 'A beautiful weather application providing real-time forecasts, interactive maps, and weather alerts using the OpenWeather API.',
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    technologies: ['React', 'API', 'Chart.js', 'CSS3'],
    githubLink: '#',
    liveLink: '#'
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Attempt to fetch from backend, fallback to dummy data
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
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
    <section id="projects" className="projects-section">
      <h2 className="section-title">Some Things I've Built</h2>
      
      {loading ? (
        <div className="loader">Loading projects...</div>
      ) : (
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project._id} className="project-card glass">
              <div className="project-img">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="icon-link">
                    GitHub
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="icon-link">
                    Live
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
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
