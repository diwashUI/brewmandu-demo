"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/visit", label: "Visit" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-espresso/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-9 w-9" />
          <span className="font-display text-2xl font-black tracking-tight text-espresso">
            {site.name}
            <span className="ml-2 text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
              {site.suffix}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-espresso/70 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition hover:text-caramel ${
                pathname === l.href ? "text-caramel" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={whatsappLink(`Hi ${site.name}! I'd like to place an order.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-caramel-dark"
        >
          Order on WhatsApp
        </a>
      </div>
      {/* Mobile nav */}
      <nav className="flex items-center justify-center gap-6 border-t border-espresso/10 px-6 py-2.5 text-sm font-medium text-espresso/70 sm:hidden">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`transition hover:text-caramel ${
              pathname === l.href ? "text-caramel" : ""
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
