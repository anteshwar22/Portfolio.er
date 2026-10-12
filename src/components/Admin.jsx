import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    technologies: '',
    githubLink: '',
    liveLink: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');

  const API_BASE = 'https://anteshwar-dev.onrender.com/admin';

  const fetchProjects = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const techArray = typeof formData.technologies === 'string' 
      ? formData.technologies.split(',').map(t => t.trim())
      : formData.technologies;

    const payload = {
      ...formData,
      technologies: techArray
    };

    try {
      const url = isEditing 
        ? `${API_BASE}/${editId}` 
        : API_BASE;
        
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setMessage(isEditing ? 'Project updated successfully!' : 'Project added successfully!');
        setFormData({ title: '', description: '', imageUrl: '', technologies: '', githubLink: '', liveLink: '' });
        setIsEditing(false);
        setEditId(null);
        fetchProjects();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Error saving project.');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      console.error(err);
      setMessage('Error connecting to server.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      technologies: project.technologies.join(', '),
      githubLink: project.githubLink || '',
      liveLink: project.liveLink || ''
    });
    setIsEditing(true);
    setEditId(project._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const res = await fetch(`${API_BASE}/${id}`, {
          method: 'DELETE'
        });
        if (res.ok) {
          setMessage('Project deleted successfully!');
          fetchProjects();
          setTimeout(() => setMessage(''), 3000);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-1.5 px-3 rounded-lg hover:bg-[var(--bg-hover)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] mb-3 transition-colors duration-300">
          Admin Dashboard
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base transition-colors duration-300">
          Manage and publish your portfolio projects
        </p>
      </div>

      {message && (
        <div className={`fixed top-20 sm:top-24 left-1/2 transform -translate-x-1/2 px-5 py-2.5 rounded-xl shadow-xl z-50 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all duration-300 slide-down ${message.includes('Error') ? 'bg-red-500/90 border border-red-500/30' : 'bg-green-500/90 border border-green-500/30'}`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Section */}
        <div className="lg:col-span-5 glass rounded-2xl p-5 sm:p-7 md:p-8 border border-[var(--border-subtle)] shadow-xl lg:sticky lg:top-28">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-primary)] mb-5 transition-colors duration-300">
            {isEditing ? 'Edit Project' : 'Add New Project'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-2.5 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" />
            </div>
            
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required rows="3" className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-2.5 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all resize-none"></textarea>
            </div>
            
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Image URL</label>
              <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-2.5 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" />
            </div>
            
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Technologies (comma separated)</label>
              <input type="text" name="technologies" value={formData.technologies} onChange={handleChange} required className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-2.5 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" placeholder="React, Node.js, Express" />
            </div>
            
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">GitHub Link</label>
              <input type="text" name="githubLink" value={formData.githubLink} onChange={handleChange} className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-2.5 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" />
            </div>
            
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Live Link</label>
              <input type="text" name="liveLink" value={formData.liveLink} onChange={handleChange} className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-2.5 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" />
            </div>
            
            <div className="pt-2 flex flex-col gap-2.5">
              <button type="submit" className="w-full px-6 py-3.5 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-semibold text-sm transition-all duration-300 shadow-md shadow-[var(--btn-primary-shadow)] active:scale-98">
                {isEditing ? 'Update Project' : 'Add Project'}
              </button>
              {isEditing && (
                <button 
                  type="button" 
                  className="w-full px-6 py-3 rounded-xl bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover)] text-[var(--btn-secondary-text)] font-semibold text-sm transition-all border border-[var(--btn-secondary-border)] active:scale-98"
                  onClick={() => {
                    setIsEditing(false);
                    setEditId(null);
                    setFormData({ title: '', description: '', imageUrl: '', technologies: '', githubLink: '', liveLink: '' });
                  }}
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List Section */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass rounded-2xl p-5 sm:p-7 border border-[var(--border-subtle)] shadow-xl">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-primary)] mb-5 border-b border-[var(--border-subtle)] pb-4 transition-colors duration-300">
              Existing Projects ({projects.length})
            </h3>
            
            <div className="space-y-4">
              {projects.length === 0 ? (
                <p className="text-[var(--text-muted)] text-center py-8 text-sm">No projects found. Add one to get started!</p>
              ) : (
                projects.map(project => (
                  <div key={project._id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full sm:w-28 h-32 sm:h-24 object-cover rounded-lg shadow-sm"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&h=150&fit=crop'; }}
                    />
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="text-base font-bold text-[var(--text-primary)] mb-1">{project.title}</h4>
                        <p className="text-xs sm:text-sm text-[var(--text-muted)] line-clamp-2 leading-relaxed">{project.description}</p>
                      </div>
                      <div className="flex gap-2.5 mt-3 sm:mt-2">
                        <button 
                          onClick={() => handleEdit(project)} 
                          className="px-3.5 py-1.5 rounded-lg bg-[var(--btn-secondary-bg)] text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] transition-colors text-xs font-semibold border border-[var(--border-medium)] active:scale-95"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(project._id)} 
                          className="px-3.5 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors text-xs font-semibold border border-red-500/20 hover:border-red-500 active:scale-95"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Admin;
