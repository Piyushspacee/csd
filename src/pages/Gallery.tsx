import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const categories = ["All", "Events", "Workshops", "Cultural", "Technical"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  // 🔥 Auto import all images inside src/assets/gallery
const importedImages = Object.entries(
  import.meta.glob("../assets/gallery/*.{jpg,jpeg,png}", { eager: true })
)
  .filter(([path]) =>
    !path.includes("DF") // 👈 hides faculty images like DF1.jpg
  )
  .map(([_, module]: any) => module.default);


  // Default all images as "Events" category (you can customize later)
  const images = importedImages.map((src: string, index: number) => ({
    src,
    category: "Events",
    caption: `Event ${index + 1}`,
  }));

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <div className="py-16 bg-background">
      <div className="container">
        <SectionHeader
          title="Gallery"
          subtitle="A visual journey through our department's activities and events"
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-blue-900 text-white"
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
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end">
                <span className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
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
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-center text-white mt-4 text-lg">
              {filtered[lightbox].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
