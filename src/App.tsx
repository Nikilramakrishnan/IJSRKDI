import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Navigate to="/#about" replace />} />
          <Route path="chief" element={<Navigate to="/#chief" replace />} />
          <Route path="programs" element={<Navigate to="/#programs" replace />} />
          <Route
            path="instructors"
            element={<Navigate to="/#instructors" replace />}
          />
          <Route
            path="achievements"
            element={<Navigate to="/#achievements" replace />}
          />
          <Route
            path="locations"
            element={<Navigate to="/#locations" replace />}
          />
          <Route path="contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
