import React from 'react';
import { Phone, MapPin, MessageCircle, Leaf } from 'lucide-react';
import './Footer.css';

// Self-contained custom SVG components for Social links to ensure error-free builds
const GithubIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-container">
          {/* Column 1: Brand details */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-logo">
              <Leaf className="footer-logo-icon" />
              <h3>Rishikesh Greens Cafe</h3>
            </a>
            <p className="footer-brand-desc">
              Fresh Food, Pure Taste, and Memorable Moments. Rishikesh's premier vegetarian cafe serving premium North Indian, South Indian, Chinese, and Street Food.
            </p>
            <div className="cafe-socials">
              <a 
                href="https://www.instagram.com/rksh_greens_cafe/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cafe-social-icon"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href="https://www.google.com/maps/dir//Rishikesh+Greens+Cafe,+Lane+No.+6,+Khadri+Rd,+near+Paras+Public+School,+Delhi+Farm,+Shyampur,+Rishikesh,+Uttarakhand+249204" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cafe-social-icon"
                aria-label="Google Maps"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reviews">Testimonials</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="footer-col contact-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact-details">
              <li>
                <MapPin className="detail-icon" />
                <span>Lane No. 6, Khadri Rd, Shyampur, Rishikesh, Uttarakhand 249204</span>
              </li>
              <li>
                <Phone className="detail-icon" />
                <a href="tel:+919927355375">+91 99273 55375</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom divider and credits */}
        <div className="footer-bottom">
          <div className="container bottom-container">
            <p className="copyright">
              &copy; {currentYear} Rishikesh Greens Cafe. All Rights Reserved.
            </p>
            
            {/* Made By Sagar Pathak Section */}
            <div className="developer-credits">
              <span className="dev-text">Made with ♥ by <strong className="dev-name">Sagar Pathak</strong></span>
              <div className="dev-links">
                <a 
                  href="https://www.linkedin.com/in/sagarakanoone" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dev-link-icon"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a 
                  href="https://github.com/Sagar264offici/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dev-link-icon"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
                <a 
                  href="https://www.instagram.com/multiverse.sagar/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dev-link-icon"
                  title="Instagram Profile"
                >
                  <InstagramIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919927355375?text=Hi!%20I'd%20like%20to%20reserve%20a%20table%20at%20Rishikesh%20Greens%20Cafe." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}
