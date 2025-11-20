import { redirect } from 'next/navigation';


export default function LangRoot({ params }: { params: { lang: string } }) {
// Simplest behavior: redirect /en -> /en/2025 (latest). Replace 2025 with dynamic latest logic later.
redirect(`/${params.lang}/2025`);
}