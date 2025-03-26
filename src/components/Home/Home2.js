import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TiltAvatar from "../Avatar/TiltAvatar";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
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
              }}>
                LET ME <span style={{ color: '#C41E3A' }}>INTRODUCE</span> MYSELF
              </h1>

              <p style={{
                fontSize: '24px',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                I fell in love with programming and I have at least learnt something, I think... 👨‍💻
              </p>

              <p style={{
                fontSize: '24px',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                I am fluent in{' '}
                <span style={{ color: '#C41E3A' }}>
                  C#, .NET, Vue3, Nuxt, Java, and Angular
                </span>
              </p>

              <p style={{
                fontSize: '24px',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                My field of Interest's are building new{' '}
                <span style={{ color: '#C41E3A' }}>
                  Web Technologies and Products
                </span>{' '}
                and also in areas related to{' '}
                <span style={{ color: '#C41E3A' }}>
                  Artificial Intelligence
                </span>
              </p>

              <p style={{
                fontSize: '24px',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                Whenever possible, I also apply my passion for developing products with{' '}
                <span style={{ color: '#C41E3A' }}>Node.js</span>{' '}
                and Modern{' '}
                <span style={{ color: '#C41E3A' }}>
                  JavaScript Libraries and Frameworks
                </span>{' '}
                like{' '}
                <span style={{ color: '#C41E3A' }}>React.js and Next.js</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
