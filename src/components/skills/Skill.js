import React, { Component } from "react";
import SkillsContent from "./SkillsContent";

export default class Skill extends Component {
  render() {
    return (
      <div>
        <div className="titreSkill">
          <h2>Take a look at my skills</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <SkillsContent />
      </div>
    );
  }
}
