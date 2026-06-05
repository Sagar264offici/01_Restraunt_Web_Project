import React from 'react';
import { Check, Leaf, Heart } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Premium Photo Collage */}
          <div className="about-images">
            <div className="main-img-wrapper">
              <img 
                src="/images/restaurant-interior.png" 
                alt="Rishikesh Greens Cafe Interior" 
                className="about-img main-img"
              />
            </div>
            <div className="sub-img-wrapper glass-panel">
              <img 
                src="/images/restaurant-outdoor.png" 
                alt="Chef preparing fresh vegetarian meal" 
                className="about-img sub-img"
              />
            </div>
            <div className="experience-badge">
              <span className="years">🌿</span>
              <span className="exp-text">Pure Taste Guaranteed</span>
            </div>
          </div>

          {/* Right Column: Story & Commitments */}
          <div className="about-text-content">
            <div className="tagline">
              <Leaf className="tagline-icon" />
              <span>Our Story</span>
            </div>
            <h2 className="about-title">
              Crafting Memorable Vegetarian Dining Experiences
            </h2>
            <p className="about-description">
              Nestled on Khadri Road in Shyampur, Rishikesh, <strong>Rishikesh Greens Cafe</strong> was born out of a passion for clean, pure, and mouth-watering vegetarian food. Surrounded by the vibrant spiritual energy of Uttarakhand, we serve as a peaceful haven for locals, pilgrims, and families looking to bond over wholesome, premium food.
            </p>
            <p className="about-subtext">
              We stand apart through our commitment to separate vegetarian prep methods and absolute sanitation, bringing you classic North Indian curries, crispy South Indian dosas, spicy Chinese specials, and hearty street food with an uncompromised standard of flavor.
            </p>

            <ul className="commitments-list">
              <li>
                <div className="check-icon-wrapper">
                  <Check className="check-icon" />
                </div>
                <div>
                  <strong>Pure Vegetarian Kitchen:</strong> Strictly separated utensils and workspaces for complete spiritual purity.
                </div>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <Check className="check-icon" />
                </div>
                <div>
                  <strong>Fresh Ingredients Daily:</strong> 100% natural, local spices and premium vegetables, never frozen.
                </div>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <Check className="check-icon" />
                </div>
                <div>
                  <strong>Warm Hospitality:</strong> A friendly, home-like space designed to host groups, families, and celebrations.
                </div>
              </li>
            </ul>

            <div className="about-ctas">
              <a href="#menu" className="btn btn-gold">Explore Our Menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
