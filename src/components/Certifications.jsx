import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Eye,
  Sparkles
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = useMemo(() => {
    if (activeFilter === 'all') return CERTIFICATIONS;
    return CERTIFICATIONS.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section-container certs-section-view">
      <div className="section-header-box">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Credentials & Badges</span>
          <h2 className="section-heading">Certifications & Training</h2>
        </div>
        <p className="section-subtext">
          Accredited certifications across Cloud, Data Analytics, Python, Web Engineering, and Machine Learning.
        </p>
      </div>

      <div className="certs-control-bar">
        <div className="filter-button-group">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Certifications ({CERTIFICATIONS.length})
          </button>
          <button
            className={`filter-btn ${activeFilter === 'completion' ? 'active' : ''}`}
            onClick={() => setActiveFilter('completion')}
          >
            Completion ({CERTIFICATIONS.filter((c) => c.category === 'completion').length})
          </button>
          <button
            className={`filter-btn ${activeFilter === 'participation' ? 'active' : ''}`}
            onClick={() => setActiveFilter('participation')}
          >
            Participation ({CERTIFICATIONS.filter((c) => c.category === 'participation').length})
          </button>
          <button
            className={`filter-btn ${activeFilter === 'workshops' ? 'active' : ''}`}
            onClick={() => setActiveFilter('workshops')}
          >
            Workshops ({CERTIFICATIONS.filter((c) => c.category === 'workshops').length})
          </button>
        </div>

        <div className="certs-hint-pill">
          <Sparkles size={14} className="sparkle-hint" />
          <span>Click any card to inspect certificate & verification credentials</span>
        </div>
      </div>

      <div className="certs-grid stagger-container">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="cert-card reveal-on-scroll"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="cert-card-image-box">
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-thumbnail-img"
              />
              <span className={`cert-category-badge badge-${cert.category}`}>
                {cert.categoryLabel}
              </span>
              <div className="cert-hover-overlay">
                <span className="cert-view-hint">
                  <Eye size={16} />
                  <span>View Details</span>
                </span>
              </div>
            </div>

            <div className="cert-card-body">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">Issued by: <strong>{cert.issuer}</strong></p>

              <div className="cert-skills-list">
                {cert.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="cert-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="cert-card-footer">
                <button
                  className="cert-detail-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                >
                  <Eye size={14} />
                  <span>Inspect</span>
                </button>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-external-link"
                  title="Open Certificate Link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Verify</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
