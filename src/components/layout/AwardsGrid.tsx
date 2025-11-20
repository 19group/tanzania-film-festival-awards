import { motion } from 'framer-motion';

type Category = {
id: string;
title: { en: string; sw?: string } | string;
winner?: string;
nominees?: string[];
};

export default function AwardsGrid({ categories }: { categories: Category[] }) {
return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{categories.map((c, index) => (
<motion.div 
key={c.id} 
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1, duration: 0.5 }}
whileHover={{ y: -5 }}
className="group relative"
>
{/* Glow background */}
<div className="absolute inset-0 bg-linear-to-br from-[#E4B34C]/20 to-[#f9d423]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>

{/* Card */}
<div className="relative p-6 bg-linear-to-br from-black to-gray-900 border border-[#E4B34C]/30 rounded-2xl hover:border-[#E4B34C]/70 transition-all duration-500 h-full">
  {/* Top accent */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E4B34C] to-transparent rounded-t-2xl"></div>
  
  <h4 className="text-xl font-bold text-[#E4B34C] group-hover:text-[#f9d423] transition-colors mb-4">
    {typeof c.title === 'string' ? c.title : c.title.en}
  </h4>
  
  {c.winner && (
    <div className="mb-4 pb-4 border-b border-[#E4B34C]/20">
      <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Winner</p>
      <p className="text-white font-semibold">{c.winner}</p>
    </div>
  )}
  
  {c.nominees && c.nominees.length > 0 && (
    <div>
      <p className="text-sm text-[#E4B34C] font-semibold uppercase tracking-wider mb-3">Nominees</p>
      <ul className="space-y-2">
        {c.nominees.map((nominee, idx) => (
          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
            <span className="text-[#f9d423] mt-1">•</span>
            <span>{nominee}</span>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
</motion.div>
))}
</div>
);
}