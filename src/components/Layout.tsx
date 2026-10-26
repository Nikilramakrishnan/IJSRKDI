import { useEffect, useRef, type ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { scrollToSection } from "../lib/scroll";

function RevealObserver({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const revealAllNearby = () => {
      root.querySelectorAll(".reveal:not(.is-visible)").forEach((node) => {
        const rect = (node as HTMLElement).getBoundingClientRect();
        const inView =
          rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
        if (inView) node.classList.add("is-visible");
      });
    };

    const nodes = root.querySelectorAll(".reveal:not(.is-visible)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "80px 0px 80px 0px" },
    );

    nodes.forEach((n) => io.observe(n));
    revealAllNearby();

    // Safety: never leave sections permanently blank
    const fallback = window.setTimeout(() => {
      root.querySelectorAll(".reveal:not(.is-visible)").forEach((n) => {
        n.classList.add("is-visible");
      });
    }, 1200);

    window.addEventListener("scroll", revealAllNearby, { passive: true });
    window.addEventListener("resize", revealAllNearby);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener("scroll", revealAllNearby);
      window.removeEventListener("resize", revealAllNearby);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}

export function Layout() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => scrollToSection(id), 80);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <div className="site">
      <Header />
      <main className="site-main">
        <RevealObserver>
          <Outlet />
        </RevealObserver>
      </main>
      <Footer />
    </div>
  );
}
