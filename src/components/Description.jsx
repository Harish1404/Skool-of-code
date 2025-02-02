import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll"; // Import Element for scrolling

const DescriptionBox = () => {
  return (
    <Element name="about"> {/* Wrap the section in Element */}
      <div style={{ margin: "0px 10px", padding: "0px", textShadow: "2px 2px 2px #000" }}>
        <h2 style={{ color: "white", fontSize: "2rem", textShadow: "2px 6px 4px #000" }}>
          👥 About Us
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            flexWrap: "wrap",
            margin: "10px 10px",
          }}
        >
          {/* Purpose Box */}
          <motion.div
            style={{
              background: "#f0f8ff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "30%",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 style={{ fontSize: "1.5rem", color: "#2e7d32" }}>Purpose</h3>
            <p style={{ fontSize: "1rem", color: "#333" }}>
              Our platform is built to make Python learning an enjoyable and interactive experience, ensuring kids grasp coding fundamentals with ease.
            </p>
          </motion.div>

          {/* Unique Features Box */}
          <motion.div
            style={{
              background: "#ffe4e1",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "30%",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 style={{ fontSize: "1.5rem", color: "#d32f2f" }}>Unique Features</h3>
            <p style={{ fontSize: "1rem", color: "#333" }}>
              Our AI tutor engages kids with fun, friendly conversations while also acting as a website assistant, making learning both interactive and enjoyable.
            </p>
          </motion.div>

          {/* Design Approach Box */}
          <motion.div
            style={{
              background: "#d1f2eb",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "30%",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 style={{ fontSize: "1.5rem", color: "#1e88e5" }}>Design Approach</h3>
            <p style={{ fontSize: "1rem", color: "#333" }}>
              We emphasize a clean, intuitive, and kid-friendly interface to ensure a seamless and engaging coding journey.
            </p>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default DescriptionBox;
