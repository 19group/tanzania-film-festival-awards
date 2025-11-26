// Path: src/lib/types/program.ts
import type { LucideIcon } from "lucide-react";

export type ProgramIconName =
  | "film"
  | "users"
  | "award"
  | "briefcase"
  | "mappin"
  | "calendar"
  | "clock"
  | "sparkles";

export interface DayItem {
  date: string;
  day: string;
  description: string;
  icon: ProgramIconName;
  color: string;
}

export interface ExpectItem {
  title: string;
  description: string;
  icon: ProgramIconName;
}

export interface ProgramContentItem {
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    festivalDates: string;
    location: string;
    duration: string;
  };
  days: DayItem[];
  whatToExpect: ExpectItem[];
  guide: string[];
}

export interface ProgramContent {
  sw: ProgramContentItem;
  en: ProgramContentItem;
}