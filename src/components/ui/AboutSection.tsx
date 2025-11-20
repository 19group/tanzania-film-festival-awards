'use client';

import React from 'react';
import { Users, TrendingUp, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutContent } from '@/lib/content/about';
interface AboutProps {
  currentLang?: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

interface Feature {
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#E4B34C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
      
      <div className="relative bg-linear-to-br from-black to-gray-900 border border-[#E4B34C]/20 rounded-2xl p-8 h-full hover:border-[#E4B34C]/50 transition-all duration-500">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="mb-6 inline-block"
        >
          <div className="w-16 h-16 bg-linear-to-br from-[#E4B34C] to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-[#E4B34C]/50">
            {icon}
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E4B34C] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>

        <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-[#E4B34C]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC<AboutProps> = ({ currentLang = 'sw' }) => {
  const t = aboutContent[(currentLang as 'sw' | 'en') || 'sw'] || aboutContent.sw; // ✅ dynamic text

  const getFeatureIcon = (index: number) => {
    const icons = [
      <Sparkles key={index} className="text-black" size={32} />,
      <Users key={index} className="text-black" size={32} />,
      <TrendingUp key={index} className="text-black" size={32} />,
      <Trophy key={index} className="text-black" size={32} />,
    ];
    return icons[index];
  };

  return (
    <section id="about-event" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900 to-black"></div>
      
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#E4B34C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#E4B34C]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.description1}
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              {t.description2}
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {t.stats.map((stat: Stat, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-linear-to-br from-[#E4B34C]/10 to-transparent border border-[#E4B34C]/30 rounded-xl p-6 text-center hover:border-[#E4B34C] transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#E4B34C] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
              <div className="absolute inset-0 bg-[#E4B34C]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.map((feature: Feature, index: number) => (
            <FeatureCard
              key={index}
              icon={getFeatureIcon(index)}
              title={feature.title}
              description={feature.description}
              delay={0.7 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
