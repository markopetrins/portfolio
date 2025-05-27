import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { FaCode, FaLaptopCode, FaServer, FaBrain, FaMusic } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

function AboutContent() {
  const lastCardRef = useRef(null);

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

    const currentRef = lastCardRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const { t } = useTranslation();
  const aboutCards = [
    {
      icon: <FaCode />,
      title: t("Frontend Development"),
      description: t("Experienced in modern JavaScript frameworks and libraries including Vue3, Nuxt, Angular, and React.js"),
      color: "#C41E3A"
    },
    {
      icon: <FaServer />,
      title: t("Backend Development"),
      description: t("Proficient in C#, .NET, and Node.js, creating robust and scalable server-side solutions"),
      color: "#C41E3A"
    },
    {
      icon: <FaLaptopCode />,
      title: t("Full Stack Integration"),
      description: t("Skilled in developing end-to-end web applications and products using modern technologies"),
      color: "#C41E3A"
    },
    {
      icon: <FaBrain />,
      title: t("AI & Innovation"),
      description: t("Passionate about Artificial Intelligence and implementing cutting-edge solutions"),
      color: "#C41E3A"
    },
    {
      icon: <FaMusic />,
      title: t("Music Production"),
      description: t("Experienced in FL Studio for audio production, vocal recording, and music composition as a creative hobby"),
      color: "#C41E3A"
    }
  ];

  return (
    <Row className="about-content">
      {aboutCards.map((card, index) => (
        <Col 
          md={index === 4 ? 12 : 6} 
          key={index} 
          className={`about-card-col ${index === 4 ? 'scroll-hidden' : ''}`}
          ref={index === 4 ? lastCardRef : null}
        >
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