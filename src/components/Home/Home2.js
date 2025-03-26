import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an aspiring AI Engineer and Software Developer, currently engaged in Facial Recognition and Soldier Identification Research with the Royal Canadian Air Force Museum.
              <br />
              <br />I have experience with programming languages and web technologies including
              <i>
                <b className="purple"> C#, .NET, Vue3, Nuxt, Java, Angular, HTML, TypeScript, JavaScript, NodeJS and CSS. </b>
              </i>
              <br />
              <br />
              My areas of interest include &nbsp;
              <i>
                <b className="purple">Web Application Development </b> and
                <b className="purple"> Artificial Intelligence</b>, particularly in the field of 
                <b className="purple"> Facial Recognition</b>.
              </i>
              <br />
              <br />
              I'm currently pursuing an <b className="purple">Ontario College Advanced Diploma</b> in
              <i>
                <b className="purple"> Software Development </b>
              </i>
              &nbsp; at 
              <i>
                <b className="purple"> Mohawk College</b>
              </i> in Hamilton, Ontario.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
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
