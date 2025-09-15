// "use client";

// import { motion } from "framer-motion";
// import { AlertCircle } from "lucide-react";
// import content from "@/content/site.json";

// export default function SpeakersSection() {
//   const speakers = (((content as any)?.speakers?.people) || []) as any[];
//   const hasSpeakers = Array.isArray(speakers) && speakers.length > 0;

//   return (
//     <section id="speakers" className="py-16 sm:py-20 border-t border-neutral-200">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
//           {(content as any)?.speakers?.heading || "Speakers"}
//         </h2>
//       </div>

//       {hasSpeakers ? (
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {speakers.map((p: any, idx: number) => (
//             <motion.div
//               key={p?.name || idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-red-500/40 hover:bg-neutral-50 transition"
//             >
//               <div className="aspect-[4/3] overflow-hidden">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img src={p?.photo} alt={p?.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
//               </div>
//               <div className="p-5">
//                 <h3 className="font-bold text-lg">{p?.name}</h3>
//                 <p className="text-red-600 text-sm">{p?.title}</p>
//                 <p className="mt-2 text-sm text-neutral-600">{p?.bio}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
//           <div className="max-w-4xl rounded-2xl border border-dashed border-neutral-300 bg-white p-8 sm:p-10 flex items-center gap-4">
//             <AlertCircle className="text-red-600 shrink-0" />
//             <p className="text-neutral-700 text-lg">
//               Speaker lineup <span className="font-semibold">coming soon</span>. Check back shortly—we’re curating an exciting set of talks.
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import content from "@/content/site.json";

export default function SpeakersSection() {
  const speakers = (((content as any)?.speakers?.people) || []) as any[];
  const hasSpeakers = Array.isArray(speakers) && speakers.length > 0;

  // URLs for CTAs
  const nominateUrl =
    (content as any)?.nominateSpeakerUrl || "https://forms.office.com/e/K8Ki8Jkd7D";
  // Optional separate form for “register to speak”; falls back to nominate if not set
  const registerToSpeakUrl =
    (content as any)?.registerToSpeakUrl || nominateUrl || "https://forms.office.com/e/K8Ki8Jkd7D";

  // Title reference
  const eventTitle =
    (content as any)?.event?.title || "Echoes of What’s Next";

  return (
    <section id="speakers" className="py-16 sm:py-20 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {(content as any)?.speakers?.heading || "Speakers"}
        </h2>
      </div>

      {hasSpeakers ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((p: any, idx: number) => (
            <motion.div
              key={p?.name || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-red-500/40 hover:bg-neutral-50 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p?.photo}
                  alt={p?.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{p?.name}</h3>
                <p className="text-red-600 text-sm">{p?.title}</p>
                <p className="mt-2 text-sm text-neutral-600">{p?.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // MERGED: Calling-all-speakers + Nominate CTA
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            {/* soft glows to match brand */}
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-red-500/15 blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-neutral-900/5 blur-3xl" />
            </div>

            <div className="relative px-6 sm:px-10 py-12">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Calling All Speakers
              </h3>
              <p className="mt-3 text-neutral-700 text-lg max-w-3xl">
                Do you or someone you know have an idea worth spreading?
                Register or nominate them now for their chance to contribute
                to “{eventTitle}” <span className="font-semibold">#TEDxSurreyUniversity2025</span>.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={registerToSpeakUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-500 transition"
                >
                  Propose a Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
