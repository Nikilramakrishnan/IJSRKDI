import {
  achievements,
  contactInfo,
  founder,
  instructors,
  programsExtra,
  stats,
} from "../data/content";
import { scrollToSection } from "../lib/scroll";
import { HorizontalRail } from "../components/HorizontalRail";

const locations = [
  {
    num: "01",
    city: "Coimbatore",
    note: "Main training hub · kids & adults · full Shito-ryu program",
  },
  {
    num: "02",
    city: "Kotagiri",
    note: "Nilgiris branch · youth & adult batches · hill-station dojo",
  },
  {
    num: "03",
    city: "Mettupalayam",
    note: "Foothills branch · beginners welcome · open for visits",
  },
];

const pillars = [
  {
    tag: "Kihon",
    title: "Basics",
    text: "Stances, strikes, blocks, and footwork — the foundation every student returns to.",
    tone: "program-indigo",
  },
  {
    tag: "Kata",
    title: "Forms",
    text: "Traditional Shito-ryu kata sequences that develop memory, timing, and power.",
    tone: "program-violet",
  },
  {
    tag: "Kumite",
    title: "Sparring",
    text: "Controlled partner work that builds timing, distance, and practical application.",
    tone: "program-aqua",
  },
  {
    tag: "Grading",
    title: "Progression",
    text: "Clear belt progression with structured assessments for every student.",
    tone: "program-sakura",
  },
] as const;

const programTone = [
  "program-sakura",
  "program-indigo",
  "program-violet",
  "program-aqua",
  "program-sakura",
] as const;

export function Home() {
  return (
    <>
      <section className="hero" id="top" aria-label="Welcome">
        <div className="hero-bg" aria-hidden="true">
          <img
            className="hero-photo"
            src="/images/hero-kata.png"
            alt="Shito-ryu karate kata stance"
            width={1600}
            height={900}
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-brand">
            Indo Japan Shito Ryu Karate Do
            <span>India · IJSRKDI</span>
          </h1>
          <p className="hero-headline">
            A Japanese martial path, taught with care in India.
          </p>
          <p className="hero-lead">
            Traditional Shito-ryu for children and adults in Coimbatore, Kotagiri,
            and Mettupalayam — affiliated with the Singapore Shitoryu Association.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollToSection("locations")}
            >
              Visit a dojo
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => scrollToSection("programs")}
            >
              View programs
            </button>
          </div>
        </div>
        <button
          type="button"
          className="hero-scroll"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to about"
        >
          <span className="hero-scroll-line" />
          Scroll
        </button>
      </section>

      <section className="section section-sky section-anchor" id="about">
        <div className="container strip strip-compact">
          <div className="reveal">
            <span className="section-label">About</span>
            <h2 className="section-title">Shito-ryu, taught with care</h2>
            <p className="section-lead">
              Indo Japan Shito Ryu Karate Do · India teaches classical Japanese
              Shito-ryu for kids and adults — kata, kihon, and kumite with respect,
              discipline, and fair grading.
            </p>
            <p className="section-lead" style={{ marginTop: "1rem" }}>
              Affiliated with the Singapore Shitoryu Association, our dojos in
              Coimbatore, Kotagiri, and Mettupalayam welcome every sincere student
              and family.
            </p>
            <ul className="founder-list" style={{ marginTop: "1.35rem" }}>
              <li>Authentic Shito-ryu tradition and structured grading</li>
              <li>Programs for children and adults at every level</li>
              <li>Three dojos across Tamil Nadu</li>
              <li>Special classes, tournaments, belt tests, and camps</li>
            </ul>
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

      <section className="section section-chief section-anchor" id="chief">
        <div className="container">
          <header className="chief-header reveal">
            <p className="chief-founder-label">Our Founder</p>
            <h2 className="chief-heading">Chief Instructor</h2>
            <span className="chief-heading-rule" aria-hidden="true" />
          </header>

          <div className="chief-panel reveal reveal-delay-1">
            <figure className="chief-photo">
              <div className="chief-photo-frame">
                <img
                  src={founder.photo}
                  alt={`${founder.name} — ${founder.title}`}
                  width={900}
                  height={1080}
                  loading="lazy"
                />
                <figcaption className="chief-photo-caption">
                  <strong>{founder.name}</strong>
                  <span>{founder.title}</span>
                </figcaption>
              </div>
            </figure>

            <div className="chief-copy">
              <p className="chief-role">{founder.rank}</p>
              <p className="chief-bio">{founder.summary}</p>
              <ul className="founder-list chief-list">
                {founder.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="chief-achievements">
                <span className="program-tag">Commitment</span>
                <ul className="founder-list">
                  {founder.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="chief-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => scrollToSection("instructors")}
                >
                  Meet the team
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft section-anchor" id="programs">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Programs</span>
            <h2 className="section-title">Training for every path</h2>
            <p className="section-lead">
              Special classes, tournaments, belt tests, fitness, and summer camps —
              plus kids and adults karate. Scroll sideways to see all.
            </p>
          </div>
        </div>
        <div className="reveal reveal-rail">
          <HorizontalRail label="Programs · auto-scroll · hover to pause">
            {programsExtra.map((item, i) => (
              <article
                key={item.id}
                className={`program program-plain h-card ${programTone[i % programTone.length]}`}
              >
                <span className="program-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
            <article className="program program-sakura h-card h-card-media">
              <img
                className="program-media"
                src="/images/program-kids.png"
                alt="Kids karate"
                width={640}
                height={400}
                loading="lazy"
              />
              <div className="program-body">
                <span className="program-tag">Youth</span>
                <h3>Kids karate</h3>
                <p>
                  Confidence and character through age-appropriate Shito-ryu in a
                  safe environment.
                </p>
              </div>
            </article>
            <article className="program program-aqua h-card h-card-media">
              <img
                className="program-media"
                src="/images/program-adults.png"
                alt="Adults karate"
                width={640}
                height={400}
                loading="lazy"
              />
              <div className="program-body">
                <span className="program-tag">All levels</span>
                <h3>Adults karate</h3>
                <p>
                  Focused technique and fitness — beginners to advanced practice.
                </p>
              </div>
            </article>
            <article className="h-card h-card-banner">
              <img
                src="/images/kata-forms.png"
                alt="Kata forms sequence"
                width={800}
                height={450}
                loading="lazy"
              />
              <div className="h-card-banner-text">
                <span className="program-tag">Kata · Kihon · Kumite</span>
                <h3>Traditional forms, living practice</h3>
              </div>
            </article>
            {pillars.map((item) => (
              <article
                key={item.tag}
                className={`program program-plain h-card ${item.tone}`}
              >
                <span className="program-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </HorizontalRail>
        </div>
      </section>

      <section className="section section-sky section-anchor" id="instructors">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Instructors</span>
            <h2 className="section-title">Chief instructor & teaching team</h2>
            <p className="section-lead">
              Meet the team across Coimbatore, Kotagiri, and Mettupalayam. Real
              names and photos can replace these anytime.
            </p>
          </div>
        </div>
        <div className="reveal reveal-rail">
          <HorizontalRail label="Instructors · auto-scroll · hover to pause">
            {instructors.map((person) => (
              <article
                key={person.id}
                className={`instructor-card h-card h-card-instructor${
                  person.id === "chief" ? " h-card-chief" : ""
                }`}
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  width={480}
                  height={480}
                  loading="lazy"
                />
                <div className="instructor-body">
                  {person.id === "chief" && (
                    <span className="program-tag">Chief</span>
                  )}
                  <h3>{person.name}</h3>
                  <p className="instructor-role">{person.role}</p>
                  <p className="instructor-meta">
                    {person.focus} · {person.location}
                  </p>
                </div>
              </article>
            ))}
          </HorizontalRail>
        </div>
      </section>

      <section className="section section-anchor" id="achievements">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Achievements</span>
            <h2 className="section-title">Milestones & recognition</h2>
            <p className="section-lead">
              Affiliation, dojos, grading, and competition highlights.
            </p>
          </div>
          <div className="stats-grid reveal" style={{ marginTop: "1.75rem" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal reveal-rail" style={{ marginTop: "1.5rem" }}>
          <HorizontalRail label="Achievements · auto-scroll · hover to pause">
            <article className="h-card h-card-banner">
              <img
                src="/images/achievements-banner.png"
                alt="Dojo achievements"
                width={800}
                height={450}
                loading="lazy"
              />
              <div className="h-card-banner-text">
                <span className="program-tag">Pride of the dojo</span>
                <h3>Effort. Discipline. Excellence.</h3>
              </div>
            </article>
            {achievements.map((item) => (
              <article key={item.id} className="timeline-item h-card">
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </HorizontalRail>
        </div>
      </section>

      <section className="section section-mint section-anchor" id="locations">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Locations</span>
            <h2 className="section-title">Visit a dojo</h2>
            <p className="section-lead">
              Three branches in Tamil Nadu — scroll sideways, then enquire.
            </p>
          </div>
        </div>
        <div className="reveal reveal-rail">
          <HorizontalRail label="Locations · auto-scroll · hover to pause">
            {locations.map((loc) => (
              <button
                key={loc.city}
                type="button"
                className="location-row h-card h-card-location"
                onClick={() => scrollToSection("contact")}
              >
                <span className="location-num">{loc.num}</span>
                <div>
                  <h3>{loc.city}</h3>
                  <p>{loc.note}</p>
                </div>
                <span className="location-link">Enquire →</span>
              </button>
            ))}
          </HorizontalRail>
        </div>
      </section>

      <section className="section section-soft section-anchor" id="contact">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Reach the dojo</h2>
            <p className="section-lead">
              Plan a visit or ask about classes for kids and adults.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-block reveal">
              <h3>Our cities</h3>
              <ul>
                {contactInfo.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
              <p style={{ marginTop: "1rem" }}>{contactInfo.visit}</p>
            </div>
            <div className="contact-block reveal reveal-delay-1">
              <h3>Training hours</h3>
              <p>{contactInfo.hours}</p>
              <p style={{ marginTop: "0.75rem" }}>
                Exact batch timings for each dojo will be listed with your
                schedule.
              </p>
              <div className="contact-note" style={{ marginTop: "1rem" }}>
                {contactInfo.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container reveal">
          <span className="section-label">Begin here</span>
          <h2 className="section-title">Come see a class</h2>
          <p className="section-lead">
            Visit a dojo in Coimbatore, Kotagiri, or Mettupalayam.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => scrollToSection("locations")}
          >
            Find a location
          </button>
        </div>
      </section>
    </>
  );
}
