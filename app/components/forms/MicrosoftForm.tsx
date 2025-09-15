import * as React from "react";

export default function MicrosoftFormEmbed({
  formUrl,
  title = "Form"
}: { formUrl: string; title?: string }) {
  // Ensure embed=true is present
  let src = formUrl;
  try {
    const u = new URL(formUrl);
    if (u.searchParams.get("embed") !== "true") {
      u.searchParams.set("embed", "true");
      src = u.toString();
    }
  } catch {
    // keep original if URL parsing fails
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
      <iframe
        title={title}
        src={src}
        className="w-full"
        style={{ minHeight: 950 }}  // adjust if your form is longer
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
      <div className="p-3 text-sm text-neutral-600 sm:hidden">
        If the form doesn’t load,{" "}
        <a href={src} target="_blank" rel="noreferrer" className="text-red-600 underline font-medium">
          open it in a new tab
        </a>.
      </div>
    </div>
  );
}
