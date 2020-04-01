import React from "react";
import "./About.css";

import Photo from "../../assets/ADA_AdamTurner_Professional _small.jpg";
import Skill from "./skill/skill";

class About extends React.Component {
  state = {
    showSkills: false,
  };

  skills = [
    {
      name: "Design",
      icon: "🎨",
    },
    {
      name: "Website Development",
      icon: "🕸",
    },
    {
      name: "Teaching",
      icon: "👨‍🏫",
    },
  ];

  handleToggleShowSkills = () => {
    this.setState({
      showSkills: !this.state.showSkills,
    });
  };
  render() {
    return (
      <div className="about">
        <div className="text">
          <h1>Adam Turner</h1>
          <h2>Software Developer and Rugby Referee</h2>
          <hr />
          <h3>About Me</h3>
          <p>
            I am a really interesting person who does lots of interesting things!
          </p>
          <hr />
          <button onClick={this.handleToggleShowSkills}>
            {this.state.showSkills ? "Hide" : "Show"} Key Skills
          </button>
          {this.state.showSkills ? (
            <React.Fragment>
              <h3>Key Skills</h3>
              <ul className="keySkillsList">
                {this.skills.map(({ name, icon }) => (
                  <Skill key={name} name={name} icon={icon} />
                ))}
              </ul>
            </React.Fragment>
          ) : null}
        </div>
        <img src={Photo} />
      </div>
    );
  }
}

export default About;
