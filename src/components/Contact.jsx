import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  FileText,
  MessageSquare
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './SocialIcons';
import { PROFILE } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    onShowToast?.(`📋 Copied "${email}" to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast?.('⚠️ Please fill in all required fields.', 'warning');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast?.(
        `✉️ Thank you, ${formData.name}! Your message has been prepared. You can also reach me directly at ${PROFILE.email}.`
      );
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 900);
  };

  return (
    <section className="section-container contact-section-view">
      <div className="section-header-box">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-heading">Contact Me</h2>
        </div>
        <p className="section-subtext">
          Have an opportunity, collaboration idea, or question? Feel free to drop a message or reach out across channels.
        </p>
      </div>

      <div className="contact-main-grid">
        <div className="contact-info-col stagger-container">
          <div className="contact-card reveal-on-scroll">
            <div className="contact-card-icon-wrap loc">
              <MapPin size={22} />
            </div>
            <div className="contact-card-details">
              <h4 className="contact-card-title">Residential Address</h4>
              <p className="contact-card-text">Bandlapalli, Anantapur</p>
              <p className="contact-card-text">Andhra Pradesh, India - 515425</p>
            </div>
          </div>

          <div className="contact-card reveal-on-scroll">
            <div className="contact-card-icon-wrap email">
              <Mail size={22} />
            </div>
            <div className="contact-card-details">
              <div className="contact-card-title-row">
                <h4 className="contact-card-title">Email Correspondence</h4>
                <button
                  className="copy-chip-btn"
                  onClick={() => handleCopyEmail(PROFILE.email)}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="contact-card-link-item">
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </p>
              <p className="contact-card-sub-email">
                <a href={`mailto:${PROFILE.collegeEmail}`}>{PROFILE.collegeEmail}</a>
              </p>
            </div>
          </div>

          <div className="contact-card reveal-on-scroll">
            <div className="contact-card-icon-wrap phone">
              <Phone size={22} />
            </div>
            <div className="contact-card-details">
              <h4 className="contact-card-title">Phone & WhatsApp</h4>
              <p className="contact-card-link-item">
                <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
              </p>
              <span className="contact-availability">Mon - Sat | 9:00 AM - 7:00 PM IST</span>
            </div>
          </div>

          <div className="contact-card socials-card">
            <div className="contact-card-details">
              <h4 className="contact-card-title">Social & Developer Profiles</h4>
              <div className="contact-social-pills">
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill linkedin"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill github"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill instagram"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill resume"
                >
                  <FileText size={16} />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-col reveal-on-scroll">
          <div className="contact-form-wrapper">
            <div className="form-header-line">
              <MessageSquare size={20} className="form-header-icon" />
              <div>
                <h3 className="form-heading">Send a Direct Message</h3>
                <p className="form-subheading">I typically respond within 24 hours.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="message-form">
              <div className="form-row-dual">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="req">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Inquiry regarding Software Role / Project"
                  className="form-control"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Write your message, project details, or role discussion here..."
                  className="form-control textarea"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border"></span>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
