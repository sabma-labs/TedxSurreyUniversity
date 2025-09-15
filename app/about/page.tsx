"use client";
import * as React from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

import content from "@/content/site.json";

export default function AboutPage() {
  return (
    <div className="text-neutral-900 bg-neutral-50 min-h-screen">
      <NavBar />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Combined About (event) + About TEDx/TED */}
        <section>
          <h1 className="text-3xl sm:text-4xl font-extrabold">{content?.about?.heading || "About the Event"}</h1>
          <p className="mt-4 text-neutral-600 leading-relaxed">{content?.about?.body || ""}</p>
        </section>
        <section className="mt-12 border-t border-neutral-200 pt-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold">{(content as any)?.aboutTedx?.heading || "About TEDx (x = independently organized event)"}</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">{(content as any)?.aboutTedx?.body || ""}</p>
        </section>
        <section className="mt-12 border-t border-neutral-200 pt-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold">{(content as any)?.aboutTed?.heading || "About TED"}</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">{(content as any)?.aboutTed?.body || ""}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="https://www.ted.com/tedx" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-100">TEDx program</a>
            <a href="https://www.ted.com" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-100">TED.com</a>
          </div>
        </section>
      </main>
      <footer/>
    </div>
  );
}
