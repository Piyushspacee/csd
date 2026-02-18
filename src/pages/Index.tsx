import { Link } from "react-router-dom";
import { Eye, Target } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useState, useEffect } from "react";

// ✅ Hero Slider Images
import H1 from "../assets/gallery/D1.jpg";
import H2 from "../assets/gallery/D2.jpg";
import H3 from "../assets/gallery/D3.jpg";
import H4 from "../assets/gallery/E1.jpg";
import H5 from "../assets/gallery/F1.jpg";
import H6 from "../assets/gallery/P1.jpg";
import H7 from "../assets/hero-banner.png";

// ✅ Gallery Preview Images
import D1 from "../assets/gallery/D1.jpg";
import D2 from "../assets/gallery/D2.jpg";
import D3 from "../assets/gallery/D3.jpg";
import E1 from "../assets/gallery/E1.jpg";
import F1 from "../assets/gallery/F1.jpg";
import P1 from "../assets/gallery/P1.jpg";

const Index = () => {
  /* ---------------- HERO SLIDER ---------------- */
  const heroImages = [H7, H2, H3, H4, H5, H6, H1];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- COUNTDOWN ---------------- */
  const targetDate = new Date("Feb 23, 2026 10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60));

  /* ---------------- LIGHTBOX ---------------- */
  const previewImages = [D1, D2, D3, E1, F1, P1];
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      {/* ================= HERO SLIDER ================= */}
     <section className="relative min-h-[70vh] md:min-h-[85vh] overflow-hidden">



        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
       {/* Overlay */}
<div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center text-white px-6">

  {/* Department Line */}
  <p className="text-sm md:text-base tracking-widest uppercase text-gray-300 mb-3">
    <h2>Department of Computer Science & Design</h2>
  </p>

  {/* Event Title */}
  <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-8">
    AURA <span className="font-bold">2.0</span>
  </h1>
  <p className="mt-2 text-sm md:text-base text-gray-300 tracking-wide">
  Inter-College Technical & Non-Technical Event
</p>
  <a
  href="https://registration.csdaura.in"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 px-6 md:px-10 py-4 bg-blue-700 hover:bg-blue-800 rounded-md font-medium transition-colors duration-300 text-center"
>
  <span className="block text-sm md:text-base">
    Register for AURA 2.0
  </span>
  <span className="block text-xs md:text-sm text-blue-100 mt-1">
    Up to ₹50,000 Prize Pool
  </span>
</a>
</div>
      </section>


      {/* ================= VISION & MISSION ================= */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader
            title="Vision & Mission"
            subtitle="Guiding principles of our department"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
            <div className="bg-card rounded-lg shadow-md p-8 border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To become a center of excellence in Computer Science and Design,
                producing innovative professionals who drive technological advancement
                and creative solutions for society's challenges.
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-md p-8 border border-border">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide quality education integrating computer science with
                design thinking, foster research and innovation, and equip students
                with skills to excel in the ever-evolving technology landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">
            Gallery Highlights
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {previewImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => setLightbox(index)}
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-md font-semibold"
            >
              View Full Gallery
            </Link>
          </div>
        </div>

        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <img
              src={previewImages[lightbox]}
              alt="Preview"
              className="max-w-5xl w-full rounded-lg"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
