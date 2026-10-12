import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate asynchronous sending with clean UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[var(--orb-1)] rounded-full blur-[100px] pointer-events-none transition-colors duration-500 max-w-full"></div>

      <div className="flex flex-col items-center text-center mb-10 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] font-medium text-xs mb-3 tracking-wide uppercase transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-dot)] animate-pulse"></span>
          Let's Connect
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4 transition-colors duration-300">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed transition-colors duration-300">
          Whether you have an upcoming project, a potential role, a question, or simply want to say hello, my inbox is always open!
        </p>

        {/* Mobile Quick Direct Contact Shortcuts */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-6">
          <a
            href="mailto:anteshwarwaghmare.sit.comp@gmail.com"
            className="px-3.5 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold flex items-center gap-2 transition-all shadow-sm active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            <span>Email Me Directly</span>
          </a>
          <a
            href="https://linkedin.com/in/anteshwar-waghmare"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold flex items-center gap-2 transition-all shadow-sm active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div className="relative z-10">
        <form 
          className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-[var(--border-subtle)] shadow-2xl max-w-2xl mx-auto" 
          onSubmit={handleSubmit}
        >
          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-medium flex items-center gap-2.5 slide-down">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>Thank you! Your message has been received. I will reply soon.</span>
            </div>
          )}

          <div className="space-y-4 sm:space-y-5">
            <div className="group">
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">
                Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-base text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-base text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="group">
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mb-1.5 group-focus-within:text-[var(--text-primary)] transition-colors">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-base text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--border-hover)] focus:border-[var(--text-primary)] transition-all resize-none"
                placeholder="Hi Anteshwar, I'd like to discuss..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3.5 sm:py-4 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[var(--btn-primary-shadow)] hover:-translate-y-0.5 active:scale-98 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-[var(--btn-primary-text)] border-t-transparent animate-spin"></div>
                  <span>Sending message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      
    </section>
  );
};

export default Contact;
