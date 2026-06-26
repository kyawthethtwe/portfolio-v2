import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site } from "@/lib/content";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = `${site.name} — ${site.role}`;
const description =
  "Fullstack developer in Bangkok building production systems end to end — PostgreSQL, React / Next.js, AWS, real-time media (Mediasoup), and self-hosted eKYC.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
};

// Apply the saved (or system) theme before first paint — no flash of the wrong
// color scheme. Mirrors the prototype: localStorage['jot-theme'] → system → light.
const themeScript = `(function(){try{var t=localStorage.getItem('jot-theme');if(!t){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
