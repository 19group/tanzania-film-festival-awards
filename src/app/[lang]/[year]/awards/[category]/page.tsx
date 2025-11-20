// Path: src/app/[lang]/[year]/awards/[category]/page.tsx
// Award Category Detail Page — Winner + Nominees
// Uses centralized route config and year-based awards JSON

import Image from "next/image";
import { getYearData } from "@/lib/data";
import { generateCategoryParams } from "@/config/routes";

export default function AwardCategoryPage({
  params,
}: {
  params: { lang: string; year: string; category: string };
}) {
  const { lang, year, category } = params;

  const data = getYearData(year);
  const awards = data?.awards;

  const t = (obj: any) =>
    typeof obj === "string" ? obj : obj?.[lang] || obj?.en;

  if (!awards) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Awards</h1>
        <p className="text-gray-600">Awards data not found.</p>
      </main>
    );
  }

  const categoryData = awards.categories.find((c: any) => c.id === category);

  if (!categoryData) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Category Not Found</h1>
        <p className="text-gray-600">No matching award category.</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* HEADER */}
      <header className="mb-12">
        <h1 className="text-4xl font-display font-bold mb-3">
          {t(categoryData.title)}
        </h1>
        <p className="text-gray-700 max-w-3xl leading-relaxed">
          {t(categoryData.description)}
        </p>
      </header>

      {/* WINNER SECTION */}
      {categoryData.winner && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-primary">Winner</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {categoryData.winner.poster && (
              <Image
                src={categoryData.winner.poster}
                alt={categoryData.winner.name}
                width={500}
                height={750}
                className="rounded-lg w-full object-cover"
              />
            )}

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                {categoryData.winner.name}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t(categoryData.winner.description)}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* NOMINEES */}
      {categoryData.nominees && categoryData.nominees.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Nominees</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categoryData.nominees.map((nom: any, idx: number) => (
              <div key={idx} className="text-center">
                {nom.poster && (
                  <Image
                    src={nom.poster}
                    alt={nom.name}
                    width={400}
                    height={600}
                    className="rounded-lg w-full object-cover"
                  />
                )}
                <h3 className="text-lg font-semibold mt-3">{nom.name}</h3>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  return generateCategoryParams();
}
