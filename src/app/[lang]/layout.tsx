// Path: src/app/[lang]/layout.tsx
// FIXED: Layouts must NOT access params in static export mode.
// No params. No async. Pure static layout.

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

// Static params still allowed
import { generateLangParams } from "@/config/routes";
export function generateStaticParams() {
  return generateLangParams();
}
