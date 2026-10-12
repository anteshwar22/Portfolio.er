import React, { useState, useEffect } from 'react';

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

  const fetchProjects = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/projects');
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
        ? `http://localhost:5000/api/projects/${editId}` 
        : 'http://localhost:5000/api/projects';
        
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
        const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
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
    <div className="min-h-screen pt-28 pb-16 px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 transition-colors duration-300">
          Admin Dashboard
        </h2>
        <p className="text-[var(--text-muted)] text-lg transition-colors duration-300">
          Manage your portfolio projects
        </p>
      </div>

      {message && (
        <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-xl z-50 text-white font-medium backdrop-blur-md transition-all duration-300 ${message.includes('Error') ? 'bg-red-500/80 border border-red-500/20' : 'bg-green-500/80 border border-green-500/20'}`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Section */}
        <div className="lg:col-span-5 glass rounded-2xl p-6 md:p-8 border border-[var(--border-subtle)] shadow-2xl sticky top-28">
          <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-6 transition-colors duration-300">
            {isEditing ? 'Edit Project' : 'Add New Project'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group">
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" />
            </div>
            
            <div className="group">
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required rows="3" className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all resize-none"></textarea>
            </div>
            
            <div className="group">
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Image URL</label>
              <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" />
            </div>
            
            <div className="group">
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Technologies (comma separated)</label>
              <input type="text" name="technologies" value={formData.technologies} onChange={handleChange} required className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" />
            </div>
            
            <div className="group">
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">GitHub Link</label>
              <input type="text" name="githubLink" value={formData.githubLink} onChange={handleChange} className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" />
            </div>
            
            <div className="group">
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">Live Link</label>
              <input type="text" name="liveLink" value={formData.liveLink} onChange={handleChange} className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all" />
            </div>
            
            <div className="pt-2 flex flex-col gap-3">
              <button type="submit" className="w-full px-6 py-3 rounded-lg bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-semibold transition-all duration-300 shadow-lg shadow-[var(--btn-primary-shadow)]">
                {isEditing ? 'Update Project' : 'Add Project'}
              </button>
              {isEditing && (
                <button 
                  type="button" 
                  className="w-full px-6 py-3 rounded-lg bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover)] text-[var(--btn-secondary-text)] font-semibold transition-all border border-[var(--btn-secondary-border)]"
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
          <div className="glass rounded-2xl p-6 border border-[var(--border-subtle)] shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-6 border-b border-[var(--border-subtle)] pb-4 transition-colors duration-300">
              Existing Projects
            </h3>
            
            <div className="space-y-4">
              {projects.length === 0 ? (
                <p className="text-[var(--text-muted)] text-center py-8">No projects found. Add one to get started!</p>
              ) : (
                projects.map(project => (
                  <div key={project._id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full sm:w-32 h-32 sm:h-24 object-cover rounded-lg shadow-md"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&h=150&fit=crop'; }}
                    />
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">{project.title}</h4>
                        <p className="text-sm text-[var(--text-muted)] line-clamp-2">{project.description}</p>
                      </div>
                      <div className="flex gap-3 mt-4 sm:mt-2">
                        <button 
                          onClick={() => handleEdit(project)} 
                          className="px-4 py-1.5 rounded-md bg-[var(--btn-secondary-bg)] text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] transition-colors text-sm font-medium border border-[var(--border-medium)]"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(project._id)} 
                          className="px-4 py-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors text-sm font-medium border border-red-500/20 hover:border-red-500"
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
