"use client";

import * as React from "react";
import content from "@/content/site.json";

export default function BrandLogo({
  className = "h-8 w-auto",
  srcOverride,
  alt,
}: {
  className?: string;
  /** Optional: force a different image source (e.g., for footer) */
  srcOverride?: string;
  alt?: string;
}) {
  const name = ((content as any)?.brand?.name as string) || "TEDxYourCity";
  const logoUrl =
    srcOverride || ((content as any)?.brand?.logoUrl as string | undefined);
  const logoText = ((content as any)?.brand?.logoText as string) || name;

  return logoUrl ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={logoUrl} alt={alt || `${name} logo`} className={className} />
  ) : (
    <div className="font-black tracking-tight text-xl">
      <span className="text-red-600">TEDx</span>
      {logoText.replace("TEDx", "")}
    </div>
  );
}
