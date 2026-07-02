import { Star } from 'lucide-react';
import './FeaturedDishes.css';

const FEATURED = [
  {
    name: "Paneer Butter Masala",
    price: "₹220 / ₹370",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop",
    desc: "Cottage cheese cubes simmered in a silky, rich tomato butter gravy loaded with fresh cream.",
    badge: "Best Seller"
  },
  {
    name: "Crispy Masala Dosa",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=600&auto=format&fit=crop",
    desc: "Golden-brown rice and lentil crepe stuffed with savory mashed potato masala, served with coconut chutney.",
    badge: "Traditional"
  },
  {
    name: "Crispy Punjabi Samosa",
    price: "₹40 / ₹70",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop",
    desc: "Crispy flaky pastries filled with spiced potato and green peas, served with mint and tamarind chutneys.",
    badge: "Popular"
  },
  {
    name: "Chef Special Malai Kofta",
    price: "₹220 / ₹370",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop",
    desc: "Soft paneer & potato dumplings simmered in a mildly sweet cashew nut royal cream sauce.",
    badge: "Chef Special"
  }
];

export default function FeaturedDishes() {
  return (
    <section id="featured-dishes" className="featured-section" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-header">
          <h2 id="featured-title">Signature Delicacies</h2>
          <p>Handpicked specialties recommended by our head chef for a memorable dining experience.</p>
        </div>

        <div className="featured-grid">
          {FEATURED.map((dish, index) => (
            <article key={index} className="featured-card glass-panel">
              <figure className="img-container">
                <img 
                  src={dish.image} 
                  alt={`${dish.name} - ${dish.desc}`}
                  className="featured-img"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <span className="badge-tag">{dish.badge}</span>
              </figure>
              <div className="featured-info">
                <div className="title-row">
                  <div className="veg-title">
                    <span className="badge-veg" aria-label="Vegetarian"></span>
                    <h3>{dish.name}</h3>
                  </div>
                  <span className="featured-price">{dish.price}</span>
                </div>
                <p className="featured-desc">{dish.desc}</p>
                <div className="featured-card-footer">
                  <div className="rating" aria-label="5 out of 5 stars rating">
                    <Star className="star-filled" aria-hidden="true" />
                    <Star className="star-filled" aria-hidden="true" />
                    <Star className="star-filled" aria-hidden="true" />
                    <Star className="star-filled" aria-hidden="true" />
                    <Star className="star-filled" aria-hidden="true" />
                    <span className="rating-count">(5.0)</span>
                  </div>
                  <a href="#menu" className="order-cta-link">View Details</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
