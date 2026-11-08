import React, { useState, useMemo } from 'react';
import {
  Search,
  ExternalLink,
  Info,
  Filter,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesFilter =
        activeFilter === 'all' || p.category === activeFilter;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.techStack.some((t) => t.toLowerCase().includes(query));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section className="section-container projects-section-view">
      <div className="section-header-box">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Engineered Solutions</span>
          <h2 className="section-heading">Featured Projects &amp; Builds</h2>
        </div>
        <p className="section-subtext">
          A showcase of full-stack web applications, machine learning predictive models, and business analytics dashboards.
        </p>
      </div>

      <div className="projects-control-bar">
        <div className="filter-button-group">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Works ({PROJECTS.length})
          </button>
          <button
            className={`filter-btn ${activeFilter === 'app' ? 'active' : ''}`}
            onClick={() => setActiveFilter('app')}
          >
            Software &amp; Web ({PROJECTS.filter((p) => p.category === 'app').length})
          </button>
          <button
            className={`filter-btn ${activeFilter === 'internship' ? 'active' : ''}`}
            onClick={() => setActiveFilter('internship')}
          >
            Machine Learning &amp; AI ({PROJECTS.filter((p) => p.category === 'internship').length})
          </button>
        </div>

        <div className="project-search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search projects by tech (e.g. Python, Power BI, Flask, C)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchQuery('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="empty-results-box">
          <Filter size={36} className="empty-icon" />
          <h3 className="empty-title">No matching projects found</h3>
          <p className="empty-desc">
            Try adjusting your search query or reset the filter to view all projects.
          </p>
          <button
            className="btn-primary reset-btn"
            onClick={() => {
              setActiveFilter('all');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="projects-grid stagger-container">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card reveal-on-scroll"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card-image-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail"
                />
                <span className="project-badge">{project.categoryLabel}</span>
                <div className="project-card-overlay">
                  <span className="inspect-pill">
                    <Info size={14} />
                    <span>View Architecture</span>
                  </span>
                </div>
              </div>

              <div className="project-card-body">
                <div className="project-card-top-row">
                  <h3 className="project-title">{project.title}</h3>
                  <ArrowUpRight size={18} className="project-arrow-icon" />
                </div>
                <p className="project-summary-text">{project.summary}</p>

                <div className="project-tech-pills">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <button
                    className="card-detail-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <span>Inspect Details</span>
                  </button>

                  <div className="card-external-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-icon-link"
                        title="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-icon-link demo"
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
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
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
