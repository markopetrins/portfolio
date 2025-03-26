import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Marko Petrina </span>
            from <span className="purple">Stoney Creek, Ontario, Canada.</span>
            <br />
            I'm currently a Software Co-op Student at Mohawk College with a GPA of 3.52.
            <br />
            I recently worked as a Software Developer Co-op at Rosa Flora Limited, and I'm currently a Frontend Web Developer (Internship) at Actor's Pocket Guide.
            <br />
            <br />
            I'm also engaged in an ongoing research project:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Facial Recognition & Soldier Identification Research with the Royal Canadian Air Force Museum
            </li>
          </ul>
          <br />
          <p style={{ textAlign: "justify" }}>
            In this project, I'm contributing to identifying soldiers who have not been identified through advanced facial recognition technology.
            <br />
            <br />
            My professional experience includes:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Resolving bug tickets and developing web applications at Rosa Flora Limited
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating a mass reporting system that consolidated over 20 reports using SQL, Vue3, .NET and TypeScript
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Angular-based UI components for an interactive web platform at Actor's Pocket Guide
            </li>
          </ul>

          <p style={{ color: "rgb(210, 43, 43)" }}>
            "Aspiring to build innovative solutions through technology!"{" "}
          </p>
          <footer className="blockquote-footer">Marko</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
