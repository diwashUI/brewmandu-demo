import Link from "next/link";
import { site } from "@/lib/site";
import Logo from "./Logo";

const INSTAGRAM_URL = "https://instagram.com/its_aurevya";
const GITHUB_URL = "https://github.com/diwashUI";
const EMAIL = "itsaurevya@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-cream-dark/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="font-display text-lg font-black text-espresso">
              {site.name} <span className="text-caramel">{site.suffix}</span>
            </span>
          </Link>
          <nav className="flex gap-6 font-medium">
            <Link href="/story" className="transition hover:text-caramel">Story</Link>
            <Link href="/menu" className="transition hover:text-caramel">Menu</Link>
            <Link href="/visit" className="transition hover:text-caramel">Visit</Link>
          </nav>
          <span>Roasted with care in Kathmandu · Est. {site.est}</span>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-espresso/10 pt-6 text-xs text-muted sm:flex-row">
          <span>
            Demo website crafted by <span className="font-semibold text-espresso">Sahayak Studio</span> — smart
            websites for local businesses.
          </span>
          <div className="flex items-center gap-5 font-medium">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-caramel">
              Instagram
            </a>
            <a href={`mailto:${EMAIL}`} className="transition hover:text-caramel">
              Email
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-caramel">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
