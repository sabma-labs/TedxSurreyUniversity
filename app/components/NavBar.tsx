"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Instagram,
  Linkedin,
  Youtube,
  AlertCircle,
} from "lucide-react";
import BrandLogo from "@/app/components/BrandLogo";
import content from "@/content/site.json";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [ticketsModal, setTicketsModal] = React.useState(false);

  const links = [
    { href: "/about", label: "About" },
    //{ href: "/teams", label: "Teams" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/#speakers", label: "Speakers" },
    { href: "/#videos", label: "Videos" },
    { href: "/#venue", label: "Venue" },
    //{ href: "/#schedule", label: "Schedule" },
  ];

  const ticketSalesOpen = Boolean((content as any)?.event?.ticketSalesOpen);
  const registerUrl = (content as any)?.event?.registerUrl || "#";
  const socials = (content as any)?.contact?.socials || {};

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Homepage">
            <BrandLogo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-base lg:text-lg font-medium text-neutral-800 hover:text-red-600 hover:bg-neutral-100 rounded-md transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Get Tickets button in navbar */}
            {ticketSalesOpen ? (
              <Link
                href={registerUrl}
                target="_blank"
                className="ml-2 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
              >
                Get Tickets
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setTicketsModal(true)}
                className="ml-2 inline-flex items-center justify-center rounded-full bg-red-600/70 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600/80"
              >
                Get Tickets
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
          >
            <Menu />
          </button>
        </nav>
      </header>

      {/* Mobile sidebar */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85%] bg-white shadow-xl flex flex-col">
            <div className="h-16 flex items-center justify-between px-4 border-b border-neutral-200">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <BrandLogo />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-neutral-100"
              >
                <X />
              </button>
            </div>

            {/* Links */}
            <nav className="px-4 py-4 space-y-2 text-neutral-900">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium hover:bg-neutral-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Socials + Tickets at the bottom */}
            <div className="mt-auto px-4 py-4 border-t border-neutral-200">
              <div className="mb-4 flex items-center gap-4 text-neutral-700">
                {socials?.instagram && (
                  <a
                    href={socials.instagram}
                    aria-label="Instagram"
                    target="_blank"
                    className="hover:text-red-600"
                  >
                    <Instagram />
                  </a>
                )}
                {socials?.linkedin && (
                  <a
                    href={socials.linkedin}
                    aria-label="LinkedIn"
                    target="_blank"
                    className="hover:text-red-600"
                  >
                    <Linkedin />
                  </a>
                )}
                {socials?.youtube && (
                  <a
                    href={socials.youtube}
                    aria-label="YouTube"
                    target="_blank"
                    className="hover:text-red-600"
                  >
                    <Youtube />
                  </a>
                )}
              </div>

              {ticketSalesOpen ? (
                <Link
                  href={registerUrl}
                  target="_blank"
                  className="w-full inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-500"
                  onClick={() => setOpen(false)}
                >
                  Get Tickets
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setTicketsModal(true);
                  }}
                  className="w-full inline-flex items-center justify-center rounded-full bg-red-600/70 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600/80"
                >
                  Get Tickets
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tickets Modal (used by NavBar buttons when sales not open) */}
      {ticketsModal && (
        <div
          className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setTicketsModal(false)}
        >
          <div className="max-w-md w-full rounded-2xl bg-white p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="text-red-600" />
            </div>
            <h3 className="text-xl font-bold">Ticket sales will start soon</h3>
            <p className="mt-2 text-neutral-600">
              We’re finalizing details. Follow our social channels for the announcement!
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-neutral-700">
              {socials?.instagram && (
                <a href={socials.instagram} target="_blank" rel="noreferrer" className="hover:text-red-600">
                  Instagram
                </a>
              )}
              {socials?.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-600">
                  LinkedIn
                </a>
              )}
              {socials?.youtube && (
                <a href={socials.youtube} target="_blank" rel="noreferrer" className="hover:text-red-600">
                  YouTube
                </a>
              )}
            </div>
            <button
              onClick={() => setTicketsModal(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-500"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
