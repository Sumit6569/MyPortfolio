import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../..";
import "./index.css";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <DiAtom />,
      description:
        "As a Front-end developer, I would love to develop any front-end application using React and its libraries.",
    },
    {
      id: 2,
      title: "MERN Development",
      icon: <FiServer />,
      description:
        "I am very familiar with NodeJS, Express JS, and MongoDB/Mongoose. So I can build full-stack applications with MERN.",
    },
    {
      id: 3,
      title: "Web Design",
      icon: <BiPalette />,
      description:
        "I also provide Fully Responsive Static Website Design with HTML, CSS, Bootstrap, Tailwind.",
    },
  ];

  return (
    <div className="service-container">
      <motion.div
        className="heading-section"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="heading-text">What I Provide</h3>
        <h1 className="main-title">
          My <span className="highlight-text">Services</span>
        </h1>
        <div className="bottomline">
          <BottomLine />
        </div>
      </motion.div>

      <motion.div
        className="services-grid"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`service-card ${
              service.id % 2 === 0 ? "even-service" : "odd-service"
            }`}
          >
            <div className="icon-container">
              <span className="service-icon">{service.icon}</span>
            </div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
