import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaCode, FaLaptopCode, FaServer, FaBrain, FaMusic } from "react-icons/fa";

function AboutContent() {
  const aboutCards = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Experienced in modern JavaScript frameworks and libraries including Vue3, Nuxt, Angular, and React.js",
      color: "#C41E3A"
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Proficient in C#, .NET, and Node.js, creating robust and scalable server-side solutions",
      color: "#C41E3A"
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Integration",
      description: "Skilled in developing end-to-end web applications and products using modern technologies",
      color: "#C41E3A"
    },
    {
      icon: <FaBrain />,
      title: "AI & Innovation",
      description: "Passionate about Artificial Intelligence and implementing cutting-edge solutions",
      color: "#C41E3A"
    },
    {
      icon: <FaMusic />,
      title: "Music Production",
      description: "Experienced in FL Studio for audio production, vocal recording, and music composition as a creative hobby",
      color: "#C41E3A"
    }
  ];

  return (
    <Row className="about-content">
      {aboutCards.map((card, index) => (
        <Col md={index === 4 ? 12 : 6} key={index} className="about-card-col">
          <div className={`about-card ${index === 4 ? 'about-card-wide' : ''}`}>
            <div className="about-card-icon" style={{ color: card.color }}>
              {card.icon}
            </div>
            <h3 className="about-card-title">{card.title}</h3>
            <p className="about-card-text">{card.description}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default AboutContent;