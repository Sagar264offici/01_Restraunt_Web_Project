import React from 'react';
import { Check, Heart } from 'lucide-react';
import './About.css';
import LeafLogo from './LeafLogo';

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Premium Photo Collage */}
          <div className="about-images">
            <figure className="main-img-wrapper">
              <img 
                src="/images/restaurant-interior.png" 
                alt="Rishikesh Greens Cafe Interior - Comfortable seating area with premium ambiance"
                className="about-img main-img"
                width="500"
                height="400"
              />
              <figcaption>Cafe Interior</figcaption>
            </figure>
            <figure className="sub-img-wrapper glass-panel">
              <img 
                src="/images/restaurant-outdoor.png" 
                alt="Rishikesh Greens Cafe outdoor garden area with natural seating"
                className="about-img sub-img"
                width="400"
                height="300"
              />
              <figcaption>Outdoor Garden Area</figcaption>
            </figure>
            <div className="experience-badge">
              <span className="years">🌿</span>
              <span className="exp-text">Pure Taste Guaranteed</span>
            </div>
          </div>

          {/* Right Column: Story & Commitments */}
          <article className="about-text-content">
            <div className="tagline">
              <LeafLogo width={20} height={20} aria-hidden="true" />
              <span>Our Story</span>
            </div>
            <h2 className="about-title" id="about-title">
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
                  <Check className="check-icon" aria-hidden="true" />
                </div>
                <div>
                  <strong>Pure Vegetarian Kitchen:</strong> Strictly separated utensils and workspaces for complete spiritual purity.
                </div>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <Check className="check-icon" aria-hidden="true" />
                </div>
                <div>
                  <strong>Fresh Ingredients Daily:</strong> 100% natural, local spices and premium vegetables, never frozen.
                </div>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <Check className="check-icon" aria-hidden="true" />
                </div>
                <div>
                  <strong>Warm Hospitality:</strong> A friendly, home-like space designed to host groups, families, and celebrations.
                </div>
              </li>
            </ul>

            <div className="about-ctas">
              <a href="#menu" className="btn btn-gold">Explore Our Menu</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
