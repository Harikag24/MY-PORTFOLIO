import React from 'react';
import './Home.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon


function Home() {
  return (
    <section id="home" className="home">
      <h1>Hi there,</h1>
      <h2>I am <span className="highlight">Harika!</span></h2>
      <p className="tag">UTD '2024 | Software Engineer | Full Stack Developer</p>

      {/* Add buttons for profile and contact */}
      <div className="cta-buttons">
        <a href="#about-view" className="btn know-me-btn">
          Know Me <FontAwesomeIcon icon={faArrowRight} /> {/* Arrow icon */}
        </a>
        {/* <a href="#contact-view" className="btn btn-secondary">Let's Chat</a> */}
      </div>
    </section>
  );
}

export default Home;

