import React from "react";
import "../App.css";
import foto from "../assets/foto.jpg";
export default function Hero() {
  return (
    <section className="hero">
      <img className="disa" src={foto} alt="contact" />
      <h1>Hi, I'm Ahmed Abobakr</h1>
      <p><p>Frontend Developer | React Enthusiast | Skilled in HTML, CSS, JavaScript, and React</p>
</p>
      
    </section>
  );
}
