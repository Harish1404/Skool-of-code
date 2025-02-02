import React from "react";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      style={{
        background: "linear-gradient(to right, rgb(30, 90, 180), rgb(80, 40, 200))",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left-aligned Title */}
      <motion.p
        style={{
          fontSize: "2rem",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          margin: "0",
          marginLeft: "40px",
          textShadow: "4px 6px 6px #000",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Skool of Code
      </motion.p>

      {/* Right-aligned Navigation Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          marginRight: "60px",
          textShadow: "2px 4px 4px #000",
        }}
      >
        <Link to="lessons" smooth={true} duration={500} offset={-80} style={linkStyle}>
          Lessons
        </Link>
        <Link to="exercises" smooth={true} duration={500} offset={-80} style={linkStyle}>
          Exercises
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-80} style={linkStyle}>
          About Us
        </Link>
      </div>
    </motion.nav>
  );
};

const linkStyle = {
  fontSize: "1rem",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "none",
  padding: "5px 10px",
};

export default Navbar;
