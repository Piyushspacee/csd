import { Linkedin, Mail } from "lucide-react";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
}

export default function MemberCard({ name, role, image, email, linkedin }: MemberCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden card-hover border border-border text-center p-6">
      <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden bg-muted border-4 border-accent/30">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
      <p className="font-body text-sm text-accent font-medium mb-3">{role}</p>
      <div className="flex justify-center gap-3">
        {email && (
          <a href={`mailto:${email}`} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Mail size={16} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
