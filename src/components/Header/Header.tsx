import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './Header.css';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">{name.split(' ')[0]}</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
              <span className="nav-number">01.</span>About
            </a>
            <a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>
              <span className="nav-number">02.</span>Skills
            </a>
            <a href="#experience" className="nav-link" onClick={() => scrollToSection('experience')}>
              <span className="nav-number">03.</span>Work
            </a>
            <a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>
              <span className="nav-number">04.</span>Projects
            </a>
            <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
              <span className="nav-number">05.</span>Contact
            </a>
            <button className="resume-btn">Resume</button>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-name">{name}.</h1>
            <h2 className="hero-subtitle">I build things for the web.</h2>
            <p className="hero-description">
              I'm a software engineer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="hero-cta">
              <button 
                className="cta-button"
                onClick={() => scrollToSection('projects')}
              >
                Check out my work!
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;