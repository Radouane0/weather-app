import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/radouane-boufera/";
  const githubUrl = "https://github.com/Radouane0";

  return (
    <footer className="footer">
        <div className="icons">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin 
            size={30}
            style={{ color: "black" }} 
            />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub 
            size={30}
            style={{ color: "black" }} 
            />
            </a>
        </div>
        <p>© 2023 WeatherApp All rights reserved.</p>
    </footer>
  );
};

export default Footer;
