import { site, whatsappLink, mapsLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Visit() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-caramel">
          Visit us
        </p>
        <h1 className="mt-4 text-center font-display text-5xl font-black sm:text-6xl">
          Come say hi
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-muted">
          We're the cozy corner on {site.address.split(",")[0]} — look for the
          smell of fresh roast. {site.founder.name} is usually behind the bar.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[2rem] border border-espresso/10 bg-white/60 p-8 shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-bold">Find us</h2>
            <p className="mt-4 leading-relaxed text-espresso/80">{site.address}</p>
            <a
              href={mapsLink(site.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-caramel underline-offset-4 hover:underline"
            >
              Open in Google Maps →
            </a>
            <div className="mt-6 border-t border-espresso/10 pt-6 text-sm">
              <p className="font-semibold">{site.phoneDisplay}</p>
              <p className="mt-1 text-muted">{site.instagram}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full rounded-[2rem] border border-espresso/10 bg-white/60 p-8 shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-bold">Hours</h2>
            {site.hours.map((h) => (
              <div key={h.days} className="mt-4 flex justify-between text-espresso/80">
                <span>{h.days}</span>
                <span className="font-semibold text-caramel-dark">{h.time}</span>
              </div>
            ))}
            <a
              href={whatsappLink(`Hi ${site.name}! I'd like to order a takeaway.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-full bg-espresso py-3.5 text-center font-semibold text-cream transition hover:bg-caramel-dark"
            >
              Order takeaway on WhatsApp
            </a>
            <p className="mt-4 text-center text-xs text-muted">
              Send us your order — we'll have it ready when you arrive.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] bg-caramel-soft p-8 text-center sm:p-10">
          <p className="font-display text-xl font-medium italic leading-relaxed text-espresso/90">
            “First visit? Tell the counter {site.founder.name} sent you —
            coffee's on us.”
          </p>
        </div>
      </Reveal>
    </div>
  );
}
