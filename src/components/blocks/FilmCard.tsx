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
<motion.article whileHover={{ scale: 1.02 }} className="group">
<Link href={`./${film.slug}`}>
<div className="relative rounded overflow-hidden">
<Image src={film.poster} alt={title} width={400} height={600} className="object-cover" />
</div>
<h3 className="mt-3 text-lg font-semibold">{title}</h3>
</Link>
</motion.article>
);
}