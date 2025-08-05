import React from "react";
import './About.css';

function About() {
  return (
    // {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-left">
            <img src="/photo.jpg" alt="Krishna Pardeshi" className="profile-pic" />
          </div>
          <div className="about-right">
            <h2>About Me</h2>
            <p>
              Hello, my name is <strong>Krishna Pardeshi</strong>, and I’m from 
              <strong>Nashik, Maharashtra</strong>. I have completed my 
              <strong>Bachelor’s degree in Information Technology</strong> and also hold a 
              <strong>Diploma in Computer Technology</strong>.
            </p>

            <p>
              My academic background has given me a strong foundation in software development, 
              system design, and real-world technical problem-solving.
            </p>

            <p>
              💻 I’m a passionate <strong>full-stack developer</strong> who enjoys building 
              modern, responsive web applications that solve meaningful problems. 🎯 I focus 
              on creating fast, accessible, and user-friendly interfaces that deliver a great experience.
            </p>

            <p>
              🛠️ I have practical experience with <strong>APIs</strong>, <strong>databases</strong>, 
              <strong>RESTful services</strong>, and <strong>cloud deployments</strong>. I love 
              transforming ideas into scalable, real-world solutions.
            </p>

            <p>
              ⚙️ I specialize in <strong>JavaScript technologies</strong> like 
              <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>Next.js</strong>. 
              🚀 I’m always exploring new tools, improving my workflow, and staying up to date 
              with the latest trends in web development.
            </p>
            <p>
              📚 I believe in continuous learning and growth. Whether it’s a new framework, a deeper 
              dive into backend architecture, or enhancing UI/UX, I love challenging myself to improve 
              every day.
            </p>

            <p>
              🤝 I enjoy collaborating with developers, designers, and stakeholders to turn ideas into 
              meaningful products. Clear communication and teamwork are at the core of how I work.
            </p>

            <p>
              🧠 I approach every project with a problem-solving mindset — analyzing requirements, 
              planning scalable architecture, and writing clean, maintainable code.
            </p>


          </div>
        </div>
      </section>

  );
}
export default About;