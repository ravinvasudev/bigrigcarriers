import HomeInteractions from "@/components/home-interactions";

export default function QuoteSection() {
  return (
    <section className="quote" id="contact">
      <div className="container quote-grid">
        <div>
          <span className="eyebrow">Your next shipment</span>
          <h2>Tell us what needs to move.</h2>
          <p className="quote-note">
            Tell Big Rig Carriers about your shipment and transportation
            requirements. Required fields are marked with an asterisk.
          </p>
        </div>
        <HomeInteractions />
      </div>
    </section>
  );
}
