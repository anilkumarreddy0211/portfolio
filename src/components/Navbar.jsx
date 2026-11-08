import React from 'react';
import {
  User,
  LayoutDashboard,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Award,
  Cpu,
  Mail,
  FileText,
  MapPin,
  Sparkles,
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';
import { PROFILE, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

export default function Navbar({ activeTab, setActiveTab, theme, onToggleTheme }) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2, badge: String(PROJECTS.length) },
    { id: 'certifications', label: 'Certifications', icon: Award, badge: String(CERTIFICATIONS.length) },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <header className="portfolio-navbar">
      <div className="navbar-top-row">
        <div className="brand-profile" onClick={() => setActiveTab('overview')} style={{ cursor: 'pointer' }}>
          <div className="avatar-wrapper">
            <img src={PROFILE.avatar} alt={PROFILE.name} className="brand-avatar" />
            <span className="online-indicator" title="Available for opportunities"></span>
          </div>
          <div className="brand-meta">
            <div className="brand-header-line">
              <h1 className="brand-title">{PROFILE.name}</h1>
              <span className="gate-badge">
                <Sparkles size={13} className="sparkle-icon" />
                GATE AIR 9642
              </span>
            </div>
            <p className="brand-subtitle">{PROFILE.title} • {PROFILE.currentStatus}</p>
          </div>
        </div>

        <div className="navbar-quick-stats">
          <div className="stat-chip">
            <MapPin size={15} className="chip-icon loc-icon" />
            <span>Bangalore, IN</span>
          </div>
          <div className="stat-chip highlight-chip">
            <Briefcase size={15} className="chip-icon work-icon" />
            <span>Lumen Technologies</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? (
              <>
                <Sun size={16} className="sun-icon" />
                <span className="theme-label">Light</span>
              </>
            ) : (
              <>
                <Moon size={16} className="moon-icon" />
                <span className="theme-label">Dark</span>
              </>
            )}
          </button>

          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-pill-btn"
            title="Open Resume in Google Drive"
          >
            <FileText size={15} />
            <span>Resume</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <nav className="tab-navigation">
        <div className="tab-scroll-container">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                aria-selected={isActive}
                role="tab"
              >
                <Icon size={16} className="tab-icon" />
                <span className="tab-label">{tab.label}</span>
                {tab.badge && (
                  <span className={`tab-badge ${isActive ? 'badge-active' : ''}`}>
                    {tab.badge}
                  </span>
                )}
                {isActive && <span className="tab-active-indicator"></span>}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
