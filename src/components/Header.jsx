import { Leaf, Menu as MenuIcon, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./Header.css";
import { MENU_CATEGORIES } from "./MenuData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuPreview, setShowMenuPreview] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tour", href: "#tour" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="#home" className="logo">
          <Leaf className="logo-icon" />
          <div className="logo-text">
            <span className="logo-title">Rishikesh Greens</span>
            <span className="logo-subtitle">Cafe & Restaurant</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isMenuLink = link.name === "Menu";

              return (
                <li
                  key={link.name}
                  className={isMenuLink ? "nav-item-dropdown" : ""}
                  onMouseEnter={
                    isMenuLink ? () => setShowMenuPreview(true) : undefined
                  }
                  onMouseLeave={
                    isMenuLink ? () => setShowMenuPreview(false) : undefined
                  }
                >
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>

                  {isMenuLink && (
                    <div
                      className={`menu-preview-dropdown ${showMenuPreview ? "visible" : ""}`}
                    >
                      <p className="dropdown-title">Quick menu preview</p>
                      <div className="dropdown-tags">
                        {MENU_CATEGORIES.slice(1).map((cat) => (
                          <a
                            key={cat.id}
                            href="#menu"
                            className="dropdown-link"
                          >
                            {cat.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#menu"
                        className="btn btn-secondary dropdown-full-menu"
                      >
                        Browse full menu
                      </a>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="header-controls">
          <button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="control-icon" />
            ) : (
              <Moon className="control-icon" />
            )}
          </button>

          <a
            href="#reservation-section"
            className="btn btn-gold btn-header-cta"
          >
            Book Table
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mobile-menu-preview">
              <p className="mobile-preview-title">Menu categories</p>
              <div className="mobile-preview-tags">
                {MENU_CATEGORIES.slice(1).map((cat) => (
                  <a
                    key={cat.id}
                    href="#menu"
                    className="mobile-preview-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            </li>
            <li className="mobile-drawer-cta">
              <a
                href="#reservation-section"
                className="btn btn-gold w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Table
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
