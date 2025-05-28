import './index.css'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { ThemeProvider } from "./context/ThemeContext";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          href="/images/logo-dark.png"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/images/logo-light.png"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload"
          href="https://fonts.gstatic.com/s/worksans/v18/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
