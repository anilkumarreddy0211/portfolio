import React from 'react';
import {
  Calendar,
  BookOpen
} from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section-container education-section-view">
      <div className="section-header-box">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Academic Milestones</span>
          <h2 className="section-heading">Education</h2>
        </div>
        <p className="section-subtext">
          My academic foundation spanning engineering, data science, and sciences.
        </p>
      </div>

      <div className="education-cards-grid stagger-container">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="education-card reveal-on-scroll">
            <div className="edu-card-image-box">
              <img
                src={edu.image}
                alt={edu.institution}
                className="edu-institution-img"
              />
              <span className="edu-status-tag">{edu.status}</span>
            </div>

            <div className="edu-card-body">
              <div className="edu-header">
                <h3 className="edu-degree-title">{edu.degree}</h3>
                <h4 className="edu-institution-name">{edu.institution}</h4>
                <div className="edu-time-badge">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="edu-coursework-section">
                <div className="coursework-heading">
                  <BookOpen size={15} />
                  <span>Key Coursework & Domains:</span>
                </div>
                <div className="coursework-tags-list">
                  {edu.coursework.map((course, cIdx) => (
                    <span key={cIdx} className="coursework-pill">
                      {course}
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
