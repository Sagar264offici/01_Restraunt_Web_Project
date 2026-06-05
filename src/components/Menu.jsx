import { useState } from 'react';
import { Search, Info } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from './MenuData';
import './Menu.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on active tab AND search query
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Culinary Menu</h2>
          <p>Carefully prepared with pure local ingredients and traditional aromatic recipes.</p>
        </div>

        {/* Search & Filter Controls */}
        <div className="menu-controls glass-panel">
          <div className="search-bar-wrapper">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search paneer, dosa, pasta, mocktails..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
            />
          </div>

          <div className="category-tabs">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        <div className="menu-grid">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="menu-card glass-panel">
              <div className="menu-card-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="menu-card-image"
                  loading="lazy"
                />
                {item.tag && <span className="menu-card-tag">{item.tag}</span>}
              </div>
              
              <div className="menu-card-content">
                <div className="menu-card-title-row">
                  <div className="menu-card-title">
                    <span className="badge-veg" title="Pure Vegetarian"></span>
                    <h3>{item.name}</h3>
                  </div>
                </div>

                <p className="menu-card-desc">{item.description || "Freshly cooked to order using authentic local spices and premium recipes."}</p>
                
                <div className="menu-card-footer">
                  {item.isDual ? (
                    <div className="dual-price-tag">
                      <span className="price-label">Half: <span className="price-val">{item.halfPrice}</span></span>
                      <span className="price-divider">|</span>
                      <span className="price-label">Full: <span className="price-val">{item.fullPrice}</span></span>
                    </div>
                  ) : (
                    <span className="single-price-tag">{item.price}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="menu-no-results glass-panel">
            <Info className="no-results-icon" />
            <p>No dishes found matching your search. Try adjusting your category filter or search keywords!</p>
          </div>
        )}
      </div>
    </section>
  );
}
