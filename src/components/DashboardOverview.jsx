import React, { useState } from 'react';
import {
  Briefcase,
  Award,
  FolderGit2,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Code2,
  Eye,
  Server,
  Zap,
  Activity,
  MapPin,
  FileText,
  Mail,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { PROFILE, PROJECTS } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';

export default function DashboardOverview({ onNavigate, onShowToast }) {
  const [copiedCLI, setCopiedCLI] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const topProjects = PROJECTS.slice(0, 3);
  const cliCommand = "npx anilkumar-dev --summary";

  const handleCopyCLI = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopiedCLI(true);
    if (onShowToast) {
      onShowToast("📋 Copied terminal command to clipboard!", "success");
    }
    setTimeout(() => setCopiedCLI(false), 2400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    if (onShowToast) {
      onShowToast("📧 Email address copied: " + PROFILE.email, "success");
    }
  };

  return (
    <div className="overview-dashboard-view">
      {/* EXECUTIVE WELCOME & HERO BANNER */}
      <section className="overview-hero-card reveal-on-scroll">
        <div className="overview-hero-decorations">
          <div className="ambient-sphere sphere-blue"></div>
          <div className="ambient-sphere sphere-emerald"></div>
        </div>

        <div className="overview-hero-grid">
          <div className="overview-hero-text">
            <div className="overview-status-row">
              <span className="live-pulse-badge">
                <span className="pulse-dot"></span>
                <span>Software Development Engineer @ Lumen Technologies</span>
              </span>
              <span className="gate-tag-pill">
                <Sparkles size={14} className="sparkle-gold" />
                <span>GATE AIR 9642 Qualified</span>
              </span>
            </div>

            <h1 className="overview-greeting-title">
              Engineering Intelligent Systems &amp; Modern Web Architectures
            </h1>

            <p className="overview-bio-text">
              Welcome to my developer overview. I am <strong>{PROFILE.name}</strong>, a Software Developer and AI/DS Engineer focused on building high-performance Python backends, machine learning predictive pipelines, business intelligence dashboards, and responsive web applications.
            </p>

            <div className="overview-cta-actions">
              <button
                className="btn-primary"
                onClick={() => onNavigate('projects')}
              >
                <FolderGit2 size={16} />
                <span>Explore All Projects ({PROJECTS.length})</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText size={16} />
                <span>Download Resume</span>
                <ExternalLink size={14} />
              </a>

              <button
                className="btn-ghost"
                onClick={() => onNavigate('contact')}
              >
                <Mail size={16} />
                <span>Direct Connect</span>
              </button>
            </div>
          </div>

          <div className="overview-hero-terminal">
            <div className="terminal-header-bar">
              <div className="terminal-traffic-lights">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">anil@engineer-workstation: ~</span>
              <button
                className="terminal-copy-btn"
                onClick={handleCopyCLI}
                title="Copy CLI execution command"
              >
                {copiedCLI ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                <span>{copiedCLI ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <div className="terminal-content-body">
              <div className="terminal-line">
                <span className="t-prompt">$</span>
                <span className="t-command">{cliCommand}</span>
              </div>
              <div className="terminal-output">
                <p className="t-row"><span className="t-key">Name:</span> <span className="t-val-str">"{PROFILE.name}"</span></p>
                <p className="t-row"><span className="t-key">Role:</span> <span className="t-val-accent">"Software Development Engineer @ Lumen"</span></p>
                <p className="t-row"><span className="t-key">Experience:</span> <span className="t-val-code">"1.3+ Yrs Full-Time | 1.9+ Yrs w/ Intern"</span></p>
                <p className="t-row"><span className="t-key">Degree:</span> <span className="t-val-str">"B.Tech CSE (AI &amp; DS) • 2021-2025"</span></p>
                <p className="t-row"><span className="t-key">GATE:</span> <span className="t-val-num">AIR 9642 (Score: 370+)</span></p>
                <p className="t-row"><span className="t-key">CoreStack:</span> <span className="t-val-code">["Python", "React", "Flask", "Power BI", "SQL"]</span></p>
                <p className="t-row"><span className="t-key">Location:</span> <span className="t-val-str">"Bangalore / Andhra Pradesh, IN"</span></p>
                <p className="t-row t-ready"><span className="t-bullet">✔</span> Telemetry healthy. Ready for production deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI METRICS OVERVIEW GRID */}
      <section className="overview-kpi-grid stagger-container">
        <div className="kpi-metric-card reveal-on-scroll" onClick={() => onNavigate('experience')}>
          <div className="kpi-card-top">
            <div>
              <span className="kpi-sub-label">Enterprise Experience</span>
              <h3 className="kpi-main-number">1.3+ Yrs FT</h3>
            </div>
            <div className="kpi-icon-pill icon-indigo">
              <Briefcase size={22} />
            </div>
          </div>
          <div className="kpi-indicator-row">
            <span className="kpi-badge badge-emerald">
              <span className="dot-mini"></span> SDE @ Lumen
            </span>
            <span className="kpi-delta-text">1.9+ Yrs Total (Lumen)</span>
          </div>
          <div className="kpi-progress-bar-bg">
            <div className="kpi-progress-bar-fill fill-indigo" style={{ width: '100%' }}></div>
          </div>
          <p className="kpi-footer-note">1.3+ yrs full-time SDE &amp; 6 mos SDE Intern at Lumen Technologies</p>
        </div>

        <div className="kpi-metric-card reveal-on-scroll" onClick={() => onNavigate('about')}>
          <div className="kpi-card-top">
            <div>
              <span className="kpi-sub-label">National Examination</span>
              <h3 className="kpi-main-number">AIR 9642</h3>
            </div>
            <div className="kpi-icon-pill icon-amber">
              <Award size={22} />
            </div>
          </div>
          <div className="kpi-indicator-row">
            <span className="kpi-badge badge-amber">GATE 2024 Qualified</span>
            <span className="kpi-delta-text">Computer Science</span>
          </div>
          <div className="kpi-progress-bar-bg">
            <div className="kpi-progress-bar-fill fill-amber" style={{ width: '92%' }}></div>
          </div>
          <p className="kpi-footer-note">Recognized national benchmark for engineering excellence</p>
        </div>

        <div className="kpi-metric-card reveal-on-scroll" onClick={() => onNavigate('projects')}>
          <div className="kpi-card-top">
            <div>
              <span className="kpi-sub-label">Production Repositories</span>
              <h3 className="kpi-main-number">{PROJECTS.length}+ Systems</h3>
            </div>
            <div className="kpi-icon-pill icon-blue">
              <FolderGit2 size={22} />
            </div>
          </div>
          <div className="kpi-indicator-row">
            <span className="kpi-badge badge-blue">100% Open Source</span>
            <span className="kpi-delta-text">Fullstack &amp; ML</span>
          </div>
          <div className="kpi-progress-bar-bg">
            <div className="kpi-progress-bar-fill fill-blue" style={{ width: '88%' }}></div>
          </div>
          <p className="kpi-footer-note">Predictive ML, Power BI analytics, Computer Vision &amp; Web</p>
        </div>

        <div className="kpi-metric-card reveal-on-scroll" onClick={() => onNavigate('certifications')}>
          <div className="kpi-card-top">
            <div>
              <span className="kpi-sub-label">Industry Accreditations</span>
              <h3 className="kpi-main-number">9 Verified</h3>
            </div>
            <div className="kpi-icon-pill icon-emerald">
              <CheckCircle2 size={22} />
            </div>
          </div>
          <div className="kpi-indicator-row">
            <span className="kpi-badge badge-emerald">Verified Credentials</span>
            <span className="kpi-delta-text">Cloud &amp; AI</span>
          </div>
          <div className="kpi-progress-bar-bg">
            <div className="kpi-progress-bar-fill fill-emerald" style={{ width: '100%' }}></div>
          </div>
          <p className="kpi-footer-note">Microsoft Azure, HackerRank, Udemy, Pantech &amp; Be10x</p>
        </div>
      </section>

      {/* SYSTEM TELEMETRY & CLOUDFLARE EDGE STATUS */}
      <section className="overview-telemetry-panel reveal-on-scroll">
        <div className="telemetry-header">
          <div className="telemetry-title-block">
            <Activity size={18} className="telemetry-icon-pulse" />
            <span className="telemetry-label">Production Deployment Status &amp; Telemetry</span>
          </div>
          <div className="telemetry-badge-group">
            <span className="live-status-chip">
              <span className="green-ping"></span> Edge Online
            </span>
            <span className="version-chip">v1.0.0 (Production)</span>
          </div>
        </div>

        <div className="telemetry-grid">
          <div className="telemetry-item">
            <span className="tel-label">Global CDN Infrastructure</span>
            <div className="tel-value-row">
              <Server size={16} className="tel-ico" />
              <strong>Cloudflare Workers Edge</strong>
            </div>
            <span className="tel-sub">Distributed across 330+ cities globally</span>
          </div>

          <div className="telemetry-item">
            <span className="tel-label">Client SPA Architecture</span>
            <div className="tel-value-row">
              <Zap size={16} className="tel-ico" />
              <strong>React 19 + Vite 8.3</strong>
            </div>
            <span className="tel-sub">Sub-millisecond route transitions &amp; zero bloat</span>
          </div>

          <div className="telemetry-item">
            <span className="tel-label">Edge Response Latency</span>
            <div className="tel-value-row">
              <TrendingUp size={16} className="tel-ico text-emerald" />
              <strong className="text-emerald">38ms TTFB</strong>
            </div>
            <span className="tel-sub">Cached edge assets &amp; compressed gzip delivery</span>
          </div>

          <div className="telemetry-item">
            <span className="tel-label">Continuous Delivery Pipeline</span>
            <div className="tel-value-row">
              <ShieldCheck size={16} className="tel-ico text-blue" />
              <strong>GitHub Actions CI/CD</strong>
            </div>
            <span className="tel-sub">Direct push to production on verified main branch</span>
          </div>
        </div>
      </section>

      {/* CORE ENGINEERING COMPETENCIES RADAR */}
      <section className="overview-domains-section reveal-on-scroll">
        <div className="section-head-row">
          <div>
            <span className="section-eyebrow">Technical Capabilities</span>
            <h2 className="section-heading">Core Engineering Domains</h2>
          </div>
          <button
            className="view-all-link-btn"
            onClick={() => onNavigate('skills')}
          >
            <span>View Complete Skills Matrix</span>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="domains-cards-grid stagger-container">
          <div className="domain-card reveal-on-scroll">
            <div className="domain-card-head">
              <div className="domain-icon-box bg-blue-subtle">
                <Code2 size={24} className="text-blue" />
              </div>
              <span className="domain-level-badge">Advanced (90%)</span>
            </div>
            <h3 className="domain-title">Python &amp; Backend Engineering</h3>
            <p className="domain-desc">
              Developing robust RESTful APIs, data scraping pipelines, and automation utilities using Python, Flask, and Django with clean architectural separation.
            </p>
            <div className="domain-tags">
              <span className="dom-tag">Python 3.12</span>
              <span className="dom-tag">Flask REST</span>
              <span className="dom-tag">OOP &amp; File I/O</span>
              <span className="dom-tag">C Language</span>
            </div>
          </div>

          <div className="domain-card reveal-on-scroll">
            <div className="domain-card-head">
              <div className="domain-icon-box bg-indigo-subtle">
                <Cpu size={24} className="text-indigo" />
              </div>
              <span className="domain-level-badge">Specialist (88%)</span>
            </div>
            <h3 className="domain-title">Machine Learning &amp; Computer Vision</h3>
            <p className="domain-desc">
              Training predictive classifiers, computer vision landmark models with OpenCV &amp; MediaPipe, and NLP document classification pipelines.
            </p>
            <div className="domain-tags">
              <span className="dom-tag">Scikit-Learn</span>
              <span className="dom-tag">OpenCV</span>
              <span className="dom-tag">MediaPipe</span>
              <span className="dom-tag">Pandas &amp; NumPy</span>
            </div>
          </div>

          <div className="domain-card reveal-on-scroll">
            <div className="domain-card-head">
              <div className="domain-icon-box bg-amber-subtle">
                <TrendingUp size={24} className="text-amber" />
              </div>
              <span className="domain-level-badge">Expert (92%)</span>
            </div>
            <h3 className="domain-title">Data Analytics &amp; Business Intelligence</h3>
            <p className="domain-desc">
              Extracting business value from transactional data with Power BI, advanced DAX modeling, automated Excel workbooks, and relational SQL queries.
            </p>
            <div className="domain-tags">
              <span className="dom-tag">Power BI</span>
              <span className="dom-tag">DAX Formulas</span>
              <span className="dom-tag">Advanced Excel</span>
              <span className="dom-tag">MySQL &amp; SQLite</span>
            </div>
          </div>

          <div className="domain-card reveal-on-scroll">
            <div className="domain-card-head">
              <div className="domain-icon-box bg-emerald-subtle">
                <Layers size={24} className="text-emerald" />
              </div>
              <span className="domain-level-badge">Proficient (85%)</span>
            </div>
            <h3 className="domain-title">Modern Frontend &amp; Cloud Deployment</h3>
            <p className="domain-desc">
              Building ultra-fast, accessible Single Page Applications with React 19, modern CSS variables, responsive design, and Cloudflare Pages / Workers hosting.
            </p>
            <div className="domain-tags">
              <span className="dom-tag">React 19</span>
              <span className="dom-tag">JavaScript ES6+</span>
              <span className="dom-tag">Cloudflare Workers</span>
              <span className="dom-tag">Vite &amp; Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="overview-projects-section reveal-on-scroll">
        <div className="section-head-row">
          <div>
            <span className="section-eyebrow">Portfolio Spotlight</span>
            <h2 className="section-heading">Featured Engineered Systems</h2>
          </div>
          <button
            className="view-all-link-btn"
            onClick={() => onNavigate('projects')}
          >
            <span>See All {PROJECTS.length} Projects</span>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="featured-projects-grid stagger-container">
          {topProjects.map((project) => (
            <div key={project.id} className="featured-project-card reveal-on-scroll">
              <div className="featured-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="featured-project-img"
                  loading="lazy"
                />
                <span className="featured-cat-pill">{project.categoryLabel}</span>
              </div>

              <div className="featured-card-body">
                <div className="featured-tech-row">
                  {project.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="featured-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="featured-card-title">{project.title}</h3>
                <p className="featured-card-summary">{project.summary}</p>

                <div className="featured-actions-row">
                  <button
                    className="btn-inspect-modal"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={15} />
                    <span>Inspect Details</span>
                  </button>

                  <div className="featured-external-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link-btn"
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link-btn"
                        title="Open Live Deployment"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVE CAREER & MILESTONES SUMMARY */}
      <section className="overview-milestones-section reveal-on-scroll">
        <div className="section-head-row">
          <div>
            <span className="section-eyebrow">Professional Track</span>
            <h2 className="section-heading">Experience &amp; Career Milestones</h2>
          </div>
          <button
            className="view-all-link-btn"
            onClick={() => onNavigate('experience')}
          >
            <span>View Detailed Timeline</span>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="overview-timeline-box">
          <div className="timeline-entry-row active-now reveal-on-scroll">
            <div className="timeline-time-col">
              <span className="time-badge">Aug 2025 - Present</span>
              <span className="time-status-pill">Full-Time (1.3+ Yrs)</span>
            </div>
            <div className="timeline-content-col">
              <div className="timeline-company-title">
                <h3>Software Development Engineer @ Lumen Technologies</h3>
                <span className="loc-text">Bangalore, Karnataka</span>
              </div>
              <p className="timeline-desc">
                Full-time Software Development Engineer architecting scalable telecommunications software, network automation, telemetry data pipelines, and distributed cloud services.
              </p>
              <div className="timeline-chips">
                <span className="chip-item">Python</span>
                <span className="chip-item">Enterprise Systems</span>
                <span className="chip-item">Automation</span>
                <span className="chip-item">Telecom Telemetry</span>
                <span className="chip-item">CI/CD</span>
              </div>
            </div>
          </div>

          <div className="timeline-entry-row reveal-on-scroll">
            <div className="timeline-time-col">
              <span className="time-badge">Feb 2025 - Jul 2025</span>
              <span className="time-status-pill green">Internship (6 Mos)</span>
            </div>
            <div className="timeline-content-col">
              <div className="timeline-company-title">
                <h3>SDE Intern @ Lumen Technologies</h3>
                <span className="loc-text">Bangalore, Karnataka</span>
              </div>
              <p className="timeline-desc">
                Completed 6-month corporate internship in network automation and enterprise software systems, achieving full-time conversion to SDE.
              </p>
              <div className="timeline-chips">
                <span className="chip-item">Python</span>
                <span className="chip-item">Network Scripting</span>
                <span className="chip-item">Agile</span>
              </div>
            </div>
          </div>

          <div className="timeline-entry-row reveal-on-scroll">
            <div className="timeline-time-col">
              <span className="time-badge">2024</span>
              <span className="time-status-pill green">National Exam</span>
            </div>
            <div className="timeline-content-col">
              <div className="timeline-company-title">
                <h3>GATE Qualified 2024 (AIR 9642)</h3>
                <span className="loc-text">National Benchmark</span>
              </div>
              <p className="timeline-desc">
                Qualified the Graduate Aptitude Test in Engineering (GATE 2024) in Computer Science and Information Technology, achieving All India Rank 9642.
              </p>
            </div>
          </div>

          <div className="timeline-entry-row reveal-on-scroll">
            <div className="timeline-time-col">
              <span className="time-badge">2021 - 2025</span>
              <span className="time-status-pill">Academics</span>
            </div>
            <div className="timeline-content-col">
              <div className="timeline-company-title">
                <h3>B.Tech. in Computer Science (AI &amp; Data Science)</h3>
                <span className="loc-text">NBKRIST, Andhra Pradesh</span>
              </div>
              <p className="timeline-desc">
                Specialized in deep learning algorithms, statistical data analysis, object-oriented design, relational database architecture, and computer systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONNECT STATION */}
      <section className="overview-connect-station reveal-on-scroll">
        <div className="connect-station-box">
          <div className="connect-station-text">
            <span className="connect-eyebrow">Available for Opportunities</span>
            <h3 className="connect-title">Ready to collaborate on innovative software &amp; AI projects?</h3>
            <p className="connect-desc">
              Feel free to reach out for software engineering opportunities, data science roles, technical discussions, or collaboration inquiries.
            </p>
            <div className="connect-actions-row">
              <a
                href={`mailto:${PROFILE.email}`}
                className="btn-primary"
              >
                <Mail size={16} />
                <span>Send Email Directly</span>
              </a>

              <button
                className="btn-secondary"
                onClick={handleCopyEmail}
              >
                <Copy size={16} />
                <span>Copy Email Address</span>
              </button>

              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon size={16} />
                <span>Connect on LinkedIn</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className="connect-station-card">
            <div className="station-avatar-ring">
              <img src={PROFILE.avatar} alt={PROFILE.name} className="station-avatar" />
              <span className="beacon-online"></span>
            </div>
            <h4 className="station-name">{PROFILE.name}</h4>
            <p className="station-role">{PROFILE.title}</p>
            <div className="station-location">
              <MapPin size={14} />
              <span>Bangalore, Karnataka, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT INSPECTION MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
