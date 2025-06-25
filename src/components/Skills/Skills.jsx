import "./Skills.scss";
import { MySkills } from "./MySkills";

import React from "react";

function Skills() {
  return (
    <div>
      <div className="tech-skills-container container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {MySkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
