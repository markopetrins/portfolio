import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import editor from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Featured <strong className="accent">Projects</strong>
        </h1>
        <p className="project-subtitle">
          Here's a showcase of my recent work and ongoing projects
        </p>
        <div className="project-container">
          <div className="project-card-wrapper">
            <ProjectCard
              imgPath={editor}
              title="Mass Reporting System"
              description="Created a comprehensive reporting system that consolidated over 20 individual reports using SQL, Vue3, .NET Backend Controllers, and TypeScript processing methods. Developed at Rosa Flora Limited to improve data visibility and operational efficiency."
              tech={["Vue3", "SQL", ".NET", "TypeScript"]}
              ghLink="https://github.com/markopetrins"
            />
          </div>

          <div className="project-card-wrapper">
            <ProjectCard
              imgPath={emotion}
              title="Facial Recognition & Soldier Identification"
              description="Ongoing research project with the Royal Canadian Air Force Museum. Applying advanced facial recognition technology to identify soldiers from historical photos who have not yet been identified. Scanning and analyzing historical photos along with family photos to assist in identification."
              tech={["Python", "AI/ML", "Computer Vision"]}
              ghLink="https://github.com/markopetrins"
            />
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
