import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./Reviews.css";

const REVIEWS = [
  {
    name: "Amit Sharma",
    role: "Local Guide",
    stars: 5,
    date: "1 week ago",
    comment:
      "Rishikesh Greens Cafe is an absolute gem in Shyampur! The Paneer Butter Masala and Butter Naan were incredibly delicious. The fact that they have a strictly vegetarian, hygienic kitchen gives complete peace of mind. Highly recommended!",
  },
  {
    name: "Priyanka Joshi",
    role: "Travel Blogger",
    stars: 5,
    date: "2 weeks ago",
    comment:
      "Stumbled upon this cafe on our way back from Haridwar. The Masala Dosa is spectacular and the service is lightning fast. Loved the peaceful green garden atmosphere and their attention to hygiene. Definitely a 5-star experience!",
  },
  {
    name: "Rajesh Verma",
    role: "Family Diner",
    stars: 5,
    date: "1 month ago",
    comment:
      "Amazing food and very friendly staff. We ordered Malai Kofta, Dal Makhni, and their famous Kurkure Momos. Everything tasted fresh, rich, and authentic. The seating space is comfortable for kids. Our go-to spot in Rishikesh.",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const initialScrollSkip = useRef(true);

  useEffect(() => {
    // Skip scrolling on initial mount to avoid jumping users to reviews
    if (initialScrollSkip.current) {
      initialScrollSkip.current = false;
      return;
    }

    const activeSlide = slideRefs.current[activeIndex];
    if (activeSlide) {
      activeSlide.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header">
          <h2>Guest Testimonials</h2>
          <p>
            Read what our happy diners say about their experiences at Rishikesh
            Greens Cafe.
          </p>
        </div>

        {/* Google Rating Banner */}
        <div className="google-rating-banner glass-panel">
          <div className="banner-logo">
            <span className="g-blue">G</span>
            <span className="g-red">o</span>
            <span className="g-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="g-green">l</span>
            <span className="g-red">e</span>
          </div>
          <div className="banner-stats">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star-icon filled" />
              ))}
            </div>
            <span className="rating-score">
              <strong>4.7 / 5.0</strong> rating based on 340+ reviews
            </span>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="testimonial-slider-container">
          <button
            className="slider-nav-btn prev"
            onClick={handlePrev}
            aria-label="Previous review"
          >
            <ChevronLeft />
          </button>

          <div className="testimonial-slide-wrapper">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className={`testimonial-card glass-panel ${idx === activeIndex ? "active" : ""}`}
                ref={(el) => (slideRefs.current[idx] = el)}
              >
                <Quote className="quote-icon" />
                <div className="review-stars">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="star-icon filled" />
                  ))}
                </div>
                <p className="review-comment">"{rev.comment}"</p>
                <div className="reviewer-info">
                  <h3 className="reviewer-name">{rev.name}</h3>
                  <span className="reviewer-role">{rev.role}</span>
                  <span className="review-date">• {rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="slider-nav-btn next"
            onClick={handleNext}
            aria-label="Next review"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Slider Pagination Dots */}
        <div className="slider-dots">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
