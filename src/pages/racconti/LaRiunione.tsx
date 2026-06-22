import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import laRiunioneImg from "@/assets/unuomo-la-riunione.png";

const LaRiunione = () => {
  return (
    <PageShell title="La riunione" bgClassName="bg-page-uomo">
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={laRiunioneImg}
          alt="La riunione"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-16 mb-8">
        <Link
          to="/un-uomo"
          className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Torna a Un uomo
        </Link>
      </div>
    </PageShell>
  );
};

export default LaRiunione;
