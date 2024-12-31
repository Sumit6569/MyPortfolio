import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  RiMenu3Fill,
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { FaHome, FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./index.css"; // Import custom CSS file for the Navbar
import { PrimaryBtn } from "../..";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About", link: "/about", icon: <RiFolderInfoFill /> },
    { title: "Project", link: "/project", icon: <MdWork /> },
    { title: "Contact", link: "/contact", icon: <RiContactsBook2Fill /> },
  ];

  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#FF651C",
    };
  };

  // Show Navbar on Scroll UP
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close drawer on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav-hidden"}`}>
      <div className="navbar-header">
        <div className="navbar-logo">
          <Link to="/">
            <h1>Sumit Kumar</h1>
          </Link>
        </div>
        <div>
          {/* Main Navigation Links for Large Screens */}
          <ul className="nav-links hidden lg:flex">
            {navLinks.map((navItem) => (
              <li key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className="text-white hover:text-primary duration-300"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
            <a
              className="primary-button"
              href="https://drive.google.com/file/d/1nKLhR_rYYsjsW9AGi8DPVSzS2lt29ozM/view?usp=sharing"
              target="blank"
            >
              <PrimaryBtn>
                <span>Resume</span>
                <span>
                  <FaDownload />
                </span>
              </PrimaryBtn>
            </a>
          </ul>

          {/* Hamburger Button for Smaller Screens */}
          {isMobile && (
            <div className="hamburger-btn block lg:hidden">
              <button onClick={toggleDrawer}>
                <RiMenu3Fill />
              </button>

              {/* Drawer for Smaller Screens */}
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="drawer-content"
                style={{
                  backgroundColor: isOpen ? "#212121" : "#fff", // Drawer color change
                }}
              >
                <ul className="space-y-4 p-4">
                  {/* Close Button */}
                  <li className="close-btn">
                    <GiCrossMark onClick={toggleDrawer} />
                  </li>
                  {/* Drawer Navigation Links */}
                  {navLinks.map((navItem) => (
                    <li key={navItem.title} onClick={toggleDrawer}>
                      <NavLink
                        to={navItem.link}
                        style={activeLink}
                        className="flex items-center text-white hover:text-primary duration-300"
                      >
                        <span className="mr-3">{navItem.icon}</span>
                        <span>{navItem.title}</span>
                      </NavLink>
                    </li>
                  ))}
                  {/* Resume Link */}
                  <li className="text-center">
                    <a
                      className="inline-block w-full"
                      href="https://drive.google.com/file/d/1nKLhR_rYYsjsW9AGi8DPVSzS2lt29ozM/view?usp=sharing"
                      target="blank"
                    >
                      <button className="primary-button w-full text-white">
                        <span>Resume</span>
                        <span>
                          <FaDownload />
                        </span>
                      </button>
                    </a>
                  </li>
                </ul>
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
