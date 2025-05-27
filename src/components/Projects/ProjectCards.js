import React, { memo } from "react";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

const ProjectCards = memo(({ imgPath, title, description, tech, ghLink, demoLink, hideConstruction }) => {
  const { t } = useTranslation();
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img 
          src={imgPath} 
          alt={title} 
          className="project-image" 
          loading="lazy" 
        />
        <div className="project-overlay">
          <div className="project-links">
            {!hideConstruction && (
              <span className="construction-badge">
                🚧 {t("Under Construction")}
              </span>
            )}
            {ghLink && (
              <a href={ghLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <BsGithub /> {t("Code")}
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaExternalLinkAlt /> {t("Visit Page")}
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
});

export default ProjectCards;
