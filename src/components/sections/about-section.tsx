import { company } from "@/components/data/company";

export default function AboutSection() {
  return (
    <section className="section-about section-wordmark" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="year-mark">
            <strong>2008</strong>
            <span>Founded in Ontario</span>
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow">The company behind the cargo</span>
          <h2>Transportation experience you can count on.</h2>
          <p className="quote-note">
            Big Rig Carriers is a national carrier based in Bolton, Ontario,
            founded in 2008. Our focus is helping businesses keep freight
            moving with clear communication and dependable service.
          </p>
          <ul className="about-list">
            <li>Professional service</li>
            <li>Flexible options</li>
            <li>Reliable communication</li>
            <li>Multiple freight categories</li>
          </ul>
          <aside className="detail-note">
            <span>Based in</span>
            <strong>{company.address[1]}</strong>
            <p>
              {company.address[0]}
              <br />
              {company.address[2]}, {company.address[3]}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
