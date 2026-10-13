import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Menu() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-16">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-caramel">
          Menu
        </p>
        <h1 className="mt-4 text-center font-display text-5xl font-black sm:text-6xl">
          Poured to perfection
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-muted">
          Everything's made to order with beans roasted in-house every Tuesday.
          Prices include all the care we can fit in a cup.
        </p>
      </Reveal>

      <div className="mt-14 divide-y divide-espresso/10 rounded-[2rem] border border-espresso/10 bg-white/60 px-8 shadow-sm sm:px-12">
        {site.menu.map((item, i) => (
          <Reveal key={item.name} delay={Math.min(i, 5) * 60}>
            <div className="group flex items-baseline justify-between gap-6 py-6">
              <div>
                <div className="text-xl font-bold transition group-hover:text-caramel">
                  {item.name}
                </div>
                <div className="mt-1 text-sm text-muted">{item.desc}</div>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <a
                  href={whatsappLink(`Hi ${site.name}! I'd like a ${item.name} (${item.price}) for takeaway.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-espresso/15 px-4 py-1.5 text-xs font-semibold text-espresso/70 opacity-0 transition group-hover:opacity-100 hover:border-caramel hover:text-caramel"
                >
                  Order this
                </a>
                <div className="font-display text-xl font-bold text-caramel">
                  {item.price}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-center text-sm text-muted">{site.menuNote}</p>
        <div className="mt-10 text-center">
          <Link
            href="/visit"
            className="inline-block rounded-full bg-espresso px-8 py-3.5 font-semibold text-cream transition hover:bg-caramel-dark"
          >
            Come taste it in person
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
