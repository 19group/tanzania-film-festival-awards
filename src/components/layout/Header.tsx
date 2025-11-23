"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe, Flag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

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

  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const urlLang =
    segments[0] && segments[0].length === 2 ? segments[0] : lang;

  const [currentLang, setCurrentLang] = useState(urlLang);

  useEffect(() => {
    setCurrentLang(urlLang);
  }, [urlLang]);

  const changeLanguage = (newLang: string) => {
    if (newLang === currentLang) return;

    setCurrentLang(newLang);
    onLanguageChange?.(newLang);
    setIsLangDropdownOpen(false);
    setIsMobileMenuOpen(false);

    try {
      const segs = pathname.split("/").filter(Boolean);

      if (segs[0] && segs[0].length === 2) {
        segs[0] = newLang;
      } else {
        segs.unshift(newLang);
      }

      const newPath = "/" + segs.join("/");
      router.push(newPath);
    } catch {
      router.push(`/${newLang}`);
    }
  };

  /** Scroll behavior */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** NAV LINKS */
  const navLinks = [
    {
      href: `/${currentLang}`,
      label: currentLang === "sw" ? "Nyumbani" : "Home",
      external: false,
    },
    {
      href: `/${currentLang}/${year}/program`,
      label: currentLang === "sw" ? "Ratiba" : "Program",
      external: false,
    },
    {
      href: `/${currentLang}/${year}/awards`,
      label: "Awards",
      external: false,
    },
    {
      href: "https://tuzo.taffafestival.or.tz",
      label: currentLang === "sw" ? "Wasilisha" : "Submit",
      external: true,
    },
  ];

  const languages = [
    { code: "sw", label: "SW" },
    { code: "en", label: "EN" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur-md py-4 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between">
          {/* DESKTOP LEFT NAV */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
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

          {/* LOGO */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href={`/${currentLang}`}>
              <Image
                src="/images/logo.png"
                alt="TAFFA Logo"
                width={80}
                height={80}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
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

            {/* LANGUAGE DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 text-white hover:text-[#E4B34C] transition-colors"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">
                  {currentLang.toUpperCase()}
                </span>
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
                        onClick={() => changeLanguage(l.code)}
                        className={`w-full px-4 py-4 flex items-center gap-3 text-left ${
                          currentLang === l.code
                            ? "bg-[#E4B34C]/10 text-[#E4B34C]"
                            : "text-white hover:bg-[#E4B34C]/20"
                        }`}
                      >
                        <Flag size={14} />
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
              onClick={() => changeLanguage(currentLang === "sw" ? "en" : "sw")}
              className="text-white hover:text-[#E4B34C]"
            >
              <Globe size={20} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#E4B34C]"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="flex flex-col gap-4 pb-6">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white hover:text-[#E4B34C] py-3 text-base sm:text-lg uppercase tracking-wider"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white hover:text-[#E4B34C] py-3 text-base sm:text-lg uppercase tracking-wider"
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
