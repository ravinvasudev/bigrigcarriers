import ContentList from "@/components/content-list";
import { equipmentCategories } from "@/components/data/site-content";

export default function FleetSection() {
  return (
    <section className="section-fleet section-wordmark" id="fleet">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Fleet &amp; equipment</span>
            <h2>The right equipment conversation starts here.</h2>
          </div>
          <p className="quote-note">
            Refrigerated, dry van, flatbed, and intermodal transportation each
            serve a different freight profile. We align options to your route,
            cargo, loading environment, and delivery requirements.
          </p>
        </div>
        <ContentList items={equipmentCategories} />
        <div className="content-callout">
          <strong>Equipment is evaluated around the shipment.</strong>
          <p>
            Trailer type, dimensions, payload, features, and availability are
            reviewed against the requirements of each move.
          </p>
        </div>
      </div>
    </section>
  );
}
