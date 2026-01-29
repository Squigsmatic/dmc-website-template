import { Link } from "react-router";
import type { Route } from "./+types/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | YourDMC" },
    { name: "description", content: "Browse our portfolio of successful events, corporate programs, and luxury travel experiences from around the world." },
  ];
}

export default function Portfolio() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container text-center">
          <h1>Our Portfolio</h1>
          <p className="lead">Showcasing our most memorable events and experiences</p>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2>Portfolio Coming Soon</h2>
          <p className="lead mb-xl">
            We're assembling a showcase of our best work. Check back soon to see photos and case studies
            from our most successful events and programs.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Request Our Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
