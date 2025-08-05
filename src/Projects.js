// Projects.js
import React from 'react';
import './Projects.css'; 

function Projects() {
  return (
    <section className="projects-gallery-section" id="projects">
      <h2 className="project-heading">Projects</h2>
      <div className="project-gallery">

        <div className="gallery-item">
          <img src="/hospital.jpg" alt="Hospital Management System" />
          <div className="caption">Hospital Management – Patient Module</div>
          <div className="project-description">
            I started developing the patient-side of a hospital management system.
            It includes patient registration, appointment booking, uploading reports, and basic billing details.
            Built using <strong>React.js</strong> with <strong>MySQL</strong>, focusing on clean forms and scalable structure.
          </div>
        </div>

        <div className="gallery-item">
          <img src="/Dropme.jpg" alt="Drop Me System" />
          <div className="caption">DROP ME – Driver & Passenger Management</div>
          <div className="project-description">
            A system to manage drivers and passengers: route assignment, trip history, and ride records.
            Created UI with <strong>Bootstrap/Tailwind</strong>, forms, and connected it with <strong>PHP + MySQL</strong> APIs.
          </div>
        </div>

        <div className="gallery-item">
          <img src="/college.jpg" alt="College Info Portal" />
          <div className="caption">College Info Portal Website</div>
          <div className="project-description">
            A frontend project using <strong>React.js + Tailwind CSS</strong> displaying categorized college info with full-width slider, cards, and navigation.
            Admin panel under development with <strong>Node.js + MySQL</strong> for backend operations.
          </div>
        </div>

        <div className="gallery-item">
          <img src="/nurcsry.jpg" alt="Dwarka Nursery Project" />
          <div className="caption">Dwarka Hitech Nursery – Admin System</div>
          <div className="project-description">
            Large-scale admin system covering Dashboard, Inventory, Billing, Dispatch, QR, Ledger, HR, and Reports.
            Built using <strong>PHP, MySQL, JS, HTML & CSS</strong> as a full-stack developer. Worked closely on bug fixing, UI improvements, and testing.
          </div>
        </div>

        <div className="gallery-item">
  <img src="/e-commers.jpg" alt="E-commerce Web App" />
  <div className="caption">QuickKart – E-commerce Web App</div>
  <div className="project-description">
    Developed a responsive e-commerce platform with product listings, cart management, and order tracking.
    Used <strong>React.js + Redux</strong> on frontend and <strong>Node.js + Express + MongoDB</strong> for backend with secure authentication.
  </div>
</div>

<div className="gallery-item">
  <img src="/event.jpg" alt="Event Management System" />
  <div className="caption">EventEase – Event Management System</div>
  <div className="project-description">
    A system for managing college and corporate events: attendee registration, schedules, and notifications.
    Built using <strong>Laravel + MySQL</strong>, with an intuitive dashboard and integrated <strong>SMTP email notifications</strong>.
  </div>
</div>

<div className="gallery-item">
  <img src="/wether.jpg" alt="Weather Dashboard" />
  <div className="caption">WeatherLive – Real-Time Weather Dashboard</div>
  <div className="project-description">
    Real-time weather tracking app using <strong>OpenWeatherMap API</strong> with dynamic charts.
    Built using <strong>React.js</strong> and styled with <strong>Tailwind CSS</strong>, featuring location-based weather updates.
  </div>
</div>

<div className="gallery-item">
  <img src="/portfolio.jpg" alt="Portfolio Website" />
  <div className="caption">DevFolio – Personal Portfolio Website</div>
  <div className="project-description">
    My interactive portfolio showcasing projects, skills, and resume with light/dark mode toggle.
    Designed using <strong>React.js</strong> and <strong>Framer Motion</strong> for animations, and deployed on <strong>Vercel</strong>.
  </div>
</div>


      </div>
    </section>
  );
}

export default Projects;
