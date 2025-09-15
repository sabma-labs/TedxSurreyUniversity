import content from "@/content/site.json";
import VideoGallery from "@/app/components/VideoGallery";

export default function VideosSection() {
  const videos = (content as any)?.videos || [];

  // Full-bleed dark background with subtle red glow
  const bgStyle: React.CSSProperties = {
    background:
      "radial-gradient(900px 500px at 10% -10%, rgba(239,68,68,0.10) 0%, transparent 60%)," +
      "radial-gradient(1000px 600px at 90% 0%, rgba(255,255,255,0.05) 0%, transparent 50%)," +
      "linear-gradient(#0a0a0a, #0a0a0a)",
  };

  return (
    <section id="videos" className="py-16 sm:py-20" style={bgStyle}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {(content as any)?.videosHeading || "Featured Talks"}
          </h2>
          <p className="mt-3 text-white/80 text-lg max-w-3xl">
            Immerse yourself in standout talks from TEDxSurreyUniversity. Use the arrows or let the carousel play automatically. Click a slide to watch instantly.
          </p>
        </div>

        <VideoGallery videos={videos} />
      </div>
    </section>
  );
}
