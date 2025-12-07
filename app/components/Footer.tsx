import { Mail, Phone, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import BrandLogo from "@/app/components/BrandLogo";
import content from "@/content/site.json";

export default function Footer() {
  const socials = (content as any)?.contact?.socials || {};
  const footerLogoUrl = (content as any)?.brand?.footerLogoUrl as string | undefined;

  // Sponsor Data
  const sponsorName = "Tencent Cloud"; 
  // Using a placeholder for preview, but keeping your path in logic
  const sponsorLogo = "/images/sponsors/Tencent_cloud.png";
  
  return (
    <footer className="bg-black text-neutral-200 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* COLUMN 1: Brand & Sponsor */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <BrandLogo className="text-2xl" srcOverride={footerLogoUrl} alt="TEDx footer logo" />
              <p className="mt-4 text-neutral-500 text-sm leading-relaxed max-w-xs">
                An independently organized TEDx event, fostering innovation and dialogue within our community.
              </p>
            </div>

            {/* SPONSOR SECTION ADDED HERE */}
            <div className="mt-8 pt-8 border-t border-neutral-900">
              <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-3">
                Headline Sponsor
              </p>
              <div className="group flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                 {/* Note: I added a white background/padding to the image container 
                    to ensure the logo pops against the black footer.
                 */}
                 <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm border border-white/5 group-hover:border-white/20 transition-colors">
                   <img 
                     src={sponsorLogo} 
                     alt={`${sponsorName} Logo`} 
                     className="h-6 w-auto object-contain brightness-0 invert" 
                   />
                 </div>
                 <span className="font-semibold text-sm text-neutral-300 group-hover:text-white transition-colors">
                   {sponsorName}
                 </span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Event Info */}
          <div>
            <div className="font-bold text-white tracking-wide">Event Details</div>
            <ul className="mt-6 space-y-4 text-neutral-400 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">When</span>
                <span>{(content as any)?.event?.dateLabel}</span>
                <span>{(content as any)?.event?.timeLabel}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">Where</span>
                <span>{(content as any)?.event?.location}</span>
                <a href="#" className="inline-flex items-center gap-1 text-red-500 hover:text-red-400 text-xs mt-1 font-medium transition-colors">
                  Get Directions <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact */}
          <div>
            <div className="font-bold text-white tracking-wide">Contact Us</div>
            <ul className="mt-6 space-y-4 text-neutral-400 text-sm">
              <li>
                <div className="text-neutral-500 text-xs uppercase tracking-wider font-semibold mb-1">Email</div>
                <a href={`mailto:${(content as any)?.contact?.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={16} className="text-red-600" /> 
                  {(content as any)?.contact?.email}
                </a>
              </li>
              <li>
                <div className="text-neutral-500 text-xs uppercase tracking-wider font-semibold mb-1">Phone</div>
                <a href={`tel:${(content as any)?.contact?.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={16} className="text-red-600" /> 
                  {(content as any)?.contact?.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Socials */}
          <div>
            <div className="font-bold text-white tracking-wide">Follow Us</div>
            <p className="mt-4 text-neutral-500 text-sm mb-6">
              Stay updated with the latest news and speaker announcements.
            </p>
            <div className="flex items-center gap-4">
              {socials?.instagram && (
                <a 
                  href={socials.instagram} 
                  aria-label="Instagram" 
                  className="bg-neutral-900 p-2 rounded-full text-neutral-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socials?.linkedin && (
                <a 
                  href={socials.linkedin} 
                  aria-label="LinkedIn" 
                  className="bg-neutral-900 p-2 rounded-full text-neutral-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {socials?.youtube && (
                <a 
                  href={socials.youtube} 
                  aria-label="YouTube" 
                  className="bg-neutral-900 p-2 rounded-full text-neutral-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  <Youtube size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="bg-neutral-950 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-neutral-500 text-center sm:text-left">
            © {new Date().getFullYear()} {(content as any)?.brand?.name || "TEDxYourCity"}. All rights reserved.
          </div>
          <div className="text-[10px] uppercase tracking-widest text-neutral-600 text-center sm:text-right">
            This independent TEDx event is operated under license from TED.
          </div>
        </div>
      </div>
    </footer>
  );
}
