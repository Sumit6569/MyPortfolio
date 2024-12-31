import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { motion, useAnimation } from "framer-motion";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import { BottomLine } from "../../components";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_trmv6aq",
        "template_cw7bt84",
        form.current,
        "3mZNM0MHicAhtOyyk"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="heading-small">Feel Free To Contact Me</h3>
        <h1 className="heading-large">
          Get In <span className="highlight">Touch</span>
        </h1>
        <div className="bottomline">
          <BottomLine />
        </div>
      </motion.div>
      <div className="content-grid">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="subheading">Contact Me</h2>
          <form ref={form} onSubmit={handleSend}>
            <div className="form-grid">
              <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="input-field"
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="primary-button">
              <span>Send</span>
              <span>
                <MdSend />
              </span>
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="subheading">Contact Info</h2>
          <div className="contact-info">
            <div className="info-item">
              <h3>
                <FaUserAlt className="icon" /> Sumit Kumar
              </h3>
            </div>
            <div className="info-item">
              <h3>
                <FaPhoneAlt className="icon" /> +91 9693366415
              </h3>
            </div>
            <div className="info-item">
              <h3>
                <MdEmail className="icon" /> infosumitkumar@gmail.com
              </h3>
            </div>
            <div className="info-item">
              <h3>
                <FaLocationArrow className="icon" /> Gaya, Bihar, India
              </h3>
            </div>
          </div>
          <div className="social-icons">
            <h3>Social</h3>
            <div className="divider"></div>
            <a
              href="https://www.linkedin.com/in/sumit-kumar-22002b273/"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Sumit6569" target="blank">
              <FaGithubSquare />
            </a>
            <a href="" target="blank">
              <FaTwitterSquare />
            </a>
            <a href="https://www.instagram.com/sumitk_018/" target="blank">
              <FaInstagramSquare />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
