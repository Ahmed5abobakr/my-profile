import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About.js";
import Contact from "./component/contact.js";
import Footer from "./component/Footer.js";
import Hero from "./component/Hero.js";
import Navbar from "./component/Navbar.js";
import Project from "./component/Projects.js";
import Clock from "./component/Clock.js";
import ProjectsNav from "./component/ProjectsNav.js"
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
                    <ProjectsNav />
          <Clock />

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
