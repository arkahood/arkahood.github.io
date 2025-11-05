import React from 'react';
import type { Personal } from '../../types/portfolio';
import './About.css';

interface AboutProps {
  personal: Personal;
}

const About: React.FC<AboutProps> = ({ personal }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="bio">{personal.bio}</p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> 
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> 
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong> {personal.location}
              </div>
            </div>
            <div className="social-links">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href={personal.website} target="_blank" rel="noopener noreferrer" className="social-link">
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;