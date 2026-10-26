import { Link } from "react-router-dom";

export function Contact() {
  return (
    <>
      <header className="page-hero">
        <div className="container reveal">
          <span className="section-label">Contact</span>
          <h1 className="section-title">Reach the dojo</h1>
          <p className="section-lead">
            Planning a visit or asking about classes for kids or adults? We will
            help you find the right dojo.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-block reveal">
              <h3>Visit us</h3>
              <ul>
                <li>Coimbatore</li>
                <li>Kotagiri</li>
                <li>Mettupalayam</li>
              </ul>
              <p style={{ marginTop: "1rem" }}>
                Walk-in visits are welcome. Watch a session and meet the
                instructors.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Link to="/locations" className="btn btn-ghost">
                  See locations
                </Link>
              </div>
            </div>

            <div className="contact-block reveal reveal-delay-1">
              <h3>Details coming soon</h3>
              <p>
                Phone, WhatsApp, email, and full address details will be published
                here shortly.
              </p>
              <div className="contact-note">
                Placeholder — contact information will be updated when you are
                ready. Logo and photos can be added in the same pass.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container reveal">
          <span className="section-label">Meanwhile</span>
          <h2 className="section-title">Explore the school</h2>
          <p className="section-lead">
            Learn about Shito-ryu at IJSRKDI and the programs we offer for kids
            and adults.
          </p>
          <div style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/about" className="btn btn-ghost">
              About
            </Link>
            <Link to="/programs" className="btn btn-primary">
              Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
