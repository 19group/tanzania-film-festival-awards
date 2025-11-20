// Path: src/lib/content/home.ts
export const homeContent = {
  hero: {
    title: {
      en: "Tanzania Film Festival & Awards",
      sw: "Tamasha la Filamu Tanzania & Tuzo",
    },
    subtitle: {
      en: "A national platform celebrating Tanzanian cinema — screenings, workshops, and awards.",
      sw: "Jukwaa la kitaifa la kuadhimisha filamu za Kitanzania — maonyesho, warsha na tuzo.",
    },
    cta: { en: "Explore 2025 Edition", sw: "Gundua Toleo la 2025" },
    image: "/images/hero/about-hero.jpg"
  },

  highlightCards: [
    {
      id: "festival",
      title: { en: "Festival", sw: "Tamasha" },
      desc: {
        en: "Screenings, workshops, panels and discussions that celebrate storytelling.",
        sw: "Maonyesho, warsha, mijadala na mijadala inayoadhimisha uandishi wa hadithi.",
      },
      icon: "/images/hero/festival-card.jpg",
      href: "/{lang}/{year}/festival"
    },
    {
      id: "program",
      title: { en: "Program", sw: "Ratiba" },
      desc: {
        en: "Official schedule of screenings and events across the festival days.",
        sw: "Ratiba rasmi ya maonyesho na matukio kwa siku za tamasha.",
      },
      icon: "/images/hero/program-card.jpg",
      href: "/{lang}/{year}/program"
    },
    {
      id: "awards",
      title: { en: "Awards", sw: "Tuzo" },
      desc: {
        en: "Recognising excellence in Tanzanian and African cinema.",
        sw: "Kutoa heshima kwa ubora katika filamu za Kitanzania na Afrika.",
      },
      icon: "/images/hero/awards-card.jpg",
      href: "/{lang}/{year}/awards"
    }
  ]
};
