"use client";

import * as React from "react";
import CountdownBanner from "@/app/components/CountdownBanner";

/**
 * Client-only wrapper that avoids any server render for the countdown.
 * It renders nothing until mounted, then shows the live timer.
 */
export default function CountdownClient({ dateISO }: { dateISO?: string }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <CountdownBanner dateISO={dateISO} />;
}
