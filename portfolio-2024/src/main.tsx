import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route } from "react-router";
import App from "./App.tsx";
import { Routes } from "react-router";
import About from "./pages/about/About.tsx";
import Projects from "./pages/projects/Projects.tsx";
import Layout from "./layouts/PageLayout.tsx";
import Project from "./pages/projects/Project.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<App />} />
          <Route path="about" element={<About />} />

          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":project" element={<Project />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
