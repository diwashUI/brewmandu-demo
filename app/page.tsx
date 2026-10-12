import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#120b06] text-[#f3e9d7] antialiased">
      {/* ── NAV ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#120b06]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-2xl font-black tracking-tight">
            {site.name}
            <span className="ml-2 text-sm font-normal uppercase tracking-[0.3em] text-amber-500/90">
              {site.suffix}
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-stone-300 sm:flex">
            <a href="#menu" className="transition hover:text-amber-400">Menu</a>
            <a href="#story" className="transition hover:text-amber-400">Story</a>
            <a href="#visit" className="transition hover:text-amber-400">Visit</a>
          </nav>
          <a
            href={whatsappLink(`Hi ${site.name}! I'd like to place an order.`)}
            target="_blank"
            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-amber-400"
          >
            Order on WhatsApp
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="top" className="relative flex min-h-[92vh] items-end">
        <Image
          src="/hero.jpg"
          alt="Cup of coffee with latte art"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120b06] via-[#120b06]/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-400">
            Est. {site.est} · Kathmandu
          </p>
          <h1 className="max-w-2xl font-serif text-5xl font-black leading-[1.05] sm:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-stone-300">{site.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-amber-500 px-7 py-3.5 font-bold text-black transition hover:bg-amber-400"
            >
              See the menu
            </a>
            <a
              href="#visit"
              className="rounded-full border border-stone-500 px-7 py-3.5 font-semibold text-stone-200 transition hover:border-amber-400 hover:text-amber-300"
            >
              Find us
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/10 bg-[#1a1009]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
          {site.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl font-black text-amber-400">{s.value}</div>
              <div className="mt-2 text-sm text-stone-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src="/craft.jpg" alt="Barista pouring latte art" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-500">Our story</p>
            <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">{site.story.heading}</h2>
            {site.story.body.map((p, i) => (
              <p key={i} className="mt-5 leading-relaxed text-stone-300">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="bg-[#1a1009] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-amber-500">Menu</p>
          <h2 className="mt-3 text-center font-serif text-4xl font-black sm:text-5xl">
            Poured to perfection
          </h2>
          <div className="mt-12 divide-y divide-white/10">
            {site.menu.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-6 py-5">
                <div>
                  <div className="text-xl font-bold">{item.name}</div>
                  <div className="mt-1 text-sm text-stone-400">{item.desc}</div>
                </div>
                <div className="shrink-0 font-serif text-xl font-bold text-amber-400">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-stone-500">
            Oat milk +Rs 40 · Extra shot +Rs 60
          </p>
        </div>
      </section>

      {/* ── VISIT ── */}
      <section id="visit" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-amber-500">Visit us</p>
        <h2 className="mt-3 text-center font-serif text-4xl font-black sm:text-5xl">
          Come say hi
        </h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#1a1009] p-8">
            <h3 className="font-serif text-2xl font-bold">📍 Find us</h3>
            <p className="mt-3 text-stone-300">{site.address}</p>
            <p className="mt-4 text-stone-300">{site.phoneDisplay}</p>
            <p className="mt-1 text-stone-400">{site.instagram}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#1a1009] p-8">
            <h3 className="font-serif text-2xl font-bold">🕖 Hours</h3>
            {site.hours.map((h) => (
              <div key={h.days} className="mt-3 flex justify-between text-stone-300">
                <span>{h.days}</span>
                <span className="font-semibold text-amber-300">{h.time}</span>
              </div>
            ))}
            <a
              href={whatsappLink(`Hi ${site.name}! I'd like to order a takeaway.`)}
              target="_blank"
              className="mt-6 block rounded-full bg-amber-500 py-3 text-center font-bold text-black transition hover:bg-amber-400"
            >
              Order takeaway on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-stone-500 sm:flex-row">
          <span className="font-serif text-lg font-black text-stone-300">
            {site.name} <span className="text-amber-500">{site.suffix}</span>
          </span>
          <span>Roasted with care in Kathmandu · Est. {site.est}</span>
        </div>
      </footer>
    </div>
  );
}
