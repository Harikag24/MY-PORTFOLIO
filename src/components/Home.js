import React from 'react';
import './Home.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon


function Home() {
  return (
    <section id="home" className="home">
      <div className='homepage'>
      <div className='photo'>
      <img src="/profile.jpeg" alt="Profile" />
      </div>
      <div className='content'> 
      <h1>Hi there,I'm <span className="highlight">Harika!</span></h1>
      
      <p className="tag">UTD '2024 
      <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/UT_Dallas_2_Color_Emblem_-_SVG_Brand_Identity_File.svg" 
              alt="UTD Logo" 
              className="small-logo" 
            />
            | Software Engineer | Full Stack Developer</p>

      <p className='about-content'>
           Currently pursuing a master's in Computer Science at the University of Texas at Dallas, expecting to graduate in Fall 2024. I have two years of experience working as a Full Stack  Developer at EPAM Systems. I enjoy working on both the frontend and backend, creating efficient and user-friendly solutions. I'm looking for full-time opportunities starting in January 2025 to apply my skills and continue growing as a developer.  </p>

      {/* Add buttons for profile and contact */}
      <div className="cta-buttons">
        <a href="#experience-view" className="btn know-me-btn">
        See My Work <FontAwesomeIcon icon={faArrowRight} /> {/* Arrow icon */}
        </a>
        {/* <a href="#contact-view" className="btn btn-secondary">Let's Chat</a> */}
      </div>
      </div>
      </div>



    </section>
  );
}

export default Home;

