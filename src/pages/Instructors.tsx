import { Link } from "react-router-dom";
import { founder, instructors } from "../data/content";

export function Instructors() {
  const team = instructors.filter((person) => person.id !== "chief");

  return (
    <>
      <header className="page-hero">
        <div className="container reveal">
          <span className="section-label">Instructors</span>
          <h1 className="section-title">Meet the teaching team</h1>
          <p className="section-lead">
            Experienced instructors guiding kids and adults in authentic Shito-ryu
            across Coimbatore, Kotagiri, and Mettupalayam.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container founder-panel reveal">
          <div className="founder-photo">
            <img
              src={founder.photo}
              alt={founder.name}
              width={640}
              height={768}
              loading="lazy"
            />
          </div>
          <div>
            <span className="section-label">Leadership</span>
            <h2 className="section-title">{founder.name}</h2>
            <p className="founder-role">{founder.title}</p>
            <p className="section-lead" style={{ marginBottom: "1.25rem" }}>
              {founder.summary}
            </p>
            <ul className="founder-list">
              {founder.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="contact-note" style={{ marginTop: "1.5rem" }}>
              Real instructor names and photos can be updated in the content file
              anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Our team</span>
            <h2 className="section-title">Instructors at IJSRKDI</h2>
            <p className="section-lead">
              Names, ranks, and photos below are placeholders — send your
              instructor list and we will update this page.
            </p>
          </div>
          <div className="instructor-grid">
            {team.map((person, i) => (
              <article
                key={person.id}
                className={`instructor-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  width={480}
                  height={480}
                  loading="lazy"
                />
                <div className="instructor-body">
                  <h3>{person.name}</h3>
                  <p className="instructor-role">{person.role}</p>
                  <p className="instructor-meta">
                    {person.focus} · {person.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container reveal">
          <span className="section-label">Train with us</span>
          <h2 className="section-title">Visit a class and meet the team</h2>
          <p className="section-lead">
            Watch a session, ask questions, and see how we teach.
          </p>
          <Link to="/locations" className="btn btn-primary">
            Find a dojo
          </Link>
        </div>
      </section>
    </>
  );
}
