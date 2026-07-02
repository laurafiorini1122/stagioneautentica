import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const SocrateAgataEIlFuturo = () => {
  return (
    <PageShell title="Socrate, Agata e il futuro" subtitle="L'arte di invecchiare con filosofia">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Beppe Severgnini</p>
          <p className="text-base text-foreground/70 mt-1">Rizzoli, 2025</p>
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

export default SocrateAgataEIlFuturo;
