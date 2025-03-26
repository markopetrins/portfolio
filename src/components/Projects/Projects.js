import React, { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
import editor from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";
import music from "../../Assets/Projects/music.jpg";
import { MdEmail } from "react-icons/md";

const ProjectCard = lazy(() => import("./ProjectCards"));

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Featured <strong className="accent">Projects</strong>
        </h1>
        <p className="project-subtitle">
          Here's a showcase of my recent work and ongoing projects
        </p>
        <div className="project-container">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="project-card-wrapper">
              <ProjectCard
                imgPath={editor}
                title="Mass Reporting System"
                description="Created a comprehensive reporting system that consolidated over 20 individual reports using SQL, Vue3, .NET Backend Controllers, and TypeScript processing methods. Developed at Rosa Flora Limited to improve data visibility and operational efficiency."
                tech={["Vue3", "SQL", ".NET", "TypeScript"]}
                ghLink="https://github.com/markopetrins"
              />
            </div>

            <div className="project-card-wrapper">
              <ProjectCard
                imgPath={emotion}
                title="Facial Recognition & Soldier Identification"
                description="Ongoing research project with the Royal Canadian Air Force Museum. Applying advanced facial recognition technology to identify soldiers from historical photos who have not yet been identified. Scanning and analyzing historical photos along with family photos to assist in identification."
                tech={["Python", "AI/ML", "Computer Vision"]}
                ghLink="https://github.com/markopetrins"
              />
            </div>

            <div className="project-card-wrapper">
              <ProjectCard
                imgPath={music}
                title="Music Production Portfolio"
                description="As a music producer and artist, I create and produce my own music using FL Studio. This link leads to my music portfolio where you can find all my releases and social media links related to my music career."
                tech={["FL Studio", "Music Production", "Sound Design"]}
                demoLink="https://linktr.ee/zvona"
                hideConstruction={true}
              />
            </div>
          </Suspense>
        </div>

        <div className="contact-section" style={{ marginTop: "70px" }}>
          <h2 className="project-heading">
            Let's <strong className="accent">Connect</strong>
          </h2>
          <p className="project-subtitle">
            Interested in collaborating or have a project in mind?
          </p>
          <div className="contact-button-wrapper" style={{ 
            marginTop: "30px",
            display: "flex",
            justifyContent: "center"
          }}>
            <a
              href="mailto:markopetrins@gmail.com"
              className="contact-button"
              style={{
                background: "#C41E3A",
                color: "white",
                padding: "12px 30px",
                borderRadius: "50px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "1.1em",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.transform = "translateY(-3px)"}
              onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
            >
              <MdEmail size={20} /> Contact Me
            </a>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
