import React, { useEffect, useState } from "react";
import Items from "../../Utils/Items";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { BottomLine } from "../../components";
import "./Project.css"; // CSS file for styling

// Define animation variants
const headingAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sectionBodyAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Project = () => {
  const [items, setItems] = useState(Items);
  const [activeBtn, setActiveBtn] = useState("all");
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
    if (location.pathname === "/" && items.length > 3) {
      setItems(items.slice(0, 3));
    }
  }, [inView, animation, location, items]);

  const filterItem = (category) => {
    const filtered = Items.filter((item) => item.category === category);
    setItems(filtered);
    if (filtered.length > 3 && location.pathname === "/") {
      setItems(filtered.slice(0, 3));
    }
  };

  return (
    <div
      className={`project-container ${
        location.pathname !== "/" ? "pt-16" : ""
      }`}
    >
      <div className="parent">
        <motion.div
          initial="hidden"
          animate={viewDiv ? "visible" : "hidden"}
          variants={headingAnimation}
        >
          <div className="heading-container">
            <h3 className="subheading">Some of my recent Projects</h3>
            <h1 className="main-heading">
              Featured <span className="highlight">Projects</span>
            </h1>
            <div className="bottomline">
              <BottomLine />
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv ? "visible" : "hidden"}
          variants={sectionBodyAnimation}
        >


          <div className="projects-grid">
            {items.map((item) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                key={item.id}
                className="project-item"
              >
                <div className="project-card">
                  <img
                    className="project-image"
                    src={item.mainImage}
                    alt={item.title || "Project Image"}
                  />
                  <div className="overlay">
                    <h3 className="project-title">{item.title}</h3>
                    <Link to={`/project/${item.id}`}>
                      <button className="details-button">See Details</button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {location.pathname === "/" && (
          <div className="see-all-container">
            <Link to="/project">
              <button className="see-all-button">
                <span>See All</span>
                <FiArrowRight />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
