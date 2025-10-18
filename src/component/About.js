import React from "react";
import "../App.css";
import foto from "../assets/foto.jpg";
export default function About() {
  return (
    <section className="about">
      <img className="disa" src={foto} alt="contact" />
      <h2>About Me</h2>
      <p style={{fontSize:"24px"}}>
        I'm a passionate Frontend Developer with skills in HTML, CSS, JavaScript,
        React, and GitHub. I enjoy building responsive, user-friendly web
        applications and always eager to learn new technologies.
        <p style={{fontSize:"20px",color:"#1c4646"}}>Academic qualification: Bachelor of Communications and Electronics Engineering, Faculty of Engineering, Alexandria University, 2019</p>
      </p>
    </section>
  );
}
