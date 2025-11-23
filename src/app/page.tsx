// Path: src/app/page.tsx
// Root homepage redirect → default language (/sw)

import { redirect } from "next/navigation";
import { LANGS } from "@/config/routes";

export default function RootRedirectPage() {
  // Make sure "sw" exists — fallback to first language
  const defaultLang = LANGS.includes("sw") ? "sw" : LANGS[0];

  redirect(`/${defaultLang}`);

  return null;
}
