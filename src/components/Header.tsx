import { useEffect, useState } from "react";
import { navSections, scrollToSection } from "../lib/scroll";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const marker = window.scrollY + 120;
      let current = "";
      for (const section of navSections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.offsetTop <= marker) current = section.id;
      }
      setActive(window.scrollY < 180 ? "" : current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.classList.remove("nav-open");
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  const go = (id: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToSection(id), 280);
  };

  const goTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
    setActive("");
  };

  const links = (
    <>
      {navSections.map((section, i) => (
        <button
          key={section.id}
          type="button"
          className={active === section.id ? "active" : undefined}
          style={{ ["--i" as string]: i }}
          onClick={() => go(section.id)}
        >
          <span className="nav-index">{String(i + 1).padStart(2, "0")}</span>
          <span className="nav-label">{section.label}</span>
        </button>
      ))}
    </>
  );

  return (
    <header className={`header${scrolled || open ? " is-scrolled" : ""}${open ? " is-menu-open" : ""}`}>
      <div className="header-inner">
        <button type="button" className="logo" onClick={goTop} aria-label="IJSRKDI home">
          <span className="logo-mark">IJSRKDI</span>
          <span className="logo-sub">Shito-ryu · India</span>
        </button>

        <nav className="nav-desktop" aria-label="Main">
          {navSections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={active === section.id ? "active" : undefined}
              onClick={() => go(section.id)}
            >
              {section.label}
            </button>
          ))}
          <button type="button" className="nav-cta" onClick={() => go("locations")}>
            Visit a dojo
          </button>
        </nav>

        <button
          type="button"
          className={`menu-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <button
        type="button"
        className={`nav-backdrop${open ? " is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={close}
      />

      <aside
        id="mobile-nav"
        className={`nav-drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="nav-drawer-head">
          <div>
            <p className="nav-drawer-kicker">Menu</p>
            <p className="nav-drawer-title">Explore IJSRKDI</p>
          </div>
          <button type="button" className="nav-drawer-close" onClick={close} aria-label="Close">
            ✕
          </button>
        </div>

        <nav className="nav-drawer-links" aria-label="Mobile">
          {links}
        </nav>

        <div className="nav-drawer-foot">
          <button type="button" className="btn btn-primary nav-drawer-cta" onClick={() => go("locations")}>
            Visit a dojo
          </button>
          <button type="button" className="btn btn-ghost nav-drawer-cta" onClick={() => go("contact")}>
            Contact
          </button>
          <p className="nav-drawer-meta">Coimbatore · Kotagiri · Mettupalayam</p>
        </div>
      </aside>
    </header>
  );
}
