import { Lang } from "@/lib/types/language";

export interface NavItem {
  href: string;
  label: string;
  type: "internal" | "external";
}

export const navigation: Record<Lang, NavItem[]> = {
  sw: [
    { href: "/sw", label: "Nyumbani", type: "internal" },
    { href: "/sw/2025/program", label: "Ratiba", type: "internal" },
    { href: "/sw/2025/awards", label: "Tuzo", type: "internal" },
    {
      href: "https://tuzo.taffafestival.or.tz",
      label: "Wasilisha",
      type: "external",
    },
  ],

  en: [
    { href: "/en", label: "Home", type: "internal" },
    { href: "/en/2025/program", label: "Program", type: "internal" },
    { href: "/en/2025/awards", label: "Awards", type: "internal" },
    {
      href: "https://tuzo.taffafestival.or.tz",
      label: "Submit",
      type: "external",
    },
  ],
};
