import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "../../hooks/useTranslation";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("Hi, I'm")} <span className="accent">Marko Petrina </span>
            {t("from")} <span className="accent">Stoney Creek, Ontario, Canada.</span>
            <br />
            {t("I'm currently a Software Co-op Student at Mohawk College with a GPA of 3.52.")}
            <br />
            {t("I recently worked as a Software Developer Co-op at Rosa Flora Limited, and I'm currently a Frontend Web Developer (Internship) at Actor's Pocket Guide.")}
            <br />
            <br />
            {t("I'm also engaged in an ongoing research project:")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("Facial Recognition & Soldier Identification Research with the Royal Canadian Air Force Museum")}
            </li>
          </ul>
          <br />
          <p style={{ textAlign: "justify" }}>
            {t("In this project, I'm contributing to identifying soldiers who have not been identified through advanced facial recognition technology.")}
            <br />
            <br />
            {t("My professional experience includes:")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("Resolving bug tickets and developing web applications at Rosa Flora Limited")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("Creating a mass reporting system that consolidated over 20 reports using SQL, Vue3, .NET and TypeScript")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("Building Angular-based UI components for an interactive web platform at Actor's Pocket Guide")}
            </li>
          </ul>

          <p style={{ color: "rgb(210, 43, 43)" }}>
            {t("Aspiring to build innovative solutions through technology!")}{" "}
          </p>
          <footer className="blockquote-footer">Marko</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
