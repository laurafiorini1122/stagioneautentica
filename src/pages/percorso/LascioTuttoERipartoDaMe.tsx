import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LascioTuttoERipartoDaMe = () => {
  return (
    <PageShell title="Lascio tutto e riparto da me" subtitle="Dove comincia la libertà">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Manfredi Roesler Franz</p>
          <p className="text-base text-foreground/70 mt-1">De Agostini, 2025</p>
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

export default LascioTuttoERipartoDaMe;
