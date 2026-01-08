import "../Styles/Skills.css";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2>My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
