import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="accent">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mass Reporting System"
              description="Created a comprehensive reporting system that consolidated over 20 individual reports using SQL, Vue3, .NET Backend Controllers, and TypeScript processing methods. Developed at Rosa Flora Limited to improve data visibility and operational efficiency."
              ghLink="https://github.com/markopetrins"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Facial Recognition & Soldier Identification"
              description="Ongoing research project with the Royal Canadian Air Force Museum. Applying advanced facial recognition technology to identify soldiers from historical photos who have not yet been identified. Scanning and analyzing historical photos along with family photos to assist in identification."
              ghLink="https://github.com/markopetrins"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Actor's Pocket Guide Platform"
              description="Developing the frontend for an interactive web platform designed to support professionals across the film industry. Implementing Angular-based UI components to enhance user experience and workflow efficiency. Integrating APIs and working with the backend team to ensure seamless platform functionality."
              ghLink="https://github.com/markopetrins"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
