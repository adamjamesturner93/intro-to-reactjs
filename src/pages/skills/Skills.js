import React from "react";

import "./Skills.css";
import Skill from "../../components/Skill/Skill";

const Skills = () => {
  const skills = [
    {
      name: "Website Development",
      icon: "🕸",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores praesentium, sapiente laboriosam sunt voluptas animi, vel quia explicabo voluptatum distinctio, est adipisci placeat repellendus reprehenderit ipsam! Natus, impedit sit?",
    },
    {
      name: "Teaching",
      icon: "👨‍🏫",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores praesentium, sapiente laboriosam sunt voluptas animi, vel quia explicabo voluptatum distinctio, est adipisci placeat repellendus reprehenderit ipsam! Natus, impedit sit?",
    },
    {
      name: "Design",
      icon: "🎨",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores praesentium, sapiente laboriosam sunt voluptas animi, vel quia explicabo voluptatum distinctio, est adipisci placeat repellendus reprehenderit ipsam! Natus, impedit sit?",
    },
  ];
  return (
    <div>
      <h1>Key Skills</h1>
      <article className="keySkillsList">
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </article>
    </div>
  );
};

export default Skills;
