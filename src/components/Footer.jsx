import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#2c3e50',
        opacity: 0.8,
        color: 'white',
        padding: '30px 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          zIndex: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1200px',
          margin: '0 10px',
          padding: '0 20px',
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Skool of Code</h2>
          <div style={{ fontSize: '1rem', marginTop: '20px' }}>
            <p>Mobile: +91 9025 69 7772</p>
            <p>Email: harish13032003@gmail.com</p>
          </div>
        </div>

        {/* Right Side with Hover Effect */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flex: 2,
            border: '1px solid transparent', // Base border
            transition: 'border-color 0.3s ease',
          }}
          className="footer-right"
        >
          {/* Curriculum Column */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Curriculum</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#curriculum" style={linkStyle}>Our Approach</a></li>
              <li><a href="#teachers" style={linkStyle}>Our Teachers</a></li>
              <li><a href="#blog" style={linkStyle}>Blog</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Contact</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#contact" style={linkStyle}>Contact Us</a></li>
              <li><a href="#help" style={linkStyle}>Help</a></li>
              <li><a href="#support" style={linkStyle}>Support</a></li>
            </ul>
          </div>

          {/* Teach for Us Column (Shifted to the Right) */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Teach for Us</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#showcase" style={linkStyle}>Showcase</a></li>
              <li><a href="#faq" style={linkStyle}>FAQ</a></li>
              <li><a href="#follow" style={linkStyle}>Follow Us</a></li>
            </ul>
          </div>

          {/* Follow Us Column with Social Media Icons */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Follow Us</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <a href="https://youtube.com" style={linkStyle} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} /> YouTube
                </a>
              </li>
              <li>
                <a href="https://twitter.com" style={linkStyle} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" style={linkStyle} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div
        style={{
          bottom: '10px',
          left: '20px',
          fontSize: '0.9rem',
          textAlign: 'center',
          marginTop: '20px',
          borderTop: '1px solid rgb(255, 255, 255)',
          paddingTop: '10px',
        }}
      >
        <p style={{ color: 'white', fontSize: '1.5rem' }}>&copy; Designed by: Harish P</p>
      </div>

      {/* Hover Effect CSS */}
      <style>
        {`
          .footer-right:hover {
            border-color: white;
          }
        `}
      </style>
    </footer>
  );
};

// Link style for hover effect
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  marginBottom: '10px',
  display: 'block',
  transition: 'color 0.3s ease',
};

export default Footer;
