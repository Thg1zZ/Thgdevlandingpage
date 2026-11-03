"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguageTheme } from "@/context/LanguageThemeContext";

declare global {
  interface Window {
    openPrivacyModal?: () => void;
  }
}

export function LGPDBanner() {
  const [show, setShow] = useState(false);
  const { t } = useLanguageTheme();

  useEffect(() => {
    const consent = localStorage.getItem("lgpd-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("lgpd-consent", "accepted");
    setShow(false);
  };

  const essential = () => {
    localStorage.setItem("lgpd-consent", "essential");
    setShow(false);
  };

  const openPolicy = () => {
    window.openPrivacyModal?.();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] glass border-t border-[rgba(90,70,62,0.8)] shadow-[0_-4px_32px_rgba(255,138,61,0.08)]"
          role="alertdialog"
          aria-label="Aviso de cookies LGPD"
        >
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center gap-4">
            <div className="text-2xl flex-shrink-0">🍪</div>
            <div className="flex-1 min-w-[240px]">
              <p className="font-[family-name:var(--font-jetbrains)] text-sm font-semibold text-[#FF8A3D] tracking-wide mb-1">
                {t("lgpd_banner_title")}
              </p>
              <p className="text-xs text-[#B5A9A3] leading-relaxed" dangerouslySetInnerHTML={{ __html: t("lgpd_banner_desc") }} />
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
              <button
                onClick={accept}
                className="cursor-pointer bg-[#FF8A3D] hover:bg-[#F27321] text-[#1A0E05] text-xs font-semibold font-[family-name:var(--font-jetbrains)] tracking-wider uppercase px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(255,138,61,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A3D]"
              >
                {t("lgpd_accept")}
              </button>
              <button
                onClick={essential}
                className="cursor-pointer bg-transparent border border-[rgba(90,70,62,0.8)] hover:border-[#FFB86B] text-[#B5A9A3] hover:text-[#FFB86B] text-xs font-[family-name:var(--font-jetbrains)] tracking-wider uppercase px-4 py-2.5 rounded-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A3D]"
              >
                {t("lgpd_reject")}
              </button>
              <button
                onClick={openPolicy}
                className="cursor-pointer text-[#FFB86B] text-xs font-[family-name:var(--font-jetbrains)] underline transition-colors duration-200 hover:text-[#FF8A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A3D]"
              >
                {t("lgpd_learn")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
