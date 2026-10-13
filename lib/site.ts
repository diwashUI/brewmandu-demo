// ── THE ONLY FILE A CLIENT RE-SKIN TOUCHES ─────────────────────────────
// Everything on the site reads from here: name, menu, prices, hours,
// address, phone, and the personal story. New client? Edit this file,
// redeploy, done.

export const site = {
  name: "Brewmandu",
  suffix: "Coffee Co.",
  tagline: "Coffee worth slowing down for.",
  heroSub:
    "Small-batch Himalayan arabica, roasted in Kathmandu and poured with obsession. Come taste the mountains in a cup.",
  est: "2019",

  founder: {
    name: "Aashish",
    role: "Founder & head roaster",
    photo: "/founder.jpg",
    quote:
      "I roast every Tuesday morning, in small batches, the way my father taught me to pay attention. If your cup tastes like the hills — that's why.",
    story: [
      "I'm Aashish. I started Brewmandu in 2019 with one secondhand roaster, a borrowed espresso machine, and a stubborn belief: Nepal grows world-class coffee, and Kathmandu deserves to taste it at its best.",
      "Every Tuesday I roast the week's beans myself — lots from smallholder farms in Gulmi, Palpa, and Kavre, families I've bought from for years. Nothing sits around. If it's in your cup, it was green and breathing a few days ago.",
      "This place is my living room. Come in, stay too long, bring your laptop or your grandmother. The coffee's on me if it's your first visit — just tell the counter Aashish sent you.",
    ],
  },

  story: {
    heading: "From Himalayan farms to your cup",
    body: [
      "We started Brewmandu with one roaster, a secondhand espresso machine, and a stubborn belief: Nepal grows world-class coffee, and Kathmandu deserves to taste it at its best.",
      "Our beans come from smallholder farms in the mid-hills — Gulmi, Palpa, Kavre — roasted in small batches every week so every cup lands fresh.",
    ],
  },

  stats: [
    { value: "100%", label: "Arabica, single-origin lots" },
    { value: "12+", label: "Partner farms in the mid-hills" },
    { value: "48h", label: "Roast-to-cup, always fresh" },
  ],

  testimonials: [
    {
      quote:
        "I've written half my thesis at the corner table. They know my order before I sit down.",
      name: "Prerana",
      detail: "regular since 2021",
    },
    {
      quote:
        "The spiced latte is the reason my friends visit Thamel. I'm not even joking.",
      name: "Sabin",
      detail: "regular since 2022",
    },
    {
      quote:
        "Aashish remembered my father's name from one visit three years ago. The coffee's great; the people are why you stay.",
      name: "Maya",
      detail: "regular since 2020",
    },
  ],

  menu: [
    { name: "Espresso", desc: "Double shot, syrupy and bold", price: "Rs 180" },
    { name: "Cappuccino", desc: "Classic thirds, dusted with cocoa", price: "Rs 250" },
    { name: "Café Latte", desc: "Silky steamed milk, mellow roast", price: "Rs 280" },
    { name: "Himalayan Spiced Latte", desc: "Our signature — timmur & honey", price: "Rs 340" },
    { name: "Mocha", desc: "Espresso meets dark chocolate", price: "Rs 320" },
    { name: "Cold Brew", desc: "18-hour slow steep, served over ice", price: "Rs 300" },
  ],
  menuNote: "Oat milk +Rs 40 · Extra shot +Rs 60 — just ask, we don't judge.",

  hours: [
    { days: "Sun – Fri", time: "7:00 AM – 9:00 PM" },
    { days: "Saturday", time: "8:00 AM – 9:00 PM" },
  ],
  address: "Chaksibari Marg, Thamel, Kathmandu",
  // Placeholder — swap for the client's real number (country code + number, no +/spaces)
  whatsapp: "9779800000000",
  phoneDisplay: "+977 98-00000000",
  instagram: "@brewmandu.coffee",
};

export const whatsappLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const mapsLink = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
