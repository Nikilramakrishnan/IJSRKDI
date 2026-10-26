/** Prefix public assets with Vite base (needed for GitHub Pages /IJSRKDI/). */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}
