// Path: src/app/[lang]/page.tsx
import { homeContent } from "@/lib/content/home";
// import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import TimelineSection from "@/components/ui/TimelineSection";
import PartnersSection from "@/components/ui/PartnersSection";

export default function LangHome({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const year = "2025"; 

  const t = (obj: any) => (typeof obj === "string" ? obj : obj?.[lang] || obj?.en);

  const hero = homeContent.hero;
  const cards = homeContent.highlightCards;

  return (
    <div className="min-h-screen">
      {/* Hero */}
    <HeroSection
      currentLang={lang}
      />  

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

      <AboutSection currentLang={lang} />
      <TimelineSection currentLang={lang} />
      <PartnersSection currentLang={lang} />
    </div>
  );
}
