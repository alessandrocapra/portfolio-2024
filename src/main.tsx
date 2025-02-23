import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route } from "react-router";
import App from "./App.tsx";
import { Routes } from "react-router";
import About from "./pages/about/About.tsx";
import Projects from "./pages/projects/Projects.tsx";
import Layout from "./layouts/PageLayout.tsx";
import CustodianProject from "./pages/projects/CustodianProject.tsx";
import WhistleblowerProject from "./pages/projects/WhistleblowerProject.tsx";
import { GamifiedRespiratoryExercisesProject } from "./pages/projects/GamifiedRespiratoryExercisesProject.tsx";
import Babbelbord from "./pages/projects/Babbelbord.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<App />} />
          <Route path="about" element={<About />} />

          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path="custodian" element={<CustodianProject />} />
            <Route path="whistleblower" element={<WhistleblowerProject />} />
            <Route path="gamified-respiratory-exercises" element={<GamifiedRespiratoryExercisesProject />} />
            <Route path="babbelbord" element={<Babbelbord />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
