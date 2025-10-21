import content from "@/content/site.json";

export default function EchoesSection() {
  const echoes = (content as any)?.echoes || {};
  const heading: string = echoes.heading || "Echoes of What’s Next";
  const bodyHtml: string | undefined = (echoes as any)?.bodyHtml;

  // Default copy (with the title phrase in italics)
  const defaultBody = `
    The future is already whispering — in the innovations we create, the questions we ask, and the choices we make today.
    <em>Echoes of What’s Next</em> invites us to explore how today’s ideas ripple forward to shape tomorrow’s world.
    Every idea, conversation, and action plays a part in building the world ahead.
  `;

  return (
    <section id="echoes" className="py-16 sm:py-20 border-t border-neutral-200">
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

            <div
              className="mt-5 about-rich max-w-3xl text-lg text-neutral-700 leading-relaxed text-justify space-y-5"
              // Prefer content.echoes.bodyHtml if provided; otherwise use default
              dangerouslySetInnerHTML={{ __html: bodyHtml || defaultBody }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
