import React from "react";
import "./About.css";

import Photo from "../../assets/ADA_AdamTurner_Professional _small.jpg";
import Skill from "../../components/Skill/Skill";

class About extends React.Component {
  state = {
    showSkills: false,
  };

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, itaque
            aliquam! Dicta impedit sed veritatis? Vitae sequi enim, expedita
            aspernatur nihil velit. Autem vel veniam dolorem. Quasi, velit. Id,
            voluptates?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo nam odit a
            maxime ex explicabo placeat minus repellendus ipsam? Deserunt repellat
            numquam consectetur nam quisquam ut veniam fuga cumque ullam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vero harum
            placeat culpa esse sequi sit obcaecati, numquam totam saepe. Molestias
            eos vel ullam voluptates culpa ipsum suscipit iure ducimus.
          </p>
        </div>
        <img src={Photo} />
      </div>
    );
  }
}

export default About;
