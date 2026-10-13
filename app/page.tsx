import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink, mapsLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Cup of coffee with latte art"
            fill
            priority
            className="animate-ken-burns object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">
              Est. {site.est} · Thamel, Kathmandu
            </p>
            <h1 className="max-w-2xl font-display text-5xl font-black leading-[1.05] text-cream sm:text-7xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-cream/85">{site.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-cream px-7 py-3.5 font-bold text-espresso shadow-lg transition hover:bg-white"
              >
                See the menu
              </Link>
              <Link
                href="/visit"
                className="rounded-full border border-cream/50 px-7 py-3.5 font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
              >
                Find us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOUNDER NOTE ── */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-caramel">
            From the founder
          </p>
          <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed text-espresso sm:text-3xl">
            “{site.founder.quote}”
          </blockquote>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted">
            {site.founder.name} · {site.founder.role}
          </p>
          <Link
            href="/story"
            className="mt-8 inline-block rounded-full border border-espresso/20 px-7 py-3 text-sm font-semibold text-espresso transition hover:border-caramel hover:text-caramel"
          >
            Read our story
          </Link>
        </Reveal>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-espresso/10 bg-cream-dark/70">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-14 sm:grid-cols-3">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="text-center">
                <div className="font-display text-4xl font-black text-caramel">{s.value}</div>
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── MENU TEASER ── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-caramel">
            Menu
          </p>
          <h2 className="mt-3 text-center font-display text-4xl font-black sm:text-5xl">
            Poured to perfection
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-espresso/10">
          {site.menu.slice(0, 4).map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <div className="flex items-baseline justify-between gap-6 py-5">
                <div>
                  <div className="text-xl font-bold">{item.name}</div>
                  <div className="mt-1 text-sm text-muted">{item.desc}</div>
                </div>
                <div className="shrink-0 font-display text-xl font-bold text-caramel">
                  {item.price}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center">
          <Link
            href="/menu"
            className="mt-10 inline-block rounded-full bg-espresso px-8 py-3.5 font-semibold text-cream transition hover:bg-caramel-dark"
          >
            Full menu
          </Link>
        </Reveal>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-cream-dark/70 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-caramel">
              Regulars
            </p>
            <h2 className="mt-3 text-center font-display text-4xl font-black sm:text-5xl">
              The corner table crowd
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {site.testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="h-full rounded-3xl border border-espresso/10 bg-cream p-8 shadow-sm">
                  <blockquote className="leading-relaxed text-espresso/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-bold">{t.name}</span>
                    <span className="text-muted"> · {t.detail}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT CTA ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-espresso px-8 py-16 text-center text-cream sm:px-16">
            <h2 className="font-display text-4xl font-black sm:text-5xl">
              Come say hi
            </h2>
            <p className="mx-auto mt-4 max-w-md text-cream/75">
              {site.address} · Open {site.hours[0].time.toLowerCase()} most days.
              First visit? Tell the counter {site.founder.name} sent you — coffee's on us.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink(`Hi ${site.name}! I'd like to place an order.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cream px-7 py-3.5 font-bold text-espresso transition hover:bg-white"
              >
                Order on WhatsApp
              </a>
              <a
                href={mapsLink(site.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream/40 px-7 py-3.5 font-semibold text-cream transition hover:bg-cream/10"
              >
                Get directions
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
