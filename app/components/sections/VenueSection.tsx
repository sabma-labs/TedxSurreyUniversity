import { ExternalLink } from "lucide-react";
import content from "@/content/site.json";

export default function VenueSection() {
  return (
    <section id="venue" className="py-16 sm:py-20 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Venue</h2>
            <p className="mt-4 text-neutral-700 text-lg max-w-3xl">
              Join us at{" "}
              <span className="font-semibold text-neutral-900">
                {(content as any)?.event?.location}
              </span>. Plan your trip using the map.
            </p>
            <a
              href={(content as any)?.event?.addressLink || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 rounded-full border border-neutral-300 px-5 py-2 font-semibold hover:bg-neutral-100"
            >
              Open in Maps <ExternalLink size={16} />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200">
            <iframe
              title="Venue map"
              src="https://maps.google.com/maps?q=Guildford&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[380px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
