import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const AvventurePostumeDiPersonaggiIllustri = () => {
  return (
    <PageShell title="Avventure postume di personaggi illustri" subtitle="Storie di chi, morto, non ha smesso di far parlare di sé">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Roberto Alajmo, Marco Carapezza</p>
          <p className="text-base text-foreground/70 mt-1">Sellerio Editore Palermo, 2025</p>
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

export default AvventurePostumeDiPersonaggiIllustri;
