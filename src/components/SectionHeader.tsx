interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="section-heading">{title}</h2>
      <div className="gold-underline" />
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </div>
  );
}
