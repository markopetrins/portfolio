import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "../../hooks/useTranslation";


function Home2() {
  const sectionRef = useRef(null);
  const [showSpotify, setShowSpotify] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // First, let's handle the main content animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-show');
            // Only start loading Spotify after main content is visible
            setTimeout(() => {
              setShowSpotify(true);
            }, 1000);
          }
        });
      },
      { threshold: 0.43 }
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
                {t("LET ME INTRODUCE MYSELF")}
              </h1>

              <div className="scroll-hidden">
                <p style={{
                  fontSize: '24px',
                  marginBottom: '30px',
                  lineHeight: '1.6'
                }}>
                  {t("I'm a passionate Full Stack Developer")}
                </p>

                <p style={{
                  fontSize: '24px',
                  marginBottom: '30px',
                  lineHeight: '1.6'
                }}>
                  {t("I work primarily with")}{' '}
                  <span style={{ color: '#C41E3A' }}>
                    Vue.js, JavaScript, and .NET
                  </span>{' '}
                  {t("for web development")}, {t("and I'm continuously expanding my expertise in")}{' '}
                  <span style={{ color: '#C41E3A' }}>
                    Python and React
                  </span>
                </p>

                <p style={{
                  fontSize: '24px',
                  marginBottom: '30px',
                  lineHeight: '1.6'
                }}>
                  {t("My current focus is on building")}{' '}
                  <span style={{ color: '#C41E3A' }}>
                    enterprise-level applications
                  </span>{' '}
                  {t("and exploring emerging technologies in")}{' '}
                  <span style={{ color: '#C41E3A' }}>
                    AI and Machine Learning
                  </span>
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            {showSpotify && (
              <div className="spotify-embed-container">
                <iframe 
                  src="https://open.spotify.com/embed/playlist/1P8ZXjlOV07FfuwXhcGaCN?utm_source=generator&theme=0" 
                  width="100%" 
                  height="352" 
                  title="Spotify Playlist"
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  style={{
                    borderRadius: '12px',
                    marginTop: '150px',
                    opacity: 0,
                    animation: 'spotifyFadeIn 1s ease-out forwards',
                    animationDelay: '0.5s',
                    backgroundColor: '#000000',
                    colorScheme: 'normal'
                  }}
                />
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social scroll-hidden">
            <h1>{t("FIND ME ON")}</h1>
            <p>
              {t("Feel free to connect with me")}
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
