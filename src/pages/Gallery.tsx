import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const categories = ["All", "Events", "Workshops", "Cultural", "Technical"];
import img1 from "@/assets/gallery/1.jpg";
import img10 from "@/assets/gallery/10.jpg";
import img11 from "@/assets/gallery/11.jpg";
import img12 from "@/assets/gallery/12.jpg";
import img13 from "@/assets/gallery/13.jpg";
import img14 from "@/assets/gallery/14.jpg";
import img15 from "@/assets/gallery/15.jpg";
import img16 from "@/assets/gallery/16.jpg";
import img17 from "@/assets/gallery/17.jpg";
import img6 from "@/assets/gallery/6.jpg";
import img8 from "@/assets/gallery/8.jpg";
import img19 from "@/assets/gallery/19.jpg";
import img18 from "@/assets/gallery/19.jpg";

const images = [
  { src: img1, category: "Events", caption: "Enginers Day" },
  { src: img11, category: "Events", caption: "" },
{ src: img6, category: "Events", caption: "" },
{ src: img8, category: "Events", caption: "" },
{ src: img10, category: "Events", caption: "" },
{ src: img12, category: "Events", caption: "" },
{ src: img13, category: "Events", caption: "" },
{ src: img14, category: "Events", caption: "" },
{ src: img15, category: "Events", caption: "" },
{ src: img16, category: "Events", caption: "" },
{ src: img17, category: "Events", caption: "" },
{ src: img18, category: "Events", caption: "" },
{ src: img19, category: "Events", caption: "" },

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
