import { Link } from "react-router-dom";
import { Eye, Target, Calendar, Users, Image, GraduationCap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";
import SectionHeader from "@/components/SectionHeader";

import img1 from "@/assets/gallery/1.jpg";
import img11 from "@/assets/gallery/11.jpg";
import img6 from "@/assets/gallery/6.jpg";
import img8 from "@/assets/gallery/8.jpg";
import img10 from "@/assets/gallery/10.jpg";
import img12 from "@/assets/gallery/12.jpg";



const batches = [
  { year: "2025", students: "60 Students", color: "bg-primary" },
  { year: "2026", students: "65 Students", color: "bg-navy" },
  { year: "2027", students: "70 Students", color: "bg-primary" },
  { year: "2028", students: "72 Students", color: "bg-navy" },
];

const galleryImages = [
  img1,
  img11,
  img6,
  img8,
  img10,
  img12,
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={heroBanner} alt="CSD Department" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Computer Science & Design
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Innovating Technology. Designing the Future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <a href="https://registration.csdaura.in" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-accent text-accent-foreground rounded-md font-body font-semibold hover:brightness-110 transition-all shadow-lg">Explore Events</a>
            {/* <Link
              to="/committee"
              className="px-8 py-3 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-md font-body font-semibold hover:bg-primary-foreground/20 transition-all"
            >
              Meet Our Committee
            </Link> */}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader title="Vision & Mission" subtitle="Guiding principles of our department" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-md p-8 border border-border card-hover">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To become a center of excellence in Computer Science and Design, producing innovative professionals who drive technological advancement and creative solutions for society's challenges.
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-md p-8 border border-border card-hover">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To provide quality education integrating computer science with design thinking, foster research and innovation, and equip students with skills to excel in the ever-evolving technology landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Ongoing Events CTA */}
<section className="py-16 bg-muted/50">
  <div className="container text-center">
    <SectionHeader 
      title="Events" 
      subtitle="Check out our exciting events and competitions" 
    />

    <a
      href="https://registration.csdaura.in"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-md font-body font-semibold hover:brightness-110 transition-all shadow-lg"
    >
      <Calendar size={18} /> View Ongoing Events
    </a>

  </div>
</section>


      {/* Gallery Preview */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader title="Department Memories" subtitle="Capturing our best moments and achievements" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={img}
                  alt={`Department memory ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-medium hover:bg-navy transition-colors">
              <Image size={18} /> View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Batches */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <SectionHeader title="Our Batches" subtitle="Explore the journey of each batch through their years" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {batches.map((batch) => (
              <Link
                key={batch.year}
                to={`/batches#${batch.year}`}
                className="bg-card rounded-lg shadow-md p-6 text-center card-hover border border-border group"
              >
                <div className={`w-16 h-16 rounded-full ${batch.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <GraduationCap className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Batch {batch.year}</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">{batch.students}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/batches" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-medium hover:bg-navy transition-colors">
              <Users size={18} /> View All Batches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
