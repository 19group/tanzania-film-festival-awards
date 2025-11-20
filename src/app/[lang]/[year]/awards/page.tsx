// Path: src/app/[lang]/[year]/awards/page.tsx
// Awards Listing Page – Uses centralized route config + awards data per year

import Link from "next/link";
import Image from "next/image";
import { generateLangYearParams } from "@/config/routes";
import { getYearData } from "@/lib/data"; // must exist in your project

export default function AwardsPage({
  params,
}: {
  params: { lang: string; year: string };
}) {
  const { lang, year } = params;

  const t = (en: string, sw: string) => (lang === "sw" ? sw : en);

  const data = getYearData(year);
  const awards = data?.awards;

  if (!awards) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Awards</h1>
        <p className="text-gray-600">Awards data not found.</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* HEADER */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">
          {t(`TAFFA ${year} Awards`, `Tuzo za TAFFA ${year}`)}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t(
            "Explore award categories, nominees, and winners.",
            "Gundua vipengele vya tuzo, walioteuliwa na washindi."
          )}
        </p>
      </header>

      {/* CATEGORY GRID */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {awards.categories.map((cat: any) => (
          <Link
            key={cat.id}
            href={`/${lang}/${year}/awards/${cat.id}`}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition group block"
          >
            {/* Optional Poster */}
            {cat.poster && (
              <Image
                src={cat.poster}
                alt={cat.id}
                width={600}
                height={400}
                className="rounded-lg w-full object-cover mb-4"
              />
            )}

            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
              {t(cat.title)}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {t(cat.description)}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return generateLangYearParams();
}
