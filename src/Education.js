import React from 'react';
import './Education.css';       

const Education = () => {
  return (
    <section className="education-section" id="education">
  <div className="education-container">
    <h2>Education</h2>
    <div className="education-cards">

      {/* Bachelor's */}
      <div className="education-card">
        <h3>Bachelor's in Information Technology</h3>
        <p><strong>Institute:</strong> S.N.D. College of Engineering & Research Center,Yeola,Maharashtra</p>
        <p><strong>University:</strong> Savitribai Phule Pune University, Pune</p>
        <p><strong>Duration:</strong> 2021 - 2024</p>
        <p><strong>CGPA:</strong> 8.18</p>
        <p><strong>Key Subjects:</strong> 
          Web Development, Data Science, Machine Learning, Cloud Computing, Software Engineering
        </p>
        <p><strong>Major Projects:</strong> 
          - College Info Portal (Full Stack)<br/>
          - Comprehensive Passenger & Driver Management System (Drop Me App)<br/>
          - Dwarka Hi-Tech Nursery Management System
        </p>
        <p><strong>Achievements:</strong> 
          - Completed Android App Development Internship via Internshala<br/>
          - Joined Paarsh Infotech as Full Stack Developer post-internship
        </p>
      </div>

      {/* Diploma */}
      <div className="education-card">
        <h3>Diploma in Computer Technology</h3>
        <p><strong>Institute:</strong> Sanjivani K.B.P. Polytechnic, Kopargaon, Maharashtra</p>
        <p><strong>University:</strong> Maharashtra State Board of Technical Education (MSBTE), Mumbai</p>
        <p><strong>Duration:</strong> 2018 - 2021</p>
        <p><strong>Percentage:</strong> 86%</p>
        <p><strong>Key Subjects:</strong> 
          Programming in C & Java, Data Structures, Operating Systems, Computer Networks, DBMS
        </p>
        <p><strong>Projects:</strong> 
          Built a Hospital Management System using Java & MySQL
        </p>
        <p><strong>Highlights:</strong> 
          - Awarded Best Student Project in Final Year<br/>
          - Actively participated in technical events and coding competitions
        </p>
      </div>

      

    </div>
  </div>
</section>

  );
};

export default Education;
