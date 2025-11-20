"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { footerContent } from "@/lib/content/footer";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Calendar,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

interface FooterProps {
  currentLang?: string;
  year?: string;
}

const Footer: React.FC<FooterProps> = ({ currentLang = "sw" }) => {
  const t = footerContent[currentLang as keyof typeof footerContent] || footerContent.sw;

  return (
    <footer className="relative bg-black text-gray-300">
      {/* TOP SECTION */}
      <div className="border-t border-white/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* ABOUT */}
            <div>
              <Image
                src="/images/logo.png"
                alt="TAFFA Logo"
                width={120}
                height={120}
                className="mb-6"
              />

              <p className="text-gray-400 mb-6">{t.aboutText}</p>

              <div className="flex gap-4 text-gray-400 text-xl">
                <Link href="https://facebook.com/taffafestival" target="_blank">
                  <Facebook className="hover:text-[#E4B34C] transition" size={20} />
                </Link>
                <Link href="https://instagram.com/taffafestival" target="_blank">
                  <Instagram className="hover:text-[#E4B34C] transition" size={20} />
                </Link>
                <Link href="https://twitter.com/taffafestival" target="_blank">
                  <Twitter className="hover:text-[#E4B34C] transition" size={20} />
                </Link>
                <Link href="https://linkedin.com/company/taffafestival" target="_blank">
                  <Linkedin className="hover:text-[#E4B34C] transition" size={20} />
                </Link>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">{t.quickLinks}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="hover:text-[#E4B34C] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/program" className="hover:text-[#E4B34C] transition">
                    Festival Program
                  </Link>
                </li>
                <li>
                  <Link href="#partners" className="hover:text-[#E4B34C] transition">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOR FILMMAKERS */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">{t.forFilmmakers}</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://tuzo.taffafestival.or.tz"
                    target="_blank"
                    className="hover:text-[#E4B34C] transition"
                  >
                    Submit Your Film
                  </Link>
                </li>
                <li>
                  <Link href="/awards" className="hover:text-[#E4B34C] transition">
                    Award Categories
                  </Link>
                </li>
              </ul>
            </div>

            {/* EVENT INFORMATION */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">{t.eventInfo}</h4>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Calendar className="text-[#E4B34C]" size={20} />
                  <div>
                    <p>{t.festival}</p>
                    <p>{t.awards}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <MapPin className="text-[#E4B34C]" size={20} />
                  <span>Mlimani City, Dar es Salaam, Tanzania</span>
                </div>

                <div className="flex gap-3 items-start">
                  <Mail className="text-[#E4B34C]" size={20} />
                  <Link
                    href="mailto:taffafestival@studio19.co.tz"
                    className="hover:text-[#E4B34C]"
                  >
                    taffafestival@studio19.co.tz
                  </Link>
                </div>

                <div className="flex gap-3 items-start">
                  <Phone className="text-[#E4B34C]" size={20} />
                  <span>+255 684 788 499</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex gap-6 text-gray-400 text-sm">
            <Link href="#privacy" className="hover:text-[#E4B34C] transition">
              {t.privacy}
            </Link>
            <Link href="#terms" className="hover:text-[#E4B34C] transition">
              {t.terms}
            </Link>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 Tanzania Film Festivals and Awards (TAFFA). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
