import { Link } from "react-router";
import type { Route } from "./+types/home";
import "../styles/home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Data Made Clear | Business Intelligence & Data Analytics" },
    {
      name: "description",
      content: "Transform complex data into clear, actionable insights. Expert data analytics, business intelligence, and data visualization services.",
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
            Transform Your Data Into
            <br />
            <span className="accent">Clear Decisions</span>
          </h1>
          <p className="hero-subtitle">
            Expert data analytics and business intelligence services that turn complex data into actionable insights for smarter business decisions.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-accent">
              Get Started
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
            <p>Comprehensive data solutions tailored to your business needs</p>
          </div>

          <div className="grid grid-3">
            <div className="card service-card">
              <div className="service-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>Deep-dive analysis of your data to uncover trends, patterns, and opportunities that drive growth.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">📈</div>
              <h3>Business Intelligence</h3>
              <p>Real-time dashboards and reporting systems that give you instant visibility into your business metrics.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎯</div>
              <h3>Data Strategy</h3>
              <p>Develop a data-driven roadmap aligned with your business objectives and growth plans.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">🔍</div>
              <h3>Data Visualization</h3>
              <p>Transform complex datasets into clear, compelling visual stories that everyone can understand.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">⚙️</div>
              <h3>Data Engineering</h3>
              <p>Build robust data pipelines, warehouses, and infrastructure for scalable analytics.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>Predictive models and intelligent automation to anticipate trends and optimize operations.</p>
              <Link to="/services" className="card-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose Data Made Clear</h2>
            <p>Experience the difference of working with data experts who understand your business</p>
          </div>

          <div className="grid grid-2">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3>Business-First Approach</h3>
              <p>We don't just crunch numbers—we understand your business context and deliver insights that matter to your bottom line.</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3>Clear Communication</h3>
              <p>No jargon, no confusion. We translate complex data concepts into plain language that drives action.</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3>Proven Results</h3>
              <p>Our clients see measurable improvements: increased revenue, reduced costs, and smarter decision-making.</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3>Modern Tools</h3>
              <p>We leverage cutting-edge analytics platforms, cloud infrastructure, and AI/ML technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Industries We Serve</h2>
            <p>Deep expertise across multiple sectors</p>
          </div>

          <div className="grid grid-3">
            <div className="destination-card">
              <div className="destination-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800')" }}></div>
              <div className="destination-info">
                <h3>E-Commerce & Retail</h3>
                <p>Customer analytics, inventory optimization, and sales forecasting for online and brick-and-mortar stores.</p>
                <Link to="/services" className="card-link">Explore →</Link>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800')" }}></div>
              <div className="destination-info">
                <h3>Finance & Banking</h3>
                <p>Risk analytics, fraud detection, portfolio optimization, and regulatory reporting solutions.</p>
                <Link to="/services" className="card-link">Explore →</Link>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800')" }}></div>
              <div className="destination-info">
                <h3>Healthcare</h3>
                <p>Patient outcomes analysis, operational efficiency, and predictive healthcare analytics.</p>
                <Link to="/services" className="card-link">Explore →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Client Success Stories</h2>
            <p>Hear what our clients say about working with us</p>
          </div>

          <div className="grid grid-3">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Data Made Clear helped us increase conversion rates by 35% through their customer analytics insights. Game-changer for our business."</p>
              <div className="testimonial-author">
                <strong>Sarah Chen</strong>
                <span>VP Marketing, TechStart Inc.</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Finally, dashboards we actually use! Clear, actionable, and updated in real-time. Our executive team makes better decisions faster."</p>
              <div className="testimonial-author">
                <strong>Michael Rodriguez</strong>
                <span>CFO, Global Retail Corp</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"They don't just deliver reports—they partner with us to solve business problems. Their predictive models saved us over $2M in the first year."</p>
              <div className="testimonial-author">
                <strong>Jennifer Park</strong>
                <span>COO, Supply Chain Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Make Your Data Clear?</h2>
          <p>Let's discuss how we can help you unlock the power of your data</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-accent">Schedule Consultation</Link>
            <a href="tel:+1234567890" className="btn btn-outline">Call Us Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
