import { Link } from "react-router";
import type { Route } from "./+types/destinations";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Destinations | YourDMC" },
    { name: "description", content: "Explore our featured destinations around the world. From Paris to Dubai, London to New York - we create exceptional experiences everywhere." },
  ];
}

export default function Destinations() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container text-center">
          <h1>Our Destinations</h1>
          <p className="lead">Exceptional experiences in the world's most captivating locations</p>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2>Destinations Coming Soon</h2>
          <p className="lead mb-xl">
            We're currently updating our destinations showcase. In the meantime, we operate worldwide
            and can create exceptional experiences anywhere you need us.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Inquire About a Destination
          </Link>
        </div>
      </section>
    </div>
  );
}
