import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  description: string;
  fee: string;
  image: string;
  slug?: string;
}

export default function EventCard({ title, description, fee, image, slug }: EventCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden card-hover border border-border">
      <div className="aspect-video bg-muted overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-body font-semibold text-accent">{fee}</span>
          <Link
            to={slug ? `/events#${slug}` : "/events"}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-body font-medium hover:bg-navy transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
