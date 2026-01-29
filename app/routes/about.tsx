import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | YourDMC" },
    { name: "description", content: "Learn about our destination management company, our team, and our commitment to creating exceptional experiences." },
  ];
}

export default function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container text-center">
          <h1>About YourDMC</h1>
          <p className="lead">Your trusted partner in destination management since 2010</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Who We Are</h2>
              <p>
                Founded in 2010, YourDMC has grown to become a leading destination management company,
                specializing in creating unforgettable experiences for corporate events, incentive travel,
                and luxury leisure programs worldwide.
              </p>
              <p>
                With offices in major cities and a network of trusted partners across the globe, we combine
                local expertise with international standards to deliver seamless, stress-free events that
                exceed expectations.
              </p>
            </div>
            <div>
              <h2>Our Mission</h2>
              <p>
                To transform every event into an extraordinary experience through exceptional service,
                creative solutions, and unwavering attention to detail. We believe that every destination
                has a story to tell, and we're here to help you discover it.
              </p>
              <h3 className="mt-lg">Our Values</h3>
              <ul>
                <li><strong>Excellence:</strong> We never settle for "good enough"</li>
                <li><strong>Integrity:</strong> Honest, transparent communication always</li>
                <li><strong>Innovation:</strong> Creative solutions for unique challenges</li>
                <li><strong>Partnership:</strong> Your success is our success</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2>Our Team</h2>
          <p className="lead mb-xl">Experienced professionals dedicated to your success</p>
          <p>
            Our team consists of destination management specialists, event planners, logistics coordinators,
            and creative professionals with decades of combined experience. We speak multiple languages,
            understand diverse cultures, and are passionate about what we do.
          </p>
        </div>
      </section>
    </div>
  );
}
