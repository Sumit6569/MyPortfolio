import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import { SecondaryBtn } from "../..";

// Import your custom CSS file
import "./index.css";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="banner-container">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Hello, I'm</h2>
        <h1>Sumit Kumar</h1>
        <div className="my-4">
          <TypeAnimation
            className="animation-text"
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
        <p>
          As a MERN stack developer, I am committed to building high-quality web
          applications that meet the needs of my clients. With years of
          experience in full-stack web development, I specialize in using
          React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to
          create scalable and robust web applications.
        </p>

        <div className="btn-container">
          <a
            href="https://drive.google.com/file/d/1nKLhR_rYYsjsW9AGi8DPVSzS2lt29ozM/view?usp=sharing"
            target="_blank"
          >
            <button className="primary-button">
              <span>My Resume</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn className="secondary-button">
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </motion.div>
    </div>
  );
};

export default Banner;
