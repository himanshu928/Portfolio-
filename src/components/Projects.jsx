import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        Some of my recent work
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <img src="/src/assets/project1.png" alt="Project" />

          <h3>Portfolio Website</h3>
          <p>
            Personal portfolio website built using React.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>Git</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/himanshu928" target="_blank">GitHub</a>
            <a href="https://bucolic-centaur-5e3546.netlify.app/" target="_blank">Live</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
