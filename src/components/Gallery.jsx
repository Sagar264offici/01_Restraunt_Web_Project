import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop',
    title: 'Paneer Butter Masala',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1000&auto=format&fit=crop',
    title: 'Crispy Masala Dosa',
    category: 'food'
  },
  {
    url: '/images/restaurant-interior.png',
    title: 'Charming Cafe Ambiance',
    category: 'ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1000&auto=format&fit=crop',
    title: 'Creamy White Sauce Pasta',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop',
    title: 'Crispy Punjabi Samosa',
    category: 'food'
  },
  {
    url: '/images/restaurant-outdoor.png',
    title: 'Outdoor Garden Pathway',
    category: 'ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop',
    title: 'Aromatic Veg Biryani',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000&auto=format&fit=crop',
    title: 'Royal Malai Kofta',
    category: 'food'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => filter === 'all' || img.category === filter
  );

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2>Visual Gallery</h2>
          <p>A glimpse inside our warm cafe, hygienic kitchen, and premium vegetarian recipes.</p>
        </div>

        {/* Gallery Filters */}
        <div className="gallery-filters">
          <button 
            onClick={() => setFilter('all')} 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All Photos
          </button>
          <button 
            onClick={() => setFilter('food')} 
            className={`filter-btn ${filter === 'food' ? 'active' : ''}`}
          >
            Food Photography
          </button>
          <button 
            onClick={() => setFilter('ambiance')} 
            className={`filter-btn ${filter === 'ambiance' ? 'active' : ''}`}
          >
            Interior & Ambiance
          </button>
        </div>

        {/* Grid List */}
        <div className="gallery-masonry">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="gallery-item"
              onClick={() => openLightbox(idx)}
            >
              <img src={img.url} alt={img.title} className="gallery-image" />
              <div className="gallery-item-overlay">
                <ZoomIn className="zoom-icon" />
                <h3 className="gallery-item-title">{img.title}</h3>
                <span className="gallery-item-category">{img.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="lightbox-close-btn" onClick={closeLightbox}>
              <X />
            </button>
            
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-nav-btn prev" onClick={prevImage}>&#10094;</button>
              <div className="lightbox-image-container">
                <img 
                  src={filteredImages[lightboxIndex].url} 
                  alt={filteredImages[lightboxIndex].title} 
                  className="lightbox-image"
                />
                <div className="lightbox-caption">
                  {filteredImages[lightboxIndex].title}
                </div>
              </div>
              <button className="lightbox-nav-btn next" onClick={nextImage}>&#10095;</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
