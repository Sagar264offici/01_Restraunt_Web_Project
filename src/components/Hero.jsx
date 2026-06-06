import { Compass, Phone, Star } from "lucide-react";
import { useEffect, useState } from "react";
import "./Hero.css";

const HERO_IMAGES = [
  "/images/restaurant-interior.png", // Real Cafe Interior
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1600&auto=format&fit=crop", // Paneer Butter Masala
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1600&auto=format&fit=crop", // Malai Kofta Curry
  "/images/restaurant-outdoor.png", // Real Outdoor Area
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Slideshow */}
      {HERO_IMAGES.map((imgUrl, index) => (
        <div
          key={imgUrl}
          className={`hero-bg-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      ))}

      {/* Premium Dark Emerald Overlay */}
      <div className="hero-overlay" />
      <div id="tour" className="tour-anchor" />

      {/* Hero Content */}
      <div className="container hero-container">
        <div className="hero-content">
          <div className="rating-badge fade-in-up">
            <Star className="star-icon" />
            <span>4.7+ Rated Cafe in Rishikesh</span>
          </div>

          <h1 className="hero-title fade-in-up">
            Fresh Food, Pure Taste,
            <br />
            <span className="text-gold">Memorable Moments</span>
          </h1>

          <p className="hero-description fade-in-up">
            Experience the finest vegetarian and healthy multi-cuisine dining
            nestled in the serene valley of Shyampur, Rishikesh. Handcrafted
            recipes made with fresh local ingredients.
          </p>

          <div className="hero-ctas fade-in-up">
            <a href="#menu" className="btn btn-gold">
              <Compass className="btn-icon" /> View Menu
            </a>
            <a href="tel:+919927355375" className="btn btn-primary">
              <Phone className="btn-icon" /> Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir//Rishikesh+Greens+Cafe,+Lane+No.+6,+Khadri+Rd,+near+Paras+Public+School,+Delhi+Farm,+Shyampur,+Rishikesh,+Uttarakhand+249204"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-btn-secondary"
            >
              Get Directions
            </a>
          </div>

          <div className="hero-tour-strip fade-in-up">
            <a href="#menu" className="tour-pill">
              Explore the menu
            </a>
            <a href="#gallery" className="tour-pill">
              See cafe photos
            </a>
            <a href="#contact" className="tour-pill">
              Reserve a table
            </a>
          </div>
        </div>
      </div>

      {/* Visual Bottom Wave / Curve Decor */}
      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
            fill="var(--bg-primary)"
          />
        </svg>
      </div>
    </section>
  );
}
