'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';


type Film = {
slug: string;
title: { en: string; sw?: string } | string;
poster: string;
year?: number;
};


export default function FilmCard({ film }: { film: Film }) {
const title = typeof film.title === 'string' ? film.title : film.title.en;
return (
<motion.article 
whileHover={{ scale: 1.05, y: -8 }} 
transition={{ type: 'spring', stiffness: 300 }}
className="group relative"
>
{/* Glow effect */}
<div className="absolute -inset-2 bg-linear-to-br from-[#E4B34C]/30 to-[#f9d423]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl -z-10"></div>

<Link href={`./${film.slug}`}>
<div className="relative rounded-lg overflow-hidden border border-[#E4B34C]/20 group-hover:border-[#E4B34C]/60 transition-all duration-500 h-full">
{/* Top border accent */}
<div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E4B34C] to-transparent z-10"></div>

<Image 
src={film.poster} 
alt={title} 
width={400} 
height={600} 
className="object-cover group-hover:brightness-110 transition-all duration-500" 
/>

{/* Overlay on hover */}
<div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<h3 className="mt-4 text-lg font-bold text-white group-hover:text-[#E4B34C] transition-all duration-300">{title}</h3>

{film.year && (
<p className="text-sm text-[#E4B34C] font-semibold mt-1">{film.year}</p>
)}
</Link>
</motion.article>
);
}