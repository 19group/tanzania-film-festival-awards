import ThirdPartyEmbed from '@/components/blocks/ThirdPartyEmbed';


export default function ProgramPage({ params }: { params: { lang: string; year: string } }) {
return (
<main>
<section className="max-w-6xl mx-auto px-6 py-12">
<h1 className="text-3xl font-semibold">Program</h1>
<p className="mt-4">Official program calendar. If the calendar does not load, follow the external link below.</p>


<div className="mt-8">
<ThirdPartyEmbed
scriptSrc="https://static.elfsight.com/platform/platform.js"
containerClass="elfsight-app-81458108-845d-4daf-b45e-bccbca9ac3f6"
fallbackUrl="https://taffafestival.pixieset.com/tanzaniafilmfestival2025andmasharikicreativeeconomyexpo2025/"
/>
</div>
</section>
</main>
);
}