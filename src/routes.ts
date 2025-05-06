import type { RouteConfig } from "@react-router/dev/routes"

export default [
  {
    path: "/",
    file: './routes/_layout.tsx',
    children: [
      {
        index: true,
        file: "./routes/index.tsx"
      },
      {
        path: "projects",
        file: "./routes/projects/index.tsx"
      },
      {
        path: "about",
        file: "./routes/about.tsx"
      },
      {
        path: "projects/custodian",
        file: "./routes/projects/custodian.tsx"
      },
      {
        path: "projects/whistleblower",
        file: "./routes/projects/whistleblower.tsx"
      },
      {
        path: "projects/gamified-respiratory-exercises",
        file: "./routes/projects/gamified-respiratory-exercises.tsx"
      },
      {
        path: "projects/babbelbord",
        file: "./routes/projects/babbelbord.tsx"
      }
    ],
  }
] satisfies RouteConfig
