import React, { useState } from 'react';
import type { Project } from '../../types/portfolio';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [showMore, setShowMore] = useState(false);
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  const displayedOtherProjects = showMore ? otherProjects : otherProjects.slice(0, 6);

  const ExternalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="m7 17 10-10M17 7H7v10"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );

  const FolderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="folder-icon">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  );

  return (
    <section id="projects" className="projects-section">
      <h2 className="numbered-heading">Some Things I've Built</h2>

      {/* Featured Projects */}
      <div className="featured-projects">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project">
              <div className="project-content">
                <div>
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                  <ul className="project-tech-list">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a href={project.githubUrl} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                    <a href={project.liveUrl} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                      <ExternalIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-image">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <div className="img-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="img-placeholder">
                      <div className="placeholder-content">
                        <span>{project.title}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <section className="other-projects-section">
          <h2 className="other-projects-title">Other Noteworthy Projects</h2>
          <a 
            className="inline-link archive-link" 
            href="/archive" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            view the archive
          </a>
          <div className="projects-grid">
            {displayedOtherProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-inner">
                  <header>
                    <div className="project-top">
                      <div className="folder">
                        <FolderIcon />
                      </div>
                      <div className="project-links">
                        <a href={project.githubUrl} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                          <GitHubIcon />
                        </a>
                        <a href={project.liveUrl} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                          <ExternalIcon />
                        </a>
                      </div>
                    </div>
                    <h3 className="project-title">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h3>
                    <div className="project-description">
                      <p>{project.description}</p>
                    </div>
                  </header>
                  <footer>
                    <ul className="project-tech-list">
                      {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </footer>
                </div>
              </div>
            ))}
          </div>
          {otherProjects.length > 6 && (
            <button 
              className="more-button"
              onClick={() => setShowMore(!showMore)}
            >
              Show {showMore ? 'Fewer' : 'More'}
            </button>
          )}
        </section>
    </section>
  );
};

export default Projects;