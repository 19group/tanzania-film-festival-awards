"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { partnerModalContent } from "@/lib/content/partnerModal";

interface PartnerModalProps {
  open: boolean;
  onClose: () => void;
  currentLang: "en" | "sw";
}

export default function PartnerModal({ open, onClose, currentLang }: PartnerModalProps) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

interface PartnerFormData {
    name: string;
    email: string;
    phone?: string;
    message?: string;
    [key: string]: string | undefined;
}

interface PartnerRequestResponse {
    success?: boolean;
    message?: string;
}

const t =
  partnerModalContent[currentLang as "en" | "sw"] ||
  partnerModalContent.en;



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const raw = new FormData(form);
    const entries = Object.fromEntries(raw.entries()) as Record<string, FormDataEntryValue>;

    const formData: PartnerFormData = {
        name: String(entries.name ?? ""),
        email: String(entries.email ?? ""),
        phone: entries.phone ? String(entries.phone) : undefined,
        message: entries.message ? String(entries.message) : undefined,
    };

    try {
        const res = await fetch("/api/partner-request", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) setSent(true);
        // Optionally parse response if needed:
        // const data = (await res.json()) as PartnerRequestResponse;
    } finally {
        setLoading(false);
    }
};

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL WRAPPER */}
          <div className="
            fixed inset-0 z-999 p-4 pt-9
            flex items-center justify-center 
            overflow-y-auto pointer-events-none 
          ">
            {/* MODAL */}
            <motion.div
              className="
                bg-white rounded-3xl shadow-2xl 
                w-full max-w-2xl relative pointer-events-auto
                overflow-hidden
              "
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E4B34C]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/20 rounded-full blur-3xl" />

              {/* CLOSE BUTTON */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="
                  absolute top-8 right-6 z-10 w-10 h-10 
                  rounded-full bg-white/80 backdrop-blur-sm 
                  border border-gray-200 text-gray-700
                  hover:text-black flex items-center justify-center
                  shadow-lg transition-all
                "
              >
                <X size={20} />
              </motion.button>

              <div className="
                relative p-6 sm:p-8 md:p-12 
                max-h-[80vh] overflow-y-auto custom-scroll
              ">
                {!sent ? (
                  <>
                    {/* HEADER */}
                    <div className="mb-10 pt-10 ">
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {t.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                        {t.subtitle}
                      </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* NAME */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-800">
                          {t.fields.name}
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            name="name"
                            required
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E4B34C] outline-none"
                            placeholder={t.fields.namePlaceholder}
                          />
                        </div>
                      </div>

                      {/* EMAIL + PHONE */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-gray-800">
                            {t.fields.email}
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                              type="email"
                              name="email"
                              required
                              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E4B34C]"
                              placeholder={t.fields.emailPlaceholder}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold mb-2 text-gray-800">
                            {t.fields.phone}
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                              name="phone"
                              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E4B34C]"
                              placeholder={t.fields.phonePlaceholder}
                            />
                          </div>
                        </div>
                      </div>

                      {/* MESSAGE */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-800">
                          {t.fields.message}
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                          <textarea
                            name="message"
                            rows={4}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E4B34C]"
                            placeholder={t.fields.messagePlaceholder}
                          />
                        </div>
                      </div>

                      {/* BENEFITS */}
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 text-gray-700 text-sm">
                        <strong className="text-[#E4B34C]">Note:</strong> {t.benefits}
                      </div>

                      {/* SUBMIT */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-linear-to-r from-[#E4B34C] via-yellow-500 to-[#E4B34C] text-black rounded-full font-bold text-lg shadow-md disabled:opacity-50"
                      >
                        {loading ? t.sending : t.submit}
                      </motion.button>
                    </form>
                  </>
                ) : (
                  /* SUCCESS */
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg">
                      <CheckCircle2 className="text-white" size={40} />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {t.successTitle}
                    </h2>

                    <p className="text-gray-600 max-w-md mx-auto mb-10 leading-relaxed">
                      {t.successBody}
                    </p>

                    <button
                      onClick={onClose}
                      className="px-10 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
