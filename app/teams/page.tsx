"use client";
import * as React from "react";
import NavBar from "@/app/components/NavBar";
import contentTeams from "@/content/site.json";
import Footer from "@/app/components/Footer";

import { motion } from "framer-motion";

function TeamCard({ person }: { person: any }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-red-500/40 hover:bg-neutral-50 transition">
      <div className="aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={person?.photo} alt={person?.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="font-semibold">{person?.name}</div>
        <div className="text-sm text-red-600">{person?.role}</div>
        {person?.bio && <p className="mt-2 text-sm text-neutral-600">{person.bio}</p>}
      </div>
    </motion.div>
  );
}

export default function TeamsPage() {
  const teams = (contentTeams as any)?.teams || [];
  return (
    <div className="text-neutral-900 bg-neutral-50 min-h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Meet the Team</h1>
        <p className="mt-3 text-neutral-600">Organizing committee, production, partnerships, and more.</p>

        {teams.map((t: any, idx: number) => (
          <section key={t?.name || idx} className="mt-10 border-t border-neutral-200 pt-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold">{t?.name}</h2>
            {t?.description && <p className="mt-2 text-neutral-600">{t.description}</p>}

            {/* Heads */}
            {Array.isArray(t?.heads) && t.heads.length > 0 && (
              <div className="mt-6">
                <div className="text-sm text-neutral-500 uppercase tracking-widest">Heads</div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {t.heads.map((p: any, i: number) => <TeamCard key={p?.name || i} person={p} />)}
                </div>
              </div>
            )}

            {/* Members */}
            {Array.isArray(t?.members) && t.members.length > 0 && (
              <div className="mt-8">
                <div className="text-sm text-neutral-500 uppercase tracking-widest">Members</div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {t.members.map((p: any, i: number) => <TeamCard key={p?.name || i} person={p} />)}
                </div>
              </div>
            )}
          </section>
        ))}
      </main>
      <Footer/>
    </div>
  );
}
