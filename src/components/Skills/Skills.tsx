import React from 'react';
import type { Skills } from '../../types/portfolio';
import './Skills.css';

interface SkillsProps {
  skills: Skills;
}

const SkillsComponent: React.FC<SkillsProps> = ({ skills }) => {
  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="numbered-heading">Skills & Technologies</h2>
      
      <div className="skills-content">
          <div className="skills-description">
            <p>
              I enjoy working with a variety of technologies and tools. Here are some of the 
              technologies I've been working with recently and have experience in:
            </p>
          </div>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Frontend Development</h3>
              <ul className="skills-list">
                {skills.frontend.map((skill, index) => (
                  <li key={index} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Backend Development</h3>
              <ul className="skills-list">
                {skills.backend.map((skill, index) => (
                  <li key={index} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Tools & Technologies</h3>
              <ul className="skills-list">
                {skills.tools.map((skill, index) => (
                  <li key={index} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="skills-cloud">
            <h3 className="cloud-title">All Technologies</h3>
            <div className="skill-tags">
              {allSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default SkillsComponent;