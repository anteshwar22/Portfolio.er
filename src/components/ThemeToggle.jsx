import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '', compact = false, showLabels = true }) => {
  const { theme, setTheme } = useTheme();

  const modes = [
    {
      id: 'dark',
      label: 'Dark',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )
    },
    {
      id: 'white',
      label: 'White',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      )
    },
    {
      id: 'normal',
      label: 'Normal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path>
        </svg>
      )
    }
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Theme mode switcher"
      className={`inline-flex items-center p-1 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-md shadow-sm ${className}`}
    >
      {modes.map((mode) => {
        const isActive = theme === mode.id;

        return (
          <button
            key={mode.id}
            role="radio"
            aria-checked={isActive}
            onClick={() => setTheme(mode.id)}
            className={`flex items-center justify-center gap-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer min-h-[32px] ${
              compact ? 'px-2 py-1.5' : 'px-2.5 py-1.5'
            } ${
              isActive
                ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-md scale-[1.02]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
            }`}
            title={`Switch to ${mode.label} mode`}
          >
            <span className={isActive ? 'animate-none' : ''}>{mode.icon}</span>
            {showLabels && !compact && (
              <span className="capitalize">{mode.label}</span>
            )}
            {/* If not compact, but responsive: allow hiding label on xs screens unless forced */}
            {!compact && !showLabels && (
              <span className="sr-only">{mode.label}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
