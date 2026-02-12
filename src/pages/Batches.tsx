import { Link } from "react-router-dom";
import { GraduationCap, Award, Briefcase, Code, Camera } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const batches = [
  {
    year: "2025",
    students: 60,
    highlights: ["15+ placed in top MNCs", "3 startup founders", "Best project award at state level"],
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop",
  },
  {
    year: "2026",
    students: 65,
    highlights: ["Active in 5+ hackathons", "Published 8 research papers", "Department event organizers"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop",
  },
  {
    year: "2027",
    students: 70,
    highlights: ["Winners of inter-college fest", "Built campus mobile app", "Community outreach initiatives"],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=400&fit=crop",
  },
  {
    year: "2028",
    students: 72,
    highlights: ["Newest cohort", "Active learning circles", "First-year project showcase planned"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
  },
];

const icons = [Briefcase, Award, Code, Camera];

export default function Batches() {
  return (
    <div className="py-16 bg-background">
      <div className="container">
        <SectionHeader title="Our Batches" subtitle="Each batch brings its unique energy, talent, and achievements to the department" />

        <div className="space-y-12 max-w-4xl mx-auto">
          {batches.map((batch, i) => (
            <div key={batch.year} id={batch.year} className="bg-card rounded-lg shadow-md border border-border overflow-hidden card-hover">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img src={batch.image} alt={`Batch ${batch.year}`} className="w-full h-full object-cover min-h-[200px]" loading="lazy" />
                </div>
                <div className="p-8 md:w-3/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <GraduationCap className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Batch {batch.year}</h3>
                      <p className="font-body text-sm text-muted-foreground">{batch.students} Students</p>
                    </div>
                  </div>
                  <h4 className="font-body font-semibold text-foreground mb-3">Highlights</h4>
                  <ul className="space-y-2 mb-4">
                    {batch.highlights.map((h, j) => {
                      const Icon = icons[j % icons.length];
                      return (
                        <li key={j} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                          <Icon size={16} className="text-accent flex-shrink-0" />
                          {h}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
