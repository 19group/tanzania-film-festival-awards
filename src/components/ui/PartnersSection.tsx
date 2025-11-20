"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { partnersContent, partnersList } from "@/lib/content/partners";

interface PartnersProps {
  currentLang?: string;
  year?: string;
}

const PartnersSection: React.FC<PartnersProps> = ({
  currentLang = "sw",
}) => {
  const t = partnersContent[currentLang as keyof typeof partnersContent] || partnersContent.sw;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="partners" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900 to-black"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E4B34C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E4B34C]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#E4B34C] uppercase tracking-widest text-sm font-semibold mb-4"
          >
            {t.sectionTitle}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {t.mainTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16"
        >
          {partnersList.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-[#E4B34C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-center h-32 hover:border-[#E4B34C]/50 transition-all duration-500">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={128}
                  height={128}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto bg-linear-to-br from-[#E4B34C]/10 to-transparent border border-[#E4B34C]/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.joinTitle}
            </h3>

            <p className="text-gray-300 mb-6">
              {t.joinSubtitle}
            </p>

            <motion.a
              href="mailto:taffapartners@studio19.co.tz"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#f9d423] via-[#E4B34C] to-[#f9d423] text-black rounded-full hover:shadow-2xl hover:shadow-[#E4B34C]/70 transition-all duration-300 font-bold uppercase tracking-wider"
            >
              <Mail size={20} />
              {t.cta}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Infinite scroll logos */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
