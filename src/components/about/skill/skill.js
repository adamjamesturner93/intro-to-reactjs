import React from "react";

const Skill = ({ icon, name }) => (
  <li className="keySkillsList__item">
    <span className="keySkillsList__icon">{icon}</span>
    <span className="keySkillsList__text">{name}</span>
  </li>
);

export default Skill;
