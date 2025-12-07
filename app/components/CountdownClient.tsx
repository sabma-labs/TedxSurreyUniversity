"use client";

import * as React from "react";
// import CountdownBanner from "@/app/components/CountdownBanner"; // Removed to fix import error

/**
 * Inlined CountdownBanner to ensure self-contained execution.
 */
function CountdownBanner({ dateISO }: { dateISO?: string }) {
  // Default to a future date if none provided
  const targetDate = new Date(dateISO || "2025-11-15T09:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = React.useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(null); // Event started
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="w-full bg-red-600 text-white py-3 px-4 flex flex-wrap justify-center items-center gap-4 sm:gap-8 z-50 relative shadow-lg">
      <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-100">
        Event Starts In:
      </div>
      <div className="flex items-center gap-3 sm:gap-6 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black leading-none tabular-nums">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-medium text-red-200 mt-0.5">
              {unit}
            </span>
          </div>
        ))}
      </div>
      <a href="#tickets" className="hidden sm:inline-block bg-white text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors">
        Get Tickets
      </a>
    </div>
  );
}

/**
 * Client-only wrapper that avoids any server render for the countdown.
 * It renders nothing until mounted, then shows the live timer.
 */
export default function CountdownClient({ dateISO }: { dateISO?: string }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;

  // You can replace this with a prop later if needed
  const sponsorName = "Tencent Cloud"; 
  // Using a placeholder logo that fits on a dark background
  const sponsorLogo = "/images/sponsors/Tencent_cloud.png";

  return (
    <div className="flex flex-col w-full z-50 relative sticky top-0">
      <CountdownBanner dateISO={dateISO} />
      
      {/* Scrolling Sponsor Ticker */}
      <div className="w-full bg-neutral-950 border-b border-neutral-800 overflow-hidden py-2 select-none">
        <div className="flex w-max animate-marquee items-center">
          {/* We repeat the content to create a seamless loop */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 mx-8">
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-neutral-400">
                Official Main Sponsor
              </span>
              
              {/* Sponsor Logo & Name Container */}
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <img 
                  src={sponsorLogo} 
                  alt={`${sponsorName} Logo`}
                  className="h-4 w-auto object-contain brightness-0 invert opacity-90" 
                />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white">
                  {sponsorName}
                </span>
              </div>

              {/* Separator */}
              <div className="h-1 w-1 rounded-full bg-red-600 ml-4" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* Pauses the scroll on hover for readability */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}