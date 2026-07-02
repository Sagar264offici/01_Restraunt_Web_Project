import React from 'react';
import { Leaf, Award, ShieldCheck, Zap, Heart, Sparkles } from 'lucide-react';
import './WhyChooseUs.css';

const ADVANTAGES = [
  {
    icon: <Leaf className="adv-icon" />,
    title: "100% Pure Vegetarian",
    description: "Every dish is cooked in a strictly vegetarian kitchen, using separate utensils to ensure absolute purity and adherence to traditional food guidelines."
  },
  {
    icon: <Sparkles className="adv-icon" />,
    title: "Fresh & Organic Ingredients",
    description: "We source our vegetables, paneer, and grains fresh daily from local farmers, assuring the crispest, healthiest base for every recipe."
  },
  {
    icon: <ShieldCheck className="adv-icon" />,
    title: "Hygienic Kitchen Standards",
    description: "Our kitchen implements strict sanitation procedures. From deep cleaning to food handling, safety and cleanliness are our top priorities."
  },
  {
    icon: <Zap className="adv-icon" />,
    title: "Fast & Attentive Service",
    description: "Your comfort is our focus. Enjoy warm, speedy hospitality ensuring your dishes arrive hot and fresh, just the way you like them."
  },
  {
    icon: <Heart className="adv-icon" />,
    title: "Family-Friendly Ambiance",
    description: "Spacious seating layouts, child-friendly food choices, and a serene garden atmosphere make us the ideal location for family dinners."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us-section" aria-labelledby="why-title">
      <div className="container">
        <div className="section-header">
          <h2 id="why-title">Why Choose Rishikesh Greens</h2>
          <p>We pride ourselves on offering healthy meals, high hygiene, and a dining experience that feels like home.</p>
        </div>

        <div className="advantages-grid">
          {ADVANTAGES.map((adv, idx) => (
            <article key={idx} className="advantage-card glass-panel">
              <div className="icon-wrapper" aria-hidden="true">
                {adv.icon}
              </div>
              <h3 className="advantage-title">{adv.title}</h3>
              <p className="advantage-desc">{adv.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
