import type { Metadata } from "next";
import InteriorPage from "@/components/interior-page";
import { careers } from "@/components/data/careers";
import { company } from "@/components/data/company";

const pageMetadata = company.metadata.pages.careers;

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    siteName: company.name,
    title: pageMetadata.openGraphTitle,
    description: pageMetadata.openGraphDescription,
    url: "/careers",
  },
};

export default function CareersPage() {
  return (
    <InteriorPage
      eyebrow="Careers"
      title={careers.title}
      intro={careers.description}
    >
      <section className="interior-section">
        <div className="container detail-grid">
          <div>
            <span className="eyebrow">Open conversation</span>
            <h2>Bring your experience to the road.</h2>
            <p className="detail-copy">
              No open positions at this time.
            </p>
          </div>
          <aside className="detail-note">
            <span>Contact</span>
            <strong>{careers.contactNote}</strong>
            <p>
              <a href={company.phoneHref}>{company.phone}</a>
              <br />
              {company.hours}
            </p>
          </aside>
        </div>
      </section>
    </InteriorPage>
  );
}
