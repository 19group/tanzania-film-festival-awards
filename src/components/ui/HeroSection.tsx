"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/content/homeContent";

interface HeroProps {
  currentLang?: string;
  year?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection: React.FC<HeroProps> = ({
  currentLang = "sw",
  year = "2025",
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /** COUNTDOWN LOGIC — unchanged */
  useEffect(() => {
    const targetDate = new Date("December 06, 2025 10:00:00").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  

const t = heroContent[currentLang as keyof typeof heroContent] || heroContent.sw;

  /** FRAMER VARIANTS — unchanged */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND — unchanged */}
      <div className="absolute inset-0 z-0">
        <Image
          src={t.background}
          alt="TAFFA Background"
          fill
          className="object-cover"
          priority
        />
        
      </div>

      {/* ANIMATED OVERLAY — unchanged */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E4B34C]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E4B34C]/10 rounded-full blur-3xl"
        />
      </div>

      {/* CONTENT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 z-20 relative"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* TITLES — unchanged */}
          <motion.div variants={itemVariants} className="space-y-4 mb-8">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight"
              style={{ textShadow: "0 0 40px rgba(228, 179, 76, 0.5)" }}
            >
              {t.title1}
            </motion.h1>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#E4B34C] via-yellow-300 to-[#E4B34C] bg-clip-text text-transparent uppercase tracking-tight"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              {t.title2}
            </motion.h1>
          </motion.div>

          {/* EVENT DETAILS — unchanged */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-3 text-white">
              <Calendar className="text-[#E4B34C]" size={24} />
              <div>
                <p className="text-sm opacity-80">Festival</p>
                <p className="font-semibold">{t.festivalDate}</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-[#E4B34C]/30"></div>

            <div className="flex items-center gap-3 text-white">
              <Calendar className="text-[#E4B34C]" size={24} />
              <div>
                <p className="text-sm opacity-80">Awards</p>
                <p className="font-semibold">{t.awardsDate}</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-[#E4B34C]/30"></div>

            <div className="flex items-center gap-3 text-white">
              <MapPin className="text-[#E4B34C]" size={24} />
              <p className="font-semibold">{t.location}</p>
            </div>
          </motion.div>

          {/* COUNTDOWN — unchanged */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([key, value], index) => (
                <React.Fragment key={key}>
                  <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                    <div className="bg-black/50 backdrop-blur-md border border-[#E4B34C]/30 rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[100px]">
                      <motion.div
                        key={value}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-[#E4B34C]"
                      >
                        {value.toString().padStart(2, "0")}
                      </motion.div>
                      <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider mt-2">
                        {t.countdown[key as keyof typeof t.countdown]}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#E4B34C]/20 blur-xl -z-10 rounded-xl"></div>
                  </motion.div>

                  {index < 3 && (
                    <div className="text-2xl md:text-4xl text-[#E4B34C] font-bold">
                      :
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* CTA BUTTONS — UPDATED FOR NEXT.JS ROUTING */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* INTERNAL NEXT.JS PROGRAM LINK */}
            <Link
              href={`/${currentLang}/${year}/program`}
              legacyBehavior
            >
              <motion.a
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-[#E4B34C] text-white rounded-full hover:bg-[#E4B34C]/10 transition-all duration-300 flex items-center gap-2 font-semibold uppercase tracking-wider"
              >
                {t.seeProgram}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </Link>

            {/* EXTERNAL SUBMISSION LINK — unchanged */}
            <motion.a
              href="https://tuzo.taffafestival.or.tz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-linear-to-r from-[#f9d423] via-[#E4B34C] to-[#f9d423] text-black rounded-full hover:shadow-2xl hover:shadow-[#E4B34C]/70 transition-all duration-300 font-bold uppercase tracking-wider"
            >
              {t.submitFilm}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR — unchanged */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-[#E4B34C]/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-[#E4B34C] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
