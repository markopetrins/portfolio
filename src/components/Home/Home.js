import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TiltAvatar from "../Avatar/TiltAvatar";

function Home() {
  return (
    <section>
      <Particle />
      <div className="main-section">
        <div className="grid-pattern"></div>
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MARKO PETRINA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} xs={12} className="avatar-column">
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
