import React from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="cert-modal-image-box">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="cert-modal-img"
          />
        </div>

        <div className="cert-modal-body">
          <div className="cert-modal-header">
            <span className="cert-badge">{certificate.categoryLabel}</span>
            <h3 className="cert-modal-title">{certificate.title}</h3>
            <p className="cert-modal-issuer">Issued by <strong>{certificate.issuer}</strong></p>
          </div>

          <div className="cert-modal-skills">
            <h5 className="cert-skills-heading">Validated Competencies:</h5>
            <div className="cert-skills-pills">
              {certificate.skills.map((skill, idx) => (
                <span key={idx} className="cert-skill-tag">
                  <CheckCircle2 size={13} />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="cert-modal-actions">
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cert-verify-btn"
            >
              <ExternalLink size={16} />
              <span>Verify Official Certificate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
