import content from "@/content/site.json";
import NavBar from "@/app/components/NavBar";
import Hero from "@/app/components/Hero";
import AboutSection from "@/app/components/sections/AboutSection";
import SpeakersSection from "@/app/components/sections/SpeakersSection";
import VideosSection from "@/app/components/sections/VideosSection";
//import NominateSection from "@/app/components/sections/NominateSection";
//import ScheduleSection from "@/app/components/sections/ScheduleSection";
import VenueSection from "@/app/components/sections/VenueSection";
//import WhatIsTedxSection from "@/app/components/sections/WhatIsTedxSection";
import CountdownClient from "@/app/components/CountdownClient";
import Footer from "@/app/components/Footer";


export default function Page() {
  const siteBgStyle: React.CSSProperties = {
    background:
      "radial-gradient(1400px 700px at 10% -10%, #fff1f1 0%, transparent 60%)," +
      "radial-gradient(1000px 600px at 90% 0%, #f7f7f7 0%, transparent 50%)," +
      "radial-gradient(1200px 800px at 50% 120%, #fdf6f6 0%, transparent 60%)," +
      "linear-gradient(#ffffff, #ffffff)",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="scroll-smooth text-neutral-900" style={siteBgStyle}>
      <CountdownClient dateISO={(content as any)?.event?.date} />
      <NavBar />
      <Hero />
      <AboutSection />
      <SpeakersSection />
      <VideosSection />
      <VenueSection />
      <Footer />
    </div>
  );
}
