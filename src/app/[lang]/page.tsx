// Path: src/app/[lang]/page.tsx
import { homeContent } from "@/lib/content/home";
// import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import TimelineSection from "@/components/ui/TimelineSection";
import PartnersSection from "@/components/ui/PartnersSection";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
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

      

      <AboutSection currentLang={lang} />
      <TimelineSection currentLang={lang} />
      <PartnersSection currentLang={lang} />
    </div>
  );
}
