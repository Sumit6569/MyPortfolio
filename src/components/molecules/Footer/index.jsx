import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./index.css"; // Importing the CSS file

const Footer = () => {
  const year = new Date();

  return (
    <footer className="footer">
      <div className="social-links">
        <a
          className="social-icon twitter"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          className="social-icon linkedin"
          href="https://www.linkedin.com/in/sumit-kumar-22002b273/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="social-icon github"
          href="https://github.com/Sumit6569"
          target="_blank"
          rel="noopener noreferrer"
        ></a>

        <FaGithub />
        <a
          className="social-icon instagram"
          href="https://www.instagram.com/sumitk_018/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer-links">
        <a
          href="https://www.fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fiverr
        </a>
        <a
          href="https://www.upwork.com/freelancers"
          target="_blank"
          rel="noopener noreferrer"
        >
          UpWork
        </a>
        <a
          href="http://freelancer.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freelancer
        </a>
        <a
          href="https://themeforest.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          ThemeForest
        </a>
        <a
          href="https://remotehub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          RemoteHub
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </a>
        <a
          href="https://drive.google.com/file/d/1nKLhR_rYYsjsW9AGi8DPVSzS2lt29ozM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="divider"></div>
      <div className="footer-bottom">
        <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
        <p>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/sumit-kumar-22002b273/"
            target="blank"
          >
            Sumit Kumar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
