import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import React from "react";
import "./globals.css";


const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "jay.platform — Distributed systems for 0→1 startups",
  description:
      "Plug-and-play backend platform. Scaleable, observable, resilient infrastructure exercised under real load.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en"
          className={`${syne.variable} ${dmSans.variable}`}>
        <body className="min-h-screen antialiased">
          <div className="grid-bg" />
          <div className="accent-blob" />
          {children}
        </body>
      </html>
  );
}
