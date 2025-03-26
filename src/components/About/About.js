import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skills from "./Skills";
import AboutContent from "./AboutContent";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="about-header text-center">
            <h1 className="heading-about">
              Know Who <strong className="accent">I AM</strong>
            </h1>
            <p className="about-subtitle">
              A passionate Full Stack Developer who loves to code and create
            </p>
          </Col>
        </Row>
        
        <AboutContent />

        <Skills />

        <h1 className="project-heading">
          <strong className="accent">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
