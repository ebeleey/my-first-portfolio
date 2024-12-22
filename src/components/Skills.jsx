import { getSkillImage } from "../util/getSkillImage"
import './Skills.css'

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          <img className="skill-icon" src={getSkillImage("python")} alt="Python" />
          <img className="skill-icon" src={getSkillImage("javascript")} alt="JavaScript" />
          <img className="skill-icon" src={getSkillImage("vue")} alt="Vue" />
          <img className="skill-icon" src={getSkillImage("django")} alt="Django" />
          <img className="skill-icon" src={getSkillImage("react")} alt="React" />
          <img className="skill-icon" src={getSkillImage("html")} alt="HTML" />
          <img className="skill-icon" src={getSkillImage("css")} alt="CSS" />
        </div>
      </div>

    </div>
  )
}

export default Skills