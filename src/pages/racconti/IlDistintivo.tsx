import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import ilDistintivoImg from "@/assets/unuomo-il-distintivo.png";

const IlDistintivo = () => {
  return (
    <PageShell
      title="Il distintivo"
      subtitle="Un nome scritto su un cartellino è ancora un'identità"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 mx-auto max-w-[60%] overflow-hidden rounded-sm">
        <img
          src={ilDistintivoImg}
          alt="Il distintivo"
          width={2048}
          height={2048}
          loading="lazy"
          className="w-full h-auto"
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

export default IlDistintivo;
