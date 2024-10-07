import React from 'react';
import './About.css'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon



const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          {/* Image from the public folder */}
          <img src="/profile.jpeg" alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Harika. I'm currently pursuing a master's in Computer Science at the University of Texas at Dallas, expecting to graduate in Fall 2024. With two years of experience as a Full Stack Developer at EPAM Systems, I specialize in the MERN and MEAN stacks. I'm actively looking for full-time roles starting January 2025.
          </p>
          <div className="button">
            <a href="#experience-view">See My Work<FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
        </div>
        
      </div>
      
    </section>
    
    
  );
};

export default About;
