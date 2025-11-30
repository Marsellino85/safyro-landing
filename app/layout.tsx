import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safyro - Where Precision Meets Freedom",
  description: "Hybrid PM platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
