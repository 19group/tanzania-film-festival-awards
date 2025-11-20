import fs from "fs";
import path from "path";

export const LANGS = ["en", "sw"] as const;
export const YEARS = ["2025"] as const;

export function generateLangParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateLangYearParams() {
  const params: { lang: string; year: string }[] = [];

  for (const lang of LANGS) {
    for (const year of YEARS) {
      params.push({ lang, year });
    }
  }

  return params;
}

export function generateCategoryParams() {
  // Read JSON during build — fully static, no ESLint issues
  const filePath = path.join(process.cwd(), "src", "data", "2025", "awards.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  const awards = JSON.parse(fileData);

  const params: { lang: string; year: string; category: string }[] = [];

  for (const lang of LANGS) {
    for (const year of YEARS) {
      for (const cat of awards.categories) {
        params.push({ lang, year, category: cat.id });
      }
    }
  }

  return params;
}
