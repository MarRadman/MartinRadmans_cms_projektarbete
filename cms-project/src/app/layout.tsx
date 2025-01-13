"use client";
/* eslint-disable */

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Header from "./header";
import Footer from "./footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Headless CMS Project" />
        <meta name="keywords" content="CMS, NEXT.TS, Contentful" />
        <meta name="author" content="Martin" />
        <meta property="description" content="CMS Project" />
        <link rel="canonical" href="https://github.com/MarRadman" />
        <title>Simple is Key</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
