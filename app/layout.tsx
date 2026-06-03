import type { Metadata } from "next";
import "./globals.css";
import Terminal from "@/components/Terminal";

export const metadata: Metadata = {
  title: "David Ettel",
  description: "Personal website of David Ettel - Software Engineer",
};

/**
 * ARCHITECTURE NOTE:
 * This layout renders ONLY the Terminal component for all routes.
 * The {children} prop is intentionally not used - the Terminal handles all content.
 * All page content is managed in /components/Terminal.tsx in the PAGES object.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}>
        <Terminal />
        {/* children is intentionally not rendered - Terminal serves all content */}
      </body>
    </html>
  );
}
