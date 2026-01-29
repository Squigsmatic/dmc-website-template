import { Link } from "react-router";
import type { Route } from "./+types/home";
import "../styles/home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "YourDMC | Destination Management Company" },
    {
      name: "description",
      content: "Premier destination management company offering comprehensive event planning, transportation, accommodations, and VIP services worldwide.",
    },
  ];
}

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title">
            Unforgettable Experiences,
            <br />
            <span className="accent">Expertly Crafted</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted destination management partner for seamless events, luxury travel, and exceptional experiences worldwide.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-accent">
              Start Planning
            </Link>
            <Link to="/services" className="btn btn-outline">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Do</h2>
            <p>Comprehensive destination management services tailored to your needs</p>
          </div>

          <div className="grid grid-3">
            <div className="card service-card">
              <div className="service-icon">🎉</div>
              <h3>Event Planning</h3>
              <p>From intimate gatherings to large-scale conferences, we orchestrate flawless events that exceed expectations.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">🚗</div>
              <h3>Transportation</h3>
              <p>Luxury fleet management, airport transfers, and group transportation with professional chauffeurs.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">🏨</div>
              <h3>Accommodation</h3>
              <p>Curated hotel selections, villa rentals, and boutique properties that match your style and budget.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">🗺️</div>
              <h3>Activities & Tours</h3>
              <p>Unique experiences, guided tours, team building activities, and cultural immersions.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">⭐</div>
              <h3>VIP Services</h3>
              <p>Concierge services, private access, and personalized experiences for discerning clients.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">💼</div>
              <h3>Corporate Events</h3>
              <p>Meetings, incentive travel, conferences, and product launches executed with precision.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose Us</h2>
            <p>Experience the difference of working with destination management experts</p>
          </div>

          <div className="grid grid-2">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3>Local Expertise</h3>
              <p>Deep knowledge of destinations, insider access, and strong local partnerships ensure authentic experiences.</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance before, during, and after your event. We're always here when you need us.</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3>Tailored Solutions</h3>
              <p>No two events are alike. We customize every detail to match your vision, goals, and budget.</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3>Proven Track Record</h3>
              <p>Hundreds of successful events for Fortune 500 companies, luxury brands, and discerning travelers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Featured Destinations</h2>
            <p>Discover our most popular locations for exceptional events and experiences</p>
          </div>

          <div className="grid grid-3">
            <div className="destination-card">
              <div className="destination-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800')" }}></div>
              <div className="destination-info">
                <h3>Paris, France</h3>
                <p>The City of Light offers timeless elegance and world-class venues for any occasion.</p>
                <Link to="/destinations" className="card-link">Explore →</Link>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800')" }}></div>
              <div className="destination-info">
                <h3>Dubai, UAE</h3>
                <p>Luxury, innovation, and stunning architecture meet in this dynamic Middle Eastern hub.</p>
                <Link to="/destinations" className="card-link">Explore →</Link>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800')" }}></div>
              <div className="destination-info">
                <h3>London, UK</h3>
                <p>Historic charm blends with modern sophistication in one of the world's greatest cities.</p>
                <Link to="/destinations" className="card-link">Explore →</Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-lg">
            <Link to="/destinations" className="btn btn-primary">View All Destinations</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Client Testimonials</h2>
            <p>Hear what our clients say about working with us</p>
          </div>

          <div className="grid grid-3">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Outstanding service from start to finish. They handled every detail of our corporate retreat flawlessly."</p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>CEO, Tech Innovations Inc.</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Their local expertise and attention to detail made our destination wedding absolutely perfect. Highly recommend!"</p>
              <div className="testimonial-author">
                <strong>Michael & Emma Chen</strong>
                <span>Wedding Clients</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Professional, responsive, and creative. They transformed our vision into an unforgettable experience for our team."</p>
              <div className="testimonial-author">
                <strong>Robert Davis</strong>
                <span>VP Operations, Global Corp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Create Something Extraordinary?</h2>
          <p>Let's start planning your next unforgettable experience</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-accent">Get in Touch</Link>
            <a href="tel:+1234567890" className="btn btn-outline">Call Us Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
