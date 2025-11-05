import React from 'react';
import type { Education } from '../../types/portfolio';
import './Education.css';

interface EducationProps {
  education: Education[];
}

const EducationComponent: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="education-section">
      <h2 className="numbered-heading">Education</h2>
      
      <div className="education-content">
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-header">
                <div className="education-main">
                  <h3 className="institution-name">{edu.institution}</h3>
                  <p className="degree-title">{edu.degree}</p>
                </div>
                <div className="education-meta">
                  <span className="duration">{edu.duration}</span>
                  {edu.cgpa && (
                    <span className="gpa">CGPA: {edu.cgpa}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;