import React from "react";
import './Skills.css';

function Skills() {
  return (
    // {/* Skills Section */}
    <section className="skills-section" id="skills">

        <div className="skills-container">
            <h2>Skills</h2>
      <div className="skills">
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <span>Proficient</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" />
                  <span>Experienced</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                  <span>Proficient</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                  <span>Experienced</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                  <span>Experienced</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                  <span>Experienced</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                  <span>Experienced</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <span>Learning</span>
                </div>
                <div className="skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt="Next.js"  />
                  <span>Learning</span>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Skills;