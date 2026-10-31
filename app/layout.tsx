import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrityuuu — 3D Reactive Jumping Spider & Verlet Silk Web",
  description: "3D Reactive Jumping Spider with Salticidae IK, Verlet Silk Web Physics, and Interactive Surface Environment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative w-screen h-screen overflow-hidden select-none bg-[#8B0000] text-white">
        {children}
      </body>
    </html>
  );
}
