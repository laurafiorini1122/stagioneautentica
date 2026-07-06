import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LiberatiDellaBravaBambina = () => {
  return (
    <PageShell title="Liberati della brava bambina" subtitle="Come smettere di vivere per compiacere gli altri">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Maura Gancitano, Andrea Colamedici</p>
          <p className="text-base text-foreground/70 mt-1">HarperCollins Italia, 2019</p>
        </div>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce/le-letture" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna alle letture
        </Link>
      </div>
    </PageShell>
  );
};

export default LiberatiDellaBravaBambina;
