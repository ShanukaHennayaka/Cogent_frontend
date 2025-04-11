import React, { useState, useEffect } from 'react';
import './intro.css';
import introImage from '../../assets/intro.jpg';

const Intro = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <section id="intro" className={theme}>
      <div className="introContent">
        <h1 className="eventTitle">FINASTRA Presents</h1>
        <h2 className="eventSubTitle">Reimagine Banking</h2>
        <p className="eventDescription">
          <span className="highlight">Adapt! Evolve! Thrive!</span>
        </p>
        <p className="eventDetails">
          <strong>Date: </strong><span className="highlight">9th April 2025</span> <br />
          <strong>Time: </strong><span className="highlight">9.30 AM - 2.00 PM GMT+2</span> <br />
          <strong>Venue: </strong><span className="highlight">The Nile Ritz-Carlton, Cairo, Egypt</span>
        </p>
        <div className="ctaButton">
          <a href="#register">Register Now</a>
        </div>
        <button
          className="themeToggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      <div className="imageWrapper">
        <img src={introImage} alt="Event" className="introImage" />
      </div>
    </section>
  );
}

export default Intro;