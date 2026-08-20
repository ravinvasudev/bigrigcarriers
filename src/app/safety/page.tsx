import type { Metadata } from "next";
import InteriorPage from "@/components/interior-page";
import ContentList from "@/components/content-list";
import { company } from "@/components/data/company";
import { safetyTopics } from "@/components/data/site-content";

const pageMetadata = company.metadata.pages.safety;

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  alternates: {
    canonical: "/safety",
  },
  openGraph: {
    siteName: company.name,
    title: pageMetadata.openGraphTitle,
    description: pageMetadata.openGraphDescription,
    url: "/safety",
  },
};

export default function SafetyPage() {
  return (
    <InteriorPage
      eyebrow="Safety & operations"
      title="Professional transportation starts with responsible operations."
      intro="Safety is built into the way freight is planned, handled, and communicated. Big Rig Carriers keeps the focus on prepared people, dependable equipment, secure loads, and accountable operations."
    >
      <section className="interior-section">
        <div className="container">
          <ContentList items={safetyTopics} />
          <div className="content-callout">
            <strong>Safety information should be clear and current.</strong>
            <p>
              Shipment-specific requirements, operating procedures, insurance
              information, and applicable credentials can be reviewed as part of
              the transportation conversation.
            </p>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
