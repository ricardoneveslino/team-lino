import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { montserrat } from "@/lib/fonts";
import { Header } from "@/components/header";
import React from "react";
import { Footer } from "@/components/footer";
import ScrollObserver from "@/components/scroll-observer";
import ScrollLinked from "@/components/scroll-linked";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"; // Importando o SpeedInsights

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
      <body className={`${montserrat.variable} antialiased`}>
        <ScrollLinked />
        <ScrollObserver />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights /> {/* Adicionando o SpeedInsights aqui */}
        <Analytics />
      </body>
    </html>
  );
}
