import React from "react";
import "../App.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import foto from "../assets/foto.jpg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h4>Contact</h4>
          <p>Alexandria, Egypt</p>
          <p>Email: e.mohamedabobakr@gmail.com</p>
          <p>Phone: +20 111 092 4231</p>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Ahmed | Frontend Developer</p>
    </footer>
  );
}
