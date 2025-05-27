
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";
import "./index.css"; // Import the enhanced CSS
import { motion } from "framer-motion";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="education-container">
      <div className="education-header">
        <h1 className="education-title">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>

      <div className="education-grid">
        <div className="lottie-container">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="lottie-animation"
          />
        </div>

        <div className="qualification-container">
          {/* B.Tech */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="qualification-card"
          >
            <div className="qualification-header">
              <h3 className="qualification-title">B.Tech in CSE</h3>
              <p className="qualification-date">2023 - 2027</p>
            </div>
            <p className="qualification-description">
              I am currently studying in Computer Science and Engineering (4th
              Semester) at Jodhpur Institute of Engineering and Technology,
              Jodhpur, Rajasthan, India.
            </p>
          </motion.div>

          {/* Senior Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="qualification-card"
          >
            <div className="qualification-header">
              <h3 className="qualification-title">Senior Secondary</h3>
              <p className="qualification-date">2023</p>
            </div>
            <p className="qualification-description">
              I have successfully completed <b>Class 12th at Gaya College</b>{" "}
              with 83% (PCM).
            </p>
          </motion.div>

          {/* SSC */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="qualification-card"
          >
            <div className="qualification-header">
              <h3 className="qualification-title">Senior Secondary School</h3>
              <p className="qualification-date">2021</p>
            </div>
            <p className="qualification-description">
              I have passed the Senior Secondary Certificate (SSC) with the
              highest result <b>83%</b>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
