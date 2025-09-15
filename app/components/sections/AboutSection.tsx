import content from "@/content/site.json";

type AboutLink = { label: string; url: string };

export default function AboutSection() {
  const about = (content as any)?.about || {};
  const heading = about.heading || "About the Event";
  const body: string | undefined = about.body;
  const bodyHtml: string | undefined = (about as any)?.bodyHtml;

  const links: AboutLink[] = Array.isArray((about as any)?.links) ? (about as any).links : [];
  const finalLinks = links.length
    ? links
    : [
        { label: "About TEDx", url: "https://www.ted.com/tedx" },
        { label: "About TED", url: "https://www.ted.com/about/our-organization" },
      ];

  const renderBody = () => {
    if (bodyHtml) {
      return (
        <div
          className="about-rich text-lg text-neutral-700 leading-relaxed text-justify space-y-5"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      );
    }
    const paragraphs = (body || "").split(/\n\s*\n/).filter(Boolean);
    return (
      <div className="about-rich text-lg text-neutral-700 leading-relaxed text-justify space-y-5">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white">
          {/* soft, on-brand glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-neutral-900/5 blur-3xl" />
          </div>

          <div className="relative px-6 sm:px-10 py-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {heading}
            </h2>

            <div className="mt-5 max-w-3xl">{renderBody()}</div>

            {/* Prominent link buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              {finalLinks.map((l, idx) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    idx === 0
                      ? "inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition"
                      : "inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 transition"
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
