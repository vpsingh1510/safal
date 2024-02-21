// Footer.jsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Home from './Home'; // Import Home component
import './Home'; // This import doesn't seem necessary

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Define onClick functions to scroll to respective sections in Home component
  const handleTeamLinkClick = () => {
    scrollToSection('team');
  };

  const handleMissionLinkClick = () => {
    scrollToSection('mission');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-image">
          <img src="./src/assets/safal-transparent-logo.png" alt="Company Logo" />
        </div>
        <div className="social-icons">
          <a href="https://github.com/your-github-url" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/your-linkedin-url" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="footer-links">
          <div className="section">
            <h3>Know More</h3>
            <p>Information</p>
            <p>Services</p>
          </div>
          <div className="section">
            <h3>About</h3>
            <p>Company</p>
            <a href="#team" onClick={handleTeamLinkClick}>Team</a>
            <a href="#mission" onClick={handleMissionLinkClick}>Mission</a>
          </div>
          <div className="section">
            <Link to="/FeedbackForm">Feedback</Link>
            <p>Contact Us</p>
            <p>Support</p>
          </div>
        </div>
      </div>
      <p>&copy; 2024 Team SAFAL. All rights reserved.</p>
    </footer>
  );
};

export default Footer;