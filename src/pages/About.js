import React from "react";
import "./About.css";

function About() {
  return (
    <div className="page about">
      <h2>About Me</h2>
      <p> 
        I’m a second-year Computer Science Engineering student with a strong passion for Full Stack Development. My journey in tech is driven by curiosity, creativity, and the constant desire to build meaningful digital experiences.

My father’s words inspire me every day, and a pure soul who believes in me & keeps pushing me closer to my dreams. With their motivation, I’m working hard toward my goal of becoming a Full Stack Developer at Zoho.

I’m skilled in React, HTML, CSS, JavaScript, and Python, and I’m currently expanding my knowledge in Node.js, Express.js, and MongoDB to strengthen my backend expertise. I believe in learning by doing — every project I build takes me one step closer to my dream.
      </p>
      <div className="education-card">
        <h3>Education</h3>
        <p>Bachelor of Engineering (BE) </p>
        <p> Computer Science Engineering </p>
        <p> Saveetha Engineering College</p>
        <p> Batch : 2024-2028 </p>
      </div>
    </div>
  );
}

export default About;
