import { Link } from "react-router-dom";
import { achievements, stats } from "../data/content";
import { asset } from "../lib/assets";

export function Achievements() {
  return (
    <>
      <header className="page-hero">
        <div className="container reveal">
          <span className="section-label">Achievements</span>
          <h1 className="section-title">Milestones & recognition</h1>
          <p className="section-lead">
            From affiliation and grading to competition success — celebrating the
            journey of our students and instructors.
          </p>
        </div>
      </header>

      <section className="kata-banner" aria-label="Achievements">
        <img
          src={asset("images/achievements-banner.png")}
          alt=""
          width={1600}
          height={900}
          loading="lazy"
        />
        <div className="kata-banner-overlay">
          <div className="container reveal">
            <span className="section-label">Pride of the dojo</span>
            <h2 className="section-title">Effort. Discipline. Excellence.</h2>
            <p className="section-lead">
              Share your medals, awards, and championship results — we will feature
              them here with dates and photos.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-grid reveal">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-mint" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Highlights</span>
            <h2 className="section-title">What we celebrate</h2>
          </div>
          <div className="timeline">
            {achievements.map((item, i) => (
              <article
                key={item.id}
                className={`timeline-item reveal reveal-delay-${(i % 3) + 1}`}
              >
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="contact-note reveal">
            Placeholder achievements for structure. Send real awards, tournament
            results, years, and student names — we will replace these entries.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container reveal">
          <span className="section-label">Be part of the story</span>
          <h2 className="section-title">Start training with IJSRKDI</h2>
          <p className="section-lead">
            Visit a dojo in Coimbatore, Kotagiri, or Mettupalayam.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.85rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/programs" className="btn btn-ghost">
              Programs
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
