import React, { useState } from 'react';
import './eventoverview.css';
import oimg1 from "../../assets/o1.png";
import oimg2 from "../../assets/o4.png";
import oimg3 from "../../assets/o2.png";
import oimg4 from "../../assets/o3.png";
import oimg5 from "../../assets/o5.png";

const Overview = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const benefits = [
        {
            img: oimg1,
            title: "Expert Insights",
            description: "Learn from banking innovators through keynotes and workshops"
        },
        {
            img: oimg2,
            title: "Future Trends",
            description: "Discover AI's impact on banking in 2025"
        },
        {
            img: oimg3,
            title: "Networking",
            description: "Connect with 200+ banking professionals"
        },
        {
            img: oimg4,
            title: "Hands-On Learning",
            description: "Interactive sessions for practical skills"
        },
        {
            img: oimg5,
            title: "Peer Exchange",
            description: "Share challenges in roundtable discussions"
        }
    ];

    return (
        <section id="overview" className="section">
            <div className="section-header">
                <h2 className="gradientTitle">Event Overview</h2>
                <p className="sectionDesc">
                    Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.

                    <br /><br />Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.

                    <br /><br />Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.

                    <br /><br />Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register today and secure your place at this must-attend event!
                </p>
            </div>

            <div className="reasons-container">
                <h3 className="reasons-title">
                    <span className="highlight-word">TOP</span> REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025
                </h3>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`benefit-card ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="benefit-icon">
                                <img
                                    src={benefit.img}
                                    alt={benefit.title}
                                    loading="lazy"
                                />
                            </div>
                            <div className="benefit-content">
                                <h4>{benefit.title}</h4>
                                {index === activeIndex && <p>{benefit.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Overview;