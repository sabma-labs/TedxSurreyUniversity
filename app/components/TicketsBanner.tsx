"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import content from "@/content/site.json";

type TicketsModalProps = {
  ticketUrl?: string;         // falls back to site.ticketsUrl
  title?: string;
  subtitle?: string;
};

export default function TicketsModal({
  ticketUrl,
  title = "Tickets are open!",
  subtitle = "Limited early birds — secure your seat now.",
}: TicketsModalProps) {
  const [open, setOpen] = useState(true); // always show on load
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstBtnRef = useRef<HTMLAnchorElement>(null);

  // lock scroll + soften background
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.classList.add("tedx-modal-open");
    html.style.overflow = "hidden";
    firstBtnRef.current?.focus();
    return () => {
      html.classList.remove("tedx-modal-open");
      html.style.overflow = prev;
    };
  }, [open]);

  // focus trap + Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab") return;
      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'
      );
      if (!nodes?.length) return;
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); (last as HTMLElement).focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); (first as HTMLElement).focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const dismiss = useCallback(() => setOpen(false), []);
  if (!open) return null;

  const url = ticketUrl ?? (content as any).event.ticketsUrl;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop keeps site visible but dimmed/blurred */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      {/* Dialog (white, centered, no header divider) */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tedx-modal-title"
        aria-describedby="tedx-modal-desc"
        className="relative mx-4 w-full max-w-xl rounded-2xl border border-black/10 bg-white text-neutral-900 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
      >
        {/* Subtle TEDx red top accent */}
        {/* <div className="h-1 w-full rounded-t-2xl bg-[#E62B1E]" aria-hidden="true" /> */}

        {/* Header (no bottom border, centered) */}
        <div className="px-6 pt-5 text-center">
          {/* Logo + name from site.json */}
          {/* <div className="mx-auto mb-3 inline-flex items-center gap-3">
            {content.brand.logoUrl ? (
              <Image src={content.brand.logoUrl} alt={(content as any).brand.logoUrl ?? "Site logo"} width={28} height={28} />
            ) : (
              <span className="inline-block h-7 w-7 rounded-sm bg-[#E62B1E]" aria-hidden="true" />
            )}
            <span className="text-sm text-neutral-500">{(content as any).name ?? "TEDxSurreyUniversity"}</span>
          </div> */}

          {/* Big title */}
          <h2 id="tedx-modal-title" className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {title}
          </h2>
          <p id="tedx-modal-desc" className="mt-3 text-base text-neutral-700">
            {subtitle}
          </p>

          {/* Badge */}
          {/* <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
            <span className="inline-block h-2 w-2 rounded-full bg-[#E62B1E]" />
            Limited early birds
          </div> */}
        </div>

        {/* Actions (centered) */}
        <div className="px-6 pb-6 pt-5">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              ref={firstBtnRef}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-xl bg-[#E62B1E] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(230,43,30,0.35)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E62B1E]/60 transition"
            >
              Get Tickets
            </a>
            <button
              onClick={dismiss}
              className="inline-flex justify-center rounded-xl border border-black/10 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition"
              aria-label="Close announcement and continue to site"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
