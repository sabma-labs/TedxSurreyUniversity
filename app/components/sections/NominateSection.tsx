import content from "@/content/site.json";

export default function NominateSection() {
  const brand = (content as any)?.brand?.name || "our TEDx";
  const url = (content as any)?.nominateSpeakerUrl || "#";

  return (
    <section id="nominate" className="py-16 sm:py-20 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white">
          {/* subtle on-brand glow */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-red-500/15 blur-3xl" />
            <div className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-neutral-900/5 blur-3xl" />
          </div>

          <div className="relative px-6 sm:px-10 py-12">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Have an idea worth spreading?
            </h3>
            <p className="mt-3 text-neutral-700 text-lg max-w-2xl">
              Suggest a speaker—or nominate yourself—for {brand}. We’re looking for powerful,
              original ideas that spark curiosity and action.
            </p>

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-500 transition"
            >
              Nominate a Speaker
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
