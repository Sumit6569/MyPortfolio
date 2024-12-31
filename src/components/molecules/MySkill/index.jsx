import React from "react";
import Lottie from "react-lottie";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiFirebase,
} from "react-icons/si";
import man from "../../../assets/man.json";
import "./index.css";

const MySkill = () => {
  const languages = [
    { title: "HTML", icon: <FaHtml5 className="icon-html" /> },
    { title: "CSS", icon: <FaCss3Alt className="icon-css" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="icon-js" />,
    },
    { title: "NodeJS", icon: <FaNodeJs className="icon-node" /> },
  ];
  const frameworks = [
    { title: "React", icon: <FaReact className="icon-react" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="icon-bootstrap" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="icon-tailwind" /> },
    { title: "ExpressJS", icon: <SiExpress className="icon-express" /> },
  ];
  const tools = [
    { title: "MongoDB", icon: <SiMongodb className="icon-mongodb" /> },
    { title: "GitHub", icon: <FaGithub className="icon-github" /> },
    { title: "Firebase", icon: <SiFirebase className="icon-firebase" /> },
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop className="icon-photoshop" />,
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="skills-container">
      <h1 className="skills-header">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="skills-grid">
        <div className="skills-list">
          <h2 className="category-title">Languages:</h2>
          <div className="skills-icons">
            {languages?.map((skill) => (
              <div key={skill.title} className="skill-item">
                <div className="icon-container" title={skill.title}>
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>

          <h2 className="category-title">Library & Frameworks:</h2>
          <div className="skills-icons">
            {frameworks?.map((skill) => (
              <div key={skill.title} className="skill-item">
                <div className="icon-container" title={skill.title}>
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>

          <h2 className="category-title">Tools & Technologies:</h2>
          <div className="skills-icons">
            {tools?.map((skill) => (
              <div key={skill.title} className="skill-item">
                <div className="icon-container" title={skill.title}>
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lottie-container">
          <Lottie options={defaultOptions} height={400} width={360} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
