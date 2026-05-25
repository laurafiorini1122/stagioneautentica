import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/linventario.jpg";

const paragrafi = [
  "Dopo alcuni anni di pensione, in cui i giorni si erano fusi in una monotonia priva di contorni, un uomo sentì l'impellente necessità di dare un senso al suo tempo. Decise di intraprendere un compito definitivo: l'inventario di ogni oggetto in suo possesso. Non cercava un valore economico, ma una prova di passaggio. Voleva che chi un giorno si sarebbe trovato a svuotare la sua casa conoscesse il vero valore di quegli oggetti — non quello venale, ma quello intimo, quello che rappresentava un pezzo della sua vita.",
  "L'inventario divenne rapidamente un'ossessione sistematica che divorava ogni suo istante. Ogni oggetto, anche il più insignificante, aveva diritto a un paragrafo. La sua casa si trasformò in un archivio vivente, e lui, il suo indefesso archivista, si perse tra i suoi stessi ricordi, convinto che la carta potesse trattenere la vita.",
  "L'uomo morì un giorno qualunque. Il suo corpo fu ritrovato tra le pile di fogli e i beni catalogati.",
  "Gli eredi arrivarono per liquidare il patrimonio. Trovarono il corposo documento e lo sfogliarono con fastidio. Cercavano numeri, trovarono parole. «Mobili vecchi», dicevano. «Argenteria da peso. Libri da macero». Le storie minuziose scritte dall'uomo erano solo un intralcio alla valutazione commerciale.",
  "L'inventario finì in una scatola anonima, sepolto in una cantina umida. L'intero archivio di una vita venne gettato in un sacco nero. L'uomo aveva cercato di perpetuare la sua memoria attraverso gli oggetti, ma come gli oggetti stessi, anche la sua memoria si era rivelata effimera: l'oblio era completo. Non restava l'oggetto, non restava la parola, non restava l'uomo.",
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