import { Metadata } from "next";
import ProgramPageClient from "@/components/ui/ProgramPageClient";
import { programContent } from "@/lib/content/program";
import type { ProgramContent } from "@/lib/types/program";

type Params = {
  params: Promise<{ lang: "sw" | "en"; year: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, year } = await params;

  const t = programContent[lang];

  const title = `${t.hero.title} — ${year}`;
  const description = t.hero.subtitle;

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: "sw" | "en"; year: string }> }) {
  const { lang, year } = await params;

  return (
    <ProgramPageClient
      lang={lang}
      year={year}
      content={programContent as ProgramContent}
    />
  );
}
