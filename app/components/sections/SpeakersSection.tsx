"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import content from "@/content/site.json";

export default function SpeakersSection() {
  const speakers = (((content as any)?.speakers?.people) || []) as any[];
  const hasSpeakers = Array.isArray(speakers) && speakers.length > 0;

  const eventTitle = (content as any)?.event?.title || "Echoes of What’s Next";

  return (
    <section id="speakers" className="py-16 sm:py-20 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {(content as any)?.speakers?.heading || "Speakers"}
        </h2>
      </div>

      {hasSpeakers ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((p: any, idx: number) => (
            <SpeakerCard key={idx} speaker={p} />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="rounded-3xl border border-neutral-200 bg-white p-10 text-center">
            <h3 className="text-3xl font-bold">Calling All Speakers</h3>
            <p className="mt-3 text-neutral-700 text-lg max-w-3xl mx-auto">
              Speaker lineup coming soon. Stay tuned.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function SpeakerCard({ speaker }: any) {
  const [open, setOpen] = useState(false);

  const talkTitle = speaker?.talk_title || speaker?.title;
  const idea = speaker?.idea_statement || speaker?.Idea || speaker?.IdeaStatement || speaker?.["Idea statement"];

  const shortBio = speaker.bio?.slice(0, 160) + (speaker.bio.length > 160 ? "..." : "");

  return (
    <motion.div
      
      className="group rounded-3xl overflow-hidden bg-white border border-neutral-200 hover:shadow-xl transition relative"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={speaker.photo} alt={speaker.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
      </div>

      <div className="p-6 relative">
        <h3 className="font-bold text-xl text-neutral-900">{speaker.name}</h3>

        {/* TALK TITLE WITH CLEAN PROFESSIONAL STYLE & TOOLTIP */}
        <div className="relative inline-block mt-1">
          <p className="text-2xl font-bold text-black underline mt-1"
            
          >
            {talkTitle}
          </p>

        </div>

        <p className="mt-3 text-sm text-neutral-600">{shortBio}</p>

        {speaker.bio.length > 160 && (
          <button
            onClick={() => setOpen(true)}
            className="mt-3 text-red-600 font-semibold text-sm hover:text-red-700"
          >
            Read more
          </button>
        )}
      </div>

      {/* FULL BIO MODAL */}
      {/* FULL BIO MODAL */}
{open && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={() => setOpen(false)}
  >
    <div
      className="bg-white max-w-lg w-full p-8 rounded-3xl shadow-2xl relative overflow-y-auto max-h-[85vh]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition"
      >
        ✕
      </button>

      {/* Speaker Image */}
      <div className="flex justify-center">
        <img
          src={speaker.photo}
          alt={speaker.name}
          className="w-32 h-32 rounded-full object-cover shadow-lg border border-neutral-200"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold text-neutral-900 text-center mt-4">
        {speaker.name}
      </h3>

      {/* Talk Title */}
      <p className="mt-1 text-lg font-semibold text-black-700 text-center">
        {talkTitle}
      </p>

      {/* Idea Statement */}
      {idea && (
        <div className="mt-6 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-900 text-sm">
          <p className="font-semibold mb-2 text-center">Idea Statement</p>
          <p className="text-center">{idea}</p>
        </div>
      )}

      {/* BIO */}
      <p className="mt-6 text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
        {speaker.bio}
      </p>

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="mt-8 w-full py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-500 transition"
      >
        Close
      </button>
    </div>
  </div>
)}

    </motion.div>
  );
}
