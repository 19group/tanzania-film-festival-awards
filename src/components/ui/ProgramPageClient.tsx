"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Film,
  Users,
  Award,
  Briefcase,
  Sparkles,
  Download,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

import type { ProgramContent, ProgramContentItem, ProgramIconName } from "@/lib/types/program";

const ICON_MAP: Record<ProgramIconName, React.ComponentType<any>> = {
  film: Film,
  users: Users,
  award: Award,
  briefcase: Briefcase,
  mappin: MapPin,
  calendar: Calendar,
  clock: Clock,
  sparkles: Sparkles,
};

type Props = {
  lang: "sw" | "en";
  year: string;
  content: ProgramContent;
};

export default function ProgramPageClient({ lang, year, content }: Props) {
  const t: ProgramContentItem = content[lang];

  // Load Elfsight
  useEffect(() => {
    if (document.getElementById("elfsight-platform")) return;
    const s = document.createElement("script");
    s.id = "elfsight-platform";
    s.src = "https://static.elfsight.com/platform/platform.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* HERO */}
      <section className="relative py-24 md:py-32 bg-linear-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E4B34C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E4B34C]/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-linear(#E4B34C 1px, transparent 1px), linear-linear(90deg,#E4B34C 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#E4B34C] uppercase tracking-widest text-sm font-semibold mb-4"
            >
              {t.hero.kicker}
            </motion.p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {t.hero.title}
              </span>
              <span className="block text-[#E4B34C] mt-2">{year}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t.hero.subtitle}
            </p>

            {/* INFO BADGES */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Calendar size={18} className="text-[#E4B34C]" />
                <span>{t.hero.festivalDates}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <MapPin size={18} className="text-[#E4B34C]" />
                <span>{t.hero.location}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Clock size={18} className="text-[#E4B34C]" />
                <span>{t.hero.duration}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DAYS CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-20 -mt-16 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {t.days.map((day, i) => {
            const Icon = ICON_MAP[day.icon];

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${day.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl -z-10`}
                />

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${day.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                      {day.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-2xl mb-3 text-gray-900">{day.day}</h3>
                  <p className="text-gray-600 leading-relaxed">{day.description}</p>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-[#E4B34C]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-linear-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {lang === "sw" ? "Nini cha Kutegemea" : "What to Expect"}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {lang === "sw"
                ? "Tamasha linajumuisha shughuli mbalimbali za elimu na burudani"
                : "The festival features diverse educational and entertainment activities"}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {t.whatToExpect.map((item, i) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-[#E4B34C] to-yellow-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>

                  <h4 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {lang === "sw" ? "Ratiba ya Kila Siku" : "Daily Schedule"}
          </h2>
          <p className="text-gray-600 text-lg">
            {lang === "sw"
              ? "Angalia ratiba kamili ya matukio yote ya tamasha"
              : "View the complete schedule of all festival events"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-2xl"
        >
          <div className="relative w-full min-h-[600px] md:min-h-[700px]">
            <div
              className="elfsight-app-81458108-845d-4daf-b45e-bccbca9ac3f6 w-full h-full"
              data-elfsight-app-lazy
            />
          </div>
        </motion.div>
      </section>

      {/* ATTENDEE GUIDE */}
      {/* <section className="bg-linear-to-b from-gray-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {lang === "sw" ? "Mwongozo wa Wageni" : "Attendee Guide"}
            </h2>
            <p className="text-gray-600 text-lg">
              {lang === "sw"
                ? "Maelekezo ya kufuata wakati wa tamasha"
                : "Guidelines to follow during the festival"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <ul className="space-y-5 text-gray-700 leading-relaxed mb-10">
              {t.guide.map((rule, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 bg-[#E4B34C] text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{rule}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gray-200 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg"
              >
                <Download size={20} />
                {lang === "sw" ? "Pakua Ratiba (PDF)" : "Download Schedule (PDF)"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="relative py-20 bg-linear-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-linear(#E4B34C 1px, transparent 1px), linear-linear(90deg,#E4B34C 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#E4B34C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 bg-linear-to-br from-[#E4B34C] to-yellow-500 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg shadow-[#E4B34C]/30"
          >
            <Sparkles size={32} className="text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === "sw" ? "Jiandae kwa TAFFA" : "Get Ready for TAFFA"} {year}
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {lang === "sw"
              ? "Ungana nasi kusherehekea tasnia ya filamu Tanzania na kujenga mustakabali wa sanaa nchini."
              : "Join us in celebrating Tanzanian cinema and building the future of the arts in our nation."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://tuzo.taffafestival.or.tz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-[#E4B34C] to-yellow-500 text-black rounded-full font-bold hover:shadow-2xl hover:shadow-[#E4B34C]/50 transition-all"
            >
              {lang === "sw" ? "Wasilisha Filamu Yako" : "Submit Your Film"}
              <ExternalLink size={20} />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              {lang === "sw" ? "Pata Tiketi" : "Get Tickets"}
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}