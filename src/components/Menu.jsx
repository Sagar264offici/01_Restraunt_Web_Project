import { Info, Search } from "lucide-react";
import { useState } from "react";
import "./Menu.css";
import { MENU_CATEGORIES, MENU_ITEMS } from "./MenuData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFullMenu, setShowFullMenu] = useState(false);

  // Filter items based on active tab AND search query
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const previewItems = filteredItems.slice(0, 4);
  const hasMoreItems = filteredItems.length > previewItems.length;

  const fullItems = showFullMenu ? filteredItems : [];

  return (
    <section id="menu" className="menu-section" aria-labelledby="menu-title">
      <div className="container">
        <div className="section-header">
          <h2 id="menu-title">Our Culinary Menu</h2>
          <p>
            Carefully prepared with pure local ingredients and traditional
            aromatic recipes.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="menu-controls glass-panel">
          <div className="search-bar-wrapper">
            <label htmlFor="menu-search" className="sr-only">Search menu items</label>
            <Search className="search-icon" aria-hidden="true" />
            <input
              id="menu-search"
              type="text"
              placeholder="Search paneer, dosa, pasta, mocktails..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
              aria-label="Search menu items by name or description"
            />
          </div>

          <div className="category-tabs" role="group" aria-label="Menu categories">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        <div className="menu-grid">
          {previewItems.map((item, idx) => (
            <article key={idx} className="menu-card glass-panel">
              <figure className="menu-card-image-wrapper">
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.description || 'Premium vegetarian dish'}`}
                  className="menu-card-image"
                  loading="lazy"
                  width="300"
                  height="250"
                />
                {item.tag && <span className="menu-card-tag">{item.tag}</span>}
              </figure>

              <div className="menu-card-content">
                <div className="menu-card-title-row">
                  <div className="menu-card-title">
                    <span className="badge-veg" title="Pure Vegetarian" aria-label="Vegetarian dish"></span>
                    <h3>{item.name}</h3>
                  </div>
                </div>

                <p className="menu-card-desc">
                  {item.description ||
                    "Freshly cooked to order using authentic local spices and premium recipes."}
                </p>

                <div className="menu-card-footer">
                  {item.isDual ? (
                    <div className="dual-price-tag" aria-label={`Price: Half ${item.halfPrice}, Full ${item.fullPrice}`}>
                      <span className="price-label">
                        Half:{" "}
                        <span className="price-val">{item.halfPrice}</span>
                      </span>
                      <span className="price-divider">|</span>
                      <span className="price-label">
                        Full:{" "}
                        <span className="price-val">{item.fullPrice}</span>
                      </span>
                    </div>
                  ) : (
                    <span className="single-price-tag" aria-label={`Price: ${item.price}`}>{item.price}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasMoreItems && (
          <div className="menu-preview-footer">
            <div className="menu-preview-note glass-panel">
              <p>
                Only the top dishes are shown on this page to keep scrolling
                low. Tap below to see the full menu page with every dish.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowFullMenu(true)}
              className="btn btn-gold menu-full-link"
            >
              Open Full Menu Listing
            </button>
          </div>
        )}

        {showFullMenu && (
          <div id="menu-full" className="menu-full-section">
            <div className="section-header">
              <h2>Full Menu</h2>
              <p>Explore the complete list of dishes across all categories.</p>
            </div>

            <div className="menu-grid full-menu-grid">
              {fullItems.map((item, idx) => (
                <article key={`full-${idx}`} className="menu-card glass-panel">
                  <figure className="menu-card-image-wrapper">
                    <img
                      src={item.image}
                      alt={`${item.name} - ${item.description || 'Premium vegetarian dish'}`}
                      className="menu-card-image"
                      loading="lazy"
                      width="300"
                      height="250"
                    />
                    {item.tag && (
                      <span className="menu-card-tag">{item.tag}</span>
                    )}
                  </figure>
                  <div className="menu-card-content">
                    <div className="menu-card-title-row">
                      <div className="menu-card-title">
                        <span
                          className="badge-veg"
                          title="Pure Vegetarian"
                        ></span>
                        <h3>{item.name}</h3>
                      </div>
                      <span className="menu-category-label">
                        {item.category.replace("-", " ")}
                      </span>
                    </div>
                    <p className="menu-card-desc">
                      {item.description ||
                        "Freshly cooked to order using authentic local spices and premium recipes."}
                    </p>
                    <div className="menu-card-footer">
                      {item.isDual ? (
                        <div className="dual-price-tag">
                          <span className="price-label">
                            Half:{" "}
                            <span className="price-val">{item.halfPrice}</span>
                          </span>
                          <span className="price-divider">|</span>
                          <span className="price-label">
                            Full:{" "}
                            <span className="price-val">{item.fullPrice}</span>
                          </span>
                        </div>
                      ) : (
                        <span className="single-price-tag">{item.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="menu-no-results glass-panel">
            <Info className="no-results-icon" />
            <p>
              No dishes found matching your search. Try adjusting your category
              filter or search keywords!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
