import { Link } from "react-router";
import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Services | Data Made Clear" },
    { name: "description", content: "Comprehensive data analytics, business intelligence, data visualization, and AI/ML services to transform your business." },
  ];
}

export default function Services() {
  const services = [
    {
      title: "Data Analytics & Insights",
      icon: "📊",
      description: "Deep analysis of your data to uncover trends, patterns, and actionable insights.",
      features: [
        "Customer behavior analysis",
        "Sales & revenue analytics",
        "Market trend analysis",
        "Performance metrics tracking",
        "Predictive analytics",
      ],
    },
    {
      title: "Business Intelligence & Dashboards",
      icon: "📈",
      description: "Real-time dashboards and reporting systems for instant business visibility.",
      features: [
        "Executive dashboards",
        "KPI tracking & monitoring",
        "Automated reporting",
        "Self-service BI tools",
        "Mobile-responsive dashboards",
      ],
    },
    {
      title: "Data Strategy & Consulting",
      icon: "🎯",
      description: "Strategic roadmap development aligned with your business objectives.",
      features: [
        "Data maturity assessment",
        "Analytics roadmap planning",
        "Technology stack evaluation",
        "Data governance frameworks",
        "Change management support",
      ],
    },
    {
      title: "Data Visualization",
      icon: "🔍",
      description: "Transform complex data into clear, compelling visual stories.",
      features: [
        "Interactive charts & graphs",
        "Infographic design",
        "Storytelling with data",
        "Custom visualization development",
        "Brand-aligned design",
      ],
    },
    {
      title: "Data Engineering & Infrastructure",
      icon: "⚙️",
      description: "Build scalable data pipelines and modern data infrastructure.",
      features: [
        "Data warehouse design",
        "ETL/ELT pipeline development",
        "Cloud data platform setup",
        "Data quality & cleansing",
        "API integrations",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description: "Intelligent automation and predictive models for competitive advantage.",
      features: [
        "Predictive modeling",
        "Forecasting algorithms",
        "Recommendation engines",
        "Natural language processing",
        "Anomaly detection",
      ],
    },
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container text-center">
          <h1>Our Services</h1>
          <p className="lead">Comprehensive data solutions that drive business results</p>
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
          <p className="lead mb-lg">Let's discuss how we can help you leverage your data for better business outcomes</p>
          <Link to="/contact" className="btn btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
