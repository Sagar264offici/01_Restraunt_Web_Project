import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReserve = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      
      // Auto reset success screen after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          guests: '2',
          date: '',
          time: '19:00',
          notes: ''
        });
      }, 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Find & Contact Us</h2>
          <p>Book your dining table or drop by for a fresh vegetarian feast. We are open daily.</p>
        </div>

        <div className="contact-grid">
          {/* Column 1: Info Panel & Google Maps */}
          <div className="info-panel-column">
            <div className="contact-info-cards">
              <div className="info-card glass-panel">
                <MapPin className="info-icon" />
                <div className="info-text">
                  <h3>Address</h3>
                  <p>Lane No. 6, Khadri Rd, near Paras Public School, Delhi Farm, Shyampur, Rishikesh, Uttarakhand 249204</p>
                </div>
              </div>

              <div className="info-card glass-panel">
                <Phone className="info-icon" />
                <div className="info-text">
                  <h3>Phone / Booking</h3>
                  <a href="tel:+919927355375" className="contact-link">+91 99273 55375</a>
                </div>
              </div>

              <div className="info-card glass-panel">
                <Clock className="info-icon" />
                <div className="info-text">
                  <h3>Opening Hours</h3>
                  <p>Monday - Sunday<br />10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps IFrame */}
            <div className="map-wrapper glass-panel">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.9691866442653!2d78.23473487625126!3d30.0545836181977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093f17f4cf7d83%3A0x193a3fc67bb3001!2sRishikesh%20Greens%20Cafe!5e0!3m2!1sen!2sin!4v1717614000000!5m2!1sen!2sin" 
                width="100%" 
                height="320" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Rishikesh Greens Cafe Location Map"
              />
            </div>
          </div>

          {/* Column 2: Table Reservation Form */}
          <div id="reservation-section" className="reservation-form-container glass-panel">
            {!formSubmitted ? (
              <form onSubmit={handleReserve} className="reservation-form">
                <div className="form-header">
                  <h3>Table Reservation</h3>
                  <p>Book your table instantly. We will hold your table for up to 15 minutes past booking time.</p>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <select 
                      id="guests" 
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5 Persons</option>
                      <option value="6">6+ Persons</option>
                      <option value="12">Group (10-15)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      required 
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time *</label>
                    <input 
                      type="time" 
                      id="time" 
                      name="time" 
                      required 
                      value={formData.time}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Special Requests (Optional)</label>
                  <textarea 
                    id="notes" 
                    name="notes" 
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="E.g. High chair for child, window seat, celebration event..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-gold w-full form-submit-btn" 
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Confirm Booking'}
                </button>
              </form>
            ) : (
              <div className="reservation-success-pane">
                <CheckCircle2 className="success-icon" />
                <h3>Reservation Confirmed!</h3>
                <p className="success-message">
                  Thank you, <strong>{formData.name}</strong>. Your reservation for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong> has been received.
                </p>
                <div className="booking-summary glass-panel">
                  <p>We have sent a confirmation details SMS. Please call us if you need to adjust or cancel your booking.</p>
                </div>
                <div className="quick-actions">
                  <a href={`https://wa.me/919927355375?text=Hi,%20I%20just%20booked%20a%20table%20for%20${formData.guests}%20people%20on%20${formData.date}%20at%20${formData.time}%20under%20the%20name%20${formData.name}.`} target="_blank" rel="noopener noreferrer" className="btn btn-primary whatsapp-chat-btn">
                    <MessageSquare className="btn-icon" /> Confirm on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
