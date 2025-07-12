// App.jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Abdul Mateen</div>
        <ul className="nav-links">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <header className="hero-section">
        <h1>Hello, I'm Abdul Mateen</h1>
        <p>Professional Web Developer specialized in ReactJS</p>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer with expertise in ReactJS, HTML, CSS,
          JavaScript, Firebase, Tailwind CSS, and Bootstrap. I build modern,
          responsive, and scalable web applications with a focus on clean code
          and user experience.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>ReactJS</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Tailwind CSS</span>
          <span>Bootstrap</span>
          <span>Firebase</span>
          <span>github</span>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:abdulmateen@example.com">mateensohail821@gmail.com</a></p>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Abdul Mateen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


