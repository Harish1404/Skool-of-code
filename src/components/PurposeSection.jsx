import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import react-scroll
import Robo from "../canvas/Robo";

const PurposeSection = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "80px 10%",
      height: "100vh",
      boxSizing: "border-box",
    }}
  >
    {/* Left Side: Text Content */}
    <motion.div
      style={{
        flex: "2",
        maxWidth: "800px",
        textAlign: "left",
        marginRight: "20px",
      }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2
        style={{
          fontSize: "3rem",
          color: "#fff",
          marginBottom: "10px",
          textShadow: "4px 6px 6px #000"
        }}
      >
        Welcome to Skool of Code
      </h2>
      <p
        style={{
          fontSize: "1.3rem",
          color: "#fff",
          textAlign: "justify",
          lineHeight: "1.8",
          textShadow: "2px 2px 6px #000"
        }}
      >
        Welcome to Python Playland, the ultimate adventure in coding for kids! 🐍✨
        Here, you'll discover the magic of Python, one of the coolest programming
        languages, in a fun and playful way. Whether you're solving puzzles,
        creating games, or just exploring the world of coding, every step is
        designed to spark your imagination and creativity.
      </p>
      
      {/* Smooth Scroll Button (Now Scrolls to Exercises) */}
      <Link to="lessons" smooth={true} duration={500} offset={-80}>
        <button
          style={{
            height: "50px",
            background: "rgb(15, 96, 131)",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
            outline: "none",
            transition: "box-shadow 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 10px rgba(15, 96, 131, 0.8)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        >
          Start Learning
        </button>
      </Link>

    </motion.div>

    {/* Right Side: Robo Image */}
    <motion.div
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Robo />
    </motion.div>
  </div>
);

export default PurposeSection;
