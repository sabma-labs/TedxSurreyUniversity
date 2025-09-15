import { AlertCircle } from "lucide-react";
import content from "@/content/site.json";

export default function ScheduleSection() {
  const items = (((content as any)?.schedule?.items) || []) as any[];
  const hasSchedule = Array.isArray(items) && items.length > 0;

  return (
    <section id="schedule" className="py-16 sm:py-20 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {(content as any)?.schedule?.heading || "Schedule"}
        </h2>

        {hasSchedule ? (
          <ol className="mt-10 max-w-2xl relative border-l border-neutral-200">
            {items.map((it: any, idx: number) => (
              <li key={idx} className="ml-6 mb-8">
                <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-red-600" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="text-red-600 font-semibold min-w-[70px]">{it?.time}</div>
                  <div className="text-lg font-semibold">{it?.title}</div>
                </div>
                <p className="mt-1 text-neutral-600">{it?.desc}</p>
              </li>
            ))}
          </ol>
        ) : (
          <div className="mt-10 max-w-4xl">
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-8 sm:p-10 flex items-center gap-4">
              <AlertCircle className="text-red-600 shrink-0" />
              <p className="text-neutral-700 text-lg">
                Event schedule <span className="font-semibold">coming soon</span>. We’ll publish timings as soon as they’re finalized.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
