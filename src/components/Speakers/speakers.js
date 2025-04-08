import React, { useState } from "react";
import './speakers.css';
import Portfolio1 from "../../assets/speakers/1s.jpg";
import Portfolio2 from "../../assets/speakers/2s.jpg";
import Portfolio3 from "../../assets/speakers/3s.jpg";
import Portfolio4 from "../../assets/speakers/4s.jpg";
import Portfolio5 from "../../assets/speakers/5s.jpg";
import Portfolio6 from "../../assets/speakers/6s.jpg";
import Portfolio7 from "../../assets/speakers/7s.png";
import Portfolio8 from "../../assets/speakers/8s.png";
import Portfolio9 from "../../assets/speakers/9s.jpg";
import Portfolio10 from "../../assets/speakers/10s.jpg";
import Portfolio11 from "../../assets/speakers/11s.jpg";
import Portfolio12 from "../../assets/speakers/icon.jpg";

const Speakers = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const speakers = [
        {
            img: Portfolio1,
            name: "Mr. Bahaa Farouk",
            title: "Chief Digital & Data Officer, Suez Canal Bank",
            description: "Bahaa is graduated in Computer Science 2005, also he holds two masters’ degrees in Computer Science and Business Administration, of more than 20 years’ experience Information Technology, Telco, Banking & Financial Services, Cloud and Digital Transformation in Egypt, Gulf, and Europe worked for Huawei, HP, Ooredoo, Vodafone, Banque Misr and Currently, at Suez Canal Bank, Chief Transformation Officer in charge of the digital and data transformation adopting best in class solutions and agile operating model."
          },          
        {
            img: Portfolio2,
            name: "Mr. Shehab Moustafa",
            title: "Country Center of Excellence Director, Money Fellows",
            description:""
        },
        {
            img: Portfolio3,
            name: "Mr. Marwan Abouzeid",
            title: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra",
            description:"Marwan Abouzeid is a seasoned professional with over 22 years of experience in the Fintech industry. Currently serving as the Principal Solutions Consultant & Customer Value Lead for MEA and APAC at Finastra, Marwan is known for his strategic consulting, customer relationship management, and business development expertise. \n\nHis role involves ensuring Finastra adopts the right Go-to-Market strategy for its core banking platform, blending direct strategic customer engagements for both conventional and Islamic banks with complementary marketing and business development activities. Marwan's direct KPIs include C-level engagements such as ideation sessions, strategy formulation, and business case construction. \n\nMarwan's career background spans various roles in development, product management, professional services, and presales. He has proven ability in technology consultative selling for financial institutions seeking transformation and innovation. His extensive experience and dedication have made him a key player in the industry, contributing to significant projects and initiatives that drive growth and innovation. \n\nPrior to his journey at Finastra Marwan has held multiple roles within the financial industry working for both banking solution providers and financial institutions. Marwan holds an MBA from Manchester Business School and a bachelor’s degree in computer science from The American University in Cairo."
        },
        {
            img: Portfolio4,
            name: "Mr. Karim El Mourabet",
            title: "Solution Consulting Director - MEA, Finastra.",
            description: "Karim El Mourabet leads the Retail Banking Solution Consulting team at Finastra, covering Middle East & Africa. He has over 12 years’ experience in retail banking software implementation and consulting and working with Digital Banks. He previously led the Innovation services for Finastra Global Services team and worked on Next Gen implementation services, including core banking migrations. \n\nPrior to re-joining Finastra, he was global head of solution consulting at Fidor, working on designing and launching digital banks globally. He holds a Masters of Science in Project Management and a Bachelor’s in Business Administration from the American University of Beirut."
        },
        {
            img: Portfolio5,
            name: "Ms. Siobhan Byron",
            title: "Executive Vice President, Universal Banking, Finastra.",
            description: "Siobhan oversees Universal Banking, including market leading core banking and digital solutions globally. She has more than 25 years of experience in IT and channel management, as well as leading and growing prominent technology companies across financial services, insurance, manufacturing, and public sectors. Siobhan is a strong advocate for diversity and inclusion. She is the Executive Sponsor for the company’s LGBTQ+ and Friends initiatives and supports Women@Finastra. Based in Canada, Siobhan enjoys spending down time with her family and friends, travelling, reading, and watching her son play hockey."
        },
        {
            img: Portfolio6,
            name: "Mr. Narendra Mistry",
            title: "Chief Product & Technology Officer,Universal Banking, Finastra.",
            description: "Narendra leads the global product and technology organization for Universal Banking as the Chief Product and Technology Officer (CPTO). Narendra has been in the financial software industry for more than 25 years and his career with Finastra spans more than 13 years in various leadership roles, including running product for International Retail. He has experience building new SaaS businesses in Digital Essence cloud banking, whilst ensuring a robust product and go-to-market strategy. Narendra was instrumental in the very successful Equation N-2 program and the Midas Service Pack program that have made the Midas and Equation business extremely stable over the years. \n\nDuring his time at Finastra, Narendra has built a strong reputation of being a trusted leader who has been central to many successes on our journey. Narendra is based in London."
        },
        {
            img: Portfolio7,
            name: "Mr. Ahmed Hamdy Bahey El Din",
            title: "Head of Information Technology, Incolease.",
            description: "Ahmed Hamdy is a results-driven IT professional with extensive experience leading IT departments and delivering innovative solutions. As the IT Head at Incolease, he manages all IT operations, ensuring strategic alignment, process optimization, and efficient resource management. With over 18 years of experience, his career highlights include managing complex projects at EFG-HERMES, Corplease, and Atos, focusing on business process automation and efficiency improvements. Ahmed's expertise includes ERP systems, leasing, factoring, and securitization, and he holds certifications in CBAP® and ITIL® Foundation."
        },
        {
            img: Portfolio8,
            name: "Mr. Emad Shawky Habib Hanna",
            title: "Chief Data & Analytics Officer, Banque Misr.",
            description: ""
        },
        {
            img: Portfolio9,
            name: "Ms. Heba Yehia",
            title: "Head of Digital Products, Arab African International Bank",
            description: ""
        },
        {
            img: Portfolio10,
            name: "Mr. Hamid Nirouzad",
            title: "Managing Director - Africa, Finastra Universal.",
            description : "Hamid Nirouzad is a seasoned professional in the fintech industry. He began his career at National Westminster Bank in the UK before joining Midas-Kapiti in 1994. Throughout his tenure at Finastra, Hamid has played a pivotal role in various business aspects across Europe and the MEA regions. With a robust background in both retail and corporate banking, he possesses a comprehensive understanding of the banking sector."
        },
        {
            img: Portfolio11,
            name: "Mr. Rudy Kawmi",
            title: "Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking.",
            description: "Rudy Kawmi oversees the Retail Banking business across the Middle East, Africa, and Asia-Pacific regions at Finastra. With a career dedicated to financial technology, Rudy has collaborated with banks on numerous digital transformation initiatives. As a proponent of innovative business models that promote financial inclusion, he is passionate about establishing fintech partnerships across these regions to drive innovation and expand access to next-generation banking systems."
        },
        {
            img: Portfolio12,
            name: "Mr. Matthew Hughes",
            title: "Global Client Executive Partner, SCB, Atos.",
            description: "Matthew Hughes is a seasoned professional with over 25 years of experience in the financial services and insurance sectors. Matthew worked for 17 years at Royal Bank of Scotland in various leadership roles, including Country Head of Operations in China, Head of Retail and Commercial Banking in China, Head of Core Banking Operations for England and Wales, and Head of Consumer Finance for Spain and Portugal. \n\nAt Atos, he serves as Global Client Executive Partner and Head of the Financial Services & Insurance Sector for International Markets (covering Middle East, APAC, Latin America, Switzerland, Iberia and South East Europe). In this role, Matthew leads strategic client engagement and initiatives around Platform and/or Mainframe Modernisation and Migrations, Cloud, Cybersecurity and the full range of end-to-end managed services that Atos offers, as well as the management of key client relationships, leveraging his extensive industry expertise to drive business growth and innovation. \n\nIn 2022, Atos in Asia Pacific announced Matthew's appointment as the Global Client Executive Partner for our largest customer in APAC (Global Bank), underscoring his pivotal role in strengthening the partnership between Atos and the bank. \n\nMatthew is based in Singapore and is bilingual in Spanish."
        },
    ];

    const visibleSpeakers = showAll ? speakers : speakers.slice(0, 8);

    return (
        <section id="speakers">
            <h2 className="speakersTitle">Our Speakers</h2>
            <div className="speakersImgs">
                {visibleSpeakers.map((speaker, index) => (
                    <div key={index} className="speakerCard" onClick={() => setSelectedSpeaker(speaker)}>
                        <img src={speaker.img} alt={speaker.title} className="speakersImg" />
                        <div className="speakerInfo">
                            <h3 className="speakerTitle">{speaker.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {speakers.length > 8 && (
                <button className="speakerBtn" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Show Less' : 'See More'}
                </button>
            )}

            {selectedSpeaker && (
                <div className="modalOverlay" onClick={() => setSelectedSpeaker(null)}>
                    <div className="modalContent" onClick={e => e.stopPropagation()}>
                        <button className="modalClose" onClick={() => setSelectedSpeaker(null)}>×</button>
                        <h3>{selectedSpeaker.title}</h3>
                        {selectedSpeaker.description
                            ? selectedSpeaker.description.split(/\n{1,2}/).map((para, idx) => (
                                <p key={idx}>{para.trim()}</p>
                              ))
                            : <p>No bio available.</p>
                        }
                    </div>
                </div>
            )}
        </section>
    );
};

export default Speakers;
