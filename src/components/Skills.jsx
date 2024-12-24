import { motion } from 'framer-motion';
import { getSkillImage } from "../util/getSkillImage";
import './Skills.css';

const Skills = () => {
  const generateRandomAnimation = () => {
    return {
      y: ['-10%', '10%'],
      transition: {
        y: {
          duration: Math.random() * 2 + 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    };
  };

  const skills = [
    { name: "Python", id: "python" },
    { name: "JavaScript", id: "javascript" },
    { name: "Vue", id: "vue" },
    { name: "Django", id: "django" },
    { name: "React", id: "react" },
    { name: "HTML", id: "html" },
    { name: "CSS", id: "css" }
  ];

  return (
    <div className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="skill-item"
              initial={{ x: 0 }}
              animate={generateRandomAnimation()}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.1 }
              }}
            >
              <img
                className="skill-image"
                src={getSkillImage(skill.id)}
                alt={skill.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;