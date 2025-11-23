// Path: src/lib/types/routes.ts
export const LANGS = ["en", "sw"] as const;
export const YEARS = ["2025"] as const;

export type Lang = (typeof LANGS)[number];
export type Year = (typeof YEARS)[number];
