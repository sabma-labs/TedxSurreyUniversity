"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";

export type VideoItem = {
  title: string;
  speaker: string;
  date?: string;
  Views?: string | number; // capital V (as in your JSON)
  views?: string | number; // lowercase accepted too
  youtubeId?: string;
  url?: string;
  thumbnail?: string;
};

function getYoutubeId(url: string | undefined) {
  if (!url) return undefined;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return v;
      const parts = u.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" && parts[1]) return parts[1];
    }
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
  } catch {}
  return undefined;
}

function getThumb(v: VideoItem) {
  const id = v.youtubeId || getYoutubeId(v.url);
  return v.thumbnail || (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined);
}

function getViews(v: VideoItem) {
  const raw = (v as any).Views ?? (v as any).views;
  if (raw == null) return undefined;
  const s = String(raw).trim();
  // If numeric, compact-format; otherwise pass through (e.g., "1.6M")
  const n = Number(s.replace(/[^0-9.]/g, ""));
  if (!isNaN(n) && /^[0-9.]+$/.test(s)) {
    try {
      return Intl.NumberFormat(undefined, { notation: "compact" }).format(n);
    } catch {
      return n.toLocaleString();
    }
  }
  return s;
}

const SLIDE_MS = 6500;

export default function VideoGallery({ videos }: { videos: VideoItem[] }) {
  const slides = (videos || []).map((v) => ({
    ...v,
    _id: (v.youtubeId || getYoutubeId(v.url) || v.title) + (v.speaker ? `-${v.speaker}` : ""),
    _thumb: getThumb(v),
    _views: getViews(v),
  }));

  const [active, setActive] = React.useState(0);
  const [modal, setModal] = React.useState<VideoItem | null>(null);
  const count = slides.length;

  // Autoplay (pause on hover; respect reduced motion)
  const hoverRef = React.useRef(false);
  React.useEffect(() => {
    if (count <= 1) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      if (!hoverRef.current) setActive((i) => (i + 1) % count);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [count]);

  const go = (i: number) => setActive(((i % count) + count) % count);
  const prev = () => go(active - 1);
  const next = () => go(active + 1);

  // Keyboard nav
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (modal) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal, active]);

  if (count === 0) return null;

  const activeSlide = slides[active];
  const activeId = activeSlide.youtubeId || getYoutubeId(activeSlide.url);

  return (
    <div
      className="relative overflow-hidden bg-transparent"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      aria-roledescription="carousel"
    >
      {/* Slide progress bar */}
      {count > 1 && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-[5]">
          <motion.div
            key={active}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
            className="h-full bg-white/70"
          />
        </div>
      )}

      {/* Slides */}
      <div className="relative aspect-[16/9] w-full">
        <AnimatePresence initial={false} mode="popLayout">
          {slides.map((v, i) =>
            i === active ? (
              <motion.button
                key={v._id}
                className="absolute inset-0 w-full h-full text-left group"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                onClick={() => setModal(v)}
                aria-label={`Play video: ${v.title}`}
              >
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {v._thumb ? (
                  <img
                    src={v._thumb}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-95"
                  />
                ) : (
                  <div className="absolute inset-0 bg-neutral-800" />
                )}

                {/* Stylized overlays (TEDxCambridge-like cinematic glow) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
                <div className="absolute -left-32 -top-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
                <div className="absolute -right-32 -bottom-40 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

                {/* Big Play affordance */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full border border-white/40 bg-black/30 backdrop-blur-sm p-5 sm:p-6 group-hover:bg-black/50 transition">
                    <Play className="text-white h-7 w-7 sm:h-9 sm:w-9" />
                  </div>
                </div>

                {/* Title overlay (bottom-left) */}
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <h3 className="text-white font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                    {v.title}
                  </h3>
                </div>
              </motion.button>
            ) : null
          )}
        </AnimatePresence>

        {/* Controls */}
        {count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous video"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 p-2 text-white"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next video"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 p-2 text-white"
            >
              <ChevronRight />
            </button>
          </>
        )}

        {/* Dots */}
        {count > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-[5]">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition ${
                  i === active ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info row (below image, still inside black card) */}
      <div className="px-6 sm:px-8 py-5 border-t border-white/10 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xl sm:text-2xl font-bold leading-snug">{activeSlide.title}</div>
            <div className="mt-1 text-sm sm:text-base text-white/80 flex flex-wrap items-center gap-x-3 gap-y-1">
              {activeSlide.speaker && (
                <span>
                  by <span className="font-medium text-white">{activeSlide.speaker}</span>
                </span>
              )}
              {activeSlide._views && <span>• {activeSlide._views} views</span>}
              {activeSlide.date && <span>• {activeSlide.date}</span>}
            </div>
          </div>

          {activeId && (
            <a
              href={`https://www.youtube.com/watch?v=${activeId}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 ring-1 ring-white/20"
            >
              Watch on YouTube <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Modal player */}
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden ring-1 ring-white/15 bg-black">
              {(() => {
                const id = modal.youtubeId || getYoutubeId(modal.url);
                if (!id) return null;
                return (
                  <iframe
                    title={modal.title}
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                );
              })()}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-white">
              <div>
                <div className="font-semibold">{modal.title}</div>
                <div className="text-white/80">
                  {modal.speaker ? `${modal.speaker}` : ""}
                  {modal.date ? ` • ${modal.date}` : ""}
                  {getViews(modal) ? ` • ${getViews(modal)} views` : ""}
                </div>
              </div>
              <button
                onClick={() => setModal(null)}
                className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
