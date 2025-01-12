import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {montserrat} from "@/lib/fonts";
import {Header} from "@/components/header";
import {ThemeToggle} from "@/components/theme-toggle";
import React from "react";
import {Footer} from "@/components/footer";

export const metadata: Metadata = {
  title: "Team Lino",
  description: "Online Coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased`}
      >
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
          >
              <Header/>
              <main> {children} </main>
              <Footer/>
          </ThemeProvider>
      </body>
    </html>
  );
}
