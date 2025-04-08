import React from "react";
import './eventoverview.css';
import oimg from "../../assets/o1.png";
import oimg2 from "../../assets/o4.png";
import oimg3 from "../../assets/o2.png";
import oimg4 from "../../assets/o4.png";
import oimg5 from "../../assets/o5.png";


const Overview = () => {
    return (
        <section id="overview">
            <span className="overviewTitle">Event Overview</span>
            <span className="overviewDesc">Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.<br /><br />

                Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.<br /><br />

                Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.<br /><br />

                Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register today and secure your place at this must-attend event!</span><br /><br />

                <h3>TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025</h3>
        
        <div className="overviewBars">
            <div className="overviewBar">
            <img src={oimg} alt='oimg1' className='overviewBarImg' />
                    <div className='overviewBarText'>
                        <h2>Learn from industry experts</h2>
                    </div>
            </div>

            <div className="overviewBar">
            <img src={oimg2} alt='fimg' className='overviewBarImg' />
                    <div className='overviewBarText'>
                        <h2>Stay ahead of emerging trends</h2>
                    </div>
            </div>

            <div className="overviewBar">
            <img src={oimg3} alt='fimg' className='overviewBarImg' />
                    <div className='overviewBarText'>
                        <h2>Connect with fellow banking professionals</h2>
                    </div>
            </div>

            <div className="overviewBar">
            <img src={oimg4} alt='fimg' className='overviewBarImg' />
                    <div className='overviewBarText'>
                        <h2>Enhance your knowledge, skills, and network</h2>
                    </div>
            </div>

            <div className="overviewBar">
            <img src={oimg5} alt='fimg' className='overviewBarImg' />
                    <div className='overviewBarText'>
                        <h2>Share your expertise and experience with peers</h2>
                    </div>
            </div>

        </div>
        </section>
    )

}

export default Overview;