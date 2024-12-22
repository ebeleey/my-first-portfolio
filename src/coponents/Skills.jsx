import { getSkillImage } from "../util/getSkillImage"
import './Skills.css'

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <div>        
        <img src={getSkillImage("python")} alt="" />
        <img src={getSkillImage("javascript")} alt="" />
        <img src={getSkillImage("vue")} alt="" />
        <img src={getSkillImage("django")} alt="" />
        <img src={getSkillImage("react")} alt="" />
        <img src={getSkillImage("html")} alt="" />
        <img src={getSkillImage("css")} alt="" />
      </div>
    </div>
  )
}

export default Skills