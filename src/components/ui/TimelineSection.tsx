"use client";

import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { timelineContent } from "@/lib/content/timeline";

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
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className={`flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
        {/* Content */}
        <motion.div whileHover={{ scale: 1.02 }} className="flex-1 group">
          <div className="relative bg-linear-to-br from-black to-gray-900 border border-[#E4B34C]/20 rounded-2xl p-8 hover:border-[#E4B34C]/50 transition-all duration-500">
            <div className="absolute inset-0 bg-linear-to-br from-[#E4B34C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>

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
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
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
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 bg-linear-to-b from-[#E4B34C] to-transparent"
              style={{ height: "calc(100% + 2rem)" }}
            ></motion.div>
          )}
        </div>

        <div className="flex-1"></div>
      </div>
    </motion.div>
  );
};

const TimelineSection: React.FC<TimelineProps> = ({ currentLang = "sw", year = "2025" }) => {
  const t = timelineContent[currentLang as keyof typeof timelineContent] || timelineContent.sw;

  return (
    <section id="timeline" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900 to-black"></div>

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
          className="text-center mb-20"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            {t.mainTitle}
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8 mb-16">
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
          {/* CTA uses dynamic route (program) */}
          <Link href={`/${currentLang}/${year}/program`} legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#E4B34C] text-white rounded-full hover:bg-[#E4B34C]/10 transition-all duration-300 font-semibold uppercase tracking-wider group"
            >
              {t.cta}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
