"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/lib/data";
import { useLanguageTheme } from "@/context/LanguageThemeContext";

export function Footer() {
  const openPrivacy = () => window.openPrivacyModal?.();
  const { t } = useLanguageTheme();

  return (
    <footer className="bg-[#0B0A0C] border-t border-[rgba(90,70,62,0.5)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-[family-name:var(--font-jetbrains)] text-xs text-[#7A6E69]">
          © 2025{" "}
          <span className="text-[#B5A9A3] font-medium">{personalInfo.name}</span>
          {" · thgdevlandingpage"}
          {" · "}
          <span>Next.js · TypeScript · Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A6E69] hover:text-[#FF8A3D] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A3D] rounded"
            aria-label="GitHub"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A6E69] hover:text-[#FF8A3D] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A3D] rounded"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#7A6E69] hover:text-[#FF8A3D] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A3D] rounded"
            aria-label="E-mail"
          >
            <Mail size={17} />
          </a>
        </div>

        <button
          onClick={openPrivacy}
          className="cursor-pointer font-[family-name:var(--font-jetbrains)] text-[10px] text-[#7A6E69] hover:text-[#FF8A3D] underline tracking-wider uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A3D] rounded"
        >
          {t("footer_privacy")}
        </button>
      </div>
    </footer>
  );
}
