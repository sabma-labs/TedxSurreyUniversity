import React from 'react';
import { 
  Globe2, 
  Mic2, 
  Radio, 
  Users, 
  Sparkles, 
  FileDown, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Menu,
  X
} from "lucide-react";
import content from "@/content/site.json";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";


export default function SponsorsPage() {
  const brand = (content as any)?.brand?.name || "TEDxSurreyUniversity";
  const deckUrl = (content as any)?.sponsorship?.deckUrl || "#";
  const formUrl = (content as any)?.sponsorship?.formUrl || "#";
  const mainSponsor = (content as any)?.sponsorship?.mainSponsor || null;

  const heroBg: React.CSSProperties = {
    background:
      "radial-gradient(1200px 700px at 50% -20%, rgba(239,68,68,0.15) 0%, transparent 60%)," +
      "linear-gradient(#0a0a0a, #0a0a0a)",
  };

  const bullets = [
    {
      icon: Globe2,
      title: "Global Exposure",
      desc: "Logo placement in pre/post-roll of official TEDx YouTube talks, reaching millions worldwide.",
    },
    {
      icon: Mic2,
      title: "On-Stage Recognition",
      desc: "Live host acknowledgement and prominent stage slides during the opening and closing ceremonies.",
    },
    {
      icon: Radio,
      title: "Livestream Visibility",
      desc: "Real-time branding for our international livestream audience across 50+ countries.",
    },
    {
      icon: Users,
      title: "Community Presence",
      desc: "Physical branding on delegate packs, programme guides, and the popular photo wall.",
    },
    {
      icon: Sparkles,
      title: "Innovation Showcase",
      desc: "Dedicated interactive zone to demo your products to students, academics, and leaders.",
    },
    {
      icon: Star,
      title: "VIP Networking",
      desc: "Exclusive access to the speakers' dinner and VIP networking sessions post-event.",
    },
  ];

  const stats = [
    { label: "YouTube Subscribers", value: "37M+" },
    { label: "Campus Attendees", value: "100+" },
    { label: "Livestream Reach", value: "Global" },
    { label: "Brand Impression", value: "High" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-red-100 selection:text-red-900">
      <NavBar />

      {/* --- HERO SECTION --- */}
      <section style={heroBg} className="relative overflow-hidden text-white">
        {/* Abstract background noise/grain could go here */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Partnership Opportunities 2025
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Partner with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                {brand}
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl leading-relaxed">
              Amplify ideas that matter. Align your brand with a global movement and a creative,
              ambitious community on campus and beyond.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-500 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Become a Sponsor <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={deckUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                <FileDown size={18} />
                Download Deck
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="border-b border-neutral-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-neutral-100 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-10 text-center hover:bg-neutral-50 transition-colors">
              <div className="text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MAIN SPONSOR (REDESIGNED) --- */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-neutral-50"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }}></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-red-100/50 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-neutral-200/50 to-transparent blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-red-600">Headline Partner</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Leading the conversation</p>
          </div>

          {mainSponsor ? (
            /* --- STATE: SPONSOR EXISTS --- */
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-neutral-200/60">
               {/* Top "Premium" Banner */}
               <div className="bg-neutral-900 px-6 py-3 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-between gap-4">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" /> 
                      Official Headline Sponsor
                    </span>
                    <span className="hidden sm:block text-xs text-neutral-400">2025 Season</span>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row">
                 {/* Logo Section */}
                 <div className="flex flex-col items-center justify-center bg-neutral-50 p-10 md:w-2/5 md:border-r border-neutral-100">
                    <div className="relative h-40 w-full max-w-[200px] transition-transform duration-500 hover:scale-105">
                      <img
                        src={mainSponsor.logoUrl}
                        alt={`${mainSponsor.name} logo`}
                        className="h-full w-full object-contain drop-shadow-sm"
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <a 
                        href={mainSponsor.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-neutral-500 hover:text-red-600 transition-colors"
                      >
                        Visit Website &rarr;
                      </a>
                    </div>
                 </div>

                 {/* Content Section */}
                 <div className="flex flex-col justify-center p-8 sm:p-12 md:w-3/5">
                    <h3 className="text-3xl font-extrabold text-neutral-900">{mainSponsor.name}</h3>
                    <div className="mt-4 h-1 w-20 rounded-full bg-red-600"></div>
                    <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                      {mainSponsor.blurb || "Proudly supporting the dissemination of ideas that change the world. Through this partnership, we are empowering the next generation of innovators."}
                    </p>
                    
                    {/* <div className="mt-8 flex flex-wrap gap-3">
                      <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Main Stage</span>
                      <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Delegate Packs</span>
                      <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Livestream</span>
                    </div> */}
                 </div>
               </div>
            </div>
          ) : (
             /* --- STATE: OPEN FOR SPONSORSHIP --- */
             <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border-2 border-dashed border-neutral-300 bg-white/50 p-8 text-center transition-all hover:border-red-500/50 hover:bg-white hover:shadow-xl sm:p-16">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 group-hover:bg-red-50 transition-colors">
                  <Star className="h-10 w-10 text-neutral-400 group-hover:text-red-500 transition-colors" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-neutral-900">Headline Sponsorship Available</h3>
                <p className="mx-auto mt-4 max-w-lg text-neutral-600">
                  This premier spot is reserved for a visionary partner. Gain maximum visibility across all our channels and position your brand at the forefront of innovation.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <a href={formUrl} target="_blank" className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 transition-colors">
                    Inquire Now
                  </a>
                  <a href={deckUrl} download className="rounded-full bg-white border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm hover:bg-neutral-50 transition-colors">
                    View Benefits
                  </a>
                </div>
             </div>
          )}
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">Why partner with us?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Our partners don't just put a logo on a wall. They become part of the story, engaging with a diverse audience of thinkers and doers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bullets.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-200/50 hover:border-red-200"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-neutral-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
            {/* Dark abstract art */}
            <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="#E62B1E" />
                  <stop offset="1" stopColor="#E62B1E" />
                </radialGradient>
              </defs>
            </svg>
            
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to co-create something exceptional?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              Tell us about your goals — we’ll share tailored options and timelines for “Echoes of What’s Next”.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={formUrl}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started
              </a>
              <a href={deckUrl} className="text-sm font-semibold leading-6 text-white hover:text-red-400 transition-colors">
                Download Prospectus <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div> 
  );
}
