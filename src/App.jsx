import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DashboardOverview from './components/DashboardOverview';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import { CheckCircle2, Info, AlertTriangle, X, ChevronUp } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [toast, setToast] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'light';
  });

  // Attach IntersectionObserver scroll reveal animation whenever activeTab changes
  useScrollReveal(activeTab);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Track scroll position for top progress bar and floating back to top button
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    showToast(`🌓 Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} theme`, 'info');
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <DashboardOverview
            onNavigate={setActiveTab}
            onShowToast={showToast}
          />
        );
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact onShowToast={showToast} />;
      default:
        return (
          <DashboardOverview
            onNavigate={setActiveTab}
            onShowToast={showToast}
          />
        );
    }
  };

  return (
    <div className="portfolio-app-root" data-theme={theme}>
      {/* Top Viewport Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="portfolio-main-content">
        <div className="tab-view-container animate-fade-in">
          {renderContent()}
        </div>
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Floating Back To Top Button */}
      <button
        className={`floating-back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to top"
        aria-label="Scroll back to top"
      >
        <ChevronUp size={20} />
      </button>

      {/* Floating Interactive Toast */}
      {toast && (
        <div className={`portfolio-toast toast-${toast.type} animate-slide-up`}>
          <div className="toast-icon-wrap">
            {toast.type === 'warning' ? (
              <AlertTriangle size={18} />
            ) : toast.type === 'info' ? (
              <Info size={18} />
            ) : (
              <CheckCircle2 size={18} />
            )}
          </div>
          <span className="toast-text">{toast.message}</span>
          <button
            className="toast-close-btn"
            onClick={() => setToast(null)}
            aria-label="Close notification"
          >
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
