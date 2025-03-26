import React, { memo, useMemo } from "react";
import { Row, Col } from "react-bootstrap";

// Extract SkillBar into a separate memoized component
const SkillBar = memo(({ name, percentage }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span className="skill-name">{name}</span>
      <span className="skill-percentage">{percentage}%</span>
    </div>
    <div className="skill-bar">
      <div 
        className="skill-progress" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
));

// Extract SkillCategory into a separate memoized component
const SkillCategory = memo(({ category, skills }) => (
  <div className="skill-category">
    <h3 className="skill-category-title">
      <span className="accent">{category}</span>
    </h3>
    {skills.map((skill, index) => (
      <SkillBar 
        key={`${category}-${index}`}
        name={skill.name}
        percentage={skill.percentage}
      />
    ))}
  </div>
));

const Skills = memo(() => {
  const skillCategories = useMemo(() => [
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
  ], []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Professional <strong className="accent">Skills</strong>
      </h1>
      <Col xs={12} md={10} className="skills-container">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.category}
            category={category.category}
            skills={category.skills}
          />
        ))}
      </Col>
    </Row>
  );
});

export default Skills;