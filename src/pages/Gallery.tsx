import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const categories = ["All", "Events", "Workshops", "Cultural", "Technical"];

const images = [
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop", category: "Events", caption: "Annual Tech Fest 2024" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", category: "Events", caption: "Hackathon Winners" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop", category: "Workshops", caption: "AI/ML Workshop" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop", category: "Technical", caption: "Coding Competition" },
  { src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=400&fit=crop", category: "Cultural", caption: "Cultural Night Performance" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop", category: "Workshops", caption: "Web Development Bootcamp" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop", category: "Events", caption: "Team Building Activity" },
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop", category: "Technical", caption: "Project Expo" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop", category: "Cultural", caption: "Farewell Celebration" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop", category: "Workshops", caption: "Design Thinking Session" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop", category: "Cultural", caption: "Open Mic Night" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop", category: "Technical", caption: "Lab Sessions" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div className="py-16 bg-background">
      <div className="container">
        <SectionHeader title="Gallery" subtitle="A visual journey through our department's activities and events" />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer relative"
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors flex items-end">
                <span className="text-primary-foreground font-body text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].src.replace("w=600", "w=1200").replace("h=400", "h=800")} alt={filtered[lightbox].caption} className="w-full rounded-lg shadow-2xl" />
            <p className="text-center text-primary-foreground font-body mt-4 text-lg">{filtered[lightbox].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
