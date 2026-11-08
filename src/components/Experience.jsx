import React from 'react';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section-container experience-section-view">
      <div className="section-header-box">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Work &amp; Internships</span>
          <h2 className="section-heading">Professional Experience</h2>
        </div>
        <p className="section-subtext">
          Direct engineering contributions, enterprise infrastructure exposure, and machine learning deployments.
        </p>
      </div>

      <div className="experience-timeline">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="experience-timeline-item reveal-on-scroll">
            <div className="timeline-marker-col">
              <div className="timeline-circle">
                <Building2 size={18} />
              </div>
              {index < EXPERIENCES.length - 1 && <div className="timeline-connector"></div>}
            </div>

            <div className="experience-card">
              <div className="experience-card-header">
                <div>
                  <div className="exp-role-badge-row">
                    <span className="exp-type-pill">{exp.type}</span>
                    {exp.period.includes('Present') && (
                      <span className="exp-active-pill">
                        <span className="pulse-indicator"></span> Active Role
                      </span>
                    )}
                  </div>
                  <h3 className="exp-job-title">{exp.title}</h3>
                  <h4 className="exp-company-name">{exp.company}</h4>
                </div>

                <div className="exp-meta-box">
                  <div className="exp-meta-item">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="exp-meta-item">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="exp-summary-text">{exp.description}</p>

              <div className="exp-highlights-box">
                <h5 className="highlights-title">Key Engineering Responsibilities &amp; Outcomes:</h5>
                <ul className="highlights-list">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="highlight-list-item">
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exp-tech-strip">
                <span className="skills-used-label">Stack &amp; Tools:</span>
                <div className="exp-tech-chips">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
