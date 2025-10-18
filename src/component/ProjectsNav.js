import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import foto from "../assets/foto.jpg";
export default function Projects() {
    const navigate = useNavigate();


    const projects = [
        {
            id: 1,
            name:"SubWay Surf",
            image: process.env.PUBLIC_URL + "/subway.png",

             url: "https://ahmed5abobakr.github.io/subway/",
        },
        {
            id: 2,
            name:"Snake Game",
            
            image: process.env.PUBLIC_URL + "/snake.png",
             url: "https://ahmed5abobakr.github.io/mido-game/",
        },        {
            id: 3,
            name:"Professional Site",
            
            image: process.env.PUBLIC_URL + "/portfolio.png",
             url: "https://emohamedabobakr-sudo.github.io/myCompany/",
        },
    ];


    return (
        <section className="projects">
            
            <h2>My Projects</h2>
            <div  className="project-grid">
            {projects.map((proj) => (
                <div 
                key={proj.id}
                className="project-card"
                onClick={() => window.open(proj.url, "_blank")}

                >
                

                <img src={proj.image} alt={proj.name} />
                <h3>{proj.name}</h3>
                </div>

            ))}
            </div>
        </section>
    )
}