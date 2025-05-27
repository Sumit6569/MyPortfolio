import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <motion.div
          className="about-title"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="section-title">Something About Myself</h3>
          <h1 className="main-title">
            About <span className="highlighted-text">Me</span>
          </h1>
          <div className="bottomline">
            <BottomLine />
          </div>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="./logo3.jpg"
              alt="Sumit Kumar"
              className="profile-image"
              title="Sumit Kumar"
            />
          </motion.div>

          <motion.div
            className="about-description"
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="name">Sumit Kumar</h1>
            <div className="type-animation">
              <TypeAnimation
                className="type-animation-text"
                cursor={true}
                sequence={[
                  "A Mern-stack Developer",
                  2000,
                  "A Full-stack Developer",
                  2000,
                  "A Front-end Developer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>

            <p className="description">
              As a MERN stack developer, I am committed to building high-quality
              web applications that meet the needs of my clients. I specialize
              in using React.js, Next js, Typescript, MongoDB, Express.js, and
              Node.js to create scalable and robust web applications.
            </p>
            <br />
            <p className="description">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
            </p>

            <div className="contact-info">
              <h2 className="contact-item">
                <span className="label">Name: </span>Sumit Kumar
              </h2>
              <h2 className="contact-item">
                <span className="label">Phone: </span>+91 9693366415
              </h2>
              <h2 className="contact-item">
                <span className="label">Email: </span>infosumitkumar@gmail.com
              </h2>
              <h2 className="contact-item">
                <span className="label">Address: </span>Gaya, Bihar, India
              </h2>
              <a
                href="https://drive.google.com/file/d/1nKLhR_rYYsjsW9AGi8DPVSzS2lt29ozM/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <div className="resume-btn-container">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
