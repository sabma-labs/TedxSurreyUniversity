import { Mail, Phone, Instagram, Linkedin, Youtube } from "lucide-react";
import BrandLogo from "@/app/components/BrandLogo";
import content from "@/content/site.json";

export default function Footer() {
  const socials = (content as any)?.contact?.socials || {};
  const footerLogoUrl = (content as any)?.brand?.footerLogoUrl as string | undefined;
  return (
    <footer className="bg-black text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-white">
          <BrandLogo className="h-9 w-auto" srcOverride={footerLogoUrl} alt="TEDx footer logo" />
          <p className="mt-3 text-neutral-400 text-sm">An independently organized TEDx event.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Event</div>
          <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
            <li>{(content as any)?.event?.dateLabel}</li>
            <li>{(content as any)?.event?.timeLabel}</li>
            <li>{(content as any)?.event?.location}</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> {(content as any)?.contact?.email}</li>
            <li className="flex items-center gap-2"><Phone size={16} /> {(content as any)?.contact?.phone}</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Social</div>
          <div className="mt-3 flex items-center gap-4 text-neutral-300">
            {socials?.instagram && <a href={socials.instagram} aria-label="Instagram" className="hover:text-white"><Instagram /></a>}
            {socials?.linkedin &&  <a href={socials.linkedin}  aria-label="LinkedIn"  className="hover:text-white"><Linkedin /></a>}
            {socials?.youtube &&   <a href={socials.youtube}   aria-label="YouTube"   className="hover:text-white"><Youtube /></a>}
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-neutral-400 border-t border-neutral-800">
        © {new Date().getFullYear()} {(content as any)?.brand?.name || "TEDxYourCity"}. All rights reserved. This independent TEDx event is operated under license from TED.
      </div>
    </footer>
  );
}
