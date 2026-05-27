import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/linventario-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Dopo alcuni anni di pensione, in cui i giorni si erano fusi l'uno nell'altro, una donna sentì il bisogno di fare qualcosa di concreto. Decise di fare l'inventario di ogni oggetto in suo possesso. Non cercava un valore economico. Voleva che chi un giorno avrebbe svuotato la sua casa sapesse cosa aveva tra le mani, non il prezzo, ma la storia.",
  "Divenne un'ossessione. Ogni oggetto, anche il più piccolo, meritava un paragrafo. La casa si trasformò in un archivio, e lei nella sua archivista, circondata da pile di fogli che non smettevano di crescere.",
];

const LinventarioDonna = () => (
  <PageShell title="L'inventario" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Se catalogo tutto quello che ho vissuto, resterà qualcosa di me</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna anziana scrive l'inventario di ogni oggetto della sua casa" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="L'inventario" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LinventarioDonna;
