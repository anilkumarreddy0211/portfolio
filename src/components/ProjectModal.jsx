import React from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Code
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-hero-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="modal-hero-image"
          />
          <span className="modal-category-tag">{project.categoryLabel}</span>
        </div>

        <div className="modal-body-content">
          <div className="modal-header-section">
            <h2 className="modal-project-title">{project.title}</h2>
            <p className="modal-project-summary">{project.summary}</p>
          </div>

          <div className="modal-section-group">
            <h4 className="modal-group-heading">
              <Layers size={16} />
              <span>Tech Stack</span>
            </h4>
            <div className="modal-tech-pills">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-pill-large">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-section-group">
            <h4 className="modal-group-heading">
              <Code size={16} />
              <span>Project Overview & Architecture</span>
            </h4>
            <p className="modal-description-text">{project.description}</p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-section-group">
              <h4 className="modal-group-heading">
                <CheckCircle2 size={16} />
                <span>Key Features & Deliverables</span>
              </h4>
              <ul className="modal-highlights-list">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="modal-highlight-item">
                    <CheckCircle2 size={16} className="modal-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-footer-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn btn-github"
              >
                <GithubIcon size={18} />
                <span>View Source on GitHub</span>
              </a>
            )}

            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn btn-demo"
              >
                <ExternalLink size={18} />
                <span>Launch Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
