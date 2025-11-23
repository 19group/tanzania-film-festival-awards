"use client";

import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface TimelineProps {
  currentLang?: string;
  year?: string;
}

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  venue?: string;
  index: number;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  venue,
  index,
  isLast = false,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Desktop Layout (md and up) - Alternating sides */}
      <div className="hidden md:flex items-center gap-8">
        <div className={`flex items-center gap-8 w-full ${isEven ? "flex-row" : "flex-row-reverse"}`}>
          {/* Content */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex-1 group">
            <div className="relative bg-gradient-to-br from-black to-gray-900 border border-[#E4B34C]/20 rounded-2xl p-8 hover:border-[#E4B34C]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E4B34C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>

              <div className="inline-flex items-center gap-2 bg-[#E4B34C]/10 px-4 py-2 rounded-full mb-4">
                <Calendar className="text-[#E4B34C]" size={16} />
                <span className="text-[#E4B34C] font-semibold text-sm">{date}</span>
              </div>

              {venue && (
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <MapPin size={16} />
                  <span className="text-sm">{venue}</span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E4B34C] transition-colors duration-300">
                {title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{description}</p>

              <div
                className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-20 h-20 bg-gradient-to-${
                  isEven ? "bl" : "br"
                } from-[#E4B34C]/10 to-transparent rounded-t${isEven ? "r" : "l"}-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
            </div>
          </motion.div>

          {/* Timeline Dot */}
          <div className="relative shrink-0">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              className="w-6 h-6 bg-[#E4B34C] rounded-full border-4 border-black z-10 relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#E4B34C] rounded-full"
              ></motion.div>
            </motion.div>

            {!isLast && (
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#E4B34C] to-transparent"
                style={{ height: "calc(100% + 2rem)" }}
              ></motion.div>
            )}
          </div>

          <div className="flex-1"></div>
        </div>
      </div>

      {/* Mobile Layout (below md) - Simple vertical stack */}
      <div className="md:hidden flex gap-4">
        {/* Timeline Line */}
        <div className="flex flex-col items-center shrink-0">
          {/* Dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="w-5 h-5 bg-[#E4B34C] rounded-full border-4 border-black z-10 relative shrink-0"
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#E4B34C] rounded-full"
            ></motion.div>
          </motion.div>

          {/* Connecting Line */}
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              className="w-0.5 bg-gradient-to-b from-[#E4B34C] to-[#E4B34C]/20 flex-1 mt-2"
            ></motion.div>
          )}
        </div>

        {/* Content Card */}
        <div className="flex-1 pb-8">
          <div className="relative bg-gradient-to-br from-black to-gray-900 border border-[#E4B34C]/20 rounded-xl p-6 hover:border-[#E4B34C]/50 transition-all duration-500">
            <div className="inline-flex items-center gap-2 bg-[#E4B34C]/10 px-3 py-1.5 rounded-full mb-3">
              <Calendar className="text-[#E4B34C]" size={14} />
              <span className="text-[#E4B34C] font-semibold text-xs">{date}</span>
            </div>

            {venue && (
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <MapPin size={14} />
                <span className="text-xs">{venue}</span>
              </div>
            )}

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

            {/* Decorative corner - only top right on mobile */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#E4B34C]/10 to-transparent rounded-tr-xl"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection: React.FC<TimelineProps> = ({ currentLang = "sw", year = "2025" }) => {
  // Mock content - replace with actual content from lib
  const content = {
    sw: {
      sectionTitle: 'Ratiba ya Matukio',
      mainTitle: 'Nini Kitafanyika',
      cta: 'Angalia Matukio ya Tamasha',
      timeline: [
        {
          date: '08 Julai 2025',
          title: 'Uzinduzi wa TAFFA 2025',
          description:
            'Uzinduzi rasmi wa Tanzania Film Festivals and Awards 2025. Jiunge nasi kuanza safari hii ya kipekee ya usherehekaji wa sanaa.',
          venue: 'British Council',
        },
        {
          date: '14 - 16 Agosti 2025',
          title: 'Tamasha la Filamu',
          description:
            'Siku tatu za maonyesho ya filamu, warsha, mazungumzo, na matukio ya mtandao. Jukwaa la kuwaunganisha watengenezaji wa filamu na wadau kutoka kote.',
          venue: 'Mlimani City',
        },
        {
          date: '06 Desemba 2025',
          title: 'Usiku wa Tuzo',
          description:
            'Usiku wa kupendeza wa kutunuku tuzo kwa wafanyakazi bora wa tasnia ya ubunifu. Sherehe kubwa ya kusherehekea mafanikio na ubunifu.',
          venue: 'Mlimani City',
        },
      ],
    },
    en: {
      sectionTitle: 'Event Schedule',
      mainTitle: 'What Will Happen',
      cta: 'See Full Program',
      timeline: [
        {
          date: '08 July 2025',
          title: 'TAFFA 2025 Launch',
          description:
            'Official launch of Tanzania Film Festivals and Awards 2025. Join us as we kick off this unique journey of celebrating the arts.',
          venue: 'British Council',
        },
        {
          date: '14 - 16 August 2025',
          title: 'Film Festival',
          description:
            'Three days of film screenings, workshops, panel discussions, and networking events. A platform connecting filmmakers and stakeholders from everywhere.',
          venue: 'Mlimani City',
        },
        {
          date: '06 December 2025',
          title: 'Awards Night',
          description:
            'A glamorous evening celebrating the best in the creative industry. Grand celebration of excellence and creativity.',
          venue: 'Mlimani City',
        },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content] || content.sw;

  return (
    <section id="timeline" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#E4B34C 1px, transparent 1px),
                             linear-gradient(90deg, #E4B34C 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#E4B34C] uppercase tracking-widest text-sm font-semibold mb-4"
          >
            {t.sectionTitle}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white px-4"
          >
            {t.mainTitle}
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-0 mb-12 md:mb-16">
          {t.timeline.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              venue={item.venue}
              index={index}
              isLast={index === t.timeline.length - 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link href={`/${currentLang}/${year}/program`}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-[#E4B34C] text-white rounded-full hover:bg-[#E4B34C]/10 transition-all duration-300 font-semibold uppercase tracking-wider group cursor-pointer text-sm md:text-base"
            >
              {t.cta}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;