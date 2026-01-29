import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Data Made Clear" },
    { name: "description", content: "Learn about Data Made Clear, our team of data experts, and our mission to make complex data accessible and actionable." },
  ];
}

export default function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container text-center">
          <h1>About Data Made Clear</h1>
          <p className="lead">Making complex data accessible since 2015</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Who We Are</h2>
              <p>
                Founded in 2015, Data Made Clear has grown to become a trusted partner for businesses
                seeking to unlock the power of their data. We specialize in transforming complex data
                into clear, actionable insights that drive real business results.
              </p>
              <p>
                Our team combines deep technical expertise in data analytics, business intelligence,
                and machine learning with a genuine understanding of business challenges. We don't
                just deliver dashboards—we partner with you to solve problems and achieve your goals.
              </p>
            </div>
            <div>
              <h2>Our Mission</h2>
              <p>
                To democratize data analytics by making it accessible, understandable, and actionable
                for businesses of all sizes. We believe that every organization should be able to
                leverage their data to make smarter decisions, faster.
              </p>
              <h3 className="mt-lg">Our Values</h3>
              <ul>
                <li><strong>Clarity:</strong> We make complex data simple and actionable</li>
                <li><strong>Partnership:</strong> Your success is our success</li>
                <li><strong>Innovation:</strong> We leverage cutting-edge tools and techniques</li>
                <li><strong>Integrity:</strong> Honest insights, transparent communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2>Our Team</h2>
          <p className="lead mb-xl">Data scientists, analysts, and engineers passionate about your success</p>
          <p>
            Our team consists of data scientists, business intelligence specialists, data engineers,
            and visualization experts with decades of combined experience. We hold certifications
            from leading platforms like AWS, Google Cloud, Microsoft Azure, Tableau, and Power BI.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Approach</h2>
          </div>
          <div className="grid grid-3">
            <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🎯</div>
              <h3>Understand</h3>
              <p>We start by understanding your business, challenges, and goals—not just your data.</p>
            </div>
            <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🔨</div>
              <h3>Build</h3>
              <p>We design and implement solutions tailored to your specific needs and infrastructure.</p>
            </div>
            <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>📈</div>
              <h3>Optimize</h3>
              <p>We continuously refine and improve your analytics to maximize business impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
