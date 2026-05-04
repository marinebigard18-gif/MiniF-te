import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MiniFête - Anniversaires d'enfants sans charge mentale",
  description: "Organisez un anniversaire d'enfant avec kits, prestataires vérifiés et agent IA personnalisé.",
  keywords: "anniversaire, enfant, organisation, fête, prestataires",
  authors: [{ name: "MiniFête" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f43f5e" />
      </head>
      <body>
        <Header />
        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
