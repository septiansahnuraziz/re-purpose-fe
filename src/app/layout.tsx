import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RePurpose.ai — Sulap 1 Tulisan Jadi 15+ Konten Medsos Siap Tayang",
  description:
    "Alat bantu AI cerdas buat kreator, founder, dan marketer untuk mengubah artikel panjang menjadi thread Twitter/X, postingan LinkedIn, dan naskah video pendek (TikTok/Reels).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background font-body-md text-on-surface antialiased selection:bg-indigo-100 selection:text-indigo-900 min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
