import React from 'react';
import './intro.css';
import intro from '../../assets/intro.jpg';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="organize">Organized By,</span>
                <span className="introText">FINASTRA <br /><span className="introName">Reimagine Banking</span><br />Adapt! Evolve! Thrive!</span>
                <p className="introPara"><b>Date: </b>9th April 2025 <br /> <b>Time:</b> 9.30 AM - 2.00 PM GMT+2 <br /> <b>Venue: </b>The Nile Ritz-Carlton, Cairo, Egypt</p>
            </div>
            <img src={intro} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;