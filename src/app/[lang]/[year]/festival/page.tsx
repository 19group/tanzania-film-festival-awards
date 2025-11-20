// Path: src/app/[lang]/[year]/festival/page.tsx
// Festival Page — Updated to use centralized route config
// Replace placeholder content with real data later

import { generateLangYearParams } from "@/config/routes";
import Image from "next/image";

export default function FestivalPage({
  params,
}: {
  params: { lang: string; year: string };
}) {
  const { lang, year } = params;

  const t = (en: string, sw: string) => (lang === "sw" ? sw : en);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* HERO */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">
          {t(`TAFFA ${year} Festival`, `Tamasha la TAFFA ${year}`)}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t(
            "Explore screenings, workshops, exhibitions and festival activities.",
            "Gundua maonyesho ya filamu, warsha, maonesho na shughuli za tamasha."
          )}
        </p>
      </header>

      {/* FEATURED IMAGE */}
      <div className="w-full mb-16">
        <Image
          src={`/images/festival/${year}-hero.jpg`}
          alt="Festival Hero"
          width={1600}
          height={700}
          className="rounded-xl w-full object-cover shadow-lg"
        />
      </div>

      {/* SECTIONS */}
      <section className="space-y-16">
        {/* Screenings */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t("Screenings", "Maonyesho ya Filamu")}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t(
              "A curated selection of films across genres and regions.",
              "Uteuzi maalum wa filamu kutoka aina mbalimbali na maeneo tofauti."
            )}
          </p>
          <Image
            src={`/images/festival/${year}-screenings.jpg`}
            alt="Festival Screenings"
            width={1200}
            height={700}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Workshops */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t("Workshops", "Warsha")}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t(
              "Hands-on creative and technical workshops delivered by industry experts.",
              "Warsha za kiubunifu na kiufundi zinazoendeshwa na wataalamu wa sekta."
            )}
          </p>
          <Image
            src={`/images/festival/${year}-workshops.jpg`}
            alt="Festival Workshops"
            width={1200}
            height={700}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Panels */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t("Panel Discussions", "Majadiliano ya Paneli")}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t(
              "Insightful discussions with professionals across film, media, and culture.",
              "Majadiliano yenye mtazamo mpana na wataalamu wa filamu, vyombo vya habari na utamaduni."
            )}
          </p>
          <Image
            src={`/images/festival/${year}-panels.jpg`}
            alt="Panel Sessions"
            width={1200}
            height={700}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Exhibitions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t("Exhibitions", "Maonesho")}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t(
              "Creative exhibitions highlighting film innovation and culture.",
              "Maonesho ya ubunifu yanayoangazia ubunifu wa filamu na utamaduni."
            )}
          </p>
          <Image
            src={`/images/festival/${year}-exhibitions.jpg`}
            alt="Festival Exhibitions"
            width={1200}
            height={700}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return generateLangYearParams();
}