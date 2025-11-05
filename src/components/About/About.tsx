import React from 'react';
import type { Personal } from '../../types/portfolio';
import './About.css';

interface AboutProps {
  personal: Personal;
}

const About: React.FC<AboutProps> = ({ personal }) => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Next.js',
    'PostgreSQL',
    'MongoDB'
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about-inner">
          <div className="about-text">
            <div>
              <p>
                Hello! My name is {personal.name} and I enjoy creating things that live on the internet. 
                My interest in web development started back in 2019 when I decided to try editing custom 
                Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at{' '}
                <a className="inline-link" href="https://upstatement.com" target="_blank" rel="noopener noreferrer">
                  an advertising agency
                </a>,{' '}
                <a className="inline-link" href="https://starry.com" target="_blank" rel="noopener noreferrer">
                  a start-up
                </a>,{' '}
                <a className="inline-link" href="https://scout.camd.northeastern.edu" target="_blank" rel="noopener noreferrer">
                  a student-led design studio
                </a>, and{' '}
                <a className="inline-link" href="https://apple.com" target="_blank" rel="noopener noreferrer">
                  a huge corporation
                </a>. My main focus these days is building accessible, inclusive products and digital experiences 
                for a variety of clients.
              </p>
              <p>
                I also recently{' '}
                <a className="inline-link" href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank" rel="noopener noreferrer">
                  launched a course
                </a>{' '}
                that covers everything you need to build a web app with the Spotify API using Node & React.
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