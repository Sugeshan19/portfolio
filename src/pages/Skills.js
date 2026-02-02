import React from "react";
import "./Skills.css";

function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Node.js", "MongoDB", "Git","Django","Python","C","Java"];

  const certificates = [
    { title: "Web Development Intern", img: process.env.PUBLIC_URL + "/rinex pic.png" },
    { title: "React Intern", img: process.env.PUBLIC_URL + "/spark certificate.jpg" },
    { title: "Full Stack Developer Intern ", img: process.env.PUBLIC_URL + "/fullstack.png" },
    { title: "UX - Design", img: process.env.PUBLIC_URL + "/infosys.png" },
    { title: "Data Analytics", img: process.env.PUBLIC_URL + "/nit.png" },
    { title: "AI Driven Flim Making", img: process.env.PUBLIC_URL + "/aiflim.png" },
    { title: "IBMZ Datathon", img: process.env.PUBLIC_URL + "/ibm.png" },
    { title: "MERN to the World", img: process.env.PUBLIC_URL + "/mern.png" },
    { title: "Mind Matters", img: process.env.PUBLIC_URL + "/mindmatters.png" },
    { title: "Pixel Play", img: process.env.PUBLIC_URL + "/pixelplay.png" },
    { title: "Render Blind", img: process.env.PUBLIC_URL + "/renderblind.png" },

  ];

  return (
    <div className="page skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((s, i) => (
          <span key={i} className="skill">{s}</span>
        ))}
      </div>

      <div className="skills-page">
        <h2>Certificates</h2>
        <div className="certificates-list">
          {certificates.map((c, i) => (
            <div key={i} className="certificate">
              <h3>{c.title}</h3>
              <img src={c.img} alt={c.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
