import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AgentChat from "@/components/AgentChat";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: `${site.name} ${site.suffix} — ${site.tagline}`,
  description: site.heroSub,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased ${fraunces.variable}`}>
      <body className="flex min-h-full flex-col bg-cream text-espresso">
        <Nav />
        <main className="flex-1 pt-[112px] sm:pt-[68px]">
          {children}
        </main>
        <Footer />
        <AgentChat />
      </body>
    </html>
  );
}
