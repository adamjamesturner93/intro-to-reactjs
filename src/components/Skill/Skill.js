import React from "react";
import "./Skill.css";

const Skill = ({ icon, name, description }) => (
  <section className="keySkillsList__item">
    <div>
      <span className="keySkillsList__icon">{icon}</span>
    </div>
    <div>
      <h3 className="keySkillsList__title">{name}</h3>
      <p className="keySkillsList__text">{description}</p>
    </div>
  </section>
);

export default Skill;
