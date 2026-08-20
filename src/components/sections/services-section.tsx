import Link from "next/link";
import type { CSSProperties } from "react";
import { services } from "@/components/data/services";

export default function ServicesSection() {
  return (
    <section className="section-services section-wordmark" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">What we move</span>
            <h2>Transportation that fits the freight.</h2>
          </div>
          <p className="quote-note">
            From temperature-controlled shipments to open-deck freight, choose
            the service category that matches your requirements.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link
              className="service-card"
              href={service.target}
              key={service.title}
              style={{ "--image": `url(${service.image})` } as CSSProperties}
            >
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="text-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
