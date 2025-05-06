import './index.css'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { ThemeProvider } from "./context/ThemeContext";

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          href="images/logo-dark.png"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="images/logo-light.png"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alessandro Capra - Frontend Engineer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload"
          href="https://fonts.gstatic.com/s/worksans/v18/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous" />
        <link rel="canonical" href="https://alessandrocapra.me/" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (<ThemeProvider>
    <Outlet />
  </ThemeProvider>)
}

