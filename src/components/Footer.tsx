import { navSections, scrollToSection } from "../lib/scroll";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-mark">IJSRKDI</div>
            <div className="logo-sub">Indo Japan Shito Ryu Karate Do · India</div>
            <p>
              Traditional Shito-ryu karate for kids and adults. Affiliated with
              the Singapore Shitoryu Association.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {year} Indo Japan Shito Ryu Karate Do · India</span>
          <span>Coimbatore · Kotagiri · Mettupalayam</span>
        </div>
      </div>
    </footer>
  );
}
