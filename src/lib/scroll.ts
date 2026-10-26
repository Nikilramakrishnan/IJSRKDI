const HEADER_OFFSET = 80;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
}

export const navSections = [
  { id: "about", label: "About" },
  { id: "chief", label: "Chief" },
  { id: "programs", label: "Programs" },
  { id: "instructors", label: "Instructors" },
  { id: "achievements", label: "Achievements" },
  { id: "locations", label: "Locations" },
  { id: "contact", label: "Contact" },
] as const;
