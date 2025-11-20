import { getYearData } from '@/lib/data';
import Hero from '@/components/ui/Hero';


export default function YearLanding({ params }: { params: { lang: string; year: string } }) {
const data = getYearData(params.year as string);
const report = data?.report;
const heroTitle = report?.title?.en || `TAFFA ${params.year}`;
return (
<main>
<Hero title={heroTitle} subtitle={report?.summary?.en} year={params.year} image={report?.heroImage} />


<section className="max-w-6xl mx-auto px-6 py-12">
<h2 className="text-2xl font-semibold">Quick Links</h2>
<ul className="mt-4">
<li><a href={`/${params.lang}/${params.year}/festival`}>Festival</a></li>
<li><a href={`/${params.lang}/${params.year}/program`}>Program</a></li>
<li><a href={`/${params.lang}/${params.year}/awards`}>Awards</a></li>
</ul>
</section>
</main>
);
}