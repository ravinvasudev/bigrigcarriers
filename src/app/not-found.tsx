import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/components/data/company";

const pageMetadata = company.metadata.pages.notFound;

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <section className="not-found">
        <div className="container">
          <div style={{ paddingTop: "132px" }}>
            <span className="eyebrow">404 / page not found</span>
            <h1>That route has gone off the map.</h1>
            <p>
              The page you requested is not available. Return to the homepage or
              start a quote request.
            </p>
            <div className="hero-actions">
              <Link className="button button-orange" href="/">
                Back to homepage <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-dark" href="/#quote">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
