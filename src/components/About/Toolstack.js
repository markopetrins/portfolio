import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiDocker,
  SiVisualstudio,
  SiVercel,
  SiExpo,
  SiLinuxmint,
  SiWindows11,
  SiMysql,
} from "react-icons/si";
import cursorLogo from "../../Assets/cursor.png";
import flStudioLogo from "../../Assets/fl-studio.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer">
          <SiVisualstudio />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://cursor.sh/" target="_blank" rel="noopener noreferrer">
          <img 
            src={cursorLogo} 
            alt="Cursor IDE" 
            style={{ 
              width: "1em",
              height: "1em",
              margin: "auto",
              transition: "filter 0.3s ease"
            }} 
            className="cursor-logo"
          />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
          <SiPostman />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
          <SiDocker />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
          <SiMysql />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          <SiVercel />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://expo.dev/" target="_blank" rel="noopener noreferrer">
          <SiExpo />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://linuxmint.com/" target="_blank" rel="noopener noreferrer">
          <SiLinuxmint />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.microsoft.com/en-us/windows" target="_blank" rel="noopener noreferrer">
          <SiWindows11 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.image-line.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={flStudioLogo} 
            alt="FL Studio" 
            style={{ 
              width: "1em",
              height: "1em",
              margin: "auto",
              transition: "filter 0.3s ease"
            }} 
            className="cursor-logo"
          />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
