import React from 'react';
import { Calendar, Users, Award, GlassWater } from 'lucide-react';
import './Events.css';

const EVENT_TYPES = [
  {
    icon: <Users className="event-icon" />,
    title: "Kitty Parties & Gatherings",
    capacity: "15 to 40 Guests",
    description: "Enjoy a dedicated glassmorphic lounge area, customized starter platters, and unlimited beverages tailored for your group's special afternoon out."
  },
  {
    icon: <Calendar className="event-icon" />,
    title: "Birthday & Anniversary Celebrations",
    capacity: "20 to 100 Guests",
    description: "Let us make your milestone memorable. We provide gorgeous decorations, customized multi-course vegetarian menus, and dedicated service staff."
  },
  {
    icon: <GlassWater className="event-icon" />,
    title: "Family Get-Togethers & Dinners",
    capacity: "10 to 50 Guests",
    description: "Spacious seating setups designed for comfortable conversations, kids-friendly food options, and a peaceful garden background to make family bonds stronger."
  }
];

export default function Events() {
  return (
    <section id="events" className="events-section">
      {/* Background Graphic accents */}
      <div className="events-bg-accent left" />
      <div className="events-bg-accent right" />

      <div className="container">
        <div className="section-header">
          <h2>Events & Celebrations</h2>
          <p>Host your special moments at Rishikesh Greens Cafe. We make hosting groups effortless.</p>
        </div>

        <div className="events-grid">
          {EVENT_TYPES.map((evt, idx) => (
            <div key={idx} className="event-card glass-panel">
              <div className="event-icon-container">
                {evt.icon}
              </div>
              <h3 className="event-title">{evt.title}</h3>
              <span className="event-capacity">{evt.capacity}</span>
              <p className="event-description">{evt.description}</p>
            </div>
          ))}
        </div>

        <div className="events-booking-banner glass-panel">
          <div className="banner-content">
            <h3 className="banner-title">Planning a custom private gathering?</h3>
            <p className="banner-desc">Get in touch with our manager to discuss custom menus, seating configurations, or decorators. We cater up to 100 people.</p>
          </div>
          <a href="#reservation-section" className="btn btn-gold banner-btn">
            Book Venue / Table
          </a>
        </div>
      </div>
    </section>
  );
}
