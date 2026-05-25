import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/linventario-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Dopo alcuni anni di pensione, in cui i giorni si erano fusi in una monotonia priva di contorni, una donna sentì l'impellente necessità di dare un senso al suo tempo. Decise di intraprendere un compito definitivo: l'inventario di ogni oggetto in suo possesso. Non cercava un valore economico, ma una prova di passaggio. Voleva che chi un giorno si sarebbe trovato a svuotare la sua casa conoscesse il vero valore di quegli oggetti — non quello venale, ma quello intimo, quello che rappresentava un pezzo della sua vita.",
  "L'inventario divenne rapidamente un'ossessione sistematica che divorava ogni suo istante. Ogni oggetto, anche il più insignificante, aveva diritto a un paragrafo. La sua casa si trasformò in un archivio vivente, e lei, la sua indefessa archivista, si perse tra i suoi stessi ricordi, convinta che la carta potesse trattenere la vita.",
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
