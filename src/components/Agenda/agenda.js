import React from "react";
import './agenda.css';

const agendaItems = [
  {
    time: "09:30 AM",
    title: "Registration",
    description: "Registration & Welcome Coffee"
  },
  {
    time: "10:00 AM",
    title: "Opening Remarks",
    speaker: "Mr. Rudy Kawmi",
    description: "Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking"
  },
  {
    time: "10:10 AM",
    title: "Keynote session: Digital Transformation in a Gen AI World",
    speaker: "Ms. Siobhan Byron",
    description: "Executive Vice President, Finastra Universal Banking"
  },
  {
    time: "10:30 AM",
    title: "Decoding the Future - Transformation: The Opportunity & Time is Now",
    description: "TBA"
  },
  {
    time: "11:00 AM",
    title: "Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
    speaker: "Mr. Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking. \n\nMr. Bahaa Farouk, Chief Digital & Data Officer, Suez Canal Bank. \n\nMr. Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. Incolease"
  },
  {
    time: "11:30 AM",
    title: "Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead",
    speaker: "Mr. Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking. \n\nMs. Heba Yehia, Head of Digital Products, Arab African International Bank. \n\nMr. Ismail Ali, CEO, CariTech"
  },
  {
    time: "12:00 PM",
    title: "Coffee Break & Networking"
  },
  {
    time: "12:30 PM",
    title: "Panel Discussion: Cost to Serve: Deliver Customer Delight",
    speaker: "Mr. Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking. \n\nMr. Shehab Moustafa, Country Center of Excellence Director, Money Fellows. \n\nMr. Matthew Hughes, Global Client Executive Partner, SCB, Atos. \n\nMr. Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr."
  },
  {
    time: "01:00 PM",
    title: "The Essential Elements: What do you need to be all things to all people? ",
    speaker: "Mr. Narendra Mistry",
    description: "Chief Product and Technology Officer, Finastra Universal Banking"
  },
  {
    time: "01:30 PM",
    title: "Making the case for change: The Question is How",
    speaker: "Mr. Marwan Abouzeid",
    description: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking"
  },
  {
    time: "01:50 PM",
    title: "Closing Remarks",
    speaker: "Mr. Rudy Kawmi",
    description: "Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking"
  },
  {
    time: "02.00 PM",
    title: "Lunch"
  }
];

const Agenda = () => {
  return (
    <section id="agenda" className="agenda-section">
      <h2 className="agenda-title">Event Agenda</h2>
      <div className="agenda-timeline">
        {agendaItems.map((item, index) => (
          <div key={index} className="agenda-item">
            <div className="agenda-dot" />
            <div className="agenda-content">
              <div className="agenda-header">
                <span className="agenda-time">{item.time}</span>
              </div>
              <h3 className="agenda-item-title">{item.title}</h3>
              {item.speaker && (
                <div className="agenda-speaker">
                  {item.speaker.split('\n').map((speaker, idx) => (
                    <p key={idx}>{speaker}</p>
                  ))}
                </div>
              )}
              <p className="agenda-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;
