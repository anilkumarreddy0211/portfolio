import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  FolderGit2,
  FileText,
  Mail,
  Award,
  GraduationCap,
  Terminal,
  Copy,
  Check,
  Code2,
  Briefcase
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './SocialIcons';
import { PROFILE, HIGHLIGHTS } from '../data/portfolioData';

export default function Hero({ setActiveTab }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const currentRole = PROFILE.roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PROFILE.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="hero-section">
      <div className="hero-banner">
        {/* Background glow effects */}
        <div className="ambient-glow glow-blue"></div>
        <div className="ambient-glow glow-cyan"></div>

        <div className="hero-content">
          <div className="hero-badge-row">
            <div className="status-radar-pill">
              <span className="radar-beacon">
                <span className="beacon-ping"></span>
                <span className="beacon-dot"></span>
              </span>
              <span>Available for Opportunities</span>
            </div>

            <div className="gate-pill-badge">
              <Sparkles size={14} className="sparkle-gold" />
              <span>GATE 2024 Qualified (AIR 9642)</span>
            </div>
          </div>

          <div className="hero-heading-group">
            <p className="hero-greeting">Hello, world! I am</p>
            <h1 className="hero-title">
              <span className="highlight-name">{PROFILE.name}</span>
            </h1>

            <div className="modern-typewriter-box">
              <span className="console-prompt">&gt;</span>
              <span className="typewriter-prefix">Software Engineer &amp; </span>
              <span className="typewriter-role">{displayedText}</span>
              <span className="typewriter-cursor">_</span>
            </div>
          </div>

          <p className="hero-description">
            Passionate software developer and data analyst currently contributing as an{' '}
            <strong className="text-highlight">Intern Trainee at Lumen Technologies</strong>. Specializing in{' '}
            <strong>Python, Machine Learning, React, and Data Analytics</strong> to architect scalable enterprise solutions and intelligent data systems.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary-shimmer"
              onClick={() => setActiveTab('projects')}
            >
              <FolderGit2 size={17} />
              <span>Explore My Work</span>
              <ArrowRight size={16} className="btn-arrow" />
            </button>

            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-modern"
            >
              <FileText size={17} />
              <span>View Resume (PDF)</span>
            </a>

            <button
              className="btn-copy-email"
              onClick={handleCopyEmail}
              title="Copy email address"
            >
              {copied ? <Check size={16} className="check-green" /> : <Copy size={16} />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          <div className="hero-social-strip">
            <span className="social-label">Profiles:</span>
            <div className="social-buttons-row">
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn linkedin"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn github"
                title="GitHub Profile"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={PROFILE.socials.email}
                className="social-icon-btn email"
                title="Direct Email"
              >
                <Mail size={17} />
              </a>
              <a
                href={PROFILE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn instagram"
                title="Instagram"
              >
                <InstagramIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Modern Interactive Tech Terminal Visual */}
        <div className="hero-visual">
          <div className="interactive-code-window">
            <div className="window-titlebar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <Terminal size={13} />
                <span>anil-reddy.config.ts</span>
              </div>
              <div className="window-lang">TypeScript</div>
            </div>

            <div className="window-code-body">
              <p className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">engineer</span> = &#123;
              </p>
              <p className="code-line indent-1">
                <span className="code-key">name</span>:{' '}
                <span className="code-string">'{PROFILE.name}'</span>,
              </p>
              <p className="code-line indent-1">
                <span className="code-key">currentRole</span>:{' '}
                <span className="code-string">'Intern Trainee @ Lumen'</span>,
              </p>
              <p className="code-line indent-1">
                <span className="code-key">gateAIR</span>:{' '}
                <span className="code-number">9642</span>,
              </p>
              <p className="code-line indent-1">
                <span className="code-key">education</span>:{' '}
                <span className="code-string">'B.Tech CSE (AI & DS)'</span>,
              </p>
              <p className="code-line indent-1">
                <span className="code-key">stack</span>: [
                <span className="code-string">'Python'</span>,{' '}
                <span className="code-string">'React'</span>,{' '}
                <span className="code-string">'ML'</span>,{' '}
                <span className="code-string">'PowerBI'</span>],
              </p>
              <p className="code-line indent-1">
                <span className="code-key">status</span>:{' '}
                <span className="code-accent">availableForHire</span>
              </p>
              <p className="code-line">&#125;;</p>
            </div>

            {/* Floating Profile Badge Overlay */}
            <div className="terminal-profile-card">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="terminal-avatar-img"
              />
              <div className="terminal-profile-meta">
                <p className="terminal-profile-name">{PROFILE.shortName}</p>
                <p className="terminal-profile-status">
                  <span className="mini-beacon"></span>
                  Lumen Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Counter Highlights Strip */}
      <div className="highlights-grid">
        {HIGHLIGHTS.map((item) => (
          <div key={item.id} className="highlight-card">
            <div className="highlight-header">
              <span className="highlight-value">{item.value}</span>
              <div className="highlight-icon-wrap">
                {item.id === 'gate' && <Award size={18} className="highlight-icon" />}
                {item.id === 'role' && <Briefcase size={18} className="highlight-icon" />}
                {item.id === 'education' && <GraduationCap size={18} className="highlight-icon" />}
                {item.id === 'projects' && <Code2 size={18} className="highlight-icon" />}
              </div>
            </div>
            <h3 className="highlight-title">{item.label}</h3>
            <p className="highlight-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
