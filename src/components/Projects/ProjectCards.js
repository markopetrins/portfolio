import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCards({ imgPath, title, description, tech, ghLink, demoLink }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={imgPath} alt={title} className="project-image" />
        <div className="project-overlay">
          <div className="project-links">
            <span className="construction-badge">
              🚧 Under Construction
            </span>
            {ghLink && (
              <a href={ghLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <BsGithub /> Code
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((item, index) => (
            <span key={index} className="tech-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
