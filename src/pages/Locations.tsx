import { Link } from "react-router-dom";

const locations = [
  {
    num: "01",
    city: "Coimbatore",
    region: "Tamil Nadu",
    note: "Our main training hub — full programs for kids and adults.",
  },
  {
    num: "02",
    city: "Kotagiri",
    region: "Nilgiris, Tamil Nadu",
    note: "Hill-station branch serving students across the Nilgiris.",
  },
  {
    num: "03",
    city: "Mettupalayam",
    region: "Tamil Nadu",
    note: "Foothills dojo connecting Coimbatore and the Nilgiris corridor.",
  },
];

export function Locations() {
  return (
    <>
      <header className="page-hero">
        <div className="container reveal">
          <span className="section-label">Locations</span>
          <h1 className="section-title">Visit a dojo</h1>
          <p className="section-lead">
            Train with us in Coimbatore, Kotagiri, or Mettupalayam. Come watch a
            class — we welcome visitors.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="location-list" style={{ marginTop: 0 }}>
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className={`location-row reveal reveal-delay-${i + 1}`}
                style={{ cursor: "default" }}
              >
                <span className="location-num">{loc.num}</span>
                <div>
                  <h3>{loc.city}</h3>
                  <p>
                    {loc.region} — {loc.note}
                  </p>
                </div>
                <span className="location-link">Open for visits</span>
              </div>
            ))}
          </div>

          <div className="contact-note reveal" style={{ marginTop: "2.5rem" }}>
            Exact addresses, class timings, and maps will be added here soon. For
            now, reach out via the contact page and we will guide you to the
            nearest dojo.
          </div>

          <div className="reveal" style={{ marginTop: "2rem" }}>
            <Link to="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
