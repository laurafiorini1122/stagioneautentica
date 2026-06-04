import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

interface PageShellProps {
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  bgClassName?: string;
  wide?: boolean;
}

const PageShell = ({ title, subtitle, children, bgClassName = "bg-background", wide = false }: PageShellProps) => {
  return (
    <div className={`min-h-screen ${bgClassName} flex flex-col`}>
      <SiteHeader minimal />
      <section className="container py-16 md:py-24 text-center">
        <h1 className="font-serif text-4xl md:text-6xl text-foreground tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <>
            <span className="block w-12 h-px bg-foreground/30 mx-auto my-6" />
            <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
              {subtitle}
            </p>
          </>
        )}
      </section>
      <main className={`container ${wide ? "max-w-7xl" : "max-w-3xl"} flex-1 pb-16 w-full`}>{children}</main>
      <SiteFooter />
    </div>
  );
};

export default PageShell;