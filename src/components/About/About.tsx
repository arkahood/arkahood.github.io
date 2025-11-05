import React from 'react';
import type { Personal } from '../../types/portfolio';
import './About.css';

interface AboutProps {
  personal: Personal;
}

const About: React.FC<AboutProps> = ({ personal }) => {
  const skills = [
    'Golang',
    'Effect-ts'
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about-inner">
          <div className="about-text">
            <div>
              <p>
                Hello! I'm {personal.name}, a passionate software engineer who loves creating innovative solutions 
                and building robust applications. My journey began with mobile development using React Native, 
                then evolved into backend development with Node.js, and now I'm primarily focused on building 
                scalable systems with Go. I believe in continuous learning and staying at the forefront of technology.
              </p>
              
              <p>Here are a few technologies I've been working with recently:</p>
            </div>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="about-pic">
            <div className="wrapper">
              <img 
                className="img" 
                src="/images/me.jpg" 
                alt="Arkajit Choudhury"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="img-placeholder">
                <div className="placeholder-content">
                  <span>{personal.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;