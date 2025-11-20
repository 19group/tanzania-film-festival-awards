// Path: src/app/[lang]/[year]/about/page.tsx
// About Page using centralized route config + content module

import Image from "next/image";
import { aboutContent } from "@/lib/content/about";
import { generateLangYearParams } from "@/config/routes";

export default function AboutPage({
  params,
}: {
  params: { lang: string; year: string };
}) {
  const { lang, year } = params;

  const t = (obj: any) =>
    typeof obj === "string" ? obj : obj?.[lang] || obj?.en;

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* HERO IMAGE */}
      <div className="w-full mb-12">
        <Image
          src={aboutContent.heroImage}
          alt="About TAFFA"
          width={1600}
          height={700}
          className="rounded-xl w-full object-cover shadow-lg"
        />
      </div>

      {/* MISSION & VISION */}
      <section className="mb-20">
        <h1 className="text-4xl font-display font-bold mb-10 text-center">
          {t({ en: `About TAFFA ${year}`, sw: `Kuhusu TAFFA ${year}` })}
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t(aboutContent.mission)}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t(aboutContent.vision)}
            </p>
          </div>
        </div>
      </section>

      {/* IDENTITY: FESTIVAL + AWARDS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Who We Are</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">TAFFA Festival</h3>
            <p className="text-gray-700 leading-relaxed">
              {t(aboutContent.identity.festival)}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">TAFFA Awards</h3>
            <p className="text-gray-700 leading-relaxed">
              {t(aboutContent.identity.awards)}
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Impact</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {aboutContent.impact.map((item, idx) => (
            <div key={idx}>
              <p className="text-4xl font-bold text-primary">{item.value}</p>
              <p className="text-gray-600 mt-2">{t(item.label)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Organizing Committee</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {aboutContent.team.map((member, idx) => (
            <div key={idx} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-64 mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{t(member.role)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Partners & Sponsors</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center">
          {aboutContent.partners.map((item, idx) => (
            <div key={idx} className="flex justify-center">
              <Image
                src={item.logo}
                alt={item.name}
                width={180}
                height={180}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return generateLangYearParams();
}