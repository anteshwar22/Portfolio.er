import React from "react";
import { Link } from "react-router-dom";

const EducationPage = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering (B. E.)",
      field: "Computer Engineering",
      institute: "Sinhgad Institute of Technology, Lonavala (SPPU)",
      duration: "Sept 2024 - June 2027",
      status: "In Progress",
      isCurrent: true,
      location: "Pune, Maharashtra",
      score: "CGPA: 8.98 / 10",
      skills: ["Data Structures & Algorithms", "MERN Stack", "AIML", "System Design", "Firebase", "Software Engineering"],
      description:
        "Currently pursuing third-year engineering focusing on advanced data structures, full-stack development with MERN stack, AIML fundamentals, and building scalable cloud-connected applications.",
    },
    {
      id: 2,
      degree: "Diploma in Engineering (Polytechnic)",
      field: "Computer Technology",
      institute: "Government Polytechnic Beed",
      duration: "Sept 2021 - June 2024",
      status: "Completed",
      isCurrent: false,
      location: "Beed, Maharashtra",
      score: "83.60%",
      skills: ["C / C++", "Core Java", "Python", "Android Development", "Web Technologies", "Database Management"],
      description:
        "Built a strong foundation in core computer science, object-oriented programming, systems architecture, embedded programming, and hands-on software development.",
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      field: "10th Board Examination",
      institute: "Kamala Nehru High School Bori Latur",
      duration: "June 2020 - June 2021",
      status: "Completed",
      isCurrent: false,
      location: "Bori Latur, Maharashtra",
      score: "85.40%",
      skills: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking"],
      description:
        "Completed Secondary School Certificate examination with distinction, establishing a solid analytical and mathematical base for technical education.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 w-full flex justify-center relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-[32rem] sm:h-[32rem] bg-[var(--orb-1)] rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-500 max-w-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-[28rem] sm:h-[28rem] bg-[var(--orb-2)] rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-500 max-w-full"></div>

      <div className="w-full max-w-5xl">
        {/* Back Link for Mobile */}
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-1.5 px-3 rounded-lg hover:bg-[var(--bg-hover)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* SECTION HEADER */}
        <header className="text-center mb-10 sm:mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] font-medium text-xs mb-3 tracking-wide uppercase transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-dot)] animate-pulse"></span>
            Academic Pathway
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight transition-colors duration-300">
            Education <span className="gradient-text">Timeline</span>
          </h1>
          <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-3 transition-colors duration-300">
            A chronological timeline of my qualifications, technical milestones, and academic foundation.
          </p>
        </header>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 w-0.5 md:-translate-x-1/2 gradient-accent shadow-md"></div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } group`}
                >
                  {/* TIMELINE NODE ICON */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div
                      className={`relative w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-lg ${
                        item.isCurrent
                          ? "bg-[var(--bg-card-solid)] border-[var(--btn-primary-bg)] text-[var(--text-primary)] shadow-md"
                          : "bg-[var(--bg-card-solid)] border-[var(--border-medium)] group-hover:border-[var(--border-hover)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {item.isCurrent && (
                        <span className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-[var(--btn-primary-bg)]/20 animate-ping pointer-events-none"></span>
                      )}

                      {index === 0 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                      )}
                      {index === 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                      )}
                      {index === 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                      )}
                    </div>
                  </div>

                  {/* TIMELINE CONTENT CARD */}
                  <div
                    className="ml-10 sm:ml-16 md:ml-0 md:w-[calc(50%-3rem)] w-[calc(100%-2.5rem)] sm:w-[calc(100%-4rem)] transition-all duration-300 group-hover:-translate-y-1"
                  >
                    <div
                      className={`glass p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                        item.isCurrent
                          ? "border-[var(--btn-primary-bg)]/40 shadow-xl"
                          : "border-[var(--border-subtle)] hover:border-[var(--border-hover)]"
                      }`}
                    >
                      {/* Top Badges Row */}
                      <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold ${
                              item.isCurrent
                                ? "bg-[var(--badge-bg)] text-[var(--text-primary)] border border-[var(--badge-border)]"
                                : "bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]"
                            }`}
                          >
                            {item.isCurrent && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-dot)] animate-pulse"></span>
                            )}
                            {item.status}
                          </span>

                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-pill)] border border-[var(--border-subtle)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            {item.duration}
                          </span>
                        </div>

                        {/* Score Tag */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[var(--badge-bg)] text-[var(--text-primary)] border border-[var(--badge-border)]">
                          ★ {item.score}
                        </span>
                      </div>

                      {/* Degree & Field */}
                      <h2 className="text-base sm:text-xl md:text-2xl font-heading font-bold text-[var(--text-primary)] group-hover:text-[var(--btn-primary-bg)] transition-colors leading-snug">
                        {item.degree}
                      </h2>
                      <div className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] mt-0.5 mb-2 transition-colors">
                        {item.field}
                      </div>

                      {/* Institute & Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)] mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-[var(--border-subtle)] transition-colors">
                        <span className="flex items-center gap-1.5 font-medium text-[var(--text-primary)]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-secondary)] flex-shrink-0"><path d="M3 21h18"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path><path d="M9 9h1"></path><path d="M9 13h1"></path><path d="M9 17h1"></path><path d="M14 9h1"></path><path d="M14 13h1"></path><path d="M14 17h1"></path></svg>
                          <span className="break-words">{item.institute}</span>
                        </span>
                        <span className="hidden sm:inline text-[var(--text-faint)]">•</span>
                        <span className="flex items-center gap-1 text-[var(--text-muted)] text-[11px] sm:text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)] flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4 transition-colors">
                        {item.description}
                      </p>

                      {/* Skills & Focus Areas */}
                      <div>
                        <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2 transition-colors">
                          Key Focus & Subjects
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] sm:text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] hover:border-[var(--border-hover)] transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
