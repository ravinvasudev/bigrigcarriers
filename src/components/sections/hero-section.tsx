export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content container">
        <span className="eyebrow">Transportation solutions</span>
        <h1>Freight moved with purpose.</h1>
        <p className="hero-copy">
          Big Rig Carriers provides professional transportation solutions for
          businesses that need dependable freight movement across their supply
          chain.
        </p>
        <div className="hero-actions">
          <a className="button button-orange" href="#contact">
            Request a Quote <span aria-hidden="true">→</span>
          </a>
          <a className="button button-outline" href="#services">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
