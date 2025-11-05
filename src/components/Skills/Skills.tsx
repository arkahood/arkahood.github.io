import React from 'react';
import type { Skills } from '../../types/portfolio';
import './Skills.css';

interface SkillsProps {
  skills: Skills;
}

const SkillsComponent: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Frontend</h3>
            <div className="skill-tags">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag frontend">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">Backend</h3>
            <div className="skill-tags">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag backend">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">Tools & Technologies</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag tools">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;