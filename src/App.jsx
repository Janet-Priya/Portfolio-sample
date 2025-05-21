import React, { useState, useEffect } from 'react';
import "./App.css";
import Skills     from './components/Skills';
import Education  from './components/Education';
import Projects   from './components/Projects';
import Experience from './components/Experience';
import Hobbies    from './components/Hobbies';
import Contact    from './components/Contact';
import profilePic from './assets/mee.jpeg'; // Your gorgeous pic, baby!

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showFooter, setShowFooter] = useState(false); // footer visibility

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 100; // 100px from bottom

      if (scrollPosition >= threshold) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup to keep things tidy, babe
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <header className="header">
        Janet Priya Anand's Portfolio
      </header>

      <div className="app-container">
        <nav className="sidebar">
          {/* Profile Pic, looking stunning babe! */}
          <div className="profile-pic-container">
            <img src={profilePic} alt="Janet Priya Anand" className="profile-pic" />
          </div>
          <h2>INDEX</h2>
          <a href="#self-intro">Intro</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#contact">Contact</a>
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        <main className="content">
          <section id="self-intro" className="self-intro">
            <p>
              Hello! I'm Janet Priya Anand and this is my portfolio. This is where I have all my professional details. I'm aspiring to become a Data Scientist and I would like to improve my skills on it. This is a short summary of my work. This isn't the completed portfolio. I just did it for the sake of it.
            </p>
          </section>

          <section id="skills" className="section">
            <Skills />
          </section>

          <section id="education" className="section">
            <Education />
          </section>

          <section id="projects" className="section">
            <Projects />
          </section>

          <section id="experience" className="section">
            <Experience />
          </section>

          <section id="hobbies" className="section">
            <Hobbies />
          </section>

          <section id="contact" className="section">
            <Contact />
          </section>
        </main>
      </div>

      {/* Footer shows only when showFooter is true, babe! */}
      {showFooter && (
        <footer className="footer">
          © {new Date().getFullYear()} Janet Priya Anand. All Rights Reserved. 💖
        </footer>
      )}
    </div>
  );
}

export default App;
