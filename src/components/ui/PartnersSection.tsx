'use client';

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { partnersContent, partnersList } from "@/lib/content/partners";
import PartnerModal from "@/components/ui/PartnerModal";

interface PartnersProps {
  currentLang?: string;
}

const PartnersSection: React.FC<PartnersProps> = ({ currentLang = "sw" }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const t =
    partnersContent[currentLang as keyof typeof partnersContent] ||
    partnersContent.sw;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="partners" className="relative py-20 md:py-32 overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-100 via-white to-gray-50"></div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E4B34C]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E4B34C]/15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C19836] uppercase tracking-widest text-sm font-semibold mb-4">
            {t.sectionTitle}
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.mainTitle}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16
          "
        >
          {partnersList.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#E4B34C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>

              <div className="relative bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center h-32 hover:border-[#E4B34C] hover:shadow-lg transition-all duration-500">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={140}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto bg-linear-to-br from-[#E4B34C]/20 to-[#f9d423]/10 border border-[#E4B34C]/40 rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t.joinTitle}
            </h3>

            <p className="text-gray-700 mb-6">{t.joinSubtitle}</p>

            <motion.button
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#E4B34C] to-yellow-500
              text-black rounded-full font-bold uppercase tracking-wider">
              <Mail size={20} />
              {t.cta}
            </motion.button>

            <PartnerModal open={modalOpen} onClose={() => setModalOpen(false)} currentLang={currentLang as "sw" | "en"}/>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PartnersSection;
