import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ 
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "15px",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      color: "white",
      fontFamily: "Poppins, sans-serif"
    }}>
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        style={{ 
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          objectFit: "cover",
          height: "200px"
        }} 
      />
      <Card.Body>
        <Card.Title style={{ 
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#C41E3A"
        }}>{props.title}</Card.Title>
        <Card.Text style={{ 
          textAlign: "justify",
          fontSize: "0.95rem",
          lineHeight: "1.6",
          color: "rgba(255, 255, 255, 0.9)"
        }}>
          {props.description}
        </Card.Text>
        <Button 
          variant="outline-danger" 
          href={props.ghLink} 
          target="_blank"
          style={{
            borderColor: "#C41E3A",
            color: "#C41E3A",
            marginRight: "10px",
            transition: "all 0.3s ease",
            ":hover": {
              backgroundColor: "#C41E3A",
              color: "white"
            }
          }}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="outline-danger"
            href={props.demoLink}
            target="_blank"
            style={{
              borderColor: "#C41E3A",
              color: "#C41E3A",
              transition: "all 0.3s ease",
              ":hover": {
                backgroundColor: "#C41E3A",
                color: "white"
              }
            }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
