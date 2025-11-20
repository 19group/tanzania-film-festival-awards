// Path: src/app/[lang]/[year]/program/page.tsx
// Program Page — Uses centralized route config + static export safe params
// Placeholder content; replace with real program data or API embeds later.

import { generateLangYearParams } from "@/config/routes";
import Image from "next/image";

export default function ProgramPage({
  params,
}: {
  params: { lang: string; year: string };
}) {
  const { lang, year } = params;

  const t = (en: string, sw: string) => (lang === "sw" ? sw : en);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* HEADER */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">
          {t(`TAFFA ${year} Program`, `Ratiba ya TAFFA ${year}`)}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t(
            "Full festival schedule including screenings, workshops, panels and activities.",
            "Ratiba kamili ya tamasha ikijumuisha maonyesho ya filamu, warsha, paneli na shughuli mbalimbali."
          )}
        </p>
      </header>

      {/* PROGRAM EMBED OR IMAGE */}
      <section className="mb-20">
        {/* Replace this with Elfsight or Tukiio embed when ready */}
        <Image
          src={`/images/program/${year}-program.jpg`}
          alt="Program Schedule"
          width={1600}
          height={900}
          className="rounded-xl w-full object-cover shadow-lg"
        />
      </section>

      {/* DAILY SECTIONS PLACEHOLDER */}
      <section className="space-y-16">
        {["Day 1", "Day 2", "Day 3"].map((day, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold mb-4">
              {t(`${day} Schedule`, `Ratiba ya ${day}`)}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t(
                "Schedule details will be updated soon.",
                "Ratiba kamili itasasishwa hivi karibuni." 
              )}
            </p>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              {t("Program Placeholder", "Sehemu ya Ratiba")}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return generateLangYearParams();
}