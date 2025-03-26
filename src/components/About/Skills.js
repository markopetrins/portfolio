import React from "react";
import { Row, Col } from "react-bootstrap";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React / Next.js", percentage: 90 },
        { name: "Vue3 / Nuxt", percentage: 85 },
        { name: "Angular", percentage: 65 },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "SQL / Database", percentage: 88 },
        { name: "C# / .NET", percentage: 75 },
        { name: "Java", percentage: 75 },
      ]
    },
    {
      category: "Additional Technologies",
      skills: [
        { name: "Python", percentage: 75 },
        { name: "AI / Machine Learning", percentage: 65 },
      ]
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Professional <strong className="accent">Skills</strong>
      </h1>
      <Col xs={12} md={10} className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3 className="skill-category-title">
              <span className="accent">{category.category}</span>
            </h3>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default Skills;