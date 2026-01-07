import "./Projects.css";

const Projects = () => {
  return (
    <>
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
            <a href="https://github.com/himanshu928" target="_blank" className="first-link">GitHub</a>
            <a href="https://bucolic-centaur-5e3546.netlify.app/" target="_blank" className="live-link">Live</a>
          </div>
        </div>
      </div>
    </section>

      <div className="projects-grid projects ">
        <div className="project-card">
          <img src="/src/assets/tictactoe8090.png" alt="Project" />

          <h3>Tic Tac Toe Game</h3>
          <p>
            Tic Tac Toe game built with HTML, CSS, and JavaScript.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/himanshu928/Tic-tac-toe-game" target="_blank" className="first-link">GitHub</a>
            <a href="https://tictactoe8090.netlify.app/" target="_blank" className="live-link">Live</a>
          </div>
        </div>
      </div>
  

      <div className="projects-grid projects ">
        <div className="project-card">
          <img src="/src/assets/calculator8090.png" alt="Project" />

          <h3>Calculator App</h3>
          <p>
            Calculator app built with HTML, CSS, and JavaScript.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/himanshu928/Calculator-Project" target="_blank" className="first-link">GitHub</a>
            <a href="https://calulator8090.netlify.app/" target="_blank" className="live-link">Live</a>
          </div>
        </div>
      </div>


    </>
  );
};

export default Projects;
