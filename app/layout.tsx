// import "./globals.css";
// import type { Metadata, Viewport } from "next";

// export const metadata: Metadata = {
//   title: "TEDx",
//   description: "Ideas worth spreading.",
//   icons: {
//     icon: "/images/favicon/favicon.ico",
//     shortcut: "/images/favicon/favicon-16x16.png",
//     apple: "/images/favicon/apple-touch-icon.png",
//   }
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
//   viewportFit: "cover",
//   themeColor: "#ffffff",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen antialiased site-bg text-neutral-900 text-[17px] md:text-[18px]">
//         {children}
//       </body>
//     </html>
//   );
// }
// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import TicketsModal from "./components/TicketsBanner"; // ⟵ make sure this path matches your file

export const metadata: Metadata = {
  title: "TEDx Surrey University",
  description: "Echoes of What’s Next",
  icons: {
    icon: "/images/favicon/favicon.ico",
    shortcut: "/images/favicon/favicon-16x16.png",
    apple: "/images/favicon/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}

        {/* ⟵ Add the banner here, at the very end of <body> */}
        <TicketsModal
          ticketUrl={process.env.NEXT_PUBLIC_TICKETS_URL ?? "https://www.eventbrite.co.uk/e/tedxsurreyuniversity-tickets-1801426889319?aff=oddtdtcreator "}
          subtitle="Limited early birds — secure your seat now."
        />
      </body>
    </html>
  );
}
