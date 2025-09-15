import content from "@/content/site.json";

export default function WhatIsTedxSection() {
  return (
    <section id="what-is-tedx" className="py-16 sm:py-20 border-t border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          {(content as any)?.whatIsTedx?.heading || "What is TEDx?"}
        </h2>
        <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
          {(content as any)?.whatIsTedx?.body ||
            `In the spirit of discovering and spreading ideas, TED has created a program called TEDx.
             TEDx is a program of local, self-organized events that bring people together to share a TED-like
             experience. Our event is called ${(content as any)?.brand?.name || "TEDx[Name]"}, where x = independently organized TED event.`}
        </p>
        <a
          href="https://www.ted.com/tedx"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 rounded-full border border-neutral-300 px-5 py-2 font-semibold hover:bg-neutral-100"
        >
          Learn more about the TEDx program
        </a>
      </div>
    </section>
  );
}
