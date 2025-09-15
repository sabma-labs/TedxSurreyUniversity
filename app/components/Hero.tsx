"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Play, ArrowRight, AlertCircle } from "lucide-react";
import content from "@/content/site.json";

export default function Hero() {
  const defaultHeroImages = [
    "https://wallpapers.com/images/high/tedx-talks-stage-xzjpyk9daylbvjne.webp",
  ];
  const heroImages =
    (((content as any)?.hero?.background?.images as string[]) || defaultHeroImages).filter(Boolean);
  const heroBg = heroImages[0];
  const hasHeroImage = Boolean(heroBg);
  const heroPosition =
    ((content as any)?.hero?.background?.position as string) || "center 66%";

  const onHeroPrimary = hasHeroImage
    ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
    : "text-neutral-900";
  const onHeroSecondary = hasHeroImage
    ? "text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
    : "text-neutral-600";

  const socials = (content as any)?.contact?.socials || {};
  const ticketSalesOpen = Boolean((content as any)?.event?.ticketSalesOpen);
  const [ticketsModal, setTicketsModal] = React.useState(false);
  const proposeUrl =
  (content as any)?.registerToSpeakUrl ||
  (content as any)?.nominateSpeakerUrl ||
  "https://forms.office.com/e/K8Ki8Jkd7D";

  return (
    <>
      <section
        id="home"
        className={"relative overflow-hidden bg-cover " + (hasHeroImage ? "text-white" : "text-neutral-900")}
        style={
          hasHeroImage
            ? {
                backgroundImage: `linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.85)), url('${heroBg}')`,
                backgroundPosition: heroPosition,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
            : undefined
        }
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`font-black leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${onHeroPrimary}`}
          >
            {(content as any)?.event?.title || "Ideas Worth Spreading"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mt-4 text-xl sm:text-2xl md:text-3xl ${onHeroSecondary}`}
          >
            {(content as any)?.event?.tagline || "Bold ideas. Local voices. Global impact."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 text-base"
          >
            <div className="flex items-center gap-2 rounded-full bg-black/40 ring-1 ring-white/10 px-3 py-1.5">
              <Calendar size={18} className="text-red-500" />
              <span className="text-white/90">{(content as any)?.event?.dateLabel}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-black/40 ring-1 ring-white/10 px-3 py-1.5">
              <Clock size={18} className="text-red-500" />
              <span className="text-white/90">{(content as any)?.event?.timeLabel}</span>
            </div>
            <a
              href={(content as any)?.event?.addressLink || "#"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-black/40 ring-1 ring-white/10 px-3 py-1.5 hover:bg-black/50 transition"
            >
              <MapPin size={18} className="text-red-500" />
              <span className="text-white/90">{(content as any)?.event?.location}</span>
            </a>
          </motion.div>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-4">
            {ticketSalesOpen ? (
              <a
                href={(content as any)?.event?.registerUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-500 transition"
              >
                Get Tickets <ArrowRight size={18} />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setTicketsModal(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600/60 px-6 py-3 text-base font-semibold text-white cursor-pointer hover:bg-red-600/70"
                aria-disabled="true"
              >
                Get Tickets <ArrowRight size={18} />
              </button>
            )}

            {/* {(content as any)?.event?.trailerUrl && (
              <a
                href={(content as any).event.trailerUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition border border-white/40 hover:bg-white/10"
              >
                Watch Trailer <Play size={18} />
              </a>
            )} */}
            {/* New: Propose a Speaker */}
            {proposeUrl && (
              <a
                href={proposeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition border border-white/40 hover:bg-white/10"
              >
                Propose a Speaker
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Tickets Modal */}
      {ticketsModal && (
        <div className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setTicketsModal(false)}>
          <div className="max-w-md w-full rounded-2xl bg-white p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="text-red-600" />
            </div>
            <h3 className="text-xl font-bold">Ticket sales will start soon</h3>
            <p className="mt-2 text-neutral-600">
              We’re finalizing details. Follow our social channels for the announcement!
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-neutral-700">
              {(content as any)?.contact?.socials?.instagram && (
                <a href={(content as any).contact.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-red-600">Instagram</a>
              )}
              {(content as any)?.contact?.socials?.linkedin && (
                <a href={(content as any).contact.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-600">LinkedIn</a>
              )}
              {(content as any)?.contact?.socials?.youtube && (
                <a href={(content as any).contact.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-red-600">YouTube</a>
              )}
            </div>
            <button onClick={() => setTicketsModal(false)} className="mt-6 inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-500">
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
