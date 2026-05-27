import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/linventario.jpg";

const paragrafi = [
  "Dopo alcuni anni di pensione, in cui i giorni si erano fusi l'uno nell'altro, un uomo sentì il bisogno di fare qualcosa di concreto. Decise di fare l'inventario di ogni oggetto in suo possesso. Non cercava un valore economico. Voleva che chi un giorno avrebbe svuotato la sua casa sapesse cosa aveva tra le mani, non il prezzo, ma la storia.",
  "Divenne un'ossessione. Ogni oggetto, anche il più insignificante, meritava un paragrafo. La casa si trasformò in un archivio, e lui nel suo archivista, circondato da pile di fogli che crescevano con lui.",
  "L'uomo morì un giorno qualunque. Il suo corpo fu ritrovato tra i fogli e i beni catalogati.",
  "Gli eredi arrivarono per liquidare il patrimonio. Trovarono il documento e lo sfogliarono con fastidio. Cercavano numeri, trovarono parole. «Mobili vecchi», dicevano. «Argenteria da peso. Libri da macero». Le storie scritte dall'uomo erano solo un intralcio.",
  "L'inventario finì in una scatola anonima, in cantina. Il resto in un sacco nero.",
  "Quando arrivò il momento di spedire la porcellana, qualcuno aprì la scatola. I fogli erano abbondanti e resistenti. Fecero un ottimo imballaggio.",
];

const Linventario = () => (
  <PageShell
    title="L'inventario"
    subtitle="Quando si cataloga la vita sperando che la carta la trattenga"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano seduto a una scrivania circondato da pile di fogli d'inventario" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default Linventario;