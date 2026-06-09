import { Link } from "react-router-dom";

interface SeasonCardProps {
  title: string;
  subtitle: string;
  to: string;
  image: string;
  imageClassName?: string;
}

const SeasonCard = ({ title, subtitle, to, image, imageClassName = "" }: SeasonCardProps) => {
  return (
    <Link
      to={to}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-background transition-colors duration-500 hover:bg-foreground/[0.02]"
    >
      <div className="overflow-hidden aspect-[4/3]">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className={`w-full h-full object-cover ${imageClassName}`}
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center px-8 py-10">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-4">
          {title}
        </h2>
        <span className="block w-12 h-px bg-foreground/30 mb-4" />
        <p className="font-serif italic text-base text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

export default SeasonCard;
