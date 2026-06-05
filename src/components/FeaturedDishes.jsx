import { Star } from 'lucide-react';
import './FeaturedDishes.css';

const FEATURED = [
  {
    name: "Paneer Butter Masala",
    price: "₹220 / ₹370",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop",
    desc: "Cottage cheese cubes simmered in a silky, rich tomato butter gravy loaded with fresh cream.",
    badge: "Best Seller"
  },
  {
    name: "Crispy Masala Dosa",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=600&auto=format&fit=crop",
    desc: "Golden-brown rice and lentil crepe stuffed with savory mashed potato masala, served with coconut chutney.",
    badge: "Traditional"
  },
  {
    name: "Crispy Punjabi Samosa",
    price: "₹40 / ₹70",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=600&auto=format&fit=crop",
    desc: "Crispy flaky pastries filled with spiced potato and green peas, served with mint and tamarind chutneys.",
    badge: "Popular"
  },
  {
    name: "Chef Special Malai Kofta",
    price: "₹220 / ₹370",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop",
    desc: "Soft paneer & potato dumplings simmered in a mildly sweet cashew nut royal cream sauce.",
    badge: "Chef Special"
  }
];

export default function FeaturedDishes() {
  return (
    <section id="featured-dishes" className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2>Signature Delicacies</h2>
          <p>Handpicked specialties recommended by our head chef for a memorable dining experience.</p>
        </div>

        <div className="featured-grid">
          {FEATURED.map((dish, index) => (
            <div key={index} className="featured-card glass-panel">
              <div className="img-container">
                <img src={dish.image} alt={dish.name} className="featured-img" />
                <span className="badge-tag">{dish.badge}</span>
              </div>
              <div className="featured-info">
                <div className="title-row">
                  <div className="veg-title">
                    <span className="badge-veg"></span>
                    <h3>{dish.name}</h3>
                  </div>
                  <span className="featured-price">{dish.price}</span>
                </div>
                <p className="featured-desc">{dish.desc}</p>
                <div className="featured-card-footer">
                  <div className="rating">
                    <Star className="star-filled" />
                    <Star className="star-filled" />
                    <Star className="star-filled" />
                    <Star className="star-filled" />
                    <Star className="star-filled" />
                    <span className="rating-count">(5.0)</span>
                  </div>
                  <a href="#menu" className="order-cta-link">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
