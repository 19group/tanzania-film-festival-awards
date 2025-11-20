"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  lang?: string;
  year?: string;
  onLanguageChange?: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  lang = "sw",
  year = "2025",
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** INTERNAL NEXT.JS ROUTES */
  const navLinks = [
    {
      href: `/${lang}`,
      label: lang === "sw" ? "Nyumbani" : "Home",
      external: false,
    },
    {
      href: `/${lang}/${year}/program`,
      label: lang === "sw" ? "Ratiba" : "Program",
      external: false,
    },
    {
      href: `/${lang}/${year}/awards`,
      label: "Awards",
      external: false,
    },
    {
      href: "https://tuzo.taffafestival.or.tz",
      label: lang === "sw" ? "Wasilisha" : "Submit",
      external: true,
    },
  ];

  const languages = [
    { code: "sw", label: "SW", flag: "🇹🇿" },
    { code: "en", label: "EN", flag: "🇺🇸" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* DESKTOP LEFT NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E4B34C] transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#E4B34C] transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* LOGO (center) */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href={`/${lang}`}>
              <Image
                src="/images/logo.png"
                alt="TAFFA Logo"
                width={80}
                height={80}
                className="h-16 w-auto lg:h-20"
              />
            </Link>
          </motion.div>

          {/* DESKTOP RIGHT NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(2).map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E4B34C] transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#E4B34C] transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* LANGUAGE DROPDOWN (DESKTOP) */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 text-white hover:text-[#E4B34C] transition-colors"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{lang.toUpperCase()}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-black/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-[#E4B34C]/20"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          onLanguageChange?.(l.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 flex items-center gap-2 text-left ${
                          lang === l.code
                            ? "bg-[#E4B34C]/10 text-[#E4B34C]"
                            : "text-white hover:bg-[#E4B34C]/20"
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span className="text-sm font-medium">{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() =>
                onLanguageChange?.(lang === "sw" ? "en" : "sw")
              }
              className="text-white hover:text-[#E4B34C]"
            >
              <Globe size={20} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#E4B34C]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-4">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white hover:text-[#E4B34C] py-2 uppercase tracking-wider"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white hover:text-[#E4B34C] py-2 uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
