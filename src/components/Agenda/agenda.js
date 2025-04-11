import React, { useEffect, useRef } from "react";
import './agenda.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const agendaRef = useRef(null);
  const itemsRef = useRef([]);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const animationsRef = useRef([]);

  useEffect(() => {
    const currentItems = itemsRef.current;
    const currentTitle = titleRef.current;
    const currentTimeline = timelineRef.current;
    const currentAgendaRef = agendaRef.current;

    let ctx = gsap.context(() => {
      animationsRef.current.push(
        gsap.from(currentTitle, {
          duration: 1,
          y: 10,
          opacity: 0,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: currentAgendaRef,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        })
      );

      animationsRef.current.push(
        gsap.from(currentTimeline, {
          duration: 2,
          scaleY: 0,
          transformOrigin: "top center",
          ease: "power3.out",
          scrollTrigger: {
            trigger: currentAgendaRef,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        })
      );

      currentItems.forEach((item, index) => {
        if (!item) return;

        const delay = index * 0.15;

        animationsRef.current.push(
          gsap.from(item, {
            duration: 0.8,
            y: 60,
            opacity: 0,
            scale: 0.9,
            delay,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true
            }
          })
        );

        const card = item.querySelector('.agenda-card');

        const handleMouseEnter = () => {
          gsap.to(card, {
            duration: 0.3,
            backgroundColor: '#f8f9fa',
            boxShadow: '0 10px 30px rgba(52, 152, 219, 0.3)'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            duration: 0.3,
            backgroundColor: '#ffffff',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
          });
        };

        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);

        animationsRef.current.push({
          revert: () => {
            item.removeEventListener('mouseenter', handleMouseEnter);
            item.removeEventListener('mouseleave', handleMouseLeave);
          }
        });
      });

      const dots = document.querySelectorAll('.agenda-dot');
      dots.forEach(dot => {
        animationsRef.current.push(
          gsap.from(dot, {
            duration: 0.8,
            scale: 0,
            opacity: 0,
            ease: "elastic.out(1, 0.8)",
            scrollTrigger: {
              trigger: dot,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          })
        );

        animationsRef.current.push(
          gsap.to(dot, {
            duration: 2,
            boxShadow: '0 0 0 8px rgba(52, 152, 219, 0.2)',
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          })
        );
      });
    }, currentAgendaRef);

    return () => {
      ctx.revert();
      animationsRef.current.forEach(anim => {
        if (anim && typeof anim.revert === 'function') {
          anim.revert();
        }
      });
      animationsRef.current = [];
    };
  }, []);

  return (
    <section id="agenda" className="agenda-section" ref={agendaRef}>
      <h2 className="agenda-title" ref={titleRef}>Event Agenda</h2>
      <div className="agenda-timeline">
        {agendaItems.map((item, index) => (
          <div
            key={index}
            className={`agenda-item ${index % 2 === 0 ? 'left' : 'right'}`}
            ref={el => itemsRef.current[index] = el}
          >
            <div className="agenda-dot-container">
              <div className="agenda-dot" />
              {index !== agendaItems.length - 1 && <div className="agenda-connector" />}
            </div>
            <div className="agenda-content">
              <div className="agenda-header">
                <span className="agenda-time">{item.time}</span>
              </div>
              <div className="agenda-card">
                <h3 className="agenda-item-title">{item.title}</h3>
                {item.speaker && (
                  <div className="agenda-speaker">
                    {item.speaker.split('\n\n').map((speaker, idx) => (
                      <div key={idx} className="speaker-item">
                        <div className="speaker-icon">👤</div>
                        <p>{speaker}</p>
                      </div>
                    ))}
                  </div>
                )}
                {item.description && item.description !== "TBA" && (
                  <p className="agenda-description">{item.description}</p>
                )}
                {item.description === "TBA" && (
                  <div className="tba-badge">To Be Announced</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;