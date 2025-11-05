import React from 'react';
import type { Project } from '../../types/portfolio';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="project-card featured">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 className="other-projects-title">Other Projects</h3>
            <div className="other-projects-grid">
              {otherProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-content">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;