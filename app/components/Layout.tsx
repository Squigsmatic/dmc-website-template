import { Link, Outlet } from "react-router";
import { useState } from "react";
import "../styles/layout.css";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="layout">
      {/* Header & Navigation */}
      <header className="header">
        <nav className="nav container">
          <Link to="/" className="logo">
            <h1>Data Made Clear</h1>
            <span className="tagline">Transform Data Into Decisions</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
              <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
              <li><Link to="/destinations" onClick={() => setMobileMenuOpen(false)}>Destinations</Link></li>
              <li><Link to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <h3>Data Made Clear</h3>
              <p>Your trusted partner in data analytics and business intelligence, transforming complex data into clear, actionable insights.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services">Event Planning</Link></li>
                <li><Link to="/services">Transportation</Link></li>
                <li><Link to="/services">Accommodation</Link></li>
                <li><Link to="/services">Activities & Tours</Link></li>
                <li><Link to="/services">VIP Services</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Main Street<br />City, Country</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@datamadeclear.com">info@datamadeclear.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Data Made Clear. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
