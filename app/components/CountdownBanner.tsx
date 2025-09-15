"use client";

import * as React from "react";

function useCountdown(targetISO: string) {
  const target = React.useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(target - now, 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CountdownBanner({ dateISO }: { dateISO?: string }) {
  const iso = dateISO || new Date().toISOString();
  const { days, hours, minutes, seconds } = useCountdown(iso);

  return (
    <section id="countdown-banner" className="bg-red-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-center">
          <div className="inline-flex divide-x divide-white/20 rounded-full border border-white/20 overflow-hidden">
            {[{ label: "Days", value: days }, { label: "Hours", value: hours }, { label: "Min", value: minutes }, { label: "Sec", value: seconds }].map(
              (k) => (
                <div key={k.label} className="px-4 sm:px-6 py-2 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black tabular-nums text-white">
                    {String(k.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/80">{k.label}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
