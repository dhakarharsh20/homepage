import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tempsens — Thermal Engineering Solutions & Specialised Cables Manufacturer",
  description:
    "Tempsens delivers advanced thermal engineering solutions with a range of thermocouples, RTDs, pyrometers, thermal imagers, heating systems, and specialised cables, trusted by 3500+ customers worldwide.",
  openGraph: {
    title: "Thermal Engineering Solutions And Specialised Cables Manufacturer",
    description:
      "Tempsens delivers advanced thermal engineering solutions with a range of thermocouples, RTDs, pyrometers, thermal imagers, heating systems, and specialised cables, trusted by 3500+ customers worldwide.",
    url: "https://tempsens.com/",
    siteName: "Tempsens",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Tempsens",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
