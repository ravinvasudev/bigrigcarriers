import Link from "next/link";
import type { Service } from "@/components/data/services";
import InteriorPage from "@/components/interior-page";

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <InteriorPage
      eyebrow={`${service.number} / services`}
      title="Freight transportation, built to move"
      intro={service.description}
    >
      <section className="interior-section">
        <div className="container detail-grid">
          <div>
            <span className="eyebrow">Built around your freight</span>
            <h2>{service.title} transportation</h2>
            <p className="detail-copy">{service.detail}</p>
            <Link className="button button-orange" href="/#quote">
              Request a quote <span aria-hidden="true">→</span>
            </Link>
          </div>
          <aside className="detail-note">
            <span>Service note</span>
            <strong>
              Capabilities are reviewed against your shipment requirements.
            </strong>
            <p>
              Share your pickup, delivery, timing, and freight details so the
              right transportation conversation can begin.
            </p>
          </aside>
        </div>
      </section>
    </InteriorPage>
  );
}
