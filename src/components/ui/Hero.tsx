'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';


type Props = { title: string; subtitle?: string; cta?: { href: string; label: string }; image?: string; year?: string };


export default function Hero({ title, subtitle, cta, image, year }: Props) {
return (
<header className="relative bg-black text-white">
{image && (
<div className="absolute inset-0 -z-10">
<Image src={image} alt={title} fill className="object-cover brightness-75" />
<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
</div>
)}


<div className="max-w-6xl mx-auto px-6 py-20">
<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
{year && <p className="inline-block text-sm font-semibold uppercase px-3 py-1 bg-amber-900/10 rounded" style={{ color: 'var(--color-primary)' }}>{year} • TAFFA</p>}
<h1 className="mt-6 text-3xl md:text-5xl font-display font-bold">{title}</h1>
{subtitle && <p className="mt-4 max-w-2xl text-lg">{subtitle}</p>}
{cta && (
<div className="mt-8">
<a href={cta.href} className="inline-block px-5 py-3 rounded-md" style={{ background: 'var(--color-primary)', color: 'var(--color-black)' }}>
{cta.label}
</a>
</div>
)}
</motion.div>
</div>
</header>
);
}