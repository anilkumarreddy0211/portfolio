import React from 'react';
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Clock,
  Boxes,
  Binary,
  Layers,
  Sparkles
} from 'lucide-react';
import { PROFILE, INTERESTS } from '../data/portfolioData';

export default function About() {
  const getLucideIcon = (name) => {
    switch (name) {
      case 'Boxes':
        return <Boxes size={24} className="interest-icon-svg" style={{ color: '#ef4444' }} />;
      case 'Binary':
        return <Binary size={24} className="interest-icon-svg" style={{ color: '#0284c7' }} />;
      default:
        return <Layers size={24} className="interest-icon-svg" style={{ color: '#2563eb' }} />;
    }
  };

  return (
    <section className="section-container about-section-view">
      <div className="section-header-box">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Professional Profile</span>
          <h2 className="section-heading">About Me &amp; Background</h2>
        </div>
        <p className="section-subtext">
          A dedicated software engineer with strong foundations in algorithms, data systems, and machine learning pipelines.
        </p>
      </div>

      <div className="about-main-card reveal-on-scroll">
        <div className="about-grid">
          <div className="about-photo-col">
            <div className="about-photo-frame">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="about-portrait"
              />
              <div className="portrait-badge">
                <Sparkles size={14} />
                <span>GATE 2024 AIR 9642</span>
              </div>
            </div>

            <div className="photo-caption-card">
              <p className="caption-title">G Anil Kumar Reddy</p>
              <p className="caption-sub">Software Development Engineer @ Lumen</p>
            </div>
          </div>

          <div className="about-content-col">
            <div className="about-lead-box">
              <div className="about-pill-header">
                <span className="badge-tech">AI &amp; Data Science</span>
                <span className="badge-tech">Fullstack Engineering</span>
              </div>
              <h3 className="about-name-title">Building Scalable &amp; Intelligent Software</h3>
              <p className="about-paragraph">
                {PROFILE.bio}
              </p>
              <p className="about-paragraph">
                With a rigorous focus on problem solving, I have tackled projects spanning machine learning model deployments, automated ETL data dashboards in Power BI and Excel, and high-performance applications in C and Python. My goal is to engineer resilient systems that optimize human decision making and enterprise operations.
              </p>
            </div>

            <div className="about-details-grid">
              <div className="detail-item">
                <div className="detail-icon-circle">
                  <Calendar size={17} />
                </div>
                <div>
                  <span className="detail-label">Birthday</span>
                  <p className="detail-value">{PROFILE.birthday}</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-circle">
                  <Phone size={17} />
                </div>
                <div>
                  <span className="detail-label">Phone</span>
                  <p className="detail-value">{PROFILE.phone}</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-circle">
                  <MapPin size={17} />
                </div>
                <div>
                  <span className="detail-label">Location</span>
                  <p className="detail-value">{PROFILE.address}</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-circle">
                  <Mail size={17} />
                </div>
                <div>
                  <span className="detail-label">Email</span>
                  <p className="detail-value">{PROFILE.email}</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-circle">
                  <GraduationCap size={17} />
                </div>
                <div>
                  <span className="detail-label">College Email</span>
                  <p className="detail-value">{PROFILE.collegeEmail}</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-circle">
                  <Briefcase size={17} />
                </div>
                <div>
                  <span className="detail-label">Current Role</span>
                  <p className="detail-value">{PROFILE.currentStatus}</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-circle">
                  <Clock size={17} />
                </div>
                <div>
                  <span className="detail-label">Work Experience</span>
                  <p className="detail-value">
                    <strong>1.3+ Yrs</strong> (Full-Time SDE) • <strong>1.9+ Yrs</strong> (w/ Internship)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Interests Grid */}
      <div className="interests-section reveal-on-scroll">
        <div className="interests-header">
          <h3 className="subsection-title">Core Competencies &amp; Technical Interests</h3>
          <p className="subsection-subtitle">Key areas where I conduct research, build projects, and solve engineering challenges.</p>
        </div>

        <div className="interests-grid stagger-container">
          {INTERESTS.map((interest, idx) => (
            <div key={idx} className="interest-card reveal-on-scroll">
              <div className="interest-card-top">
                <div className="interest-icon-wrap">
                  {interest.iconImg ? (
                    <img
                      src={interest.iconImg}
                      alt={interest.title}
                      className="interest-img-icon"
                    />
                  ) : (
                    getLucideIcon(interest.lucideIcon)
                  )}
                </div>
                <span className="interest-index">0{idx + 1}</span>
              </div>
              <h4 className="interest-title">{interest.title}</h4>
              <p className="interest-desc">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
