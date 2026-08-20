import type { Metadata } from "next";
import InteriorPage from "@/components/interior-page";
import { company } from "@/components/data/company";

const pageMetadata = company.metadata.pages.policy;

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  alternates: {
    canonical: "/policy",
  },
  openGraph: {
    siteName: company.name,
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: "/policy",
    images: ["/policy/opengraph-image"],
  },
  twitter: {
    images: ["/policy/opengraph-image"],
  },
};

export default function PolicyPage() {
  return (
    <InteriorPage
      eyebrow="Policy"
      title="Governance & Operating Policies."
      intro="Big Rig Carriers is committed to safe, responsible, and compliant freight transportation. Our policies are designed to ensure that our operations meet regulatory requirements and industry best practices."
      image="/assets/about.jpg?auto=format&fit=crop&w=1800&q=85"
    >
      <section className="interior-section">
        <div className="container quote-page-form">
          <div>
            <span className="eyebrow">Fine Print</span>
            <h2>Transparency in Operations</h2>
            <p className="detail-copy">
              Big Rig Carriers maintains a set of governance and operating
              policies that guide our business practices and ensure compliance
              with industry standards. These policies cover areas such as
              safety, environmental responsibility, ethical conduct, and
              customer service. We are committed to providing our clients with
              reliable and efficient transportation solutions while upholding
              the highest standards of integrity and professionalism.
            </p>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
