// Path: src/components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header({ lang = "en", year = "2025" }: { lang?: string; year?: string }) {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="TAFFA Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="font-display font-bold text-xl">TAFFA</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href={`/${lang}/${year}/festival`} className="hover:text-primary">Festival</Link>
          <Link href={`/${lang}/${year}/program`} className="hover:text-primary">Program</Link>
          <Link href={`/${lang}/${year}/awards`} className="hover:text-primary">Awards</Link>
          <Link href={`/${lang}/${year}/about`} className="hover:text-primary">About</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href={`/${lang === "en" ? "sw" : "en"}`} className="text-sm px-2 py-1 border rounded">
            {lang === "en" ? "SW" : "EN"}
          </Link>
          <button className="md:hidden p-2">☰</button>
        </div>
      </div>
    </header>
  );
}
