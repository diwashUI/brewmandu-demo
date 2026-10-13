import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Story() {
  return (
    <div>
      {/* ── INTRO ── */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-16 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-caramel">
            Our story
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl">
            {site.story.heading}
          </h1>
        </Reveal>
      </section>

      {/* ── FOUNDER ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={site.founder.photo}
                alt={`${site.founder.name}, ${site.founder.role}`}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-caramel">
                Meet {site.founder.name}
              </p>
              <h2 className="mt-3 font-display text-4xl font-black">
                {site.founder.role}
              </h2>
            </Reveal>
            {site.founder.story.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="mt-5 leading-relaxed text-espresso/80">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <blockquote className="mt-8 border-l-4 border-caramel bg-caramel-soft p-6 font-display text-xl font-medium italic leading-relaxed">
                “{site.founder.quote}”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CRAFT ── */}
      <section className="bg-cream-dark/70 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              {site.story.body.map((p, i) => (
                <Reveal key={i} delay={i * 100}>
                  <p className="mt-5 leading-relaxed text-espresso/80 first:mt-0">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={150}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/menu"
                    className="rounded-full bg-espresso px-7 py-3 font-semibold text-cream transition hover:bg-caramel-dark"
                  >
                    Taste the menu
                  </Link>
                  <Link
                    href="/visit"
                    className="rounded-full border border-espresso/20 px-7 py-3 font-semibold text-espresso transition hover:border-caramel hover:text-caramel"
                  >
                    Come visit
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal className="order-1 md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src="/craft.jpg"
                  alt="Barista pouring latte art"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="rounded-3xl border border-espresso/10 bg-cream p-8 text-center shadow-sm">
                <div className="font-display text-4xl font-black text-caramel">{s.value}</div>
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
