import { Link } from "react-router-dom";

interface SeasonCardProps {
  title: string;
  subtitle: string;
  to: string;
  variant: "uomo" | "donna" | "percorso";
}

const variantClasses: Record<SeasonCardProps["variant"], string> = {
  uomo: "bg-card-uomo hover:bg-card-uomo-hover",
  donna: "bg-card-donna hover:bg-card-donna-hover",
  percorso: "bg-card-percorso hover:bg-card-percorso-hover",
};

const SeasonCard = ({ title, subtitle, to, variant }: SeasonCardProps) => {
  return (
    <Link
      to={to}
      className={`group flex flex-col items-center justify-center text-center px-8 py-16 border border-border rounded-md transition-colors duration-500 ${variantClasses[variant]}`}
    >
      <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-4">
        {title}
      </h2>
      <span className="block w-12 h-px bg-foreground/30 mb-4" />
      <p className="font-serif italic text-base text-muted-foreground">
        {subtitle}
      </p>
    </Link>
  );
};

export default SeasonCard;