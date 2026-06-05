import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop',
    title: 'Chef Special Paneer Lababdar',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1000&auto=format&fit=crop',
    title: 'Crispy Masala Dosa',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    title: 'Charming Cafe Ambiance',
    category: 'ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=1000&auto=format&fit=crop',
    title: 'Creamy White Sauce Pasta',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1000&auto=format&fit=crop',
    title: 'Crispy Punjabi Samosa',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    title: 'Family Gathering Area',
    category: 'ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop',
    title: 'Fresh Garden Salad Prep',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1000&auto=format&fit=crop',
    title: 'Spicy Chilli Paneer Wok',
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
