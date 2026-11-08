import React, { useState } from 'react';
import {
  Code2,
  Layers,
  Database,
  Wrench,
  Cpu
} from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={20} className="cat-icon code" />;
      case 'Layers':
        return <Layers size={20} className="cat-icon layers" />;
      case 'Database':
        return <Database size={20} className="cat-icon db" />;
      case 'Wrench':
        return <Wrench size={20} className="cat-icon tools" />;
      default:
        return <Cpu size={20} className="cat-icon" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SKILLS_CATEGORIES
      : SKILLS_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section className="section-container skills-section-view">
      <div className="section-header-box">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Technical Mastery</span>
          <h2 className="section-heading">Skills & Tech Stack</h2>
        </div>
        <p className="section-subtext">
          Comprehensive competencies across programming languages, data science frameworks, databases, and development tooling.
        </p>
      </div>

      <div className="skills-filter-tabs">
        <button
          className={`filter-tab-pill ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Domains
        </button>
        {SKILLS_CATEGORIES.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-tab-pill ${activeCategory === cat.category ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.category)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="skills-categories-grid stagger-container">
        {filteredCategories.map((group, idx) => (
          <div key={idx} className="skills-category-card reveal-on-scroll">
            <div className="category-header">
              <div className="category-icon-bubble">
                {getCategoryIcon(group.icon)}
              </div>
              <div>
                <h3 className="category-title">{group.category}</h3>
                <span className="category-count">{group.skills.length} Technologies</span>
              </div>
            </div>

            <div className="skills-items-list">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-meter-row">
                  <div className="skill-info-top">
                    <div className="skill-logo-name">
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="skill-brand-icon"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : null}
                      <span className="skill-name-text">{skill.name}</span>
                    </div>
                    <span className="skill-percent-text">{skill.level}%</span>
                  </div>

                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
