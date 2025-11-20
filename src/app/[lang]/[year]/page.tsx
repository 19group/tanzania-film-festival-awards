// Path: src/app/[lang]/[year]/page.tsx
// Year Landing Page using centralized route config
// Displays year overview + entry points into Festival, Program, Awards, About

import Link from "next/link";
import { generateLangYearParams } from "@/config/routes";

export default function YearLandingPage({
  params,
}: {
  params: { lang: string; year: string };
}) {
  const { lang, year } = params;

  const t = (en: string, sw: string) => (lang === "sw" ? sw : en);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* HEADER */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">
          {t(
            `TAFFA ${year} Edition`,
            `Toleo la TAFFA ${year}`
          )}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t(
            "Explore the festival, program schedule, awards, and official information for this year's edition.",
            "Gundua tamasha, ratiba ya programu, tuzo na taarifa muhimu za toleo hili la mwaka." 
          )}
        </p>
      </header>

      {/* GRID NAVIGATION */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link
          href={`/${lang}/${year}/festival`}
          className="p-6 border rounded-xl shadow-sm hover:shadow-md transition block text-center"
        >
          <h3 className="text-xl font-semibold mb-2">
            {t("Festival", "Tamasha")}
          </h3>
          <p className="text-gray-600 text-sm">
            {t("Screenings, workshops, panels, exhibitions.", "Maonyesho, warsha, mijadala, maonesho.")}
          </p>
        </Link>

        <Link
          href={`/${lang}/${year}/program`}
          className="p-6 border rounded-xl shadow-sm hover:shadow-md transition block text-center"
        >
          <h3 className="text-xl font-semibold mb-2">
            {t("Program", "Ratiba")}
          </h3>
          <p className="text-gray-600 text-sm">
            {t("Daily program & event schedule.", "Ratiba ya kila siku na matukio.")}
          </p>
        </Link>

        <Link
          href={`/${lang}/${year}/awards`}
          className="p-6 border rounded-xl shadow-sm hover:shadow-md transition block text-center"
        >
          <h3 className="text-xl font-semibold mb-2">
            {t("Awards", "Tuzo")}
          </h3>
          <p className="text-gray-600 text-sm">
            {t("Award categories and nominees.", "Vipengele vya tuzo na walioteuliwa.")}
          </p>
        </Link>

        <Link
          href={`/${lang}/${year}/about`}
          className="p-6 border rounded-xl shadow-sm hover:shadow-md transition block text-center"
        >
          <h3 className="text-xl font-semibold mb-2">
            {t("About", "Kuhusu")}
          </h3>
          <p className="text-gray-600 text-sm">
            {t("About TAFFA and this year's theme.", "Kuhusu TAFFA na dhima ya mwaka huu.")}
          </p>
        </Link>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return generateLangYearParams();
}