import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";
import "./index.css"; // Make sure to import your CSS file

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
          {/* Diploma */}
          <div className="qualification-card diploma">
            <div className="qualification-header">
              <h3 className="qualification-title">B.Tech in CSE</h3>
              <p className="qualification-date">2023 - 2027</p>
            </div>
            <p className="qualification-description">
              I am currently studying in Computer Science and Engineering (4th
              Semester) at Jodhpur Institure of Engineering and  Technology 
              Jodhpur, Rajsthan,India
            </p>
          </div>

          {/* React Developer */}
          <div className="qualification-card react-developer">
            <div className="qualification-header">
              <h3 className="qualification-title">Senior Secondery</h3>
              <p className="qualification-date">2023</p>
            </div>
            <p className="qualification-description">
              I have successfully completed the{" "}
              <b>Class 12th At Gaya College </b> with 83% (PCM)
            </p>
          </div>

          {/* SSC */}
          <div className="qualification-card ssc">
            <div className="qualification-header">
              <h3 className="qualification-title"> Senior Secondery School</h3>
              <p className="qualification-date">2021</p>
            </div>
            <p className="qualification-description">
              I have passed the Senior Secondary Certificate (SSC) with the
              highest result <b> 83% </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
