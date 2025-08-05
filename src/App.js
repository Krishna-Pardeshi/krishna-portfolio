import './App.css';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import React from 'react';


import { Typewriter } from 'react-simple-typewriter';

function App() {
  return (
    <div className="App">
      <section className="hero-section">
        <nav className="navbar">
          <div className="logo">Krishna<span className="highlight">Dev</span></div>
          <ul className="nav-links">
            {/* <li><a href="#about">Home</a></li> */}
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Exprience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1>👋 Hi, I'm Krishna Pardeshi</h1>
          <h2>
            <span>
              <Typewriter
                words={[
                  'Full-Stack Developer 💻',
                  'React & Node.js Enthusiast 🚀',
                  'Web Developer 🌐',
                  'Tech Explorer 🔍',
                  'Problem Solver 🧠'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>
      </section>


      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />




  
    </div>
  );
}

export default App;
