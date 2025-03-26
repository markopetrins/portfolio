import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TiltAvatar from "../Avatar/TiltAvatar";

function Home() {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const firstName = "MARKO";
  const lastName = "PETRINA";
  const name = `${firstName} ${lastName}`;

  useEffect(() => {
    let timeoutId;

    const movePointer = (index) => {
      setCurrentLetterIndex(index);

      // Move to next letter or restart
      if (index < name.length - 1) {
        timeoutId = setTimeout(() => movePointer(index + 1), 250);
      } else {
        timeoutId = setTimeout(() => movePointer(0), 2000);
      }
    };

    const startTimeout = setTimeout(() => movePointer(0), 1500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(startTimeout);
    };
  }, [name]);

  const renderName = () => {
    return (
      <>
        {firstName.split("").map((letter, index) => (
          <span
            key={`first-${index}`}
            id={`name-letter-${index}`}
            className={`name-letter ${currentLetterIndex === index ? 'highlighted' : ''}`}
          >
            {letter}
            {currentLetterIndex === index && (
              <span className="search-pointer" />
            )}
          </span>
        ))}
        <span className="name-space"> </span>
        {lastName.split("").map((letter, index) => (
          <span
            key={`last-${index}`}
            id={`name-letter-${firstName.length + 1 + index}`}
            className={`name-letter ${currentLetterIndex === (firstName.length + 1 + index) ? 'highlighted' : ''}`}
          >
            {letter}
            {currentLetterIndex === (firstName.length + 1 + index) && (
              <span className="search-pointer" />
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <section>
      <Particle />
      <div className="main-section">
        <div className="grid-pattern"></div>
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading animate-on-mount">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name animate-on-mount delay-200">
                I'M
                <strong className="main-name">
                  {" "}
                  {renderName()}
                </strong>
              </h1>

              <div style={{ padding: "20px 50px 20px 50px", textAlign: "left" }} className="animate-on-mount delay-400">
                <Type />
              </div>
            </Col>
            <Col md={5} xs={12} className="avatar-column animate-on-mount delay-200">
              <TiltAvatar />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="home2">
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
