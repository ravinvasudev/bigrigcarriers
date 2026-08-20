import ContentList from "@/components/content-list";
import { industries } from "@/components/data/site-content";

export default function IndustriesSection() {
  return (
    <section className="section-industries section-wordmark" id="industries">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Industries</span>
            <h2>Freight requirements start with context.</h2>
          </div>
          <p className="quote-note">
            Every industry has its own products, schedules, handling
            requirements, and service priorities. We build transportation plans
            around how your freight actually operates.
          </p>
        </div>
        <ContentList items={industries} />
      </div>
    </section>
  );
}
