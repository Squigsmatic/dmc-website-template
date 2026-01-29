import { Link } from "react-router";
import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Services | YourDMC" },
    { name: "description", content: "Comprehensive destination management services including event planning, transportation, accommodation, tours, and VIP services." },
  ];
}

export default function Services() {
  const services = [
    {
      title: "Event Planning & Management",
      icon: "🎉",
      description: "From concept to execution, we handle every aspect of your event with precision and creativity.",
      features: [
        "Corporate conferences & meetings",
        "Incentive programs & team building",
        "Product launches & brand activations",
        "Gala dinners & award ceremonies",
        "Weddings & social events",
      ],
    },
    {
      title: "Transportation Services",
      icon: "🚗",
      description: "Reliable, luxury transportation solutions for individuals and groups of any size.",
      features: [
        "Airport meet & greet",
        "Executive sedan service",
        "Motor coach charters",
        "Vintage & specialty vehicles",
        "Multilingual chauffeurs",
      ],
    },
    {
      title: "Accommodation Management",
      icon: "🏨",
      description: "Curated hotel selections and property management tailored to your preferences and budget.",
      features: [
        "Hotel sourcing & contracting",
        "Room block management",
        "VIP upgrades & amenities",
        "Boutique & luxury properties",
        "Villa & private residence rentals",
      ],
    },
    {
      title: "Activities & Experiences",
      icon: "🗺️",
      description: "Unique, memorable experiences that showcase the best of each destination.",
      features: [
        "Guided city tours",
        "Cultural immersions",
        "Adventure activities",
        "Culinary experiences",
        "Custom itinerary design",
      ],
    },
    {
      title: "VIP & Concierge Services",
      icon: "⭐",
      description: "Personalized attention and exclusive access for discerning clients.",
      features: [
        "24/7 concierge support",
        "Private venue access",
        "Celebrity meet & greets",
        "Personal shopping experiences",
        "Luxury lifestyle services",
      ],
    },
    {
      title: "Logistics & Operations",
      icon: "📋",
      description: "Behind-the-scenes coordination that ensures flawless execution.",
      features: [
        "Registration & badging",
        "Audiovisual production",
        "Signage & branding",
        "On-site coordination",
        "Risk management",
      ],
    },
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container text-center">
          <h1>Our Services</h1>
          <p className="lead">Comprehensive destination management solutions tailored to your needs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--spacing-2xl)' }}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{ padding: 'var(--spacing-xl)' }}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>
                  {service.icon}
                </div>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--color-gray-dark)', marginBottom: 'var(--spacing-md)' }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-gray-dark)' }}>
                      <span style={{ color: 'var(--color-accent)', marginRight: 'var(--spacing-xs)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p className="lead mb-lg">Let's discuss how we can make your event extraordinary</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
