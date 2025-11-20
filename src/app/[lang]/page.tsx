// Path: src/app/[lang]/page.tsx
import { homeContent } from "@/lib/content/home";
// import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// server component: receives params from Next at request time (no generateStaticParams)
export default function LangHome({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const year = "2025"; // can be dynamic later

  const t = (obj: any) => (typeof obj === "string" ? obj : obj?.[lang] || obj?.en);

  const hero = homeContent.hero;
  const cards = homeContent.highlightCards;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {t(hero.title)}
            </h1>
            <p className="text-lg text-gray-700 mb-6">{t(hero.subtitle)}</p>

            <Link
              href={`/${lang}/${year}`}
              className="inline-block px-6 py-3 rounded-md font-semibold"
              style={{ background: "var(--color-primary)" }}
            >
              {t(hero.cta)}
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={hero.image} alt="TAFFA Hero" className="w-full h-80 object-cover" width={500} height={320} />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <article key={c.id} className="border p-6 rounded-lg shadow-sm">
              <div className="h-40 mb-4 overflow-hidden rounded-md">
                <img src={c.icon} alt={t(c.title)} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(c.title)}</h3>
              <p className="text-gray-600 mb-4">{t(c.desc)}</p>
              <Link href={c.href.replace("{lang}", lang).replace("{year}", year)} className="text-primary font-medium">
                {lang === "sw" ? "Soma Zaidi" : "Learn more"} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Short About */}

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{lang === "sw" ? "Kuhusu TAFFA" : "About TAFFA"}</h2>
          <p className="text-gray-700">{homeContent.hero.subtitle.en}</p>
        </div>
      </section>
    </div>
  );
}
