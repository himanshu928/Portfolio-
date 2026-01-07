import "./HeroSection.css";
import img from "../assets/myPic.jpg";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Himanshu Sahu</span>
        </h1>

        <h2>Frontend Developer (React)</h2>

        <p className="hero-description">
          I build clean, responsive and user-friendly web interfaces
          using modern frontend technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
        <div className="hero-right">
          <div className="hero-image">
            <img src={img} alt="Hero Image" />
          </div>
        </div>
    </section>
  );
}

export default HeroSection;

