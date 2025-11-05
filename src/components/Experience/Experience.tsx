import React, { useState } from 'react';
import type { Experience } from '../../types/portfolio';
import './Experience.css';

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experience }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <h2 className="numbered-heading">Where I've Worked</h2>
      <div className="jobs">
          <div className="job-tabs" role="tablist" aria-label="Job tabs">
            {experience.map((exp, index) => (
              <button
                key={index}
                className={`job-tab ${index === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                role="tab"
                aria-selected={index === activeTab}
                aria-controls={`panel-${index}`}
                id={`tab-${index}`}
                tabIndex={index === activeTab ? 0 : -1}
              >
                <span>{exp.company}</span>
              </button>
            ))}
            <div 
              className="job-highlight" 
              style={{ 
                transform: `translateY(calc(${activeTab} * var(--tab-height)))` 
              }}
            />
          </div>

          <div className="job-panels">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`job-panel ${index === activeTab ? 'active' : ''}`}
                id={`panel-${index}`}
                role="tabpanel"
                tabIndex={index === activeTab ? 0 : -1}
                aria-labelledby={`tab-${index}`}
                hidden={index !== activeTab}
              >
                <h3 className="job-title">
                  <span>{exp.position}</span>
                  <span className="company">
                    <span>&nbsp;@&nbsp;</span>
                    <a 
                      href="#" 
                      className="inline-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  </span>
                </h3>

                <p className="job-range">{exp.duration}</p>

                <div className="job-description">
                  <ul>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default ExperienceComponent;