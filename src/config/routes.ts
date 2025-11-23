// Path: src/config/routes.ts
import fs from "fs";
import path from "path";
import { LANGS, YEARS, type Lang, type Year } from "@/lib/types/routes";

export function generateLangParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateLangYearParams() {
  const params: { lang: Lang; year: Year }[] = [];
  for (const lang of LANGS) {
    for (const year of YEARS) {
      params.push({ lang, year });
    }
  }
  return params;
}

export function generateCategoryParams() {
  const filePath = path.join(
    process.cwd(),
    "src/data/2025/awards.json"
  );

  let awards: { categories: { id: string }[] } = { categories: [] };

  try {
    awards = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    console.warn("Could not read awards.json — using empty dataset.");
  }

  const params: { lang: Lang; year: Year; category: string }[] = [];

  for (const lang of LANGS) {
    for (const year of YEARS) {
      for (const cat of awards.categories) {
        params.push({ lang, year, category: cat.id });
      }
    }
  }

  return params;
}
