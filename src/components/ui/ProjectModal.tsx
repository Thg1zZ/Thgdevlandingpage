"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, ImageOff, Layers3, Link as LinkIcon, X } from "lucide-react";
import type { projects } from "@/lib/data";
import { projectDetails, type ProjectDetails } from "@/lib/projectDetails";
import { useLanguageTheme } from "@/context/LanguageThemeContext";
import { GithubIcon } from "./Icons";
import { projectUrl } from "@/lib/projectLinks";

type Project = (typeof projects)[number];
type Language = "pt" | "en";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const copy = {
  pt: {
    project: "Projeto em detalhe", close: "Fechar detalhes do projeto",
    share: "Copiar link", copied: "Link copiado!", copyError: "Não foi possível copiar. Copie o link da barra de endereço.",
    overview: "A ideia por trás", features: "O que o projeto faz",
    architecture: "Como foi construído", validation: "Testes e contexto",
    stack: "Tecnologias", code: "Explorar código", live: "Abrir demonstração",
    gallery: "Por dentro do projeto", previous: "Imagem anterior", next: "Próxima imagem",
    original: "Ver original", unavailable: "Não foi possível carregar esta imagem.",
    noPhotos: "Visão do funcionamento",
    noPhotosNote: "Apresentação do fluxo do projeto. Capturas de tela não disponíveis.",
  },
  en: {
    project: "Project in detail", close: "Close project details",
    share: "Copy link", copied: "Link copied!", copyError: "Could not copy. Copy the link from the address bar.",
    overview: "The idea behind it", features: "What the project does",
    architecture: "How it was built", validation: "Testing and context",
    stack: "Technologies", code: "Explore code", live: "Open demo",
    gallery: "Inside the project", previous: "Previous image", next: "Next image",
    original: "View original", unavailable: "This image could not be loaded.",
    noPhotos: "Workflow overview",
    noPhotosNote: "A presentation of the project flow. Screenshots are unavailable.",
  },
};

function GalleryImage({ image, lang }: { image: ProjectDetails["images"][number]; lang: Language }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-text-2" role="status">
      <ImageOff size={28} aria-hidden="true" />
      <p className="px-4 text-center text-sm">{copy[lang].unavailable}</p>
    </div>
  ) : (
    <Image src={`${basePath}/projects/${image.src}`} alt={image.caption[lang]} fill sizes="(max-width: 768px) 90vw, 960px" className="object-contain" onError={() => setFailed(true)} />
  );
}

function Gallery({ images, lang }: { images: ProjectDetails["images"]; lang: Language }) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  const t = copy[lang];

  return (
    <section aria-label={t.gallery} className="overflow-hidden rounded-2xl border border-border/60 bg-bg-3/50">
      <div className="flex items-center justify-between border-b border-border/40 px-4 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-2">{t.gallery}</span>
        <span className="font-mono text-xs text-accent" aria-live="polite" aria-atomic="true">{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </div>
      <div className="relative aspect-[16/10] max-h-[40dvh] w-full bg-bg sm:aspect-video">
        <GalleryImage key={current.src} image={current} lang={lang} />
      </div>
      <div className="flex items-center gap-3 border-t border-border/40 p-4">
        <div className="min-w-0 flex-1">
          <p className="text-sm text-text">{current.caption[lang]}</p>
          <a href={current.source || `${basePath}/projects/${current.src}`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs text-accent hover:underline">{t.original} <ArrowUpRight size={12} aria-hidden="true" /></a>
        </div>
        <button type="button" onClick={() => setIndex((index + images.length - 1) % images.length)} aria-label={t.previous} className="project-icon-button"><ChevronLeft size={18} /></button>
        <button type="button" onClick={() => setIndex((index + 1) % images.length)} aria-label={t.next} className="project-icon-button"><ChevronRight size={18} /></button>
      </div>
      <div className="flex gap-2 overflow-x-auto px-4 pb-4" aria-label={t.gallery}>
        {images.map((image, i) => (
          <button key={image.src} type="button" onClick={() => setIndex(i)} aria-label={image.caption[lang]} aria-pressed={i === index} className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border-2 bg-bg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${i === index ? "border-accent" : "border-transparent hover:border-border"}`}>
            <Image src={`${basePath}/projects/${image.src}`} alt="" fill sizes="96px" className="object-contain" />
          </button>
        ))}
      </div>
    </section>
  );
}

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const { lang } = useLanguageTheme();
  const details = projectDetails[project.num];
  const t = copy[lang];
  const isLive = !project.link.includes("github.com");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(projectUrl(window.location.href, project.num));
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    if (dialog && !dialog.open) {
      triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog ref={dialogRef} aria-labelledby="project-modal-title" onClose={onClose}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
      }}
      className="project-dialog m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-3xl border border-border bg-bg-2 p-0 text-text shadow-[0_32px_120px_rgba(0,0,0,0.55)]"
    >
      <div className="flex max-h-[92dvh] flex-col">
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border/50 bg-bg-2 px-5 py-4 sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-2"><span className="text-accent">{project.num}</span><span className="mx-3 text-border">/</span>{t.project}</p>
          <button type="button" autoFocus aria-label={t.close} onClick={() => dialogRef.current?.close()} className="project-icon-button"><X size={19} /></button>
        </div>

        <div className="min-h-0 overflow-y-auto overscroll-contain px-5 pb-8 sm:px-8 sm:pb-10">
          <header className="relative py-8 sm:py-10">
            <div aria-hidden="true" className="pointer-events-none absolute right-0 top-4 h-32 w-48 rounded-full bg-accent/8 blur-3xl" />
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">{details.category[lang]}</p>
            <h2 id="project-modal-title" className="relative max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-5xl">{project.title[lang]}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-2 sm:text-base">{project.description[lang]}</p>
          </header>

          {details.images.length > 0 ? <Gallery images={details.images} lang={lang} /> : (
            <section aria-label={t.noPhotos} className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/8 via-bg-3/40 to-transparent p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3 text-accent"><Layers3 size={22} aria-hidden="true" /><h3 className="font-mono text-xs uppercase tracking-widest">{t.noPhotos}</h3></div>
              <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {details.flow[lang].map((step, i) => <li key={step} className="rounded-xl border border-border/50 bg-bg/50 p-4"><span className="mb-3 block font-mono text-[10px] text-accent">0{i + 1} <ArrowRight size={12} className="ml-2 inline" aria-hidden="true" /></span><span className="text-sm text-text">{step}</span></li>)}
              </ol>
              <p className="mt-5 text-xs leading-relaxed text-text-2">{t.noPhotosNote}</p>
            </section>
          )}

          <div className="mt-9 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
            <div className="space-y-8">
              <section><h3 className="mb-3 font-serif text-2xl font-semibold">{t.overview}</h3><p className="text-sm leading-7 text-text-2">{details.overview[lang]}</p></section>
              <section><h3 className="mb-4 font-serif text-2xl font-semibold">{t.features}</h3><ul className="space-y-3">{details.features[lang].map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-text-2"><Check size={15} className="mt-1 shrink-0 text-accent" aria-hidden="true" /><span>{feature}</span></li>)}</ul></section>
            </div>
            <aside className="space-y-6 rounded-2xl border border-border/50 bg-bg-3/40 p-5 sm:p-6">
              <section><h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">{t.stack}</h3><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md border border-border/60 bg-bg/50 px-2.5 py-1 font-mono text-[10px] text-text-2">{tag}</span>)}</div></section>
              <section className="border-t border-border/50 pt-5"><h3 className="mb-3 font-serif text-xl font-semibold">{t.architecture}</h3><p className="text-sm leading-7 text-text-2">{details.architecture[lang]}</p></section>
            </aside>
          </div>
          <section className="mt-8 border-t border-border/50 pt-6"><h3 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">{t.validation}</h3><p className="max-w-4xl text-sm leading-7 text-text-2">{details.validation[lang]}</p></section>
        </div>

        <footer className="flex shrink-0 flex-wrap items-center justify-end gap-3 border-t border-border/50 bg-bg-2 px-5 py-4 sm:px-8">
          <p role="status" className="w-full text-right text-xs text-text-2 empty:hidden">{copyStatus === "copied" ? t.copied : copyStatus === "error" ? t.copyError : ""}</p>
          <button type="button" onClick={copyLink} className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><LinkIcon size={16} aria-hidden="true" />{t.share}</button>
          <a href={details.repository} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><GithubIcon size={16} />{t.code}<ArrowUpRight size={14} aria-hidden="true" /></a>
          {isLive && <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-on-accent transition-colors hover:bg-accent-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{t.live}<ArrowUpRight size={14} aria-hidden="true" /></a>}
        </footer>
      </div>
    </dialog>
  );
}
