import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves from https://<user>.github.io/IJSRKDI/
const base = process.env.GITHUB_ACTIONS ? "/IJSRKDI/" : "/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
});
