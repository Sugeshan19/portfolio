import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Have an opportunity, collaboration, or just want to say hi? I'd love to connect!</p>
      <p>Note: please enable handler option in your gmail if you are using it in chrome</p>

      <a href="mailto:sugeshansenthilv@gmail.com?subject=Let's%20Connect!&body=Hi%20Sugeshan,"
         className="contact-btn">
        Send Mail
      </a>
    </div>
  );
}

export default Contact;
