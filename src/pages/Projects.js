import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    { title: "YUVA Membership", desc: "A role-based membership and administration platform built to digitize and streamline YUVA Club operations.", link: "https://yuva-web.vercel.app" },
    { title: "Namma Kadai", desc: "A React-based e-commerce website.", link: "https://Sugeshan19.github.io/NammaKadai" },
    { title: "Tribute page fo Missile Man", desc: "A simple HTML & CSS based tribute page for Missile Man of INDIA.", link: "https://sugeshan19.github.io/Tribute-page-for-MISSILE-MAN/" },
  ];

  return (
    <div className="page projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
