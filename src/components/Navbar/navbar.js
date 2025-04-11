import React, { useState } from "react";
import './navbar.css';
import logo from "../../assets/cogent-logo-01.png";
import menu from "../../assets/menuicon.png";
import reg from "../../assets/reg.png";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="overview" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Overview</Link>
                <Link activeClass="active" to="speakers" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Speakers</Link>
                <Link activeClass="active" to="agenda" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Agenda</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">About</Link>
            </div>

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={reg} alt="reg" className="desktopMenuImg" />Register Now</button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='overview' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Overview</Link>
                <Link activeClass='active' to='speakers' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Speakers</Link>
                <Link activeClass='active' to='agenda' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Agenda</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='register' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Register</Link>
            </div>
        </nav>
    )
}

export default Navbar;