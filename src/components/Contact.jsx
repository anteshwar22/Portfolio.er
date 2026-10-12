import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending form
    alert('Message sent! (Simulated)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative w-full max-w-4xl mx-auto px-6 lg:px-8">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--orb-1)] rounded-full blur-[100px] pointer-events-none transition-colors duration-500"></div>

      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <h4 className="text-[var(--text-secondary)] font-medium text-lg tracking-wide mb-2 transition-colors duration-300">What's Next?</h4>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] mb-6 transition-colors duration-300">
          Get In Touch
        </h2>
        <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto leading-relaxed transition-colors duration-300">
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>
      
      <div className="relative z-10">
        <form 
          className="glass rounded-2xl p-8 md:p-10 border border-[var(--border-subtle)] shadow-2xl max-w-2xl mx-auto" 
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2 group-focus-within:text-[var(--text-primary)] transition-colors">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2 group-focus-within:text-[var(--text-primary)] transition-colors">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2 group-focus-within:text-[var(--text-primary)] transition-colors">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all duration-300 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-semibold transition-all duration-300 shadow-lg shadow-[var(--btn-primary-shadow)] hover:-translate-y-0.5"
            >
              Say Hello
            </button>
          </div>
        </form>
      </div>
      
    </section>
  );
};

export default Contact;
