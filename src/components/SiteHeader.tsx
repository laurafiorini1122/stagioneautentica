import { Link } from "react-router-dom";

interface SiteHeaderProps {
  minimal?: boolean;
  hideLogo?: boolean;
}

const SiteHeader = ({ minimal = false, hideLogo = false }: SiteHeaderProps) => {
  if (minimal) {
    return (
      <header
        className={`border-b border-border/60 ${hideLogo ? "hidden md:block" : ""}`}
      >
        <div
          className={`container py-6 flex items-center ${
            hideLogo ? "justify-end" : "justify-between"
          }`}
        >
          {!hideLogo && (
            <Link to="/" className="font-serif text-xl text-foreground">
              La stagione più autentica
            </Link>
          )}
          <nav className="hidden md:flex gap-8 font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/un-uomo" className="hover:text-foreground transition-colors">Un uomo</Link>
            <Link to="/una-donna" className="hover:text-foreground transition-colors">Una donna</Link>
            <Link to="/tracce" className="hover:text-foreground transition-colors">Tracce</Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-background pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="container text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-foreground tracking-tight">
          La stagione più autentica
        </h1>
        <span className="block w-16 h-px bg-foreground/30 mx-auto mt-8" />
      </div>
    </header>
  );
};

export default SiteHeader;
