import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-show');
          }
        });
      },
      { threshold: 0.80 }
    );

    const hiddenElements = document.querySelectorAll('.scroll-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Container fluid className="home-about-section" id="about" ref={sectionRef}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div style={{ 
              padding: '20px',
              color: '#ffffff',
              textAlign: 'left'
            }}>
              <h1 style={{ 
                fontSize: "48px",
                marginBottom: '40px',
                fontWeight: '600'
              }} className="animate-on-mount">
                LET ME <span style={{ color: '#C41E3A' }}>INTRODUCE</span> MYSELF
              </h1>

              <div className="scroll-hidden">
                <p style={{
                  fontSize: '24px',
                  marginBottom: '30px',
                  lineHeight: '1.6'
                }}>
                  I'm a passionate Full Stack Developer with a strong drive to learn and create innovative solutions 👨‍💻
                </p>

                <p style={{
                  fontSize: '24px',
                  marginBottom: '30px',
                  lineHeight: '1.6'
                }}>
                  I work primarily with{' '}
                  <span style={{ color: '#C41E3A' }}>
                    Vue.js, JavaScript, and .NET
                  </span>{' '}
                  for web development, and I'm continuously expanding my expertise in{' '}
                  <span style={{ color: '#C41E3A' }}>
                    Python and React
                  </span>
                </p>

                <p style={{
                  fontSize: '24px',
                  marginBottom: '30px',
                  lineHeight: '1.6'
                }}>
                  My current focus is on building{' '}
                  <span style={{ color: '#C41E3A' }}>
                    enterprise-level applications
                  </span>{' '}
                  and exploring emerging technologies in{' '}
                  <span style={{ color: '#C41E3A' }}>
                    AI and Machine Learning
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social scroll-hidden">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="accent">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/markopetrins"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marko-petrina-a89b4a261/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:markopetrins@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
