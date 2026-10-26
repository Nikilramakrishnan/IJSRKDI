import { Link } from "react-router-dom";
import { programsExtra } from "../data/content";

export function Programs() {
  const tone = [
    "program-sakura",
    "program-indigo",
    "program-violet",
    "program-aqua",
    "program-sakura",
  ] as const;

  return (
    <>
      <header className="page-hero">
        <div className="container reveal">
          <span className="section-label">Programs</span>
          <h1 className="section-title">Training for every path</h1>
          <p className="section-lead">
            Special classes, tournaments, belt tests, fitness, and camps — plus
            karate for children and adults.
          </p>
        </div>
      </header>

      <section className="section section-sky">
        <div className="container">
          <div className="reveal">
            <span className="section-label">What we offer</span>
            <h2 className="section-title">Our programs</h2>
          </div>
          <div className="program-grid" style={{ marginTop: "2.5rem" }}>
            {programsExtra.map((item, i) => (
              <article
                key={item.id}
                className={`program program-plain ${tone[i % tone.length]} reveal reveal-delay-${(i % 3) + 1}`}
              >
                <span className="program-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">By age</span>
            <h2 className="section-title">Kids and adults</h2>
          </div>
          <div className="program-grid">
            <article className="program program-sakura reveal">
              <img
                className="program-media"
                src="/images/program-kids.png"
                alt="Children learning karate with an instructor"
                width={800}
                height={500}
                loading="lazy"
              />
              <div className="program-body">
                <span className="program-tag">Youth program</span>
                <h3>Kids karate</h3>
                <p style={{ marginBottom: "1rem" }}>
                  A welcoming introduction to martial arts. Children learn
                  fundamentals of Shito-ryu while building confidence, focus, and
                  respect for others.
                </p>
                <p>
                  Classes balance technique with engagement — so kids stay motivated
                  while developing real skills and healthy habits.
                </p>
              </div>
            </article>
            <article className="program program-aqua reveal reveal-delay-1">
              <img
                className="program-media"
                src="/images/program-adults.png"
                alt="Adult karate practitioner in kata practice"
                width={800}
                height={500}
                loading="lazy"
              />
              <div className="program-body">
                <span className="program-tag">Adult program</span>
                <h3>Adults karate</h3>
                <p style={{ marginBottom: "1rem" }}>
                  Structured training for adults of all experience levels. Improve
                  fitness, sharpen technique, and deepen your understanding of
                  Shito-ryu kata and application.
                </p>
                <p>
                  Whether you are starting fresh or returning to the dojo, you will
                  train in a focused, respectful environment.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="kata-banner" aria-label="Kata forms">
        <img
          src="/images/kata-forms.png"
          alt=""
          width={1600}
          height={900}
          loading="lazy"
        />
        <div className="kata-banner-overlay">
          <div className="container reveal">
            <span className="section-label">Shito-ryu kata</span>
            <h2 className="section-title">Forms that shape the art</h2>
            <p className="section-lead">
              From basics to advanced kata — every student builds memory, timing,
              and understanding through traditional sequences.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-mint">
        <div className="container reveal">
          <span className="section-label">What you will train</span>
          <h2 className="section-title">The pillars of practice</h2>
          <div className="program-grid">
            <article className="program program-plain program-indigo reveal reveal-delay-1">
              <span className="program-tag">Kihon</span>
              <h3>Basics</h3>
              <p>
                Stances, strikes, blocks, and footwork — the foundation every
                student returns to, session after session.
              </p>
            </article>
            <article className="program program-plain program-violet reveal reveal-delay-2">
              <span className="program-tag">Kata</span>
              <h3>Forms</h3>
              <p>
                Traditional Shito-ryu kata sequences that develop memory, timing,
                power, and understanding of application.
              </p>
            </article>
            <article className="program program-plain program-aqua reveal reveal-delay-1">
              <span className="program-tag">Kumite</span>
              <h3>Sparring</h3>
              <p>
                Controlled partner work that builds timing, distance awareness,
                and practical application of technique.
              </p>
            </article>
            <article className="program program-plain program-sakura reveal reveal-delay-2">
              <span className="program-tag">Grading</span>
              <h3>Progression</h3>
              <p>
                Clear belt progression with structured assessments — so every
                student knows where they stand and where they are going.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container reveal">
          <span className="section-label">Ready to start</span>
          <h2 className="section-title">Visit a class near you</h2>
          <p className="section-lead">
            See how we train in Coimbatore, Kotagiri, or Mettupalayam before you
            enrol.
          </p>
          <Link to="/locations" className="btn btn-primary">
            View locations
          </Link>
        </div>
      </section>
    </>
  );
}
