import React from "react";
import "./footer.css";
import award1 from "../../assets/award1.png";
import award2 from "../../assets/award2.png";
import award3 from "../../assets/award3.png";
import award4 from "../../assets/award4.png";
import { FaLinkedin, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Cogent Solutions™</h3>
          <p>
            Through our conferences we transform your business challenges into opportunities.
            Our clients and customers are leading government entities and the Fortune 500 companies.
          </p>
        </div>

        <div className="footer-section awards">
          <h4>Awards</h4>
          <div className="award-logos">
            <a href="https://greatplacetowork.me/best-list/best-workplaces-in-media-advertising-and-marketing-2024/" target="_blank" rel="noopener noreferrer">
              <img src={award1} alt="Award 1" />
            </a>
            <a href="https://greatplacetowork.me/best-list/best-workplaces-for-millennials-2023/" target="_blank" rel="noopener noreferrer">
              <img src={award2} alt="Award 2" />
            </a>
            <a href="https://greatplacetowork.me/events/best-workplaces-in-retail%EF%B8%8F-pharmaceuticals-healthcare%EF%B8%8F-technology%EF%B8%8F-media-advertising-and-marketing%EF%B8%8F/" target="_blank" rel="noopener noreferrer">
              <img src={award3} alt="Award 3" />
            </a>
            <a href="https://greatplacetowork.me/certified-organization/cogent-solutions-event-management/" target="_blank" rel="noopener noreferrer">
              <img src={award4} alt="Award 4" />
            </a>
          </div>
        </div>

        <div className="footer-section locations">
          <h4>Our Offices</h4>
          <div className="office">
            <strong><b>Middle East & Africa HQ</b></strong><br />
            Office No: 209, The Metropolis Tower<br />
            Business Bay, Dubai, UAE
          </div>
          <div className="office">
            <strong><b>Asia Pacific HQ</b></strong><br />
            7th Floor, Green Lanka Tower<br />
            Colombo, Sri Lanka
          </div>
          <div className="office">
            <strong><b>Saudi Arabia HQ</b></strong><br />
            Riyadh, Saudi Arabia
          </div>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p><strong>Phone:</strong> +971 50 5718867</p><br />
          <p><strong>Email:</strong> <a href="mailto:partnerships@cogentsolutions.ae">partnerships@cogentsolutions.ae</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-text">
          © 2025 Cogent Solutions Event Management LLC. All Rights Reserved
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/cogent-solutions-event-management/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/cseventsuae/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/cs_event_management/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/cseventsdxb" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
