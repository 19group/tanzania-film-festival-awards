'use client';
import { useEffect } from 'react';


type Props = { scriptSrc: string; containerClass?: string; fallbackUrl?: string; id?: string };


export default function ThirdPartyEmbed({ scriptSrc, containerClass = '', fallbackUrl, id }: Props) {
useEffect(() => {
if (!scriptSrc) return;
if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
const s = document.createElement('script');
s.src = scriptSrc;
s.async = true;
if (id) s.id = id;
document.body.appendChild(s);
return () => {
// keep script (other widgets might need it) - do not remove
};
}, [scriptSrc]);


return (
<section aria-label="Third-party embed">
<div className={containerClass} />
{fallbackUrl && (
<noscript>
<p>
View the program at <a href={fallbackUrl}>{fallbackUrl}</a>
</p>
</noscript>
)}
</section>
);
}