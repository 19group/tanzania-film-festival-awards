// Path: src/app/page.tsx
// Root homepage redirect → default language (/sw))


import { redirect } from "next/navigation";
import { LANGS } from "@/config/routes";


export default function RootRedirectPage() {
const defaultLang = LANGS[1]; // "sw"


// Redirect / → /sw
redirect(`/${defaultLang}`);


return null;
}