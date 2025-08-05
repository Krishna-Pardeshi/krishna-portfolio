import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2>Experience</h2>

        <div className="experience-cards">

  {/* Current Role */}
  <div className="experience-card">
    <h3>Software Developer</h3>
    <p><strong>Company:</strong> Paarsh Infotech Pvt. Ltd.</p>
    <p><strong>Duration:</strong> Apr 2024 – July 2025</p>
    <p><strong>Location:</strong> Nashik, Maharashtra</p>
    <p><strong>Responsibilities:</strong></p>
    <ul>
      <li>Developed and maintained full-stack web applications using React.js, Node.js, PHP, and MySQL.</li>
      <li>Designed responsive and user-friendly interfaces using modern JavaScript and Tailwind CSS.</li>
      <li>Created reusable components and optimized performance for scalable frontend architecture.</li>
      <li>Implemented QR code scanning and printing features using dynamic image generation.</li>
      <li>Managed complex modules like Inventory, Billing, Reports, HR Management, Transport, and Ledger.</li>
      <li>Integrated backend APIs securely, handled error states, and ensured smooth UX across modules.</li>
      {/* <li>Collaborated using Git version control and contributed to Agile sprint planning and daily standups.</li>
      <li>Wrote documentation and maintained clean, well-commented code across all modules.</li> */}
    </ul>
  </div>

  {/* Internship */}
  <div className="experience-card">
    <h3>Web Developer Intern</h3>
    <p><strong>Company:</strong> Paarsh Infotech Pvt. Ltd.</p>
    <p><strong>Duration:</strong> Jan 2024 – Mar 2024</p>
    <p><strong>Location:</strong> Nashik, Maharashtra</p>
    <p><strong>Responsibilities:</strong></p>
    <ul>
      <li>Assisted in developing admin dashboards and user panels using HTML, CSS, JS, and PHP.</li>
      <li>Built database schemas, managed MySQL queries, and ensured normalized structure.</li>
      <li>Contributed to modules like Dashboard, Sowing, Booking, Dispatch & Invoice Management.</li>
      <li>Improved UI/UX by redesigning pages to match responsive and user-friendly layouts.</li>
      <li>Participated in code reviews, testing, and debugging of core features under senior guidance.</li>
      <li>Wrote clear and concise technical documentation for onboarding and future development.</li>
    </ul>
  </div>

</div>

      </div>
    </section>
  );
};

export default Experience;
