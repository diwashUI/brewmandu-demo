import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-cream-dark/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row">
        <Link href="/" className="font-display text-lg font-black text-espresso">
          {site.name} <span className="text-caramel">{site.suffix}</span>
        </Link>
        <nav className="flex gap-6 font-medium">
          <Link href="/story" className="transition hover:text-caramel">Story</Link>
          <Link href="/menu" className="transition hover:text-caramel">Menu</Link>
          <Link href="/visit" className="transition hover:text-caramel">Visit</Link>
        </nav>
        <span>Roasted with care in Kathmandu · Est. {site.est}</span>
      </div>
    </footer>
  );
}
