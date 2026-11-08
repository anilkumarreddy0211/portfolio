import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './SocialIcons';
import { PROFILE } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ setActiveTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <h3 className="footer-name">{PROFILE.name}</h3>
            <p className="footer-tagline">
              GATE 2024 Qualified (AIR 9642) • {PROFILE.title}
            </p>
            <p className="footer-location">
              {PROFILE.location}
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <div className="footer-nav-links">
              <button onClick={() => { setActiveTab('overview'); scrollToTop(); }}>Home</button>
              <button onClick={() => { setActiveTab('about'); scrollToTop(); }}>About</button>
              <button onClick={() => { setActiveTab('education'); scrollToTop(); }}>Education</button>
              <button onClick={() => { setActiveTab('experience'); scrollToTop(); }}>Experience</button>
              <button onClick={() => { setActiveTab('projects'); scrollToTop(); }}>Projects</button>
              <button onClick={() => { setActiveTab('certifications'); scrollToTop(); }}>Certifications</button>
              <button onClick={() => { setActiveTab('skills'); scrollToTop(); }}>Skills</button>
              <button onClick={() => { setActiveTab('contact'); scrollToTop(); }}>Contact</button>
            </div>
          </div>

          <div className="footer-social-col">
            <h4 className="footer-heading">Follow & Connect</h4>
            <div className="footer-social-icons">
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={PROFILE.socials.email}
                className="footer-social-btn"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={PROFILE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {PROFILE.name}. All rights reserved.
          </p>
          <div className="footer-bottom-actions">
            <span className="built-with-tag">
              Built with React 19 & Vite
            </span>
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              title="Scroll to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
