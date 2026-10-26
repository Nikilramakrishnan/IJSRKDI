import { Link } from "react-router-dom";
import { founder } from "../data/content";

export function About() {
  return (
    <>
      <header className="page-hero">
        <div className="container reveal">
          <span className="section-label">About</span>
          <h1 className="section-title">Indo Japan Shito Ryu Karate Do · India</h1>
          <p className="section-lead">
            A Shito-ryu school rooted in tradition, open to every sincere student —
            kids and adults alike.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container strip">
          <div className="reveal">
            <span className="section-label">Our history</span>
            <h2 className="section-title">From Japan’s Shito-ryu to Tamil Nadu</h2>
            <p className="section-lead" style={{ marginBottom: "1.25rem" }}>
              IJSRKDI was built to bring classical Shito-ryu karate to students and
              families across Coimbatore, Kotagiri, and Mettupalayam — with
              authentic practice, clear grading, and a welcoming dojo culture.
            </p>
            <p className="section-lead">
              We teach kata, kihon, and kumite with care. Our goal is not only
              strong technique, but character — respect, discipline, and
              confidence that carries beyond the dojo floor.
            </p>
          </div>
          <div className="strip-visual strip-visual-brand reveal reveal-delay-1">
            <img
              src="/images/about-brand.png"
              alt="Indo Japan Shito Ryu Karate Do · India emblem and kata practice"
              width={1024}
              height={1024}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
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
            <span className="section-label">Our founder</span>
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
            <div style={{ marginTop: "1.5rem" }}>
              <Link to="/instructors" className="btn btn-ghost">
                Meet the instructors
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sky">
        <div className="container reveal">
          <span className="section-label">Affiliation</span>
          <h2 className="section-title">Singapore Shitoryu Association</h2>
          <p className="section-lead" style={{ marginBottom: "1.5rem" }}>
            Indo Japan Shito Ryu Karate Do · India is affiliated with the Singapore
            Shitoryu Association, connecting our dojos to an established
            international Shito-ryu network for standards, grading, and lineage.
          </p>
          <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
            <Link to="/achievements" className="btn btn-ghost">
              Achievements
            </Link>
            <Link to="/locations" className="btn btn-primary">
              Visit a dojo
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">What we value</span>
            <h2 className="section-title">More than technique</h2>
          </div>
          <div className="program-grid" style={{ marginTop: "2.5rem" }}>
            <article className="program program-plain program-indigo reveal reveal-delay-1">
              <span className="program-tag">Character</span>
              <h3>Respect & discipline</h3>
              <p>
                Dojo etiquette and personal responsibility sit at the centre of
                every class — on and off the floor.
              </p>
            </article>
            <article className="program program-plain program-sakura reveal reveal-delay-2">
              <span className="program-tag">Craft</span>
              <h3>Authentic practice</h3>
              <p>
                Kata, kihon, and kumite taught with attention to detail, so
                students build real skill over time.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
