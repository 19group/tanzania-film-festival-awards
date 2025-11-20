// Path: src/app/[lang]/[year]/layout.tsx

import { generateLangYearParams } from "@/config/routes";

export default function YearLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

// Static params for all /[lang]/[year] routes
export function generateStaticParams() {
  return generateLangYearParams();
}
