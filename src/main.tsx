import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App.tsx'
import './index.css'
import Layout from './layouts/PageLayout.tsx';
import Projects from './pages/projects/Projects.tsx';
import About from './pages/about/About.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import CustodianProject from "./pages/projects/CustodianProject.tsx";
import WhistleblowerProject from "./pages/projects/WhistleblowerProject.tsx";
import { GamifiedRespiratoryExercisesProject } from "./pages/projects/GamifiedRespiratoryExercisesProject.tsx";
import Babbelbord from "./pages/projects/Babbelbord.tsx";
import { GenericErrorBoundary } from './components/GenericErrorBoundary.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <GenericErrorBoundary />,
        children: [
          {
            index: true,
            element: <App />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "projects/custodian",
            element: <CustodianProject />,
          },
          {
            path: "projects/whistleblower",
            element: <WhistleblowerProject />,
          },
          {
            path: "projects/gamified-respiratory-exercises",
            element: <GamifiedRespiratoryExercisesProject />,
          },
          {
            path: "projects/babbelbord",
            element: <Babbelbord />,
          },
          {
            path: "*",
            element: <GenericErrorBoundary />,
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
