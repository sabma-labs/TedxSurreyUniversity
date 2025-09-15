import content from "@/content/site.json";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { Globe2, Mic2, Radio, Users, Sparkles, FileDown, ArrowRight } from "lucide-react";

const heroBg: React.CSSProperties = {
  background:
    "radial-gradient(1200px 700px at 10% -10%, rgba(239,68,68,0.12) 0%, transparent 60%)," +
    "radial-gradient(900px 500px at 90% 0%, rgba(255,255,255,0.05) 0%, transparent 50%)," +
    "linear-gradient(#0a0a0a, #0a0a0a)",
};

export default function SponsorsPage() {
  const brand = (content as any)?.brand?.name || "TEDxSurreyUniversity";
  const deckUrl = (content as any)?.sponsorship?.deckUrl || "/docs/sponsorship-deck.pdf";
  const formUrl =
    (content as any)?.sponsorship?.microsoftFormUrl ||
    (content as any)?.sponsorship?.formUrl ||
    "#";

  const bullets = [
    {
      icon: Globe2,
      title: "Global Exposure",
      desc:
        "Logo in pre/post-roll of talks on the official TEDx YouTube channel — reaching 37M+ subscribers and billions of viewers.",
    },
    {
      icon: Mic2,
      title: "On-Stage Recognition",
      desc:
        "Host acknowledgement and stage slides during opening/closing — guaranteed visibility for every attendee.",
    },
    {
      icon: Radio,
      title: "Livestream Visibility",
      desc:
        "Logo shown at the start and end of the livestream for real-time recognition with an international audience.",
    },
    {
      icon: Users,
      title: "Community Presence",
      desc:
        "Branding on website, programme guide, delegate packs, and photo wall — featured in photography and post-event media.",
    },
    {
      icon: Sparkles,
      title: "Innovation Showcase",
      desc:
        "Interactive donor zone or demo stall to engage students, academics, industry leaders, and policymakers.",
    },
  ];

  const stats = [
    { label: "YouTube subscribers", value: "37M+" },
    { label: "Attendees on site", value: "100+" },
    { label: "Livestream reach", value: "Global" },
    { label: "Post-event views", value: "Long-tail" },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavBar />

      {/* HERO */}
      <section style={heroBg} className="text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Partner with {brand} 2025
            </h1>
            <p className="mt-4 text-white/85 text-lg md:text-xl">
              Amplify ideas that matter. Align your brand with a global movement and a creative,
              ambitious community on campus and beyond.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {/* Clean button instead of embedded form */}
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-500 transition"
              >
                Start Sponsorship Form <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={deckUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold hover:bg-white/10 transition"
              >
                <FileDown size={18} />
                Download Sponsorship Deck
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Why partner with us</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            Visibility across stage, screen, and community touchpoints — before, during, and after the event.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bullets.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 hover:border-red-500/40 hover:shadow-lg transition"
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-red-500/10 blur-2xl" />
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-red-100 p-2.5">
                    <Icon className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="mt-2 text-neutral-700 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
                <div className="text-2xl sm:text-3xl font-black text-neutral-900">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — now on WHITE background, clean & aesthetic */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm">
            {/* soft decorative light glows */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-neutral-900/5 blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  Ready to co-create something exceptional?
                </h3>
                <p className="mt-2 text-neutral-700">
                  Tell us about your goals — we’ll share tailored options and timelines for “Echoes of What’s Next”.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-500 transition"
                >
                  Start Sponsorship Form <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={deckUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-base font-semibold text-neutral-800 hover:bg-neutral-100 transition"
                >
                  Download Deck
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
