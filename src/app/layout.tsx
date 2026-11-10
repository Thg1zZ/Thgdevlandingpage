import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LGPDBanner } from "../components/ui/LGPDBanner";
import { PrivacyModal } from "../components/ui/PrivacyModal";
import { LanguageThemeProvider } from "../context/LanguageThemeContext";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thg1zz.github.io"),
  title: "Thiago Gomes | Desenvolvedor Full-Stack",
  description:
    "Portfólio de Thiago Gomes, Desenvolvedor Full-Stack e estudante de Ciência da Computação: Next.js, React, TypeScript, Node.js, PostgreSQL, Java e integrações com IA.",
  authors: [{ name: "Thiago Gomes" }],
  keywords: ["Desenvolvedor Full-Stack", "Full-Stack Developer", "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Java", "Spring Boot", "IA"],
  openGraph: {
    type: "website",
    url: "https://thg1zz.github.io/landingpage/",
    title: "Thiago Gomes | Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full-Stack com experiência em sites, e-commerce, automações e integrações com APIs e IA usando Next.js, React, TypeScript e Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Gomes | Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full-Stack com experiência em sites, e-commerce, automações e integrações com APIs e IA usando Next.js, React, TypeScript e Node.js.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable}`}>
      <body className="antialiased relative min-h-screen">
        <div aria-hidden="true" className="aurora-background fixed inset-0 z-[-1] pointer-events-none select-none" />

        <LanguageThemeProvider>
          {children}
          <LGPDBanner />
          <PrivacyModal />
        </LanguageThemeProvider>
      </body>
    </html>
  );
}
