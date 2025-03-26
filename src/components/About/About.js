import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skills from "./Skills";
import AboutContent from "./AboutContent";
import Toolstack from "./Toolstack";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-show');
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll('.scroll-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }} className="animate-on-mount">
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

        <div className="scroll-hidden">
          <Skills />
        </div>

        <div className="scroll-hidden">
          <h1 className="project-heading">
            <strong className="accent">Tools</strong> I use
          </h1>
          <Toolstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;
