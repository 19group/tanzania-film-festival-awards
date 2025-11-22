// Path: src/lib/data.ts
// Fully static-safe data loader for NEXT output: export
// Uses fs + path (allowed at build time), no require(), no top-level JSON imports.
// Safe for ESLint and static exports.

import fs from "fs";
import path from "path";

// Resolve base data directory
function yearDir(year: string) {
  return path.join(process.cwd(), "src", "data", year);
}

// Read a JSON file synchronously (static-safe)
function readJSON(filePath: string) {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  try {
    return JSON.parse(raw);
  } catch (err) {
    console.error("JSON parse error:", filePath, err);
    return null;
  }
}

export function getYearData(year: string) {
  const dir = yearDir(year);

  if (!fs.existsSync(dir)) {
    console.warn("Year directory missing:", dir);
    return null;
  }

  return {
    awards: readJSON(path.join(dir, "awards.json")),
    about: readJSON(path.join(dir, "about.json")),
    festival: readJSON(path.join(dir, "festival.json")),
    program: readJSON(path.join(dir, "program.json")),
    report: readJSON(path.join(dir, "report.json")),
  };
}
